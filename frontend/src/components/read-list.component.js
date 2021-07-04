import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';


export default class readList extends Component {
constructor(props) {
  super(props);
  this.state = {exercises: []};
  const paramLink = this.props.match.url;
};
    
componentDidMount() {
    const temp = this.props.match.url;
   console.log(temp);
  axios.get('https://rc-url-shortner.herokuapp.com'+temp)
   .then(response => { this.setState({ exercises: response.data }); 
    console.log(this.state.exercises);
   })
   .catch((error) => {
      console.log(error);
   })
   
}



  render() {
  var websiteLink = "https://rc-url-shortner.herokuapp.com/#/";
  
    return (
       <div> 
      <div class="noFlex">
      <div class="content" >
        <h4 class="section-header">Recent URL Shorten Links</h4>
        <p class="section-header-subline cover-subline">A URL shortener built with powerful tools to help you grow and protect your brand.</p>
      </div>
      <table class="table table-striped ">
        <tr class="text-capitalize table-header text-center">
            <th class="table-field">object ID</th>
            <th class="table-field fix-field" >Long URL</th>
            <th class="table-field">Short URL</th>
            <th class="table-field">Created At</th>
        </tr>
        <tbody>
        
       {this.state.exercises != "" && 
             <tr class="text-center">
               <td>{this.state.exercises._id}</td>
               <td><p class="paragraph-fix">{this.state.exercises.urllink}</p></td>
               <td><a href={websiteLink+"s/"+this.state.exercises.shortlink} target="_blank" class="overflow-fit" >{window.location.href}/s/{this.state.exercises.shortlink}</a></td>
               <td><Moment format="DD-MMMM-YY HH:m:ss A">
                {this.state.exercises.createdAt}
                </Moment></td>
            </tr>
       }
       {this.state.exercises == "" && 
       <tr class="text-center">
               <td colSpan="4"><b>No More</b> </td>     
        </tr>
       }
        
           
          </tbody>
      </table>
       <a href="#/show"><button class="btn btn-xs btn-primary btn-text"> &lt; Back to Dashboard </button></a>
    </div>
    <br />
      <div class="footerResponsive1">
	    <center><span >Designed with ♥ By : Chandru &  Rudresh Gunder </span></center>
    </div>
    </div>
    )
  }
}
