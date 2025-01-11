const idOrganization = `${Cypress.env('idOrganization')}`

/**
 * Cria um board, passando o nome do board para função.
 *
 * @type {Object.<string>}
 */
Cypress.Commands.add('create_a_board', (_faker, API_TOKEN, API_KEY) => {
  cy.request({
    method: 'POST',
    failOnStatusCode: false,
    url: `/1/boards/?idOrganization=${idOrganization}&name=${_faker.name}&key=${API_KEY}&token=${API_TOKEN}`,
  })
})

/**
 * Abre um board, é necessario para deletar o mesmo. Não precisa passar nada para função.
 *
 * @type {Object.<void>}
 */
Cypress.Commands.add('open_boards', (API_TOKEN, API_KEY) => {
  cy.request({
    method: 'GET',
    url: `/1/members/me?boards=open&key=${API_KEY}&token=${API_TOKEN}`,
  })
})

/**
 * Consulta um boarding. Deve passa o id do board criado para função.
 *
 * @type {Object.<int>}
 */
Cypress.Commands.add('get_board', (_id, API_TOKEN, API_KEY) => {
  cy.request({
    method: 'GET',
    failOnStatusCode: false,
    url: `/1/boards/${_id}?key=${API_KEY}&token=${API_TOKEN}`,
  })
})


/**
 * Atualiza um boarding. Deve passa board_id, board_name, description para a função.
 *
 * @type {Object.<void>}
 */
Cypress.Commands.add('update_board', (board_id, board_name, description, API_TOKEN, API_KEY) => {
  cy.request({
    method: 'PUT',
    failOnStatusCode: false,
    url: `/1/boards/${board_id}?name=${board_name}&key=${API_KEY}&token=${API_TOKEN}&desc=${description}`,
  })
})

/**
 * Deleta um board, passando o id do board criado para função.
 *
 * @type {Object.<string>}
 */
Cypress.Commands.add('delete_board', (_id, API_TOKEN, API_KEY) => {
  cy.request({
    method: 'DELETE',
    failOnStatusCode: false,
    url: `/1/boards/${_id}?&key=${API_KEY}&token=${API_TOKEN}`,
  })
})
