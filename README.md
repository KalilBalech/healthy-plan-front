# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Para fazer com que a aplicação Healthy Plan rode, siga os seguintes passos:

1o passo - As APIs do nosso sistema está hospedada em uma servidor que hiberna o nosso backend após um longo período sem chamadas. Dessa forma, o primeiro passo é, em um navegador, acessar a url https://healthy-plan-api.onrender.com/docs e aguardar até que a página carregue. Essa consulta irá disponibilizar as nossas APIs para consulta.

2o passo - Clone o repositório do nosso front-end. Para isso, abra uma nova pasta em seu computador e rode: git clone git@github.com:KalilBalech/healthy-plan-front.git

3o passo - Entre na pasta do nosso repositório. Para isso, rode: cd healthy-plan-front-main

4o passo - Rode o front-end do nosso aplicativo. Para isso, rode: npm run dev

5o passo - Acesse a aplicação. Para isso, abra seu navegador e acesse https://localhost:5173/