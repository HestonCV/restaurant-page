import createElement from "./createElement";

function createMenuItem(name, price, description) {
  const menuContainer = document.querySelector(".menu");
  const menuCard = createElement({ element: "div", parent: menuContainer });
  createElement({
    element: "p",
    className: "name",
    textContent: name,
    parent: menuCard,
  });
  createElement({
    element: "p",
    className: "price",
    textContent: price,
    parent: menuCard,
  });
  createElement({
    element: "p",
    className: "description",
    textContent: description,
    parent: menuCard,
  });
}

export default createMenuItem;
