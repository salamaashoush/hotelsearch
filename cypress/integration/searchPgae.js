describe("Search page", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000");
  });
  it(".should() - assert that <title> is correct", function() {
    cy.title().should("include", "Search Hotels");
  });
  it("show a place holder", function() {
    cy.contains("Premature");
  });
  it("send a xhr request and fully laoded", function() {
    cy.server();
    cy.route("/", {}).as("search");
    cy.wait("@search").contains("Search");
  });
});
