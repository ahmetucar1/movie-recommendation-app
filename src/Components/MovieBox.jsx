import { Modal, Button } from 'react-bootstrap';
import React, {useState} from 'react'
const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox = ({title, poster_path, vote_average, release_date, overview}) => {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
   <div >
     <div className='card text-center mb-3'>
      <div className='card-body'>
        <img className='card-img-top' src={API_IMG+poster_path} alt="" />
        <div className='card-body'>
            <button onClick={handleShow} type='button' className='btn btn-dark'>Göster</button>
            <Modal show={show} onHide={handleClose} >
              <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img className='card-img-top' style={{width: '14rem'}} src={API_IMG+poster_path} alt="" />
                <h3> {title} </h3>
                <h4> IMDB: {vote_average} </h4>
                <h5> Yayın Tarihi: {release_date} </h5>
                <br></br>
                <h6>Özet</h6>
                <p> {overview} </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Kapat</Button>
              </Modal.Footer>
            </Modal>
        </div>
      </div>
    </div>
   </div>
  )
}

export default MovieBox
