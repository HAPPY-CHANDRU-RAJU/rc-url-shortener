import React, { Component } from 'react';
import axios from 'axios';

export default class insertList extends Component {
 constructor(props) {
  super(props);
  this.state = {exercises: []};
  const paramLink = this.props.match.url;
};
    
componentDidMount() {

  setTimeout(function(){
 	window.location = "#/show"
}, 6000)

}

  render() {
  
    return (
      <div>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfC9HqCsZ7qimLqu9SA-J5xzHhsQV1AEqxKe4Q4y68oxWLVC5f4c8NKrPcGOGTsOVGEw8&usqp=CAU" align="center" alt="exicting" class="Cryicon" />
        <div class="alert alert-success alert-deleted">        
          <strong> Inserted successfully ! </strong> 
          <br/><br/>
          <a href="/"><button class="btn btn-xs btn-success btn-text"> ADD MORE !!! </button></a>
          <p class="text-subline"> ( Wait for 5 Seconds !!!  Page will redirect automatically to Dashboard ) </p>
        </div> 
        <br />
      <div class="footerResponsive1 footer-fix">
	    <center><span >Designed with ♥ By : Chandru &  Rudresh Gunder </span></center>
    </div>
      </div>
    )
  }
}
