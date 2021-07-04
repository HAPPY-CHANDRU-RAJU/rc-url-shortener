import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';

export default class RedirectList extends Component {
constructor(props) {
  super(props);
  this.state = {datares: []};
  const paramLink = this.props.match.url;
};
    
componentDidMount() {
    const temp = this.props.match.url;
    var temp1 = temp.slice(3,11);    
    console.log(temp1);
    axios.get('http://localhost:3001/'+temp1)
    .then(response => { this.setState({ datares: response.data }); })
    .catch((error) => { console.log(error); })
}
  
  render() {
   const j = Object.values(this.state.datares);
    return (
    <div> 
 <img src="https://assets.justinmind.com/wp-content/uploads/2018/09/progress-bar.gif" align="center" alt="verified" class="loadicon" />
    {j.map((item,index) => 
    <div class="alert alert-primary alert-deleted">        
          <strong> {item.urllink} </strong> 
          <br/><br/>
        <a href={item.urllink} ><button class="btn btn-xs btn-success btn-text"> Visit Now !!! </button></a>
         <p class="text-subline"> ( We aren &apos;t reponsible for any attack or virus through above website. Visit with your own risk. Thank You ) </p>
    </div>  
    )}
    <br/>
    <br/ >
    <br/ >
      <div class="footerResponsive1">
	    <center><span >Designed with ♥ By : Chandru &  Rudresh Gunder </span></center>
      </div>
    </div>
    )}
}
