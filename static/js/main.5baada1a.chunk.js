(this.webpackJsonpdash=this.webpackJsonpdash||[]).push([[0],{23:function(e,t,n){e.exports=n(34)},34:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(1),o=n(20),a=n.n(o),i=n(2),c=n.n(i),s=n(5),u=n(6),l=n(12),b=n(3),p=n(0),d=n.n(p);function f(e){var t=e.nav,n=Object(b.f)().pathname;return 0===t.length?null:Object(r.b)("ul",{css:{display:"inline-block",listStyle:"none",padding:0,margin:0}},t.map((function(e){var t=e.name,o=e.url;return Object(r.b)("li",{key:o,css:{display:"inline-block",margin:"0 0.5rem"}},Object(r.b)(l.b,{to:o,css:{display:"inline-block",fontWeight:n===o?900:400,padding:"1rem",":hover":{textDecoration:"none"}}},t))})))}var m=n(22);function g(e){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(c.a.mark((function e(t){var n,r,o,a,i,s=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:{},r=localStorage.getItem("dash-user"),a="https://dominik-wilkowski.com/dash",!r&&!n.user){e.next=10;break}return e.next=6,fetch("".concat(a).concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(m.a)({user:r},n))});case 6:return i=e.sent,e.next=9,i.json();case 9:o=e.sent;case 10:return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){var t=e.addItem,n=Object(p.useState)(""),o=Object(u.a)(n,2),a=o[0],i=o[1];return Object(r.b)("form",{onSubmit:function(e){return t(e,a,i)},css:{display:"flex",margin:"2rem 0"}},Object(r.b)("input",{type:"text",value:a,onChange:function(e){return i(e.target.value)},css:{padding:"0.5rem 0.75rem",fontSize:"1rem",flexGrow:1,border:"1px solid #000"}}),Object(r.b)("button",{type:"submit",css:{padding:"1rem",background:"transparent",border:"1px solid #000",borderLeft:"none",apperance:"none",fontSize:"1rem",cursor:"pointer"}},"Save"))}var x=n(13);function O(e){var t=e.text,n=e.id,o=e.handleChange,a=(Object(x.a)(e,["text","id","handleChange"]),Object(p.useState)(!1)),i=Object(u.a)(a,2),l=i[0],b=i[1],d=Object(p.useState)(t),f=Object(u.a)(d,2),m=f[0],g=f[1],h=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o(n,m);case 3:b(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l?Object(r.b)("form",{onSubmit:h,css:{flexGrow:1,display:"flex",padding:0,margin:0}},Object(r.b)("input",{type:"text",value:m,onChange:function(e){return g(e.target.value)},autoFocus:!0,onBlur:function(){return b(!1)},onKeyDown:function(e){return 27===e.keyCode?b(!1):null},css:{flexGrow:1,fontSize:"1.2rem",padding:"0.5rem",fontWeight:500,border:"0",borderLeft:"none"}}),Object(r.b)("button",{type:"submit",css:{background:"transparent",border:"1px solid #000",borderLeft:"none",apperance:"none",fontSize:"1rem",cursor:"pointer",lineHeight:1}},"Save")):Object(r.b)("div",{onClick:function(){return b(!0)},css:{display:"inline-block",flexGrow:1,fontSize:"1.2rem",padding:"0.5rem",fontWeight:500}},m)}function v(e){var t=e.children,n=e.onClick,o=e.noLoadingReset,a=(Object(x.a)(e,["children","onClick","noLoadingReset"]),Object(p.useState)(!1)),i=Object(u.a)(a,2),l=i[0],b=i[1],d=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,n();case 3:o||b(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.b)("button",{type:"button",onClick:d,disabled:l,css:{background:"transparent",border:"none",apperance:"none",fontSize:"1rem",cursor:"pointer",lineHeight:1}},t)}function y(e){var t=e.items,n=e.removeItem,o=e.toggleItem,a=e.editItem;return Object(r.b)("ul",{css:{listStyle:"none",padding:0,margin:0}},t.sort((function(e,t){return e.isDone!==t.isDone?e.isDone?1:-1:t.id-e.id})).map((function(e){var t=e.id,i=e.text,c=e.isDone;return Object(r.b)("li",{key:t,css:{textDecoration:c?"line-through":"none",display:"flex",opacity:c?.3:1,marginBottom:"0.5rem"}},Object(r.b)(v,{onClick:function(){return o(t)}},Object(r.b)("span",{css:{position:"relative",display:"inline-block",width:"1.5rem",height:"1.5rem",border:"3px solid #000",textIndent:"-99999rem",color:"transparent",borderRadius:"3px",":before":{content:'""',display:c?"block":"none",position:"absolute",top:"0",left:"4px",width:"1.1rem",height:"0.55rem",borderBottom:"3px solid #000",borderLeft:"3px solid #000",transform:"rotate(-45deg)",zIndex:2},":after":{content:'""',display:c?"block":"none",position:"absolute",top:"-3px",right:"-3px",width:"0.5rem",height:"0.8rem",background:"#fff",zIndex:1}}},"Toggle this item")),Object(r.b)(O,{handleChange:a,text:i,id:t}),Object(r.b)(v,{onClick:function(){return n(t)},noLoadingReset:!0},Object(r.b)("span",{role:"img","aria-label":"Delete this item"},"\ud83d\uddd1")))})))}function S(e){var t=e.user,n=Object(p.useState)([]),o=Object(u.a)(n,2),a=o[0],i=o[1];Object(p.useEffect)((function(){Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/shopping");case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})))()}),[t]);var l=function(){var e=Object(s.a)(c.a.mark((function e(t,n,r){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,g("/addshopping",{text:n});case 3:o=e.sent,i(o.shopping),r("");case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/toggleshopping",{id:t});case 2:n=e.sent,i(n.shopping);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/editshopping",{id:t,text:n});case 2:r=e.sent,i(r.shopping);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/deleteshopping",{id:t});case 2:n=e.sent,i(n.shopping);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.b)("div",{css:{maxWidth:"60rem",margin:"0 auto",padding:"2rem 4vw",background:"#fff",boxShadow:"rgba(0, 0, 0, 0.3) 0 0 30px",border:"3px solid #000"}},Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},"Shopping"),Object(r.b)(j,{addItem:l}),Object(r.b)(y,{items:a,removeItem:f,toggleItem:b,editItem:d}))}function k(){return Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},"Mort")}function w(){var e=Object(p.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],a=Object(p.useState)(localStorage.getItem("dash-user")||null),i=Object(u.a)(a,2),d=i[0],m=i[1],h=Object(p.useState)(""),j=Object(u.a)(h,2),x=j[0],O=j[1],v=Object(p.useState)(""),y=Object(u.a)(v,2),w=y[0],C=y[1],I=Object(p.useState)(""),z=Object(u.a)(I,2),L=z[0],D=z[1];Object(p.useEffect)((function(){d&&Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("/navigation");case 3:t=e.sent,o(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),D(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[d]);var R={Shopping:Object(r.b)(S,{user:d}),Mort:Object(r.b)(k,{user:d})},T=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(""),e.next=4,g("/checkuser",{user:w});case 4:"Found"===e.sent.user?(localStorage.setItem("dash-user",w),m(w)):O("User could not be found");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.b)("main",{css:{textRendering:"optimizeLegibility",fontKerning:"auto",MozOsxFontSmoothing:"grayscale"}},d?Object(r.b)(p.Fragment,null,L?Object(r.b)("strong",{css:{display:"block",padding:"5rem 1rem",fontSize:"2rem",textAlign:"center"}},"An error occured trying to reach the server. Please try again later"):Object(r.b)(l.a,null,Object(r.b)("nav",{css:{display:"block",borderBottom:"3px solid #000",margin:"0 0 3rem 0",background:"#fff"}},Object(r.b)(f,{nav:n}),Object(r.b)("button",{type:"button",onClick:function(){localStorage.setItem("dash-user",""),m(null)},css:{display:"inline-block",float:"right",padding:"1rem",background:"transparent",border:"none",apperance:"none",fontSize:"1rem",cursor:"pointer"}},"Logout")),Object(r.b)(b.c,null,n.map((function(e){var t=e.name,n=e.url;return Object(r.b)(b.a,{exact:!0,path:n,key:n},R[t])}))))):Object(r.b)("form",{onSubmit:T,css:{display:"flex",maxWidth:"60rem",background:"#fff",margin:"5rem auto",padding:"1.5rem",border:"3px solid #000",boxShadow:"rgba(0, 0, 0, 0.3) 0 0 30px"}},Object(r.b)("label",{htmlFor:"login",css:{display:"inline-block",marginRight:"0.5rem",fontSize:"1.5rem",alignSelf:"center"}},"User login"),Object(r.b)("input",{id:"login",type:"text",value:w,onChange:function(e){return C(e.target.value)},css:{flexGrow:1,fontSize:"1.5rem",padding:"0.5rem",border:"1px solid #000"}}),Object(r.b)("button",{type:"submit",css:{background:"transparent",border:"1px solid #000",borderLeft:"none",apperance:"none",fontSize:"1rem",cursor:"pointer",lineHeight:1}},"Login"),x&&Object(r.b)("span",null,x)))}a.a.render(d.a.createElement(d.a.StrictMode,null,d.a.createElement(r.a,{styles:{body:{fontFamily:'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',lineHeight:1.2,margin:0,padding:0,background:"lightseagreen"},a:{color:"#000"},"*, *:before, *:after":{boxSizing:"border-box"}}}),d.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.5baada1a.chunk.js.map