import React, { useEffect, useState } from 'react'
import MovieBox from './MovieBox'


const API_URL_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=796c4de4e6f6a1acdada4f13bf87bef9";
const API_URL_UPCOMİNG = "https://api.themoviedb.org/3/movie/upcoming?api_key=796c4de4e6f6a1acdada4f13bf87bef9";

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
  
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
        <div className='container'>
        <h2 className='category-title-box my-3 p-2 px-3' >Popular</h2>
    <div className='grid'>
    {movies && movies.map((movieReq) => 
    <MovieBox key={movieReq.id} {...movieReq}/>)} 
    </div>
    <div>
      <h2 className='category-title-box my-3 p-2 px-3' >Upcoming</h2>
    </div>
    <div className='grid'>
    {upcomingMovies && upcomingMovies.map((movieReq) => 
    <MovieBox key={movieReq.id} {...movieReq}/>)} 
    </div>
    </div>
  )
}

export default Home
