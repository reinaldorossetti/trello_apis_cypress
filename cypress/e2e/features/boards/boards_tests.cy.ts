/// <reference types="cypress" />
import { faker } from '@faker-js/faker'

describe('Create Board', () => {
  it('successfully', () => {
    const project = {
      name: `${faker.company.name()}`,
    }

    cy.create_a_board(project)
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.body.name).to.equal(project.name)
      })
  })
})