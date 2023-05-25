import createElement from "./createElement";

function loadHomePage() {
  const centerDiv = document.querySelector(".center");
  const div = createElement({
    element: "div",
    textContent: "Japanese Cuisine",
    parent: centerDiv,
  });
  createElement({
    element: "p",
    className: "options",
    textContent: "Ramen, Sushi & Sake",
    parent: div,
  });
  createElement({
    element: "p",
    className: "motto",
    textContent: "Delight in the Authentic Flavors of Japan",
    parent: div,
  });

  const tabButtons = document.querySelectorAll(".tab");
  tabButtons.forEach((tabButton) => {
    /* eslint-disable-next-line no-param-reassign */
    tabButton.classList.remove("active-tab");
  });

  const homeTabButton = document.getElementById("home-tab");
  homeTabButton.classList.add("active-tab");
}

export default loadHomePage;
