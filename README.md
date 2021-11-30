# Rocketseat NLW 05

## Trilha Node.js

Desenvolvimento de um Chat com foco no back-end com Node.js.

### Tecnologias

<div align="center">
  <br />
  <img src=".github/tech-logos.png" alt="Technologies used">
</div>

- [SQLite];
- [Express];
- [TypeORM];
- [Migrations];
- [Websockets];

### Instalação

#### Pré-requesitos
É preciso ter instalado o node.js e o yarn para rodar esse projeto.

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/lmkobe/Rocketseat-nlw05.git && cd Rocketseat-nlw05
```

**Siga os passos abaixo**

```bash
# Instalação das dependências do projeto
$ yarn

# Execução da aplicação
$ yarn dev
```

Para acessar a interface do cliente, acesse pelo navegador  `http://localhost:3030/pages/cliente`.
E para acessar a interface do administrador, acesse pelo navegador `http://localhost:3030/pages/admin`


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
