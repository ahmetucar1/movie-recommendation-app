import { Modal, Form, FormControl, Button, Card, FormGroup, CardGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import MovieBox from './MovieBox';



const FilteredSuggest = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [minRating, setMinRating] = useState('');
  const [genre, setGenre] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});
  const API_IMG = 'https://image.tmdb.org/t/p/w500/';
  const API_KEY = `https://api.themoviedb.org/3/discover/movie?api_key=796c4de4e6f6a1acdada4f13bf87bef9&page=${page}&vote_average.gte=${minRating}&with_genres=${genre}&language=tr-tur`

  const handleClose = () => setShowModal(false);
  const handleShow = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  async function fetchMovies(e, changeMovies) {
    e.preventDefault();
    const response = await fetch(API_KEY);
      const data = await response.json();
      if (changeMovies) {
        setMovies(data.results.slice(0, 3));
      }
      setAllMovies([...allMovies, ...data.results]);
      setPage(page + 1);
      setMovies(data.results.slice(0, 3));
     
    }
  
    return (
      <div>
    <Form onSubmit={(e) => fetchMovies(e, true)} className='mb-3'>
    <FormGroup>
    <FormControl className='mt-1 w-50' id='formMinRating' type='number' placeholder='Minimum IMDB Puanı' min='0'max='10'value={minRating}
      onChange={(e) => setMinRating(e.target.value)}/>
    </FormGroup>
    <FormGroup>
    <FormControl className='py-1 mt-1 w-50' id='formGenre' value={genre}
      onChange={(e) => setGenre(e.target.value)} as='select'>
        <option value="">Tür Seç</option>
        <option value='28'>Aksiyon</option>
        <option value='28'>Action</option>
        <option value='12'>Macera</option>
        <option value='16'>Animasyon</option>
        <option value='35'>Komedi</option>
        <option value='80'>Suç</option>
        <option value='99'>Belgesel</option>
        <option value='18'>Dram</option>
        <option value='10751'>Aile</option>
        <option value='14'>Fantazi</option>
        <option value='36'>Tarih</option>
        <option value='27'>Korku</option>
        <option value='10402'>Müzik</option>
        <option value='9648'>Gizem</option>
        <option value='10749'>Romantik</option>
        <option value='878'>Bilim Kurgu</option>
        <option value='10770'>TV Film</option>
        <option value='53'>Gerilim</option>
        <option value='10752'>Savaş</option>
        <option value='37'>Batı</option>
    </FormControl>
    </FormGroup>
    <Button className='btn btn-dark mx-2 mt-4' type='submit'>Kaydet ve Öner</Button>
     {movies.length > 0 && (
    <Button className='btn btn-dark mt-4' onClick={(e) => fetchMovies(e, true)} variant="secondary">Değiştir</Button>
    )}
    </Form>
      <CardGroup>
        <div className='container'>
            <div className='grid'>
            {movies && movies.map((movie) => 
             <MovieBox handleShow={handleShow} key={movie.id} {...movie}/>)} 
            
             </div>
        </div>
      </CardGroup>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={API_IMG + selectedMovie.poster_path}
            alt=''
            style={{ width: '14rem' }}
          />
          <h3>{selectedMovie.title}</h3>
          <h4>IMDB: {selectedMovie.vote_average}</h4>
          <h5>Release Date: {selectedMovie.release_date}</h5>
          <br></br>
          <h6>Overview</h6>
          <p>{selectedMovie.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Card className="bg-dark fixed-bottom text-center text-white"> 
      <Card.Body className='footer'>
        <Card.Text>
         MOVİES | Copyright © 2023 <br />
         Developer: <a href="https://github.com/ahmetucar1" target="_blank" rel="noopener noreferrer">Ahmet</a>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};

export default FilteredSuggest;

  
