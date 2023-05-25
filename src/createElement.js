function createElement({
  element,
  id = "",
  className = null,
  textContent = "",
  parent = null,
}) {
  if (!element) {
    throw new Error('createElement requires an "element" parameter.');
  }
  const newElement = document.createElement(element);
  if (className) newElement.classList.add(className);
  newElement.id = id;
  newElement.textContent = textContent;
  if (parent) parent.appendChild(newElement);

  return newElement;
}

export default createElement;
