# API

API desenvolvida para o desafio da Paketá

## rtequisitos

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
