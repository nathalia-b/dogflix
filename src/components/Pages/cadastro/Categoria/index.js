import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../PageDefault';
import FormField from '../../../FormField';
import Button from '../../../Button';
import useForm from '../../../../hooks/useForm';

function CadastroCategoria() {
    const valoresIniciais = {
      nome: '',
      descricao: '',
      cor: '',
    };
    const {handleChange, values, clearForm} = useForm(valoresIniciais)
    const [categorias, setCategorias] = useState([]);
     
    useEffect(() => {
      /* O useEffect é chamado quando queremos que algum efeito ''colateral'' aconteça
      Recebe dois parâmetros, o primeiro sendo o que quer que aconteça e
      o segundo quando queremos que aconteça */
     
        const URL = window.location.href.includes('localhost')
        ? 'https://dogflix.herokuapp.com/categorias'
        : 'https://dogflix.herokuapp.com/categorias';
        fetch(URL)
          .then(async (respostaDoServer) => {
            if (respostaDoServer.ok) {
              const resposta = await respostaDoServer.json();
              setCategorias(resposta);
              return;
            }
            throw new Error('Não foi possível pegar os dados');
          });
      }, []); /*End_of_useEffect*/

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
            ]);/*End_of_setCategorias*/
            clearForm(); /*Clears form's input*/
        }}>{/*End_of_submit*/}

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
            <li key={`${categoria.id}`}>
              {categoria.titulo}
            </li>
          ))}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>

    );/*End_of_Return*/
  }

  export default CadastroCategoria;