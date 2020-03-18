import React, { Component } from 'react'
import Api from '../services/api'
import Searched from './component/Searched'

class Searching extends Component {
  constructor (props) {
    super(props)

    this.state = {
      Seachquery: null
    }
  }

myCall = (dataFromparent) => {
    this.setState({ Seachquery: dataFromparent });
}
  render () {
if(this.state.Seachquery=="{}"){
      return(<h1>Please Enter a Search</h1>)
}

    
  }
}
export default Searching
