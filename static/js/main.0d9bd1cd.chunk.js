(this.webpackJsonpdash=this.webpackJsonpdash||[]).push([[0],{35:function(e,t,n){e.exports=n(47)},47:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(1),a=n(31),o=n.n(a),i=n(3),c=n.n(i),s=n(6),b=n(5),u=n(21),l=n(7),d=n(0),f=n.n(d);function p(e){var t=e.nav,n=Object(l.f)().pathname;return 0===t.length?null:Object(r.b)("ul",{css:{display:"inline-block",listStyle:"none",padding:"0 5rem 0 0",margin:0,width:"calc(100% - 5rem)",overflow:"auto",whiteSpace:"nowrap"}},t.map((function(e){var t=e.name,a=e.url;return Object(r.b)("li",{key:a,css:{display:"inline-block",margin:"0 0.5rem"}},Object(r.b)(u.b,{to:a,css:{display:"inline-block",fontWeight:n===a?900:400,padding:"1rem",":hover":{textDecoration:"none"}}},t))})))}var m=n(13),g=Object(r.c)({to:{transform:"rotate( 360deg )"}});function O(e){var t=e.children,n=e.loading,a=Object(m.a)(e,["children","loading"]);return Object(r.b)("button",Object.assign({type:"submit",disabled:n,css:{position:"relative",background:"transparent",border:"1px solid #000",borderLeft:"none",apperance:"none",fontSize:"1rem",cursor:"pointer",lineHeight:1,margin:0,color:n?"transparent":null,":after":{content:'""',display:n?"block":"none",position:"absolute",top:"10px",left:"50%",marginLeft:"-0.75rem",width:"1.5rem",height:"1.5rem",border:"3px solid #aaa",borderTopColor:"#000",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite")}}},a),t)}var j=n(19);n(46);function h(e){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(c.a.mark((function e(t){var n,r,a,o,i,s=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:{},r=localStorage.getItem("dash-user"),o="https://dominik-wilkowski.com/dash",!r&&!n.user){e.next=10;break}return e.next=6,fetch("".concat(o).concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(j.a)({user:r},n))});case 6:return i=e.sent,e.next=9,i.json();case 9:a=e.sent;case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var t=e.children,n=Object(m.a)(e,["children"]);return Object(r.b)("div",Object.assign({css:{maxWidth:"60rem",margin:"0 auto",padding:"2rem 4vw",background:"#fff",boxShadow:"rgba(0, 0, 0, 0.3) 0 0 30px",borderTop:"3px solid #000",borderBottom:"3px solid #000","@media (min-width: 60rem)":{borderRight:"3px solid #000",borderLeft:"3px solid #000"}}},n),t)}var w=n(34),y=n(15);function k(){var e=Object(d.useState)("#50C9C3 -webkit-radial-gradient(left bottom, #5f2c82, #49a09d) repeat fixed 0% 0%"),t=Object(b.a)(e,2),n=t[0],a=t[1],o=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/gettrash");case 2:t=e.sent,n=Object(y.a)(t.yellow),Object(w.a)(new Date,n)%2===1?a("#F09819 -webkit-radial-gradient(left bottom, #F09819, #EDDE5D) repeat fixed 0% 0%"):a("#3a7bd5 -webkit-radial-gradient(left bottom, #3a7bd5, #00d2ff) repeat fixed 0% 0%");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){return o(),window.addEventListener("focus",o,!1),function(){return window.removeEventListener("focus",o,!1)}}),[]),Object(r.b)(r.a,{styles:{body:{background:n}}})}function S(e){var t=e.addItem,n=Object(d.useState)(!1),a=Object(b.a)(n,2),o=a[0],i=a[1],u=Object(d.useState)(""),l=Object(b.a)(u,2),f=l[0],p=l[1],m=function(){var e=Object(s.a)(c.a.mark((function e(n,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,t(n,r,a);case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return Object(r.b)("form",{onSubmit:function(e){return m(e,f,p)},css:{display:"flex",margin:"2rem 0"}},Object(r.b)("input",{type:"text",value:f,onChange:function(e){return p(e.target.value)},css:{padding:"0.5rem 0.75rem",fontSize:"1rem",flexGrow:1,border:"1px solid #000",borderRadius:0,apperance:"none",margin:0,width:0}}),Object(r.b)(O,{loading:o,css:{padding:"1rem"}},"Save"))}function C(e){var t=e.text,n=e.id,a=e.handleChange,o=Object(m.a)(e,["text","id","handleChange"]),i=Object(d.useState)(!1),u=Object(b.a)(i,2),l=u[0],f=u[1],p=Object(d.useState)(!1),g=Object(b.a)(p,2),j=g[0],h=g[1],v=Object(d.useState)(t),x=Object(b.a)(v,2),w=x[0],y=x[1],k=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(!0),e.next=4,a(n,w);case 4:h(!1),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return j?Object(r.b)(d.Fragment,null,Object(r.b)("form",Object.assign({onSubmit:k,css:{position:"relative",flexGrow:1,display:"flex",padding:0,margin:0,zIndex:2}},o),Object(r.b)("input",{type:"text",value:w,onChange:function(e){return y(e.target.value)},autoFocus:!0,onKeyDown:function(e){return 27===e.keyCode?h(!1):null},css:{flexGrow:1,fontSize:"1.2rem",padding:"0.5rem",fontWeight:500,border:"1px solid #000",borderRadius:0,apperance:"none",margin:0,width:0}}),Object(r.b)(O,{loading:l},"Save")),Object(r.b)("div",{onClick:function(){return h(!1)},css:{position:"fixed",top:0,right:0,bottom:0,left:0,background:"transparent",zIndex:1}})):Object(r.b)("div",{onClick:function(){return h(!0)},css:{display:"inline-block",flexGrow:1,fontSize:"1.2rem",padding:"0.5rem",fontWeight:500}},w)}function z(e){var t=e.children,n=e.onClick,a=e.noLoadingReset,o=Object(m.a)(e,["children","onClick","noLoadingReset"]),i=Object(d.useState)(!1),u=Object(b.a)(i,2),l=u[0],f=u[1],p=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(!0),!n){e.next=4;break}return e.next=4,n();case 4:a||f(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.b)("button",Object.assign({type:"button",onClick:p,disabled:l,css:{position:"relative",background:"transparent",border:"none",apperance:"none",fontSize:"1rem",cursor:"pointer",lineHeight:1,":after":{content:'""',display:l?"block":"none",position:"absolute",top:"12px",left:"50%",marginLeft:"-0.5rem",width:"1rem",height:"1rem",border:"3px solid #aaa",borderTopColor:"#000",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite")}}},o),Object(r.b)("span",{css:{opacity:l?0:1}},t))}function D(e){var t=e.items,n=e.removeItem,a=e.toggle,o=e.toggleItem,i=e.editItem,c=e.sort?t.sort((function(e,t){return e.isDone!==t.isDone?e.isDone?1:-1:t.id-e.id})):t;return Object(r.b)("ul",{css:{listStyle:"none",padding:0,margin:0}},c.map((function(e){var t=e.id,c=e.text,s=e.isDone;return Object(r.b)("li",{key:t,css:{textDecoration:s?"line-through":"none",display:"flex",opacity:s?.3:1,marginBottom:"0.5rem"}},a&&Object(r.b)(z,{onClick:function(){return o(t)}},Object(r.b)("span",{css:{position:"relative",display:"inline-block",width:"1.5rem",height:"1.5rem",border:"3px solid #000",textIndent:"-99999rem",color:"transparent",borderRadius:"3px",":before":{content:'""',display:s?"block":"none",position:"absolute",top:"0",left:"4px",width:"1.1rem",height:"0.55rem",borderBottom:"3px solid #000",borderLeft:"3px solid #000",transform:"rotate(-45deg)",zIndex:2},":after":{content:'""',display:s?"block":"none",position:"absolute",top:"-3px",right:"-3px",width:"0.5rem",height:"0.8rem",background:"#fff",zIndex:1}}},"Toggle this item")),Object(r.b)(C,{handleChange:i,text:c,id:t}),Object(r.b)(z,{onClick:function(){return n(t)},noLoadingReset:!0},Object(r.b)("span",{role:"img","aria-label":"Delete this item"},"\ud83d\uddd1")))})))}function T(e){var t=e.route,n=void 0===t?"shopping":t,a=e.toggle,o=void 0===a||a,i=e.trash,u=void 0===i||i,l=e.sort,f=void 0===l||l,p=Object(d.useState)([]),m=Object(b.a)(p,2),O=m[0],j=m[1],v=Object(d.useState)(!0),w=Object(b.a)(v,2),y=w[0],C=w[1];Object(d.useEffect)((function(){var e=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/".concat(n));case 2:t=e.sent,j(t),C(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e(),window.addEventListener("focus",e,!1),function(){return window.removeEventListener("focus",e,!1)}}),[n]);var z=function(){var e=Object(s.a)(c.a.mark((function e(t,r,a){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!r){e.next=7;break}return e.next=4,h("/add".concat(n),{text:r});case 4:o=e.sent,j(o[n]),a("");case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),T=function(){var e=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/toggle".concat(n),{id:t});case 2:r=e.sent,j(r[n]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(c.a.mark((function e(t,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/edit".concat(n),{id:t,text:r});case 2:a=e.sent,j(a[n]);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/delete".concat(n),{id:t});case 2:r=e.sent,j(r[n]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.b)(x,null,u&&Object(r.b)(k,null),Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},n.charAt(0).toUpperCase()+n.slice(1)),Object(r.b)(S,{addItem:z}),y?Object(r.b)("div",{css:{width:"2rem",height:"2rem",margin:"2rem auto",border:"3px solid #aaa",borderTopColor:"#000",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite")}}):Object(r.b)(D,{items:O,removeItem:L,toggle:o,toggleItem:T,editItem:R,sort:f}))}function R(){return Object(r.b)(T,{route:"goals",toggle:!1,trash:!1,sort:!1})}var L=n(20),E=n(27),I=n(26),F=n(25),N=n(33),A=n(16);function M(){return Object(r.b)("div",{css:{backgroundImage:"linear-gradient(45deg, #ffffff 31.25%, #f2f2f2 31.25%, #f2f2f2 50%, #ffffff 50%, #ffffff 81.25%, #f2f2f2 81.25%, #f2f2f2 100%)",backgroundSize:"11.31px 11.31px"}})}function W(e){var t=e.children,n=e.size,a=void 0===n?"sm":n,o=Object(m.a)(e,["children","size"]);return Object(r.b)("button",Object.assign({css:Object(j.a)({background:"#fff",border:"1px solid #000",apperance:"none",cursor:"pointer",padding:"0.25rem",lineHeight:1,":disabled":{opacity:0,cursor:"default"}},{sm:{},lg:{fontSize:"1rem"}}[a])},o),t)}function B(){var e=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],t=Object(d.useState)(Object(F.a)(new Date)),n=Object(b.a)(t,2),a=n[0],o=n[1],i=Object(d.useState)(Object(I.a)(new Date)),u=Object(b.a)(i,2),l=u[0],f=u[1],p=Object(d.useState)(Object(E.a)(new Date(a,l))),m=Object(b.a)(p,2),O=m[0],v=m[1],w=Object(d.useState)(!0),k=Object(b.a)(w,2),S=k[0],C=k[1],z=Object(d.useState)({}),D=Object(b.a)(z,2),T=D[0],R=D[1],B=Object(d.useState)(0),U=Object(b.a)(B,2),P=U[0],H=U[1],G=Object(d.useState)(0),J=Object(b.a)(G,2),K=J[0],$=J[1],q=function(e){var t=0,n=Object.keys(e);n.forEach((function(e,r){if(r>0){var a=Object(L.a)(Object(y.a)(e),Object(y.a)(n[r-1]));a>t&&(t=a)}})),H(t),$(Object(L.a)(new Date,Object(y.a)(n[n.length-1])))};Object(d.useEffect)((function(){var e=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/mort");case 2:t=e.sent,R(t),q(t),C(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e(),window.addEventListener("focus",e,!1),function(){return window.removeEventListener("focus",e,!1)}}),[]);var Q=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,h("/addmort",{date:t});case 3:n=e.sent,R(n.mort),C(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,h("/deletemort",{date:t});case 3:n=e.sent,R(n.mort),C(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;e<1&&(e=12,t--),e>12&&(e=1,t++),o(t),f(e),v(Object(E.a)(new Date(t,e)))};return Object(r.b)(x,null,Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},"Mort"),Object(r.b)("div",{css:{overflow:"hidden",margin:"1rem 0"}},Object(r.b)("div",{css:{width:"50%",float:"left"}},Object(r.b)("strong",{css:{display:"block"}},"Longest streak"),P),Object(r.b)("div",{css:{width:"50%",float:"left",textAlign:"right"}},Object(r.b)("strong",{css:{display:"block"}},"Current streak"),K)),Object(r.b)("div",{css:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},Object(r.b)(W,{size:"lg",onClick:function(){return X(l-1)}},"Back a month"),Object(r.b)(W,{size:"lg",onClick:function(){return X(Object(I.a)(new Date),Object(F.a)(new Date))}},"Today"),Object(r.b)(W,{size:"lg",onClick:function(){return X(l+1)}},"Forward a month")),Object(r.b)("h2",null,Object(A.a)(new Date(a,l,O),"MMM")," ",a),Object(r.b)("div",{css:{position:"relative",display:"grid",gridTemplateColumns:"repeat(7, 1fr)",borderTop:"1px solid #888",borderBottom:"1px solid #888",background:"#888",margin:"0 -4vw",gap:"1px","@media (min-width: 500px)":{margin:"0",border:"1px solid #888"},":before":{content:'""',display:S?"block":"none",position:"absolute",top:0,right:0,bottom:0,left:0,background:"rgba(0, 0, 0, 0.4)",zIndex:2},":after":{content:'""',display:S?"block":"none",position:"absolute",top:"50%",left:"50%",width:"4rem",height:"4rem",margin:"-2rem 0 0 -2rem",border:"6px solid #fff",borderTopColor:"#555",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite"),zIndex:3},"@supports not (display: grid)":{overflow:"hidden",display:"block","& > div":{float:"left",width:"14.2857142857%",height:"86px",border:"1px solid #888"},"& .header":{height:"35px"},"& div:nth-child(7n + 1)":{clear:"left"}}}},e.map((function(e){return Object(r.b)("div",{className:"header",key:e,css:{background:"#fff",padding:"0.5rem",textAlign:"center"}},e)})),Array(e.indexOf(Object(A.a)(new Date(a,l,1),"EEE"))).fill().map((function(e,t){return Object(r.b)(M,{key:"non-".concat(t)})})),Array(O).fill().map((function(e,t){var n=new Date(a,l,t+1),o=Object(A.a)(n,"yyyy-MM-dd"),i=Object(N.a)(n,new Date),c=T[o]?{background:"linear-gradient(to right, #ff416c, #ff4b2b)",color:"#fff"}:{background:"#11FFBD"};return i&&(c={background:"#fff"}),Object(r.b)("div",{key:t,css:Object(j.a)({position:"relative",padding:"1.75rem 0.5rem 0.5rem 0.5rem"},c)},Object(r.b)("span",{css:{position:"absolute",fontSize:"0.75rem",top:0,right:0,margin:"0.5rem 0.5rem 0 0"}},Object(A.a)(n,"d")),Object(r.b)("div",{css:{position:"absolute",left:0,right:"1.6rem",top:0,display:"grid",gridTemplateColumns:"repeat(5, 1fr)",padding:"0.25rem",justifyItems:"center"}},T[o]&&Array(T[o]).fill().map((function(e,t){return Object(r.b)("span",{key:"dot-".concat(t),css:{display:"inline-block",background:"#fff",borderRadius:"100%",width:"0.5rem",height:"0.5rem"}})}))),Object(r.b)(W,{onClick:function(){return Q(o)},disabled:i,css:{display:"block",width:"100%"}},"+"),Object(r.b)(W,{onClick:function(){return V(o)},disabled:i,css:{display:"block",width:"100%",marginTop:"0.5rem"}},"-"))})),Array(6-e.indexOf(Object(A.a)(new Date(a,l,O),"EEE"))).fill().map((function(e,t){return Object(r.b)(M,{key:"non2-".concat(t)})}))))}function U(){var e=Object(d.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],o=Object(d.useState)(""),i=Object(b.a)(o,2),u=i[0],l=i[1],f=Object(d.useState)(!1),p=Object(b.a)(f,2),m=p[0],g=p[1];Object(d.useEffect)((function(){Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/getdb");case 2:t=e.sent,a(JSON.stringify(t,null,"\t"));case 4:case"end":return e.stop()}}),e)})))()}),[]);var j=function(){var e=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(!0),l(""),e.prev=3,JSON.parse(n),e.next=7,h("/writedb",{content:n});case 7:r=e.sent,a(JSON.stringify(r,null,"\t")),g(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),l(e.t0.toString()),g(!1);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.b)(x,null,Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},"Database"),Object(r.b)("form",{onSubmit:j},Object(r.b)("textarea",{value:n,onChange:function(e){return a(e.target.value)},css:{MozTabSize:"2",OTabSize:"2",tabSize:"2",width:"100%",height:"30rem",apperance:"none",border:u?"1px solid red":"1px solid #000",padding:"1rem"}}),u&&Object(r.b)("span",{css:{display:"block",color:"red",margin:"0.5rem 0"}},u),Object(r.b)(O,{loading:m,css:{fontSize:"1.5rem",borderLeft:"1px solid #000",padding:"0.5rem",":after":{top:"9px"}}},"Save")))}function P(){var e=Object(d.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],o=Object(d.useState)(localStorage.getItem("dash-user")||null),i=Object(b.a)(o,2),f=i[0],m=i[1],g=Object(d.useState)(""),j=Object(b.a)(g,2),v=j[0],x=j[1],w=Object(d.useState)(!1),y=Object(b.a)(w,2),k=y[0],S=y[1],C=Object(d.useState)(""),z=Object(b.a)(C,2),D=z[0],L=z[1],E=Object(d.useState)(""),I=Object(b.a)(E,2),F=I[0],N=I[1];Object(d.useEffect)((function(){f&&Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("/navigation");case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),N(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[f]);var A={Shopping:Object(r.b)(T,null),Goals:Object(r.b)(R,null),Mort:Object(r.b)(B,null),Db:Object(r.b)(U,null)},M=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!D){e.next=16;break}return x(""),S(!0),e.prev=4,e.next=7,h("/checkuser",{user:D});case 7:"Found"===e.sent.user?(localStorage.setItem("dash-user",D),m(D)):x("User could not be found"),S(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),x("Unable to connect to the server: "+e.t0.toString()),S(!1);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.b)("main",{css:{textRendering:"optimizeLegibility",fontKerning:"auto",MozOsxFontSmoothing:"grayscale"}},f?Object(r.b)(d.Fragment,null,F?Object(r.b)("strong",{css:{display:"block",padding:"5rem 1rem",fontSize:"2rem",textAlign:"center"}},"An error occured trying to reach the server. Please try again later"):Object(r.b)(u.a,null,Object(r.b)("nav",{css:{position:"relative",display:"block",borderBottom:"3px solid #000",margin:"0 0 3rem 0",background:"#fff"}},Object(r.b)(p,{nav:n}),Object(r.b)("button",{type:"button",onClick:function(){localStorage.setItem("dash-user",""),m(null)},css:{position:"absolute",top:0,right:0,display:"inline-block",padding:"1rem",background:"transparent",border:"none",apperance:"none",fontSize:"1rem",cursor:"pointer"}},"Logout")),Object(r.b)(l.c,null,n.map((function(e){var t=e.name,n=e.url;return Object(r.b)(l.a,{exact:!0,path:n,key:n},A[t])}))))):Object(r.b)(d.Fragment,null,Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"20vw",margin:0,textAlign:"center",fontWeight:700,textShadow:"0 0.5rem 0.5rem #25514F"}},"Dash"),Object(r.b)("form",{onSubmit:M,css:{maxWidth:"60rem",background:"#fff",margin:"2rem auto",padding:"1rem 0.5rem",borderTop:"3px solid #000",borderBottom:"3px solid #000",boxShadow:"rgba(0, 0, 0, 0.3) 0 0 30px","@media (min-width: 500px)":{padding:"1.5rem"},"@media (min-width: 60rem)":{borderRight:"3px solid #000",borderLeft:"3px solid #000"}}},Object(r.b)("div",{css:{display:"flex"}},Object(r.b)("label",{htmlFor:"login",css:{display:"inline-block",marginRight:"0.5rem",fontSize:"1rem",alignSelf:"center",whiteSpace:"nowrap","@media (min-width: 500px)":{fontSize:"1.5rem"}}},"User login"),Object(r.b)("input",{id:"login",type:"text",value:D,onChange:function(e){return L(e.target.value)},css:{flexGrow:1,fontSize:"1.5rem",padding:"0.5rem",margin:0,border:"1px solid #000",borderRadius:0,apperance:"none",width:0}}),Object(r.b)(O,{loading:k},"Login")),v&&Object(r.b)("span",{css:{display:"block",marginTop:"0.5rem",color:"red"}},v))))}o.a.render(f.a.createElement(f.a.StrictMode,null,f.a.createElement(r.a,{styles:{body:{fontFamily:'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',lineHeight:1.2,margin:0,padding:0,background:"#50C9C3 -webkit-radial-gradient(left bottom, #5f2c82, #49a09d) repeat fixed 0% 0%"},a:{color:"#000"},"*, *:before, *:after":{boxSizing:"border-box"}}}),f.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.0d9bd1cd.chunk.js.map