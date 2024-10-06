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
let operator, a, b, result, clearDisplay;
const buttons = document.querySelector(".buttons-container");

buttons.addEventListener("click", (e) => {

  if (!e.target.type) return;

  if(screen.textContent === "ehe?") screen.textContent = "0";

  if (e.target.className === "operator") {
    clearDisplay = true;
    if(operator) {
      console.log("hello");
      b = Number(screen.textContent);
      result = operate(result, b, operator);
      if(result === Infinity) {
        screen.textContent = "ehe?";
        a = undefined;
        b = undefined;
        return;
      }
      screen.textContent = result;
      operator = e.target.textContent;
      return;
    }
    a = Number(screen.textContent);
    result = Math.round(a*1000)/1000;
    operator = e.target.textContent;
    return;
  }

  if (e.target.textContent === "=") {
    if (!a || !operator) return;
    b = Number(screen.textContent);
    result = operate(result, b, operator);
    if(result === Infinity) {
      screen.textContent = "ehe?";
      a = undefined;
      b = undefined;
      return;
    }
    result = Math.round(result*1000)/1000
    screen.textContent = result;
    operator = undefined;
    clearDisplay = true;
    return;
  }

  if (operator && !a) {
    operator = undefined;
  }
  
  if (screen.textContent === "0") {
    if (e.target.textContent === "0") return;
    if (e.target.textContent !== ".") screen.textContent = "";
  }

  if (clearDisplay) {
    screen.textContent = "";
    clearDisplay = false;
  }

  if (e.target.textContent == "AC") {
    screen.textContent = "0";
    a = undefined;
    b = undefined;
    clearDisplay = false;
    return;
  }

  if (screen.textContent.length > 5) return;

  // console.log(e.target.textContent);
  screen.textContent += e.target.textContent;
});