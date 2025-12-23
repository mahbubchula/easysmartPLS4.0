/* =========================================================
   TAB SYSTEM – SCOPED, CLEAN, PROFESSIONAL
   ========================================================= */

function openTab(event, tabId) {

  // 1. Find the nearest tabs container
  const tabsContainer = event.currentTarget.closest(".tabs-container");

  if (!tabsContainer) return;

  // 2. Hide all tab contents inside THIS container
  const tabContents = tabsContainer.querySelectorAll(".tab-content");
  tabContents.forEach(content => {
    content.classList.remove("active");
  });

  // 3. Remove active class from all buttons in THIS container
  const tabButtons = tabsContainer.querySelectorAll(".tab-btn");
  tabButtons.forEach(button => {
    button.classList.remove("active");
  });

  // 4. Activate selected tab
  const activeTab = tabsContainer.querySelector(`#${tabId}`);
  if (activeTab) {
    activeTab.classList.add("active");
  }

  event.currentTarget.classList.add("active");
}

/* =========================================================
   OPTIONAL: AUTO-ACTIVATE FIRST TAB (SAFETY)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tabs-container").forEach(container => {
    const firstButton = container.querySelector(".tab-btn");
    const firstContent = container.querySelector(".tab-content");

    if (firstButton && firstContent) {
      firstButton.classList.add("active");
      firstContent.classList.add("active");
    }
  });
});
