// ==========================================
// 1. THE DATABASE
// ==========================================

const TECH_COMPANIES = [
  {
    id: "group-india",
    title: "Indian Unicorns",
    companies: [
      { name: "Flipkart", id: "321062" },
      { name: "Swiggy", id: "9252341" },
      { name: "Zomato", id: "422813" },
      { name: "Razorpay", id: "3788927" },
      { name: "PhonePe", id: "10479149" },
      { name: "Cred", id: "14485479" },
      { name: "Ola", id: "2580522" },
      { name: "Pine Labs", id: "554421" },
    ],
  },
  {
    id: "group-data",
    title: "Modern Data & AI",
    companies: [
      { name: "Databricks", id: "3477522" },
      { name: "MongoDB", id: "783611" },
      { name: "OpenAI", id: "11130470" },
      { name: "Snowflake", id: "3653845" },
      { name: "Glean", id: "74882602" },
      { name: "Cloudflare", id: "407222" },
    ],
  },
  {
    id: "group-hft",
    title: "HFTs & Quant",
    companies: [
      { name: "Graviton", id: "9329182" },
      { name: "AlphaGrep", id: "2282504" },
      { name: "Quadeye", id: "10167707" },
      { name: "Tower Research", id: "36865" },
      { name: "APT Portfolio", id: "2691313" },
      { name: "WorldQuant", id: "276383" },
      { name: "IMC Trading", id: "200030" },
      { name: "Optiver", id: "13216" },
      { name: "Jane Street", id: "1713404" },
      { name: "Citadel", id: "163056" },
    ],
  },
  {
    id: "group-saas",
    title: "FinTech & Global SaaS",
    companies: [
      { name: "Stripe", id: "2135371" },
      { name: "Rippling", id: "17988315" },
      { name: "Plaid", id: "2684737" },
      { name: "Coinbase", id: "2857634" },
      { name: "Rubrik", id: "4840301" },
      { name: "Cohesity", id: "3750699" },
      { name: "Atlassian", id: "22688" },
      { name: "Uber", id: "1815218" },
      { name: "Airbnb", id: "309694" },
      { name: "Salesforce", id: "3185" },
      { name: "PayPal", id: "1482" },
    ],
  },
  {
    id: "group-faang",
    title: "FAANG & Big Tech",
    companies: [
      { name: "Google", id: "1441" },
      { name: "Microsoft", id: "1035" },
      { name: "Amazon", id: "1586" },
      { name: "Meta", id: "10667" },
      { name: "Apple", id: "162479" },
      { name: "Netflix", id: "165158" },
    ],
  },
  {
    id: "group-finance-tech",
    title: "Top Finance & Banks (Tech)",
    companies: [
      { name: "D. E. Shaw", id: "2408262" },
      { name: "Goldman Sachs", id: "1382" },
      { name: "JPMorgan", id: "1067" },
      { name: "Morgan Stanley", id: "497017" },
      { name: "Barclays", id: "1426" },
      { name: "Wells Fargo", id: "1235" },
    ],
  },
];

const FINANCE_COMPANIES = [
  {
    id: "group-mba-consulting",
    title: "Tier 1 & Big 4 Consulting",
    companies: [
      { name: "McKinsey", id: "1371" },
      { name: "BCG", id: "1784" },
      { name: "Bain & Co", id: "2114" },
      { name: "Deloitte", id: "1038" },
      { name: "EY", id: "1073" },
      { name: "PwC", id: "1044" },
      { name: "KPMG", id: "1079" },
      { name: "Kearney", id: "2196" },
      { name: "Roland Berger", id: "3950" },
      { name: "L.E.K.", id: "5210" },
      { name: "Strategy&", id: "224605" },
    ],
  },
  {
    id: "group-mba-banking",
    title: "Elite Investment Banks",
    companies: [
      { name: "Goldman Sachs", id: "1382" },
      { name: "JPMorgan", id: "1067" },
      { name: "Morgan Stanley", id: "497017" },
      { name: "Citi", id: "11448" },
      { name: "Bank of America", id: "1123" },
      { name: "Barclays", id: "1426" },
      { name: "UBS", id: "1214" },
      { name: "Deutsche Bank", id: "1262" },
      { name: "HSBC", id: "1241" },
      { name: "BNP Paribas", id: "1508" },
      { name: "Lazard", id: "4757" },
      { name: "Evercore", id: "163732" },
      { name: "Jefferies", id: "5154" },
      { name: "Nomura", id: "4440" },
    ],
  },
  {
    id: "group-mba-pe",
    title: "PE, VC & Asset Mgt",
    companies: [
      { name: "Blackstone", id: "7834" },
      { name: "Carlyle", id: "7378" },
      { name: "Vanguard", id: "3184" },
      { name: "Apollo Global", id: "48414" },
      { name: "Warburg Pincus", id: "12110" },
      { name: "General Atlantic", id: "15910" },
      { name: "SoftBank", id: "4786649" },
      { name: "Fidelity", id: "1307" },
      { name: "PIMCO", id: "7970" },
      { name: "Citadel", id: "163056" },
      { name: "Point72", id: "5250800" },
      { name: "Brookfield", id: "40118" },
    ],
  },
  {
    id: "group-mba-indian",
    title: "Top Indian Financials",
    companies: [
      { name: "HDFC Bank", id: "164151" },
      { name: "ICICI Bank", id: "2967" },
      { name: "Kotak Bank", id: "5632" },
      { name: "Axis Bank", id: "162609" },
      { name: "Bajaj Finserv", id: "1092003" },
      { name: "Zerodha", id: "2160857" },
      { name: "SBI", id: "166135" },
      { name: "Groww", id: "10813156" },
      { name: "IDFC FIRST", id: "21175" },
      { name: "Motilal Oswal", id: "36345" },
    ],
  },
];

// ==========================================
// 2. THE ENGINE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // RENDERING LOGIC
  // ==========================================
  function render(containerId, groups, isFinance) {
    const container = document.getElementById(containerId);
    if (!container) return;
    let html = "";
    groups.forEach((group) => {
      html += `
        <details id="${group.id}" class="${isFinance ? "finance-group" : "tech-group"}" style="${isFinance ? "display: none;" : ""}">
          <summary>${group.title} <span class="select-all-wrapper"><input type="checkbox" class="tier-select-all" /> All</span></summary>
          <div class="inner-grid">${group.companies.map((c) => `<label class="checkbox-label"><input type="checkbox" value="${c.id}" class="famous-cb" /> ${c.name}</label>`).join("")}</div>
        </details>`;
    });
    container.innerHTML = html;
  }

  render("tech-companies-container", TECH_COMPANIES, false);
  render("finance-companies-container", FINANCE_COMPANIES, true);

  // ==========================================

  // ==========================================
  // THEME TOGGLE LOGIC
  // ==========================================
  const themeToggle = document.getElementById("themeToggle");

  // 1. Fetch saved theme and apply it immediately
  chrome.storage.local.get(["theme"], (data) => {
    const isDark = data.theme === "dark"; // Default to light if not set
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      themeToggle.textContent = "☀️";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      themeToggle.textContent = "🌙";
    }
  });

  // 2. Listen for clicks on the toggle button
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      const newTheme = isDark ? "light" : "dark";

      // Update DOM and Button icon
      document.documentElement.setAttribute("data-theme", newTheme);
      themeToggle.textContent = isDark ? "🌙" : "☀️";

      // Save preference
      chrome.storage.local.set({ theme: newTheme });
    });
  }
  // ==========================================

  function renderCompanyGroups(containerId, groups, isFinance) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!groups || !Array.isArray(groups)) {
      container.innerHTML = `<div style="padding: 12px; margin: 10px 0; color: #d93025; background: #fce8e6; border: 1px solid #fad2cf; border-radius: 5px; font-size: 12px; font-weight: 600;">Data load error.</div>`;
      return;
    }

    let html = "";
    groups.forEach((group) => {
      let groupClass = isFinance ? "finance-group" : "tech-group";
      let displayStyle = isFinance ? 'style="display: none;"' : "";

      html += `
        <details id="${group.id}" class="${groupClass}" ${displayStyle}>
          <summary>
            <span class="summary-title">${group.title}</span>
            <span class="select-all-wrapper"><input type="checkbox" class="tier-select-all" /> All</span>
          </summary>
          <div class="inner-grid">
      `;
      group.companies.forEach((company) => {
        html += `<label class="checkbox-label"><input type="checkbox" value="${company.id}" class="famous-cb" /> ${company.name}</label>`;
      });
      html += `</div></details>`;
    });

    container.innerHTML = html;
  }

  try {
    renderCompanyGroups("tech-companies-container", TECH_COMPANIES, false);
  } catch (e) {
    console.error(e);
  }
  try {
    renderCompanyGroups("finance-companies-container", FINANCE_COMPANIES, true);
  } catch (e) {
    console.error(e);
  }

  let currentProfile = "profile1";
  const STORAGE_VERSION = "v21_precision_ui";

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
    profile5: {
      name: "Investment Banking Analyst",
      jobTitle:
        '("Financial Analyst" OR "Investment Banking Analyst" OR "Corporate Finance" OR "Equity Research")',
      strictTitle: false,
      blockAgencies: false,
      location: "Bengaluru",
      timeFilter: "604800",
      famous: [],
      experience: ["1", "2", "3"],
      workplace: ["1", "3"],
    },
    profile6: {
      name: "Management Consulting",
      jobTitle:
        '("Management Consultant" OR "Strategy Consultant" OR "Associate Consultant" OR "Business Analyst")',
      strictTitle: false,
      blockAgencies: false,
      location: "Bengaluru",
      timeFilter: "604800",
      famous: [],
      experience: ["1", "2", "3"],
      workplace: ["1", "3"],
    },
  };

  try {
    chrome.storage.local.get(
      ["profiles", "lastActiveProfile", "storageVersion", "activeStream"],
      (data) => {
        let storedProfiles = data.profiles;
        if (data.storageVersion !== STORAGE_VERSION || !storedProfiles) {
          storedProfiles = defaultProfiles;
          currentProfile = "profile1";
          chrome.storage.local.set({
            profiles: defaultProfiles,
            lastActiveProfile: currentProfile,
            storageVersion: STORAGE_VERSION,
            activeStream: "tech",
          });
        } else {
          currentProfile = data.lastActiveProfile || "profile1";
        }

        switchStream(data.activeStream || "tech", false);
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
            if (!titleInput.startsWith('"') && !titleInput.startsWith("(")) {
              finalKeywords = `"${titleInput}"`;
            }
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
      selectAllCheckbox.addEventListener("click", (e) => e.stopPropagation());
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

  const tabBtech = document.getElementById("tab-btech");
  const tabFinance = document.getElementById("tab-finance");

  function switchStream(stream, triggerSave = true) {
    const tabBtech = document.getElementById("tab-btech");
    const tabFinance = document.getElementById("tab-finance");
    const selectEl = document.getElementById("profileSelect");

    const switchLogic = () => {
      if (stream === "tech") {
        tabBtech.classList.add("active");
        tabFinance.classList.remove("active");

        document
          .querySelectorAll(".tech-opt")
          .forEach((opt) => (opt.style.display = ""));
        document
          .querySelectorAll(".finance-opt")
          .forEach((opt) => (opt.style.display = "none"));

        document
          .querySelectorAll(".tech-group")
          .forEach((el) => (el.style.display = ""));
        document
          .querySelectorAll(".finance-group")
          .forEach((el) => (el.style.display = "none"));

        if (
          triggerSave &&
          !["profile1", "profile2", "profile3", "profile4"].includes(
            currentProfile,
          )
        ) {
          currentProfile = "profile1";
        }
      } else {
        tabFinance.classList.add("active");
        tabBtech.classList.remove("active");

        document
          .querySelectorAll(".tech-opt")
          .forEach((opt) => (opt.style.display = "none"));
        document
          .querySelectorAll(".finance-opt")
          .forEach((opt) => (opt.style.display = ""));

        document
          .querySelectorAll(".tech-group")
          .forEach((el) => (el.style.display = "none"));
        // FIX: CHANGED TO "" TO SHOW THE FINANCE GROUPS
        document
          .querySelectorAll(".finance-group")
          .forEach((el) => (el.style.display = ""));

        if (triggerSave && !["profile5", "profile6"].includes(currentProfile)) {
          currentProfile = "profile5";
        }
      }

      if (selectEl) selectEl.value = currentProfile;

      if (triggerSave) {
        chrome.storage.local.set({
          lastActiveProfile: currentProfile,
          activeStream: stream,
        });
        chrome.storage.local.get(["profiles"], (data) => {
          populateForm((data.profiles || defaultProfiles)[currentProfile]);
        });
      }
    };

    if (triggerSave) {
      saveCurrentFormState(switchLogic);
    } else {
      switchLogic();
    }
  }

  if (tabBtech) {
    tabBtech.addEventListener("click", (e) => {
      e.preventDefault();
      switchStream("tech", true);
    });
  }
  if (tabFinance) {
    tabFinance.addEventListener("click", (e) => {
      e.preventDefault();
      switchStream("finance", true);
    });
  }
});
