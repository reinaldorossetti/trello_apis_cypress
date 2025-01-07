/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
import schema_create_board from "../../../support/schemas/create_board"; // Importe o esquema JSON
import schema_get_board from "../../../support/schemas/get_board"; // Importe o esquema JSON

var board_id = 0
var board_name = ""
var description = ""

describe('Funcionalidade de Board, que representa o quadro no Trello.', () => {
  it('CT001 - Cenário - Criação de um novo Board no Trello - Teste Positivo', () => {
    const project = {
      name: `${faker.company.name()}`,
    }

    cy.create_a_board(project)
      .then(response => {
        board_id = response.body.id
        board_name = response.body.name
        const idLength = board_id.toString().length
        expect(response.status).to.equal(200)
        expect(response.body.name).to.equal(project.name)
        expect(response.body.desc).to.equal(description)
        
        expect(idLength).to.eq(24); // Validar se o id do board tem 24 caracteres.
        // Validar o schema dos dados de retorno do endpoint.
        expect(response.body).to.be.jsonSchema(schema_create_board);
      })
  })

  it('CT002 - Cenário - Consulta do novo Board criado no Trello - Teste Positivo', () => {

  cy.get_board(board_id)
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.body.name).to.equal(board_name)
        expect(response.body.id).to.eq(board_id); // Validar se o id do board tem 24 caracteres.
        // Validar o schema dos dados de retorno do endpoint.
        expect(response.body).to.be.jsonSchema(schema_get_board);
      })
  })

  it('CT003 - Cenário - Update no Board no Trello - Teste Positivo', () => {
    var board_name = "Automação Cypress - Trello"
    var description = "Teste de Update no Board"
    
    cy.update_board(board_id, board_name, description)
        .then(response => {
          expect(response.status).to.equal(200)
          expect(response.body.name).to.equal(board_name)
          expect(response.body.desc).to.equal(description)
          expect(response.body.id).to.eq(board_id); // Validar se o id do board tem 24 caracteres.
          // Validar o schema dos dados de retorno do endpoint.
          expect(response.body).to.be.jsonSchema(schema_get_board);
        })
    })

  it('CT004 - Cenário - Deletar um Board no Trello - Teste Positivo', () => {
    cy.open_boards()
    cy.delete_board(board_id)
      .then(response => {
        expect(response.status).to.equal(200)
      })
  })
})