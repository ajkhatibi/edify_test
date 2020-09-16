describe("My First Test", () => {
  it("Visit site", () => {
    // eslint-disable-next-line no-undef
    cy.visit("http://localhost:3000/");
  });
  it("click on several post", () => {
    cy.contains("qui est esse").click();
    cy.contains("eum et est occaecati").click();
    cy.contains("nesciunt quas odio").click();
  });
  it("clicking on details button and navigate to there and back", () => {
    cy.get("#item1").click();
    cy.get("#details_go_back_button").click();
  });
  it("go to favorites pages and see if list is correct", () => {
    cy.get("#favorite_button").click();
  });
});
