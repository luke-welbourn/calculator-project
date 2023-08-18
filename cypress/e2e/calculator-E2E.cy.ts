const push4buttons = (value1, value2, value3, value4) => {
  value1.click();
  value2.click();
  value3.click();
  value4.click();
};

describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174/");
  });

  it("should be able to correctly add numbers together", () => {
    const button1 = cy.get(".button1");
    const button2 = cy.get(".button2");
    const button3 = cy.get(".button3");
    const button4 = cy.get(".button4");
    const button5 = cy.get(".button5");
    const button6 = cy.get(".button6");
    const button7 = cy.get(".button7");
    const button8 = cy.get(".button8");
    const button9 = cy.get(".button9");
    const button0 = cy.get(".button0");
    const buttonplus = cy.get(".buttonplus");
    const buttonminus = cy.get(".button-");
    const buttondivide = cy.get(".buttondivide");
    const buttonequal = cy.get(".buttonequal");
    const buttondecimal = cy.get(".buttondot");
    const screene2e = cy.get(".screen");

    push4buttons(button1, buttonplus, button3, buttonequal);

    screene2e.children().should("contain", "4");
  });
});
