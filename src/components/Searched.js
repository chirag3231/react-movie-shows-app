import React, { Component } from 'react'
import Api from '../services/api'
var value = null
var buttonstate = "false"
var type = null
class Searched extends Component {
  constructor (props) {
    value = props.query
    buttonstate = props.button
    type = props.searchtype

    super(props)

    this.state = {
      Searching: '',
      tvlist: ''
    }
  }


  componentDidMount () {
            Api.getSearch(value, type)
                .then(data => {
                  this.setState({
                    tvlist: data.results.map(tv => ({
                      image: tv.poster_path,
                      title: tv.original_title,
                      release_date: tv.first_air_date,
                      popularity: tv.popularity,
                      description: tv.overview
        
                    }))
                  })                  

                })
  }
  componentDidUpdate () {
    function check(x,y){
      if(x==undefined){
        return(y)
      }
      else{
      return(x)
      }
    }
    if(value==""){}
    else{
            Api.getSearch(value, type)
                .then(data => {
                  this.setState({
                    tvlist: data.results.map(tv => ({
                      image: tv.poster_path,
                      title: check(tv.name,tv.title),
                      release_date: tv.first_air_date,
                      popularity: tv.popularity,
                      description: tv.overview
        
                    }))
                  })                  

                })
              }
  }
  render () {
    const list = this.state.tvlist

    //Displaying tv shows and movies on the cards

    let viewlist = []
    for(var i=0;i<list.length;i++){
        viewlist.push(<div className="viewBlock">
          <img alt={list[i].title} src={`https://image.tmdb.org/t/p/w500${list[i].image}`}/>
          <div className="moviedetails">
          <h3>{list[i].title}</h3>
          <p>Realease Date:{list[i].release_date} | popularity:{list[i].popularity}</p>
          <p>{list[i].description}</p>
          </div>
        </div>)
    }
//search results

  if(value==""){
    return(<h1 width="100%">Please Enter a Search</h1>)
  }
  else if(this.state.tvlist.length==0){
          if(buttonstate== !true){  
            return(<h2 width="100%">Press Search To See Results</h2>)
          }
          else{
            return(<h2 width="100%">Sorry, there were no results</h2>)
           
          }
      }
  else{ 
      if(buttonstate== !true){
        return(<h2 width="100%">Press Search To See Results</h2>)
      }
      else{
        return (<div className="viewlist">{viewlist}</div>)
      }
  }
}
}
export default Searched
