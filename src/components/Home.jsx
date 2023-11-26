import './Home.css';

import Header from "./Header";
import Title from "./Title";
import Footer from "./Footer";
import HeaderMainButton from "./Header/HeaderMainButton";
import HomeDiv from "./HomeDiv";
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    localStorage.clear()
    console.log("oeeoeoeo")
    console.log(import.meta.env.VITE_HTTPS);
  }, [])

  return (
    <div id="homePage">
      <Header>
        <HeaderMainButton to="/signup" text="Cadastre-se" />
        <HeaderMainButton to="/login" text="Login" />
      </Header>
      <Title title="Healthy Plan" />
      <div id="homePage">
        <HomeDiv
          title="Introdução"
          src="../../public/cbum1.png"
          imageFirst={false}
        >
          <p>
            Nosso software é uma solução para
            <span> profissionais da saúde</span> que desejam elevar a qualidade
            de seus serviços. Com um foco no
            <span> acompanhamento de clientes </span>, nosso sistema oferece as
            ferramentas essenciais para simplificar o gerenciamento de alunos e
            pacientes.
          </p>
        </HomeDiv>
        <HomeDiv
          title="Principais Recursos"
          src="../../public/cbum2.png"
          imageFirst={true}
        >
          <ul>
            <p>Cadastro de Informações Antropométricas</p>
            <p>Visualizações Otimizadas</p>
            <p>Interatividade Profissional-Cliente</p>
          </ul>
        </HomeDiv>
        <HomeDiv
          title="Benefícios e Vantagens"
          src="../../public/cbum3.png"
          imageFirst={false}
        >
          <p>Simplicidade de Uso</p>
          <p>Segurança e Privacidade</p>
          <p>Suporte Dedicado</p>
        </HomeDiv>
      </div>
      <Footer/>
    </div>
  );
}
