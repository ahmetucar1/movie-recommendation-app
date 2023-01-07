import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import MovieBox from './MovieBox';


const SuggestMe = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const API_KEY = `https://api.themoviedb.org/3/discover/movie?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=${page}`

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(API_KEY);
      const data = await response.json();
      setMovies(data.results);
    }
    fetchMovies();
  });

  async function fetchMoreMovies() {
    const response = await fetch(API_KEY);
    const data = await response.json();
    setAllMovies([...allMovies, ...data.results]);
    setPage(page + 1);

    const randomMovies = allMovies
      .filter(movie => !movies.includes(movie))
      .sort(() => 0.3 - Math.random())
      .slice(0, 25);
    setMovies(randomMovies);
  }

  return (
    <div>
    <Button onClick={fetchMoreMovies} className={'mx-3'} variant="dark">Rastgele Öner</Button>
    <div className='container'>
    <div className='scroll-carousel'>
    {movies && movies.map((movie) => 
    <MovieBox key={movie.id} {...movie}/>)} 
    </div>
  </div>
    <Card className="bg-dark fixed-bottom text-center text-white"> 
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

export default SuggestMe


