import React, { Component } from 'react'
import Movies from '../components/MovieShow'


class MoviesContainer extends Component {
  state = {
    movies: Movies
  
  }
//geting movies on the cards
  render() {
    const { movies } = this.state
    return (
        <div width="100%">
        <Movies
          movies={movies}
        />
        </div>
    )
  }
}

export default MoviesContainer
