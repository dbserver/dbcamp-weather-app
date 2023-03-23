<p align="center">
 <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dbserver/dbcamp-weather-app">
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/dbserver/dbcamp-weather-app">
  <a href="https://github.com/dbserver/dbcamp-weather-app/commits/main">
  <img alt="GitHub last commit (branch)" src="https://img.shields.io/github/last-commit/dbserver/dbcamp-weather-app/main">
  </a>
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  <a href="https://db.tec.br/">
    <img alt="Feito pela DB" src="https://img.shields.io/badge/feito%20por-DB-%237519C1">
  </a>
</p>

# Weather App
## 💻 Sobre o projeto

🌤 **Weather App** - apresenta a informação metereológica atual e dos próximos 07 dias, das cidades:
- Porto Alegre / RS
- Charqueadas / RS
- São Luiz do Maranhão / MA
- Rio Grande /  RS
- Madre de Deus / BA

O objetivo desse desafio é oportunizar o aprendizado:
- Estilização utilizando css
- React com typescript
- Componentização
- Consumo de API Rest
- Controle de Estado com  a utilização de Context API

## Pré-requisitos

Você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
 Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🔂  Rodando o Back End (API)

### Clone o repositório
````
 $ git clone https://github.com/dbserver/dbcamp-weather-mock-api.git
````
### Instalando os módulos
````
npm install
````
### Rodando a api
````
json-server openweathermap.json
````
### Entrypoint API
````
http://localhost:3000
````

### GET all cities
Retorna uma lista de Cidades e suas previsões metereológicas.
````
http://localhost:3000/cities
````

### GET all citie by name
Retorna uma cidade e suas previsões metereológicas.
````
http://localhost:3000/cities?name=Porto Alegre
````

## Features
- [x] Pesquisa de previsão metereolólica a partir do nome da cidade 
- [x] Apresentação da previsão metereológica do dia atual
- [x] Apresentação da previsão metereológica dos próximos 07 dias


## 🎨 Layout
O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/OdrhMSRRYMJ9W0Zoxxz7E2/Weather-App-(Community)?node-id=0-1&t=nOcHkKsdRx68GWUl-0">
  <img alt="Made by DB" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>
