# Rocketseat NLW 05

## Trilha Node.js

Desenvolvimento de um Chat com foco no back-end com Node.js

Conceitos aprendidos:
- Estruturação do banco de dados;
- Express;
- TypeORM;
- Migrations;
- Websockets;

### Configurações do ambiente

Para rodar a aplicação:
- Faça o git clone do repositório.
- Execute o comando "yarn" para baixar as dependências da aplicação.
- Execute o comando "yarn dev" para executar a aplicação.
- Acesse pelo navegador "localhost:3030/page/client" para entrar na interface do cliente.
- Acesse pelo navegador "localhost:3030/page/admin" para entrar na interface do administrador.

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
    
### Aula 05

#### Websockets.io
  -Criação dos sockets do cliente e administrador.
  -Desenvolvimento da comunicação cliente-admin e integração com a interface (front-end).
