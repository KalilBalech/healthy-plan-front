import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

import Button from './Button';
import Input from './Input';
import Header from './Header';
import Title from './Title';
import HeaderMainButton from './Header/HeaderMainButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post('https://healthy-plan-api.onrender.com/v1/session', userData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {

        const token = response.data.token;
        const base64Payload = token.split('.')[1];
        const payload = atob(base64Payload);
        const payloadObject = JSON.parse(payload);
        const personalID = payloadObject.sub;

        console.log('personalID: ', personalID)
        console.log('payloadObject: ', payloadObject)

        localStorage.setItem('token', token);
        localStorage.setItem('personalID', personalID);

        setResponseMessage('Login realizado com sucesso!');
        console.log('Token JWT:', token);

        // Use history.push para redirecionar o usuário
        navigate('/user');
      } else {
        setResponseMessage('Erro ao logar usuário');
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
      setResponseMessage('Erro ao conectar com a API');
    }
  };
  return (
    <div id="loginPage">
      <Header>
        <HeaderMainButton to='/signup' text='Cadastre-se' />
      </Header>
      <Title title="Se conecte, treinador" />
      <form onSubmit={handleSubmit}>
        <Input
          block = {true}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required={true}
        />
        <Input
          block = {true}
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
        />
        <p>{responseMessage}</p>
        <Button text="Entrar" />
      </form>
    </div>
  );
}
