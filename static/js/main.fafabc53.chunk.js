(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{27:function(n,e,t){"use strict";t.r(e);var o,r,c,i,a,s,d,l,u,b,h,j,f,m,g,p,x,O,v,k,C=t(0),y=t.n(C),D=t(8),w=t.n(D),z=t(3),T=t(2),F=Object(T.b)(o||(o=Object(z.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::before, ::after {\n        box-sizing: inherit;\n    }\n\n    body {\n        font-family: 'Montserrat', sans-serif;\n        background: ",";\n    }\n"])),(function(n){return n.theme.fillingColor})),M=t(16),S=t(6),A=t(4),G=t(15),H=Object(S.b)({name:"tasks",initialState:{tasks:[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,o=e.payload;t.push(o)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,o=e.payload,r=t.findIndex((function(n){return n.id===o}));t[r].done=!t[r].done},removeTask:function(n,e){var t=n.tasks,o=e.payload,r=t.findIndex((function(n){return n.id===o}));t.splice(r,1)},setAllDone:function(n){var e,t=n.tasks,o=Object(G.a)(t);try{for(o.s();!(e=o.n()).done;){e.value.done=!0}}catch(r){o.e(r)}finally{o.f()}}}}),I=H.actions,L=I.addTask,P=I.toggleHideDone,B=I.toggleTaskDone,J=I.removeTask,U=I.setAllDone,_=function(n){return n.tasks},E=H.reducer,N=T.d.form(r||(r=Object(z.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    }\n"])),(function(n){return n.theme.breakpoints.mobileMax})),R=T.d.input(c||(c=Object(z.a)(["\n    padding: 10px;\n    border: 1px solid ",";\n"])),(function(n){return n.theme.colors.fillingColor})),q=T.d.button(i||(i=Object(z.a)(["\n    padding: 10px;\n    background: ",";\n    color: ",";\n    border: none;\n    transition: transform 0.3s, background 0.3s;\n\n    &:hover {\n        transform: scale(1.1);\n        background-color: ",";\n        cursor: pointer;\n    }\n\n    &:focus {\n        outline: none;\n        background-color: ",";\n    }\n\n    &:active {\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.colors.primaryColor.standard}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.primaryColor.hover}),(function(n){return n.theme.colors.primaryColor.hover}),(function(n){return n.theme.colors.primaryColor.active})),K=t(1),Q=function(){var n=Object(C.useState)(""),e=Object(M.a)(n,2),t=e[0],o=e[1],r=Object(C.useRef)(null),c=Object(A.b)();return Object(K.jsxs)(N,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(c(L({content:e,done:!1,id:Object(S.c)()})),o(""),r.current.focus())},children:[Object(K.jsx)(R,{ref:r,value:t,onChange:function(n){var e=n.target;return o(e.value)},placeholder:"Co jest do zrobienia?",autoFocus:!0}),Object(K.jsx)(q,{children:"Dodaj zadanie"})]})},V=T.d.ul(a||(a=Object(z.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),W=T.d.li(s||(s=Object(z.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 10px;\n    align-items: center;\n    padding: 10px;\n    border-bottom: 1px solid ",";\n\n    ","\n"])),(function(n){return n.theme.colors.fillingColor}),(function(n){return n.hidden&&Object(T.c)(d||(d=Object(z.a)(["\n        display: none;\n    "])))})),X=T.d.span(l||(l=Object(z.a)(["\n    word-break: break-word;\n\n    ","\n"])),(function(n){return n.done&&Object(T.c)(u||(u=Object(z.a)(["\n        text-decoration: line-through;\n    "])))})),Y=T.d.button(b||(b=Object(z.a)(["\n    border: none;\n    color: ",";\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    transition: background 0.3s;\n\n    ","\n\n    ","\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.toggleDone&&Object(T.c)(h||(h=Object(z.a)(["\n        background: ",";\n\n        &:hover {\n            background: ",";\n            cursor: pointer;\n        }\n\n        &:active {\n            background: ",";\n        }\n    "])),(function(n){return n.theme.colors.buttonColors.forestGreen.standard}),(function(n){return n.theme.colors.buttonColors.forestGreen.hover}),(function(n){return n.theme.colors.buttonColors.forestGreen.active}))}),(function(n){return n.remove&&Object(T.c)(j||(j=Object(z.a)(["\n        background: ",";\n\n        &:hover {\n            background: ",";\n            cursor: pointer;\n        }\n\n        &:active {\n            background: ",";\n        }\n    "])),(function(n){return n.theme.colors.buttonColors.crimson.standard}),(function(n){return n.theme.colors.buttonColors.crimson.hover}),(function(n){return n.theme.colors.buttonColors.crimson.active}))})),Z=function(){var n=Object(A.c)(_),e=n.tasks,t=n.hideDone,o=Object(A.b)();return Object(K.jsx)(V,{children:e.map((function(n){return Object(K.jsxs)(W,{hidden:n.done&&t,children:[Object(K.jsx)(Y,{onClick:function(){return o(B(n.id))},toggleDone:!0,children:n.done?"\u2713":""}),Object(K.jsx)(X,{done:n.done,children:n.content}),Object(K.jsx)(Y,{onClick:function(){return o(J(n.id))},remove:!0,children:"\ud83d\uddd1\ufe0f"})]},n.id)}))})},$=T.d.div(f||(f=Object(z.a)(["\n    @media (max-width: ","px) {\n        display: grid;\n        grid-gap: 20px;\n    }\n"])),(function(n){return n.theme.breakpoints.mobileMax})),nn=T.d.button(m||(m=Object(z.a)(["\n    border: none;\n    background: none;\n    color: ",";\n    font-size: initial;\n    transition: color 0.3s;\n\n    &:hover {\n        color: ",";\n        cursor: pointer;\n    }\n\n    &:active {\n        color: ",";\n    }\n\n    ","\n"])),(function(n){return n.theme.colors.primaryColor.standard}),(function(n){return n.theme.colors.primaryColor.hover}),(function(n){return n.theme.colors.primaryColor.active}),(function(n){return n.doneAll&&Object(T.c)(g||(g=Object(z.a)(["\n        &:disabled {\n            color: ",";\n        }\n    "])),(function(n){return n.theme.colors.fillingColor}))})),en=function(){var n=Object(A.c)(_),e=n.tasks,t=n.hideDone,o=Object(A.b)();return Object(K.jsx)($,{children:e.length>0&&Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(nn,{onClick:function(){return o(P())},children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(K.jsx)(nn,{onClick:function(){return o(U())},doneAll:!0,disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})})},tn=T.d.section(p||(p=Object(z.a)(["\n    margin: 10px 0;\n    background: ",";\n    box-shadow: 0 0 5px ",";\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.fillingColor})),on=T.d.header(x||(x=Object(z.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n    border-bottom: 1px solid ",";\n    padding: 20px;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n        grid-gap: 32px;\n    }\n"])),(function(n){return n.theme.colors.fillingColor}),(function(n){return n.theme.breakpoints.mobileMax})),rn=T.d.h2(O||(O=Object(z.a)(["\n    font-size: 20px;\n    margin: 0;\n"]))),cn=T.d.div(v||(v=Object(z.a)(["\n    padding: 20px;\n"]))),an=function(n){var e=n.title,t=n.body,o=n.extraHeaderContent;return Object(K.jsxs)(tn,{children:[Object(K.jsxs)(on,{className:"section__header",children:[Object(K.jsx)(rn,{children:e}),o]}),Object(K.jsx)(cn,{children:t})]})},sn=function(n){var e=n.title;return Object(K.jsx)("header",{children:Object(K.jsx)("h1",{children:e})})},dn=T.d.main(k||(k=Object(z.a)(["\n    max-width: 900px;\n    padding: 20px;\n    margin: 0 auto;\n"]))),ln=function(n){var e=n.children;return Object(K.jsx)(dn,{children:e})};var un=function(){return Object(K.jsxs)(ln,{children:[Object(K.jsx)(sn,{title:"Lista zada\u0144"}),Object(K.jsx)(an,{title:"Dodaj nowe zadanie",body:Object(K.jsx)(Q,{})}),Object(K.jsx)(an,{title:"Lista zada\u0144",body:Object(K.jsx)(Z,{}),extraHeaderContent:Object(K.jsx)(en,{})})]})},bn=function(){return Object(K.jsx)(un,{})},hn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(e){var t=e.getCLS,o=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),o(n),r(n),c(n),i(n)}))},jn=Object(S.a)({reducer:{tasks:E}});w.a.render(Object(K.jsx)(y.a.StrictMode,{children:Object(K.jsx)(A.a,{store:jn,children:Object(K.jsxs)(T.a,{theme:{colors:{primaryColor:{standard:"hsl(180deg 100% 25%)",hover:"hsl(180, 100%, 30%)",active:"hsl(180, 100%, 35%)"},secondaryColor:"hsl(0deg 0% 100%)",fillingColor:"hsl(0deg 0% 87%)",buttonColors:{forestGreen:{standard:"hsl(120, 61%, 34%)",hover:"hsl(120, 61%, 39%)",active:"hsl(120, 61%, 44%)"},crimson:{standard:"hsl(348, 83%, 47%)",hover:"hsl(348, 83%, 52%)",active:"hsl(348, 83%, 57%)"}}},breakpoints:{mobileMax:767}},children:[Object(K.jsx)(F,{}),Object(K.jsx)(bn,{})]})})}),document.getElementById("root")),hn()}},[[27,1,2]]]);
//# sourceMappingURL=main.fafabc53.chunk.js.map