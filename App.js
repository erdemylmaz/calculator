const buttons = document.querySelectorAll(".button");
const screen = document.querySelector(".output");
let output = "";

for (let x = 0; x < buttons.length; x++) {
  buttons[x].addEventListener("click", (e) => {
    if (e.target.id == "equal") {
      screen.innerHTML = eval(screen.innerHTML);
      output = screen.innerHTML;
    } else if (e.target.id == "C") {
      output = "";
      screen.innerHTML = output;
    } else {
      output += e.target.id;
      screen.innerHTML = `${output}`;
    }
  });
}
