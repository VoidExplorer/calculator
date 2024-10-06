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

document.addEventListener("keydown", interact)
buttons.addEventListener("click", interact)

let keys = "1234567890/*-+=.⌫AC"
let operators = "+-*/"

function interact(e) {

  let key = e.type === "keydown" ? e.key : e.target.textContent;
  if (!key || (!keys.includes(key) && e.keyCode !== 13 && e.keyCode !== 8)) return;
  if(key === "." && String(screen.textContent).includes(".")) return;

  if(screen.textContent === "ehe?") screen.textContent = "0";

  if (operators.includes(key)) {
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
      operator = key;
      return;
    }
    a = Number(screen.textContent);
    result = Math.round(a*1000)/1000;
    operator = key;
    return;
  }

  if (key === "=" || e.keyCode === 13) {
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
    if (key === "0") return;
    if (key !== ".") screen.textContent = "";
  }

  if (clearDisplay) {
    screen.textContent = "";
    clearDisplay = false;
  }

  if (key == "AC") {
    screen.textContent = "0";
    a = undefined;
    b = undefined;
    clearDisplay = false;
    return;
  }

  if(key === "⌫" || e.keyCode === 8) {
    screen.textContent = String(screen.textContent).slice(0,-1);
    if (screen.textContent === "") screen.textContent = "0";
    return;
  }

  if (screen.textContent.length > 5) return;

  // console.log(e.target.textContent);
  screen.textContent += key;
};