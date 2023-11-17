let tabs = document.querySelectorAll('[role="tab"]');
let tabpanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

// Add click event listeners to each tab
tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabs);
});

// Function to change tabs
function changeTabs(e) {
  // Hide all tabpanels
  tabpanels.forEach((panel) => {
    panel.hidden = true;
  });

  // Unselect all tabs
  tabs.forEach((tab) => {
    tab.setAttribute("aria-selected", false);
  });

  // Mark clicked tab as selected
  e.currentTarget.setAttribute("aria-selected", true);

  // Find associated tabpanel and show it
  let { id } = e.currentTarget;
  let tabpanel = document.querySelector(`[aria-labelledby="${id}"]`);
  tabpanel.hidden = false;
}

$(document).ready(function () {
  $("#navbar_main").addClass("transparent");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      // Change the 50 to the amount of pixels you want to scroll down before the navbar changes
      $("#navbar_main").removeClass("transparent");
      $("#navbar_main").addClass("colorful");
    } else {
      $("#navbar_main").removeClass("colorful");
      $("#navbar_main").addClass("transparent");
    }
  });
});
