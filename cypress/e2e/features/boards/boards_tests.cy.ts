/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
import schema_create_board from "../../../support/schemas/create_board"; // Importe o esquema JSON
import schema_get_board from "../../../support/schemas/get_board"; // Importe o esquema JSON

// Variáveis globais, estão fora do escopo do teste. Em caso de falha, a variável não é resetada.
var board_id = 0
var board_name = ""
var description = ""
const API_TOKEN = `${Cypress.env('ACCESS_TOKEN')}`
const API_KEY = `${Cypress.env('API_KEY')}`

describe('Funcionalidade de Board, que representa o quadro no Trello.', () => {

  it('CT001 - Cenário - Criação de um novo Board no Trello - Teste Positivo', () => {
    const project = {
      name: `${faker.company.name()}`,
    }

    cy.create_a_board(project, API_TOKEN, API_KEY)
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

  it('CT002 - Cenário - Criação de um novo Board no Trello com project name vazio - Teste Negativo', () => {
    const project = {
      name: ``,
    }
    cy.create_a_board(project, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal("invalid value for name")
        expect(response.body.error).to.equal("ERROR")
      })
  })

  it('CT003 - Cenário - Criação de um novo Board com API_TOKEN inválido - Teste Negativo', () => {
    const project = {
      name: `${faker.company.name()}`,
    }

    cy.create_a_board(project, 0, API_KEY)
      .then(response => {
        expect(response.status).to.equal(401)
        expect(response.body).to.equal("invalid app token")
      })
  })

  it('CT004 - Cenário - Criação de um novo Board com API_KEY inválido - Teste Negativo', () => {
    const project = {
      name: `${faker.company.name()}`,
    }

    cy.create_a_board(project, API_TOKEN, 0)
      .then(response => {
        expect(response.status).to.equal(401)
        expect(response.body).to.equal("invalid key")
      })
  })

  it('CT005 - Cenário - Consulta do novo Board criado no Trello - Teste Positivo', () => {

    cy.get_board(board_id, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.body.name).to.equal(board_name)
        expect(response.body.id).to.eq(board_id); // Validar se o id do board tem 24 caracteres.
        // Validar o schema dos dados de retorno do endpoint.
        expect(response.body).to.be.jsonSchema(schema_get_board);
      })
  })

  it('CT006 - Cenário - Consulta do novo Board criado no Trello com board_id invalido - Teste Negativo', () => {

    cy.get_board(0, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(400)
        expect(response.body).to.equal("invalid id")
      })
  })

  it('CT007 - Cenário - Update no Board no Trello - Teste Positivo', () => {
    var board_name = "Automação Cypress - Trello"
    var description = "Teste de Update no Board"

    cy.update_board(board_id, board_name, description, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.body.name).to.equal(board_name)
        expect(response.body.desc).to.equal(description)
        expect(response.body.id).to.eq(board_id); // Validar se o id do board tem 24 caracteres.
        // Validar o schema dos dados de retorno do endpoint.
        expect(response.body).to.be.jsonSchema(schema_get_board);
      })
  })

  it('CT008 - Cenário - Update no Board no Trello com id inválido - Teste Negativo', () => {
    var board_name = "Automação Cypress - Trello"
    var description = "Teste de Update no Board"

    cy.update_board(0, board_name, description, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(400)
        expect(response.body).to.equal("invalid id")
      })
  })

  it('CT009 - Cenário - Deletar um Board no Trello - Teste Positivo', () => {
    cy.delete_board(board_id, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(200)
      })
  })

  it('CT010 - Cenário - Deletar um Board no Trello com um board_id inválido - Teste Negativo', () => {
    cy.delete_board(0, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(400)
        expect(response.body).to.equal("invalid id")
      })
  })

  it('CT011 - Cenário - Deletar um Board no Trello com um API_TOKEN inválido - Teste Negativo', () => {
    cy.delete_board(board_id, 0, API_KEY)
      .then(response => {
        expect(response.status).to.equal(401)
        expect(response.body).to.equal("invalid app token")
      })
  })

  it('CT012 - Cenário - Deletar um Board no Trello com um API_KEY inválido - Teste Negativo', () => {
    cy.delete_board(board_id, API_TOKEN, 0)
      .then(response => {
        expect(response.status).to.equal(401)
        expect(response.body).to.equal("invalid key")
      })
  })
})