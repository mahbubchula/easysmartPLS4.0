// Function to switch Tabs
function openTab(evt, tabName, moduleCode) {
    // 1. Hide all tab content
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // 2. Remove "active" class from all buttons
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // 3. Show the current tab, and add an "active" class to the button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");

    // Optional: Change the bottom border color of the active tab based on module
    const colors = {
        'A': 'var(--color-design)',
        'B': 'var(--color-data)',
        'C': 'var(--color-measure)'
    };
    
    // Find the active tab button and set its border color dynamically if needed
    // (For simplicity, CSS handles the default, but you can expand this)
}

// Function to handle Sidebar Navigation (Visual Only for this template)
function setActive(module) {
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Add active class to clicked item (simplified selection)
    // In a real app, you might target the specific element passed or ID
    const clickedLink = event.currentTarget;
    clickedLink.classList.add('active');
}
