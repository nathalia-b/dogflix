import React from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';

function CadastraVideo(){

    return(
        <PageDefault>
            Página de Cadastro de Video;

            <Link to="/cadastro/categoria">
              <divTal>
                  cadastrooooooo
                </divTal>
            </Link>
        </PageDefault>
    )
}

export default CadastraVideo;