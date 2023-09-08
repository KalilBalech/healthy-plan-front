import { useState } from 'react';
import axios from 'axios'; // Importe o Axios
import './SignUp.css';

import Button from './Button'
import Input from './Input'
import Header from './Header';
import Title from './Title';
import HeaderMainButton from './Header/HeaderMainButton';

export default function SignUp() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('oi tudo bem futebol corinthians lindo bonito e gostoso chris bumsted aka cbum')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      surname,
      phone,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:3000/v1/trainer', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setResponseMessage('Cadastro realizado com sucesso!')
        console.log("response.data.trainer.id: " + response.data.trainer.id)
      } else {
        setResponseMessage('Erro ao cadastrar usuário')
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
    }
  };

  return (
    <div id="signUpPage">
      
      <Header>
        <HeaderMainButton to='/login' text='Login'/>
      </Header>
      <Title title="Cadastre-se"/>
      <form onSubmit={handleSubmit}>
      <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
        />
        <Input
          type="text"
          placeholder="Sobrenome"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required={true}
        />
        <Input
          type="number"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required={true}
        />
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