/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
import schema_create_board from "../../../support/schemas/create_board"; // Importe o esquema JSON

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
        // Validar o schema dos dados de retorno do endpoint.
        expect(response.body).to.be.jsonSchema(schema_create_board);
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