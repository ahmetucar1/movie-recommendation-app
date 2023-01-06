import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const API_URL_RECOMMEND = "https://api.themoviedb.org/3/movie/top_rated?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=en-US&page=16"

const Carousels = () => {
   
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(() => {
        fetch(API_URL_RECOMMEND)
        .then((res) => res.json())
        .then(data => { 
          setRecommendedMovies(data.results.slice(0, 5))
        })
      }, []);
  
  return (
    <div>
      <Carousel indicators={false}  controls={false}>
  <Carousel.Item className='carousel'>
    <div className="d-flex justify-content-between">
      <div className="p-4 carousel-box text-white">
        <h3>Merhaba!</h3>
        <p>Sizlere en iyi film önerilerini sunmak için buradayız. <br />
          İsterseniz hemen bir film önerisi almaya başlayabilirsiniz. <br />
          Bugün ne tür bir film izlemek istersiniz? Hemen izlemek istediğiniz <br />
          türü seçin Minimum İmdb puanı girin ve filmler sizin için listelensin. <br />
          Hadi film önerisi almaya başla.
          </p>
          <Link to={'/filteredsuggest'}>
          <button className='btn btn-dark mt-2'>Film Önerisi Al</button>
          </Link>
      </div>
      <div className="p-4 me-5 carousel-box text-white">
       <h3>İşte Bazı Öneriler!</h3>
          {recommendedMovies && recommendedMovies.map((movieReq) => (
            <li className='list' key={movieReq.id}>{movieReq.title}</li>
          ))}
        <Link to={'suggestme'}>
        <button className='btn btn-dark mt-4'>Daha Fazla Öneri</button>
        </Link>
      </div>
    </div>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Carousels
