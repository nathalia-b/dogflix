import React from 'react';
import PageDefault from '../../PageDefault';
import '../../../index.css';
import Button from '../../Button'

function Help() {
    
    return(
        <PageDefault>
            <h1><center>Quer ajudar doguinhos?</center></h1>
            <h2><center>E outros animaizinhos também?</center></h2>

            <p><center>Aqui estão alguns links de projetos que precisam de ajuda para se manterem funcionando:<br /><br /></center></p>
            <center><Button>
                <a href="https://github.com/nathalia-b/dogflix/blob/master/AJUDE.md">Clique aqui para ver os links :)</a>
            </Button></center>
         </PageDefault>
    )
  
  }
  
  export default Help;
  