import React from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';

function CadastraVideo(){

    return(
        <PageDefault>
            <h1>Página de Cadastro de Video:</h1>

            <Link to="/cadastro/categoria">
                  Cadastrar Categoria

            </Link>
        </PageDefault>
    )
}

export default CadastraVideo;