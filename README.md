# Rocketseat NLW 05

## Trilha Node.js

Projeto com o objetivo de aprender Node.js

### Configurações do ambiente

https://github.com/lmkobe/Rocketseat-nlw05.git

### Aula 01

#### Comandos importantes

yarn init -y

yarn add express

yarn add @types/express -D

yarn add typescript -D

yarn tsc --init

yarn add ts-node-dev -D

yarn dev
/_comando para rodar script escrito no package.son
"scripts": {
"dev": "ts-node-dev src/server.ts"
},
_/

### Aula 02

Implementação do banco de dados:

- Utilização do typeorm;
- Criação do database;
- Criação de entities;
- Criação de repositories;
- Rotas e controllers;

- Criação da tabela settings.

### Aula 03

- Continuação de modularização/estruturação do banco: pasta services;
- Criação das tabelas users e messages.

### Aula 04
 
#### Websockets.io
Instalação de dependências:
    - yarn add socket.io
    - yarn add @types/socket.io -D  //-D : dependência de desenvilvimento.
    - yarn add ejs
    - yarn add socket.io-client

Criando a tabela connections:
    - yarn typeorm migration:create -n CreateConnections