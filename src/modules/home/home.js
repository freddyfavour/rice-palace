// Importing necessary assets and modules
import avatar from "../../../assets/ricebuddy.png";
import menu from "../menu/menu";
import { displayPage } from "../page";

// Defining the home object
const home = {
  title: "Home", // Title of the home section

  // Method to create the home section
  createSection: () => {
    // Creating a container div for the home section
    const content = document.createElement("div");
    content.classList.add("home");

    // Creating a container div for the content of the home section
    const homeContent = document.createElement("div");
    homeContent.classList.add("home-container");
    content.appendChild(homeContent);

    // Creating a div for the text content
    const homeText = document.createElement("div");
    homeText.classList.add("home-text");
    homeContent.appendChild(homeText);

    // Defining elements to be created dynamically
    const elements = [
      { tag: "h1", text: "Rice Palace", class: "heading" }, // Main heading
      { tag: "h2", text: "Home of Rice Buddy", class: "subHeading" }, // Subheading
      {
        tag: "h3",
        text: "Culinary haven serving diverse rice dishes from global cuisines in a vibrant atmosphere.",
        class: "text",
      }, // Description text
      {
        // Button to explore dishes
        tag: "button",
        text: "Explore Dishes",
        class: "button",
        clickHandler: () => displayPage(menu), // Click handler to navigate to the menu page
      },
    ];

    // Creating elements dynamically
    elements.forEach(({ tag, text, class: className, clickHandler }) => {
      const element = document.createElement(tag);
      element.innerText = text;
      element.classList.add(className);
      if (tag === "button") element.addEventListener("click", clickHandler); // Adding click handler for button element
      homeText.appendChild(element); // Appending the created element to the home text container
    });

    // Creating a container div for the avatar image
    const homeImage = document.createElement("div");
    homeImage.classList.add("avatar-container");
    homeContent.appendChild(homeImage);

    // Creating the avatar image
    const img = document.createElement("img");
    img.src = avatar; // Setting the image source
    img.classList.add("avatar"); // Adding CSS class for styling
    homeImage.appendChild(img);

    // Returning the created content
    return content;
  },
};

// Exporting the home object as the default export
export default home;
