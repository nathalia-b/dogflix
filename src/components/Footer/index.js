import React from 'react';
import { FooterBase } from './styles';
import Nathalia from '../../assets/img/nathalia-b.png'
import Alura from '../../assets/img/alura.png'
import Plus from '../../assets/img/plus.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.github.com/nathalia-b">
        <img className="Logo1" src={Nathalia} width="100" height="25" alt="nathalia-b" />
      </a>
      <img className="Logo3" src={Plus} width="15" height="15" alt="++" /><img className="Logo3" src={Plus} width="15" height="15" alt="++" />
      <a href="https://www.alura.com.br/">
        <img className="Logo2" src={Alura} width="50" height="20" alt="Logo Alura" />
      </a>
        
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
