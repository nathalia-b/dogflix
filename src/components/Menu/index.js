import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import helpDog from '../../assets/img/helpdog.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
     
      <Link to="/">
         <img className="Logo" src={Logo}  alt="Dogflix logo" />
      </Link>
              
      <Link to="/help">
        <img className="Dog" src={helpDog} alt="Help dog" />
        <Button as={Link} className="ButtonLink" to="/help">
       Ajude um animalzinho
      </Button>
      </Link>
      
    </nav>
  );
}
export default Menu;
