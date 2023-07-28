import "./style.scss";

const buttons = document.querySelectorAll<HTMLButtonElement>(`.input__button`);

if (!buttons) {
  throw new Error(`issue with button selector`);
}

buttons.forEach((button) => {
  button.addEventListener(`click`, () => {
    const value = button.dataset.value;

    if (value == "ac") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "+-") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "%") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "/") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "7") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "8") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "9") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "x") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "4") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "5") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "6") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "-") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "1") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "2") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "3") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "+") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "reverse") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "0") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === ".") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else if (value === "=") {
      // code to handle input
      console.log(`${value} was clicked`);
    } else console.log("error");
  });
});
