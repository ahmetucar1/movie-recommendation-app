import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import Carousels from './Carousels';
import MovieBox from './MovieBox'

const API_URL_TOP = "https://api.themoviedb.org/3/movie/top_rated?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=4";
const API_URL_POPULAR = "https://api.themoviedb.org/3/movie/now_playing?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=2";
const API_URL_UPCOMİNG = "https://api.themoviedb.org/3/movie/upcoming?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=3";
const API_URL_CINEMA = "https://api.themoviedb.org/3/movie/popular?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=5";


const Home = () => {

    const [topMovies, setTopMovies] = useState([]);
    const [populerMovies, setPopulerMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [cinemaMovies, setCinemaMovies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('yayinda');

   
      
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      switch (category) {
        case 'yayinda':
          fetch(API_URL_TOP)
          .then((res) => res.json())
          .then(data => {
            setTopMovies(data.results)
          });
          break;
        case 'televizyonda':
          fetch(API_URL_POPULAR)
          .then((res) => res.json())
          .then(data => {
            setPopulerMovies(data.results)
          });
          break;
          case 'kiralik':
            fetch(API_URL_UPCOMİNG)
              .then((res) => res.json())
              .then(data => {
                setUpcomingMovies(data.results);
              });
            break;
            case 'sinemalarda':
              fetch(API_URL_CINEMA)
                .then((res) => res.json())
                .then(data => {
                  setCinemaMovies(data.results);
                });
                break;
        default:
          break;
      }
    };



    useEffect(() => {
      fetch(API_URL_TOP)
      .then((res) => res.json())
      .then(data => {
        setTopMovies(data.results)
      })
    }, []);

    
    useEffect(() => {
      fetch(API_URL_POPULAR)
      .then((res) => res.json())
      .then(data => {
        setPopulerMovies(data.results)
      })
    }, []);
  

    useEffect(() => {
      fetch(API_URL_UPCOMİNG)
      .then((res) => res.json())
      .then(data => {
        setUpcomingMovies(data.results)
      })
    }, []);

    useEffect(() => {
      fetch(API_URL_CINEMA)
      .then((res) => res.json())
      .then(data => {
        setCinemaMovies(data.results)
      })
    }, []);


  return (
    <div>
    <div>
  <div className='selector'>
    <button
      className={selectedCategory === 'yayinda' ? 'selected' : ''}
      onClick={() => handleCategoryChange('yayinda')}
    >
      Yayında
    </button>
    <button
      className={selectedCategory === 'televizyonda' ? 'selected' : ''}
      onClick={() => handleCategoryChange('televizyonda')}
    >
      Televizyonda
    </button>
    <button
      className={selectedCategory === 'kiralik' ? 'selected' : ''}
      onClick={() => handleCategoryChange('kiralik')}
    >
      Kiralık
    </button>
    <button
      className={selectedCategory === 'sinemalarda' ? 'selected' : ''}
      onClick={() => handleCategoryChange('sinemalarda')}
    >
      Sinemalarda
    </button>
  </div>
  {selectedCategory === 'yayinda' &&

<div className='scroll-carousel'>
  {topMovies && topMovies.map((movieReq) => 
    <MovieBox key={movieReq.id} {...movieReq}/>
  )}
</div>
}
{selectedCategory === 'televizyonda' &&


<div className='scroll-carousel'>
  {populerMovies && populerMovies.map((movieReq) => 
    <MovieBox key={movieReq.id} {...movieReq}/>
  )}
</div>
}
{selectedCategory === 'kiralik' &&


<div className='scroll-carousel'>
  {upcomingMovies && upcomingMovies.map((movieReq) => 
    <MovieBox key={movieReq.id} {...movieReq}/>
  )}
</div>
}
{selectedCategory === 'sinemalarda' &&

<div className='scroll-carousel'>
  {cinemaMovies && cinemaMovies.map((movieReq) => 
    <MovieBox key={movieReq.id} {...movieReq}/>
  )}
</div>
}

</div>

    <h2 className='category-title-box my-3 p-1 px-3' >Popüler</h2>
      <div className='scroll-carousel'>
      {populerMovies && populerMovies.map((movieReq) => 
      <MovieBox key={movieReq.id} {...movieReq}/>)} 
      </div>
      <Carousels></Carousels>
    <div>
      <h2 className='category-title-box my-3 p-2 px-3' >Yakında</h2>
    </div>
    <div className='scroll-carousel'>
    {upcomingMovies && upcomingMovies.map((movieReq) => 
    <MovieBox key={movieReq.id} {...movieReq}/>)} 
    </div>
    <h2 className='category-title-box my-3 p-2 px-3' >Tüm Zamanlarda Trend</h2>

    <div className='scroll-carousel'>
    {cinemaMovies && cinemaMovies.map((movieReq) => 
    <MovieBox key={movieReq.id} {...movieReq}/>)} 
    </div>
    <Card className="bg-dark mt-5 text-center text-white"> 
      <Card.Body className='footer'>
        <Card.Text>
         MOVİES | Copyright © 2023 <br />
         Developer: <a href="https://github.com/ahmetucar1" target="_blank" rel="noopener noreferrer">Ahmet</a>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Home
