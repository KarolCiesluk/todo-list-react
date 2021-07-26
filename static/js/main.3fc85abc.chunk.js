(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{49:function(n,e,t){"use strict";t.r(e);var r,o,c,a,i,s,u,d,l,b,j,h,f,O,x,p,m,g,v,k,y,C=t(0),w=t.n(C),z=t(22),T=t.n(z),D=t(7),S=t(6),L=Object(S.b)(r||(r=Object(D.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::before, ::after {\n        box-sizing: inherit;\n    }\n\n    body {\n        font-family: 'Montserrat', sans-serif;\n        background: ",";\n    }\n"])),(function(n){return n.theme.colors.fillingColor})),F=t(17),U=t(8),P=S.d.main(o||(o=Object(D.a)(["\n    max-width: 900px;\n    padding: 20px;\n    margin: 0 auto;\n"]))),I=t(2),M=function(n){var e=n.children;return Object(I.jsx)(P,{children:e})},H=function(n){var e=n.title;return Object(I.jsx)("header",{children:Object(I.jsx)("h1",{children:e})})},E=S.d.section(c||(c=Object(D.a)(["\n    margin: 10px 0;\n    background: ",";\n    box-shadow: 0 0 5px ",";\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.fillingColor})),G=S.d.header(a||(a=Object(D.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n    border-bottom: 1px solid ",";\n    padding: 20px;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n        grid-gap: 32px;\n    }\n"])),(function(n){return n.theme.colors.fillingColor}),(function(n){return n.theme.breakpoints.mobileMax})),J=S.d.h2(i||(i=Object(D.a)(["\n    font-size: 20px;\n    margin: 0;\n"]))),N=S.d.div(s||(s=Object(D.a)(["\n    padding: 20px;\n"]))),R=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(I.jsxs)(E,{children:[Object(I.jsxs)(G,{className:"section__header",children:[Object(I.jsx)(J,{children:e}),r]}),Object(I.jsx)(N,{children:t})]})},A=function(){return Object(I.jsxs)(M,{children:[Object(I.jsx)(H,{title:"O autorze"}),Object(I.jsx)(R,{title:"Karol Cie\u015bluk",body:"lalala"})]})},B=t(9),_=t(33),K=t(21),W="tasks",Z=function(n){localStorage.setItem(W,JSON.stringify(n))},q=Object(K.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(W))||[],hideDone:!1,areTasksLoading:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t[o].done=!t[o].done},removeTask:function(n,e){var t=n.tasks,r=e.payload,o=t.findIndex((function(n){return n.id===r}));t.splice(o,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(_.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(o){r.e(o)}finally{r.f()}},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t},toggleTasksLoading:function(n){n.areTasksLoading=!n.areTasksLoading}}}),Q=q.actions,V=Q.addTask,X=Q.toggleHideDone,Y=Q.toggleTaskDone,$=Q.removeTask,nn=Q.setAllDone,en=Q.fetchExampleTasks,tn=Q.setTasks,rn=Q.toggleTasksLoading,on=function(n){return n.tasks},cn=function(n){return on(n).tasks},an=function(n){return on(n).hideDone},sn=function(n){return!cn(n).length},un=function(n){return cn(n).every((function(n){return n.done}))},dn=function(n){return on(n).areTasksLoading},ln=q.reducer,bn=function(){var n=Object(U.i)().id,e=Object(B.c)((function(e){return function(n,e){return cn(n).find((function(n){return n.id===e}))}(e,n)}));return Object(I.jsxs)(M,{children:[Object(I.jsx)(H,{title:"Szczeg\xf3\u0142y zadania"}),Object(I.jsx)(R,{title:e?e.content:"Sorka, nie ma takiego zadania! \ud83d\ude1b ",body:e?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("strong",{children:"Uko\u0144czone: "}),e.done?"Tak":"Nie"]}):""})]})},jn=t(35),hn=S.d.button(u||(u=Object(D.a)(["\n    border: none;\n    background: none;\n    color: ",";\n    font-size: initial;\n\n    &:hover {\n        color: ",";\n        cursor: pointer;\n    };\n\n    &:active {\n        color: ",";\n    };\n\n    &:disabled {\n        color: ",";\n    };\n"])),(function(n){return n.theme.colors.primaryColor.standard}),(function(n){return n.theme.colors.primaryColor.hover}),(function(n){return n.theme.colors.primaryColor.active}),(function(n){return n.theme.colors.fillingColor})),fn=S.d.input(d||(d=Object(D.a)(["\n    padding: 10px;\n    border: 1px solid ",";\n\n    ",";\n"])),(function(n){return n.theme.colors.fillingColor}),(function(n){return n.search&&Object(S.c)(l||(l=Object(D.a)(["\n        width: 100%;\n    "])))})),On=S.d.form(b||(b=Object(D.a)(["\n    display: grid;\n    grid-template-columns: 1fr auto;\n    grid-gap: 20px;\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;\n    };\n"])),(function(n){return n.theme.breakpoints.mobileMax})),xn=S.d.button(j||(j=Object(D.a)(["\n    padding: 10px;\n    background: ",";\n    color: ",";\n    border: none;\n    transition: transform 0.3s, background 0.3s;\n\n    &:hover {\n        transform: scale(1.1);\n        background-color: ",";\n        cursor: pointer;\n    };\n\n    &:focus {\n        outline: none;\n        background-color: ",";\n    };\n\n    &:active {\n        background-color: ",";\n    };\n"])),(function(n){return n.theme.colors.primaryColor.standard}),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.theme.colors.primaryColor.hover}),(function(n){return n.theme.colors.primaryColor.hover}),(function(n){return n.theme.colors.primaryColor.active})),pn=function(){var n=Object(C.useState)(""),e=Object(jn.a)(n,2),t=e[0],r=e[1],o=Object(C.useRef)(null),c=Object(B.b)();return Object(I.jsxs)(On,{onSubmit:function(n){n.preventDefault();var e=t.trim();e&&(c(V({content:e,done:!1,id:Object(K.c)()})),r(""),o.current.focus())},children:[Object(I.jsx)(fn,{ref:o,value:t,onChange:function(n){var e=n.target;return r(e.value)},placeholder:"Co jest do zrobienia?",autoFocus:!0}),Object(I.jsx)(xn,{children:"Dodaj zadanie"})]})},mn="szukaj",gn=S.d.ul(h||(h=Object(D.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]))),vn=S.d.li(f||(f=Object(D.a)(["\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 10px;\n    align-items: center;\n    padding: 10px;\n    border-bottom: 1px solid ",";\n\n    ",";\n"])),(function(n){return n.theme.colors.fillingColor}),(function(n){return n.hidden&&Object(S.c)(O||(O=Object(D.a)(["\n        display: none;\n    "])))})),kn=S.d.span(x||(x=Object(D.a)(["\n    word-break: break-word;\n\n    ",";\n"])),(function(n){return n.done&&Object(S.c)(p||(p=Object(D.a)(["\n        text-decoration: line-through;\n    "])))})),yn=Object(S.d)(F.b)(m||(m=Object(D.a)(["\n    text-decoration: none;\n    color: ",";\n\n    &:hover {\n        color: ",";\n    };\n\n    &:active {\n        color: ",";\n    };\n"])),(function(n){return n.theme.colors.primaryColor.standard}),(function(n){return n.theme.colors.primaryColor.hover}),(function(n){return n.theme.colors.primaryColor.active})),Cn=S.d.button(g||(g=Object(D.a)(["\n    border: none;\n    color: ",";\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    transition: background 0.3s;\n\n    ",";\n\n    ",";\n"])),(function(n){return n.theme.colors.secondaryColor}),(function(n){return n.toggleDone&&Object(S.c)(v||(v=Object(D.a)(["\n        background: ",";\n\n        &:hover {\n            background: ",";\n            cursor: pointer;\n        };\n\n        &:active {\n            background: ",";\n        };\n    "])),(function(n){return n.theme.colors.buttonColors.forestGreen.standard}),(function(n){return n.theme.colors.buttonColors.forestGreen.hover}),(function(n){return n.theme.colors.buttonColors.forestGreen.active}))}),(function(n){return n.remove&&Object(S.c)(k||(k=Object(D.a)(["\n        background: ",";\n\n        &:hover {\n            background: ",";\n            cursor: pointer;\n        };\n\n        &:active {\n            background: ",";\n        };\n    "])),(function(n){return n.theme.colors.buttonColors.crimson.standard}),(function(n){return n.theme.colors.buttonColors.crimson.hover}),(function(n){return n.theme.colors.buttonColors.crimson.active}))})),wn=function(){var n=Object(U.h)(),e=new URLSearchParams(n.search).get(mn),t=Object(B.c)((function(n){return function(n,e){var t=cn(n);return e&&""!==e.trim()?t.filter((function(n){return n.content.toUpperCase().includes(e.trim().toUpperCase())})):t}(n,e)})),r=Object(B.c)(an),o=Object(B.b)();return Object(I.jsx)(gn,{children:t.map((function(n){return Object(I.jsxs)(vn,{hidden:n.done&&r,children:[Object(I.jsx)(Cn,{onClick:function(){return o(Y(n.id))},toggleDone:!0,children:n.done?"\u2713":""}),Object(I.jsx)(kn,{done:n.done,children:Object(I.jsx)(yn,{to:"/zadania/".concat(n.id),children:n.content})}),Object(I.jsx)(Cn,{onClick:function(){return o($(n.id))},remove:!0,children:"\ud83d\uddd1\ufe0f"})]},n.id)}))})},zn=S.d.div(y||(y=Object(D.a)(["\n    @media (max-width: ","px) {\n        display: grid;\n        grid-gap: 20px;\n    };\n"])),(function(n){return n.theme.breakpoints.mobileMax})),Tn=function(){var n=Object(B.c)(an),e=Object(B.c)(un),t=Object(B.c)(sn),r=Object(B.b)();return Object(I.jsx)(zn,{children:!t&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(hn,{onClick:function(){return r(X())},children:[n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(I.jsx)(hn,{onClick:function(){return r(nn())},doneAll:!0,disabled:e,children:"Uko\u0144cz wszystkie"})]})})},Dn=function(){var n=function(n){var e=Object(U.h)();return new URLSearchParams(e.search).get(n)}(mn),e=function(){var n=Object(U.h)(),e=Object(U.g)(),t=new URLSearchParams(n.search);return function(r){var o=r.key,c=r.value;c?t.set(o,c):t.delete(o),e.push("".concat(n.pathname,"?").concat(t.toString()))}}();return Object(I.jsx)(fn,{onChange:function(n){var t=n.target;e({key:mn,value:""!==t.value.trim()?t.value:void 0})},value:n||"",placeholder:"Filtruj zadania",search:!0})};var Sn,Ln,Fn=function(){var n=Object(B.b)(),e=Object(B.c)(dn);return Object(I.jsxs)(M,{children:[Object(I.jsx)(H,{title:"Lista zada\u0144"}),Object(I.jsx)(R,{title:"Dodaj nowe zadanie",body:Object(I.jsx)(pn,{}),extraHeaderContent:Object(I.jsx)(hn,{onClick:function(){return n(en())},disabled:e,children:e?"\u0141adowanie...":"Pobierz przyk\u0142adowe zadania"})}),Object(I.jsx)(R,{title:"Wyszukiwarka",body:Object(I.jsx)(Dn,{})}),Object(I.jsx)(R,{title:"Lista zada\u0144",body:Object(I.jsx)(wn,{}),extraHeaderContent:Object(I.jsx)(Tn,{})})]})},Un=S.d.ul(Sn||(Sn=Object(D.a)(["\n    background-color: ",";\n    margin: 0;\n    padding: 20px;\n    display: flex;\n    list-style: none;\n    justify-content: center;\n"])),(function(n){return n.theme.colors.primaryColor.standard})),Pn=Object(S.d)(F.c)(Ln||(Ln=Object(D.a)(["\n    color: ",";\n    margin: 20px;\n    text-decoration: none;\n\n    &.active {\n        font-weight: bold;\n    }\n"])),(function(n){return n.theme.colors.secondaryColor})),In=function(){return Object(I.jsxs)(F.a,{children:[Object(I.jsxs)(Un,{children:[Object(I.jsx)("li",{children:Object(I.jsx)(Pn,{to:"/autor",children:"O autorze"})}),Object(I.jsx)("li",{children:Object(I.jsx)(Pn,{to:"/zadania",children:"Zadania"})})]}),Object(I.jsxs)(U.d,{children:[Object(I.jsx)(U.b,{path:"/zadania/:id",children:Object(I.jsx)(bn,{})}),Object(I.jsx)(U.b,{path:"/zadania",children:Object(I.jsx)(Fn,{})}),Object(I.jsx)(U.b,{path:"/autor",children:Object(I.jsx)(A,{})}),Object(I.jsx)(U.b,{path:"/",children:Object(I.jsx)(U.a,{to:"/zadania"})})]})]})},Mn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))},Hn=t(36),En=t(11),Gn=t.n(En),Jn=t(12),Nn=t(34),Rn=function(){var n=Object(Nn.a)(Gn.a.mark((function n(){var e;return Gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/todo-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),An=Gn.a.mark(Wn),Bn=Gn.a.mark(Zn),_n=Gn.a.mark(qn),Kn=Gn.a.mark(Qn);function Wn(n){return Gn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Jn.a)([Object(Jn.d)(tn(n)),Object(Jn.d)(rn())]);case 2:case"end":return e.stop()}}),An)}function Zn(){var n;return Gn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(Jn.a)([Object(Jn.d)(rn()),Object(Jn.c)(2e3)]);case 3:return e.next=5,Object(Jn.b)(Rn);case 5:return n=e.sent,e.next=8,Wn(n);case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(Jn.b)(alert,"Co\u015b posz\u0142o nie tak!");case 14:case"end":return e.stop()}}),Bn,null,[[0,10]])}function qn(){var n;return Gn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Jn.e)(cn);case 2:return n=e.sent,e.next=5,Object(Jn.b)(Z,n);case 5:case"end":return e.stop()}}),_n)}function Qn(){return Gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Jn.g)(en.type,Zn);case 2:return n.next=4,Object(Jn.f)("*",qn);case 4:case"end":return n.stop()}}),Kn)}var Vn=Gn.a.mark(Xn);function Xn(){return Gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Jn.a)([Qn()]);case 2:case"end":return n.stop()}}),Vn)}var Yn=Object(Hn.a)(),$n=Object(K.a)({reducer:{tasks:ln},middleware:[Yn]});Yn.run(Xn);var ne=$n;T.a.render(Object(I.jsx)(w.a.StrictMode,{children:Object(I.jsx)(B.a,{store:ne,children:Object(I.jsxs)(S.a,{theme:{colors:{primaryColor:{standard:"hsl(180deg 100% 25%)",hover:"hsl(180, 100%, 30%)",active:"hsl(180, 100%, 35%)"},secondaryColor:"hsl(0deg 0% 100%)",fillingColor:"hsl(0deg 0% 87%)",buttonColors:{forestGreen:{standard:"hsl(120, 61%, 34%)",hover:"hsl(120, 61%, 39%)",active:"hsl(120, 61%, 44%)"},crimson:{standard:"hsl(348, 83%, 47%)",hover:"hsl(348, 83%, 52%)",active:"hsl(348, 83%, 57%)"}}},breakpoints:{mobileMax:767}},children:[Object(I.jsx)(L,{}),Object(I.jsx)(In,{})]})})}),document.getElementById("root")),Mn()}},[[49,1,2]]]);
//# sourceMappingURL=main.3fc85abc.chunk.js.map