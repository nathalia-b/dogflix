import React, { useEffect, useState} from 'react';
//import dadosIniciais from '../../../data/dados_iniciais.json';
import BannerMain from '../../BannerMain';
import Carousel from '../../Carousel';
import PageDefault from '../../../components/PageDefault';
import categoriasRepository from '../../../repositories/categorias';
import loadingimage from '../../../assets/img/loadingimage.gif';
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
      {dadosIniciais.length === 0 && (<div><img className="loadingimg" src={loadingimage} alt="Dogflix logo" /></div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
              <div key={categoria.id}>
              <BannerMain
                videoTitle={'Dúvidas de como se alimentar na quarentena?'}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={"Kakoa e Corky podem te ajudar com isso"}
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