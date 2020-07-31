/* eslint-disable indent */
import React, { useState } from 'react';
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

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.nome}`}>
              {categoria.nome}
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
