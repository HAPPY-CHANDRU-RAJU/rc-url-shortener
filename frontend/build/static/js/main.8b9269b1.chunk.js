(this["webpackJsonprc-url-shortener"]=this["webpackJsonprc-url-shortener"]||[]).push([[0],{37:function(e,t,s){},38:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var c=s(2),n=s.n(c),r=s(31),a=s.n(r),i=(s(37),s(38),s(3)),l=s(15),o=s(4),A=s(5),d=s(7),j=s(6),h=s(0),b=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(A.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("nav",{className:"navbar navbar-dark dark navbar-expand-lg",children:[Object(h.jsxs)(l.b,{to:"/",className:"navbar-brand logo",children:[Object(h.jsx)("img",{src:"logo.png"}),"RC - URL Shortener"]}),Object(h.jsx)("div",{className:"collpase navbar-collapse",children:Object(h.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{className:"navbar-item",children:Object(h.jsx)(l.b,{to:"/",className:"nav-link",children:" Home"})}),Object(h.jsx)("li",{className:"navbar-item",children:Object(h.jsx)(l.b,{to:"/show",className:"nav-link",children:"Dashboard"})}),Object(h.jsx)("li",{className:"navbar-item",children:Object(h.jsx)(l.b,{to:"/about-us",className:"nav-link",children:"About Us"})})]})})]})}}]),s}(c.Component),u=s(14),x=s(9),O=s.n(x),p=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).onChangeUrl=c.onChangeUrl.bind(Object(u.a)(c)),c.onSubmit=c.onSubmit.bind(Object(u.a)(c)),c.state={urllink:""},c}return Object(A.a)(s,[{key:"onChangeUrl",value:function(e){this.setState({urllink:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={urllink:this.state.urllink};O.a.post("https://rc-url-shortner.herokuapp.com/#/insert",t),window.location="#/add"}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{class:"cover",children:[Object(h.jsxs)("div",{class:"cover-content",children:[Object(h.jsx)("h4",{class:"section-header",children:"Short links, big results"}),Object(h.jsx)("p",{class:"section-header-subline cover-subline",children:"A URL shortener built with powerful tools to help you grow and protect your brand."})]}),Object(h.jsx)("img",{src:"https://docrdsfx76ssb.cloudfront.net/static/1623687199/pages/wp-content/uploads/2020/05/illo-mobile-810x480-1.jpg",alt:"cover"})]}),Object(h.jsx)("form",{onSubmit:this.onSubmit,children:Object(h.jsxs)("div",{className:"App-Field",children:[Object(h.jsx)("input",{type:"url",placeholder:"Paste your link here !!!",className:"link_field form-control",value:this.state.urllink,onChange:this.onChangeUrl,required:!0}),Object(h.jsx)("button",{type:"submit",class:"btn btn-sm btn-success btn_submit",value:"SUbmit",children:"GET Link"}),Object(h.jsxs)("span",{class:"App-Field-Bottom",children:["By clicking Get Link, you are agreeing to RC's ",Object(h.jsx)("a",{href:"#",children:"Terms of Service"})," and ",Object(h.jsx)("a",{href:"#",children:"Privacy Policy"})]})]})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{class:"section-info",children:[Object(h.jsx)("h3",{class:"section-header",children:"The link shortener that has your brand\u2019s back"}),Object(h.jsx)("h5",{class:"section-header-subline",children:"Your brand wasn\u2019t built to be hidden. Help it stand out with branded links that drive 34% more clicks."}),Object(h.jsxs)("div",{class:"row section-hr",children:[Object(h.jsxs)("div",{class:"col-sm-4",children:[Object(h.jsx)("img",{src:"https://docrdsfx76ssb.cloudfront.net/static/1623687199/pages/wp-content/uploads/2019/08/Homepage-Branded-Links-Illustration-1.png",alt:"img1",class:"section-img"}),Object(h.jsxs)("div",{class:"section-content",children:[Object(h.jsx)("h5",{class:"section-content-header",children:"Inspire trust"}),Object(h.jsx)("p",{children:"With more clicks comes increased brand recognition and consumer trust in your communications\u2014which in turn inspires even more engagement with your links. (It\u2019s a wonderful cycle.)"})]})]}),Object(h.jsxs)("div",{class:"col-sm-4",children:[Object(h.jsx)("img",{src:"https://docrdsfx76ssb.cloudfront.net/static/1623687199/pages/wp-content/uploads/2019/08/Homepage-Branded-Links-Illustration-2.png",alt:"img2",class:"section-img"}),Object(h.jsxs)("div",{class:"section-content",children:[Object(h.jsx)("h5",{class:"section-content-header",children:"Boost results"}),Object(h.jsx)("p",{children:"On top of better deliverability and click-through, rich link-level data gives you crucial insight into your link engagement so your team can make smarter decisions around its content and communications."})]})]}),Object(h.jsxs)("div",{class:"col-sm-4",children:[Object(h.jsx)("img",{src:"https://docrdsfx76ssb.cloudfront.net/static/1623687199/pages/wp-content/uploads/2021/06/Site_Check-you.png",alt:"img3",class:"section-img"}),Object(h.jsxs)("div",{class:"section-content",children:[Object(h.jsx)("h5",{class:"section-content-header",children:"Gain control"}),Object(h.jsx)("p",{children:"Take credit for your content and learn more about how it\u2019s consumed by enabling auto-branding\u2014a feature that ensures your brand remains in any link someone shortens pointing to your website"})]})]})]})]}),Object(h.jsx)("div",{class:"footerResponsive1",children:Object(h.jsx)("center",{children:Object(h.jsx)("span",{children:"Designed with \u2665 By : Chandru &  Rudresh Gunder "})})})]})}}]),s}(n.a.Component),m=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var c;Object(o.a)(this,s),(c=t.call(this,e)).state={exercises:[]};c.props.match.url;return c}return Object(A.a)(s,[{key:"componentDidMount",value:function(){setTimeout((function(){window.location="#/show"}),6e3)}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfC9HqCsZ7qimLqu9SA-J5xzHhsQV1AEqxKe4Q4y68oxWLVC5f4c8NKrPcGOGTsOVGEw8&usqp=CAU",align:"center",alt:"exicting",class:"Cryicon"}),Object(h.jsxs)("div",{class:"alert alert-success alert-deleted",children:[Object(h.jsx)("strong",{children:" Inserted successfully ! "}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"/",children:Object(h.jsx)("button",{class:"btn btn-xs btn-success btn-text",children:" ADD MORE !!! "})}),Object(h.jsx)("p",{class:"text-subline",children:" ( Wait for 5 Seconds !!!  Page will redirect automatically to Dashboard ) "})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{class:"footerResponsive1 footer-fix",children:Object(h.jsx)("center",{children:Object(h.jsx)("span",{children:"Designed with \u2665 By : Chandru &  Rudresh Gunder "})})})]})}}]),s}(c.Component),v=s(17),g=s.n(v),f=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={exercises:[]},c}return Object(A.a)(s,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://rc-url-shortner.herokuapp.com/show").then((function(t){e.setState({exercises:t.data}),console.log(e.state.exercises)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=Object.values(this.state.exercises),t=0,s="https://rc-url-shortner.herokuapp.com/#/";return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{class:"noFlex",children:[Object(h.jsxs)("div",{class:"content",children:[Object(h.jsx)("h4",{class:"section-header",children:"Recent URL Shorten Links"}),Object(h.jsx)("p",{class:"section-header-subline cover-subline",children:"A URL shortener built with powerful tools to help you grow and protect your brand."})]}),Object(h.jsxs)("table",{class:"table table-striped ",children:[Object(h.jsxs)("tr",{class:"text-capitalize table-header text-center",children:[Object(h.jsx)("th",{class:"table-field",children:"Sl.no"}),Object(h.jsx)("th",{class:"table-field",children:"object ID"}),Object(h.jsx)("th",{class:"table-field fix-field",children:"Long URL"}),Object(h.jsx)("th",{class:"table-field",children:"Short URL"}),Object(h.jsx)("th",{class:"table-field",children:"Created At"}),Object(h.jsx)("th",{class:"table-field",colSpan:"3",children:"Operation"})]}),Object(h.jsx)("tbody",{children:e.map((function(e,c){return Object(h.jsxs)("tr",{class:"text-center",children:[Object(h.jsx)("td",{children:t+=1}),Object(h.jsx)("td",{children:e._id}),Object(h.jsx)("td",{children:Object(h.jsx)("p",{class:"paragraph-fix",children:e.urllink})}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:s+"s/"+e.shortlink,target:"_blank",children:s+"s/"+e.shortlink})}),Object(h.jsx)("td",{children:Object(h.jsx)(g.a,{format:"DD-MMMM-YY HH:m:ss A",children:e.createdAt})}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"#/read/"+e._id,children:Object(h.jsx)("img",{src:"data:image/png;base64,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",class:"iconFix",alt:"view"})})}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"#/delete/"+e._id,children:Object(h.jsx)("img",{src:"data:image/jpeg;base64,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",class:"iconFix",alt:"delete"})})}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:"#/update/"+e._id,children:Object(h.jsx)("img",{src:"data:image/png;base64,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",class:"iconFix",alt:"update"})})})]})}))}),Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colspan:"8",children:Object(h.jsx)("p",{class:"NoMore",children:"No More"})})})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{class:"footerResponsive1",children:Object(h.jsx)("center",{children:Object(h.jsx)("span",{children:"Designed with \u2665 By : Chandru &  Rudresh Gunder "})})})]})}}]),s}(c.Component),y=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var c;Object(o.a)(this,s),(c=t.call(this,e)).state={exercises:[]};c.props.match.url;return c}return Object(A.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.url;console.log(t),O.a.get("https://rc-url-shortner.herokuapp.com"+t).then((function(t){e.setState({exercises:t.data}),console.log(e.state.exercises)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{class:"noFlex",children:[Object(h.jsxs)("div",{class:"content",children:[Object(h.jsx)("h4",{class:"section-header",children:"Recent URL Shorten Links"}),Object(h.jsx)("p",{class:"section-header-subline cover-subline",children:"A URL shortener built with powerful tools to help you grow and protect your brand."})]}),Object(h.jsxs)("table",{class:"table table-striped ",children:[Object(h.jsxs)("tr",{class:"text-capitalize table-header text-center",children:[Object(h.jsx)("th",{class:"table-field",children:"object ID"}),Object(h.jsx)("th",{class:"table-field fix-field",children:"Long URL"}),Object(h.jsx)("th",{class:"table-field",children:"Short URL"}),Object(h.jsx)("th",{class:"table-field",children:"Created At"})]}),Object(h.jsxs)("tbody",{children:[""!=this.state.exercises&&Object(h.jsxs)("tr",{class:"text-center",children:[Object(h.jsx)("td",{children:this.state.exercises._id}),Object(h.jsx)("td",{children:Object(h.jsx)("p",{class:"paragraph-fix",children:this.state.exercises.urllink})}),Object(h.jsx)("td",{children:Object(h.jsxs)("a",{href:"https://rc-url-shortner.herokuapp.com/#/s/"+this.state.exercises.shortlink,target:"_blank",class:"overflow-fit",children:[window.location.href,"/s/",this.state.exercises.shortlink]})}),Object(h.jsx)("td",{children:Object(h.jsx)(g.a,{format:"DD-MMMM-YY HH:m:ss A",children:this.state.exercises.createdAt})})]}),""==this.state.exercises&&Object(h.jsx)("tr",{class:"text-center",children:Object(h.jsxs)("td",{colSpan:"4",children:[Object(h.jsx)("b",{children:"No More"})," "]})})]})]}),Object(h.jsx)("a",{href:"#/show",children:Object(h.jsx)("button",{class:"btn btn-xs btn-primary btn-text",children:" < Back to Dashboard "})})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{class:"footerResponsive1",children:Object(h.jsx)("center",{children:Object(h.jsx)("span",{children:"Designed with \u2665 By : Chandru &  Rudresh Gunder "})})})]})}}]),s}(c.Component),k=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).onChangeUrl=c.onChangeUrl.bind(Object(u.a)(c)),c.onSubmit=c.onSubmit.bind(Object(u.a)(c)),c.state={urllink:""},c}return Object(A.a)(s,[{key:"onChangeUrl",value:function(e){this.setState({urllink:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={urllink:this.state.urllink},s=this.props.match.url;console.log(s),O.a.post("https://rc-url-shortner.herokuapp.com"+s,t).then((function(){return console.log("success")})).catch((function(e){console.log(e)})),window.location="#/update-success"}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("form",{onSubmit:this.onSubmit,children:Object(h.jsxs)("div",{className:"update-App bg-white",children:[Object(h.jsx)("h3",{class:"update-header",children:"Update URL :"}),Object(h.jsx)("input",{type:"url",placeholder:"Paste your link here !!!",className:"link_field form-control",value:this.state.urllink,onChange:this.onChangeUrl,required:!0}),Object(h.jsx)("button",{type:"submit",class:"btn btn-sm btn-success btn_submit",value:"SUbmit",children:"Update Link"}),Object(h.jsxs)("span",{class:"colBlack bg-white ",children:["By clicking Get Link, you are agreeing to RC's ",Object(h.jsx)("a",{href:"#",children:"Terms of Service"})," and ",Object(h.jsx)("a",{href:"#",children:"Privacy Policy"})]})]})}),Object(h.jsx)("div",{class:"footerResponsive1 footer-fix",children:Object(h.jsx)("center",{children:Object(h.jsx)("span",{children:"Designed with \u2665 By : Chandru &  Rudresh Gunder "})})})]})}}]),s}(c.Component),w=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var c;Object(o.a)(this,s),(c=t.call(this,e)).state={exercises:[]};c.props.match.url;return c}return Object(A.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.url;O.a.delete("https://rc-url-shortner.herokuapp.com"+t).then((function(t){e.setState({exercises:t.data}),console.log(e.state.exercises)})).catch((function(e){console.log(e)})),setTimeout((function(){window.location="/"}),1e4)}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"https://i.pinimg.com/originals/d9/0f/5e/d90f5e946b12103acd87b1f05258d2e8.png",align:"center",loading:"lazy",alt:"crying",class:"Cryicon"}),Object(h.jsxs)("div",{class:"alert alert-danger alert-deleted",children:[Object(h.jsxs)("p",{class:"text-msg",children:[Object(h.jsx)("strong",{children:" Deleted successfully ! :( "})," "]}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"/",children:Object(h.jsx)("button",{class:"btn btn-xs btn-success btn-text",children:" Create Some Short Links "})}),Object(h.jsx)("p",{class:"text-subline",children:" ( Wait for 10 Seconds !!!  Page will redirect automatically to Home Page ) "})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{class:"footerResponsive1 footer-fix",children:Object(h.jsx)("center",{children:Object(h.jsx)("span",{children:"Designed with \u2665 By : Chandru &  Rudresh Gunder "})})})]})}}]),s}(c.Component),R=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(A.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{class:"content",children:[Object(h.jsx)("img",{src:"https://media-exp3.licdn.com/dms/image/C4D1BAQEIuFSc-wGdnQ/company-background_10000/0/1519799419574?e=2159024400&v=beta&t=f37LmJAB7FFKEwm9rm0e3bajGQK7NiGIVoloM5Tj1HE",class:"ramaiahlogo"}),Object(h.jsxs)("div",{class:"inline-block shortlogo-div",children:[Object(h.jsx)("img",{src:"logo.png",class:"shortlogo"}),Object(h.jsx)("p",{class:"inline-block logo-text",children:"RC URL Shortener"})]}),Object(h.jsx)("h4",{class:"mini-project",children:"WEB TECHNOLOGIES MINI PROJECT "}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{class:"row",children:[Object(h.jsx)("div",{class:"col-sm-8",children:Object(h.jsxs)("p",{align:"justify",children:["A single-page app in which a user enters a link and receives a different URL in response, which when visited, redirects the user to the original URL. Because the URL is so lengthy, it's likely that it's a URL Lengthener. This was created as a fun opportunity to educate how and when to use MERN stack.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"The design was carefully planned, with each component having its very own particular considerations. There is an input component, a display component, a storage component, and so on. component is the only component directory having states, and it does not render anything. Instead, it sends information from applications and other child components via props.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Instead of implementing a web Mvc architecture with strict rules, this was an interesting solution.We have to construct each component separately. Although the fundamental concept is simple, it provides a number of significant advantages such as automatically created React components, stateless functional components, and asynchronous server calls. As a result, We are familiar with every line of code in the application.(except for node_modules of course!).",Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})}),Object(h.jsx)("div",{class:"col-sm-4",children:Object(h.jsx)("img",{src:"cover.png"})})]})]}),Object(h.jsxs)("div",{class:"designed",children:[Object(h.jsx)("h5",{children:"Designed by "}),Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Chandru V"}),Object(h.jsx)("th",{children:"\xa0\xa0\xa0"}),Object(h.jsx)("th",{children:"1MS19CS401"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Rudresh Gunder V"}),Object(h.jsx)("th",{}),Object(h.jsx)("th",{children:"1MS19CS407"})]})]})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{class:"footerResponsive1 footer-fix",children:Object(h.jsx)("center",{children:Object(h.jsx)("span",{children:"Designed with \u2665 By : Chandru &  Rudresh Gunder "})})})]})}}]),s}(c.Component),N=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var c;Object(o.a)(this,s),(c=t.call(this,e)).state={exercises:[]};c.props.match.url;return c}return Object(A.a)(s,[{key:"componentDidMount",value:function(){setTimeout((function(){window.location="/show"}),6e3)}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfC9HqCsZ7qimLqu9SA-J5xzHhsQV1AEqxKe4Q4y68oxWLVC5f4c8NKrPcGOGTsOVGEw8&usqp=CAU",align:"center",loading:"lazy",alt:"exicting",class:"Cryicon"}),Object(h.jsxs)("div",{class:"alert alert-primary alert-deleted",children:[Object(h.jsx)("strong",{children:" URL has been updated successfully ! "}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:"/",children:Object(h.jsx)("button",{class:"btn btn-xs btn-success btn-text",children:" ADD MORE !!! "})}),Object(h.jsx)("p",{class:"text-subline",children:" ( Wait for 5 Seconds !!!  Page will redirect automatically to Dashboard ) "})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{class:"footerResponsive1 footer-fix",children:Object(h.jsx)("center",{children:Object(h.jsx)("span",{children:"Designed with \u2665 By : Chandru &  Rudresh Gunder "})})})]})}}]),s}(c.Component),V=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var c;Object(o.a)(this,s),(c=t.call(this,e)).state={datares:[]};c.props.match.url;return c}return Object(A.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.url.slice(3,11);console.log(t),O.a.get("https://rc-url-shortner.herokuapp.com/"+t).then((function(t){e.setState({datares:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=Object.values(this.state.datares);return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"https://assets.justinmind.com/wp-content/uploads/2018/09/progress-bar.gif",align:"center",alt:"verified",class:"loadicon"}),e.map((function(e,t){return Object(h.jsxs)("div",{class:"alert alert-primary alert-deleted",children:[Object(h.jsxs)("strong",{children:[" ",e.urllink," "]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:e.urllink,children:Object(h.jsx)("button",{class:"btn btn-xs btn-success btn-text",children:" Visit Now !!! "})}),Object(h.jsx)("p",{class:"text-subline",children:" ( We aren 't reponsible for any attack or virus through above website. Visit with your own risk. Thank You ) "})]})})),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{class:"footerResponsive1",children:Object(h.jsx)("center",{children:Object(h.jsx)("span",{children:"Designed with \u2665 By : Chandru &  Rudresh Gunder "})})})]})}}]),s}(c.Component);var C=function(){return Object(h.jsxs)(l.a,{children:[Object(h.jsx)(b,{}),Object(h.jsx)(i.a,{path:"/",exact:!0,component:p}),Object(h.jsx)(i.a,{path:"/add",component:m}),Object(h.jsx)(i.a,{path:"/show",exact:!0,component:f}),Object(h.jsx)(i.a,{path:"/read/:id",component:y}),Object(h.jsx)(i.a,{path:"/update/:id",component:k}),Object(h.jsx)(i.a,{path:"/delete/:id",component:w}),Object(h.jsx)(i.a,{path:"/about-us",component:R}),Object(h.jsx)(i.a,{path:"/update-success",component:N}),Object(h.jsx)(i.a,{path:"/s/:id",exact:!0,component:V})]})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,71)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),D()}},[[70,1,2]]]);
//# sourceMappingURL=main.8b9269b1.chunk.js.map