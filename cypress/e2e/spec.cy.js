describe('# Game result text\n', () => {
  it('- X wins\n', () => {
    cy.visit('/')
    cy.getByE2ESelector("square-0").click()
    cy.getByE2ESelector("square-1").click()
    cy.getByE2ESelector("square-3").click()
    cy.getByE2ESelector("square-4").click()
    cy.getByE2ESelector("square-6").click()
    cy.getByE2ESelector("status").invoke("text").should("be.eq", "Winner: X")
  })

  it('- O wins\n', () => {
    cy.visit('/')
    cy.getByE2ESelector("square-0").click()
    cy.getByE2ESelector("square-1").click()
    cy.getByE2ESelector("square-3").click()
    cy.getByE2ESelector("square-4").click()
    cy.getByE2ESelector("square-8").click()
    cy.getByE2ESelector("square-7").click()
    cy.getByE2ESelector("status").invoke("text").should("be.eq", "Winner: O")
  })
})