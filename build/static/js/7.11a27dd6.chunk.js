(this["webpackJsonpreact-elegant-smooth-website"]=this["webpackJsonpreact-elegant-smooth-website"]||[]).push([[7],{248:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(246),r=n(2),i=n.n(r),l=a.default.span.withConfig({displayName:"marginer__HorizontalMargin",componentId:"swbs3h-0"})(["display:flex;width:",";"],(function(e){var t=e.margin;return"string"===typeof t?t:"".concat(t,"px")})),c=a.default.span.withConfig({displayName:"marginer__VerticalMargin",componentId:"swbs3h-1"})(["display:flex;height:",";"],(function(e){var t=e.margin;return"string"===typeof t?t:"".concat(t,"px")}));function o(e){return"horizontal"===e.direction?i.a.createElement(l,e):i.a.createElement(c,e)}o.defaultProps={direction:"horizontal"}},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={primary:"#000000"}},258:function(e,t,n){e.exports=n.p+"static/media/logo.8e010928.svg"},259:function(e,t,n){},262:function(e,t,n){},264:function(e,t,n){},266:function(e,t,n){"use strict";var a=n(255),r=n(247),i=n(2),l=n.n(i),c=n(246),o=n(248),s=n(249);n(250),n(264);function m(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: row ;\n  margin-left: auto;\n  margin-right:auto;\n  align-items: center;\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: ",";\n    position: fixed;\n    transform: ",";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n    box-shadow: 0px 0px 21px -8px rgba(0,0,0,0.75);\n  }\n"]);return m=function(){return e},e}var u=c.default.ul(m(),(function(e){return e.changethecolor?"#1a202c":"#ffffff"}),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),f=function(e){var t=e.open,n=e.changethecolor,a=function(){s.scroller.scrollTo("home",{smooth:!0,duration:600})},r=function(){s.scroller.scrollTo("services",{smooth:!0,duration:600})},i=function(){s.scroller.scrollTo("contact",{smooth:!0,duration:600})},c=function(){s.scroller.scrollTo("about",{smooth:!0,duration:600})};return n?l.a.createElement(u,{open:t,changethecolor:n,className:"ml-auto"},l.a.createElement(o.a,{direction:"horizontal",margin:"8em"}),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ml-3 text-white",activeClassName:"active",href:"/#home",onClick:a},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ml-3 text-white",activeClassName:"active",href:"/#services",onClick:r},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ml-3 text-white",activeClassName:"active",href:"/#about",onClick:c},"About Us")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ml-3 text-white",activeClassName:"active",href:"/crew"},"Team")),l.a.createElement("li",{className:"nav-item"}),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ml-3 text-white",activeClassName:"active",href:"/#contact",onClick:i},"Contact Us")),l.a.createElement(o.a,{direction:"horizontal",margin:"8em"})):l.a.createElement(u,{open:t,changethecolor:n,className:"ml-auto"},l.a.createElement(o.a,{direction:"horizontal",margin:"8em"}),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ml-3 text-black",activeClassName:"active",href:"/#home",onClick:a},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ml-3 text-black",activeClassName:"active",href:"/#services",onClick:r},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ml-3 text-black",activeClassName:"active",href:"/#about",onClick:c},"About Us")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ml-3 text-black",activeClassName:"active",href:"/crew"},"Team")),l.a.createElement("li",{className:"nav-item"}),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link ml-3 text-black",activeClassName:"active",href:"/#contact",onClick:i},"Contact Us")),l.a.createElement(o.a,{direction:"horizontal",margin:"8em"}))};function d(){var e=Object(r.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return d=function(){return e},e}var h=c.default.div(d(),(function(e){e.open;return"#ccc"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),p=function(e){var t=Object(i.useState)(!1),n=Object(a.a)(t,2),r=n[0],c=n[1],o=e.changethecolor;return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{open:r,onClick:function(){return c(!r)}},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement(f,{open:r,changethecolor:o}))};function g(){var e=Object(r.a)(["\n  margin-top: ",";\n  font-size: ",";\n  color: ",";\n  font-weight: 500;\n  font-family: 'Rubik', sans-serif;\n  \n"]);return g=function(){return e},e}function v(){var e=Object(r.a)(["\n  margin-top: ",";\n  font-size: ",";\n  color: ",";\n  font-weight: 500;\n  font-family: 'Rubik', sans-serif;\n  \n"]);return v=function(){return e},e}function E(){var e=Object(r.a)(["\n      width: 4.8em;\n      height: 4.8em;\n    "]);return E=function(){return e},e}function b(){var e=Object(r.a)(["\n      width: 54px;\n      height: 54px;\n      margin-right: 16px;\n    "]);return b=function(){return e},e}function x(){var e=Object(r.a)(["\n  width: 18em;\n  height: 18em;\n  ",";\n\n  ",";\n"]);return x=function(){return e},e}function w(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: ",";\n  margin-left: auto;\n  margin-right:auto;\n  align-items: center;\n  margin-top: 10px;\n"]);return w=function(){return e},e}var k=c.default.div(w(),(function(e){return e.inline?"row":"column"})),y=(c.default.img(x(),(function(e){return e.inline&&Object(c.css)(b())}),(function(e){return e.small&&Object(c.css)(E())})),c.default.div(v(),(function(e){return e.inline?5:"6px"}),(function(e){var t=e.inline,n=e.small;return t?"20px":n?"23px":"40px"}),(function(e){return e.changethecolor?"#460c5e":"#fff"}))),N=c.default.div(g(),(function(e){return e.inline?5:"6px"}),(function(e){var t=e.inline,n=e.small;return t?"20px":n?"23px":"40px"}),(function(e){return e.changethecolor?"#DD038F":"#fff"}));function C(e){var t=e.inline,n=e.changethecolor,a=e.small;return console.log(n),l.a.createElement(k,{inline:t,changethecolor:n,small:a,className:"ml-auto"},l.a.createElement(y,{inline:t,changethecolor:n,small:a},"HEXCODE"),l.a.createElement(N,{inline:t,changethecolor:n,small:a},"LABS"))}function O(){var e=Object(r.a)(["\n  width: 100%;\n  height: 5px;\n  display: flex;\n"]);return O=function(){return e},e}var j=c.default.nav(O());t.a=function(e){var t=e.beginColorBlack,n=l.a.useState(!1),r=Object(a.a)(n,2),c=r[0],o=r[1],s=l.a.useState(!1),m=Object(a.a)(s,2),u=m[0],f=m[1],d=function(){window.scrollY>100?(o(!0),f(!0)):(o(!1),f(!1))};Object(i.useEffect)((function(){window.addEventListener("scroll",d)}));var h,g=!1;return t&&(g=!0),h=c?"scrolled fixed-top navbar-expand-lg    ":"navbar fixed-top navbar-expand-lg   ",u||g?l.a.createElement(j,{className:"container-fluid"},l.a.createElement("div",{className:h},l.a.createElement(C,{inline:!0,changethecolor:!0}),l.a.createElement(p,null))):l.a.createElement(j,{className:"container-fluid"},l.a.createElement("div",{className:h},l.a.createElement(C,{inline:!0}),l.a.createElement(p,{changethecolor:!0})))}},267:function(e,t,n){"use strict";n.d(t,"a",(function(){return F}));var a=n(247),r=(n(257),n(2)),i=n.n(r),l=n(249),c=n(246),o=n(251);function s(){var e=Object(a.a)(["\n  padding: ",";\n  border-radius: 5px;\n  background-color: ",";\n  color: #fff;\n  font-weight: bold;\n  font-size: ",";\n  outline: none;\n  border: 2px solid transparent;\n  transition: all 220ms ease-in-out;\n  cursor: pointer;\n\n  &:hover {\n    background-color: transparent;\n    border: 2px solid ",";\n  }\n"]);return s=function(){return e},e}c.default.button(s(),(function(e){return e.small?"5px 8px":"7px 15px"}),o.a.primary,(function(e){return e.small?"12px":"16px"}),o.a.primary);var m=n(258),u=n.n(m);n(259);function f(){var e=Object(a.a)(["\n      width: 4.8em;\n      height: 4.8em;\n    "]);return f=function(){return e},e}function d(){var e=Object(a.a)(["\n      width: 24px;\n      height: 24px;\n      margin-right: 6px;\n    "]);return d=function(){return e},e}function h(){var e=Object(a.a)(["\n  width: 8em;\n  height: 8em;\n  ",";\n\n  ",";\n"]);return h=function(){return e},e}function p(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: ",";\n  align-items: center;\n"]);return p=function(){return e},e}var g=c.default.div(p(),(function(e){return e.inline?"row":"column"})),v=c.default.img(h(),(function(e){return e.inline&&Object(c.css)(d())}),(function(e){return e.small&&Object(c.css)(f())}));function E(e){var t=e.inline,n=e.small;return i.a.createElement(g,{inline:t,small:n},i.a.createElement(v,{src:u.a,inline:t,small:n}),i.a.createElement("h1",{className:"LogoText1"},"HEXCODE",i.a.createElement("span",null,i.a.createElement("h1",{className:"LogoText2"},"LABS"))))}var b=n(248),x=n(265),w=n(496),k=n(497);n(262),n(253),n(250);function y(){var e=Object(a.a)(["\n  bottom: 8px;\n  left: 50%;\n  color: #1a202c;\n  font-size: 12px;\n  margin-top:30px;\n  margin-bottom:20px;\n  font-family: 'FreeSans';\n"]);return y=function(){return e},e}function N(){var e=Object(a.a)(["\n  color: #fff;\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n  font-size: 14px;\n\n  &:not(:last-of-type) {\n    margin-right: 11px;\n\n    @media screen and (max-width: 480px) {\n      margin-right: 9px;\n    }\n  }\n\n  @media screen and (max-width: 480px) {\n    font-size: 12px;\n  }\n\n  &:hover {\n    color: #adadad;\n  }\n"]);return N=function(){return e},e}function C(){var e=Object(a.a)(["\n  color: #fff;\n  font-size: 20px;\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n\n  &:not(:last-of-type) {\n    margin-right: 11px;\n\n    @media screen and (max-width: 480px) {\n      margin-right: 9px;\n    }\n  }\n\n  @media screen and (max-width: 480px) {\n    font-size: 14px;\n  }\n\n  &:hover {\n    color: #adadad;\n  }\n"]);return C=function(){return e},e}function O(){var e=Object(a.a)(["\n  display: flex;\n"]);return O=function(){return e},e}function j(){var e=Object(a.a)(["\n  display: flex;\n"]);return j=function(){return e},e}function z(){var e=Object(a.a)(["\n  width: 80%;\n  display: flex;\n  border-top: 1px solid #cdcdcd;\n  padding-top: 12px;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #fff;\n  justify-content: space-between;\n\n  @media screen and (max-width: 480px) {\n    width: 90%;\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n"]);return z=function(){return e},e}function T(){var e=Object(a.a)(["\n  font-size: 25px;\n  font-weight: 500;\n  line-height: 1.4;\n  color: #fff;\n  margin: 0;\n"]);return T=function(){return e},e}function S(){var e=Object(a.a)(["\n  width: 100%;\n  min-height: 400px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #1f1f1f;\n  position: relative;\n"]);return S=function(){return e},e}c.default.div(S()),c.default.h1(T()),c.default.div(z()),c.default.div(j()),c.default.div(O()),c.default.div(C()),c.default.a(N()),c.default.div(y());function F(e){return i.a.createElement(l.Element,{id:"contact"},i.a.createElement("main",{name:"contact"},i.a.createElement("section",{className:"pb-20 relative block bg-gray-200"},i.a.createElement("div",{className:"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20",style:{transform:"translateZ(0)"}},i.a.createElement("svg",{className:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"},i.a.createElement("polygon",{className:"text-gray-200 fill-current",points:"2560 0 2560 100 0 100"}))),i.a.createElement("div",null,i.a.createElement(b.a,{direction:"vertical",margin:"5em"}),i.a.createElement(x.c,{className:"footerRowDiv",size:"fluid",id:"section_services"},i.a.createElement(w.a,{className:"footerRowElements"},i.a.createElement(b.a,{direction:"horizontal",margin:"2em"}),i.a.createElement("div",{className:"footerFirstCol"},i.a.createElement(k.a,null,i.a.createElement(E,{small:!0}),i.a.createElement(b.a,{direction:"vertical",margin:"1em"}),i.a.createElement("p",{className:"bottomTextLogo"}," Brings your imagination into reality."))),i.a.createElement(b.a,{direction:"horizontal",margin:"2em"}),i.a.createElement("div",{className:"footerFirstCol"},i.a.createElement(k.a,null,i.a.createElement(b.a,{direction:"vertical",margin:"1em"}),i.a.createElement("h1",{className:"navigateTo"},"Navigate to"),i.a.createElement(b.a,{direction:"vertical",margin:"1em"}),i.a.createElement("p",{className:"links"},i.a.createElement("a",{href:"/#home",onClick:function(){l.scroller.scrollTo("home",{smooth:!0,duration:800})}},"Home")," "),i.a.createElement("p",{className:"links"},i.a.createElement("a",{href:"/#services",onClick:function(){l.scroller.scrollTo("services",{smooth:!0,duration:800})}},"Services"),"   "),i.a.createElement("p",{className:"links"},i.a.createElement("a",{href:"/#about",onClick:function(){l.scroller.scrollTo("about",{smooth:!0,duration:800})}},"About Us"),"   "),i.a.createElement("p",{className:"links"},i.a.createElement("a",{href:"/crew"},"Our Crew"),"   "))),i.a.createElement(b.a,{direction:"horizontal",margin:"2em"}),i.a.createElement("div",{className:"footerFirstCol"},i.a.createElement(k.a,null,i.a.createElement(b.a,{direction:"vertical",margin:"1em"}),i.a.createElement("h1",{className:"navigateTo"},"Keep in touch"),i.a.createElement(b.a,{direction:"vertical",margin:"1em"}),i.a.createElement("p",null,i.a.createElement("a",{className:"links",href:"https://www.linkedin.com/company/hexcode-labs/"}," Linked In ")),i.a.createElement("p",null,i.a.createElement("a",{className:"links",href:"https://www.facebook.com/hexcode.labs"}," Facebook ")),i.a.createElement("p",null,i.a.createElement("a",{className:"links",href:"https://www.instagram.com/hexcode.labs/"}," Instagram ")))),i.a.createElement(b.a,{direction:"horizontal",margin:"2em"}),i.a.createElement("div",{className:"footerFirstCol"},i.a.createElement(k.a,null,i.a.createElement(b.a,{direction:"vertical",margin:"1em"}),i.a.createElement("h1",{className:"navigateTo"},"Contact Us"),i.a.createElement(b.a,{direction:"vertical",margin:"1em"}),i.a.createElement("p",{className:"links"},"Gmail : ",i.a.createElement("span",null,i.a.createElement("p",{className:"contacts"},"info@hexcodelabs.lk"))),i.a.createElement("p",{className:"links"},"Call us : ",i.a.createElement("span",null,i.a.createElement("p",{className:"contacts"},"Rashan - +94 (70) 398 3529"))))),i.a.createElement(b.a,{direction:"horizontal",margin:"2em"}))),i.a.createElement("div",{className:"flex flex-wrap items-center md:justify-between justify-center"},i.a.createElement("div",{className:"w-full md:w-4/12 px-4 mx-auto text-center"},i.a.createElement(b.a,{direction:"vertical",margin:"5em"}),i.a.createElement("div",{className:"text-sm text-gray-600 font-semibold py-1"},"\xa9 2020 Hexcode Labs All rights reserved.")))))))}},484:function(e,t,n){},498:function(e,t,n){"use strict";n.r(t),n.d(t,"OurBlogTitle1",(function(){return b})),n.d(t,"OurBlogTitle2",(function(){return x}));var a=n(42),r=n(43),i=n(62),l=n(61),c=n(247),o=n(2),s=n.n(o),m=n(246),u=n(266),f=n(267),d=(n(484),n(248)),h=(n(63),n(485),n(490));function p(){var e=Object(c.a)(["\n  z-index: 0;\n  position: absolute;\n  width: 100%;\n  height: auto;\n  padding: 0;\n  overflow:hidden;\n  "]);return p=function(){return e},e}function g(){var e=Object(c.a)(["\nfont-family: 'Rubik', sans-serif;\n    color: #DD038F;\n    font-size: 55px;\n    font-weight: bold;\n    display: inline-block;\n    @media screen and (max-width: 480px) {\n        text-align: center;\n    }\n"]);return g=function(){return e},e}function v(){var e=Object(c.a)(["\nfont-family: 'Rubik', sans-serif;\n    color: #460c5e;\n    font-size: 55px;\n    font-weight: bold;\n    display: inline-block;\n\n    @media screen and (max-width: 480px) {\n        text-align: center;\n    }\n"]);return v=function(){return e},e}var E=[{id:1,author:"Daria Shevtsova",tag:"Software",src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/2.jpg?raw=true",summary:"The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore."},{id:2,author:"Kasuma",tag:"Software",src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/3.jpg?raw=true",summary:"The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore."},{id:3,author:"Dominika Roseclay",tag:"Design",src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true",summary:"The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore."},{id:4,author:"Scott Webb",tag:"Design",src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true",summary:"The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore."},{id:5,author:"Jeffrey Czum",tag:"Electronics",src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/6.jpg?raw=true",summary:"The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore."},{id:6,author:"Dominika Roseclay",tag:"General",src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/7.jpg?raw=true",summary:"The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore."},{id:7,author:"Valeria Boltneva",tag:"Electronics",src:"https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true",summary:"The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore."}],b=m.default.h1(v()),x=m.default.h1(g()),w=[{name:"General",status:!1},{name:"Electronics",status:!1},{name:"Software",status:!1},{name:"Design",status:!1}],k=function(e){var t=e.onClickAll,n=e.all,a=e.onClick,r=e.filters;return s.a.createElement("form",null,s.a.createElement("ul",null,s.a.createElement("li",{onClick:t},s.a.createElement("input",{type:"checkbox",checked:n}),s.a.createElement("label",{htmlFor:"all"},"All")),r.map((function(e,t){return s.a.createElement("li",{key:t,"data-index":t,onClick:a},s.a.createElement("input",{className:"filterBox",id:e.name,type:"checkbox",checked:e.status}),s.a.createElement("label",{htmlFor:e.name},e.name))}))))},y=function(e){var t=e.imgs;e.preImgs;return s.a.createElement("ul",null,s.a.createElement(h.Stagger,{in:!0,className:"blogList",delay:50,chunk:300},t.map((function(e,t){return s.a.createElement(h.Fade,null,s.a.createElement("li",{key:t},s.a.createElement("a",{href:"https://www.facebook.com/hexodelabs"},s.a.createElement("figure",null,s.a.createElement("img",{className:"blog",src:e.src,alt:e.author}),s.a.createElement("figcaption",null,s.a.createElement("div",null,e.author," "),s.a.createElement("span",null,e.tag),s.a.createElement("div",{className:"Description"},e.summary))))))}))))},N=m.default.div(p()),C=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).setFilter=function(e){e.preventDefault();var t=r.state,n=t.filters,a=(t.all,e.currentTarget.dataset.index);n[a].status=!n[a].status,r.setState({filters:n}),r.updateFilters(),r.setState({imgs:[]}),setTimeout((function(){r.updateImgs()}),500)},r.setAll=function(){var e=r.state.filters;e.forEach((function(e){e.status=!1})),r.setState({all:!0,filters:e})},r.state={imgs:E,preImgs:[],filters:w,all:!0},r}return Object(r.a)(n,[{key:"updateFilters",value:function(){var e=w.every((function(e){return!0===e.status})),t=w.every((function(e){return!1===e.status}));e||t?this.setAll():this.setState({all:!1})}},{key:"updateImgs",value:function(){var e=this.state,t=e.filters,n=(e.all,[]),a=0;E.forEach((function(e,r){t.forEach((function(t,r){e.tag==t.name&&1==t.status&&(n[a]=e,a++)}))})),this.setState({imgs:n})}},{key:"render",value:function(){var e=this.state,t=e.filters,n=e.all;return s.a.createElement(N,null,s.a.createElement(u.a,{beginColorBlack:!0}),s.a.createElement(d.a,{direction:"vertical",margin:"8em"}),s.a.createElement(b,null,"Our ",s.a.createElement("span",null,s.a.createElement(x,null,"Blog"))),s.a.createElement(d.a,{direction:"vertical",margin:"2em"}),s.a.createElement(k,{onClickAll:this.setAll,all:n,onClick:this.setFilter,filters:t}),n?s.a.createElement(y,{imgs:E}):s.a.createElement(y,{imgs:this.state.imgs}),s.a.createElement(d.a,{direction:"vertical",margin:"8em"}),s.a.createElement(f.a,null))}}]),n}(s.a.Component);t.default=C}}]);
//# sourceMappingURL=7.11a27dd6.chunk.js.map