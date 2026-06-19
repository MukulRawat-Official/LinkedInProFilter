chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  let url = new URL(details.url);

  // Check if we are actively on the LinkedIn job search page
  if (
    url.hostname.includes("linkedin.com") &&
    url.pathname.includes("/jobs/search/")
  ) {
    // Grab the full profile data object
    const data = await chrome.storage.local.get([
      "profiles",
      "lastActiveProfile",
    ]);

    // Safety check: Ensure profiles exist before attempting to apply them
    if (!data.profiles || !data.lastActiveProfile) return;

    // Isolate the settings of the currently active workspace
    const settings = data.profiles[data.lastActiveProfile];
    let params = new URLSearchParams(url.search);
    let changed = false;

    // Apply Time Filter and Sort
    if (settings.timeFilter) {
      let targetTime = "r" + settings.timeFilter;
      if (params.get("f_TPR") !== targetTime) {
        params.set("f_TPR", targetTime);
        changed = true;
      }
      if (params.get("sortBy") !== "DD") {
        params.set("sortBy", "DD");
        changed = true;
      }
    }

    // Apply Target Companies from the active profile's "famous" array
    if (settings.famous && settings.famous.length > 0) {
      let cleanIds = settings.famous.join(",");
      if (params.get("f_C") !== cleanIds) {
        params.set("f_C", cleanIds);
        changed = true;
      }
    }

    // Apply Experience Levels
    if (settings.experience && settings.experience.length > 0) {
      let expString = settings.experience.join(",");
      if (params.get("f_E") !== expString) {
        params.set("f_E", expString);
        changed = true;
      }
    }

    // Redirect seamlessly if we altered the URL parameters
    if (changed) {
      let newUrl = url.origin + url.pathname + "?" + params.toString();
      chrome.tabs.update(details.tabId, { url: newUrl });
    }
  }
});
