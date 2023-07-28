import "./style.scss";

const buttons = document.querySelectorAll<HTMLButtonElement>(`.input__button`);

const screen = document.querySelector<HTMLElement>(`.screen__display`);

const lightBright = document.querySelector<HTMLElement>(`.light__bright`);

const lightDark = document.querySelector<HTMLElement>(`.light__dark`);

const everything = document.querySelector<HTMLElement>(`body`);

if (!buttons || !screen || !lightBright || !lightDark || !everything) {
  throw new Error(`issue with a query selector`);
}

buttons.forEach((button) => {
  button.addEventListener(`click`, () => {
    const value = button.dataset.value;

    if (value == "ac") {
      screen.innerText = `AC`;
      console.log(`${value} was clicked`);
    } else if (value === "+-") {
      screen.innerText = `+-`;
      console.log(`${value} was clicked`);
    } else if (value === "%") {
      screen.innerText = `%`;
      console.log(`${value} was clicked`);
    } else if (value === "/") {
      screen.innerText = `/`;
      console.log(`${value} was clicked`);
    } else if (value === "7") {
      screen.innerText = `7`;
      console.log(`${value} was clicked`);
    } else if (value === "8") {
      screen.innerText = `8`;
      console.log(`${value} was clicked`);
    } else if (value === "9") {
      screen.innerText = `9`;
      console.log(`${value} was clicked`);
    } else if (value === "x") {
      screen.innerText = `X`;
      console.log(`${value} was clicked`);
    } else if (value === "4") {
      screen.innerText = `4`;
      console.log(`${value} was clicked`);
    } else if (value === "5") {
      screen.innerText = `5`;
      console.log(`${value} was clicked`);
    } else if (value === "6") {
      screen.innerText = `6`;
      console.log(`${value} was clicked`);
    } else if (value === "-") {
      screen.innerText = `-`;
      console.log(`${value} was clicked`);
    } else if (value === "1") {
      screen.innerText = `1`;
      console.log(`${value} was clicked`);
    } else if (value === "2") {
      screen.innerText = `2`;
      console.log(`${value} was clicked`);
    } else if (value === "3") {
      screen.innerText = `3`;
      console.log(`${value} was clicked`);
    } else if (value === "+") {
      screen.innerText = `+`;
      console.log(`${value} was clicked`);
    } else if (value === "reverse") {
      screen.innerText = `undo`;
      console.log(`${value} was clicked`);
    } else if (value === "0") {
      screen.innerText = `0`;
      console.log(`${value} was clicked`);
    } else if (value === ".") {
      screen.innerText = `.`;
      console.log(`${value} was clicked`);
    } else if (value === "=") {
      screen.innerText = `=`;
      console.log(`${value} was clicked`);
    } else console.log("error");
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
