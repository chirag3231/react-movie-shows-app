import React, { Component } from 'react'
import Api from '../services/api'
import inputLabel  from '@material-ui/core/inputLabel';
import InputLabel  from '@material-ui/core/InputLabel';
import FormControl  from '@material-ui/core/FormControl';
import Select  from '@material-ui/core/Select';


class TvShows extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tvlist: '',
      category: 'popular'
    }
    
    this.handlechange = this.handlechange.bind(this);
  }


  componentDidMount () {
    Api.getTv(this.state.category)
        .then(data => {
          this.setState({
            tvlist: data.results.map(tv => ({
              image: tv.poster_path,
              title: tv.name,
              release_date: tv.first_air_date,
              popularity: tv.popularity,
              description: tv.overview

            }))
          })
        })
  }

  componentDidUpdate () {
    Api.getTv(this.state.category)
        .then(data => {
          this.setState({
            tvlist: data.results.map(tv => ({
              image: tv.poster_path,
              title: tv.name,
              release_date: tv.first_air_date,
              popularity: tv.popularity,
              description: tv.overview

            }))
          })
        })
  }

  handlechange(event){
    this.setState({category: event.target.value});
}
  render () {
    const list = this.state.tvlist
    let viewlist = []
    for(var i=0;i<list.length;i++){
        viewlist.push(<div className="viewBlock" key={i}>
          <img alt={list[i].title} src={`https://image.tmdb.org/t/p/w500${list[i].image}`}/>
          <div className="moviedetails">
          <h3>{list[i].title}</h3>
          <p>Realease Date:{list[i].release_date} | popularity:{list[i].popularity}</p>
          <p>{list[i].description}</p>
          </div>
        </div>)
    }
    return(
      <div className="viewareaall">
      <FormControl variant="outlined" className="catform">
    <InputLabel ref={inputLabel}>
      Category
    </InputLabel>
    <Select className="Categories"
    style= {{
        width:"100px",
        height:"40px",
        textAlign:"center"
    }}
    value={this.state.category}
    onChange={this.handlechange}>
        <option value="airing_today">airing_today</option>
        <option value="on_the_air">on_the_air</option>
        <option value="popular">popular</option>
        <option value="top_rated">top_rated</option>

        </Select>
    </FormControl>
    <div className="viewlist">{viewlist}</div>
    
    </div>
    
    )
  }
}
export default TvShows
