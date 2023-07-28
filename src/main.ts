import "./style.scss";

const buttons = document.querySelectorAll<HTMLButtonElement>(`.input__button`);

const screen = document.querySelector<HTMLElement>(`.screen__display`);

const lightBright = document.querySelector<HTMLElement>(`.light__bright`);

const lightDark = document.querySelector<HTMLElement>(`.light__dark`);

const everything = document.querySelector<HTMLElement>(`body`);

const sumHistoryDisplay = document.querySelector<HTMLElement>(`.screen__sum`);

const sumHistory: string[] = [];

if (
  !buttons ||
  !screen ||
  !lightBright ||
  !lightDark ||
  !everything ||
  !sumHistoryDisplay
) {
  throw new Error(`issue with a query selector`);
}
//
//
//
//

const updateDisplay = (value: string) => {
  sumHistory.push(value);
  sumHistoryDisplay.innerText = sumHistory.join("  ");
};

const clearDisplay = () => {
  sumHistory.length = 0;
  sumHistoryDisplay.innerText = "";
};

//
//
//
//

buttons.forEach((button) => {
  button.addEventListener(`click`, () => {
    const value = button.dataset.value;

    if (value == "ac") {
      screen.innerText = `AC`;
      clearDisplay();
    } else if (value === "+-") {
      screen.innerText = `+-`;
      updateDisplay(value);
    } else if (value === "%") {
      screen.innerText = `%`;
      updateDisplay(value);
    } else if (value === "/") {
      screen.innerText = `/`;
      updateDisplay(value);
    } else if (value === "7") {
      screen.innerText = `7`;
      updateDisplay(value);
    } else if (value === "8") {
      screen.innerText = `8`;
      updateDisplay(value);
    } else if (value === "9") {
      screen.innerText = `9`;
      updateDisplay(value);
    } else if (value === "x") {
      screen.innerText = `X`;
      updateDisplay(value);
    } else if (value === "4") {
      screen.innerText = `4`;
      updateDisplay(value);
    } else if (value === "5") {
      screen.innerText = `5`;
      updateDisplay(value);
    } else if (value === "6") {
      screen.innerText = `6`;
      updateDisplay(value);
    } else if (value === "-") {
      screen.innerText = `-`;
      updateDisplay(value);
    } else if (value === "1") {
      screen.innerText = `1`;
      updateDisplay(value);
    } else if (value === "2") {
      screen.innerText = `2`;
      updateDisplay(value);
    } else if (value === "3") {
      screen.innerText = `3`;
      updateDisplay(value);
    } else if (value === "+") {
      screen.innerText = `+`;
      updateDisplay(value);
    } else if (value === "reverse") {
      screen.innerText = `undo`;
      updateDisplay(value);
    } else if (value === "0") {
      screen.innerText = `0`;
      updateDisplay(value);
    } else if (value === ".") {
      screen.innerText = `.`;
    } else if (value === "=") {
      screen.innerText = `=`;
      updateDisplay(value);
    } else alert("error");
  });
});

lightBright.addEventListener(`click`, () => {
  everything.classList.add(`light-mode`);
  everything.classList.remove(`dark-mode`);
});

lightDark.addEventListener(`click`, () => {
  everything.classList.add(`dark-mode`);
  everything.classList.remove(`light-mode`);
});
