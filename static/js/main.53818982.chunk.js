(this.webpackJsonpdash=this.webpackJsonpdash||[]).push([[0],{37:function(e,t,n){e.exports=n(50)},50:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(1),a=n(17),i=n.n(a),o=n(2),c=n.n(o),s=n(6),b=n(4),u=n(27),d=n(7),f=n(0),l=n.n(f);function p(e){var t=e.nav,n=Object(d.f)().pathname;return 0===t.length?null:Object(r.b)("ul",{css:{display:"inline-block",listStyle:"none",padding:"0 0 0 0",margin:0,width:"100%",overflow:"auto",whiteSpace:"nowrap"}},t.map((function(e){var t=e.name,a=e.url;return Object(r.b)("li",{key:a,css:{display:"inline-block",margin:"0 0.5rem"}},Object(r.b)(u.b,{to:a,css:{display:"inline-block",fontWeight:n===a?900:400,padding:"1rem",":hover":{textDecoration:"none"}}},t))})))}var m=n(10),g=Object(r.c)({to:{transform:"rotate( 360deg )"}});function O(e){var t=e.children,n=e.loading,a=Object(m.a)(e,["children","loading"]);return Object(r.b)("button",Object.assign({type:"submit",disabled:n,css:{position:"relative",background:"transparent",border:"1px solid #000",borderLeft:"none",apperance:"none",fontSize:"1rem",cursor:"pointer",lineHeight:1,margin:0,color:n?"transparent":"#000",fontWeight:400,":after":{content:'""',display:n?"block":"none",position:"absolute",top:"10px",left:"50%",marginLeft:"-0.75rem",width:"1.5rem",height:"1.5rem",border:"3px solid #aaa",borderTopColor:"#000",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite")}}},a),t)}var j=n(15);n(48);function h(e){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(c.a.mark((function e(t){var n,r,a,i,o,s=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:{},r=localStorage.getItem("dash-user"),i="https://dominik-wilkowski.com/dash",!r&&!n.user){e.next=10;break}return e.next=6,fetch("".concat(i).concat(t),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(j.a)({user:r},n))});case 6:return o=e.sent,e.next=9,o.json();case 9:a=e.sent;case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=n(25);function y(e){var t=e.children,n=Object(m.a)(e,["children"]);return Object(r.b)("div",Object.assign({css:{maxWidth:"60rem",margin:"0 auto",padding:"2rem 4vw",background:"#fff",boxShadow:"rgba(0, 0, 0, 0.3) 0 0 30px",borderTop:"3px solid #000",borderBottom:"3px solid #000","@media (min-width: 60rem)":{borderRight:"3px solid #000",borderLeft:"3px solid #000"}}},n),t)}var w=n(36),k=n(19);function S(){var e=Object(f.useState)("#50C9C3 -webkit-radial-gradient(left bottom, #5f2c82, #49a09d) repeat fixed 0% 0%"),t=Object(b.a)(e,2),n=t[0],a=t[1],i=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/gettrash");case 2:t=e.sent,n=Object(k.a)(t.yellow),Object(w.a)(new Date,n)%2===1?a("#F09819 -webkit-radial-gradient(left bottom, #F09819, #EDDE5D) repeat fixed 0% 0%"):a("#3a7bd5 -webkit-radial-gradient(left bottom, #3a7bd5, #00d2ff) repeat fixed 0% 0%");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.useEffect)((function(){return i(),window.addEventListener("focus",i,!1),function(){return window.removeEventListener("focus",i,!1)}}),[]),Object(r.b)(r.a,{styles:{body:{background:n}}})}function D(e){var t=e.addItem,n=e.input,a=e.setInput,i=Object(f.useState)(!1),o=Object(b.a)(i,2),u=o[0],d=o[1],l=function(){var e=Object(s.a)(c.a.mark((function e(n,r,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,t(n,r,a);case 3:d(!1);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return Object(r.b)("form",{onSubmit:function(e){return l(e,n,a)},css:{display:"flex",margin:"2rem 0"}},Object(r.b)("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)},css:{padding:"0.5rem 0.75rem",fontSize:"1rem",flexGrow:1,border:"1px solid #000",borderRadius:0,apperance:"none",margin:0,width:0}}),Object(r.b)(O,{loading:u,css:{padding:"1rem"}},"Save"))}function C(e){var t=e.text,n=e.id,a=e.handleChange,i=Object(m.a)(e,["text","id","handleChange"]),o=Object(f.useState)(!1),u=Object(b.a)(o,2),d=u[0],l=u[1],p=Object(f.useState)(!1),g=Object(b.a)(p,2),j=g[0],h=g[1],v=Object(f.useState)(t),x=Object(b.a)(v,2),y=x[0],w=x[1],k=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l(!0),e.next=4,a(n,y);case 4:h(!1),l(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return j?Object(r.b)(f.Fragment,null,Object(r.b)("form",Object.assign({onSubmit:k,css:{position:"relative",flexGrow:1,display:"flex",padding:0,margin:0,zIndex:2}},i),Object(r.b)("input",{type:"text",value:y,onChange:function(e){return w(e.target.value)},autoFocus:!0,onKeyDown:function(e){return 27===e.keyCode?h(!1):null},css:{flexGrow:1,fontSize:"1.2rem",padding:"0.5rem",fontWeight:500,border:"1px solid #000",borderRadius:0,apperance:"none",margin:0,width:0}}),Object(r.b)(O,{loading:d},"Save")),Object(r.b)("div",{onClick:function(){w(t),h(!1)},css:{position:"fixed",top:0,right:0,bottom:0,left:0,background:"transparent",zIndex:1}})):Object(r.b)("div",{onClick:function(){return h(!0)},css:{display:"inline-block",flexGrow:1,fontSize:"1.2rem",padding:"0.5rem",fontWeight:500}},y)}function I(e){var t=e.children,n=e.onClick,a=e.noLoadingReset,i=Object(m.a)(e,["children","onClick","noLoadingReset"]),o=Object(f.useState)(!1),u=Object(b.a)(o,2),d=u[0],l=u[1],p=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(!0),!n){e.next=4;break}return e.next=4,n();case 4:a||l(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.b)("button",Object.assign({type:"button",onClick:p,disabled:d,css:{position:"relative",background:"transparent",border:"none",apperance:"none",fontSize:"1rem",cursor:"pointer",lineHeight:1,":after":{content:'""',display:d?"block":"none",position:"absolute",top:"12px",left:"50%",marginLeft:"-0.5rem",width:"1rem",height:"1rem",border:"3px solid #aaa",borderTopColor:"#000",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite")}}},i),Object(r.b)("span",{css:{opacity:d?0:1}},t))}var z=Object(f.forwardRef)((function(e,t){var n=e.toggle,a=e.toggleItem,i=e.removeItem,o=e.id,c=e.isDone,s=e.editItem,b=e.text,u=Object(m.a)(e,["toggle","toggleItem","removeItem","id","isDone","editItem","text"]);return Object(r.b)("li",Object.assign({css:{textDecoration:c?"line-through":"none",display:"flex",opacity:c?.3:1,marginBottom:"0.5rem"},ref:t},u),n&&Object(r.b)(I,{onClick:function(){return a(o)}},Object(r.b)("span",{css:{position:"relative",display:"inline-block",width:"1.5rem",height:"1.5rem",border:"3px solid #000",textIndent:"-99999rem",color:"transparent",borderRadius:"3px",":before":{content:'""',display:c?"block":"none",position:"absolute",top:"0",left:"4px",width:"1.1rem",height:"0.55rem",borderBottom:"3px solid #000",borderLeft:"3px solid #000",transform:"rotate(-45deg)",zIndex:2},":after":{content:'""',display:c?"block":"none",position:"absolute",top:"-3px",right:"-3px",width:"0.5rem",height:"0.8rem",background:"#fff",zIndex:1}}},"Mark this item as",c?" not done":" done")),Object(r.b)(C,{handleChange:s,text:b,id:o}),Object(r.b)(I,{onClick:function(){return i(o)},noLoadingReset:!0},Object(r.b)("span",{role:"img","aria-label":"Delete this item"},"\ud83d\uddd1\ufe0f")))}));function T(e){var t=e.undoneItems,n=e.doneItems,a=e.removeItem,i=e.toggle,o=e.toggleItem,c=e.editItem;e.sort,e.loading;return Array.isArray(t)||(t=[]),Array.isArray(n)||(n=[]),Object(r.b)(f.Fragment,null,Object(r.b)(x.c,{droppableId:"todo_list"},(function(e,n){return Object(r.b)("ul",Object.assign({},e.droppableProps,{ref:e.innerRef,css:{listStyle:"none",padding:0,margin:0}}),t.map((function(e,t){var n=e.id,s=e.text,b=e.isDone;return Object(r.b)(x.b,{key:n+s,draggableId:n+s,index:t,isDragDisabled:b},(function(e,t){return Object(r.b)(z,Object.assign({toggle:i,toggleItem:o,removeItem:a,id:n,isDone:b,editItem:c,text:s,ref:e.innerRef},e.draggableProps,e.dragHandleProps))}))})),e.placeholder)})),Object(r.b)("ul",{css:{listStyle:"none",padding:0,margin:t.length>0||n.length>0?"0 0 -4rem":0}},n.map((function(e,t){var n=e.id,s=e.text,b=e.isDone;return Object(r.b)(z,{key:n+s,toggle:i,toggleItem:o,removeItem:a,id:n,isDone:b,editItem:c,text:s})}))),t.length+n.length===0?Object(r.b)("div",{css:{textAlign:"center",fontSize:"1.5rem",color:"#a8a8a8"}},"Nothing found"):null)}function E(e){var t=e.path,n=void 0===t?"shopping":t,a=e.toggle,i=void 0===a||a,o=e.trash,u=void 0!==o&&o,d=e.sort,l=void 0===d||d,p=e.name,m=void 0===p?"Shopping":p,j=Object(f.useState)([]),v=Object(b.a)(j,2),w=v[0],k=v[1],C=Object(f.useState)(!0),I=Object(b.a)(C,2),z=I[0],E=I[1],R=Object(f.useState)(!1),L=Object(b.a)(R,2),A=L[0],N=L[1],F=Object(f.useState)(""),M=Object(b.a)(F,2),P=M[0],W=M[1],B=Object(f.useState)([]),H=Object(b.a)(B,2),U=H[0],G=H[1],J=Object(f.useState)([]),K=Object(b.a)(J,2),$=K[0],_=K[1];""===(n=n.replaceAll("/",""))&&(n="shopping");var q=Object(f.useCallback)(Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("/".concat(n));case 3:t=e.sent,k(t),E(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),E(!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[k,E,n]);Object(f.useEffect)((function(){return q(),window.addEventListener("focus",q,!1),function(){return window.removeEventListener("focus",q,!1)}}),[q]),Object(f.useEffect)((function(){l?(G(w.filter((function(e){return!e.isDone})).sort((function(e,t){return t.id-e.id}))),_(w.filter((function(e){return e.isDone})).sort((function(e,t){return e.text.localeCompare(t.text)})))):(G(w.filter((function(e){return!e.isDone}))),_(w.filter((function(e){return e.isDone}))))}),[w,l]);var Q=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,q();case 3:N(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(s.a)(c.a.mark((function e(t,r,a){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!r){e.next=7;break}return e.next=4,h("/add".concat(n),{text:r});case 4:i=e.sent,k(i[n]),a("");case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),X=function(){var e=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/toggle".concat(n),{id:t});case 2:r=e.sent,k(r[n]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(s.a)(c.a.mark((function e(t,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/edit".concat(n),{id:t,text:r});case 2:a=e.sent,k(a[n]);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=function(){var e=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/delete".concat(n),{id:t});case 2:r=e.sent,k(r[n]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.destination){e.next=2;break}return e.abrupt("return");case 2:return E(!0),e.next=5,h("/order".concat(n),{sourceId:U[t.source.index].id,destinationId:U[t.destination.index].id});case 5:r=e.sent,k(r[n]),E(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.b)(y,null,u&&Object(r.b)(S,null),Object(r.b)("div",{css:{position:"relative"}},Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},m),Object(r.b)(O,{loading:A,css:{padding:"0.3rem",borderLeft:"1px solid #000",position:"absolute",top:0,right:0,borderRadius:"5px",fontSize:"0.7rem",":after":{top:"4px",marginLeft:"-0.45rem",width:".9rem",height:".9rem"}},onClick:Q},"refresh")),Object(r.b)(D,{addItem:V,input:P,setInput:W}),Object(r.b)("div",{css:{position:"relative",paddingBottom:"4rem",background:z?"repeating-linear-gradient(45deg,#fff,#fff 10px,#ddd 10px,#ddd 20px);":"transparent",transition:"all ease 0.4s"}},z&&Object(r.b)("div",{css:{position:"absolute",top:"1rem",left:"50%",marginLeft:"-1rem",width:"2rem",height:"2rem",border:"3px solid #aaa",borderTopColor:"#000",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite"),zIndex:999}}),Object(r.b)("div",{css:{filter:z?"blur(3px)":"none",transition:"filter ease 0.4s"}},Object(r.b)(x.a,{onDragEnd:ee},Object(r.b)(T,{undoneItems:U.filter((function(e){return e.text.includes(P)})),doneItems:$.filter((function(e){return e.text.includes(P)})),removeItem:Z,toggle:i,toggleItem:X,editItem:Y,sort:l,loading:z})))))}var R=n(22),L=n(21),A=n(20),N=n(28),F=n(13);function M(){return Object(r.b)("div",{css:{backgroundImage:"linear-gradient(45deg, #ffffff 31.25%, #f2f2f2 31.25%, #f2f2f2 50%, #ffffff 50%, #ffffff 81.25%, #f2f2f2 81.25%, #f2f2f2 100%)",backgroundSize:"11.31px 11.31px"}})}function P(e){var t=e.children,n=e.size,a=void 0===n?"sm":n,i=Object(m.a)(e,["children","size"]);return Object(r.b)("button",Object.assign({css:Object(j.a)({background:"#fff",border:"1px solid #000",apperance:"none",cursor:"pointer",padding:"0.25rem",lineHeight:1,":disabled":{opacity:0,cursor:"default"}},{sm:{},lg:{fontSize:"1rem"}}[a])},i),t)}function W(){var e=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],t=Object(f.useState)(Object(A.a)(new Date)),n=Object(b.a)(t,2),a=n[0],i=n[1],o=Object(f.useState)(Object(L.a)(new Date)),u=Object(b.a)(o,2),d=u[0],l=u[1],p=Object(f.useState)(Object(R.a)(new Date(a,d))),m=Object(b.a)(p,2),O=m[0],v=m[1],x=Object(f.useState)(!0),w=Object(b.a)(x,2),k=w[0],S=w[1],D=Object(f.useState)([]),C=Object(b.a)(D,2),I=C[0],z=C[1];Object(f.useEffect)((function(){var e=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/energy");case 2:t=e.sent,z(t),S(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e(),window.addEventListener("focus",e,!1),function(){return window.removeEventListener("focus",e,!1)}}),[]);var T=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,h("/addenergy",{date:t});case 3:n=e.sent,z(n.energy),S(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,h("/deleteenergy",{date:t});case 3:n=e.sent,z(n.energy),S(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;e<0&&(e=11,t--),e>11&&(e=0,t++),i(t),l(e),v(Object(R.a)(new Date(t,e)))};return Object(r.b)(y,null,Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},"Energy"),Object(r.b)("div",{css:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},Object(r.b)(P,{size:"lg",onClick:function(){return W(d-1)}},"Back a month"),Object(r.b)(P,{size:"lg",onClick:function(){return W(Object(L.a)(new Date),Object(A.a)(new Date))}},"Today"),Object(r.b)(P,{size:"lg",onClick:function(){return W(d+1)}},"Forward a month")),Object(r.b)("h2",null,Object(F.a)(new Date(a,d,O),"MMM")," ",a),Object(r.b)("div",{css:{position:"relative",display:"grid",gridTemplateColumns:"repeat(7, 1fr)",borderTop:"1px solid #888",borderBottom:"1px solid #888",background:"#888",margin:"0 -4vw",gap:"1px","@media (min-width: 500px)":{margin:"0",border:"1px solid #888"},":before":{content:'""',display:k?"block":"none",position:"absolute",top:0,right:0,bottom:0,left:0,background:"rgba(0, 0, 0, 0.4)",zIndex:2},":after":{content:'""',display:k?"block":"none",position:"absolute",top:"50%",left:"50%",width:"4rem",height:"4rem",margin:"-2rem 0 0 -2rem",border:"6px solid #fff",borderTopColor:"#555",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite"),zIndex:3},"@supports not (display: grid)":{overflow:"hidden",display:"block","& > div":{float:"left",width:"14.2857142857%",height:"86px",border:"1px solid #888"},"& .header":{height:"35px"},"& div:nth-child(7n + 1)":{clear:"left"}}}},e.map((function(e){return Object(r.b)("div",{className:"header",key:e,css:{background:"#fff",padding:"0.5rem",textAlign:"center"}},e)})),Array(e.indexOf(Object(F.a)(new Date(a,d,1),"EEE"))).fill().map((function(e,t){return Object(r.b)(M,{key:"non-".concat(t)})})),Array(O).fill().map((function(e,t){var n=new Date(a,d,t+1),i=Object(F.a)(n,"yyyy-MM-dd"),o=Object(N.a)(n,new Date),c=I.includes(i)?{background:"linear-gradient(to right, #00f76b, #11ffbd)"}:{background:"#fff",backgroundImage:"linear-gradient(45deg, #ffffff 31.25%, #aaa 31.25%, #aaa 50%, #ffffff 50%, #ffffff 81.25%, #aaa 81.25%, #aaa 100%)",backgroundSize:"11.31px 11.31px"};return o&&(c={background:"#fff"}),Object(r.b)("div",{key:t,css:Object(j.a)({position:"relative",padding:"1.75rem 0.5rem 0.5rem 0.5rem"},c)},Object(r.b)("span",{css:{position:"absolute",fontSize:"0.75rem",top:0,right:0,margin:"0",background:"#fff",padding:"0.25rem 0.5rem"}},Object(F.a)(n,"d")),Object(r.b)("div",{css:{position:"absolute",left:0,right:"1.6rem",top:0,display:"grid",gridTemplateColumns:"repeat(5, 1fr)",padding:"0.25rem",justifyItems:"center"}},I[i]&&Array(I[i]).fill().map((function(e,t){return Object(r.b)("span",{key:"dot-".concat(t),css:{display:"inline-block",background:"#fff",borderRadius:"100%",width:"0.5rem",height:"0.5rem"}})}))),Object(r.b)(P,{onClick:function(){return T(i)},disabled:o,css:{display:"block",width:"100%",borderColor:"transparent"}},Object(r.b)("span",{role:"img","aria-label":"Tick"},"\u2714\ufe0f")),Object(r.b)(P,{onClick:function(){return E(i)},disabled:o,css:{marginTop:"0.5rem",float:"right",borderColor:"transparent"}},"\ud83c\udd67"))})),Array(6-e.indexOf(Object(F.a)(new Date(a,d,O),"EEE"))).fill().map((function(e,t){return Object(r.b)(M,{key:"non2-".concat(t)})}))))}function B(){return Object(r.b)(E,{name:"Goals",path:"goals",toggle:!1,trash:!1})}var H=n(26);function U(){return Object(r.b)("div",{css:{backgroundImage:"linear-gradient(45deg, #ffffff 31.25%, #f2f2f2 31.25%, #f2f2f2 50%, #ffffff 50%, #ffffff 81.25%, #f2f2f2 81.25%, #f2f2f2 100%)",backgroundSize:"11.31px 11.31px"}})}function G(e){var t=e.children,n=e.size,a=void 0===n?"sm":n,i=Object(m.a)(e,["children","size"]);return Object(r.b)("button",Object.assign({css:Object(j.a)({background:"#fff",border:"1px solid #000",apperance:"none",cursor:"pointer",padding:"0.25rem",lineHeight:1,":disabled":{opacity:0,cursor:"default"}},{sm:{},lg:{fontSize:"1rem"}}[a])},i),t)}function J(){var e=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],t=Object(f.useState)(Object(A.a)(new Date)),n=Object(b.a)(t,2),a=n[0],i=n[1],o=Object(f.useState)(Object(L.a)(new Date)),u=Object(b.a)(o,2),d=u[0],l=u[1],p=Object(f.useState)(Object(R.a)(new Date(a,d))),m=Object(b.a)(p,2),O=m[0],v=m[1],x=Object(f.useState)(!0),w=Object(b.a)(x,2),S=w[0],D=w[1],C=Object(f.useState)({}),I=Object(b.a)(C,2),z=I[0],T=I[1],E=Object(f.useState)([]),M=Object(b.a)(E,2),P=M[0],W=M[1],B=Object(f.useState)(0),J=Object(b.a)(B,2),K=J[0],$=J[1],_=Object(f.useState)(0),q=Object(b.a)(_,2),Q=q[0],V=q[1],X=function(e){var t=[],n=0,r=Object.keys(e);r.forEach((function(e,a){if(a>0){var i=Object(H.a)(Object(k.a)(e),Object(k.a)(r[a-1]));t.push({streak:i,from:r[a-1],to:e}),i>n&&(n=i)}})),W(t),$(n),V(Object(H.a)(new Date,Object(k.a)(r[r.length-1])))};Object(f.useEffect)((function(){var e=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/mort");case 2:t=e.sent,T(t),X(t),D(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e(),window.addEventListener("focus",e,!1),function(){return window.removeEventListener("focus",e,!1)}}),[]);var Y=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.next=3,h("/addmort",{date:t});case 3:n=e.sent,T(n.mort),D(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(s.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.next=3,h("/deletemort",{date:t});case 3:n=e.sent,T(n.mort),D(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;e<0&&(e=11,t--),e>11&&(e=0,t++),i(t),l(e),v(Object(R.a)(new Date(t,e)))};return Object(r.b)(y,null,Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},"Mort"),Object(r.b)("div",{css:{overflow:"hidden",margin:"1rem 0"}},Object(r.b)("div",{css:{width:"50%",float:"left"}},Object(r.b)("strong",{css:{display:"block"}},"Longest streak"),K," days"),Object(r.b)("div",{css:{width:"50%",float:"left",textAlign:"right"}},Object(r.b)("strong",{css:{display:"block"}},"Current streak"),Q," days")),Object(r.b)("div",{css:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem"}},Object(r.b)(G,{size:"lg",onClick:function(){return ee(d-1)}},"Back a month"),Object(r.b)(G,{size:"lg",onClick:function(){return ee(Object(L.a)(new Date),Object(A.a)(new Date))}},"Today"),Object(r.b)(G,{size:"lg",onClick:function(){return ee(d+1)}},"Forward a month")),Object(r.b)("h2",null,Object(F.a)(new Date(a,d,O),"MMM")," ",a),Object(r.b)("div",{css:{position:"relative",display:"grid",gridTemplateColumns:"repeat(7, 1fr)",borderTop:"1px solid #888",borderBottom:"1px solid #888",background:"#888",margin:"0 -4vw",gap:"1px","@media (min-width: 500px)":{margin:"0",border:"1px solid #888"},":before":{content:'""',display:S?"block":"none",position:"absolute",top:0,right:0,bottom:0,left:0,background:"rgba(0, 0, 0, 0.4)",zIndex:2},":after":{content:'""',display:S?"block":"none",position:"absolute",top:"50%",left:"50%",width:"4rem",height:"4rem",margin:"-2rem 0 0 -2rem",border:"6px solid #fff",borderTopColor:"#555",borderRadius:"100%",animation:"".concat(g," 0.6s linear infinite"),zIndex:3},"@supports not (display: grid)":{overflow:"hidden",display:"block","& > div":{float:"left",width:"14.2857142857%",height:"86px",border:"1px solid #888"},"& .header":{height:"35px"},"& div:nth-child(7n + 1)":{clear:"left"}}}},e.map((function(e){return Object(r.b)("div",{className:"header",key:e,css:{background:"#fff",padding:"0.5rem",textAlign:"center"}},e)})),Array(e.indexOf(Object(F.a)(new Date(a,d,1),"EEE"))).fill().map((function(e,t){return Object(r.b)(U,{key:"non-".concat(t)})})),Array(O).fill().map((function(e,t){var n=new Date(a,d,t+1),i=Object(F.a)(n,"yyyy-MM-dd"),o=Object(N.a)(n,new Date),c=z[i]?{background:"linear-gradient(to right, #ff416c, #ff4b2b)",color:"#fff"}:{background:"#11FFBD"};return o&&(c={background:"#fff"}),Object(r.b)("div",{key:t,css:Object(j.a)({position:"relative",padding:"1.75rem 0.5rem 0.5rem 0.5rem"},c)},Object(r.b)("span",{css:{position:"absolute",fontSize:"0.75rem",top:0,right:0,margin:"0.5rem 0.5rem 0 0"}},Object(F.a)(n,"d")),Object(r.b)("div",{css:{position:"absolute",left:0,right:"1.6rem",top:0,display:"grid",gridTemplateColumns:"repeat(5, 1fr)",padding:"0.25rem",justifyItems:"center"}},z[i]&&Array(z[i]).fill().map((function(e,t){return Object(r.b)("span",{key:"dot-".concat(t),css:{display:"inline-block",background:"#fff",borderRadius:"100%",width:"0.5rem",height:"0.5rem"}})}))),Object(r.b)(G,{onClick:function(){return Y(i)},disabled:o,css:{display:"block",width:"100%"}},"+"),Object(r.b)(G,{onClick:function(){return Z(i)},disabled:o,css:{display:"block",width:"100%",marginTop:"0.5rem"}},"-"))})),Array(6-e.indexOf(Object(F.a)(new Date(a,d,O),"EEE"))).fill().map((function(e,t){return Object(r.b)(U,{key:"non2-".concat(t)})}))),Object(r.b)("strong",{title:"A total of ".concat(P.length," streaks"),css:{marginTop:"2rem",display:"block"}},"All streaks"),Object(r.b)("ul",null,P.map((function(e,t){var n=e.streak,a=e.from,i=e.to;return Object(r.b)("li",{key:t,title:"".concat(a," - ").concat(i)},n," days")}))))}function K(){var e=Object(f.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(f.useState)(""),o=Object(b.a)(i,2),u=o[0],d=o[1],l=Object(f.useState)(!1),p=Object(b.a)(l,2),m=p[0],g=p[1];Object(f.useEffect)((function(){Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/getdb");case 2:t=e.sent,a(JSON.stringify(t,null,"\t"));case 4:case"end":return e.stop()}}),e)})))()}),[]);var j=function(){var e=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(!0),d(""),e.prev=3,JSON.parse(n),e.next=7,h("/writedb",{content:n});case 7:r=e.sent,a(JSON.stringify(r,null,"\t")),g(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),d(e.t0.toString()),g(!1);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.b)(y,null,Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"3.5rem",margin:"0 0 1rem 0",textAlign:"center",fontWeight:700}},"Database"),Object(r.b)("form",{onSubmit:j},Object(r.b)("textarea",{value:n,onChange:function(e){return a(e.target.value)},css:{MozTabSize:"2",OTabSize:"2",tabSize:"2",width:"100%",height:"30rem",apperance:"none",border:u?"1px solid red":"1px solid #000",padding:"1rem"}}),u&&Object(r.b)("span",{css:{display:"block",color:"red",margin:"0.5rem 0"}},u),Object(r.b)(O,{loading:m,css:{fontSize:"1.5rem",borderLeft:"1px solid #000",padding:"0.5rem",":after":{top:"9px"}}},"Save")))}function $(){var e=Object(f.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(f.useState)(localStorage.getItem("dash-user")||null),o=Object(b.a)(i,2),l=o[0],m=o[1],g=Object(f.useState)(""),j=Object(b.a)(g,2),v=j[0],x=j[1],y=Object(f.useState)(""),w=Object(b.a)(y,2),k=w[0],S=w[1],D=Object(f.useState)(!1),C=Object(b.a)(D,2),I=C[0],z=C[1],T=Object(f.useState)(""),R=Object(b.a)(T,2),L=R[0],A=R[1],N=Object(f.useState)(""),F=Object(b.a)(N,2),M=F[0],P=F[1];Object(f.useEffect)((function(){l&&Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("/navigation");case 3:t=e.sent,a(t.navigation),x(t.version),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),P(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[l]);var H={Shopping:function(e,t){return Object(r.b)(E,{name:e,path:t})},Energy:function(e,t){return Object(r.b)(W,{name:e,path:t})},Goals:function(e,t){return Object(r.b)(B,{name:e,path:t})},Mort:function(e,t){return Object(r.b)(J,{name:e,path:t})},Db:function(e,t){return Object(r.b)(K,{name:e,path:t})}},U=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!L){e.next=16;break}return S(""),z(!0),e.prev=4,e.next=7,h("/checkuser",{user:L});case 7:"Found"===e.sent.user?(localStorage.setItem("dash-user",L),m(L)):S("User could not be found"),z(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),S("Unable to connect to the server: "+e.t0.toString()),z(!1);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.b)("main",{css:{textRendering:"optimizeLegibility",fontKerning:"auto",MozOsxFontSmoothing:"grayscale"}},l?Object(r.b)(f.Fragment,null,M?Object(r.b)("strong",{css:{display:"block",padding:"5rem 1rem",fontSize:"2rem",textAlign:"center"}},"An error occured trying to reach the server. Please try again later"):Object(r.b)(u.a,null,Object(r.b)("nav",{css:{position:"relative",display:"block",borderBottom:"3px solid #000",margin:"0 0 3rem 0",background:"#fff"}},Object(r.b)(p,{nav:n})),Object(r.b)(d.c,null,n.map((function(e){var t=e.name,n=e.url,a=e.component;return Object(r.b)(d.a,{exact:!0,path:n,key:t+n},H[a](t,n))}))))):Object(r.b)(f.Fragment,null,Object(r.b)("h1",{css:{fontFamily:'"Playfair Display", "PT Serif", Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif',fontStyle:"italic",fontSize:"20vw",margin:0,textAlign:"center",fontWeight:700,textShadow:"0 0.5rem 0.5rem #25514F"}},"Dash"),Object(r.b)("form",{onSubmit:U,css:{maxWidth:"60rem",background:"#fff",margin:"2rem auto",padding:"1rem 0.5rem",borderTop:"3px solid #000",borderBottom:"3px solid #000",boxShadow:"rgba(0, 0, 0, 0.3) 0 0 30px","@media (min-width: 500px)":{padding:"1.5rem"},"@media (min-width: 60rem)":{borderRight:"3px solid #000",borderLeft:"3px solid #000"}}},Object(r.b)("div",{css:{display:"flex"}},Object(r.b)("label",{htmlFor:"login",css:{display:"inline-block",marginRight:"0.5rem",fontSize:"1rem",alignSelf:"center",whiteSpace:"nowrap","@media (min-width: 500px)":{fontSize:"1.5rem"}}},"User login"),Object(r.b)("input",{id:"login",type:"text",value:L,onChange:function(e){return A(e.target.value)},css:{flexGrow:1,fontSize:"1.5rem",padding:"0.5rem",margin:0,border:"1px solid #000",borderRadius:0,apperance:"none",width:0}}),Object(r.b)(O,{loading:I},"Login")),k&&Object(r.b)("span",{css:{display:"block",marginTop:"0.5rem",color:"red"}},k))),Object(r.b)("div",{css:{fontSize:"0.7rem",color:"#fff",padding:"0.5rem",display:"grid",gridTemplateColumns:"1fr 1fr"}},Object(r.b)("div",{css:{padding:"1rem"}},"v",v),Object(r.b)("div",{css:{textAlign:"right"}},Object(r.b)("button",{type:"button",onClick:function(){localStorage.setItem("dash-user",""),m(null)},css:{padding:"1rem",color:"#fff",background:"transparent",border:"none",apperance:"none",cursor:"pointer"}},"Logout"))))}i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r.a,{styles:{body:{fontFamily:'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',lineHeight:1.2,margin:0,padding:0,background:"#fff -webkit-radial-gradient(left bottom, rgba(95, 44, 130, 0.7), rgba(73, 160, 157, 0.7)) repeat fixed 0% 0%"},a:{color:"#000"},"*, *:before, *:after":{boxSizing:"border-box"}}}),l.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.53818982.chunk.js.map