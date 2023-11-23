import { useState } from 'react';
import axios from 'axios'; // Importe o Axios
import './SignUp.css';
import { useNavigate } from 'react-router-dom';


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
  const [responseMessage, setResponseMessage] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signUpUserData = {
      name,
      surname,
      phone,
      email,
      password,
    };

    try {
      const response = await axios.post('https://healthy-plan-api.onrender.com/v1/trainer', signUpUserData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('response: '+ response);
      if (response.status === 200 || response.status === 201) {
        setResponseMessage('Cadastro realizado com sucesso!')
        const personalID = response.data.id
        console.log("response.data.id: " + personalID)

        // APÓS O SING UP, JÁ FAZ O LOGIN AUTOMATICAMENTE - UI BOA

        const logInUserData = {
          email,
          password,
        };

        try {
          const response = await axios.post('https://healthy-plan-api.onrender.com/v1/session', logInUserData, {
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
      } else {
        setResponseMessage('Erro ao cadastrar usuário')
        console.log('response:'+response)
        console.log('response.data:'+response.data)
        console.log('response.status:'+response.status)
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
      console.error('ESSE AQUI É O ERRO: ', error);
      console.error('erro.response: ', error.response);
      console.error('erro.response.data: ', error.response.data);
      console.error('erro.response.data.error: ', error.response.data.error);
      setResponseMessage(error.response.data.error);
      console.log('erro.response.data.error type: ', typeof error.response.data.error);
    }
  };

  return (
    <div id="signUpPage">
      
      <Header>
        <HeaderMainButton to='/login' text='Login'/>
      </Header>
      <Title title="Cadastre-se, treinador"/>
      <form onSubmit={handleSubmit}>
      <Input
        block = {true}
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true}
        />
        <Input
          block = {true}
          type="text"
          placeholder="Sobrenome"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required={true}
        />
        <Input
          block = {true}
          type="number"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required={true}
        />
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
        <Button text='Cadastrar'/>
      </form>
    </div>
  );
}