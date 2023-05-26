import createElement from "./createElement";
import loadHomePage from "./homePage";
import loadMenuPage from "./menuPage";
import loadInfoPage from "./infoPage";
import clearContent from "./clearContent";

function initPage() {
  const content = document.getElementById("content");

  // create header and append children
  const headerDiv = createElement({
    element: "div",
    className: "header",
    parent: content,
  });

  // create title element and append to headerDiv
  createElement({
    element: "div",
    className: "title",
    textContent: "UMI",
    parent: headerDiv,
  });

  // create tabs div and append to headerDiv
  const tabsDiv = createElement({
    element: "div",
    className: "tabs",
    parent: headerDiv,
  });

  // create tab elements and append them to tabsDiv

  // create home tab and add event listener to load homepage
  const homeTab = createElement({
    element: "li",
    id: "home-tab",
    className: "tab",
    textContent: "Home",
    parent: tabsDiv,
  });
  homeTab.addEventListener("click", () => {
    clearContent();
    loadHomePage();
  });

  // create menu tab and add event listener to load menupage
  const menuTab = createElement({
    element: "li",
    id: "menu-tab",
    className: "tab",
    textContent: "Menu",
    parent: tabsDiv,
  });
  menuTab.addEventListener("click", () => {
    clearContent();
    loadMenuPage();
  });
  const infoTab = createElement({
    element: "li",
    id: "info-tab",
    className: "tab",
    textContent: "Info",
    parent: tabsDiv,
  });
  infoTab.addEventListener("click", () => {
    clearContent();
    loadInfoPage();
  });
  const reserveTab = createElement({
    element: "li",
    id: "reserve-tab",
    className: "tab",
    textContent: "Reserve",
    parent: tabsDiv,
  });

  // create center element and append to content
  createElement({ element: "div", className: "center", parent: content });

  // create footer element and append to content
  const footerDiv = createElement({
    element: "div",
    className: "footer",
    parent: content,
  });

  // create address element and append to footerDiv
  createElement({
    element: "span",
    textContent: "125 Japan St. New York City, NY",
    parent: footerDiv,
  });

  // create phone number element and append to footerDiv
  createElement({
    element: "span",
    textContent: "345-453-4956",
    parent: footerDiv,
  });
}

export default initPage;
