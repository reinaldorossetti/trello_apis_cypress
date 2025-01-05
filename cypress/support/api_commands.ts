import { faker } from '@faker-js/faker'
const API_TOKEN = `${Cypress.env('ACCESS_TOKEN')}`
const API_KEY = `${Cypress.env('API_KEY')}`

Cypress.Commands.add('create_a_board', _faker => {
  cy.request({
    method: 'POST',
    url: `/1/boards/?name=${_faker.name}&key=${API_KEY}&token=${API_TOKEN}`,
  })
})

// Cypress.Commands.add('api_getAllProjects', () => {
//   cy.request({
//     method: 'GET',
//     url: '/api/v4/projects/',
//     headers: { Authorization: accessToken },
//   })
// })

// Cypress.Commands.add('api_deleteProjects', () => {
//   cy.api_getAllProjects().then(res =>
//     res.body.forEach(project => cy.request({
//       method: 'DELETE',
//       url: `/api/v4/projects/${project.id}`,
//       headers: { Authorization: accessToken },
//     }))
//   )
// })
