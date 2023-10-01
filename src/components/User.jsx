import { useState, useEffect } from 'react';
import axios from 'axios';

import "./User.css";
import Header from "./Header";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Input from './Input';
import Select from './Select';
import Button from './Button';
import Athlete from './Athlete';


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

  const [personalName, setPersonalName] = useState('')
  const [personalEmail, setPersonalEmail] = useState('')

  const [athletes, setAthletes] = useState(null)

  const [reloadAthletes, setReloadAthletes] = useState(false); // Novo estado para atuar como trigger


  useEffect(() => {
    const personalID = localStorage.getItem('personalID');
    const token = localStorage.getItem('token');
  
    axios.get(`https://healthy-plan-api.onrender.com/v1/trainer/${personalID}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => {
      setPersonalName(response.data.name)
      setPersonalEmail(response.data.email)
      console.log('response:', response);
      console.log('response.data:', response.data);
    })
    .catch((error) => {
      console.error('Erro ao buscar dados:', error);
    });
    
  }, [personalName]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    axios.get(`https://healthy-plan-api.onrender.com/v1/athlete`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log('A busca pelos atletas de tal personal deu certo!')
      setAthletes(response.data.athletes)
      console.log('response:', response);
      console.log('response.data:', response.data);
      console.log('response.data.athletes:', response.data.athletes);
    })
    .catch((error) => {
      console.error('Erro ao buscar dados:', error);
    });

  }, [reloadAthletes]);

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
      const token = localStorage.getItem('token');
      const response = await axios.post('https://healthy-plan-api.onrender.com/v1/athlete', userData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      console.log('response: '+ response);
      setResponseMessage('response: '+ response)
      if (response.status === 200 || response.status === 201) {
        setResponseMessage('Atleta adicionado com sucesso!')
        setReloadAthletes(!reloadAthletes)
        console.log("response.data: " + response.data)
        console.log("response.id: " + response.id)
        console.log("response.data.id: " + response.data.id)
        setName('')
        setSurname('')
        setPhone('')
        setEmail('')
        setSex('')
        setBirthDate('')
        setAddressInfo('')
        setAddressNumber('')
        setCep('')
        setCity('')
        setState('')
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

  const listAthletes = athletes ? athletes.map(athlete =>
    <Athlete key={athlete.id} name={athlete.name} surname={athlete.surname} email={athlete.email} id={athlete.id}>
    </Athlete>
  ) : <p>não há atletas</p>

  return (
    <div id="userPage">
      <Header>
        <p id="personal-email">{personalEmail}</p>
      </Header>
      <Title title={"Bem-Vindo Personal "+personalName} />
      <Subtitle subtitle='Deseja adicionar um novo atleta?'></Subtitle>
      <div id='forms'>

        <form onSubmit={handleSubmit}>
        <Input
          block = {false}
          type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
            />
          <Input
            block = {false}
            type="text"
            placeholder="Sobrenome"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            required={true}
          />
          <Input
            block = {false}
            type="number"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required={true}
            />
          <Input
            block = {false}
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
            block = {false}
            type="date"
            placeholder="Data de Nascimento"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required={true}
          />
          <Input
            block = {false}
            type="number"
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required={true}
          />
          <Input
            block = {false}
            type="text"
            placeholder="Endereço da Residência"
            value={addressInfo}
            onChange={(e) => setAddressInfo(e.target.value)}
            required={true}
            />
          <Input
            block = {false}
            type="number"
            placeholder="Número da Residência"
            value={addressNumber}
            onChange={(e) => setAddressNumber(e.target.value)}
            required={true}
          />
          <Input
            block = {false}
            type="text"
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required={true}
          />
          <Input
            block = {false}
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
      <div id='athletes'>{listAthletes}</div>
    </div>
  );
}
