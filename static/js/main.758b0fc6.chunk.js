(this["webpackJsonpjppm99.github.io"]=this["webpackJsonpjppm99.github.io"]||[]).push([[0],{35:function(e,t,s){},36:function(e,t,s){},60:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var n=s(2),l=s(1),a=s.n(l),i=s(25),c=s.n(i),o=(s(35),s(11)),r=(s(36),s(12)),d=s(27),h=s.n(d);s(60);var m=function(){const[e,t]=Object(l.useState)(!1),[s,a]=Object(l.useState)("Home"),i=(e,t)=>{let l="";return s===e&&(l="active-underline"),Object(n.jsx)(r.HashLink,{to:t,scroll:e=>(e=>{let t="Home"===e.id?-1e3:document.getElementById("Navbar").clientHeight;const s=e.offsetTop-t;window.scroll({top:s,left:0,behavior:"smooth"})})(e),className:"navbar-button text-light text-decoration-none row",children:Object(n.jsx)("span",{className:l,children:e})})};return Object(l.useEffect)((()=>{const e=()=>{t(window.scrollY>=window.innerHeight+1e3-document.getElementById("Navbar").clientHeight),(()=>{let e=document.getElementById("body");if(e){let t=window.scrollY+window.innerHeight/2,s=0;for(let n of e.children){let e=s,l=s+=n.clientHeight;if(e<t&&l>t){let e=n.children.item(0).id;e||(e="Home"),a(e);break}}}})()};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),Object(n.jsx)("nav",{className:"navbar navbar-expand-md fixed-top"+(e?" navbar-scrolled":""),id:"Navbar",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(r.HashLink,{smooth:!0,to:"/#Home",className:"logo text-decoration-none",children:Object(n.jsx)("h1",{className:"logo-size",children:Object(n.jsx)("span",{className:"font-weight-bold",children:"Mota"})})}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(n.jsxs)("ul",{className:"navbar-items navbar-nav justify-content-end w-100",children:[Object(n.jsx)("li",{className:"nav-item ml-sm-5",children:i("Home","/#Home")}),Object(n.jsx)("li",{className:"nav-item ml-sm-5",children:i("Skills","/#Skills")}),Object(n.jsx)("li",{className:"nav-item ml-sm-5",children:i("Projects","/#Projects")}),Object(n.jsx)("li",{className:"nav-item ml-sm-5",children:Object(n.jsx)("div",{className:"navbar-button text-light text-decoration-none row",id:"cv_btn",onClick:()=>{h.a.get("https://cors-anywhere.herokuapp.com/https://github.com/jppm99/CV/raw/master/joaoMotaResume.pdf",{responseType:"blob"}).then((e=>{var t;const s=new Blob([e.data],{type:"application/pdf"}),n=URL.createObjectURL(s);null===(t=window.open(n,"_blank"))||void 0===t||t.focus()})).catch((e=>{var t;console.log(e),null===(t=window.open("https://github.com/jppm99/CV/blob/master/joaoMotaResume.pdf","_blank"))||void 0===t||t.focus()}))},children:"Resum\xe9"})}),Object(n.jsx)("li",{className:"nav-item ml-sm-5",children:i("Contact","/#Contact")})]})})]})})},j=s(29),b=s(0),u=s(8),p=s(28);s(61);Object(p.ScrollMagicPluginGsap)(u,j.a,b.e);class x extends l.Component{constructor(e){super(e),this.controller=void 0,this.scroll_len=1e3,this.title="Hi!",this.sub_title="Nice to meet you",this.text="\n        My name is Jo\xe3o Mota, I am a 21-year-old software engineering student\n        passionate about software development and learning new things.\n        From a young age, I knew I wanted to be an inventor but it was\n        only in my 13s I realized, when I first built a computer, that \n        it means tech and engineering.\n        That passion for technology lead me to start coding in high school\n        and I am currently pursuing a Master's in software engineering\n        and looking for ways to sharpen and apply what I have learned.\n    ",this.controller=new u.Controller,this.state={sub_title:"_",text:""},this.onScroll=this.onScroll.bind(this)}onScroll(){let e=this.scroll_len/4;window.scrollY>=e?(this.setState({sub_title:this.sub_title}),window.scrollY>=2*e?this.setState({text:this.text}):this.setState({text:"_"})):(this.setState({sub_title:"_"}),this.setState({text:""}))}componentDidMount(){let e=document.querySelector(".home-background"),t=(new b.e).fromTo("#Home",1,{x:"15%"},{x:"-5%",ease:b.a.easeOut}),s=(new b.e).fromTo("#Home",1,{opacity:"1"},{opacity:"0",ease:b.c.easeIn});new u.Scene({duration:this.scroll_len,triggerElement:e,triggerHook:0}).setPin(e).setTween(t).addTo(this.controller),new u.Scene({duration:e.clientHeight/3,triggerElement:document.getElementById("Skills"),triggerHook:"onEnter"}).setTween(s).addTo(this.controller),window.addEventListener("scroll",this.onScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.onScroll)}render(){return Object(n.jsx)("div",{className:"Home container",id:"Home",children:Object(n.jsx)("div",{className:"d-flex align-items-center justify-content-start",children:Object(n.jsxs)("div",{className:"flex-column",children:[Object(n.jsx)("span",{className:"home-title px-2",children:this.title}),Object(n.jsx)("span",{className:"home-subtitle px-2"+("_"===this.state.sub_title?" animate":""),children:this.state.sub_title}),Object(n.jsx)("p",{className:"home-text px-3"+("_"===this.state.text?" animate":""),children:this.state.text})]})})})}}var v=x,g=s(65);s(62);class O extends l.Component{constructor(...e){super(...e),this.soft=[{id:"Team work",value:90},{id:"Desire to learn",value:100},{id:"Leadership",value:70},{id:"Persistence",value:90},{id:"Performing under pressure",value:100},{id:"Creativity",value:80}],this.technical=[{id:"Frontend development",value:73},{id:"Backend development",value:80},{id:"Code quality",value:90},{id:"Databases",value:55},{id:"Algorithms and data structures",value:80},{id:"Artificial intelligence",value:65}],this.comfortable_techs=["C","Java","Git","Google Cloud App Engine","Unity","Linux","JavaScript","HTML","Docker","SCSS"],this.other_techs=["TypeScript","React","NodeJS","C++","GLSL","Bootstrap","Python","PHP","Laravel","SQLite","Dart","Assembly","MongoDB","C#","OpenGL","Flutter","Prolog","Alloy","CSS","Scikit-learn","EJS","Dafny"]}render(){return Object(n.jsx)("div",{className:"skills-background py-5",children:Object(n.jsxs)("div",{className:"Skills container d-flex flex-column align-items-center justify-content-center py-5",id:"Skills",children:[Object(n.jsxs)("div",{className:"d-flex flex-row w-100",children:[Object(n.jsxs)("div",{className:"d-block w-100 pr-5",children:[Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("span",{className:"mr-2 accent",children:"Soft"}),Object(n.jsx)("span",{className:"ml-2",children:"Skills"})]}),this.soft.map(((e,t)=>Object(n.jsxs)("div",{className:"my-4",children:[Object(n.jsx)("h4",{children:e.id}),Object(n.jsx)(g.a,{now:e.value})]},t)))]}),Object(n.jsxs)("div",{className:"d-block w-100 pl-5",children:[Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("span",{className:"mr-2 accent",children:"Technical"}),Object(n.jsx)("span",{className:"ml-2",children:"Skills"})]}),this.technical.map(((e,t)=>Object(n.jsxs)("div",{className:"my-4",children:[Object(n.jsx)("h4",{children:e.id}),Object(n.jsx)(g.a,{now:e.value})]},t)))]})]}),Object(n.jsxs)("div",{className:"bottom text-center w-100",children:[Object(n.jsxs)("div",{className:"mt-5",children:[Object(n.jsxs)("h4",{children:["Even though I have ",Object(n.jsx)("strong",{children:"not found my niche yet"}),", here are some technologies ",Object(n.jsx)("strong",{children:"I feel comfortable with:"})]}),Object(n.jsx)("ul",{className:"list-group list-group-horizontal row d-flex justify-content-center confortable-list",children:this.comfortable_techs.map(((e,t)=>Object(n.jsx)("li",{className:"list-group-item",children:e},t)))})]}),Object(n.jsxs)("div",{className:"mt-5",children:[Object(n.jsxs)("h5",{children:["And a ",Object(n.jsx)("strong",{children:"not exhaustive list"})," of other technologies I have ",Object(n.jsx)("strong",{children:"used in the past:"})]}),Object(n.jsx)("ul",{className:"list-group list-group-horizontal row d-flex justify-content-center other-list",children:this.other_techs.map(((e,t)=>Object(n.jsx)("li",{className:"list-group-item",children:e},t)))})]})]})]})})}}var w=O;const f=a.a.lazy((()=>Promise.all([s.e(5),s.e(4)]).then(s.bind(null,71)))),N=a.a.lazy((()=>s.e(3).then(s.bind(null,69))));var y=function(){return console.warn("Hello fellow engineer"),Object(n.jsx)(o.HashRouter,{children:Object(n.jsxs)("div",{id:"body",children:[Object(n.jsxs)("div",{className:"home-background",children:[Object(n.jsx)(m,{}),Object(n.jsx)(v,{})]}),Object(n.jsx)(w,{}),Object(n.jsx)(a.a.Suspense,{fallback:Object(n.jsx)("div",{className:"projects-background",children:"loading.."}),children:Object(n.jsx)(f,{})}),Object(n.jsx)(a.a.Suspense,{fallback:Object(n.jsx)("div",{className:"contact-background",children:"loading.."}),children:Object(n.jsx)(N,{})})]})})};var S=e=>{e&&e instanceof Function&&s.e(6).then(s.bind(null,70)).then((({getCLS:t,getFID:s,getFCP:n,getLCP:l,getTTFB:a})=>{t(e),s(e),n(e),l(e),a(e)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),S()}},[[63,1,2]]]);
//# sourceMappingURL=main.758b0fc6.chunk.js.map