(this["webpackJsonpprogress-bar"]=this["webpackJsonpprogress-bar"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,o=a(5),r=a.n(o),c=a(3),s=a(2),l=a(1);!function(e){e.SET_PROGRESS="SET_PROGRESS",e.SET_TIME="SET_TIME",e.SET_CUSTOM_VALUE="SET_CUSTOM_VALUE",e.SET_COLOR="SET_COLOR",e.SET_START_ANIMATE="SET_START_ANIMATE",e.SET_DONE_ANIMATE="SET_DONE_ANIMATE",e.SET_ANIMATE_VALUE="SET_ANIMATE_VALUE",e.SET_ANIMATE_TIME="SET_ANIMATE_TIME",e.SET_HIDE_PROGRESS="SET_HIDE_PROGRESS"}(n||(n={}));var i=function(e,t){switch(t.type){case n.SET_PROGRESS:return Object(l.a)(Object(l.a)({},e),{},{progress:t.payload});case n.SET_TIME:return Object(l.a)(Object(l.a)({},e),{},{timer:t.payload});case n.SET_CUSTOM_VALUE:return Object(l.a)(Object(l.a)({},e),{},{customValue:t.payload});case n.SET_COLOR:return Object(l.a)(Object(l.a)({},e),{},{strokeOuter:t.payload});case n.SET_START_ANIMATE:return Object(l.a)(Object(l.a)({},e),{},{startAnimate:t.payload});case n.SET_DONE_ANIMATE:return Object(l.a)(Object(l.a)({},e),{},{doneAnimate:t.payload});case n.SET_ANIMATE_VALUE:return Object(l.a)(Object(l.a)({},e),{},{animateValue:t.payload});case n.SET_ANIMATE_TIME:return Object(l.a)(Object(l.a)({},e),{},{animateTime:t.payload});case n.SET_HIDE_PROGRESS:return Object(l.a)(Object(l.a)({},e),{},{hideProgress:!e.hideProgress});default:return e}},d=function(e){return parseInt(e,10)},u=a(0),E={progress:0,timer:"0:00",customValue:"",startAnimate:!1,doneAnimate:!1,animateValue:"",animateTime:0,hideProgress:!1,sizeRing:250,strokeWidth:15,strokeInner:"#fff",strokeOuter:"#20b7ff",defaultColor:"#20b7ff",colorArray:["#7ea9e1","#ed004f","#00fcf0","#d2fc00","#7bff00","#fa6900"]},_=Object(s.createContext)({state:E}),T=function(e){var t=e.children,a=Object(s.useReducer)(i,E),o=Object(c.a)(a,2),r=o[0],l=o[1],T=function(e){var t,a=(t=e,{min:Math.floor(t/60),sec:t%60>9?t%60:"0".concat(t%60)});l({type:n.SET_TIME,payload:"".concat(a.min,":").concat(a.sec)})};return Object(u.jsx)(_.Provider,{value:{state:r,onCustomValue:function(e){l({type:n.SET_CUSTOM_VALUE,payload:e});var t=d(e);t&&t>0?(t>100&&(t=100),l({type:n.SET_PROGRESS,payload:t})):l({type:n.SET_PROGRESS,payload:0})},onRandomValue:function(){l({type:n.SET_CUSTOM_VALUE,payload:""}),l({type:n.SET_PROGRESS,payload:Math.floor(101*Math.random())})},onRandomColor:function(e){var t;l(e?{type:n.SET_COLOR,payload:(t=r.colorArray,t[Math.floor(Math.random()*t.length)])}:{type:n.SET_COLOR,payload:r.defaultColor})},onAnimateValue:function(e){l({type:n.SET_ANIMATE_VALUE,payload:e}),l({type:n.SET_ANIMATE_TIME,payload:d(e)}),T(e?d(e):0)},onStartAnimate:function(e){e?(l({type:n.SET_PROGRESS,payload:0}),l({type:n.SET_CUSTOM_VALUE,payload:""}),l({type:n.SET_START_ANIMATE,payload:!0})):(l({type:n.SET_PROGRESS,payload:0}),l({type:n.SET_ANIMATE_TIME,payload:d(r.animateValue)}),l({type:n.SET_START_ANIMATE,payload:!1}),T(d(r.animateValue)))},onHideProgress:function(){l({type:n.SET_HIDE_PROGRESS})},resetProgress:function(){l({type:n.SET_PROGRESS,payload:0}),l({type:n.SET_ANIMATE_VALUE,payload:""}),l({type:n.SET_START_ANIMATE,payload:!1}),l({type:n.SET_DONE_ANIMATE,payload:!1})},finalCountdown:function(){var e=d(r.animateValue),t=r.animateTime-1,a=Math.ceil((e-t)/e*100);l({type:n.SET_PROGRESS,payload:a}),T(t),0===t&&l({type:n.SET_DONE_ANIMATE,payload:!0}),l({type:n.SET_ANIMATE_TIME,payload:t})}},children:t})},p=(a(11),function(){var e=Object(s.useState)(0),t=Object(c.a)(e,2),a=t[0],n=t[1],o=Object(s.useContext)(_).state,r=o.progress,l=o.timer,i=o.doneAnimate,d=o.animateValue,E=o.sizeRing,T=o.strokeInner,p=o.strokeOuter,S=o.strokeWidth,O=o.hideProgress,b=E/2,j=E/2-S/2,m=2*Math.PI*j;return Object(s.useEffect)((function(){n((100-r)/100*m)}),[r,m,a,n]),Object(u.jsx)("div",{className:O?"progress progress_hide":"progress",children:Object(u.jsxs)("div",{className:"progress__block",style:{width:"".concat(E,"px")},children:[Object(u.jsx)("span",{className:"progress__done",style:i?{opacity:"1"}:{},children:"Done!"}),Object(u.jsxs)("svg",{className:"progress__ring",width:E,height:E,children:[Object(u.jsx)("circle",{className:"progress__inner",stroke:T,strokeWidth:S,cx:b,cy:b,r:j}),Object(u.jsx)("circle",{className:"progress__outer",stroke:p,strokeWidth:S,strokeDasharray:m,strokeDashoffset:a,cx:b,cy:b,r:j,transform:"rotate(-90, ".concat(b,", ").concat(b,")")}),Object(u.jsxs)("text",{className:"progress__percent",x:"".concat(b),y:"".concat(b),children:[r,"%"]})]}),Object(u.jsx)("span",{className:"progress__timer",style:d&&0!==Number(d)?{opacity:"1"}:{},children:l})]})})}),S=(a(12),function(){var e=Object(s.useContext)(_),t=e.state,a=e.onCustomValue,n=e.onRandomValue,o=e.onRandomColor,r=e.onAnimateValue,c=e.onStartAnimate,l=e.onHideProgress,i=e.finalCountdown,d=e.resetProgress,E=t.customValue,T=t.startAnimate,p=t.animateValue,S=t.animateTime,O=t.hideProgress,b=t.doneAnimate;return Object(s.useEffect)((function(){return T&&0!==S?window.intervalId=setInterval((function(){i()}),1e3):clearInterval(window.intervalId),function(){return clearInterval(window.intervalId)}}),[T,S]),Object(s.useEffect)((function(){return b?window.timeoutId=setTimeout((function(){d()}),3e3):clearTimeout(window.timeoutId),function(){return clearTimeout(window.timeoutId)}}),[b]),Object(u.jsxs)("div",{className:"control",children:[Object(u.jsxs)("label",{className:"control__label",children:[Object(u.jsx)("input",{className:"control__input",onChange:function(e){return a(e.target.value)},value:E,type:"number",placeholder:"0",disabled:T||O}),"Custom value"]}),Object(u.jsx)("div",{className:"control__block",children:Object(u.jsx)("button",{className:"control__button",onClick:n,disabled:T||O})}),Object(u.jsxs)("label",{className:"control__label",children:[Object(u.jsx)("input",{onChange:function(e){return o(e.target.checked)},type:"checkbox",disabled:O}),"Random color"]}),Object(u.jsxs)("div",{className:"control__block",children:[Object(u.jsxs)("label",{className:"control__label",children:[Object(u.jsx)("input",{className:"control__input",onChange:function(e){return r(e.target.value)},value:p,type:"number",placeholder:"0",disabled:T||O}),"Seconds"]}),Object(u.jsxs)("label",{className:"control__label",children:[Object(u.jsx)("input",{onChange:function(e){return c(e.target.checked)},type:"checkbox",checked:T,disabled:!p||0===Number(p)||O}),"Animate"]})]}),Object(u.jsxs)("label",{className:"control__label",children:[Object(u.jsx)("input",{onChange:l,type:"checkbox",checked:O,disabled:T}),"Hide progress"]})]})}),O=(a(13),function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(p,{}),Object(u.jsx)(S,{})]})}),b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),r(e),c(e)}))};a(14);r.a.render(Object(u.jsx)(T,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),b()}],[[15,1,2]]]);
//# sourceMappingURL=main.62bd963a.chunk.js.map