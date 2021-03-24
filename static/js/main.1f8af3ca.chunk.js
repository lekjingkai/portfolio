(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),a=i(16),s=i.n(a),r=(i(22),i.p,i(7)),o=i(2),l=i(0);var j=function(e){return Object(l.jsx)("div",{className:"project",children:Object(l.jsxs)(r.b,{to:e.link,children:[Object(l.jsx)("div",{className:"project-image",children:Object(l.jsx)("img",{src:e.image,alt:"Project Image"})}),Object(l.jsx)("div",{className:"project-title",children:e.title}),Object(l.jsx)("div",{className:"project-category",children:e.category})]})})},u=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Projects"}),Object(l.jsx)(j,{link:"/twitter",image:"http://twitter-image-url.jpg",title:"Twitter Newsfeed",category:"Mobile App"}),Object(l.jsx)(j,{link:"/articles",image:"http://airbnb-image-url.jpg>",title:"Airbnb Experiences",category:"Website"}),Object(l.jsx)(j,{link:"/photoshop",image:"http://photoshop-image-url.jpg",title:"Photoshop Redesign",category:"Desktop App"})]})},d=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Articles"})})},b=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"About"})})},h=i(14),m=(i(29),function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),i=t[0],n=t[1],a=Object(c.useState)(!1),s=Object(h.a)(a,2),r=s[0],o=s[1],j=function(){o((function(e){return!e}))};return window.addEventListener("scroll",(function(){window.scrollY>=80?n(!0):n(!1)})),Object(l.jsx)("nav",{className:"navbar ".concat(i?"sticky":""," ").concat(r?"show":""),children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("a",{href:"#",children:"JingKai"})}),Object(l.jsxs)("ul",{className:"menu-list",children:[Object(l.jsx)("div",{className:"icon cancel-btn",onClick:j,children:Object(l.jsx)("i",{className:"fa fa-times"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Services"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Features"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#",children:"Contact"})})]}),Object(l.jsx)("div",{className:"icon menu-btn",onClick:j,children:Object(l.jsx)("i",{className:"fa fa-bars"})})]})})}),x=(i(30),function(e){var t=e.headerText,i=e.text,c=e.margintopVal;return Object(l.jsxs)("div",{className:"textContainer",style:{marginTop:c},children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:i})]})});x.defaultProps={headerText:"Placeholder header",text:"Placeholder text"};var p=x,O=(i(31),i(32),function(e){return Object(l.jsxs)("div",{className:"contentContainer",children:[Object(l.jsx)("h1",{className:"contentTitle",children:e.title}),e.children]})}),g=(i(33),function(e){return Object(l.jsx)("div",{className:"bgSection",style:{height:e.bgHeight,backgroundColor:e.bgColor},children:e.children})});g.defaultProps={bgColor:"#FFFFFF"};var f=g,v=(i.p,i(34),i(35),function(){return Object(l.jsxs)("div",{className:"headerContainer",children:[Object(l.jsx)("p",{className:"headerText",children:"Hello! My name is"}),Object(l.jsx)("h1",{className:"headerText headerName",children:"Lek Jing Kai"}),Object(l.jsx)("h1",{className:"headerText headerDesc",children:"Aspiring front-end developer"}),Object(l.jsx)("p",{className:"headerText",children:"I have a passion to code aesthetically"})]})}),N=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Thanks for viewing my portfolio!"}),Object(l.jsx)("p",{children:"Built by me 2021"}),Object(l.jsx)("p",{children:"Made with React"})]})};var q=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(m,{}),Object(l.jsx)(f,{bgHeight:"937px",bgColor:"orange",children:Object(l.jsx)(v,{})}),Object(l.jsx)(f,{bgColor:"#151515",children:Object(l.jsx)(p,{headerText:"Hello, I'm Jing Kai, nice to meet you.",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"})}),Object(l.jsx)(f,{bgColor:"cyan",children:Object(l.jsx)(O,{title:"Skills"})}),Object(l.jsx)(f,{bgColor:"cyan",children:Object(l.jsx)(O,{title:"My Projects"})}),Object(l.jsx)(o.a,{exact:!0,path:"/portfolio",component:u}),Object(l.jsx)(o.a,{path:"/articles",component:d}),Object(l.jsx)(o.a,{path:"/about",component:b}),Object(l.jsx)(r.b,{to:"/",className:"item",children:"Projects"}),Object(l.jsx)(r.b,{to:"/articles",className:"item",children:"Articles"}),Object(l.jsx)(r.b,{to:"/about",className:"item",children:"About"}),Object(l.jsx)(N,{})]})})},y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,37)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;i(e),c(e),n(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(q,{})}),document.getElementById("root")),y()}},[[36,1,2]]]);
//# sourceMappingURL=main.1f8af3ca.chunk.js.map