import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import MovieBox from './MovieBox';


const SuggestMe = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=${page}`);
    const data = await response.json();
    setAllMovies([...allMovies, ...data.results]);
    setPage(page + 1);

    const randomMovies = allMovies
      .filter(movie => !movies.includes(movie))
      .sort(() => 0.3 - Math.random())
      .slice(0, 3);
    setMovies(randomMovies);
  }
  return (
    <div className='mx-4'>
    <Button onClick={fetchMovies} className='my-4 mx-5' variant="dark">Bana Öner</Button>
    
    <div className='container'>
       
      <div className='grid'>
    {movies && movies.map((movieReq) => 
    <MovieBox key={movieReq.id} {...movieReq}/>)} 
    </div>
    </div>
    <Card className="bg-dark fixed-bottom text-center text-white"> 
      <Card.Body>
        <Card.Text>
         MOVİES | Copyright © 2023 <br />
         Developer: <a href="https://github.com/ahmetucar1" target="_blank" rel="noopener noreferrer">Ahmet</a>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default SuggestMe
