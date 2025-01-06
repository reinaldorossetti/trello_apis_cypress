/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

var board_id = 0

describe('Feature Board', () => {
  it('Validated new Board', () => {
    const project = {
      name: `${faker.company.name()}`,
    }

    cy.create_a_board(project)
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.body.name).to.equal(project.name)
        board_id = response.body.id
      })
  })

  it('Validated delete Board', () => {
    cy.open_boards()
    cy.delete_board(board_id)
      .then(response => {
        expect(response.status).to.equal(200)
      })
  })
})