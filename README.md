# API

API desenvolvida para o desafio da Paketá

## Requisitos

- Docker
- Docker-compose
- Nodejs
- Npm
- Typescript

## Instalando dependências

Para instalar as dependências, é necessário executar:
`npm i`

## Rodando dependências

É necessário subir o banco de dados via docker compose:
`docker-compose up -d`

Ou rodando diretamente via docker:
`docker run -p 27017:27017 -d mongo`

## Rodando o projeto

Antes de rodar o projeto, é necessário criar um arquivo .env a partir do aquivo .env.sample

Para rodar o projeto em modo de desenvolvimento, é necessário rodar o comando
`npm run start:dev`

Para rodar o projeto em modo de produçãio, é necessário rodar o comando
`npm run start`

## Rodando o teste

Para rodar o teste, é necessário rodar o comando
`npm run test:functional`

## Informações adicionais

A documentação do projeto é apresentada na rota /api/docs

### Check list

- [x] NodeJS com Typescript (Dica: Faça uma boa estrutura de diretórios com
      controller, service, etc);
- [x] Use Express, Hapi, Koa ou direto com AWS Lambda;
- [x] Existem 2 diferentes collections do MongoDB: User {id, name, hobbies}, Hobbies
      {id, experienceLevel, name, year}. Hobbies não são inseridos no schema User,
      use MongoDB refs;
- [x] Os endpoints são CRUD de users e hobbies;
- [x] Instale o Swagger para validar os endpoints;
- [x] Validar o payload da requisição do FE;
- [x] Configurar a stack de testes e escrever pelo menos um teste como
      demonstração.
