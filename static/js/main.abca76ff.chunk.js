(this["webpackJsonpprogress-bar"]=this["webpackJsonpprogress-bar"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,c=a(0),o=a(2),r=a(6),s=a.n(r),l=a(4),i=Object(o.createContext)(),u=a(3),d=a(1),p="SET_PROGRESS",b="SET_TIMER",j="SET_CUSTOM_VALUE",m="SET_COLOR",f="SET_ANIMATE",O="SET_DONE_ANIMATE",y="ANIMATE_VALUE",h="SET_ANIMATE_TIME",v="SET_HIDE",x=(n={},Object(u.a)(n,p,(function(e,t){var a=t.payload;return Object(d.a)(Object(d.a)({},e),{},{progress:a})})),Object(u.a)(n,b,(function(e,t){var a=t.payload;return Object(d.a)(Object(d.a)({},e),{},{timer:a})})),Object(u.a)(n,j,(function(e,t){var a=t.payload;return Object(d.a)(Object(d.a)({},e),{},{customValue:a})})),Object(u.a)(n,m,(function(e,t){var a=t.payload;return Object(d.a)(Object(d.a)({},e),{},{strokeOuter:a})})),Object(u.a)(n,f,(function(e,t){var a=t.payload;return Object(d.a)(Object(d.a)({},e),{},{animate:a})})),Object(u.a)(n,O,(function(e,t){var a=t.payload;return Object(d.a)(Object(d.a)({},e),{},{doneAnimate:a})})),Object(u.a)(n,y,(function(e,t){var a=t.payload;return Object(d.a)(Object(d.a)({},e),{},{animateValue:a})})),Object(u.a)(n,h,(function(e,t){var a=t.payload;return Object(d.a)(Object(d.a)({},e),{},{animateTime:a})})),Object(u.a)(n,v,(function(e){return Object(d.a)(Object(d.a)({},e),{},{hide:!e.hide})})),Object(u.a)(n,"DEFAULT",(function(e){return e})),n),g=function(e,t){return(x[t.type]||x.DEFAULT)(e,t)},k=function(e){return e[Math.floor(Math.random()*e.length)]},N=function(e){if(e>=0)return{min:Math.floor(e/60),sec:e%60>9?e%60:"0".concat(e%60)}};var T=function(e){var t=e.children,a=Object(o.useReducer)(g,{progress:0,timer:"0:00",waitTime:3e3,customValue:"",defaultColor:"#20b7ff",colorArray:["#7ea9e1","#ed004f","#00fcf0","#d2fc00","#7bff00","#fa6900"],animate:!1,doneAnimate:!1,animateValue:"",animateTime:0,size:250,strokeWidth:15,strokeInner:"#ffffff",strokeOuter:"#20b7ff",hide:!1}),n=Object(l.a)(a,2),r=n[0],s=n[1],u=r.progress,d=r.timer,x=r.waitTime,T=r.customValue,A=r.defaultColor,_=r.colorArray,E=r.animate,I=r.doneAnimate,C=r.animateValue,V=r.animateTime,S=r.size,w=r.strokeWidth,M=r.strokeInner,R=r.strokeOuter,D=r.hide,L=V;return Object(c.jsx)(i.Provider,{value:{progress:u,timer:d,waitTime:x,customValue:T,animate:E,doneAnimate:I,animateValue:C,size:S,strokeWidth:w,strokeInner:M,strokeOuter:R,hide:D,onCustomValue:function(e){s({type:j,payload:e});var t=parseInt(e,10);t&&t>0?(t>100&&(t=100),s({type:p,payload:t})):s({type:p,payload:0})},onRandomValue:function(e){e.preventDefault(),s({type:p,payload:Math.floor(101*Math.random())}),s({type:j,payload:""})},onRandomColor:function(e){s(e?{type:m,payload:k(_)}:{type:m,payload:A})},onAnimateValue:function(e){s({type:y,payload:e}),s({type:h,payload:parseInt(e,10)});var t=N(parseInt(e,10));t&&s({type:b,payload:"".concat(t.min,":").concat(t.sec)})},onStartAnimate:function(e){if(e.checked)s({type:f,payload:!0}),s({type:j,payload:""}),window.intervalId=setInterval((function(){!function(e){L--;var t=Math.ceil((V-L)/V*100);if(s({type:p,payload:t}),0===L)clearInterval(window.intervalId),s({type:O,payload:!0}),setTimeout((function(){!function(e){e.checked=!1}(e),s({type:O,payload:!1}),s({type:f,payload:!1}),s({type:y,payload:""}),s({type:p,payload:0})}),x)}(e),function(){var e=N(L);s({type:b,payload:"".concat(e.min,":").concat(e.sec)})}()}),1e3);else{s({type:f,payload:!1}),s({type:p,payload:0});var t=N(L);s({type:b,payload:"".concat(t.min,":").concat(t.sec)}),clearInterval(window.intervalId)}},onHideBlock:function(){s({type:v})}},children:t})};a(12);var A=function(){var e=Object(o.useContext)(i),t=e.progress,a=e.timer,n=e.waitTime,r=e.doneAnimate,s=e.animateValue,u=e.size,d=e.strokeWidth,p=e.strokeInner,b=e.strokeOuter,j=e.hide,m=Object(o.useState)(0),f=Object(l.a)(m,2),O=f[0],y=f[1],h=Object(o.useRef)(null),v=u/2,x=u/2-d/2,g=2*Math.PI*x;return Object(o.useEffect)((function(){y((100-t)/100*g),h.current.style="transition: stroke-dashoffset 850ms ease-in-out"}),[t,g,O,y]),Object(c.jsx)("div",{className:"progress-panel",children:j?Object(c.jsx)("span",{className:"progress-hide",style:{width:"".concat(u,"px")},children:"Progress block is hidden!"}):Object(c.jsxs)("div",{className:"progress-block",style:{width:"".concat(u,"px")},children:[Object(c.jsxs)("span",{className:"progress-done",style:r?{opacity:"1"}:{},children:["Done! Wait ",n/1e3," sec"]}),Object(c.jsxs)("svg",{className:"progress-ring",width:u,height:u,children:[Object(c.jsx)("circle",{className:"progress-ring__inner",stroke:p,strokeWidth:d,cx:v,cy:v,r:x}),Object(c.jsx)("circle",{className:"progress-ring__outer",ref:h,stroke:b,strokeWidth:d,strokeDasharray:g,strokeDashoffset:O,cx:v,cy:v,r:x}),Object(c.jsxs)("text",{className:"progress-ring__percent",x:"".concat(v),y:"".concat(v),children:[t,"%"]})]}),Object(c.jsx)("span",{className:"progress-timer",style:s&&0!==Number(s)?{opacity:"1"}:{},children:a})]})})};a(13);var _=function(){var e=Object(o.useContext)(i),t=e.customValue,a=e.animate,n=e.animateValue,r=e.hide,s=e.onCustomValue,l=e.onRandomValue,u=e.onRandomColor,d=e.onAnimateValue,p=e.onStartAnimate,b=e.onHideBlock;return Object(c.jsxs)("form",{className:"control-panel",children:[Object(c.jsxs)("label",{className:"control-label",children:[Object(c.jsx)("input",{className:"control-label__input",onChange:function(e){return s(e.target.value)},value:t,type:"number",placeholder:"0",disabled:a||r}),"Custom value"]}),Object(c.jsx)("div",{className:"control-block",children:Object(c.jsx)("button",{className:"control-block__button",onClick:l,disabled:a||r})}),Object(c.jsxs)("label",{className:"control-label",children:[Object(c.jsx)("input",{onChange:function(e){return u(e.target.checked)},type:"checkbox",disabled:r}),"Random color"]}),Object(c.jsxs)("div",{className:"control-block",children:[Object(c.jsxs)("label",{className:"control-label",children:[Object(c.jsx)("input",{className:"control-label__input",onChange:function(e){return d(e.target.value)},value:n,type:"number",placeholder:"0",disabled:a||r}),"Seconds"]}),Object(c.jsxs)("label",{className:"control-label",children:[Object(c.jsx)("input",{onChange:function(e){return p(e.target)},type:"checkbox",disabled:!n||0===Number(n)||r}),"Animate"]})]}),Object(c.jsxs)("label",{className:"control-label",children:[Object(c.jsx)("input",{onChange:b,type:"checkbox",disabled:a}),"Hide progress panel"]})]})};a(14);var E=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(A,{}),Object(c.jsx)(_,{})]})},I=(a(15),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))});s.a.render(Object(c.jsx)(T,{children:Object(c.jsx)(E,{})}),document.getElementById("root")),I()}],[[16,1,2]]]);
//# sourceMappingURL=main.abca76ff.chunk.js.map