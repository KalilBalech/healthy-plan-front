import { useState } from 'react';
import axios from 'axios'; // Importe o Axios
import './App.css';

function App() {
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
      <h1 id="signUpTitle">Cadastre-se</h1>
      <img src='../public/rodrigogoes.png'/>
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          className="inputSignUp"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="inputSignUp"
          placeholder="Sobrenome"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="number"
          className="inputSignUp"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          className="inputSignUp"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="inputSignUp"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" id="signUpButton">
          Cadastrar
        </button>
      </form>
      <p>{responseMessage}</p>
    </div>
  );
}

export default App;
