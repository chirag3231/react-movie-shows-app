import React, { Component } from 'react'
import Api from '../services/api'
var x =""
class Movielist extends Component {
  constructor (props) {
    x = props.category
    super(props)
    this.state = {
      movielist: '',
      category:props.category
    }
  }

  componentDidMount () {
    Api.getMovies(x)
        .then(data => {
          this.setState({
            movielist: data.results.map(movie => ({
              image: movie.poster_path,
              title: movie.title,
              release_date: movie.release_date,
              popularity: movie.popularity,
              description: movie.overview

            }))
          })
        })
  }
  componentWillUpdate(){
    Api.getMovies(x)
        .then(data => {
          this.setState({
            movielist: data.results.map(movie => ({
              image: movie.poster_path,
              title: movie.title,
              release_date: movie.release_date,
              popularity: movie.popularity,
              description: movie.overview
            }))
          })
        })
      


  }

  render (){
    const list = this.state.movielist
    
    new Movielist(this.props)

    let viewlist = []
    for(var i=0;i<list.length;i++){
      

        viewlist.push(<div className="viewBlock" key={i}>
          <img alt={list[i].title} src={`https://image.tmdb.org/t/p/w500${list[i].image}`}/>
          <div className="moviedetails">
          <h3>{list[i].title}</h3>
          <p className="release">Realease Date: {list[i].release_date}  |  Popularity: {list[i].popularity}</p>
          <p>{list[i].description}</p>
          </div>
        </div>)
    }
    return(
      
    <div className="viewlist">{viewlist}</div>
    
    )
  }
}
export default Movielist
