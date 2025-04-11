const red = document.querySelector(".red");
const orange = document.querySelector(".orange");

const center = document.querySelector(".center");
const getBG = (selectedElement) => {
  return window.getComputedStyle(red).backgroundColor;
};

const magicColorChager = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    center.style.backgroundColor = color;
  });
};
magicColorChager(red, getBG(red));
magicColorChager(orange, getBG(orange));
