(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3LUG":function(n,t,e){"use strict";var r=e("CcnG"),i=e("oBZk"),u=e("ZZ/e");e("z0VS"),e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return l}));var o=r.tb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}"]],data:{}});function l(n){return r.Ob(0,[(n()(),r.vb(0,0,null,null,6,"ion-grid",[["fixed",""]],null,null,null,i.N,i.l)),r.ub(1,49152,null,0,u.z,[r.i,r.l,r.A],{fixed:[0,"fixed"]},null),(n()(),r.vb(2,0,null,0,4,"ion-row",[],null,null,null,i.V,i.t)),r.ub(3,49152,null,0,u.ib,[r.i,r.l,r.A],null,null),(n()(),r.vb(4,0,null,0,2,"ion-col",[],null,null,null,i.L,i.j)),r.ub(5,49152,null,0,u.s,[r.i,r.l,r.A],null,null),r.Gb(0,0)],(function(n,t){n(t,1,0,"")}),null)}},"3z3p":function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return r}));var r=function(n,t,e){var r=new MutationObserver((function(n){e(i(n,t))}));return r.observe(n,{childList:!0,subtree:!0}),r},i=function(n,t){var e;return n.forEach((function(n){for(var r=0;r<n.addedNodes.length;r++)e=u(n.addedNodes[r],t)||e})),e},u=function(n,t){if(1===n.nodeType)return(n.tagName===t.toUpperCase()?[n]:Array.from(n.querySelectorAll(t))).find((function(n){return!0===n.checked}))}},CBt4:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return u}));var r=e("mrSG"),i=function(n,t,e,i,u){return r.__awaiter(void 0,void 0,void 0,(function(){var o;return r.__generator(this,(function(r){switch(r.label){case 0:if(n)return[2,n.attachViewToDom(t,e,u,i)];if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return o="string"==typeof e?t.ownerDocument&&t.ownerDocument.createElement(e):e,i&&i.forEach((function(n){return o.classList.add(n)})),u&&Object.assign(o,u),t.appendChild(o),o.componentOnReady?[4,o.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,o]}}))}))},u=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},MnZf:function(n,t,e){"use strict";var r=e("CcnG"),i=e("oBZk"),u=e("ZZ/e"),o=e("Ip0R"),l=e("gIcY");e("cb+C"),e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return f}));var a=r.tb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}"]],data:{}});function c(n){return r.Ob(0,[(n()(),r.vb(0,0,null,null,2,"ion-text",[["color","tertiary"]],null,null,null,i.bb,i.z)),r.ub(1,49152,null,0,u.wb,[r.i,r.l,r.A],{color:[0,"color"]},null),(n()(),r.Mb(2,0,["(",")"]))],(function(n,t){n(t,1,0,"tertiary")}),(function(n,t){n(t,2,0,t.parent.parent.context.$implicit.category)}))}function s(n){return r.Ob(0,[(n()(),r.vb(0,0,null,null,10,"ion-item",[["class","ion-no-padding"]],null,[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==n.component.onTaskClick(n.parent.context.$implicit)&&r),r}),i.S,i.q)),r.ub(1,49152,null,0,u.G,[r.i,r.l,r.A],null,null),(n()(),r.vb(2,0,null,0,4,"ion-label",[],null,null,null,i.T,i.r)),r.ub(3,49152,null,0,u.M,[r.i,r.l,r.A],null,null),(n()(),r.Mb(4,0,[" "," "])),(n()(),r.kb(16777216,null,0,1,null,c)),r.ub(6,16384,null,0,o.j,[r.P,r.M],{ngIf:[0,"ngIf"]},null),(n()(),r.vb(7,0,null,0,3,"ion-checkbox",[["color","primary"],["slot","end"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(n,t,e){var i=!0;return"ionBlur"===t&&(i=!1!==r.Hb(n,10)._handleBlurEvent(e.target)&&i),"ionChange"===t&&(i=!1!==r.Hb(n,10)._handleIonChange(e.target)&&i),i}),i.K,i.i)),r.Jb(5120,null,l.h,(function(n){return[n]}),[u.b]),r.ub(9,49152,null,0,u.q,[r.i,r.l,r.A],{checked:[0,"checked"],color:[1,"color"]},null),r.ub(10,16384,null,0,u.b,[r.l],null,null)],(function(n,t){n(t,6,0,t.parent.context.$implicit.category),n(t,9,0,t.parent.context.$implicit.completed,"primary")}),(function(n,t){n(t,4,0,t.parent.context.$implicit.title)}))}function d(n){return r.Ob(0,[(n()(),r.vb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),r.kb(16777216,null,null,1,null,s)),r.ub(2,16384,null,0,o.j,[r.P,r.M],{ngIf:[0,"ngIf"]},null),(n()(),r.kb(0,null,null,0))],(function(n,t){n(t,2,0,t.context.$implicit.completed===t.component.completedStatus)}),null)}function f(n){return r.Ob(0,[(n()(),r.vb(0,0,null,null,3,"ion-list",[],null,null,null,i.U,i.s)),r.ub(1,49152,null,0,u.N,[r.i,r.l,r.A],null,null),(n()(),r.kb(16777216,null,0,1,null,d)),r.ub(3,278528,null,0,o.i,[r.P,r.M,r.t],{ngForOf:[0,"ngForOf"]},null)],(function(n,t){n(t,3,0,t.component.list)}),null)}},ZuGR:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(n){try{if("string"!=typeof n||""===n)return n;var t=document.createDocumentFragment(),e=document.createElement("div");t.appendChild(e),e.innerHTML=n,l.forEach((function(n){for(var e=t.querySelectorAll(n),r=e.length-1;r>=0;r--){var o=e[r];o.parentNode?o.parentNode.removeChild(o):t.removeChild(o);for(var l=u(o),a=0;a<l.length;a++)i(l[a])}}));for(var r=u(t),o=0;o<r.length;o++)i(r[o]);var a=document.createElement("div");a.appendChild(t);var c=a.querySelector("div");return null!==c?c.innerHTML:a.innerHTML}catch(s){return console.error(s),""}},i=function(n){if(!n.nodeType||1===n.nodeType){for(var t=n.attributes.length-1;t>=0;t--){var e=n.attributes.item(t),r=e.name;if(o.includes(r.toLowerCase())){var l=e.value;null!=l&&l.toLowerCase().includes("javascript:")&&n.removeAttribute(r)}else n.removeAttribute(r)}var a=u(n);for(t=0;t<a.length;t++)i(a[t])}},u=function(n){return null!=n.children?n.children:n.childNodes},o=["class","id","href","src","name","slot"],l=["script","style","iframe","meta","link","object","embed"]},bYeF:function(n,t,e){"use strict";e.d(t,"a",(function(){return y})),e.d(t,"b",(function(){return g})),e.d(t,"c",(function(){return M})),e.d(t,"d",(function(){return o}));var r=e("mrSG"),i=e("VKG5"),u=e("JpGC"),o=function(n){return new Promise((function(t,e){Object(i.m)((function(){l(n),a(n).then((function(e){e.animation&&e.animation.destroy(),c(n),t(e)}),(function(t){c(n),e(t)}))}))}))},l=function(n){var t=n.enteringEl,e=n.leavingEl;_(t,e,n.direction),n.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),M(t,!1),e&&M(e,!1)},a=function(n){return r.__awaiter(void 0,void 0,void 0,(function(){var t;return r.__generator(this,(function(e){switch(e.label){case 0:return[4,s(n)];case 1:return[2,(t=e.sent())?d(t,n):f(n)]}}))}))},c=function(n){var t=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==t&&t.classList.remove("ion-page-invisible")},s=function(n){return r.__awaiter(void 0,void 0,void 0,(function(){var t;return r.__generator(this,(function(r){switch(r.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,e.e(101).then(e.bind(null,"WAL3"))]:[2,void 0];case 1:return t=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,e.e(102).then(e.bind(null,"tJwM"))];case 3:t=r.sent().mdTransitionAnimation,r.label=4;case 4:return[2,t]}}))}))},d=function(n,t){return r.__awaiter(void 0,void 0,void 0,(function(){var i,u;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,v(t,!0)];case 1:r.sent(),r.label=2;case 2:return r.trys.push([2,5,,6]),[4,e.e(5).then(e.bind(null,"5GEt"))];case 3:return[4,r.sent().create(n,t.baseEl,t)];case 4:return i=r.sent(),[3,6];case 5:return r.sent(),i=n(t.baseEl,t),[3,6];case 6:return b(t.enteringEl,t.leavingEl),[4,p(i,t)];case 7:return u=r.sent(),i.hasCompleted=u,t.progressCallback&&t.progressCallback(void 0),i.hasCompleted&&m(t.enteringEl,t.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}}))}))},f=function(n){return r.__awaiter(void 0,void 0,void 0,(function(){var t,e;return r.__generator(this,(function(r){switch(r.label){case 0:return t=n.enteringEl,e=n.leavingEl,[4,v(n,!1)];case 1:return r.sent(),b(t,e),m(t,e),[2,{hasCompleted:!0}]}}))}))},v=function(n,t){return r.__awaiter(void 0,void 0,void 0,(function(){var e;return r.__generator(this,(function(r){switch(r.label){case 0:return e=(void 0!==n.deepWait?n.deepWait:t)?[y(n.enteringEl),y(n.leavingEl)]:[w(n.enteringEl),w(n.leavingEl)],[4,Promise.all(e)];case 1:return r.sent(),[4,h(n.viewIsReady,n.enteringEl)];case 2:return r.sent(),[2]}}))}))},h=function(n,t){return r.__awaiter(void 0,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return n?[4,n(t)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},p=function(n,t){var e=t.progressCallback,r=new Promise((function(t){return n.onFinish(t)}));return e?(n.progressStart(!0),e(n)):n.play(),r},b=function(n,t){g(t,u.c),g(n,u.a)},m=function(n,t){g(n,u.b),g(t,u.d)},g=function(n,t){if(n){var e=new CustomEvent(t,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}},w=function(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()},y=function(n){return r.__awaiter(void 0,void 0,void 0,(function(){var t;return r.__generator(this,(function(e){switch(e.label){case 0:return(t=n)?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(null!=e.sent())return[2];e.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(y))];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))},M=function(n,t){t?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},_=function(n,t,e){void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==t&&(t.style.zIndex="100")}},"cb+C":function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("CcnG"),i=function(){function n(){this.completedStatus=!1,this.taskClick=new r.n}return n.prototype.onTaskClick=function(n){var t=this;setTimeout((function(){t.taskClick.emit(n)}),500)},n}()},"j5a+":function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return a}));var r=e("mrSG"),i=function(n,t){return null!==t.closest(n)},u=function(n){var t;return"string"==typeof n&&n.length>0?((t={"ion-color":!0})["ion-color-"+n]=!0,t):void 0},o=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},l=/^[a-z][a-z0-9+\-.]*:/,a=function(n,t,e){return r.__awaiter(void 0,void 0,void 0,(function(){var i;return r.__generator(this,(function(r){return null!=n&&"#"!==n[0]&&!l.test(n)&&(i=document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[2,i.push(n,e)]):[2,!1]}))}))}},k0If:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i}));var r=function(){return function(n,t){this.x=n,this.y=t}}(),i=function(n,t,e,r,i){var l=o(n.y,t.y,e.y,r.y,i);return u(n.x,t.x,e.x,r.x,l[0])},u=function(n,t,e,r,i){return i*(3*t*Math.pow(i-1,2)+i*(-3*e*i+3*e+r*i))-n*Math.pow(i-1,3)},o=function(n,t,e,r,i){return l((r-=i)-3*(e-=i)+3*(t-=i)-(n-=i),3*e-6*t+3*n,3*t-3*n,n).filter((function(n){return n>=0&&n<=1}))},l=function(n,t,e,r){if(0===n)return function(n,t,e){var r=t*t-4*n*e;return r<0?[]:[(-t+Math.sqrt(r))/(2*n),(-t-Math.sqrt(r))/(2*n)]}(t,e,r);var i=(3*(e/=n)-(t/=n)*t)/3,u=(2*t*t*t-9*t*e+27*(r/=n))/27;if(0===i)return[Math.pow(-u,1/3)];if(0===u)return[Math.sqrt(-i),-Math.sqrt(-i)];var o=Math.pow(u/2,2)+Math.pow(i/3,3);if(0===o)return[Math.pow(u/2,.5)-t/3];if(o>0)return[Math.pow(-u/2+Math.sqrt(o),1/3)-Math.pow(u/2+Math.sqrt(o),1/3)-t/3];var l=Math.sqrt(Math.pow(-i/3,3)),a=Math.acos(-u/(2*Math.sqrt(Math.pow(-i/3,3)))),c=2*Math.pow(l,1/3);return[c*Math.cos(a/3)-t/3,c*Math.cos((a+2*Math.PI)/3)-t/3,c*Math.cos((a+4*Math.PI)/3)-t/3]}},l1ru:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return l})),e.d(t,"d",(function(){return f})),e.d(t,"e",(function(){return v})),e.d(t,"f",(function(){return u})),e.d(t,"g",(function(){return i})),e.d(t,"h",(function(){return d})),e.d(t,"i",(function(){return c})),e.d(t,"j",(function(){return s})),e.d(t,"k",(function(){return o}));var r=function(n){"requestIdleCallback"in window?window.requestIdleCallback(n):setTimeout(n,32)},i=function(n){return!!n.shadowRoot&&!!n.attachShadow},u=function(n){var t=n.closest("ion-item");return t?t.querySelector("ion-label"):null},o=function(n,t,e,r,u){if(n||i(t)){var o=t.querySelector("input.aux-input");o||((o=t.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),t.appendChild(o)),o.disabled=u,o.name=e,o.value=r||""}},l=function(n,t,e){return Math.max(n,Math.min(t,e))},a=function(n,t){if(!n){var e="ASSERT: "+t;throw console.error(e),new Error(e)}},c=function(n){return n.timeStamp||Date.now()},s=function(n){if(n){var t=n.changedTouches;if(t&&t.length>0){var e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}},d=function(n){var t="rtl"===document.dir;switch(n){case"start":return t;case"end":return!t;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}},f=function(n,t){var e=n._original||n;return{_original:n,emit:v(e.emit.bind(e),t)}},v=function(n,t){var e;return void 0===t&&(t=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(e),e=setTimeout.apply(void 0,[n,t].concat(r))}}},s2pH:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return r}));var r=function(){var n=window.TapticEngine;n&&n.selection()},i=function(){var n=window.TapticEngine;n&&n.gestureSelectionStart()},u=function(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()},o=function(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}},z0VS:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r=function(){return function(){}}()}}]);