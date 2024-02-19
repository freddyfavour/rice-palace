// Import the objects from the respective files
import home from "./home/home.js";
import menu from "./menu/menu.js";
import story from "./story/story.js";
import nav from "./nav/nav.js";
import footer from "./footer/footer.js";

// Function to display a page based on its title
export function displayPage(page) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  // Render Nav section
  const navSection = nav.createSection();
  contentDiv.appendChild(navSection);

  // Render requested page section
  const pageSection = page.createSection();
  contentDiv.appendChild(pageSection);

  // Render Footer section
  const footerSection = footer.createSection();
  contentDiv.appendChild(footerSection);
}

// Function to handle navigation clicks
function handleNavigation() {
  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const pageName = event.target.innerText.toLowerCase();
      switch (pageName) {
        case "home":
          displayPage(home);
          break;
        case "menu":
          displayPage(menu);
          break;
        case "story":
          displayPage(story);
          break;
        default:
          break;
      }
    });
  });
}

export default function initializePage() {
  // Initialize the default page (Home)
  displayPage(home);

  // Initialize navigation event listeners
  handleNavigation();
}
