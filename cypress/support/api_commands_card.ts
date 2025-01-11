/**
 * Cria um card, passando o id da lista e o nome do card, API_TOKEN, API_KEY.
 *
 * @type {Object.<int, string, string, string>}
 */
Cypress.Commands.add('create_a_card', (list_id, nome_card, API_TOKEN, API_KEY)  => {
  cy.request({
    method: 'POST',
    failOnStatusCode: false,
    url: `/1/cards?idList=${list_id}&key=${API_KEY}&token=${API_TOKEN}&name=${nome_card}`
    })
})

/**
 * Consulta um Card. Deve passa o id do board, API_TOKEN, API_KEY para função. criado para função.
 *
 * @type {Object.<number, string, string>}
 */
Cypress.Commands.add('get_card', (_id, API_TOKEN, API_KEY) => {
  cy.request({
    method: 'GET',
    failOnStatusCode: false,
    url: `/1/cards/${_id}?key=${API_KEY}&token=${API_TOKEN}`,
  })
})

/**
 * Crie uma nova lista em um quadro. É necessario para criar um card.
 * Deve passar o id do board, API_TOKEN, API_KEY para função.
 * 
 * @type {Object.<number, string, string>}
 */
Cypress.Commands.add('create_a_new_list', (_board_id, API_TOKEN, API_KEY) => {
  cy.request({
    method: 'POST',
    url: `1/lists?idBoard=${_board_id}&key=${API_KEY}&token=${API_TOKEN}&name=Automação`,
  })
})

/**
 * Atualiza um Card no Trello. Deve passa card_id, card_name, description para a função.
 *
 * @type {Object.<void>}
 */
Cypress.Commands.add('update_card', (card_id, card_name, description, API_TOKEN, API_KEY) => {
  cy.request({
    method: 'PUT',
    failOnStatusCode: false,
    url: `/1/cards/${card_id}?name=${card_name}&key=${API_KEY}&token=${API_TOKEN}&desc=${description}`,
  })
})

/**
 * Função deleta o card.
 * Deve passar o id do card, API_TOKEN, API_KEY para função.
 * 
 * @type {Object.<number, string, string>}
 */
Cypress.Commands.add('delete_card', (_id, API_TOKEN, API_KEY) => {
  cy.request({
    method: 'DELETE',
    failOnStatusCode: false,
    url: `/1/cards/${_id}?&key=${API_KEY}&token=${API_TOKEN}`,
  })
})
