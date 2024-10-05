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
let operator, a, b, result;
const buttons = document.querySelector(".buttons-container");

buttons.addEventListener("click", (e) => {
  if (e.target.className === "operator") {
    if(operator) {
      console.log("hello");
      b = Number(screen.textContent);
      result = operate(result, b, operator);
      screen.textContent = result;
      operator = e.target.textContent;
      return;
    }
    a = Number(screen.textContent);
    result =a;
    operator = e.target.textContent;
    return;
  }

  if (e.target.textContent === "=") {
    if (!a) return;
    b = Number(screen.textContent);
    result = operate(result, b, operator);
    screen.textContent = result;
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