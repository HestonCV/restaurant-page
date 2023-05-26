import createElement from "./createElement";

function loadInfoPage() {
  const centerDiv = document.querySelector(".center");
  const infoDiv = createElement({
    element: "div",
    className: "info",
    parent: centerDiv,
  });
  createElement({
    element: "span",
    class: "info-title",
    textContent: "Who We Are",
    parent: infoDiv,
  });
  createElement({
    element: "p",
    className: "mission",
    textContent: `Umi, founded in 1998 by Dr. Umi, is a Japanese restaurant on a
      mission to share the vibrant flavors of Japanese cuisine with the
      world. With a focus on tradition, sustainability, and culinary
      artistry, Umi offers an exquisite dining experience where guests can
      indulge in carefully crafted dishes that harmonize authentic flavors
      with modern techniques. From the serene ambiance to the skilled
      chefs and attentive staff, Umi strives to be a cultural bridge,
      welcoming guests to savor the essence of Japanese gastronomy while
      embracing the spirit of omotenashi hospitality.`,
    parent: infoDiv,
  });
  createElement({
    element: "p",
    className: "motto",
    textContent: "Delight in the Authentic Flavors of Japan",
    parent: infoDiv,
  });
  const founderDiv = createElement({
    element: "div",
    className: "founder",
    parent: infoDiv,
  });
  createElement({
    element: "div",
    className: "founder-image",
    parent: founderDiv,
  });
  createElement({
    element: "span",
    textContent: "Our Founder, Dr. Umi",
    parent: founderDiv,
  });

  const tabButtons = document.querySelectorAll(".tab");
  tabButtons.forEach((tabButton) => {
    /* eslint-disable-next-line no-param-reassign */
    tabButton.classList.remove("active-tab");
  });

  const infoTabButton = document.getElementById("info-tab");
  infoTabButton.classList.add("active-tab");
}

export default loadInfoPage;
