const story = {
  title: "Our Story", // Title of the story section

  // Method to create the story section
  createSection: () => {
    // Creating the main container for the story section
    const content = document.createElement("div");
    content.classList.add("story");

    // Creating the header section with the title
    const header = document.createElement("div");
    header.classList.add("header");
    const headertext = document.createElement("h1");
    headertext.innerText = "Our Story";
    header.appendChild(headertext);
    content.appendChild(header);

    // Creating the story container
    const storyContainer = document.createElement("div");
    storyContainer.classList.add("story-container");

    const storyContent = document.createElement("p");
    storyContent.classList.add("story-content");
    storyContent.innerText = `Once upon a time, nestled in a quaint little village tucked away amidst rolling hills and whispering trees, there stood a remarkable place called Rice Palace: The Home of Rice Buddy. Legend had it that this enchanted restaurant was built upon a field where the rice grains sang melodies of joy to anyone who dared to listen.

    The tale of Rice Buddy, the mischievous yet lovable rice grain, was whispered among the villagers. It was said that Rice Buddy possessed magical powers, capable of turning a mundane meal into a culinary adventure filled with laughter and delight.

    As the sun dipped below the horizon, casting hues of pink and gold across the sky, the doors of Rice Palace would open, inviting weary travelers and hungry souls to step into a world where rice reigned supreme.

    Upon entering, guests were greeted by the tantalizing aroma of freshly cooked rice, swirling around them like a warm embrace. The walls were adorned with whimsical paintings depicting Rice Buddy's misadventures, from sneaking into pots of boiling water to playfully bouncing from plate to plate.

    But the true magic happened when diners took their first bite. With each spoonful of fluffy rice or savory rice dish, they would feel a warmth spreading through their bodies, as if Rice Buddy himself was whispering secrets of happiness and contentment into their hearts.

    And oh, the dishes! From classic fried rice to exotic rice bowls infused with flavors from distant lands, Rice Palace offered a feast fit for kings and commoners alike. Each dish was lovingly crafted with the finest ingredients, sprinkled with a dash of whimsy and a pinch of enchantment.

    But the real star of the show was Rice Buddy himself, who would often make surprise appearances, popping out of bowls or peeking from behind curtains to greet delighted diners with a mischievous grin. His infectious laughter would fill the air, turning even the grumpiest of patrons into giggling bundles of joy.

    As the night wore on and bellies grew full, guests would depart with smiles on their faces and hearts aglow with the magic of Rice Palace. For in this humble restaurant, where rice was king and Rice Buddy its playful guardian, every meal was not just a culinary experience, but a journey into a world where laughter, love, and rice reigned supreme. So come, dear traveler, and let Rice Palace whisk you away on a magical adventure you'll never forget!`;

    storyContainer.appendChild(storyContent);
    content.appendChild(storyContainer);

    // Returning the completed story section
    return content;
  },
};

// Exporting the story object as the default export
export default story;
