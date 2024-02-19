// Import the objects from the respective files
import home from "../home/home.js";
import menu from "../menu/menu.js";
import story from "../story/story.js";
import { displayPage } from "../page.js";

// Navigation object definition
const nav = {
  // Title of the navigation section
  title: "Navigation",

  // Method to create the navigation section
  createSection: () => {
    // Create a container for the navigation section
    const content = document.createElement("div");
    content.classList.add("navigation");

    // Create an unordered list for navigation links
    const navList = document.createElement("ul");
    navList.classList.add("nav-list");

    // Array of navigation items with text and corresponding page
    const navItems = [
      { text: "Home", page: home },
      { text: "Menu", page: menu },
      { text: "Story", page: story },
    ];

    // Loop through each navigation item
    navItems.forEach(({ text, page }) => {
      // Create list item and link for each navigation item
      const listItem = document.createElement("li");
      listItem.classList.add("nav-item"); // Add class to list item
      const link = document.createElement("a");
      link.innerText = text;
      link.href = "#";
      link.classList.add("nav-link"); // Add class to link
      // Add event listener to the link for page navigation
      link.addEventListener("click", (event) => {
        event.preventDefault();
        displayPage(page);
      });
      // Append link to list item and list item to navigation list
      listItem.appendChild(link);
      navList.appendChild(listItem);
    });

    // Append navigation list to the navigation section container
    content.appendChild(navList);

    return content; // Return the created navigation section
  },
};

export default nav; // Export the navigation object as default
