import React from 'react';
import { Link } from 'react-router-dom';
// import PageDefault from '../../PageDefault';
import '../../../index.css';

function Pagina404() {
  /* const min = Math.ceil(0);
  const max = Math.floor(2);
  const a = Math.floor(Math.random() * (max - min + 1)) + min; */

  /* if (a === 0) {
    return (
      <PageDefault>
        <Link to="/">
          <img className="Erro" src={ImagemDeErro} alt="Erro1" />
        </Link>

      </PageDefault>
    );
  } if (a === 1) {
    return (
      <Link to="/">
        <img className="Erro" src={ImagemDeErro2} alt="Erro2" />
      </Link>
    );
  }
  return (
    <Link to="/">
        <img className="Erro" src={ImagemDeErro3} alt="Erro3" />
    </Link>
  ); */
  return (
    <Link to="/">Erro.</Link>
  );
}

export default Pagina404;
