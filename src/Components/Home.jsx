import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import MovieBox from './MovieBox'
import Carousels from './Carousel';

const API_URL_TOP = "https://api.themoviedb.org/3/movie/popular?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=1";
const API_URL_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=2";
const API_URL_UPCOMİNG = "https://api.themoviedb.org/3/movie/upcoming?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=3";


const Home = () => {

    const [movies, setMovies] = useState([]);
    const [populerMovies, setPopulerMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    
  
    useEffect(() => {
      fetch(API_URL_TOP)
      .then((res) => res.json())
      .then(data => {
        setPopulerMovies(data.results.slice(0, 7))
      })
    }, []);
  

    useEffect(() => {
      fetch(API_URL_POPULAR)
      .then((res) => res.json())
      .then(data => {
        setMovies(data.results)
      })
    }, []);
  
    useEffect(() => {
      fetch(API_URL_UPCOMİNG)
      .then((res) => res.json())
      .then(data => {
        setUpcomingMovies(data.results)
      })
    }, []);


  return (
    <div>
      <div className='grid'>
        {populerMovies && populerMovies.map((movieReq) => 
        <MovieBox key={movieReq.id} {...movieReq}/>)} 
        </div>
    <h2 className='category-title-box my-3 p-2 px-3' >Popüler</h2>
      <div className='grid'>
      {movies && movies.map((movieReq) => 
      <MovieBox key={movieReq.id} {...movieReq}/>)} 
      </div>
     <Carousels></Carousels>
    <div>
      <h2 className='category-title-box my-3 p-2 px-3' >Yakında</h2>
    </div>
    <div className='grid'>
    {upcomingMovies && upcomingMovies.map((movieReq) => 
    <MovieBox key={movieReq.id} {...movieReq}/>)} 
    </div>
    <Card className="bg-dark footer>>= text-center text-white"> 
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
