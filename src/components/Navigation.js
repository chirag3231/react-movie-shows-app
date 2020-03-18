import React, { Component } from 'react'
import { Button,Input } from 'antd'
import TvShows from './TvShows';
import Searched from './Searched';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import inputLabel  from '@material-ui/core/inputLabel';
import InputLabel  from '@material-ui/core/InputLabel';
import FormControl  from '@material-ui/core/FormControl';
import Select  from '@material-ui/core/Select';
import MovieDisplay from './MovieDisplay';
export default class Navigation extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
      navButton: 'movie',
      value:"",
      SearchStatus:false,
      SearchCategory: "movie",
      stype:"multi"
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }


  showView(){
  const searchvalue = this.state.value
  const Buttonvalue = this.state.SearchStatus
  const navvalue = this.state.navButton
  const typex = this.state.stype
    if(navvalue==2){
      return(
        <TvShows/>
      )
    }
    else if(navvalue==1){
      return(
        <Searched query={searchvalue} button={Buttonvalue} searchtype={typex}/>
        
      )
    }
    else{
        return(
          <MovieDisplay/>
        )
      }
    }
  handleClick(e,clickedButton){
    this.setState(state => ({
      navButton: clickedButton,
    }));
    this.showView()
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value })
    new Searched({"query":e.target.value, "button":false, "searchtype":this.state.stype})
  }
  handleCategory = (e) => {
    this.setState({ SearchCategory: e.target.value })

  }

  handleSearch = (e) => {
    e.preventDefault()
    this.setState({ SearchStatus: true })
    new Searched({"query":this.state.value, "button":true, "searchtype":this.state.stype})
    
  }
  handletype = (e) => {
    const valuetype = e.target.value
    this.setState({
      stype: valuetype
    })
  }

render(){
  const navvalue = this.state.navButton

  return(
    <div className="navBlock">
      <div id="searchBlock">
          <form onSubmit={this.handleSearch} className="Search-form">
            <Input className='searchinput' placeholder='Search' onChange={this.handleChange} />
            <FormControl variant="outlined" className="catform">
            <InputLabel ref={inputLabel}>
              Search Type
            </InputLabel>
            <Select className="Categories"
            style= {{
                width:"100px",
                height:"40px",
                textAlign:"center"
            }}
            value={this.state.stype} 
            id="search-type" 
            onChange={this.handletype}>
              <option id="movie" value="movie">movie</option>
              <option id="multi" value="multi">multi</option>
              <option id="tv" value="tv">tv</option>

            </Select>
            </FormControl>
            <Button type="primary" onClick={this.handleSearch} id="searchButton">Search</Button>
          </form>
        
        </div>
        <div className="movieslist">
        <Paper square>
      <Tabs
        value={navvalue}
        indicatorColor="primary"
        textColor="primary"
        onChange={this.handleClick}
        aria-label="disabled tabs example"
        variant="fullWidth"
        width="100%"
      >
        <Tab label="Movies" />
        <Tab label="Search Results" />
        <Tab label="Tv Shows" />
      </Tabs>
    </Paper>
          <div width="100%">
          {this.showView()}
          </div>
        </div>
        </div>
  )
  }
}
