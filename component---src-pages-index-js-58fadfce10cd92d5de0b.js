(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{KE4F:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("vOnD"),i=r("b9pq"),l=r("5hye");var c=a.b.header.withConfig({displayName:"ContentHeader__Header",componentId:"sc-1iwz16t-0"})(["margin-bottom:2rem;color:",";"],l.a.textLight),m=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.date,r=e.tags;return o.a.createElement(c,null,t&&o.a.createElement("time",null,t),Array.isArray(r)&&r.length>0&&o.a.createElement(n.Fragment,null,o.a.createElement("span",null," in"),o.a.createElement(i.a,{tags:r})))},a}(o.a.Component),d=a.b.div.withConfig({displayName:"Content__ContentBody",componentId:"lroi0l-0"})(["line-height:1.6;& > h2{padding-top:3rem;margin-top:3rem;border-top:1px solid #ececec;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{border-bottom:1px solid rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}&.anchor,&.gatsby-resp-image-link{border:none;}}& > blockquote{box-sizing:border-box;margin:1.75em 0 1.75em -2.2em;padding:0 0 0 1.75em;border-left:0.4em solid rgba(32,35,42,0.85);}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em 0em 1.5em 0;}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight-code-line{background-color:",";display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:0.75em;border-left:0.25em solid ",";}& p > code.language-text,& li > code.language-text{background:",";color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;}& table{margin-top:1em;border-collapse:collapse;border-radius:0.5em;overflow:hidden;& th,& td{padding:0.5em;background:#e8e8e8;border-bottom:2px solid ",";}}"],l.a.highlight_code_linebg,l.a.highlight_code_bg,l.a.highlight_code_oneline,l.a.white);t.a=function(e){var t=e.content,r=e.date,n=e.tags;return o.a.createElement("section",null,(n||r)&&o.a.createElement(m,{date:r,tags:n}),o.a.createElement(d,{dangerouslySetInnerHTML:{__html:t}}))}},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return m}));var n=r("q1tI"),o=r.n(n),a=r("vOnD"),i=r("Bl7J"),l=r("KE4F"),c=r("EYWl");a.b.h1.withConfig({displayName:"pages__MainTitle",componentId:"sc-1ghmhtz-0"})(["line-height:1.5;text-align:center;font-size:3rem;"]);t.default=function(e){var t=e.data.markdownRemark;return o.a.createElement(i.a,{location:e.location,noCover:!0},o.a.createElement(c.a,{title:t.frontmatter.title,description:t.excerpt,path:t.frontmatter.slug,cover:t.frontmatter.cover&&t.frontmatter.cover.publicURL}),o.a.createElement("article",null,o.a.createElement(l.a,{content:t.html,date:t.frontmatter.date})))};var m="991712508"},b9pq:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("Wbzz"),i=r("vOnD"),l=r("5hye");var c=i.b.div.withConfig({displayName:"TagList__ListContainer",componentId:"gxehxa-0"})(["display:inline;margin:0 0.5rem 0 0;color:",";"],l.a.textLight),m=Object(i.b)(a.Link).withConfig({displayName:"TagList__TagListItem",componentId:"gxehxa-1"})(["margin-left:0.3rem;color:",";&:hover{border-bottom:1px solid ",";}&:before{content:'#';}"],l.a.textLight,l.a.textLight),d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.tags,r=e.icon;return o.a.createElement(c,null,!0===r&&o.a.createElement(n.Fragment,null,"🏷 "),t.map((function(e,r){return o.a.createElement(n.Fragment,{key:"tag-list-"+r},o.a.createElement(m,{to:"/tags/"+e},e),r<t.length-1?", ":"")})))},a}(o.a.Component);t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-58fadfce10cd92d5de0b.js.map