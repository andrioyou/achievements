(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{"/yvc":function(e,t,o){"use strict";o.r(t),o.d(t,"iosTransitionAnimation",(function(){return n})),o.d(t,"shadow",(function(){return r}));var a=o("uSLK");const r=e=>e.shadowRoot||e,n=(e,t)=>{try{const o=540,n="cubic-bezier(0.32,0.72,0,1)",l="opacity",s="transform",c="0%",i=.8,d="rtl"===e.ownerDocument.dir,f=d?"-99.5%":"99.5%",m=d?"33%":"-33%",b=t.enteringEl,y=t.leavingEl,u="back"===t.direction,S=b.querySelector(":scope > ion-content"),T=b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),p=b.querySelectorAll(":scope > ion-header > ion-toolbar"),X=Object(a.a)(),E=Object(a.a)();if(X.addElement(b).duration(t.duration||o).easing(t.easing||n).fill("both").beforeRemoveClass("ion-page-invisible"),y&&e){const t=Object(a.a)();t.addElement(e),X.addAnimation(t)}if(S||0!==p.length||0!==T.length?(E.addElement(S),E.addElement(T)):E.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),X.addAnimation(E),u?E.beforeClearStyles([l]).fromTo("transform",`translateX(${m})`,`translateX(${c})`).fromTo(l,i,1):E.beforeClearStyles([l]).fromTo("transform",`translateX(${f})`,`translateX(${c})`),S){const e=r(S).querySelector(".transition-effect");if(e){const t=e.querySelector(".transition-cover"),o=e.querySelector(".transition-shadow"),r=Object(a.a)(),n=Object(a.a)(),s=Object(a.a)();r.addElement(e).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),n.addElement(t).beforeClearStyles([l]).fromTo(l,0,.1),s.addElement(o).beforeClearStyles([l]).fromTo(l,.03,.7),r.addAnimation([n,s]),E.addAnimation([r])}}if(p.forEach(e=>{const t=Object(a.a)();t.addElement(e),X.addAnimation(t);const o=Object(a.a)();o.addElement(e.querySelector("ion-title"));const n=Object(a.a)();n.addElement(e.querySelectorAll("ion-buttons,[menuToggle]"));const s=Object(a.a)();s.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const i=Object(a.a)();i.addElement(r(e).querySelector(".toolbar-background"));const b=Object(a.a)(),y=e.querySelector("ion-back-button");if(y&&b.addElement(y),t.addAnimation([o,n,s,i,b]),o.fromTo(l,.01,1),n.fromTo(l,.01,1),s.fromTo(l,.01,1),u)o.fromTo("transform",`translateX(${m})`,`translateX(${c})`),s.fromTo("transform",`translateX(${m})`,`translateX(${c})`),b.fromTo(l,.01,1);else if(o.fromTo("transform",`translateX(${f})`,`translateX(${c})`),s.fromTo("transform",`translateX(${f})`,`translateX(${c})`),i.beforeClearStyles([l]).keyframes([{offset:0,opacity:.01},{offset:.99,opacity:1},{offset:1,opacity:"var(--opacity)"}]),b.fromTo(l,.01,1),y){const e=Object(a.a)();e.addElement(r(y).querySelector(".button-text")).fromTo("transform",d?"translateX(-100px)":"translateX(100px)","translateX(0px)"),t.addAnimation(e)}}),y){const e=Object(a.a)(),t=y.querySelector(":scope > ion-content");if(e.addElement(t),e.addElement(y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),X.addAnimation(e),u?e.beforeClearStyles([l]).fromTo("transform",`translateX(${c})`,d?"translateX(-100%)":"translateX(100%)"):e.fromTo("transform",`translateX(${c})`,`translateX(${m})`).fromTo(l,1,i),t){const o=r(t).querySelector(".transition-effect");if(o){const t=o.querySelector(".transition-cover"),r=o.querySelector(".transition-shadow"),n=Object(a.a)(),s=Object(a.a)(),c=Object(a.a)();n.addElement(o).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),s.addElement(t).beforeClearStyles([l]).fromTo(l,.1,0),c.addElement(r).beforeClearStyles([l]).fromTo(l,.7,.03),n.addAnimation([s,c]),e.addAnimation([n])}}y.querySelectorAll(":scope > ion-header > ion-toolbar").forEach(e=>{const t=Object(a.a)();t.addElement(e);const o=Object(a.a)();o.addElement(e.querySelector("ion-title"));const n=Object(a.a)();n.addElement(e.querySelectorAll("ion-buttons,[menuToggle]"));const i=Object(a.a)(),f=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");f.length>0&&i.addElement(f);const b=Object(a.a)();b.addElement(r(e).querySelector(".toolbar-background"));const y=Object(a.a)(),S=e.querySelector("ion-back-button");if(S&&y.addElement(S),t.addAnimation([o,n,i,y,b]),X.addAnimation(t),y.fromTo(l,.99,0),o.fromTo(l,.99,0),n.fromTo(l,.99,0),i.fromTo(l,.99,0),u){if(o.fromTo("transform",`translateX(${c})`,d?"translateX(-100%)":"translateX(100%)"),i.fromTo("transform",`translateX(${c})`,d?"translateX(-100%)":"translateX(100%)"),b.beforeClearStyles([l]).fromTo(l,1,.01),S){const e=Object(a.a)();e.addElement(r(S).querySelector(".button-text")),e.fromTo("transform",`translateX(${c})`,`translateX(${(d?-124:124)+"px"})`),t.addAnimation(e)}}else o.fromTo("transform",`translateX(${c})`,`translateX(${m})`).afterClearStyles([s]),i.fromTo("transform",`translateX(${c})`,`translateX(${m})`).afterClearStyles([s,l]),y.afterClearStyles([l]),o.afterClearStyles([l]),n.afterClearStyles([l])})}return X}catch(o){throw o}}}}]);