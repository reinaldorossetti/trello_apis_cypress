/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

var test_id = 0

describe('Feature Board', () => {
  it('Validated new Board', () => {
    const project = {
      name: `${faker.company.name()}`,
    }

    cy.create_a_board(project)
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.body.name).to.equal(project.name)
        test_id = response.body.id
      })
  })

  it('Validated delete Board', () => {
    cy.delete_board(test_id)
      .then(response => {
        expect(response.status).to.equal(200)
      })
  })
})