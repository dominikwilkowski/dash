(this.webpackJsonpdash=this.webpackJsonpdash||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},35:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(1),a=n(20),o=n.n(a),i=n(2),c=n.n(i),s=n(6),u=n(5),l=n(13),b=n(3),d=n(0),p=n.n(d);function m(e){var t=e.nav,n=Object(b.f)().pathname;return 0===t.length?null:Object(r.b)("ul",{css:{display:"inline-block",listStyle:"none",padding:0,margin:0}},t.map((function(e){var t=e.name,a=e.url;return Object(r.b)("li",{key:a,css:{display:"inline-block",margin:"0 0.5rem"}},Object(r.b)(l.b,{to:a,css:{display:"inline-block",fontWeight:n===a?900:400,padding:"1rem",":hover":{textDecoration:"none"}}},t))})))}var f=n(11),g=Object(r.c)({to:{transform:"rotate( 360deg )"}});function h(e){var t=e.children,n=e.loading,a=Object(f.a)(e,["children","loading"]);return Object(r.b)("button",Object.assign({type:"submit",disabled:n,css:{position:"relative",background:"transparent",border:"1px solid #000",borderLeft:"none",apperance:"none",fontSize:"1rem",cursor:"pointer",lineHeight:1,margin:0,color:n?"transparent":null,":after":{content:'""',display:n?"block":"none",position:"absolute",top:"10px",left:"50%",marginLeft:"-0.75rem",width:"1.5rem",height:"1.5rem",border:"3px solid #aaa",borderTopColor:"#000",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite")}}},a),t)}var x=n(22);n(34);function j(e){return O.apply(this,arguments)}function O(){return(O=Object(s.a)(c.a.mark((function e(t){var n,r,a,o,i,s=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:{},r=localStorage.getItem("dash-user"),o="https://dominik-wilkowski.com/dash",!r&&!n.user){e.next=10;break}return e.next=6,fetch("".concat(o).concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(x.a)({user:r},n))});case 6:return i=e.sent,e.next=9,i.json();case 9:a=e.sent;case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){var t=e.addItem,n=Object(d.useState)(!1),a=Object(u.a)(n,2),o=a[0],i=a[1],l=Object(d.useState)(""),b=Object(u.a)(l,2),p=b[0],m=b[1],f=function(){var e=Object(s.a)(c.a.mark((function e(n,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,t(n,r,a);case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return Object(r.b)("form",{onSubmit:function(e){return f(e,p,m)},css:{display:"flex",margin:"2rem 0"}},Object(r.b)("input",{type:"text",value:p,onChange:function(e){return m(e.target.value)},css:{padding:"0.5rem 0.75rem",fontSize:"1rem",flexGrow:1,border:"1px solid #000",borderRadius:0,apperance:"none",margin:0,width:0}}),Object(r.b)(h,{loading:o,css:{padding:"1rem"}},"Save"))}function y(e){var t=e.text,n=e.id,a=e.handleChange,o=(Object(f.a)(e,["text","id","handleChange"]),Object(d.useState)(!1)),i=Object(u.a)(o,2),l=i[0],b=i[1],p=Object(d.useState)(!1),m=Object(u.a)(p,2),g=m[0],x=m[1],j=Object(d.useState)(t),O=Object(u.a)(j,2),v=O[0],y=O[1],S=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(!0),e.next=4,a(n,v);case 4:x(!1),b(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return g?Object(r.b)(d.Fragment,null,Object(r.b)("form",{onSubmit:S,css:{position:"relative",flexGrow:1,display:"flex",padding:0,margin:0,zIndex:2}},Object(r.b)("input",{type:"text",value:v,onChange:function(e){return y(e.target.value)},autoFocus:!0,onKeyDown:function(e){return 27===e.keyCode?x(!1):null},css:{flexGrow:1,fontSize:"1.2rem",padding:"0.5rem",fontWeight:500,border:"1px solid #000",borderRadius:0,apperance:"none",margin:0,width:0}}),Object(r.b)(h,{loading:l},"Save")),Object(r.b)("div",{onClick:function(){return x(!1)},css:{position:"fixed",top:0,right:0,bottom:0,left:0,background:"transparent",zIndex:1}})):Object(r.b)("div",{onClick:function(){return x(!0)},css:{display:"inline-block",flexGrow:1,fontSize:"1.2rem",padding:"0.5rem",fontWeight:500}},v)}function S(e){var t=e.children,n=e.onClick,a=e.noLoadingReset,o=(Object(f.a)(e,["children","onClick","noLoadingReset"]),Object(d.useState)(!1)),i=Object(u.a)(o,2),l=i[0],b=i[1],p=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,n();case 3:a||b(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.b)("button",{type:"button",onClick:p,disabled:l,css:{background:"transparent",border:"none",apperance:"none",fontSize:"1rem",cursor:"pointer",lineHeight:1}},t)}function w(e){var t=e.items,n=e.removeItem,a=e.toggleItem,o=e.editItem;return Object(r.b)("ul",{css:{listStyle:"none",padding:0,margin:0}},t.sort((function(e,t){return e.isDone!==t.isDone?e.isDone?1:-1:t.id-e.id})).map((function(e){var t=e.id,i=e.text,c=e.isDone;return Object(r.b)("li",{key:t,css:{textDecoration:c?"line-through":"none",display:"flex",opacity:c?.3:1,marginBottom:"0.5rem"}},Object(r.b)(S,{onClick:function(){return a(t)}},Object(r.b)("span",{css:{position:"relative",display:"inline-block",width:"1.5rem",height:"1.5rem",border:"3px solid #000",textIndent:"-99999rem",color:"transparent",borderRadius:"3px",":before":{content:'""',display:c?"block":"none",position:"absolute",top:"0",left:"4px",width:"1.1rem",height:"0.55rem",borderBottom:"3px solid #000",borderLeft:"3px solid #000",transform:"rotate(-45deg)",zIndex:2},":after":{content:'""',display:c?"block":"none",position:"absolute",top:"-3px",right:"-3px",width:"0.5rem",height:"0.8rem",background:"#fff",zIndex:1}}},"Toggle this item")),Object(r.b)(y,{handleChange:o,text:i,id:t}),Object(r.b)(S,{onClick:function(){return n(t)},noLoadingReset:!0},Object(r.b)("span",{role:"img","aria-label":"Delete this item"},"\ud83d\uddd1")))})))}function k(e){var t=e.user,n=Object(d.useState)([]),a=Object(u.a)(n,2),o=a[0],i=a[1];Object(d.useEffect)((function(){Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/shopping");case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})))()}),[t]);var l=function(){var e=Object(s.a)(c.a.mark((function e(t,n,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!n){e.next=7;break}return e.next=4,j("/addshopping",{text:n});case 4:a=e.sent,i(a.shopping),r("");case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/toggleshopping",{id:t});case 2:n=e.sent,i(n.shopping);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/editshopping",{id:t,text:n});case 2:r=e.sent,i(r.shopping);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/deleteshopping",{id:t});case 2:n=e.sent,i(n.shopping);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.b)("div",{css:{maxWidth:"60rem",margin:"0 auto",padding:"2rem 4vw",background:"#fff",boxShadow:"rgba(0, 0, 0, 0.3) 0 0 30px",borderTop:"3px solid #000",borderBottom:"3px solid #000","@media (min-width: 60rem)":{borderRight:"3px solid #000",borderLeft:"3px solid #000"}}},Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},"Shopping"),Object(r.b)(v,{addItem:l}),o.length?Object(r.b)(w,{items:o,removeItem:m,toggleItem:b,editItem:p}):Object(r.b)("div",{css:{width:"2rem",height:"2rem",margin:"2rem auto",border:"3px solid #aaa",borderTopColor:"#000",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite")}}))}function C(){return Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},"Mort")}function R(){var e=Object(d.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(d.useState)(localStorage.getItem("dash-user")||null),i=Object(u.a)(o,2),p=i[0],f=i[1],g=Object(d.useState)(""),x=Object(u.a)(g,2),O=x[0],v=x[1],y=Object(d.useState)(!1),S=Object(u.a)(y,2),w=S[0],R=S[1],I=Object(d.useState)(""),z=Object(u.a)(I,2),T=z[0],L=z[1],D=Object(d.useState)(""),F=Object(u.a)(D,2),N=F[0],W=F[1];Object(d.useEffect)((function(){p&&Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("/navigation");case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),W(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[p]);var E={Shopping:Object(r.b)(k,{user:p}),Mort:Object(r.b)(C,{user:p})},U=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!T){e.next=16;break}return v(""),R(!0),e.prev=4,e.next=7,j("/checkuser",{user:T});case 7:"Found"===e.sent.user?(localStorage.setItem("dash-user",T),f(T)):v("User could not be found"),R(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),v("Unable to connect to the server: "+e.t0.toString()),R(!1);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.b)("main",{css:{textRendering:"optimizeLegibility",fontKerning:"auto",MozOsxFontSmoothing:"grayscale"}},p?Object(r.b)(d.Fragment,null,N?Object(r.b)("strong",{css:{display:"block",padding:"5rem 1rem",fontSize:"2rem",textAlign:"center"}},"An error occured trying to reach the server. Please try again later"):Object(r.b)(l.a,null,Object(r.b)("nav",{css:{display:"block",borderBottom:"3px solid #000",margin:"0 0 3rem 0",background:"#fff"}},Object(r.b)(m,{nav:n}),Object(r.b)("button",{type:"button",onClick:function(){localStorage.setItem("dash-user",""),f(null)},css:{display:"inline-block",float:"right",padding:"1rem",background:"transparent",border:"none",apperance:"none",fontSize:"1rem",cursor:"pointer"}},"Logout")),Object(r.b)(b.c,null,n.map((function(e){var t=e.name,n=e.url;return Object(r.b)(b.a,{exact:!0,path:n,key:n},E[t])}))))):Object(r.b)(d.Fragment,null,Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"20vw",margin:0,textAlign:"center",fontWeight:700,textShadow:"0 0.5rem 0.5rem #25514F"}},"Dash"),Object(r.b)("form",{onSubmit:U,css:{maxWidth:"60rem",background:"#fff",margin:"2rem auto",padding:"1rem 0.5rem",borderTop:"3px solid #000",borderBottom:"3px solid #000",boxShadow:"rgba(0, 0, 0, 0.3) 0 0 30px","@media (min-width: 500px)":{padding:"1.5rem"},"@media (min-width: 60rem)":{borderRight:"3px solid #000",borderLeft:"3px solid #000"}}},Object(r.b)("div",{css:{display:"flex"}},Object(r.b)("label",{htmlFor:"login",css:{display:"inline-block",marginRight:"0.5rem",fontSize:"1rem",alignSelf:"center",whiteSpace:"nowrap","@media (min-width: 500px)":{fontSize:"1.5rem"}}},"User login"),Object(r.b)("input",{id:"login",type:"text",value:T,onChange:function(e){return L(e.target.value)},css:{flexGrow:1,fontSize:"1.5rem",padding:"0.5rem",margin:0,border:"1px solid #000",borderRadius:0,apperance:"none",width:0}}),Object(r.b)(h,{loading:w},"Login")),O&&Object(r.b)("span",{css:{display:"block",marginTop:"0.5rem",color:"red"}},O))))}o.a.render(p.a.createElement(p.a.StrictMode,null,p.a.createElement(r.a,{styles:{body:{fontFamily:'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',lineHeight:1.2,margin:0,padding:0,background:"lightseagreen"},a:{color:"#000"},"*, *:before, *:after":{boxSizing:"border-box"}}}),p.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.4e91ac45.chunk.js.map