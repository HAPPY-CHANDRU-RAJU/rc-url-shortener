import React, { Component } from 'react';
import axios from 'axios';

export default class defaultList extends React.Component{

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
        urllink: this.state.urllink
    };   
    axios.post('http://localhost:3001/insert', newUrl)
    window.location = '#/add';
}

  render() {
    return (
    <div>
      <div class="cover">
      <div class="cover-content">
        <h4 class="section-header">Short links, big results</h4>
        <p class="section-header-subline cover-subline">A URL shortener built with powerful tools to help you grow and protect your brand.</p>
      </div>
      <img src="https://docrdsfx76ssb.cloudfront.net/static/1623687199/pages/wp-content/uploads/2020/05/illo-mobile-810x480-1.jpg" alt="cover"/>
    </div>
    
    <form onSubmit={this.onSubmit}>
      <div className="App-Field">
        <input type="url" placeholder="Paste your link here !!!" className="link_field form-control" value={this.state.urllink}  onChange={this.onChangeUrl} required/>
        <button type="submit" class="btn btn-sm btn-success btn_submit" value="SUbmit" >GET Link</button>
        <span class="App-Field-Bottom">By clicking Get Link, you are agreeing to RC's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
      </div>
      </form>
    <br />
    <br />
     <div class="section-info">
        <h3 class="section-header">The link shortener that has your brand’s back</h3>
        <h5 class="section-header-subline">Your brand wasn’t built to be hidden. Help it stand out with branded links that drive 34% more clicks.</h5>
        <div class="row section-hr">
          <div class="col-sm-4">
            <img src="https://docrdsfx76ssb.cloudfront.net/static/1623687199/pages/wp-content/uploads/2019/08/Homepage-Branded-Links-Illustration-1.png" alt="img1"  class="section-img" />
            <div class="section-content">
            <h5 class="section-content-header">Inspire trust</h5>
            <p>With more clicks comes increased brand recognition and consumer trust in your communications—which in turn inspires even more engagement with your links. (It’s a wonderful cycle.)</p>
            </div>
          </div>

          <div class="col-sm-4">
            <img src="https://docrdsfx76ssb.cloudfront.net/static/1623687199/pages/wp-content/uploads/2019/08/Homepage-Branded-Links-Illustration-2.png" alt="img2" class="section-img"  />
            <div class="section-content">
            <h5 class="section-content-header">Boost results</h5>
            <p>On top of better deliverability and click-through, rich link-level data gives you crucial insight into your link engagement so your team can make smarter decisions around its content and communications.</p>
            </div>
          </div>

          <div class="col-sm-4">
            <img src="https://docrdsfx76ssb.cloudfront.net/static/1623687199/pages/wp-content/uploads/2021/06/Site_Check-you.png"  alt="img3" class="section-img"  />
            <div class="section-content">
            <h5 class="section-content-header">Gain control</h5>
            <p>Take credit for your content and learn more about how it’s consumed by enabling auto-branding—a feature that ensures your brand remains in any link someone shortens pointing to your website</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="footerResponsive1">
	    <center><span >Designed with ♥ By : Chandru &  Rudresh Gunder </span></center>
    </div>
    </div>
    )
  }
}
