import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import MovieDetail from '../../MoviesContainer/MovieDetail/MovieDetail'

// import './movieCard.css'
class MovieCard extends Component {
  
   state = {
     selectedMovieId: "",
     movieDetails: {},
   }
    
  
  // Movie details
  handleDetails = (event) => {
    event.preventDefault()
    axios.get(`${process.env.REACT_APP_API_URL}/movies/${this.props.movie._id}`, { withCredentials: true })
    .then(res => {
      this.setState({
        movieDetails: res.data.data,
        selectedMovieId: res.data.data._id
      })
    })
    .catch(err => console.log(err))
  }
   
  render () {
    return (
      <>
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm movieCard ">
         <img src={this.props.movie.img} alt="ima" width="100%" height="100%" />
          <div className="card-body flip-card-inner">
            <div className="d-flex justify-content-between align-items-center"> 
            <div className="btn-group">
              <button type="button" className={`btn btn-sm btn-outline-secondary ${this.state.addedMovie && "disable"}`}  onClick={(event) => this.props.handleRemoveMovie(event, this.props.movie._id)} >--</button>
              <button  type="button" className="btn  btn-sm btn-outline-secondary" onClick={this.handleDetails} data-toggle="modal" data-target={`#movie-${this.props.movie._id}`}>Details</button>
            </div>
            </div>
          </div>
         </div>
        </div>
        <div className="modal fade bd-example-modal-xlPro" id={`movie-${this.props.movie._id}`} tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl " role="document">
            <div className="modal-content movieDetails">
            <button type="button" className="text-right mr-2 close " data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            < MovieDetail  movieDetail={this.state.movieDetails}/>
            </div>
          </div>
        </div>
    </>
    )
  }
}

export default withRouter(MovieCard);



