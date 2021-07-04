import React, { Component } from 'react';
import axios from 'axios';

export default class insertList extends Component {
 

  render() {
    return (
      <div>
       <div class="content">
       <img src="https://media-exp3.licdn.com/dms/image/C4D1BAQEIuFSc-wGdnQ/company-background_10000/0/1519799419574?e=2159024400&v=beta&t=f37LmJAB7FFKEwm9rm0e3bajGQK7NiGIVoloM5Tj1HE" class="ramaiahlogo" />
       <div class="inline-block shortlogo-div" >
           <img src="logo.png" class="shortlogo" />
           <p class="inline-block logo-text">RC URL Shortener</p>
       </div>
       <h4 class="mini-project">WEB TECHNOLOGIES MINI PROJECT </h4>
       <hr />
       <div class="row">
            <div class="col-sm-8">
                 <p align="justify">A single-page app in which a user enters a link and receives a different URL in response, which when visited, redirects the user to the original URL. Because the URL is so lengthy, it's likely that it's a URL Lengthener. This was created as a fun opportunity to educate how and when to use MERN stack.<br /><br />

The design was carefully planned, with each component having its very own particular considerations. There is an input component, a display component, a storage component, and so on. component is the only component directory having states, and it does not render anything. Instead, it sends information from applications and other child components via props.<br /><br />

Instead of implementing a web Mvc architecture with strict rules, this was an interesting solution.We have to construct each component separately. Although the fundamental concept is simple, it provides a number of significant advantages such as automatically created React components, stateless functional components, and asynchronous server calls. As a result, We are familiar with every line of code in the application.(except for node_modules of course!).<br /><br /></p>
            </div>
             <div class="col-sm-4">
                <img src="cover.png" />
             </div>
       </div>    
       </div>
       <div class="designed">
            <h5>Designed by </h5>
            <table>
                <tr><th>Chandru V</th><th>&nbsp;&nbsp;&nbsp;</th><th>1MS19CS401</th></tr> 
                <tr><th>Rudresh Gunder V</th><th></th><th>1MS19CS407</th></tr>
            </table>
       </div>
       <br/>
       <br/>
       <br/>
      <div class="footerResponsive1 footer-fix">
	    <center><span >Designed with ♥ By : Chandru &  Rudresh Gunder </span></center>
    </div>
      </div>
    )
  }
}
