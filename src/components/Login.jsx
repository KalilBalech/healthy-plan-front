import { useState } from 'react';
import axios from 'axios'; // Importe o Axios
import './Login.css';

import Button from './Button'
import Input from './Input'
import Header from './Header';
import Title from './Title';
import HeaderMainButton from './Header/HeaderMainButton';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('oi tudo bem futebol corinthians lindo bonito e gostoso chris bumsted aka cbum')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:3000/v1/session', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setResponseMessage('Login realizado com sucesso!')
        console.log("response.data.token: " + response.data.token)
      } else {
        setResponseMessage('Erro ao logar usuário')
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
    }
  };

  return (
    <div id="loginPage">
      
      <Header>
        <HeaderMainButton to='/signup' text='Cadastre-se'/>
      </Header>
      <Title title="Login"/>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
        <p>{responseMessage}</p>
        <Button/>
      </form>
    </div>
  );
}