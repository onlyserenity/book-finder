(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),s=(n(14),n(1)),c=n(2),l=n(4),u=n(3),h=n(5),m=(n(15),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(){var e=n.search.value.replace(" ","+");e&&fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(e)).then(function(e){return e.json()}).then(function(e){n.setState({isLoaded:!0,initialState:!1,items:e.items})},function(e){n.setState({isLoaded:!0,error:e})})},n._handleKeyPress=function(e){"Enter"===e.key&&n.handleInputChange()},n.emptyResults=function(){n.setState={initialState:!0}},n.state={initialState:!0},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.state.initialState?"Nothing Here Yet - Try Searching For A Book":this.state.items?this.state.items.map(function(e){return o.a.createElement(p,{key:e.id,bookTitle:e.volumeInfo.title,bookAuthor:e.volumeInfo.authors,bookPublisher:e.volumeInfo.publisher,bookLink:e.volumeInfo.previewLink,imageLink:e.volumeInfo.hasOwnProperty("imageLinks")?e.volumeInfo.imageLinks.smallThumbnail:"http://lgimages.s3.amazonaws.com/nc-md.gif"})}):"No Book Found - Try Another Query",o.a.createElement("div",{className:"App"},o.a.createElement("header",null,"BOOK FINDER"),o.a.createElement("div",null,o.a.createElement("input",{className:"search-input",type:"search",name:"SearchInput",placeholder:"Search by book title or author...",ref:function(e){return t.search=e},onKeyPress:this._handleKeyPress}),o.a.createElement("button",{className:"search-btn",onClick:this.handleInputChange},"Search")),o.a.createElement("div",{className:"book-display"},e))}}]),t}(a.Component)),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"book-card"},o.a.createElement("img",{className:"book-img",src:this.props.imageLink,alt:this.props.bookTitle}),o.a.createElement("div",{className:"book-info"},o.a.createElement("div",{className:"book-title"},this.props.bookTitle),o.a.createElement("div",{className:"book-author"},"By: ",this.props.bookAuthor),o.a.createElement("div",{className:"book-publisher"},"Published By: ",this.props.bookPublisher),o.a.createElement("a",{href:this.props.bookLink,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("button",{className:"book-link"},"See this Book"))))}}]),t}(a.Component),b=m;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.ff5ce9c3.chunk.js.map