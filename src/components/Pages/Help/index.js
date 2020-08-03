import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import '../../../index.css';
import styled from 'styled-components';
import Button from '../../Button'


const ButtonHome = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: center;
    color: var(--white);
    background: var(--black);
    border: 1px solid #b0b0ec;
    box-sizing: border-box;
    cursor: pointer;
    padding: 5px 13px;
    text-decoration: none;
    transition: opacity .3s;
    @media (max-width: 800px) {
    a.ButtonHome {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: red;
      border-radius: 0;
      border: 0;
      text-align: center;
    }
  }
  }
  .ButtonLink:hover,
  .ButtonLink:focus {
    opacity: .10;
  }
`;

function Help() {
    
    return(
        <PageDefault>
            <h1><center>Quer ajudar doguinhos?</center></h1>
            <p><center>Aqui estão alguns links de projetos que precisam de colaborações para se manterem funcionando:<br /><br /></center></p>
            <center><Button>
                <a href="/">Clique aqui para ver os links :)</a>
            </Button></center>
         </PageDefault>
    )
  
  }
  
  export default Help;
  