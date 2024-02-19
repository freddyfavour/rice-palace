// Importing the meals array from the gallery module
import meals from "./gallery";

// Definition of the menu object
const menu = {
  title: "Menu", // Title of the menu section

  // Method to create the menu section
  createSection: () => {
    // Creating the main container for the menu section
    const content = document.createElement("div");
    content.classList.add("menu");

    // Creating the header section with the title
    const header = document.createElement("div");
    header.classList.add("header");
    const headertext = document.createElement("h1");
    headertext.innerText = "Menu";
    header.appendChild(headertext);
    content.appendChild(header);

    // Creating a container for the meal gallery
    const galleryContainer = document.createElement("div");
    galleryContainer.classList.add("gallery-container");
    content.appendChild(galleryContainer);

    // Looping through each meal to create a tile for it
    meals.forEach((meal) => {
      const mealTile = document.createElement("div");
      mealTile.classList.add("meal-tile");

      // Creating the image container and adding the meal image
      const mealImgContainer = document.createElement("div");
      mealImgContainer.classList.add("meal-img-container");
      const mealImg = document.createElement("img");
      mealImg.src = meal.src;
      mealImg.classList.add("meal-img");
      mealImgContainer.appendChild(mealImg);
      mealTile.appendChild(mealImgContainer);

      // Creating the text container and adding the meal name, price, and description
      const mealText = document.createElement("div");
      mealText.classList.add("meal-text");
      const mealName = document.createElement("p");
      mealName.classList.add("meal-name");
      mealName.innerText = meal.name;
      const mealPrice = document.createElement("p");
      mealPrice.classList.add("meal-price");
      mealPrice.innerText = meal.price;
      const mealDesc = document.createElement("p");
      mealDesc.classList.add("meal-desc");
      mealDesc.innerText = meal.description;
      mealText.appendChild(mealName);
      mealText.appendChild(mealPrice);
      mealText.appendChild(mealDesc);
      mealTile.appendChild(mealText);

      // Appending the created meal tile to the gallery container
      galleryContainer.appendChild(mealTile);
    });

    // Returning the completed menu section
    return content;
  },
};

// Exporting the menu object as the default export
export default menu;
