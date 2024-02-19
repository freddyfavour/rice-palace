import gitlogo from "../../../assets/githublogo.png";

const footer = {
  title: "Footer",

  createSection: () => {
    // Create footer container
    const content = document.createElement("div");
    content.classList.add("footer");

    // Create footer text element
    const footerText = document.createElement("p");
    footerText.classList.add("footer-text");

    // Create "Made by" text
    const madeByText = document.createElement("span");
    madeByText.innerText = "Made by ";
    madeByText.classList.add("made-by");

    // Create GitHub logo
    const githubLogo = document.createElement("img");
    githubLogo.src = gitlogo;
    githubLogo.alt = "GitHub Logo";
    githubLogo.classList.add("github-logo");

    // Create name element
    const nameText = document.createElement("span");
    nameText.innerText = "freddyfavour";
    nameText.classList.add("name");

    // Append elements to footer text
    footerText.appendChild(madeByText);
    footerText.appendChild(githubLogo);
    footerText.appendChild(nameText);
    footerText.appendChild(document.createTextNode(" "));

    // Append footer text to footer container
    content.appendChild(footerText);

    return content;
  },
};

export default footer;
