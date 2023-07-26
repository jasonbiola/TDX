// pinElementToTop.js

// Function to pin the element with class "DetailAction" containing the text "Report a Problem" as the top item
function pinElementToTop() {
  const divSidebar = document.getElementById("divSidebar");
  const elements = divSidebar.getElementsByClassName("DetailAction");

  let targetElement = null;
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.innerText.includes("Report a Problem")) {
      targetElement = element;
      break;
    }
  }

  if (targetElement) {
    // Move the target element to the top of the column
    divSidebar.prepend(targetElement);
  }
}

