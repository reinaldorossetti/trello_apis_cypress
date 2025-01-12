# Cypress com TypeScript, Mochawesome, Github Actions.

** Exemplo de estrutura de automação de testes de API, feita com Cypress em TypeScript, e Mochawesome fornece o relatório dos testes. **

- [Instalação e execução](#instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonando o repositório](#clonando-o-repositório)
- [Testes](#testes-de-api)
  - [Pré-requisito](#pré-requisito)
  - [Executando os testes](#executando-os-testes)
  - [Resultado](#resultado)
- [Sobre o projeto](#sobre-o-projeto)
  - [Dependências utilizadas](#dependências-utilizadas)
  - [Estrutura de diretórios](#estrutura-de-diretórios)
  - [Ambiente](#ambiente)
- [Lint](#lint)

---

## Instalação e execução

### Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

### Clonando o repositório

Todos os comandos abaixo são feitos no terminal

**Passo 1** - Faça um clone do repositório e acesse o diretório criado pelo clone.

```sh
git https://github.com/reinaldorossetti/trello_apis_cypress.git
cd trello_apis_cypress
```

**Passo 2** - Instale as dependências do projeto:

```sh
npm install
```
### Testes de API

**Passo 3** - Executando o projeto e gerando o Relatório:

#### Executando os testes

### Pre-requisito:
Criar o arquivo:
```
cypress.env.json
```
Com o conteúdo, do idOrganization, ACCESS_TOKEN e API_KEY do seu usuário do trello:
````
{
  "ACCESS_TOKEN": "",
  "API_KEY": "",
  "idOrganization":""
}

````

Caso queira apenas rodar os testes, sem precisar subir ambiente, execute o seguinte comando:

> Os testes serão executados em cima da url [TRELLO](https://api.trello.com/)

#### Rodar os Testes de API.
```sh
npm run tests-prod
```
Para exibir Cypress:
```sh
npm run open
```
Para exibir o Report:
```sh
npm run report
```

As variáveis por ambiente estão definidos dentro dos arquivos cypress.config.ts

#### Resultado

Exibir o relatório no github:
```sh
https://reinaldorossetti.github.io/trello_apis_cypress/reports/mochawesomeReport.html
```
Caminho do Actions:
https://github.com/reinaldorossetti/trello_apis_cypress/actions

**Passo 4** - Como funciona a Estrutura do Projeto:

As dependências estão definidas no [package.json](./package.json).

### Estrutura de diretórios

```
cypress-typescript-allure-report/  
 ├─ .github                                 - Arquivos de Esteira do GitActions
 ├─ cypress/                                - Pasta do Cypress com as Automações.
 |   ├─ e2e/ features /                     - Pasta dos testes end to end, separado por features.
 |       ├─ nome_da_feature
 |          ├─ boards_tests.cy.ts           - Feature de Boards, contendo a execução dos testes.
testada.
 |   └─ support/  
 |       ├─ api_commands_board.ts           - Comandos personalizados adicionado ao Cypress.Commands da feature de boards.
 |       ├─ e2e.ts                          - Os imports e Setup para os testes e2e.  
 |       └─ index.d.js                      - Os comandos que estão no commands.ts, precisam ser declados na interface Chainable<Subject>.
 ├─ cypress.config.ts                       - Arquivo principal de configuração do Cypress.
 ├─ cypress.env.json                        - Dados que seram utilizados nos testes, utilizado o Cypress.env
 ├─ package.json                            - Arquivo de Setup do Nodejs/NPM, vai conter os comandos de execução e as Bibliotecas.
 ├─ README.md                               - Documentação básica do projeto.
 └─ tsconfig.json                           - Arquivo de Configuração do TypeScript.
```

### Em casos de erro de certificado.
npm config set strict-ssl false    
NODE_TLS_REJECT_UNAUTHORIZED=0 cypress run --env allure=true --env video=true --reporter mochawesome    
npx cypress run --config-file cypress.config.ts  
npx mochawesome-merge ./mochawesome-report/*.json > mochawesomeReport.json  

### Referências:  
Referências sobre o framework utilizado nos testes.
[Cypress](https://www.cypress.io)  
[TypeScript](https://docs.cypress.io/app/tooling/typescript-support)  

Ferramenta converte o retorno da request em json schema:  
[Schema Tools](https://www.jsonschema.net/app/schemas/0)  

### Documentação da API:  
[Trello API Cards](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-group-cards)  
[Trello API Boards](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-group-boards)