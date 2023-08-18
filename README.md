# Calculator Web App

This project is a calculator web app built using HTML, SCSS, and JavaScript/TypeScript. The goal of the project is to create a web application that accepts user inputs, performs calculations, and displays the results based on the inputs provided through the calculator buttons.

## Project Requirements

The following requirements were set for this project:

1. Build a deployed website using GitHub Pages.
2. Maintain a public GitHub repository for the project's codebase.
3. Provide a detailed README.md file for the project.
4. Make at least 15 Git commits to document the development stages.
5. Create a responsive design that works on different screen widths, following a mobile-first approach.
6. Accept a minimum of 2 inputs, perform operations, and display outputs.
7. Do not use the `eval()` method for calculations due to security concerns.
8. Ensure highly readable code with well-chosen names and proper indentation.

## Project Goals

The project aims to achieve the following goals:

1. **Working Calculator:** The primary objective is to create a fully functional calculator. This will test your comprehension of JavaScript and problem-solving skills.
2. **Git and GitHub Practice:** This project provides an opportunity to practice using Git and GitHub flow. Aim for frequent commits and good version control practices.
3. **Application of Learning:** Apply the concepts you've learned so far in the course. Additionally, take the chance to enhance the UI using SCSS, BEM, and other relevant techniques.

## Code Snippets

Below are two code snippets from the project to illustrate key aspects:

### Snippet : The core functionality

- This piece of code is responsible for doing more work than any other function. It adds event listeners to buttons; where each button checks the state of the calculator and then proceeds to do different things depending on that state. Though still large It has been refactored to reduce it and incorporates a number of functions which I am also proud of.

```typescript
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
      showOnScreen(`${value}`);
      updateDisplay(`${value}`);
    }
  });
});
```

# Getting Started

To clone and run the project locally, follow these steps:

1. Clone the repository: git clone [https://github.com/luke-welbourn/calculator-project.git]
2. Run an npm install
3. Run a npm run dev, that should open a local version of the code for you to try

# About Me

I'm a junior software developer in training, passionate about web development and eager to learn. If you're interested in collaborating, discussing coding concepts, or simply connecting, feel free to reach out!

Check out my Personal Portfolio project in progress:

https://luke-welbourn.github.io/personal-portfolio/

Happy coding! 🚀
