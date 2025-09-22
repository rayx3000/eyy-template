const notificationTab = document.querySelector(".notification-tab");
const appTab = document.querySelector(".app-tab");
const menuBar = document.querySelector(".menu-bar");

const notificationIcon = document.getElementById("notifcationIcon");
const appIcon = document.getElementById("appIcon");
const menuIcon = document.getElementById("menu");

const closeMenu = document.getElementById("closeMenu");

function toggleVisibilityOnClick(button, container) {
    if (!button || !container) {
        console.warn("Button or container not found");
        return;
    }
    
    // Set initial state - use display instead of visibility for better performance
    container.style.display = "none";
    
    // Track if container is currently shown
    let isVisible = false;
    
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        isVisible = !isVisible;
        container.style.display = isVisible ? "block" : "none";
    });

    // Remove conflicting mouseover/mouseout events that interfere with click toggle
    // If you want hover behavior, implement it separately or use CSS :hover instead
    
    // Close when clicking outside
    document.addEventListener("click", (e) => {
        if (!container.contains(e.target) && !button.contains(e.target)) {
            isVisible = false;
            container.style.display = "none";
        }
    });
}

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    toggleVisibilityOnClick(notificationIcon, notificationTab);
    toggleVisibilityOnClick(appIcon, appTab);
    toggleVisibilityOnClick(menuIcon, menuBar);

    closeMenu.addEventListener("click", () => {
        menuBar.style.display = "none";
    });
});