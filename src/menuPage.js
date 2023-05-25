import createElement from "./createElement";
import createMenuItem from "./createMenuItem";

function loadMenuPage() {
  const centerDiv = document.querySelector(".center");
  createElement({ element: "div", className: "menu", parent: centerDiv });
  createMenuItem(
    "Sushi Platter",
    "$18.99",
    `A delightful assortment of fresh and expertly crafted sushi rolls,
    including tuna, salmon, California, and spicy tuna rolls. Served
    with pickled ginger, wasabi, and soy sauce.`
  );
  createMenuItem(
    "Teriyaki Chicken Bowl",
    "$12.99",
    `Tender grilled chicken glazed in a savory teriyaki sauce,
    served on a bed of steamed Japanese rice. Accompanied by stir-fried vegetables
    and garnished with sesame seeds and green onions.`
  );
  createMenuItem(
    "Ramen Noodle Soup",
    "$11.99",
    `Traditional Japanese ramen soup featuring wheat noodles in a flavorful broth.
    Choose from miso, shoyu, or tonkotsu broth, and customize with your choice of toppings,
    such as sliced pork, bamboo shoots, soft-boiled egg, and nori seaweed.`
  );
  createMenuItem(
    "Tempura Bento Box",
    "$15.99",
    `A bento box filled with a variety of tempura-fried delights, including shrimp,
    assorted vegetables, and fish. Served with steamed rice, a side of miso soup,
    salad with ginger dressing, and a side of tangy tempura sauce.`
  );
  createMenuItem(
    "Beef Teriyaki Donburi",
    "$14.99",
    `Grilled slices of tender beef marinated in a sweet and savory teriyaki sauce,
    served over a bed of steamed rice. Topped with caramelized onions, shredded nori
    seaweed, and garnished with pickled ginger.`
  );
  createMenuItem(
    "Vegetable Udon Stir-Fry",
    "$10.99",
    `Grilled slices of tender beef marinated in a sweet and savory teriyaki sauce,
    served over a bed of steamed rice. Topped with caramelized onions, shredded nori
    seaweed, garnished with pickled ginger, and a light soy-based sauce
    and sprinkled with sesame seeds.`
  );

  const tabButtons = document.querySelectorAll(".tab");
  tabButtons.forEach((tabButton) => {
    /* eslint-disable-next-line no-param-reassign */
    tabButton.classList.remove("active-tab");
  });

  const menuTabButton = document.getElementById("menu-tab");
  menuTabButton.classList.add("active-tab");
}

export default loadMenuPage;
