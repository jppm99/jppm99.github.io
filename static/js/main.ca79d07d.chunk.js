(this["webpackJsonpjppm99.github.io"]=this["webpackJsonpjppm99.github.io"]||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n(1),i=n.n(a),c=n(13),l=n.n(c),r=(n(22),n(8)),o=n(9);var d=function(){const[e,t]=Object(a.useState)(!1),[n,i]=Object(a.useState)("Home"),c=(e,t)=>{let a="";return n===e&&(a="active-underline"),Object(s.jsx)(o.HashLink,{to:t,scroll:e=>(e=>{let t="Home"===e.id?-1e3:document.getElementById("Navbar").clientHeight;const n=e.offsetTop-t;window.scroll({top:n,left:0,behavior:"smooth"})})(e),className:"navbar-button text-light text-decoration-none row",children:Object(s.jsx)("span",{className:a,children:e})})};return Object(a.useEffect)((()=>{window.addEventListener("scroll",(()=>{t(window.scrollY>=window.innerHeight+1e3-document.getElementById("Navbar").clientHeight),(()=>{let e=document.getElementById("body");if(e){let t=window.scrollY+window.innerHeight/2,n=0;for(let s of e.children){let e=n,a=n+=s.clientHeight;if(e<t&&a>t){let e=s.children.item(0).id;e||(e="Home"),i(e);break}}}})()}))}),[]),Object(s.jsx)("nav",{className:"navbar navbar-expand-md fixed-top"+(e?" navbar-scrolled":""),id:"Navbar",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(o.HashLink,{smooth:!0,to:"/#Home",className:"logo text-decoration-none",children:Object(s.jsx)("h1",{className:"logo-size",children:Object(s.jsx)("span",{className:"font-weight-bold",children:"Mota"})})}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(s.jsxs)("ul",{className:"navbar-items navbar-nav justify-content-end w-100",children:[Object(s.jsx)("li",{className:"nav-item ml-sm-5",children:c("Home","/#Home")}),Object(s.jsx)("li",{className:"nav-item ml-sm-5",children:c("Skills","/#Skills")}),Object(s.jsx)("li",{className:"nav-item ml-sm-5",children:c("Projects","/#Projects")}),Object(s.jsx)("li",{className:"nav-item ml-sm-5",children:c("CV","/#CV")}),Object(s.jsx)("li",{className:"nav-item ml-sm-5",children:c("Contact","/#Contact")})]})})]})})},m=n(16),j=n(0),u=n(5),b=n(15);Object(b.ScrollMagicPluginGsap)(u,m.a,j.e);class h extends a.Component{constructor(e){super(e),this.controller=void 0,this.scroll_len=1e3,this.title="Hi!",this.sub_title="Nice to meet you",this.text="\n        Lorem ipsum lacus sit amet lorem placerat congue. \n        Proin venenatis justo id gravida sollicitudin. Morbi eu tincidunt eros. \n        Vestibulum interdum augue a purus semper congue. \n        Aenean non nunc elementum magna ullamcorper rutrum ut id mauris. \n        Maecenas pretium magna placerat odio ornare, ac consectetur augue pellentesque. \n        Aliquam pulvinar condimentum sollicitudin. \n        Morbi pretium ac mi non ornare. Duis eu bibendum urna.\n    ",this.controller=new u.Controller,this.state={sub_title:"_",text:""}}componentDidMount(){let e=document.querySelector(".home-background"),t=(new j.e).fromTo("#Home",1,{opacity:"1"},{opacity:"0",ease:j.c.easeIn}),n=(new j.e).fromTo("#Home",1,{x:"15%"},{x:"-5%",ease:j.a.easeOut});new u.Scene({duration:this.scroll_len,triggerElement:e,triggerHook:0}).setPin(e).setTween(n).addTo(this.controller),new u.Scene({duration:e.clientHeight/3,triggerElement:document.getElementById("Skills"),triggerHook:"onEnter"}).setTween(t).addTo(this.controller),window.addEventListener("scroll",(()=>{let e=this.scroll_len/4;window.scrollY>=e?(this.setState({sub_title:this.sub_title}),window.scrollY>=2*e?this.setState({text:this.text}):this.setState({text:"_"})):(this.setState({sub_title:"_"}),this.setState({text:""}))}))}render(){return Object(s.jsx)("div",{className:"Home container",id:"Home",children:Object(s.jsx)("div",{className:"d-flex align-items-center justify-content-start",children:Object(s.jsxs)("div",{className:"flex-column",children:[Object(s.jsx)("span",{className:"home-title px-2",children:this.title}),Object(s.jsx)("span",{className:"home-subtitle px-2"+("_"===this.state.sub_title?" animate":""),children:this.state.sub_title}),Object(s.jsx)("p",{className:"home-text px-3"+("_"===this.state.text?" animate":""),children:this.state.text})]})})})}}var x=h,g=n.p+"static/media/work-in-progress.e61988d1.png";class p extends a.Component{render(){return Object(s.jsx)("div",{className:"skills-background",children:Object(s.jsx)("div",{className:"Skills container d-flex align-items-center justify-content-center",id:"Skills",children:Object(s.jsx)("img",{className:"wip my-5",src:g,alt:"skills"})})})}}var v=p;class O extends a.Component{render(){return Object(s.jsx)("div",{className:"projects-background",children:Object(s.jsx)("div",{className:"Projects container d-flex align-items-center justify-content-center",id:"Projects",children:Object(s.jsx)("img",{className:"wip my-5",src:g,alt:"projects"})})})}}var N=O;class w extends a.Component{render(){return Object(s.jsx)("div",{className:"cv-background",children:Object(s.jsx)("div",{className:"CV container d-flex align-items-center justify-content-center",id:"CV",children:Object(s.jsx)("img",{className:"wip my-5",src:g,alt:"cv"})})})}}var f=w;class y extends a.Component{render(){return Object(s.jsx)("div",{className:"contact-background",children:Object(s.jsx)("div",{className:"Contact container d-flex align-items-center justify-content-center",id:"Contact",children:Object(s.jsx)("img",{className:"wip my-5",src:g,alt:"contact"})})})}}var H=y;n(28);var k=function(){return Object(s.jsx)(r.HashRouter,{children:Object(s.jsxs)("div",{id:"body",children:[Object(s.jsxs)("div",{className:"home-background",children:[Object(s.jsx)(d,{}),Object(s.jsx)(x,{})]}),Object(s.jsx)(v,{}),Object(s.jsx)(N,{}),Object(s.jsx)(f,{}),Object(s.jsx)(H,{})]})})};var S=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((({getCLS:t,getFID:n,getFCP:s,getLCP:a,getTTFB:i})=>{t(e),n(e),s(e),a(e),i(e)}))};l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),S()}},[[29,1,2]]]);
//# sourceMappingURL=main.ca79d07d.chunk.js.map