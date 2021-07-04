import React, { Component } from 'react';
import axios from 'axios';

export default class updateList extends Component {

constructor(props) {
  super(props);
  this.onChangeUrl = this.onChangeUrl.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  this.state = {
    urllink: ''
  };
}

onChangeUrl(e) {
  this.setState({
    urllink: e.target.value
  });
}

onSubmit(e) {
    e.preventDefault();  
    const newUrl = {
        "urllink" : this.state.urllink
    };   
    
    
    const temp = this.props.match.url;
    console.log(temp);
    axios.post('https://rc-url-shortner.herokuapp.com'+temp, newUrl)
    .then(() => console.log("success"))
   .catch((error) => {
      console.log(error);
   })
   window.location = '#/update-success';
}


  render() {
    return (
      <div>
         <form onSubmit={this.onSubmit}>
      <div className="update-App bg-white">
      <h3 class="update-header">Update URL :</h3>
        <input type="url" placeholder="Paste your link here !!!" className="link_field form-control" value={this.state.urllink}  onChange={this.onChangeUrl} required/>
        <button type="submit" class="btn btn-sm btn-success btn_submit" value="SUbmit" >Update Link</button>
        <span class="colBlack bg-white ">By clicking Get Link, you are agreeing to RC's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
      </div>
      </form>
      <div class="footerResponsive1 footer-fix">
	    <center><span >Designed with ♥ By : Chandru &  Rudresh Gunder </span></center>
    </div>
      </div>
    )
  }
}
