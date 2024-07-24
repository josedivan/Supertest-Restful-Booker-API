# Supertest Booking API Tests

Este projeto contém testes automatizados para a API Restful Booker utilizando Supertest.

## Descrição

Este projeto contém testes automatizados para a API Restful Booker, uma API pública utilizada para fins educacionais e de teste. Os testes cobrem as principais operações CRUD (Create, Read, Update, Delete) na API de reservas. Cada teste foi meticulosamente projetado para validar a funcionalidade e a integridade da API.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) (v6 ou superior)

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone este repositório:
    ```sh
    git clone https://github.com/seu-usuario/supertest-booking-api-tests.git
    cd supertest-booking-api-tests
    ```

2. Inicialize o projeto com npm:
    ```sh
    npm init -y
    ```

3. Instale as dependências do projeto:
    ```sh
    npm install supertest jest dotenv
    ```

4. Crie um arquivo `.env` na raiz do projeto e adicione seu token de autorização. O arquivo `.env` deve conter a seguinte linha:
    ```env
    AUTH_HEADER=SeuTokenAqui
    ```

### Dependências do Projeto

Este projeto utiliza as seguintes dependências principais:

- [supertest](https://www.npmjs.com/package/supertest): Biblioteca para fazer solicitações HTTP em testes.
- [dotenv](https://www.npmjs.com/package/dotenv): Carrega variáveis de ambiente a partir de um arquivo `.env`.
- [jest](https://www.npmjs.com/package/jest): Framework de testes em JavaScript.

## Executando os Testes

Para executar os testes, use o seguinte comando:
```sh
npm test
