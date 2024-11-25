// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when cliched again

let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    currMode = "light";
    body.classList.remove("dark");
    body.classList.add("light");
  }
  console.log(currMode);
});
