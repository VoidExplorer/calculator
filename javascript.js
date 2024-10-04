function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

const screen = document.querySelector(".screen");

screen.textContent = "0";
let operator, a, b;
const buttons = document.querySelector(".buttons-container");

buttons.addEventListener("click", (e) => {
  if (e.target.className === "operator") {
    a = Number(screen.textContent);
    operator = e.target.textContent;
    return;
  }

  if (e.target.textContent === "=") {
    if (!a) return;
    b = Number(screen.textContent);
    screen.textContent = operate(a, b, operator);
    return;
  }
  if (screen.textContent === "0") {
    if (e.target.textContent === "0") return;
    screen.textContent = "";
  }

  if (a) screen.textContent = "";
  if (screen.textContent.length > 5) return;
  if (e.target.textContent == "AC") {
    screen.textContent = "0";
    a = undefined;
    b = undefined;
    return;
  }
  // console.log(e.target.textContent);
  screen.textContent += e.target.textContent;
});