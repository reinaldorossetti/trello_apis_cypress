/// <reference types="cypress" />
import { faker } from '@faker-js/faker'
import schema_create_card from "../../support/schemas/create_card"; // Importe o esquema JSON
import schema_get_card from "../../support/schemas/get_card"; // Importe o esquema JSON
import data_card from '../../fixtures/cards_data.json';  // Dados do card que esta no fixture.

// Para criação de um card é necessário passar o id da lista já criada.
// criei função para criar uma lista e retornar o id da lista. Mas o id do boarding está fixo pois o mesmo é limitado.
// "message": "Cannot create board as organization is at its board limit"

// Variáveis globais, estão fora do escopo do teste. Em caso de falha, a variável não é resetada.
var card_id = 0
const nome_card = `${faker.animal.petName()}`
const API_TOKEN = `${Cypress.env('ACCESS_TOKEN')}`
const API_KEY = `${Cypress.env('API_KEY')}`

before(() => {
  cy.open_boards(API_TOKEN, API_KEY)
  cy.create_a_new_list(data_card.board_id, API_TOKEN, API_KEY)
    .then(response => {
      expect(response.status).to.equal(200)
      data_card.list_id = response.body.id
    })
})

describe('Funcionalidade de Card', () => {
  it('CT001 - Cenário - Criação de um novo Card no Board do Trello - Teste Positivo', () => {
    cy.create_a_card(data_card.list_id, nome_card, API_TOKEN, API_KEY)
      .then(response => {
        card_id = response.body.id
        const idLength = card_id.toString().length
        expect(response.status).to.equal(200)
        expect(response.body.name).to.equal(nome_card)
        expect(response.body.idList).to.equal(data_card.list_id)
        expect(response.body.idBoard).to.equal(data_card.board_id)
        expect(idLength).to.eq(24); // Validar se o id do board tem 24 caracteres.
        // Validar o schema dos dados de retorno do endpoint.
        expect(response.body).to.be.jsonSchema(schema_create_card);
      })
  })

  it('CT002 - Cenário - Criação de um novo Card no Board com list_id inválido - Teste Negativo', () => {

    cy.create_a_card(1, nome_card, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(400)
        expect(response.body).to.equal("invalid value for idList")
      })
  })

  it('CT003 - Cenário - Consulta Card criado no Trello - Teste Positivo', () => {

    cy.get_card(card_id, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.body.name).to.equal(nome_card)
        expect(response.body.id).to.eq(card_id);
        // Validar o schema dos dados de retorno do endpoint.
        expect(response.body).to.be.jsonSchema(schema_get_card);
      })
  })

  it('CT004 - Cenário - Consulta um Card criado no Trello com card_id invalido - Teste Negativo', () => {

    cy.get_card(0, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(400)
        expect(response.body).to.equal("invalid id")
      })
  })

  it('CT005 - Cenário - Criação de um novo Card no Board com API_TOKEN inválido - Teste Negativo', () => {

    cy.create_a_card(data_card.list_id, nome_card, 12345, API_KEY)
      .then(response => {
        expect(response.status).to.equal(401)
        expect(response.body).to.equal("invalid app token")
      })
  })

  it('CT006 - Cenário - Criação de um novo Card no Board com API_KEY inválido - Teste Negativo', () => {

    cy.create_a_card(data_card.list_id, nome_card, API_TOKEN, 12345)
      .then(response => {
        expect(response.status).to.equal(401)
        expect(response.body).to.equal("invalid key")
      })
  })

  it('CT007 - Cenário - Atualizar um Card no Trello - Teste Positivo', () => {


    cy.update_card(card_id, data_card.board_name, data_card.description, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(200)
        expect(response.body.name).to.equal(data_card.board_name)
        expect(response.body.desc).to.equal(data_card.description)
        expect(response.body.id).to.eq(card_id); 
        // Validar o schema dos dados de retorno do endpoint.
        expect(response.body).to.be.jsonSchema(schema_get_card);
      })
  })

  it('CT008 - Cenário - Update um Card no Trello com id inválido - Teste Negativo', () => {
    cy.update_board(0, data_card.board_name, data_card.description, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(400)
        expect(response.body).to.equal("invalid id")
      })
  })

  it('CT009 - Cenário - Exclusão de um Card no Board do Trello - Teste Positivo', () => {
    cy.delete_card(card_id, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(200)
      })
  })

  it('CT010 - Cenário - Exclusão de um Card no Board com card_id inexistente - Teste Negativo', () => {
    cy.delete_card(1, API_TOKEN, API_KEY)
      .then(response => {
        expect(response.status).to.equal(400)
        expect(response.body).to.equal("invalid id")
      })
  })

  it('CT011 - Cenário - Exclusão de um Card no Board com API_TOKEN inválido - Teste Negativo', () => {
    cy.delete_card(1, 12345, API_KEY)
      .then(response => {
        expect(response.status).to.equal(401)
        expect(response.body).to.equal("invalid app token")
      })
  })

  it('CT012 - Cenário - Exclusão de um Card no Board com API_KEY inválido - Teste Negativo', () => {
    cy.delete_card(1, API_TOKEN, 123)
      .then(response => {
        expect(response.status).to.equal(401)
        expect(response.body).to.equal("invalid key")
      })
  })

})