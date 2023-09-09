import './Home.css';

import Header from './Header';
import Title from './Title';
import HeaderMainButton from './Header/HeaderMainButton';

export default function SignUp() {

  return (
    <div id="loginPage">
      
      <Header>
        <HeaderMainButton to='/signup' text='Cadastre-se'/>
        <HeaderMainButton to='/login' text='Login'/>
      </Header>
      <Title title="Healthy Plan"/>
    </div>
  );
}