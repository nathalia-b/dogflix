import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Paw from '../../assets/img/paw.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
     
      <Link to="/">
         <img className="Logo" src={Logo}  alt="Dogflix logo" />
      </Link>
      <Link to="/help">
         <img className="Dog" src={Paw} alt="Dogflix logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}
export default Menu;
