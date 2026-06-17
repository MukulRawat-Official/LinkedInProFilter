chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  let url = new URL(details.url);

  // Check if we are actively on the LinkedIn job search page
  if (
    url.hostname.includes("linkedin.com") &&
    url.pathname.includes("/jobs/search/")
  ) {
    // Grab the user's saved settings from the popup menu
    const settings = await chrome.storage.local.get([
      "timeFilter",
      "companyIds",
      "experience",
    ]);

    let params = new URLSearchParams(url.search);
    let changed = false;

    // Apply 24-hour and Most Recent rules if the toggle is ON
    if (settings.timeFilter) {
      if (params.get("f_TPR") !== "r86400") {
        params.set("f_TPR", "r86400");
        changed = true;
      }
      if (params.get("sortBy") !== "DD") {
        params.set("sortBy", "DD");
        changed = true;
      }
    }

    // Apply Target Companies if the text box isn't empty
    if (settings.companyIds) {
      let cleanIds = settings.companyIds.replace(/\s+/g, ""); // Remove any accidental spaces
      if (params.get("f_C") !== cleanIds) {
        params.set("f_C", cleanIds);
        changed = true;
      }
    }

    // Apply Experience Levels if any boxes are checked
    if (settings.experience && settings.experience.length > 0) {
      let expString = settings.experience.join(","); // Joins multiple selections into "2,3" format
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
