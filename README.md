# DSDelivery
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/LeandroOliveiraSouza/DSDelivery/blob/main/LICENSE) 

# Sobre o projeto
DSDelivery é uma aplicação full stack web. Construída durante a semana Spring React, organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

Sistema de registro e entrega de pedidos, onde o cliente registra o pedido e o entregador tem uma lista dos pedidos pendentes e entregues. Um pedido pode conter vários produtos e cada pedido possui uma localização, que é representada em um mapa na aplicação. 

## Layout web
![Web Home](https://github.com/LeandroOliveiraSouza/assets/blob/main/dsdelivery-home.png)

![Web Selecionar produtos](https://github.com/LeandroOliveiraSouza/assets/blob/main/dsdelivery-produtos.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/LeandroOliveiraSouza/assets/blob/main/dsdelivery-modelo-conceitual.png)

## Padrão camadas no backend
![Avaliacoes](https://github.com/LeandroOliveiraSouza/assets/blob/main/backend-camadas.png)

# Competências:
## Back end:
- Modelo de domínio
- Acesso a banco de dados
- Estruturar o back end no padrão camadas
  - repositories
  - DTO's
  - service
  - controller
    - endpoints da API REST
- Perfis de projeto: test, dev, prod


## Front end:
- Detalhamento e construção de cards;
- Integração com Mapas
- Três pilares do React
  - Componentes
  - Props
  - Estado

## Integrar back end e front end
- React Hooks
  - useState
  - useEffect
- Libs
  - React Router DOM
  - Axios
  - React Leaflet maps

# Tecnologias utilizadas
## Back end
- Java
- Spring Data JPA
- Spring Web
- Spring Security
- Banco de dados H2
- Banco de dados Postgres (Docker Compose)
- Maven
## Front end
- HTML / CSS / JavaScript / TypeScript
- ReactTS (React-App)
- React Router
- AXIOS

## Implantação em produção
- Back end: localhost
- Front end: localhost
- Banco de dados: H2 e Postgres (Docker Compose)

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/LeandroSouzaOliveira/dsmovie/backend
```

## Front end web
Pré-requisitos: yarn / react

```bash
# clonar repositório
git clone https://github.com/LeandroSouzaOliveira/dsmovie/frontend

# instalar dependências
npm

# executar o projeto
npm start
```

# Agradecimentos
- DevSuperior https://devsuperior.com.br/

# Autor
Leandro de Oliveira Souza

