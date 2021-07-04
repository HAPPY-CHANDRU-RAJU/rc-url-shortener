import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

export default class deleteList extends Component {
constructor(props) {
  super(props);
  this.state = {exercises: []};
  const paramLink = this.props.match.url;
};
    
componentDidMount() {
    const temp = this.props.match.url;
   //console.log(temp);
  axios.delete('http://localhost:3001'+temp)
   .then(response => { this.setState({ exercises: response.data }); 
    console.log(this.state.exercises);
   })
   .catch((error) => {
      console.log(error);
   })
   
  setTimeout(function(){
  window.location= "/"
}, 10000)

}

  render() {
    return (
      <div>
      <img src="https://i.pinimg.com/originals/d9/0f/5e/d90f5e946b12103acd87b1f05258d2e8.png" align="center" loading="lazy" alt="crying" class="Cryicon" />
        <div class="alert alert-danger alert-deleted">
          <p class="text-msg"><strong> Deleted successfully ! :( </strong> </p>
          <br/>
          <a href="/"><button class="btn btn-xs btn-success btn-text"> Create Some Short Links </button></a>
          <p class="text-subline"> ( Wait for 10 Seconds !!!  Page will redirect automatically to Home Page ) </p>
        </div> 
        <br />
      <div class="footerResponsive1 footer-fix">
	    <center><span >Designed with ♥ By : Chandru &  Rudresh Gunder </span></center>
    </div>
      </div>
    )
  }
}
