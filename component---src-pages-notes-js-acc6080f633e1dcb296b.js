(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"8o2o":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},FWeN:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("9Hrx"),r=n("q1tI"),o=n.n(r),i=n("vOnD"),l=n("Bl7J"),s=n("al08"),c=n("qhky"),m=i.a.div.withConfig({displayName:"notes__BlogPageStyles",componentId:"oxs7g-0"})(["overflow:hidden;width:calc(min(1000px,95vw));display:flex;justify-content:center;flex-direction:column;margin:auto;color:#e6ddeb;h1{text-align:center;}p{color:whitesmoke;padding:1rem;margin:3rem auto;max-width:500px;}"]),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(l.a,null,o.a.createElement(c.a,{meta:[{property:"og:type",name:"og:type",content:"website"},{property:"og:title",name:"og:title",content:"Waylon Walker's Notes Feed"},{property:"twitter:title",name:"twitter:title",content:"Waylon Walker's Notes Feed"},{property:"og:image",name:"og:image",content:"https://waylonwalker.com/waylon-walker.png"},{property:"og:image:width",name:"og:image:width",content:"1000"},{property:"og:image:height",name:"og:image:height",content:"420"},{property:"og:url",name:"og:url",content:"https://waylonwalker.com/blog"},{property:"description",name:"description",content:"A cronological feed of my posts about software development and data science."},{property:"og:description",name:"og:description",content:"A cronological feed of my posts about software development and data science."},{property:"twitter:description",name:"twitter:description",content:"A cronological feed of my posts about software development and data science."},{property:"keywords",name:"keywords",content:"python, kedro, datascience, bash, command line, javascript, gatsby"},{property:"twitter:image",name:"twitter:image",content:"https://waylonwalker.com/waylon-walker.png"}]}),o.a.createElement(m,null,o.a.createElement("h1",null,"Notes"),o.a.createElement("p",null,"These are less developed ideas of larger topics that may eventually lead to a fully fledged blog post. This gives me a dumping ground to put ideas and continually develop them."),o.a.createElement(s.a,{posts:e})))},t}(o.a.Component)},al08:function(e,t,n){"use strict";var a=n("kD0k"),r=n.n(a),o=(n("ls82"),n("/S4K")),i=n("9Hrx"),l=n("q1tI"),s=n.n(l),c=n("vOnD"),m=n("8o2o"),d=n("Wbzz"),g=n("9eSz"),p=n.n(g),u=n("vvhN"),f=c.a.div.withConfig({displayName:"blogPostCard__BlogPostCardStyles",componentId:"dritxx-0"})(["transition:width 250ms ease-in-out,color 1000ms linear,transform 1000ms linear;}background:",";background:#3E3846;background:linear-gradient(81deg,rgba(40,44,52,1) 0%,#3E3846 100%);color:white;overflow:hidden;display:block;margin:.2rem;width:calc(min(500px,95vw));margin:2rem;border-radius:2px;box-shadow:-8rem -6rem 8rem -6rem rgba(253,221,88,.2),4rem 0 8rem rgba(88,82,185,.3),.2rem .2rem 1rem rgba(0,0,0,.2);overflow:hidden;img{width:95%;}h3{color:rgba(255,255,255,.8);color:hsla(244,60%,70%,.7);font-size:1.75rem;text-align:center;transform:rotate(-1deg);}.year{font-size:5rem;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:900;color:rgba(108,99,253,.1);text-align:center;transform:rotate(.6deg);}.month{font-size:2rem;font-family:sans-serif;font-weight:700;color:rgba(0,0,0,.5);color:rgba(255,255,255,.6);color:rgba(108,99,253,.6);text-align:center;transform:rotate(2deg);}.date{margin:0rem auto;padding:3rem 2rem 2rem;}.bottom{width:100%;min-height:6rem;position:relative;background:linear-gradient(97deg,#2A2D34 0%,#3C3745 100%);z-index:99;}p{transform:rotate(-.7deg);}"],u.a.greys[1]),h=function(e){var t,n=e.post,a=(Object(m.a)(e,["post"]),new Date(n.frontmatter.date)),r=a.getUTCFullYear(),o=a.toLocaleString("en-us",{month:"long"}),i=a.getDate(),l=n.frontmatter.cover,c=void 0;if(null!==(null==l?void 0:l.med_img)&&void 0!==(null==l?void 0:l.med_img))c=null===(t=l.med_img)||void 0===t?void 0:t.fixed;else if(null!==(null==l?void 0:l.childImageSharp)&&void 0!==(null==l?void 0:l.childImageSharp)){var g;c=null===(g=l.childImageSharp)||void 0===g?void 0:g.fixed}return s.a.createElement(f,null,s.a.createElement(d.Link,{to:n.fields.slug,"aria-label":n.frontmatter.title+" cover image",title:""+n.frontmatter.title},void 0===c?"":s.a.createElement(p.a,{fixed:c,alt:"this is the cover"})),s.a.createElement("div",{className:"date"},s.a.createElement(d.Link,{to:n.fields.slug,"aria-label":n.frontmatter.title+" cover image",title:""+n.frontmatter.title},s.a.createElement("div",{className:"year"},r),s.a.createElement("div",{className:"month"},o," ",i))),s.a.createElement(d.Link,{to:n.fields.slug,"aria-label":n.frontmatter.title+" cover image",title:""+n.frontmatter.title},s.a.createElement("h3",{id:n.frontmatter.title},n.frontmatter.title)),s.a.createElement("div",{className:"bottom"},s.a.createElement("p",null,n.frontmatter.description)))},w=n("2O3R"),y=n("YGJC"),v=c.a.div.withConfig({displayName:"BlogPosts__BlogPostsStyle",componentId:"sc-1kpsl3g-0"})(["display:flex;margin:auto;flex-direction:column;justify-content:flex-start;align-items:center;align-content:center;justify-self:center;min-height:100vh;width:calc(min(800px,90vw));input{margin-left:1rem;}img{margin:auto;}.post-cards{display:flex;flex-wrap:wrap;justify-content:center;}.post-wrapper:{display:inline-flex;}.robots{display:None;opacity:0;visibility:hidden;}"]),b=function(e){function t(t){var n;return(n=e.call(this,t)||this).componentDidMount=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.addEventListener("scroll",n.handleScroll),t=new URL(window.location.href),null!==(a=t.searchParams.get("search"))&&(n.setState({search:a},(function(){return n.SearchWithFuse()})),document.getElementById("blog").scrollIntoView());case 4:case"end":return e.stop()}}),e)}))),n.fuseSortFn=function(e,t){return e.score=t.score},n.incrementMaxEntries=function(){n.setState({numPosts:n.state.numPosts+n.state.incrementBy})},n.handleScroll=function(){var e="innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight,t=document.body,a=document.documentElement,r=Math.max(t.scrollHeight,t.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight)-n.state.incrementOffset;e+window.pageYOffset>=r&&n.incrementMaxEntries()},n.setSearch=function(e){return n.setState({search:e},(function(){return n.SearchWithFuse()}))},n.SearchWithFuse=function(){var e=new y.a(n.state.posts,{ignoreLocation:!0,ignoreFieldNorm:!0,ingludeScore:!0,threshold:.4,sortFn:n.fuseSortFn,keys:["node.plainText",{name:"node.frontmatter.tags",weight:1.2},{name:"node.frontmatter.title",weight:1.5}],useExtendedSearch:!0});""===n.state.search?n.setState({filteredPosts:n.state.posts}):(n.setState({filteredPosts:e.search(n.state.search).map((function(e){return e.item}))}),window.history.pushState({},null,"?search="+n.state.search))},n.state={posts:t.posts,filteredPosts:t.posts,search:"",numPosts:3,incrementBy:9,incrementOffset:2e3},n}return Object(i.a)(t,e),t.prototype.render=function(){var e=this;return s.a.createElement(v,null,s.a.createElement("form",{action:""},s.a.createElement("label",{htmlFor:"search"},"Search:",s.a.createElement("input",{type:"text","aria-label":"search",name:"search",value:this.state.search,id:"search",onChange:function(t){return e.setSearch(t.target.value)}}))),s.a.createElement(w.a,{className:"post-cards"},this.state.filteredPosts.slice(0,this.state.numPosts).map((function(e,t){var n=!0;try{n="draft"!==e.node.frontmatter.status.toLowerCase()}catch(a){}return!(!e||!n)&&s.a.createElement("div",{key:e.node.id,className:"post-wrapper",style:{display:"inline-flex"}},s.a.createElement(h,{key:e.node.id,post:e.node}))})),s.a.createElement("div",{className:"robots"},this.state.posts.map((function(e,t){return s.a.createElement("li",{key:e.node.id},s.a.createElement("h3",{id:e.node.frontmatter.title+"-robot"},e.node.frontmatter.title),s.a.createElement("div",{className:"description"},e.node.frontmatter.description),null===e.node.fields.slug?"":s.a.createElement("a",{href:e.node.fields.slug,title:e.node.frontmatter.title},e.node.frontmatter.title))})))))},t}(l.Component);t.a=b}}]);
//# sourceMappingURL=component---src-pages-notes-js-acc6080f633e1dcb296b.js.map