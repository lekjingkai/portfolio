(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,function(e,t,n){var c={"./css-icon.png":19,"./html-icon.png":20,"./javascript-icon.png":21,"./momentum-clone.png":22,"./react-icon.png":23,"./rest-api-icon-white.png":24,"./rest-api-icon.png":25,"./travel-picture.jpg":26};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}i.keys=function(){return Object.keys(c)},i.resolve=a,e.exports=i,i.id=4},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/css-icon.6f0c0d3f.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/html-icon.fa7153f2.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/javascript-icon.bac5496c.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/momentum-clone.75318913.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/react-icon.80045de7.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/rest-api-icon-white.7b3ee7f2.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/rest-api-icon.f903e525.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/travel-picture.41092b6b.jpg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(5),s=n.n(a),r=(n(10),n(2)),o=(n(11),n(0)),l=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),s=Object(r.a)(a,2),l=s[0],j=s[1],d=function(){j((function(e){return!e}))},b=function(){window.scrollTo({top:0,behavior:"smooth"})};return window.addEventListener("scroll",(function(){window.scrollY>=80?i(!0):i(!1)})),Object(o.jsxs)("div",{children:[Object(o.jsx)("nav",{className:"navbar ".concat(n?"sticky":""," ").concat(l?"show":""),children:Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("div",{className:"logoTitle",onClick:b,children:"JK"}),Object(o.jsxs)("ul",{className:"menu-list",children:[Object(o.jsx)("div",{className:"icon cancel-btn",onClick:d,children:Object(o.jsx)("i",{className:"fa fa-times"})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"https://www.linkedin.com/in/jing-kai-lek-a67ba91bb/",target:"_blank",rel:"noreferrer",children:[Object(o.jsx)("i",{className:"fa fa-linkedin","aria-hidden":"true"}),"My LinkedIn"]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"mailto:lekjingkai@gmail.com",children:[Object(o.jsx)("i",{className:"fa fa-envelope","aria-hidden":"true"}),"Email Me"]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"https://github.com/lekjingkai",target:"_blank",rel:"noreferrer",children:[Object(o.jsx)("i",{className:"fa fa-github","aria-hidden":"true"}),"My Github"]})})]}),Object(o.jsx)("div",{className:"icon menu-btn",onClick:d,children:Object(o.jsx)("i",{className:"fa fa-bars"})})]})}),Object(o.jsx)("button",{disabled:!n,onClick:b,className:"scroll-to-top-btn ".concat(n?"scroll-to-top-btn-show":""),children:Object(o.jsx)("i",{className:"fa fa-arrow-up","aria-hidden":"true"})})]})},j=(n(13),function(e){return Object(o.jsxs)("div",{className:"contentContainer",children:[Object(o.jsx)("h1",{className:"contentTitle",children:e.title}),e.children]})}),d=(n(14),function(e){return Object(o.jsx)("div",{className:"bgSection",style:{height:e.bgHeight,backgroundColor:e.bgColor,minHeight:e.minBgHeight},children:e.children})});d.defaultProps={bgColor:"#FFFFFF"};var b=d,u=(n(15),n(16),function(){return Object(o.jsxs)("div",{className:"headerContainer",children:[Object(o.jsx)("div",{className:"box",children:Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("span",{className:"block"}),Object(o.jsxs)("h2",{children:["LEK JING KAI",Object(o.jsx)("span",{})]})]})}),Object(o.jsx)("h1",{className:"headerDesc",children:"Front-end developer"}),Object(o.jsx)("p",{className:"headerText",children:"Hello there! I'm an aspiring front-end developer who wants to provide high-impact modern web applications. Passionate about learning new things to increase the quality of my web applications."})]})}),h=(n(17),function(e){return Object(o.jsxs)("div",{className:"btn hvr-grow",children:[Object(o.jsx)("img",{src:e.btnLogoImage,alt:e.btnName,className:"btnLogos"}),e.btnName]})}),f=(n(18),function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),i=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("./data/data.json").then((function(e){return e.json()})).then((function(e){a(e.skills)})).catch((function(e){console.log("Error Reading data "+e)}))}),[]),Object(o.jsx)("div",{className:"skillContainer",children:i&&i.length>0?i.map((function(e){return Object(o.jsx)(h,{btnLogoImage:n(4)("./".concat(e.image)).default,btnName:e.name},e.id)})):Object(o.jsx)("p",{children:"No skills to show!"})})}),m=(n(27),function(e){return Object(o.jsx)("div",{target:"_blank",rel:"noreferrer",className:"cardContainer",children:Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"card-image",children:[Object(o.jsx)("div",{className:"card-background-img",style:{backgroundImage:"url(".concat(e.imageSrc,")")}}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("h2",{className:"card-title",children:e.projTitle})}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"card-text",children:Object(o.jsx)("p",{children:e.projDesc})}),Object(o.jsxs)("div",{className:"card-links",children:[Object(o.jsxs)("a",{href:e.projectLink,target:"_blank",rel:"noreferrer",className:"iconButton",children:["Website",Object(o.jsx)("i",{class:"fa fa-external-link-square","aria-hidden":"true"})]}),Object(o.jsxs)("a",{href:e.githubLink,target:"_blank",rel:"noreferrer",className:"iconButton",children:["Github",Object(o.jsx)("i",{className:"fa fa-github","aria-hidden":"true"})]})]})]})]})]})})})}),O=(n(28),function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),i=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("./data/data.json").then((function(e){return e.json()})).then((function(e){a(e.projects)})).catch((function(e){console.log("Error Reading data "+e)}))}),[]),Object(o.jsx)("div",{className:"projectContainer",children:i&&i.length>0?i.map((function(e){return Object(o.jsx)(m,{githubLink:e.github,projectLink:e.link,imageSrc:n(4)("./".concat(e.image)).default,projTitle:e.name,projDesc:e.description},e.id)})):Object(o.jsx)("p",{children:"No projects to show!"})})}),p=(n(29),function(){return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("p",{children:"Thanks for viewing my portfolio!"}),Object(o.jsx)("p",{children:"Made with React"})]})});n(30);function g(e){return e?e<600?"mobile":"normal":void 0}var x=function(){var e="object"===typeof window,t=Object(c.useState)(e?g(window.innerWidth):void 0),n=Object(r.a)(t,2),i=n[0],a=n[1];return Object(c.useEffect)((function(){function t(){a(g(window.innerWidth))}if(e)return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[e,a]),i};var v=function(){var e=x(),t=Object(c.useState)("calc(100vh - 100px)"),n=Object(r.a)(t,2),i=n[0],a=n[1];return Object(c.useEffect)((function(){a("mobile"===e?"300px":"calc(100vh - 100px)")}),[e]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{bgColor:"#182225",bgHeight:"100px",children:Object(o.jsx)(l,{})}),Object(o.jsx)(b,{bgHeight:i,bgColor:"#182225",children:Object(o.jsx)(u,{})}),Object(o.jsx)(b,{bgColor:"#182225",children:Object(o.jsx)(j,{title:"Skills",children:Object(o.jsx)(f,{})})}),Object(o.jsx)(b,{bgColor:"#182225",children:Object(o.jsx)(j,{title:"My Projects",children:Object(o.jsx)(O,{})})}),Object(o.jsx)(p,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),N()}],[[31,1,2]]]);
//# sourceMappingURL=main.d9cca34a.chunk.js.map