


function setupTabs() {
  document.querySelectorAll(".tabs__button").forEach((button) => {
    button.addEventListener("click", () => {
      console.log("click event on button");


       // 1. Get the parent element of the button (which is '.tabs__sidebar')
      const sideBar = button.parentElement;
      // 2. Get the parent of the sidebar (which is the main '.tabs' container)
      const tabsContainer = sideBar.parentElement;
      // 3. Get the tab number from the button's 'data-for-tab' attribute
      const tabNumber = button.dataset.forTab;
      // 4. Find the content pane that corresponds to this button
      // We use the tabNumber to build a CSS selector.
      const tabToActivate = tabsContainer.querySelector(
        `.tabs__content[data-tab="${tabNumber}"]`
      );
        sideBar.querySelectorAll(".tabs__button").forEach((btn) => {
        btn.classList.remove("tabs__button--active");
      });

      // 6. Deactivate all content panes
      // Find all content panes within the main container and remove the 'active' class
      tabsContainer.querySelectorAll(".tabs__content").forEach((tab) => {
        tab.classList.remove("tabs__content--active");
      });

      // 7. Activate the clicked button
      // Add the 'active' class to the specific button that was clicked
      button.classList.add("tabs__button--active");

      // 8. Activate the corresponding content pane
      // Add the 'active' class to the content pane we found in step 4
      tabToActivate.classList.add("tabs__content--active");

    }
    );
  }     );
}

