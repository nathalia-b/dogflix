/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import Button from '../../../Button';

function CadastroCategoria() {
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',
    };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
      // chave: nome, descricao, bla, bli
      setValues({
        ...values,
        [chave]: valor, // nome: 'valor'
      });
    }

    function handleChange(infosDoEvento) {
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value,
      );
    }
    /* O useEffect é chamado quando queremos que algum efeito ''colateral'' aconteça
    Recebe dois parâmetros, o primeiro sendo o que quer que aconteça e
    o segundo quando queremos que aconteça */

    useEffect(() => {
      if (window.location.href.includes('localhost')) {
        const URL = 'http://localhost:8080/categorias';
        fetch(URL)
          .then(async (respostaDoServer) => {
            if (respostaDoServer.ok) {
              const resposta = await respostaDoServer.json();
              setCategorias(resposta);
              return;
            }
            throw new Error('Não foi possível pegar os dados');
          });
      }
    }, []);

    return (
      <PageDefault>
        <h1>
          Cadastro de Categoria:
          {values.nome}
        </h1>

        <form onSubmit={function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            setCategorias([
              ...categorias,
              values,
            ]);

            setValues(valoresIniciais);
        }}
        >

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <Button>
            Cadastrar
          </Button>
        </form>
        <div>
          {/* Cargando... */}
          Loading...
        </div>

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.id}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    );
  }

  export default CadastroCategoria;
