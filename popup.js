document.addEventListener("DOMContentLoaded", () => {
  let currentProfile = "profile1";
  const STORAGE_VERSION = "v13_experience_restored";

  const AGENCY_BURN_LIST = [
    "Infosys",
    "TCS",
    "Wipro",
    "Cognizant",
    "HCL",
    "Accenture",
    "Capgemini",
    "Revature",
    "TEKsystems",
    "EPAM",
  ];

  const defaultProfiles = {
    profile1: {
      name: "Core Software Engineer",
      jobTitle: "Software Engineer",
      strictTitle: true,
      blockAgencies: true,
      location: "Bengaluru",
      timeFilter: "604800",
      famous: [],
      experience: ["2", "3"],
      workplace: ["1", "3"],
    },
    profile2: {
      name: "Backend & Systems",
      jobTitle: "Backend Engineer",
      strictTitle: true,
      blockAgencies: true,
      location: "Bengaluru",
      timeFilter: "604800",
      famous: [],
      experience: ["2", "3"],
      workplace: ["1", "3"],
    },
    profile3: {
      name: "Machine Learning & AI",
      jobTitle: "Machine Learning",
      strictTitle: true,
      blockAgencies: true,
      location: "Bengaluru",
      timeFilter: "604800",
      famous: [],
      experience: ["2", "3"],
      workplace: ["1", "3"],
    },
    profile4: {
      name: "Custom Slate",
      jobTitle: "",
      strictTitle: false,
      blockAgencies: true,
      location: "",
      timeFilter: "604800",
      famous: [],
      experience: [],
      workplace: ["1", "3"],
    },
  };

  try {
    chrome.storage.local.get(
      ["profiles", "lastActiveProfile", "storageVersion"],
      (data) => {
        let storedProfiles = data.profiles;
        if (data.storageVersion !== STORAGE_VERSION || !storedProfiles) {
          storedProfiles = defaultProfiles;
          currentProfile = "profile1";
          chrome.storage.local.set({
            profiles: defaultProfiles,
            lastActiveProfile: currentProfile,
            storageVersion: STORAGE_VERSION,
          });
        } else {
          currentProfile = data.lastActiveProfile || "profile1";
        }
        updateDropdownLabels(storedProfiles);
        const selectEl = document.getElementById("profileSelect");
        if (selectEl) selectEl.value = currentProfile;
        populateForm(storedProfiles[currentProfile]);
      },
    );
  } catch (err) {
    console.error("Storage load error:", err);
  }

  const profileSelect = document.getElementById("profileSelect");
  if (profileSelect) {
    profileSelect.addEventListener("change", (e) => {
      saveCurrentFormState(() => {
        currentProfile = e.target.value;
        chrome.storage.local.set({ lastActiveProfile: currentProfile });
        chrome.storage.local.get(["profiles"], (data) => {
          populateForm((data.profiles || defaultProfiles)[currentProfile]);
        });
      });
    });
  }

  const workspaceNameInput = document.getElementById("workspaceName");
  if (workspaceNameInput) {
    workspaceNameInput.addEventListener("input", (e) => {
      const select = document.getElementById("profileSelect");
      if (!select) return;
      const option = select.options[select.selectedIndex];
      option.textContent =
        e.target.value.trim() !== ""
          ? e.target.value
          : `Workspace ${currentProfile.replace("profile", "")}`;
    });
  }

  function updateDropdownLabels(profiles) {
    const select = document.getElementById("profileSelect");
    if (!select) return;
    Array.from(select.options).forEach((opt) => {
      if (profiles && profiles[opt.value] && profiles[opt.value].name)
        opt.textContent = profiles[opt.value].name;
    });
  }

  function populateForm(data) {
    if (!data) return;
    if (document.getElementById("workspaceName"))
      document.getElementById("workspaceName").value = data.name || "";
    if (document.getElementById("jobTitle"))
      document.getElementById("jobTitle").value = data.jobTitle || "";
    if (document.getElementById("strictTitle"))
      document.getElementById("strictTitle").checked = data.strictTitle ?? true;
    if (document.getElementById("blockAgencies"))
      document.getElementById("blockAgencies").checked =
        data.blockAgencies ?? true;
    if (document.getElementById("location"))
      document.getElementById("location").value = data.location || "";
    if (document.getElementById("timeFilter"))
      document.getElementById("timeFilter").value = data.timeFilter || "604800";

    document
      .querySelectorAll('input[type="checkbox"]')
      .forEach((cb) => (cb.checked = false));
    if (data.famous)
      data.famous.forEach((val) => checkBySelector(".famous-cb", val));
    if (data.experience)
      data.experience.forEach((val) => checkBySelector(".exp-cb", val));
    if (data.workplace)
      data.workplace.forEach((val) => checkBySelector(".workplace-cb", val));

    document.querySelectorAll("details").forEach((card) => {
      const selectAllCheckbox = card.querySelector(".tier-select-all");
      const childCheckboxes = card.querySelectorAll(".famous-cb");
      if (selectAllCheckbox && childCheckboxes.length > 0) {
        const checkedCount = card.querySelectorAll(".famous-cb:checked").length;
        selectAllCheckbox.checked = checkedCount === childCheckboxes.length;
      }
    });
  }

  function checkBySelector(selector, val) {
    const el = document.querySelector(`${selector}[value="${val}"]`);
    if (el) el.checked = true;
  }

  function saveCurrentFormState(callback, showStatus = false) {
    chrome.storage.local.get(["profiles"], (data) => {
      let profiles = data.profiles || defaultProfiles;
      const select = document.getElementById("profileSelect");
      if (!select) return;

      profiles[currentProfile] = {
        name:
          document.getElementById("workspaceName").value.trim() ||
          select.options[select.selectedIndex].textContent,
        jobTitle: document.getElementById("jobTitle").value.trim(),
        strictTitle: document.getElementById("strictTitle").checked,
        blockAgencies: document.getElementById("blockAgencies").checked,
        location: document.getElementById("location").value.trim(),
        timeFilter: document.getElementById("timeFilter").value,
        famous: Array.from(document.querySelectorAll(".famous-cb:checked")).map(
          (cb) => cb.value,
        ),
        experience: Array.from(
          document.querySelectorAll(".exp-cb:checked"),
        ).map((cb) => cb.value),
        workplace: Array.from(
          document.querySelectorAll(".workplace-cb:checked"),
        ).map((cb) => cb.value),
      };

      chrome.storage.local.set({ profiles: profiles }, () => {
        updateDropdownLabels(profiles);
        if (showStatus) {
          const status = document.getElementById("status");
          if (status) {
            status.textContent = "Settings saved!";
            status.style.opacity = "1";
            setTimeout(() => (status.style.opacity = "0"), 2000);
          }
        }
        if (callback) callback();
      });
    });
  }

  const saveBtn = document.getElementById("saveBtn");
  if (saveBtn)
    saveBtn.addEventListener("click", () => saveCurrentFormState(null, true));

  const launchBtn = document.getElementById("launchBtn");
  if (launchBtn) {
    launchBtn.addEventListener("click", () => {
      try {
        saveCurrentFormState(() => {
          let baseUrl = "https://www.linkedin.com/jobs/search/?";
          let params = new URLSearchParams();

          let titleInput = document.getElementById("jobTitle").value.trim();
          let finalKeywords = titleInput;

          if (titleInput && document.getElementById("strictTitle").checked) {
            if (!titleInput.startsWith('"')) finalKeywords = `"${titleInput}"`;
          }

          if (document.getElementById("blockAgencies").checked) {
            let burnString = AGENCY_BURN_LIST.map(
              (agency) => `"${agency}"`,
            ).join(" NOT ");
            finalKeywords = finalKeywords
              ? `${finalKeywords} NOT ${burnString}`
              : `NOT ${burnString}`;
          }

          if (finalKeywords) params.append("keywords", finalKeywords);
          const location = document.getElementById("location").value.trim();
          if (location) params.append("location", location);

          params.append(
            "f_TPR",
            "r" + document.getElementById("timeFilter").value,
          );
          params.append("sortBy", "DD");

          let allCompanies = [];
          document
            .querySelectorAll(".famous-cb:checked")
            .forEach((cb) => allCompanies.push(cb.value));
          if (allCompanies.length > 0)
            params.append("f_C", allCompanies.join(","));

          let experience = Array.from(
            document.querySelectorAll(".exp-cb:checked"),
          ).map((cb) => cb.value);
          if (experience.length > 0) params.append("f_E", experience.join(","));

          let workplace = Array.from(
            document.querySelectorAll(".workplace-cb:checked"),
          ).map((cb) => cb.value);
          if (workplace.length > 0) params.append("f_WT", workplace.join(","));

          chrome.tabs.create({ url: baseUrl + params.toString() });
        });
      } catch (error) {
        alert(
          "Execution Error. Please hit the refresh icon in your Chrome extensions menu.",
        );
      }
    });
  }

  document.querySelectorAll("details").forEach((card) => {
    const selectAllCheckbox = card.querySelector(".tier-select-all");
    const childCheckboxes = card.querySelectorAll(".famous-cb");
    const innerGrid = card.querySelector(".inner-grid");

    if (selectAllCheckbox && childCheckboxes.length > 0) {
      selectAllCheckbox.addEventListener("click", (e) => {
        e.stopPropagation();
      });

      selectAllCheckbox.addEventListener("change", () => {
        childCheckboxes.forEach((cb) => {
          cb.checked = selectAllCheckbox.checked;
        });
        saveCurrentFormState(null, false);
      });
    }

    if (innerGrid && selectAllCheckbox) {
      innerGrid.addEventListener("change", () => {
        const checkedCount = card.querySelectorAll(".famous-cb:checked").length;
        selectAllCheckbox.checked = checkedCount === childCheckboxes.length;
        saveCurrentFormState(null, false);
      });
    }
  });
});
