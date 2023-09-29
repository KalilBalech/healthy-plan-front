import { useState } from 'react';
import axios from 'axios';

import "./User.css";
import Header from "./Header";
import Title from "./Title";
import Input from './Input';
import Select from './Select';
import Button from './Button';


export default function User() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('');
  const [birthDate, setBirthDate] = useState(''); 
  const [addressInfo, setAddressInfo] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [responseMessage, setResponseMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      surname,
      phone,
      email,
      sex,
      birthDate,
      addressInfo,
      addressNumber,
      cep,
      city,
      state
    };

    try {
      const response = await axios.post('https://healthy-plan-api.onrender.com/v1/athlete', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('response: '+ response);
      setResponseMessage('response: '+ response)
      if (response.status === 200 || response.status === 201) {
        setResponseMessage('Cadastro realizado com sucesso!')
        console.log("response.data.id: " + response.data.id)
      } else {
        setResponseMessage('Erro ao cadastrar usuário')
        console.log('response:'+response)
        console.log('response.data:'+response.data)
        console.log('response.status:'+response.status)
      }
    } catch (error) {
      console.error('Erro ao conectar com a API:', error);
    }
  };

  return (
    <div id="userPage">
      <Header></Header>
      <Title title="Perfil de Personal Trainer" />
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
        <Select name="Genero" id="Genero" placeholder='Genero' value={sex} onChange={(e) => setSex(e.target.value)} required={true}>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Neutre">Neutre</option>
        </Select>
        <Input
          type="date"
          placeholder="Data de Nascimento"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required={true}
        />
        <Input
          type="number"
          placeholder="CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required={true}
        />
        <Input
          type="text"
          placeholder="Endereço da Residência"
          value={addressInfo}
          onChange={(e) => setAddressInfo(e.target.value)}
          required={true}
        />
        <Input
          type="number"
          placeholder="Número da Residência"
          value={addressNumber}
          onChange={(e) => setAddressNumber(e.target.value)}
          required={true}
        />
        <Input
          type="text"
          placeholder="Cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required={true}
        />
        <Input
          type="text"
          placeholder="Estado"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required={true}
        />
        <p>{responseMessage}</p>
        <Button text="Adicionar Atleta" />
      </form>
    </div>
  );
}
