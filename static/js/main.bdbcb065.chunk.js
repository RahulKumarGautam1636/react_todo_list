(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{31:function(t,e,n){"use strict";n.r(e);var s=n(0),l=n.n(s),c=n(6),o=n.n(c),a=n(4),i=n(18),r=n(5),d=n(1);var u=function(t){function e(){t.setDay(!t.isDay)}return Object(d.jsxs)("div",{className:"head_container",children:[Object(d.jsx)("h1",{className:"head",children:"T O D O"}),Object(d.jsx)("svg",{onClick:e,style:{display:!1===t.isDay?"flex":"none"},xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",children:Object(d.jsx)("path",{fill:"#FFF",fillRule:"evenodd",d:"M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"})}),Object(d.jsx)("svg",{onClick:e,style:{display:t.isDay?"flex":"none"},xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",children:Object(d.jsx)("path",{fill:"#FFF",fillRule:"evenodd",d:"M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"})})]})};var h=function(t){var e={color:!1===t.status?"hsl(235, 19%, 35%)":"hsl(233, 11%, 84%)"},n={color:!1===t.status?"hsl(233, 11%, 84%)":"hsl(235, 19%, 35%)"},s={boxShadow:t.isDay?"rgba(0, 0, 0, 0.5) 0px 0px 1px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px":"rgba(255, 255, 255, 0.5) 0px 0px 1px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"};return Object(d.jsxs)("div",{style:{display:t.isCompleted&&!1===t.status||t.isActive&&!0===t.status?"none":"flex",backgroundColor:t.isDay?"hsl(0, 0%, 98%)":"hsl(235, 24%, 19%)",boxShadow:s.boxShadow,border:"1px solid blackk "},className:"note_container",children:[Object(d.jsxs)("div",{className:"check_container",children:[Object(d.jsx)("div",{style:{background:t.status?"linear-gradient(hsl(192, 100%, 67%) , hsl(280, 87%, 65%))":"transparent"},onClick:function(){t.handleChecks()},id:"circle",children:Object(d.jsx)("svg",{style:{display:t.status?"flex":"none"},xmlns:"http://www.w3.org/2000/svg",width:"11",height:"9",children:Object(d.jsx)("path",{fill:"none",stroke:"#fff",strokeWidth:"2",d:"M1 4.304L3.696 7l6-6"})})}),Object(d.jsx)("p",{style:{textDecoration:!1===t.status?"none":"line-through",color:t.isDay?e.color:n.color},children:t.title})]}),Object(d.jsx)("svg",{onClick:t.deleteNotes,id:"cross",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",children:Object(d.jsx)("path",{fill:"#494C6B",fillRule:"evenodd",d:"M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"})})]})},b=n(19),j=n(11);var x=function(t,e,n){var l=Object(s.useState)({title:"",status:""}),c=Object(r.a)(l,2),o=c[0],x=c[1],p=Object(s.useState)([{title:"Complete online javascript course",status:!0},{title:"Jog around the park 3x",status:!1},{title:"10 minutes meditation",status:!1},{title:"Read for 1 hour",status:!1},{title:"Pick up groceries",status:!1},{title:"Complete Todo App on Frontend Mentor",status:!1}]),g=Object(r.a)(p,2),O=g[0],f=g[1],m=Object(s.useState)(!1),v=Object(r.a)(m,2),y=v[0],w=v[1],C=Object(s.useState)(!1),k=Object(r.a)(C,2),S=k[0],N=k[1],D=Object(s.useState)(!0),F=Object(r.a)(D,2),_=F[0],z=F[1],M=Object(s.useState)(!1),A=Object(r.a)(M,2),I=A[0],L=A[1];function R(t){var e=O.filter((function(e){return e.title===t.title})).length;1===e?alert("Item Already Exist"):(!function(t){0===t.length||""===t.title?console.log("please enter a valid task"):f((function(e){return[].concat(Object(i.a)(e),[t])}))}(t),console.log(e),console.log(t))}function B(){f((function(t){return t.filter((function(t){return!1===t.status}))}))}var P={backgroundColor:"hsl(0, 0%, 98%)",backgroundImage:I?"url(images/bg-mobile-light.jpg)":"url(images/bg-desktop-light.jpg)"},T={backgroundColor:"hsl(235, 21%, 11%)",backgroundImage:I?"url(images/bg-mobile-dark.jpg)":"url(images/bg-desktop-dark.jpg)"},E={boxShadow:_?"rgba(0, 0, 0, 0.5) 0px 0px 1px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px":"rgba(255, 255, 255, 0.5) 0px 0px 1px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"},J={color:_?"hsl(235, 19%, 35%)":"hsl(233, 11%, 84%)"};return Object(d.jsxs)("section",{style:_?P:T,children:[Object(d.jsx)(b.a,{queries:{small:"(max-width: 800px)"},onChange:function(t){return t.small?L(!0):L(!1)}}),Object(d.jsxs)("div",{className:"form_container",children:[Object(d.jsx)(u,{isDay:_,setDay:z}),Object(d.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault()},children:[Object(d.jsxs)("div",{style:{backgroundColor:_?"white":"hsl(235, 24%, 19%)"},id:"inputField_container",children:[Object(d.jsx)("div",{id:"circle",children:Object(d.jsx)("button",{className:"submitNoteButton",onClick:function(){R(o),x({title:"",status:!1})},type:"submit"})}),Object(d.jsx)("input",{style:{color:_?"hsl(235, 19%, 35%)":"hsl(0, 0%, 98%)"},id:"inputField",onChange:function(t){var e=t.target,n=(e.name,e.value);x((function(t){return Object(a.a)(Object(a.a)({},t),{},{title:n,status:!1})}))},type:"text",value:o.title,placeholder:"Create a new todo..",autoComplete:"off"})]}),Object(d.jsx)("div",{className:"handle_outer_shadow",children:Object(d.jsx)(j.a,{onDragEnd:function(t){if(t.destination){var e=Array.from(O),n=e.splice(t.source.index,1),s=Object(r.a)(n,1)[0];e.splice(t.destination.index,0,s),f(e)}},children:Object(d.jsx)(j.c,{droppableId:"characters",children:function(t){return Object(d.jsxs)("ul",Object(a.a)(Object(a.a)({className:"characters"},t.droppableProps),{},{ref:t.innerRef,children:[O.map((function(t,e){return Object(d.jsx)(j.b,{draggableId:t.title,index:e,children:function(n){return Object(d.jsx)("li",Object(a.a)(Object(a.a)(Object(a.a)({},n.draggableProps),n.dragHandleProps),{},{ref:n.innerRef,children:Object(d.jsx)(h,{title:t.title,handleChecks:function(){var t;t=e,f((function(e){return e.map((function(e,n){return t===n?{title:e.title,status:!e.status}:Object(a.a)({},e)}))}))},deleteNotes:function(){var t;t=e,f((function(e){return e.filter((function(e,n){return n!==t}))}))},status:t.status,isCompleted:y,isActive:S,isDay:_})}))}},t.title)})),t.placeholder]}))}})})}),Object(d.jsxs)("div",{id:"todoStatus",style:{display:I?"flex":"none",backgroundColor:_?"white":"hsl(235, 24%, 19%)",boxShadow:E.boxShadow},className:"buttons_container",children:[Object(d.jsxs)("p",{children:[" ",O.filter((function(t){return t.status===y})).length," items ",y?"completed":"left"]}),Object(d.jsx)("button",{type:"button",onClick:B,children:Object(d.jsx)("p",{children:"Clear Completed"})})]}),Object(d.jsx)("div",{className:"handle_outer_shadow",children:Object(d.jsxs)("div",{style:{backgroundColor:_?"white":"hsl(235, 24%, 19%)",boxShadow:E.boxShadow},className:"buttons_container",children:[Object(d.jsxs)("p",{style:{display:I?"none":"flex"},children:[" ",O.filter((function(t){return t.status===y})).length," items ",y?"completed":"left"]}),Object(d.jsxs)("div",{style:{noteBoxShadow:E},className:"toggleButtons",children:[Object(d.jsx)("button",{type:"button",onClick:function(){w(!1),N(!1)},children:Object(d.jsx)("p",{style:{color:!1===S&&!1===y&&0!==O.length?"hsl(220, 98%, 61%)":J.color},children:"All"})}),Object(d.jsx)("button",{type:"button",onClick:function(){N(!0),w(!1)},children:Object(d.jsx)("p",{style:{color:S&&0!==O.length?"hsl(220, 98%, 61%)":J.color},children:"Active"})}),Object(d.jsx)("button",{type:"button",onClick:function(){w(!0),N(!1)},children:Object(d.jsx)("p",{style:{color:y&&0!==O.length?"hsl(220, 98%, 61%)":J.color},children:"Completed"})})]}),Object(d.jsx)("button",{style:{display:I?"none":"flex"},type:"button",onClick:B,children:Object(d.jsx)("p",{children:"Clear Completed"})})]})})]})]}),Object(d.jsx)("div",{style:{cursor:"move",position:"absolute",width:"100%"},children:Object(d.jsx)("p",{className:"order",children:"Drag and drop to reorder the list"})})]})};var p=function(){return Object(d.jsxs)("div",{className:"attribution",children:["Challenge by ",Object(d.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",children:"Frontend Mentor"}),". Coded by ",Object(d.jsx)("a",{href:"#",children:"Rahul Kumar Gautam"}),"."]})};var g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),Object(d.jsx)(p,{})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,s=e.getFID,l=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),s(t),l(t),c(t),o(t)}))};o.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),O()}},[[31,1,2]]]);
//# sourceMappingURL=main.bdbcb065.chunk.js.map