<h1 align="center">
  VUTTR
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/michelonsouza/vuttr?color=%2330C3FC">

  <a href="https://github.com/michelonsouza">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Michelon Souza-%2330C3FC">
  </a>
  <img src="https://img.shields.io/netlify/24cea527-a667-4212-9e21-8701933fc49c?color=30C3FC"
  alt="Netlify" />
  <img alt="Code Size" src="https://img.shields.io/github/languages/code-size/michelonsouza/vuttr?color=%2330C3FC"
  alt="Netlify" />
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2330C3FC">
</p>

---

## Vuttr
🔗[vuttr-tools.netlify.app](https://vuttr-tools.netlify.app/)
-tools### 📝 Descrição
A ideia desta aplicação é demonstrar o consumo de uma API fictícia local utilizando [json-server](https://github.com/typicode/json-server) (mais detalhes abaixo).

Vuttr é uma feramenta de cadastro, consulta e exclusão de ferramentas/bibliotecas de desenvolvimento. Usilizando uma fake-api com banco de dados através de um arquivo `db.json` podemos efetuar todas as tarefas de CRUD (_Create, Read, Update e Delete_), porém, nesta aplicação não efetuaremos o update pelas diretivas do projeto. Vuttr tembém tem um sistema de busca provido pelo `json-server` e implementado com `debounce`.

### 🗒 json-server
**json-server** tem a finalidade de proporcionar uma API rapida para propositos de testes através.

A mesma provê as principais funcionalidades de uma API REST como o respeito as _verbos HTTP_ como: **GET, POST, PUT, PATCH e DELETE**.
Tembém possui filtros para listagem através de _query-params_. Enfim, muito completa.

### ⚙️ Desenvolvimento
Após clonar o repositório do projeto, siga os passos abaixo.

Acesse a pasta `backend` e instale as dependências com o seguinte comando em seu terminal:
```bash
npm install
```
ou
```bash
yarn
```
Após o termino da instalação, ainda na pasta `backend`, inicie o servidor com o seguinte comando, também em seu terminal:
```bash
npm run start
```
ou
```bash
yarn start
```
Uma servidor `json-server` será iniciado e poderá ser utilizado pela URL `http://localhot:3333`.

Voltando a pasta raiz do projeto, acesse a pasta `vuttr` para iniciarmos o _front-end_ da aplicação.

Dentro da pasta instale as dependências, digitando em seu terminal o comando:
```bash
npm install
```
ou
```bash
yarn
```
Após o termino da instalação, ainda dentro da pasta `vuttr`, digite o seguinte comando em seu terminal para iniciar a aplicação em ambiente local:
```bash
npm run start
```
ou
```bash
yarn start
```

Para efetuar 0 _build_ do _fron-end_ em **produção** pasta rodar o seguinte comando no terminal:
```bsh
npm run buil
```
ou
```bash
yarn build
```

**OBS**: O servidor escohido deve estar configurado para o modelo de **SPA**. Uma definição simples pode ser encontrada [aqui](https://www.cmswire.com/digital-experience/what-is-a-single-page-application/) (em inglês).

### 💻 Tecnologias
Para este projeto foi escolhida a biblioteca ReactJS. O ReactJS apresenta todo um ecosistema em torno de si com outras _libs_ que resolvem mais demandas de uma aplicação web como SPA, tais como: **Navegação (rotas), carregamento de svgs, css-in-js (styled-components, nesse caso), gerenciamento de estado, etc**.

Foi utilizado o instalador padrão do react conhecido como **CRA** (_Create React App_).

#### Bibliotecas utiilizadas:
- [prop-types](https://www.npmjs.com/package/prop-types)
- [lodash.debounce](https://www.npmjs.com/package/lodash.debounce)
- [axios](https://github.com/axios/axios)
- [styled-components](https://styled-components.com/)
- [react-toastify](https://github.com/fkhadra/react-toastify)
- [react-icons](https://react-icons.github.io/react-icons/)

### 🎥 Demo
Abaixo segue uma pequena demonstração:

**Desktop**
![Vuttr Desktop](/.github/desktop-demo.gif)

**Mobile**
![Vuttr Mobile](/.github/mobile-demo.gif)

**Dark-mode**
![Vuttr Mobile](/.github/dark-mode-demo.gif)

Link da aplicação hospedado na Netlify: 🔗[vuttr-tools.netlify.app](https://vuttr-tools.netlify.app/)

**Licença MIT**


#### Feito com 🖤por Michelon
