# Cypress com TypeScript, Mochawesome, Github Actions.

** Exemplo de estrutura de automação de testes de API, feita com Cypress em TypeScript, e Mochawesome fornece o relatório dos testes. **

- [Pré-requisitos](#pré-requisitos)
  - [Clonando o repositório](#clonando-o-repositório)
- [Testes]
  - [Instale as dependências do projeto](#Instale-as-dependências-do-projeto)
  - [Executando o projeto](#Executando-o-projeto)
  - [Resultado da Execução](#Resultado-da-Execução)
- [Estrutura do Projeto](#Estrutura-do-Projeto)
  - [Dependências utilizadas](#Dependências-utilizadas)
  - [Estrutura de diretórios](#estrutura-de-diretórios)
  - [Em casos de erros](#Em-casos-de-erros)
- [Referências](#Referências)
- [Documentação da API](#Documentação-da-API)

---

### Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

## Antes de clonar ou executar esse projeto localmente no computador, é necessário ter os pré-requisitos e seguir as instruções abaixo :point_down:

### Sistema Operacional 
- macOS 10.9 ou superior (Intel ou Apple Silicon 64-bit (x64 ou arm64))
- Linux Ubuntu 20.04 ou superior, Fedora 21 e Debian 8 (x86_64 ou Arm 64 bits (x64 ou arm64)) 
- Windows 10 ou superior (apenas 64 bits)

### Hardware
- Mínimo de 2 CPUs para rodar o Cypress
- 1 CPU adicional se a gravação de vídeo estiver ativada

### Memória RAM
- 8 GB ou superior para execuções de teste mais longos

## Node versão 18.20.5 (versão usada na esteira)
- Baixar e instalar o [node v18.20.5](https://nodejs.org/en/blog/release/v18.20.5)

Windows 32-bit Installer: https://nodejs.org/dist/v18.20.5/node-v18.20.5-x86.msi  
Windows 64-bit Installer: https://nodejs.org/dist/v18.20.5/node-v18.20.5-x64.msi  
macOS 64-bit Installer: https://nodejs.org/dist/v18.20.5/node-v18.20.5.pkg  


- Abrir um novo cmder ou outro terminal de preferência
- Informar o comando abaixo para confirmar se o node realmente foi instalado
```
node --version
```
- Verificar se foi retornada a mesma versão do node instalada anteriormente:
```
vv18.20.5
```
- Informar o comando abaixo para confirmar se o npm realmente foi instalado
```
npm --version
```
- E verificar se foi retornada essa mesma versão do npm:
```
10.8.2
```
- Instalação do Vs-code para abrir o projeto, no mac ou windows configure pra executar via terminal.
https://www.devmedia.com.br/guia-completo-do-visual-studio-code/43827
https://code.visualstudio.com/download

### Clonando o repositório

Todos os comandos abaixo são feitos no terminal

Faça um clone do repositório e acesse o diretório criado pelo clone.

- Informar o comando abaixo para clonar este repositório via "HTTPS"

```sh
git clone https://github.com/reinaldorossetti/trello_apis_cypress.git
cd trello_apis_cypress
code .
```

- Ou informar o comando abaixo para clonar este repositório via "SSH"

```
git@github.com:reinaldorossetti/trello_apis_cypress.git
cd trello_apis_cypress
code .
```

### Instale as dependências do projeto:

```sh
npm install
```
** Pode acontecer de ter que abriar o terminal como Admin para fazer a instalação do Cypress, ou usar o --force no comando.


### Executando o projeto:

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

#### Resultado da Execução:

Exibir o relatório no github:
```sh
https://reinaldorossetti.github.io/trello_apis_cypress/reports/mochawesomeReport.html
```
Caminho do Actions:
https://github.com/reinaldorossetti/trello_apis_cypress/actions

### Estrutura do Projeto

Como funciona a Estrutura do Projeto:

### Dependências utilizadas:
As dependências estão definidas no [package.json](./package.json).

- Utilizamos o faker para gerar dados aleátorios.
- Utilizamos @types*, por causa do Typescript, para remover conflitos.

** As devDependencies são necessarias pra resolver conflitos e vulnerabilidades encapsula na versão antiga do Cypress.

```
  "dependencies": {
    "@types/chai": "5.0.1",
    "@types/chai-json-schema": "1.4.10",
    "chai-json-schema": "1.5.1",
    "cypress": "12.17.4",
    "@faker-js/faker": "9.3.0",
    "typescript": "5.3.3"
  },
  "devDependencies": {
    "cypress-mochawesome-reporter": "3.8.2",
    "mocha": "9.1.3",
    "mochawesome-merge": "4.3.0",
    "ts-loader": "^9.5.1",
    "cross-spawn": ">=7.0.5",
    "braces": ">=3.0.3",
    "glob": "^7.1.7",
    "inflight": "^1.0.6"
  },
```

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

### Em casos de erros:
- Informar o comando abaixo para forçar, mesmo tendo possíveis conflitos, a instalação das dependências do projeto:
```
npm install --force
```

- Erros de Certificados:
```
npm config set strict-ssl false    
NODE_TLS_REJECT_UNAUTHORIZED=0 cypress run --env allure=true --env video=true --reporter mochawesome    
```

Passando a config do cypress para a ferramenta desktop do cypress:
```
npx cypress run --config-file cypress.config.ts  
```

### Referências:  
Referências sobre o framework utilizado nos testes.  
[Cypress Site](https://www.cypress.io)  
[Configuração do TypeScript no Cypress](https://docs.cypress.io/app/tooling/typescript-support)  

Ferramenta converte o retorno da request em json schema:    
[Schema Tools](https://www.jsonschema.net/app/schemas/0)  

### Documentação da API  
[Trello API Cards](https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-group-cards)  
[Trello API Boards](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-group-boards)  