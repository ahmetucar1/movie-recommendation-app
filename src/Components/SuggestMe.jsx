import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import MovieBox from './MovieBox';


const SuggestMe = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    if (allMovies.length === 0) {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=796c4de4e6f6a1acdada4f13bf87bef9&page=4');
      const data = await response.json();
      setAllMovies(data.results);
    }

    const randomMovies = allMovies
      .filter(movie => !movies.includes(movie))
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
    setMovies(randomMovies);
  }


  return (
    <div className='mx-4'>
    <Button onClick={fetchMovies} className='my-4 mx-5' variant="dark">Suggest Me</Button>
    
    <div className='container'>
       
      <div className='grid'>
    {movies && movies.map((movieReq) => 
    <MovieBox key={movieReq.id} {...movieReq}/>)} 
    </div>
    </div>
    </div>
  )
}

export default SuggestMe
