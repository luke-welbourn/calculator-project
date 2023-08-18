import "./style.scss";

import { lightMode } from "./_lightMode";

const buttons = document.querySelectorAll<HTMLButtonElement>(`.input__button`);

const screen = document.querySelector<HTMLElement>(`.screen__display`);

const sumHistoryDisplay = document.querySelector<HTMLElement>(`.screen__sum`);

const sumHistory: string[] = [];

let currentNumber = "";
//used in main screen input

if (!buttons || !screen || !sumHistoryDisplay) {
  throw new Error(`issue with a query selector`);
}

const checkForNumber = (value: any) => {
  if (
    value === "0" ||
    value === "." ||
    value === "1" ||
    value === "2" ||
    value === "3" ||
    value === "4" ||
    value === "5" ||
    value === "6" ||
    value === "7" ||
    value === "8" ||
    value === "9"
  ) {
    return true;
  }
};
//
//
//
//
// update display takes value of a button and updates the sumHistoryDisplay

const updateDisplay = (value: string) => {
  const lastEntry = sumHistory[sumHistory.length - 1];
  // setting the last entry in sum history so we know it

  if (lastEntry && lastEntry.includes(".") && !isNaN(Number(value))) {
    sumHistory[sumHistory.length - 1] += value;
    // if the last entry is a number with a dot && our input is a number we need to append it to the last value
  } else if (checkForNumber(value) === true) {
    if (lastEntry && !isNaN(Number(lastEntry))) {
      sumHistory[sumHistory.length - 1] += value;
    } else {
      sumHistory.push(value);
    }
  } else {
    sumHistory.push(value);
  }

  sumHistoryDisplay.innerText = sumHistory.join(" ");
};

const clearDisplay = () => {
  sumHistory.length = 0;
  sumHistoryDisplay.innerText = "";
  currentNumber = "";
};

//
// doSum takes in no input but rather takes the existing sumHistory currently an array splits it into two arrays, one of number and one of operators
// it sets a result and uses the two arrays to do the calculation.
//

const doSum = () => {
  const equationString = sumHistory.join(" ");
  const operators = equationString.match(/[+\-*/]/g); // Gets all the symbols (array)
  const numbers = equationString.split(/[+\-*/]/g).map(Number); // Gets all the numbers (array)

  let result = numbers[0];

  if (!operators || !numbers) {
    throw new Error(`problem with calculate sum array generation`);
  }

  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    const number = numbers[i + 1];

    switch (operator) {
      case "+":
        result += number;
        break;
      case "-":
        result -= number;
        break;
      case "*":
        result *= number;
        break;
      case "/":
        result /= number;
        break;
      default:
        break;
    }
  }
  return result;
};

//
//
//
// showOnScreen takes button value, then depending on the value will either append or show it on the main screen.

const showOnScreen = (value: string) => {
  const validOperators = ["+", "-", "*", "/"];
  const validNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

  if (value === "." && currentNumber.includes(".")) {
    return;
  }

  if (validOperators.includes(value)) {
    screen.innerText = value;
    currentNumber = "";
  } else if (validNumbers.includes(value)) {
    currentNumber += value;
    screen.innerText = currentNumber;
  }
};
//
// new addition flip handles the -+ button using the sumHistory and then updates both displays and sumhistory

const flip = () => {
  const lastEntry = sumHistory[sumHistory.length - 1];
  const lastEntryNumber = parseInt(lastEntry);
  const flipped = lastEntryNumber * -1;
  if (!isNaN(Number(lastEntry))) {
    sumHistory[sumHistory.length - 1] = flipped.toString();
    sumHistoryDisplay.innerText = sumHistory.join(" ");
    screen.innerText = flipped.toString();
  }
};

// here is a forEachloop that adds event listeners for each button and then runs functions.

buttons.forEach((button) => {
  button.addEventListener(`click`, () => {
    const value = button.dataset.value;

    if (value == "ac") {
      screen.innerText = ``;
      clearDisplay();
    } else if (value === "+-") {
      flip();
    } else if (value === "%") {
      screen.innerHTML = `&#x1F341;`;
      updateDisplay(`This feature is currently being developed`);
    } else if (value === "reverse") {
      screen.innerHTML = `&#x1F341;`;
      updateDisplay(`This feature is currently being developed`);
    } else if (value === "=") {
      const result = doSum();
      screen.innerText = `${result}`;
      sumHistory.length = 0;
      sumHistoryDisplay.innerText = `${result}`;
      sumHistory.push(`${result}`);
      currentNumber = "";
    } else {
      // covers any number of symbol with no special rule, thank you to Charlie
      showOnScreen(`${value}`);
      updateDisplay(`${value}`);
    }
  });
});

lightMode();
