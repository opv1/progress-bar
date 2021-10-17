(this["webpackJsonpprogress-bar"]=this["webpackJsonpprogress-bar"]||[]).push([[0],{24:function(e,n,t){"use strict";t.r(n);var o,a=t(10),r=t.n(a),i=t(5),c=t(2),l=t(1);!function(e){e.SET_THEME="SET_THEME",e.SET_PROGRESS="SET_PROGRESS",e.SET_TIME="SET_TIME",e.SET_CUSTOM_VALUE="SET_CUSTOM_VALUE",e.SET_COLOR="SET_COLOR",e.SET_START_ANIMATE="SET_START_ANIMATE",e.SET_DONE_ANIMATE="SET_DONE_ANIMATE",e.SET_ANIMATE_VALUE="SET_ANIMATE_VALUE",e.SET_ANIMATE_TIME="SET_ANIMATE_TIME",e.SET_HIDE_PROGRESS="SET_HIDE_PROGRESS"}(o||(o={}));var u,s,d,p,f,b,h,m,x,E,j,O,T,y,S,g,_,A=function(e,n){switch(n.type){case o.SET_THEME:return Object(c.a)(Object(c.a)({},e),{},{theme:n.payload});case o.SET_PROGRESS:return Object(c.a)(Object(c.a)({},e),{},{progress:n.payload});case o.SET_TIME:return Object(c.a)(Object(c.a)({},e),{},{timer:n.payload});case o.SET_CUSTOM_VALUE:return Object(c.a)(Object(c.a)({},e),{},{customValue:n.payload});case o.SET_COLOR:return Object(c.a)(Object(c.a)({},e),{},{strokeOuter:n.payload});case o.SET_START_ANIMATE:return Object(c.a)(Object(c.a)({},e),{},{startAnimate:n.payload});case o.SET_DONE_ANIMATE:return Object(c.a)(Object(c.a)({},e),{},{doneAnimate:n.payload});case o.SET_ANIMATE_VALUE:return Object(c.a)(Object(c.a)({},e),{},{animateValue:n.payload});case o.SET_ANIMATE_TIME:return Object(c.a)(Object(c.a)({},e),{},{animateTime:n.payload});case o.SET_HIDE_PROGRESS:return Object(c.a)(Object(c.a)({},e),{},{hideProgress:!e.hideProgress});default:return e}},C=function(e){return parseInt(e,10)},w=t(0),k={theme:"dark",progress:0,timer:"0:00",customValue:"",startAnimate:!1,doneAnimate:!1,animateValue:"",animateTime:0,hideProgress:!1,sizeRing:250,strokeWidth:15,strokeInner:"#fff",strokeOuter:"#20b7ff",defaultColor:"#20b7ff",colorArray:["#7ea9e1","#ed004f","#00fcf0","#d2fc00","#7bff00","#fa6900"],toggleTheme:function(){return null},onCustomValue:function(){return null},onRandomValue:function(){return null},onRandomColor:function(){return null},onAnimateValue:function(){return null},onStartAnimate:function(){return null},onHideProgress:function(){return null},finalCountdown:function(){return null},resetProgress:function(){return null}},I=Object(l.createContext)(Object(c.a)({},k)),M=function(e){var n=e.children,t=Object(l.useReducer)(A,k),a=Object(i.a)(t,2),r=a[0],u=a[1],s=function(e){var n,t=(n=e,{min:Math.floor(n/60),sec:n%60>9?n%60:"0".concat(n%60)});u({type:o.SET_TIME,payload:"".concat(t.min,":").concat(t.sec)})};return Object(w.jsx)(I.Provider,{value:Object(c.a)(Object(c.a)({},r),{},{toggleTheme:function(){"dark"===r.theme?u({type:o.SET_THEME,payload:"light"}):u({type:o.SET_THEME,payload:"dark"})},onCustomValue:function(e){u({type:o.SET_CUSTOM_VALUE,payload:e});var n=C(e);n&&n>0?(n>100&&(n=100),u({type:o.SET_PROGRESS,payload:n})):u({type:o.SET_PROGRESS,payload:0})},onRandomValue:function(){u({type:o.SET_CUSTOM_VALUE,payload:""}),u({type:o.SET_PROGRESS,payload:Math.floor(101*Math.random())})},onRandomColor:function(e){var n;u(e?{type:o.SET_COLOR,payload:(n=r.colorArray,n[Math.floor(Math.random()*n.length)])}:{type:o.SET_COLOR,payload:r.defaultColor})},onAnimateValue:function(e){u({type:o.SET_ANIMATE_VALUE,payload:e}),u({type:o.SET_ANIMATE_TIME,payload:C(e)}),s(e?C(e):0)},onStartAnimate:function(e){e?(u({type:o.SET_PROGRESS,payload:0}),u({type:o.SET_CUSTOM_VALUE,payload:""}),u({type:o.SET_START_ANIMATE,payload:!0})):(u({type:o.SET_PROGRESS,payload:0}),u({type:o.SET_ANIMATE_TIME,payload:C(r.animateValue)}),u({type:o.SET_START_ANIMATE,payload:!1}),s(C(r.animateValue)))},onHideProgress:function(){u({type:o.SET_HIDE_PROGRESS})},resetProgress:function(){u({type:o.SET_PROGRESS,payload:0}),u({type:o.SET_ANIMATE_VALUE,payload:""}),u({type:o.SET_START_ANIMATE,payload:!1}),u({type:o.SET_DONE_ANIMATE,payload:!1})},finalCountdown:function(){var e=C(r.animateValue),n=r.animateTime-1,t=Math.ceil((e-n)/e*100);u({type:o.SET_PROGRESS,payload:t}),s(n),0===n&&u({type:o.SET_DONE_ANIMATE,payload:!0}),u({type:o.SET_ANIMATE_TIME,payload:n})}}),children:n})},R=t(4),v=t(3),P=t(11),V=Object(v.createGlobalStyle)(u||(u=Object(R.a)(["\n  ","\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: 'Roboto Mono', 'Arial', 'Helvetica', sans-serif;\n    background: ",";\n    content-visibility: auto;\n  }\n\n  #root {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 320px;\n    min-height: 100vh;\n  }\n"])),P.normalize,(function(e){return e.theme.primaryColor})),N={primaryColor:"#313131",secondaryColor:"#414141",activeColor:"#20b7ff",darkColor:"#111",textColor:"#fff",complexShadow:"-5px -5px 20px rgba(255, 255, 255, 0.1), 5px 5px 10px rgba(0, 0, 0, 1), inset -2px -2px 5px rgba(255, 255, 255, 0.1), inset 2px 2px 5px rgba(0, 0, 0, 0.5), 0 0 0 2px #1f1f1f",lightShadow:"0 0 0 1px #232323",activeShadow:"0 0 5px #20b7ff, 0 0 15px #20b7ff, 0 0 30px #20b7ff",linearGradient:"linear-gradient(to top, #000, #555)"},G={primaryColor:"#c4c4c4",secondaryColor:"#e2e2e2",activeColor:"#ffef08",darkColor:"#111",textColor:"#000",complexShadow:"-5px -5px 20px rgba(255, 255, 255, 0.1), 5px 5px 10px rgba(0, 0, 0, 1), inset -2px -2px 5px rgba(255, 255, 255, 0.1), inset 2px 2px 5px rgba(0, 0, 0, 0.5), 0 0 0 2px #1f1f1f",lightShadow:"0 0 0 1px #232323",activeShadow:"0 0 5px #ffef08, 0 0 15px #ffef08, 0 0 30px #ffef08",linearGradient:"linear-gradient(to top, #fff, #bfbfbf)"},L=function(){var e=Object(l.useState)(0),n=Object(i.a)(e,2),t=n[0],o=n[1],a=Object(l.useContext)(I),r=a.progress,c=a.timer,u=a.doneAnimate,s=a.animateValue,d=a.sizeRing,p=a.strokeInner,f=a.strokeOuter,b=a.strokeWidth,h=a.hideProgress,m=d/2,x=d/2-b/2,E=2*Math.PI*x;return Object(l.useEffect)((function(){o((100-r)/100*E)}),[r,E,t,o]),Object(w.jsx)(U,{style:h?{opacity:"0"}:{},children:Object(w.jsxs)(H,{style:{width:"".concat(d,"px")},children:[Object(w.jsx)(D,{style:u?{opacity:"1"}:{},children:"Done!"}),Object(w.jsxs)(z,{width:d,height:d,children:[Object(w.jsx)(F,{stroke:p,strokeWidth:b,cx:m,cy:m,r:x}),Object(w.jsx)(W,{stroke:f,strokeWidth:b,strokeDasharray:E,strokeDashoffset:t,cx:m,cy:m,r:x,transform:"rotate(-90, ".concat(m,", ").concat(m,")")}),Object(w.jsxs)(B,{x:"".concat(m),y:"".concat(m),children:[r,"%"]})]}),Object(w.jsx)(J,{style:s&&0!==Number(s)?{opacity:"1"}:{},children:c})]})})},U=v.default.div(s||(s=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem;\n  opacity: 1;\n  transition: opacity 0.5s;\n"]))),H=v.default.div(d||(d=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),D=v.default.span(p||(p=Object(R.a)(["\n  font-size: 2rem;\n  color: ",";\n  opacity: 0;\n  transition: opacity 0.5s;\n"])),(function(e){return e.theme.textColor})),z=v.default.svg(f||(f=Object(R.a)(["\n  display: block;\n  margin: 20px auto;\n  max-width: 100%;\n"]))),F=v.default.circle(b||(b=Object(R.a)(["\n  fill: none;\n"]))),W=v.default.circle(h||(h=Object(R.a)(["\n  fill: none;\n  transition: stroke-dashoffset 850ms ease-in-out;\n"]))),B=v.default.text(m||(m=Object(R.a)(["\n  font-weight: 700;\n  font-size: 2rem;\n  fill: ",";\n  text-anchor: middle;\n"])),(function(e){return e.theme.textColor})),J=v.default.span(x||(x=Object(R.a)(["\n  font-size: 2rem;\n  color: ",";\n  opacity: 0;\n  transition: opacity 0.5s;\n"])),(function(e){return e.theme.textColor})),q=function(e){return Object(w.jsx)(K,Object(c.a)({},e))},K=v.default.button(E||(E=Object(R.a)(["\n  appearance: none;\n  position: relative;\n  margin: 1rem;\n  outline: none;\n  border: none;\n  border-radius: 20px;\n  width: 120px;\n  height: 40px;\n  box-shadow: ",";\n  color: ",";\n  background: ",";\n  transition: opacity 0.5s;\n  cursor: pointer;\n\n  &::before {\n    content: 'Random';\n    position: absolute;\n    left: 0;\n    top: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 20px;\n    width: 100%;\n    height: 40px;\n    box-shadow: ",";\n    font-size: 1rem;\n    background: ",";\n  }\n\n  &:disabled {\n    opacity: 0.5;\n  }\n"])),(function(e){return e.theme.complexShadow}),(function(e){return e.theme.textColor}),(function(e){return e.theme.darkColor}),(function(e){return e.theme.lightShadow}),(function(e){return e.theme.linearGradient})),Q=function(e){var n=e.children,t=e.title;return Object(w.jsxs)(X,{children:[n,t]})},X=v.default.label(j||(j=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0.5rem;\n  color: ",";\n  cursor: pointer;\n  user-select: none;\n"])),(function(e){return e.theme.textColor})),Y=function(e){return Object(w.jsx)(Z,Object(c.a)({},e))},Z=v.default.input(O||(O=Object(R.a)(["\n  margin: 0.5rem;\n  outline: none;\n  border: none;\n  border-radius: 20px;\n  width: 120px;\n  height: 40px;\n  box-shadow: ",";\n  font-size: 1.5rem;\n  text-align: center;\n  color: ",";\n  background: ",";\n  transition: opacity 0.5s;\n\n  ","\n\n  ","\n\n  &:disabled {\n    opacity: 0.5;\n  }\n"])),(function(e){return e.theme.complexShadow}),(function(e){return e.theme.textColor}),(function(e){return e.theme.linearGradient}),(function(e){return"number"===e.type&&Object(v.css)(T||(T=Object(R.a)(["\n      &::-webkit-outer-spin-button,\n      &::-webkit-inner-spin-button {\n        appearance: none;\n        margin: 0;\n      }\n\n      &:focus,\n      &:hover {\n        appearance: number-input;\n      }\n    "])))}),(function(e){return"checkbox"===e.type&&Object(v.css)(y||(y=Object(R.a)(["\n      appearance: none;\n      position: relative;\n      overflow: hidden;\n      background: ",";\n      transition: 0.5s;\n      cursor: pointer;\n      clip: rect(0 0 0 0);\n\n      &::before {\n        content: '';\n        position: absolute;\n        left: 0;\n        top: 0;\n        border-radius: 20px;\n        width: 80px;\n        height: 40px;\n        box-shadow: ",";\n        background: ",";\n        transform: scale(0.98, 0.96);\n        transition: 0.5s;\n      }\n\n      &::after {\n        content: '';\n        position: absolute;\n        left: 65px;\n        top: calc(50% - 2px);\n        border-radius: 50%;\n        width: 4px;\n        height: 4px;\n        background: #555;\n        transition: 0.5s;\n      }\n\n      &:checked {\n        background: ",";\n      }\n\n      &:checked::before {\n        left: 40px;\n      }\n\n      &:checked::after {\n        left: calc(65px + 40px);\n        box-shadow: ",";\n        background: ",";\n      }\n    "])),(function(e){return e.theme.darkColor}),(function(e){return e.theme.lightShadow}),(function(e){return e.theme.linearGradient}),(function(e){return e.theme.activeColor}),(function(e){return e.theme.activeShadow}),(function(e){return e.theme.activeColor}))})),$=function(){var e=Object(l.useContext)(I),n=e.theme,t=e.customValue,o=e.startAnimate,a=e.animateValue,r=e.animateTime,i=e.hideProgress,c=e.doneAnimate,u=e.toggleTheme,s=e.onCustomValue,d=e.onRandomValue,p=e.onRandomColor,f=e.onAnimateValue,b=e.onStartAnimate,h=e.onHideProgress,m=e.finalCountdown,x=e.resetProgress;return Object(l.useEffect)((function(){return o&&0!==r?window.intervalId=setInterval((function(){m()}),1e3):clearInterval(window.intervalId),function(){return clearInterval(window.intervalId)}}),[o,r]),Object(l.useEffect)((function(){return c?window.timeoutId=setTimeout((function(){x()}),3e3):clearTimeout(window.timeoutId),function(){return clearTimeout(window.timeoutId)}}),[c]),Object(w.jsxs)(ee,{children:[Object(w.jsx)(Q,{title:"Custom value",children:Object(w.jsx)(Y,{onChange:function(e){return s(e.target.value)},value:t,type:"number",placeholder:"0",disabled:o||i})}),Object(w.jsx)(ne,{children:Object(w.jsx)(q,{onClick:d,disabled:o||i})}),Object(w.jsx)(Q,{title:"Random color",children:Object(w.jsx)(Y,{onChange:function(e){return p(e.target.checked)},type:"checkbox",disabled:i})}),Object(w.jsxs)(ne,{children:[Object(w.jsx)(Q,{title:"Seconds",children:Object(w.jsx)(Y,{onChange:function(e){return f(e.target.value)},value:a,type:"number",placeholder:"0",disabled:o||i})}),Object(w.jsx)(Q,{title:"Animate",children:Object(w.jsx)(Y,{onChange:function(e){return b(e.target.checked)},type:"checkbox",checked:o,disabled:!a||0===Number(a)||i})})]}),Object(w.jsx)(Q,{title:"Hide progress",children:Object(w.jsx)(Y,{onChange:h,type:"checkbox",checked:i,disabled:o})}),Object(w.jsx)(Q,{title:"Theme",children:Object(w.jsx)(Y,{onChange:u,type:"checkbox",checked:"light"===n})})]})},ee=v.default.div(S||(S=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 1rem;\n"]))),ne=v.default.div(g||(g=Object(R.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n"]))),te=function(){var e=Object(l.useContext)(I).theme;return Object(w.jsxs)(v.ThemeProvider,{theme:"dark"===e?N:G,children:[Object(w.jsx)(V,{}),Object(w.jsxs)(oe,{children:[Object(w.jsx)(L,{}),Object(w.jsx)($,{})]})]})},oe=v.default.div(_||(_=Object(R.a)(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n  margin: 2rem;\n  border-radius: 50px;\n  width: 100%;\n  min-height: 750px;\n  max-width: 1440px;\n  box-shadow: ",";\n  background: ",";\n"])),(function(e){return e.theme.complexShadow}),(function(e){return e.theme.secondaryColor})),ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),o(e),a(e),r(e),i(e)}))};r.a.render(Object(w.jsx)(M,{children:Object(w.jsx)(te,{})}),document.getElementById("root")),ae()}},[[24,1,2]]]);
//# sourceMappingURL=main.1b64b383.chunk.js.map