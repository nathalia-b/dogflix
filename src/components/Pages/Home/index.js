import React, { useEffect, useState} from 'react';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import PageDefault from '../../../components/PageDefault';
//import styled from 'styled-components';
import categoriasRepository from '../../../repositories/categorias';
//import loadingimg from '../../../components/PageDefault/loadingimg.gif';

/*const Imagem = styled.img`
    width: 100%;
    max-width: 490px;
    border-top: orangered;
    background: black;

    display: flex;
    justify-content: space-between;
    align-items: center;
  
    position: fixed;
    border: 12px solid #fff;
  }`;*/
  function Home() {
    const [dadosIniciais, setDadosIniciais] = useState([]);
  
    useEffect(() => {
      categoriasRepository.getAllWithVideos()
        .then((categoriasComVideos) => {
          console.log(categoriasComVideos[0].videos[0]);
          setDadosIniciais(categoriasComVideos);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);
  
    return (
      <PageDefault paddingAll={0}>
        {dadosIniciais.length === 0 && (<div>Loading...</div>)}
  
        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={dadosIniciais[0].videos[0].description}
                />
                <Carousel
                  ignoreFirstVideo
                  category={dadosIniciais[0]}
                />
              </div>
            );
          }
  
          return (
            <Carousel
              key={categoria.id}
              category={categoria}
            />
          );
        })}
  
      </PageDefault>
    );
  }
  
  export default Home;