(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+onb":function(n,l,t){"use strict";t.d(l,"a",(function(){return y})),t.d(l,"b",(function(){return g})),t.d(l,"c",(function(){return k})),t.d(l,"d",(function(){return i}));var e=t("mrSG"),u=t("QhwV"),r=t("JpGC"),i=function(n){return new Promise((function(l,t){Object(u.m)((function(){o(n),c(n).then((function(t){t.animation&&t.animation.destroy(),a(n),l(t)}),(function(l){a(n),t(l)}))}))}))},o=function(n){var l=n.enteringEl,t=n.leavingEl;M(l,t,n.direction),n.showGoBack?l.classList.add("can-go-back"):l.classList.remove("can-go-back"),k(l,!1),t&&k(t,!1)},c=function(n){return e.__awaiter(void 0,void 0,void 0,(function(){var l;return e.__generator(this,(function(t){switch(t.label){case 0:return[4,s(n)];case 1:return[2,(l=t.sent())?f(l,n):d(n)]}}))}))},a=function(n){var l=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==l&&l.classList.remove("ion-page-invisible")},s=function(n){return e.__awaiter(void 0,void 0,void 0,(function(){var l;return e.__generator(this,(function(e){switch(e.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,t.e(102).then(t.bind(null,"WAL3"))]:[2,void 0];case 1:return l=e.sent().iosTransitionAnimation,[3,4];case 2:return[4,t.e(103).then(t.bind(null,"tJwM"))];case 3:l=e.sent().mdTransitionAnimation,e.label=4;case 4:return[2,l]}}))}))},f=function(n,l){return e.__awaiter(void 0,void 0,void 0,(function(){var u,r;return e.__generator(this,(function(e){switch(e.label){case 0:return[4,b(l,!0)];case 1:e.sent(),e.label=2;case 2:return e.trys.push([2,5,,6]),[4,t.e(5).then(t.bind(null,"5GEt"))];case 3:return[4,e.sent().create(n,l.baseEl,l)];case 4:return u=e.sent(),[3,6];case 5:return e.sent(),u=n(l.baseEl,l),[3,6];case 6:return m(l.enteringEl,l.leavingEl),[4,p(u,l)];case 7:return r=e.sent(),u.hasCompleted=r,l.progressCallback&&l.progressCallback(void 0),u.hasCompleted&&h(l.enteringEl,l.leavingEl),[2,{hasCompleted:u.hasCompleted,animation:u}]}}))}))},d=function(n){return e.__awaiter(void 0,void 0,void 0,(function(){var l,t;return e.__generator(this,(function(e){switch(e.label){case 0:return l=n.enteringEl,t=n.leavingEl,[4,b(n,!1)];case 1:return e.sent(),m(l,t),h(l,t),[2,{hasCompleted:!0}]}}))}))},b=function(n,l){return e.__awaiter(void 0,void 0,void 0,(function(){var t;return e.__generator(this,(function(e){switch(e.label){case 0:return t=(void 0!==n.deepWait?n.deepWait:l)?[y(n.enteringEl),y(n.leavingEl)]:[w(n.enteringEl),w(n.leavingEl)],[4,Promise.all(t)];case 1:return e.sent(),[4,v(n.viewIsReady,n.enteringEl)];case 2:return e.sent(),[2]}}))}))},v=function(n,l){return e.__awaiter(void 0,void 0,void 0,(function(){return e.__generator(this,(function(t){switch(t.label){case 0:return n?[4,n(l)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},p=function(n,l){var t=l.progressCallback,e=new Promise((function(l){return n.onFinish(l)}));return t?(n.progressStart(!0),t(n)):n.play(),e},m=function(n,l){g(l,r.c),g(n,r.a)},h=function(n,l){g(n,r.b),g(l,r.d)},g=function(n,l){if(n){var t=new CustomEvent(l,{bubbles:!1,cancelable:!1});n.dispatchEvent(t)}},w=function(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()},y=function(n){return e.__awaiter(void 0,void 0,void 0,(function(){var l;return e.__generator(this,(function(t){switch(t.label){case 0:return(l=n)?null==l.componentOnReady?[3,2]:[4,l.componentOnReady()]:[3,4];case 1:if(null!=t.sent())return[2];t.label=2;case 2:return[4,Promise.all(Array.from(l.children).map(y))];case 3:t.sent(),t.label=4;case 4:return[2]}}))}))},k=function(n,l){l?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},M=function(n,l,t){void 0!==n&&(n.style.zIndex="back"===t?"99":"101"),void 0!==l&&(l.style.zIndex="100")}},"3LUG":function(n,l,t){"use strict";var e=t("CcnG"),u=t("oBZk"),r=t("ZZ/e");t("z0VS"),t.d(l,"a",(function(){return i})),t.d(l,"b",(function(){return o}));var i=e.tb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}"]],data:{}});function o(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,6,"ion-grid",[["fixed",""]],null,null,null,u.P,u.m)),e.ub(1,49152,null,0,r.A,[e.i,e.l,e.A],{fixed:[0,"fixed"]},null),(n()(),e.vb(2,0,null,0,4,"ion-row",[],null,null,null,u.X,u.u)),e.ub(3,49152,null,0,r.jb,[e.i,e.l,e.A],null,null),(n()(),e.vb(4,0,null,0,2,"ion-col",[],null,null,null,u.N,u.k)),e.ub(5,49152,null,0,r.t,[e.i,e.l,e.A],null,null),e.Gb(0,0)],(function(n,l){n(l,1,0,"")}),null)}},"3z3p":function(n,l,t){"use strict";t.d(l,"a",(function(){return r})),t.d(l,"b",(function(){return e}));var e=function(n,l,t){var e=new MutationObserver((function(n){t(u(n,l))}));return e.observe(n,{childList:!0,subtree:!0}),e},u=function(n,l){var t;return n.forEach((function(n){for(var e=0;e<n.addedNodes.length;e++)t=r(n.addedNodes[e],l)||t})),t},r=function(n,l){if(1===n.nodeType)return(n.tagName===l.toUpperCase()?[n]:Array.from(n.querySelectorAll(l))).find((function(n){return!0===n.checked}))}},CBt4:function(n,l,t){"use strict";t.d(l,"a",(function(){return u})),t.d(l,"b",(function(){return r}));var e=t("mrSG"),u=function(n,l,t,u,r){return e.__awaiter(void 0,void 0,void 0,(function(){var i;return e.__generator(this,(function(e){switch(e.label){case 0:if(n)return[2,n.attachViewToDom(l,t,r,u)];if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return i="string"==typeof t?l.ownerDocument&&l.ownerDocument.createElement(t):t,u&&u.forEach((function(n){return i.classList.add(n)})),r&&Object.assign(i,r),l.appendChild(i),i.componentOnReady?[4,i.componentOnReady()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2,i]}}))}))},r=function(n,l){if(l){if(n)return n.removeViewFromDom(l.parentElement,l);l.remove()}return Promise.resolve()}},MnZf:function(n,l,t){"use strict";var e=t("CcnG"),u=t("oBZk"),r=t("ZZ/e"),i=t("gIcY"),o=t("Ip0R");t("cb+C"),t.d(l,"a",(function(){return c})),t.d(l,"b",(function(){return M}));var c=e.tb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}"]],data:{}});function a(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,2,"ion-text",[["color","tertiary"]],null,null,null,u.db,u.A)),e.ub(1,49152,null,0,r.xb,[e.i,e.l,e.A],{color:[0,"color"]},null),(n()(),e.Mb(2,0,["(",")"]))],(function(n,l){n(l,1,0,"tertiary")}),(function(n,l){n(l,2,0,l.parent.parent.context.$implicit.category)}))}function s(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,11,null,null,null,null,null,null,null)),(n()(),e.vb(1,0,null,null,2,"ion-text",[],null,null,null,u.db,u.A)),e.ub(2,49152,null,0,r.xb,[e.i,e.l,e.A],null,null),(n()(),e.Mb(3,0,["","/",""])),(n()(),e.vb(4,0,null,null,3,"ion-button",[["color","secondary"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onTaskDecProgress(n.parent.parent.context.$implicit)&&e),e}),u.F,u.c)),e.ub(5,49152,null,0,r.k,[e.i,e.l,e.A],{color:[0,"color"]},null),(n()(),e.vb(6,0,null,0,1,"ion-icon",[["name","remove"],["slot","icon-only"]],null,null,null,u.R,u.o)),e.ub(7,49152,null,0,r.C,[e.i,e.l,e.A],{name:[0,"name"]},null),(n()(),e.vb(8,0,null,null,3,"ion-button",[["class","ion-no-margin"],["color","secondary"],["slot","end"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onTaskIncProgress(n.parent.parent.context.$implicit)&&e),e}),u.F,u.c)),e.ub(9,49152,null,0,r.k,[e.i,e.l,e.A],{color:[0,"color"]},null),(n()(),e.vb(10,0,null,0,1,"ion-icon",[["name","add"],["slot","icon-only"]],null,null,null,u.R,u.o)),e.ub(11,49152,null,0,r.C,[e.i,e.l,e.A],{name:[0,"name"]},null)],(function(n,l){n(l,5,0,"secondary"),n(l,7,0,"remove"),n(l,9,0,"secondary"),n(l,11,0,"add")}),(function(n,l){n(l,3,0,l.parent.parent.context.$implicit.progressDone,l.parent.parent.context.$implicit.progressLevel)}))}function f(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),e.vb(1,0,null,null,3,"ion-checkbox",[["color","primary"],["slot","end"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0;return"ionBlur"===l&&(u=!1!==e.Hb(n,4)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==e.Hb(n,4)._handleIonChange(t.target)&&u),u}),u.M,u.j)),e.Jb(5120,null,i.h,(function(n){return[n]}),[r.c]),e.ub(3,49152,null,0,r.r,[e.i,e.l,e.A],{checked:[0,"checked"],color:[1,"color"]},null),e.ub(4,16384,null,0,r.c,[e.l],null,null)],(function(n,l){n(l,3,0,l.parent.parent.context.$implicit.completed,"primary")}),null)}function d(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,10,"ion-item",[["class","ion-no-padding"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onTaskComplete(n.parent.context.$implicit)&&e),e}),u.U,u.r)),e.ub(1,49152,null,0,r.H,[e.i,e.l,e.A],null,null),(n()(),e.vb(2,0,null,0,4,"ion-label",[],null,null,null,u.V,u.s)),e.ub(3,49152,null,0,r.N,[e.i,e.l,e.A],null,null),(n()(),e.Mb(4,0,[" "," "])),(n()(),e.kb(16777216,null,0,1,null,a)),e.ub(6,16384,null,0,o.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.kb(16777216,null,0,1,null,s)),e.ub(8,16384,null,0,o.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.kb(16777216,null,0,1,null,f)),e.ub(10,16384,null,0,o.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,6,0,l.parent.context.$implicit.category),n(l,8,0,l.parent.context.$implicit.hasProgress&&!l.parent.context.$implicit.completed),n(l,10,0,!l.parent.context.$implicit.hasProgress)}),(function(n,l){n(l,4,0,l.parent.context.$implicit.title)}))}function b(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.kb(16777216,null,null,1,null,d)),e.ub(2,16384,null,0,o.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.kb(0,null,null,0))],(function(n,l){n(l,2,0,!1===l.context.$implicit.completed)}),null)}function v(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.kb(16777216,null,null,1,null,b)),e.ub(2,278528,null,0,o.i,[e.P,e.M,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e.kb(0,null,null,0))],(function(n,l){n(l,2,0,l.component.list)}),null)}function p(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,2,"ion-text",[["color","tertiary"]],null,null,null,u.db,u.A)),e.ub(1,49152,null,0,r.xb,[e.i,e.l,e.A],{color:[0,"color"]},null),(n()(),e.Mb(2,0,["(",")"]))],(function(n,l){n(l,1,0,"tertiary")}),(function(n,l){n(l,2,0,l.parent.parent.context.$implicit.category)}))}function m(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,9,"ion-item",[["class","ion-no-padding"]],null,null,null,u.U,u.r)),e.ub(1,49152,null,0,r.H,[e.i,e.l,e.A],null,null),(n()(),e.vb(2,0,null,0,4,"ion-label",[],null,null,null,u.V,u.s)),e.ub(3,49152,null,0,r.N,[e.i,e.l,e.A],null,null),(n()(),e.Mb(4,0,[" "," "])),(n()(),e.kb(16777216,null,0,1,null,p)),e.ub(6,16384,null,0,o.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(7,0,null,0,2,"ion-button",[["color","secondary"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onTaskArchive(n.parent.context.$implicit)&&e),e}),u.F,u.c)),e.ub(8,49152,null,0,r.k,[e.i,e.l,e.A],{color:[0,"color"]},null),(n()(),e.Mb(-1,0,["Archive"]))],(function(n,l){n(l,6,0,l.parent.context.$implicit.category),n(l,8,0,"secondary")}),(function(n,l){n(l,4,0,l.parent.context.$implicit.title)}))}function h(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.kb(16777216,null,null,1,null,m)),e.ub(2,16384,null,0,o.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.kb(0,null,null,0))],(function(n,l){n(l,2,0,!0===l.context.$implicit.completed)}),null)}function g(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.kb(16777216,null,null,1,null,h)),e.ub(2,278528,null,0,o.i,[e.P,e.M,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e.kb(0,null,null,0))],(function(n,l){n(l,2,0,l.component.list)}),null)}function w(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,2,"ion-text",[["color","tertiary"]],null,null,null,u.db,u.A)),e.ub(1,49152,null,0,r.xb,[e.i,e.l,e.A],{color:[0,"color"]},null),(n()(),e.Mb(2,0,["(",")"]))],(function(n,l){n(l,1,0,"tertiary")}),(function(n,l){n(l,2,0,l.parent.context.$implicit.category)}))}function y(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,10,null,null,null,null,null,null,null)),(n()(),e.vb(1,0,null,null,9,"ion-item",[["class","ion-no-padding"]],null,null,null,u.U,u.r)),e.ub(2,49152,null,0,r.H,[e.i,e.l,e.A],null,null),(n()(),e.vb(3,0,null,0,4,"ion-label",[],null,null,null,u.V,u.s)),e.ub(4,49152,null,0,r.N,[e.i,e.l,e.A],null,null),(n()(),e.Mb(5,0,[" "," "])),(n()(),e.kb(16777216,null,0,1,null,w)),e.ub(7,16384,null,0,o.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(8,0,null,0,2,"ion-button",[["color","tertiary"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onTaskDelete(n.context.$implicit)&&e),e}),u.F,u.c)),e.ub(9,49152,null,0,r.k,[e.i,e.l,e.A],{color:[0,"color"]},null),(n()(),e.Mb(-1,0,["Delete"]))],(function(n,l){n(l,7,0,l.context.$implicit.category),n(l,9,0,"tertiary")}),(function(n,l){n(l,5,0,l.context.$implicit.title)}))}function k(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.kb(16777216,null,null,1,null,y)),e.ub(2,278528,null,0,o.i,[e.P,e.M,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e.kb(0,null,null,0))],(function(n,l){n(l,2,0,l.component.list)}),null)}function M(n){return e.Ob(0,[(n()(),e.vb(0,0,null,null,7,"ion-list",[],null,null,null,u.W,u.t)),e.ub(1,49152,null,0,r.O,[e.i,e.l,e.A],null,null),(n()(),e.kb(16777216,null,0,1,null,v)),e.ub(3,16384,null,0,o.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.kb(16777216,null,0,1,null,g)),e.ub(5,16384,null,0,o.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null),(n()(),e.kb(16777216,null,0,1,null,k)),e.ub(7,16384,null,0,o.j,[e.P,e.M],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,3,0,"default"===t.typeOfList),n(l,5,0,"completed"===t.typeOfList),n(l,7,0,"archived"===t.typeOfList)}),null)}},ZuGR:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=function(n){try{if("string"!=typeof n||""===n)return n;var l=document.createDocumentFragment(),t=document.createElement("div");l.appendChild(t),t.innerHTML=n,o.forEach((function(n){for(var t=l.querySelectorAll(n),e=t.length-1;e>=0;e--){var i=t[e];i.parentNode?i.parentNode.removeChild(i):l.removeChild(i);for(var o=r(i),c=0;c<o.length;c++)u(o[c])}}));for(var e=r(l),i=0;i<e.length;i++)u(e[i]);var c=document.createElement("div");c.appendChild(l);var a=c.querySelector("div");return null!==a?a.innerHTML:c.innerHTML}catch(s){return console.error(s),""}},u=function(n){if(!n.nodeType||1===n.nodeType){for(var l=n.attributes.length-1;l>=0;l--){var t=n.attributes.item(l),e=t.name;if(i.includes(e.toLowerCase())){var o=t.value;null!=o&&o.toLowerCase().includes("javascript:")&&n.removeAttribute(e)}else n.removeAttribute(e)}var c=r(n);for(l=0;l<c.length;l++)u(c[l])}},r=function(n){return null!=n.children?n.children:n.childNodes},i=["class","id","href","src","name","slot"],o=["script","style","iframe","meta","link","object","embed"]},"cb+C":function(n,l,t){"use strict";t.d(l,"a",(function(){return u}));var e=t("CcnG"),u=function(){function n(){this.typeOfList="default",this.taskComplete=new e.n,this.taskArchive=new e.n,this.taskDelete=new e.n,this.taskIncProgress=new e.n,this.taskDecProgress=new e.n}return n.prototype.onTaskComplete=function(n){var l=this;n.hasProgress||setTimeout((function(){l.taskComplete.emit(n)}),500)},n.prototype.onTaskArchive=function(n){this.taskArchive.emit(n)},n.prototype.onTaskDelete=function(n){this.taskDelete.emit(n)},n.prototype.onTaskIncProgress=function(n){var l=this;this.taskIncProgress.emit(n),n.progressDone+1===n.progressLevel&&setTimeout((function(){l.taskComplete.emit(n)}),500)},n.prototype.onTaskDecProgress=function(n){n.progressDone<=0||this.taskDecProgress.emit(n)},n}()},"j5a+":function(n,l,t){"use strict";t.d(l,"a",(function(){return r})),t.d(l,"b",(function(){return i})),t.d(l,"c",(function(){return u})),t.d(l,"d",(function(){return c}));var e=t("mrSG"),u=function(n,l){return null!==l.closest(n)},r=function(n){var l;return"string"==typeof n&&n.length>0?((l={"ion-color":!0})["ion-color-"+n]=!0,l):void 0},i=function(n){var l={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return l[n]=!0})),l},o=/^[a-z][a-z0-9+\-.]*:/,c=function(n,l,t){return e.__awaiter(void 0,void 0,void 0,(function(){var u;return e.__generator(this,(function(e){return null!=n&&"#"!==n[0]&&!o.test(n)&&(u=document.querySelector("ion-router"))?(null!=l&&l.preventDefault(),[2,u.push(n,t)]):[2,!1]}))}))}},k0If:function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t.d(l,"b",(function(){return u}));var e=function(){return function(n,l){this.x=n,this.y=l}}(),u=function(n,l,t,e,u){var o=i(n.y,l.y,t.y,e.y,u);return r(n.x,l.x,t.x,e.x,o[0])},r=function(n,l,t,e,u){return u*(3*l*Math.pow(u-1,2)+u*(-3*t*u+3*t+e*u))-n*Math.pow(u-1,3)},i=function(n,l,t,e,u){return o((e-=u)-3*(t-=u)+3*(l-=u)-(n-=u),3*t-6*l+3*n,3*l-3*n,n).filter((function(n){return n>=0&&n<=1}))},o=function(n,l,t,e){if(0===n)return function(n,l,t){var e=l*l-4*n*t;return e<0?[]:[(-l+Math.sqrt(e))/(2*n),(-l-Math.sqrt(e))/(2*n)]}(l,t,e);var u=(3*(t/=n)-(l/=n)*l)/3,r=(2*l*l*l-9*l*t+27*(e/=n))/27;if(0===u)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-u),-Math.sqrt(-u)];var i=Math.pow(r/2,2)+Math.pow(u/3,3);if(0===i)return[Math.pow(r/2,.5)-l/3];if(i>0)return[Math.pow(-r/2+Math.sqrt(i),1/3)-Math.pow(r/2+Math.sqrt(i),1/3)-l/3];var o=Math.sqrt(Math.pow(-u/3,3)),c=Math.acos(-r/(2*Math.sqrt(Math.pow(-u/3,3)))),a=2*Math.pow(o,1/3);return[a*Math.cos(c/3)-l/3,a*Math.cos((c+2*Math.PI)/3)-l/3,a*Math.cos((c+4*Math.PI)/3)-l/3]}},l1ru:function(n,l,t){"use strict";t.d(l,"a",(function(){return e})),t.d(l,"b",(function(){return c})),t.d(l,"c",(function(){return o})),t.d(l,"d",(function(){return d})),t.d(l,"e",(function(){return b})),t.d(l,"f",(function(){return r})),t.d(l,"g",(function(){return u})),t.d(l,"h",(function(){return f})),t.d(l,"i",(function(){return a})),t.d(l,"j",(function(){return s})),t.d(l,"k",(function(){return i}));var e=function(n){"requestIdleCallback"in window?window.requestIdleCallback(n):setTimeout(n,32)},u=function(n){return!!n.shadowRoot&&!!n.attachShadow},r=function(n){var l=n.closest("ion-item");return l?l.querySelector("ion-label"):null},i=function(n,l,t,e,r){if(n||u(l)){var i=l.querySelector("input.aux-input");i||((i=l.ownerDocument.createElement("input")).type="hidden",i.classList.add("aux-input"),l.appendChild(i)),i.disabled=r,i.name=t,i.value=e||""}},o=function(n,l,t){return Math.max(n,Math.min(l,t))},c=function(n,l){if(!n){var t="ASSERT: "+l;throw console.error(t),new Error(t)}},a=function(n){return n.timeStamp||Date.now()},s=function(n){if(n){var l=n.changedTouches;if(l&&l.length>0){var t=l[0];return{x:t.clientX,y:t.clientY}}if(void 0!==n.pageX)return{x:n.pageX,y:n.pageY}}return{x:0,y:0}},f=function(n){var l="rtl"===document.dir;switch(n){case"start":return l;case"end":return!l;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}},d=function(n,l){var t=n._original||n;return{_original:n,emit:b(t.emit.bind(t),l)}},b=function(n,l){var t;return void 0===l&&(l=0),function(){for(var e=[],u=0;u<arguments.length;u++)e[u]=arguments[u];clearTimeout(t),t=setTimeout.apply(void 0,[n,l].concat(e))}}},s2pH:function(n,l,t){"use strict";t.d(l,"a",(function(){return u})),t.d(l,"b",(function(){return r})),t.d(l,"c",(function(){return i})),t.d(l,"d",(function(){return e}));var e=function(){var n=window.TapticEngine;n&&n.selection()},u=function(){var n=window.TapticEngine;n&&n.gestureSelectionStart()},r=function(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()},i=function(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}},z0VS:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=function(){return function(){}}()}}]);