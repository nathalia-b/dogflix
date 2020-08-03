import React from 'react';
import PageDefault from '../../PageDefault';
import '../../../index.css';
import walk from '../../../assets/img/walk.gif'; 

function Help() {
    
    return(
        <PageDefault>
            <center>
            <h1>Quer ajudar doguinhos?</h1>
            <h3>E outros animaizinhos também?</h3>

            <p>Então clica <b><a href="https://github.com/nathalia-b/dogflix/blob/master/AJUDE.md">AQUI</a></b> pra ver alguns links de projetos de resgate e cuidado que precisam de apoio para se manterem funcionando.<br/></p>
            Ah, e os projetos são de diversos estados e aceitam <b>diversas</b> formas de ajuda!<br/><br/>
            <a href="https://github.com/nathalia-b/dogflix/blob/master/AJUDE.md"><img className="Logo" src={walk}  alt="Dogflix logo" /></a>
            
        
            </center>
         </PageDefault>
    )
  
  }
  
  export default Help;
  