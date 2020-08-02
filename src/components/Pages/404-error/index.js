import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import ButtonHome from '../404-error/buttonhome.js'
import '../../../index.css';
import ImagemDeErro1 from '../../../assets/img/erro1.png';
import ImagemDeErro2 from '../../../assets/img/erro2.png';
import ImagemDeErro3 from '../../../assets/img/erro3.png';
import ImagemDeErro4 from '../../../assets/img/erro4.png';
import ImagemDeErro5 from '../../../assets/img/erro4.png';

import styled from 'styled-components';


const Imagem = styled.img`
    width: 100%;
    max-width: 850px;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: center;
  }`;
  
function aux404(ImagemDeErro){
  return (
    <PageDefault>
      
        <Imagem className="Erro" src={ImagemDeErro} alt="Erro1" />
      
      <ButtonHome as={Link} className="ButtonLink" to="/">
      Início
    </ButtonHome>
    </PageDefault>
  );
}   


function Pagina404() {
  const min = Math.ceil(1);
  const max = Math.floor(5);
  const i = Math.floor(Math.random() * (max - min + 1)) + min; 
  
  console.log(i);
   if (i === 1) {
    return(
          aux404(ImagemDeErro1)    
    );
  }else if (i === 2) {
    return(
          aux404(ImagemDeErro2)    
    );
  }else if(i === 3){
    return (
          aux404(ImagemDeErro3)    
    );
  }else if(i === 4){
    return (
          aux404(ImagemDeErro4)    
    );
  }else{
    return (
          aux404(ImagemDeErro5)    
    ); 
  }
  

}

export default Pagina404;
