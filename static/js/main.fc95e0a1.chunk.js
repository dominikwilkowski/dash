(this.webpackJsonpdash=this.webpackJsonpdash||[]).push([[0],{26:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(1),a=n(21),o=n.n(a),i=n(2),c=n.n(i),s=n(4),u=n(3),l=n(14),b=n(5),p=n(0),d=n.n(p);function f(e){var t=e.nav,n=Object(b.f)().pathname;return 0===t.length?null:Object(r.b)("ul",{css:{display:"inline-block",listStyle:"none",padding:0,margin:0}},t.map((function(e){var t=e.name,a=e.url;return Object(r.b)("li",{key:a,css:{display:"inline-block",margin:"0 0.5rem"}},Object(r.b)(l.b,{to:a,css:{display:"inline-block",fontWeight:n===a?900:400,padding:"1rem",":hover":{textDecoration:"none"}}},t))})))}var m=n(11),g=Object(r.c)({to:{transform:"rotate( 360deg )"}});function h(e){var t=e.children,n=e.loading,a=Object(m.a)(e,["children","loading"]);return Object(r.b)("button",Object.assign({type:"submit",disabled:n,css:{position:"relative",background:"transparent",border:"1px solid #000",borderLeft:"none",apperance:"none",fontSize:"1rem",cursor:"pointer",lineHeight:1,margin:0,color:n?"transparent":null,":after":{content:'""',display:n?"block":"none",position:"absolute",top:"10px",left:"50%",marginLeft:"-0.75rem",width:"1.5rem",height:"1.5rem",border:"3px solid #aaa",borderTopColor:"#000",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite")}}},a),t)}var O=n(24);n(37);function j(e){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(c.a.mark((function e(t){var n,r,a,o,i,s=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:{},r=localStorage.getItem("dash-user"),o="https://dominik-wilkowski.com/dash",!r&&!n.user){e.next=10;break}return e.next=6,fetch("".concat(o).concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(O.a)({user:r},n))});case 6:return i=e.sent,e.next=9,i.json();case 9:a=e.sent;case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){var t=e.children,n=Object(m.a)(e,["children"]);return Object(r.b)("div",Object.assign({css:{maxWidth:"60rem",margin:"0 auto",padding:"2rem 4vw",background:"#fff",boxShadow:"rgba(0, 0, 0, 0.3) 0 0 30px",borderTop:"3px solid #000",borderBottom:"3px solid #000","@media (min-width: 60rem)":{borderRight:"3px solid #000",borderLeft:"3px solid #000"}}},n),t)}var y=n(23),S=n(25);function w(){var e=Object(p.useState)("lightseagreen"),t=Object(u.a)(e,2),n=t[0],a=t[1],o=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/gettrash");case 2:t=e.sent,n=Object(S.a)(t.yellow),Object(y.a)(new Date,n)%2===1?a("#ffdf00"):a("SkyBlue");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.useEffect)((function(){return o(),window.addEventListener("focus",o,!1),function(){return window.removeEventListener("focus",o,!1)}}),[]),Object(r.b)(r.a,{styles:{body:{background:n}}})}function k(e){var t=e.addItem,n=Object(p.useState)(!1),a=Object(u.a)(n,2),o=a[0],i=a[1],l=Object(p.useState)(""),b=Object(u.a)(l,2),d=b[0],f=b[1],m=function(){var e=Object(s.a)(c.a.mark((function e(n,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,t(n,r,a);case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return Object(r.b)("form",{onSubmit:function(e){return m(e,d,f)},css:{display:"flex",margin:"2rem 0"}},Object(r.b)("input",{type:"text",value:d,onChange:function(e){return f(e.target.value)},css:{padding:"0.5rem 0.75rem",fontSize:"1rem",flexGrow:1,border:"1px solid #000",borderRadius:0,apperance:"none",margin:0,width:0}}),Object(r.b)(h,{loading:o,css:{padding:"1rem"}},"Save"))}function R(e){var t=e.text,n=e.id,a=e.handleChange,o=Object(m.a)(e,["text","id","handleChange"]),i=Object(p.useState)(!1),l=Object(u.a)(i,2),b=l[0],d=l[1],f=Object(p.useState)(!1),g=Object(u.a)(f,2),O=g[0],j=g[1],x=Object(p.useState)(t),v=Object(u.a)(x,2),y=v[0],S=v[1],w=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),d(!0),e.next=4,a(n,y);case 4:j(!1),d(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return O?Object(r.b)(p.Fragment,null,Object(r.b)("form",Object.assign({onSubmit:w,css:{position:"relative",flexGrow:1,display:"flex",padding:0,margin:0,zIndex:2}},o),Object(r.b)("input",{type:"text",value:y,onChange:function(e){return S(e.target.value)},autoFocus:!0,onKeyDown:function(e){return 27===e.keyCode?j(!1):null},css:{flexGrow:1,fontSize:"1.2rem",padding:"0.5rem",fontWeight:500,border:"1px solid #000",borderRadius:0,apperance:"none",margin:0,width:0}}),Object(r.b)(h,{loading:b},"Save")),Object(r.b)("div",{onClick:function(){return j(!1)},css:{position:"fixed",top:0,right:0,bottom:0,left:0,background:"transparent",zIndex:1}})):Object(r.b)("div",{onClick:function(){return j(!0)},css:{display:"inline-block",flexGrow:1,fontSize:"1.2rem",padding:"0.5rem",fontWeight:500}},y)}function T(e){var t=e.children,n=e.onClick,a=e.noLoadingReset,o=Object(m.a)(e,["children","onClick","noLoadingReset"]),i=Object(p.useState)(!1),l=Object(u.a)(i,2),b=l[0],d=l[1],f=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d(!0),!n){e.next=4;break}return e.next=4,n();case 4:a||d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.b)("button",Object.assign({type:"button",onClick:f,disabled:b,css:{position:"relative",background:"transparent",border:"none",apperance:"none",fontSize:"1rem",cursor:"pointer",lineHeight:1,":after":{content:'""',display:b?"block":"none",position:"absolute",top:"12px",left:"50%",marginLeft:"-0.5rem",width:"1rem",height:"1rem",border:"3px solid #aaa",borderTopColor:"#000",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite")}}},o),Object(r.b)("span",{css:{opacity:b?0:1}},t))}function z(e){var t=e.items,n=e.removeItem,a=e.toggleItem,o=e.editItem;return Object(r.b)("ul",{css:{listStyle:"none",padding:0,margin:0}},t.sort((function(e,t){return e.isDone!==t.isDone?e.isDone?1:-1:t.id-e.id})).map((function(e){var t=e.id,i=e.text,c=e.isDone;return Object(r.b)("li",{key:t,css:{textDecoration:c?"line-through":"none",display:"flex",opacity:c?.3:1,marginBottom:"0.5rem"}},Object(r.b)(T,{onClick:function(){return a(t)}},Object(r.b)("span",{css:{position:"relative",display:"inline-block",width:"1.5rem",height:"1.5rem",border:"3px solid #000",textIndent:"-99999rem",color:"transparent",borderRadius:"3px",":before":{content:'""',display:c?"block":"none",position:"absolute",top:"0",left:"4px",width:"1.1rem",height:"0.55rem",borderBottom:"3px solid #000",borderLeft:"3px solid #000",transform:"rotate(-45deg)",zIndex:2},":after":{content:'""',display:c?"block":"none",position:"absolute",top:"-3px",right:"-3px",width:"0.5rem",height:"0.8rem",background:"#fff",zIndex:1}}},"Toggle this item")),Object(r.b)(R,{handleChange:o,text:i,id:t}),Object(r.b)(T,{onClick:function(){return n(t)},noLoadingReset:!0},Object(r.b)("span",{role:"img","aria-label":"Delete this item"},"\ud83d\uddd1")))})))}function C(){var e=Object(p.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],o=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/shopping");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(p.useEffect)((function(){return o(),window.addEventListener("focus",o,!1),function(){return window.removeEventListener("focus",o,!1)}}),[]);var i=function(){var e=Object(s.a)(c.a.mark((function e(t,n,r){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!n){e.next=7;break}return e.next=4,j("/addshopping",{text:n});case 4:o=e.sent,a(o.shopping),r("");case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),l=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/toggleshopping",{id:t});case 2:n=e.sent,a(n.shopping);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/editshopping",{id:t,text:n});case 2:r=e.sent,a(r.shopping);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/deleteshopping",{id:t});case 2:n=e.sent,a(n.shopping);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.b)(v,null,Object(r.b)(w,null),Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},"Shopping"),Object(r.b)(k,{addItem:i}),n.length?Object(r.b)(z,{items:n,removeItem:d,toggleItem:l,editItem:b}):Object(r.b)("div",{css:{width:"2rem",height:"2rem",margin:"2rem auto",border:"3px solid #aaa",borderTopColor:"#000",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite")}}))}function L(){return Object(r.b)(v,null,Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},"Mort"))}function I(){var e=Object(p.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(p.useState)(""),i=Object(u.a)(o,2),l=i[0],b=i[1],d=Object(p.useState)(!1),f=Object(u.a)(d,2),m=f[0],g=f[1];Object(p.useEffect)((function(){Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/getall");case 2:t=e.sent,a(JSON.stringify(t,null,"\t"));case 4:case"end":return e.stop()}}),e)})))()}),[]);var O=function(){var e=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(!0),b(""),e.prev=3,JSON.parse(n),e.next=7,j("/writeall",{content:n});case 7:r=e.sent,a(JSON.stringify(r,null,"\t")),g(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),b(e.t0.toString()),g(!1);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.b)(v,null,Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},"Database"),Object(r.b)("form",{onSubmit:O},Object(r.b)("textarea",{value:n,onChange:function(e){return a(e.target.value)},css:{MozTabSize:"2",OTabSize:"2",tabSize:"2",width:"100%",height:"30rem",apperance:"none",border:l?"1px solid red":"1px solid #000",padding:"1rem"}}),l&&Object(r.b)("span",{css:{display:"block",color:"red",margin:"0.5rem 0"}},l),Object(r.b)(h,{loading:m,css:{fontSize:"1.5rem",borderLeft:"1px solid #000",padding:"0.5rem",":after":{top:"9px"}}},"Save")))}function D(){var e=Object(p.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(p.useState)(localStorage.getItem("dash-user")||null),i=Object(u.a)(o,2),d=i[0],m=i[1],g=Object(p.useState)(""),O=Object(u.a)(g,2),x=O[0],v=O[1],y=Object(p.useState)(!1),S=Object(u.a)(y,2),w=S[0],k=S[1],R=Object(p.useState)(""),T=Object(u.a)(R,2),z=T[0],D=T[1],N=Object(p.useState)(""),E=Object(u.a)(N,2),F=E[0],W=E[1];Object(p.useEffect)((function(){d&&Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("/navigation");case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),W(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[d]);var P={Shopping:Object(r.b)(C,null),Mort:Object(r.b)(L,null),Db:Object(r.b)(I,null)},U=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!z){e.next=16;break}return v(""),k(!0),e.prev=4,e.next=7,j("/checkuser",{user:z});case 7:"Found"===e.sent.user?(localStorage.setItem("dash-user",z),m(z)):v("User could not be found"),k(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),v("Unable to connect to the server: "+e.t0.toString()),k(!1);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.b)("main",{css:{textRendering:"optimizeLegibility",fontKerning:"auto",MozOsxFontSmoothing:"grayscale"}},d?Object(r.b)(p.Fragment,null,F?Object(r.b)("strong",{css:{display:"block",padding:"5rem 1rem",fontSize:"2rem",textAlign:"center"}},"An error occured trying to reach the server. Please try again later"):Object(r.b)(l.a,null,Object(r.b)("nav",{css:{display:"block",borderBottom:"3px solid #000",margin:"0 0 3rem 0",background:"#fff"}},Object(r.b)(f,{nav:n}),Object(r.b)("button",{type:"button",onClick:function(){localStorage.setItem("dash-user",""),m(null)},css:{display:"inline-block",float:"right",padding:"1rem",background:"transparent",border:"none",apperance:"none",fontSize:"1rem",cursor:"pointer"}},"Logout")),Object(r.b)(b.c,null,n.map((function(e){var t=e.name,n=e.url;return Object(r.b)(b.a,{exact:!0,path:n,key:n},P[t])}))))):Object(r.b)(p.Fragment,null,Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"20vw",margin:0,textAlign:"center",fontWeight:700,textShadow:"0 0.5rem 0.5rem #25514F"}},"Dash"),Object(r.b)("form",{onSubmit:U,css:{maxWidth:"60rem",background:"#fff",margin:"2rem auto",padding:"1rem 0.5rem",borderTop:"3px solid #000",borderBottom:"3px solid #000",boxShadow:"rgba(0, 0, 0, 0.3) 0 0 30px","@media (min-width: 500px)":{padding:"1.5rem"},"@media (min-width: 60rem)":{borderRight:"3px solid #000",borderLeft:"3px solid #000"}}},Object(r.b)("div",{css:{display:"flex"}},Object(r.b)("label",{htmlFor:"login",css:{display:"inline-block",marginRight:"0.5rem",fontSize:"1rem",alignSelf:"center",whiteSpace:"nowrap","@media (min-width: 500px)":{fontSize:"1.5rem"}}},"User login"),Object(r.b)("input",{id:"login",type:"text",value:z,onChange:function(e){return D(e.target.value)},css:{flexGrow:1,fontSize:"1.5rem",padding:"0.5rem",margin:0,border:"1px solid #000",borderRadius:0,apperance:"none",width:0}}),Object(r.b)(h,{loading:w},"Login")),x&&Object(r.b)("span",{css:{display:"block",marginTop:"0.5rem",color:"red"}},x))))}o.a.render(d.a.createElement(d.a.StrictMode,null,d.a.createElement(r.a,{styles:{body:{fontFamily:'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',lineHeight:1.2,margin:0,padding:0,background:"lightseagreen"},a:{color:"#000"},"*, *:before, *:after":{boxSizing:"border-box"}}}),d.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.fc95e0a1.chunk.js.map