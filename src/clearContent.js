function clearContent() {
  const centerDiv = document.querySelector(".center");
  while (centerDiv.firstChild) {
    centerDiv.removeChild(centerDiv.firstChild);
  }
}

export default clearContent;
