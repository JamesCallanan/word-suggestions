(this["webpackJsonpword-suggestor"]=this["webpackJsonpword-suggestor"]||[]).push([[0],{45:function(t,n,e){},56:function(t,n){},58:function(t,n){},68:function(t,n){},70:function(t,n){},85:function(t,n){},91:function(t,n,e){},93:function(t,n,e){"use strict";e.r(n);var r=e(1),c=e.n(r),u=e(38),i=e.n(u),s=(e(45),e(23)),o=e.n(s),j=e(39),l=e(5),a=e(40),b=e.n(a),d=(e(91),e(0)),O="sl",h="ml",f="rel_rhy",x="rel_trg";var g=function(){var t=Object(r.useState)([]),n=Object(l.a)(t,2),e=n[0],c=n[1],u=Object(r.useState)([]),i=Object(l.a)(u,2),s=i[0],a=i[1],g=Object(r.useState)(5),p=Object(l.a)(g,2),k=p[0],v=p[1],m=Object(r.useState)([]),C=Object(l.a)(m,2),w=C[0],y=C[1],S=Object(r.useState)(5),A=Object(l.a)(S,2),F=A[0],W=A[1],N=Object(r.useState)([]),T=Object(l.a)(N,2),B=T[0],E=T[1],I=Object(r.useState)(5),J=Object(l.a)(I,2),L=J[0],M=J[1],P=Object(r.useState)([]),R=Object(l.a)(P,2),_=R[0],q=R[1],D=Object(r.useState)(5),z=Object(l.a)(D,2),G=z[0],H=z[1],K=Object(r.useRef)();Object(r.useEffect)((function(){""!==e&&(Q(e,h,F).then((function(t){return y(t)})),Q(e,O,L).then((function(t){return E(t)})),Q(e,f,k).then((function(t){return a(t)})),Q(e,x,G).then((function(t){return q(t)})))}),[e,k,G,F,L]);var Q=function(){var t=Object(j.a)(o.a.mark((function t(n,e,r){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.request("words?".concat(e,"=").concat(n,"&max=").concat(r));case 2:return c=t.sent,t.abrupt("return",c);case 4:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h1",{children:"Niall's word suggestor"}),Object(d.jsx)("input",{ref:K}),Object(d.jsx)("button",{onClick:function(){return c(K.current.value)},children:"Click me"})]}),Object(d.jsxs)("div",{className:"container",children:[Array.isArray(_)&&_.length?Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Trigger Words"}),Object(d.jsx)("button",{onClick:function(){return H((function(t){return t-5}))},disabled:5===G,children:"-"}),Object(d.jsx)("button",{onClick:function(){return H((function(t){return t+5}))},children:"+"}),_.map((function(t,n){return Object(d.jsx)("li",{children:t.word},n)}))]}):null,Array.isArray(s)&&s.length?Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Rhyme Words"}),Object(d.jsx)("button",{onClick:function(){return v((function(t){return t-5}))},disabled:5===k,children:"-"}),Object(d.jsx)("button",{onClick:function(){return v((function(t){return t+5}))},children:"+"}),s.map((function(t,n){return Object(d.jsx)("li",{children:t.word},n)}))]}):null,Array.isArray(B)&&B.length?Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Sounds like Words"}),Object(d.jsx)("button",{onClick:function(){return M((function(t){return t-5}))},disabled:5===L,children:"-"}),Object(d.jsx)("button",{onClick:function(){return M((function(t){return t+5}))},children:"+"}),B.map((function(t,n){return Object(d.jsx)("li",{children:t.word},n)}))]}):null,Array.isArray(w)&&w.length?Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Means like Words"}),Object(d.jsx)("button",{onClick:function(){return W((function(t){return t-5}))},disabled:5===F,children:"-"}),Object(d.jsx)("button",{onClick:function(){return W((function(t){return t+5}))},children:"+"}),w.map((function(t,n){return Object(d.jsx)("li",{children:t.word},n)}))]}):null]})]})},p=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,94)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,u=n.getLCP,i=n.getTTFB;e(t),r(t),c(t),u(t),i(t)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),p()}},[[93,1,2]]]);
//# sourceMappingURL=main.44ec65e6.chunk.js.map