(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{497:function(e,t,a){"use strict";a.r(t);a(11),a(4);var n=a(1),r=a.n(n),s=(a(15),a(240),a(0)),c=a.n(s),l=a(190),i=a.n(l),u=a(552),o=a(583),m=a(519),f=a(24),d=a(85),p=a(555),h=a(58),v=a(498),y=a.n(v);function g(e,t,a,n,r,s,c){try{var l=e[s](c),i=l.value}catch(u){return void a(u)}l.done?t(i):Promise.resolve(i).then(n,r)}function b(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var s=e.apply(t,a);function c(e){g(s,n,r,c,l,"next",e)}function l(e){g(s,n,r,c,l,"throw",e)}c(void 0)}))}}t.default=function(e){var t=Object(s.useState)(""),a=t[0],n=t[1],l=Object(s.useState)(""),v=l[0],g=l[1],E=Object(s.useState)(""),w=E[0],C=E[1],N=Object(s.useState)(""),O=N[0],j=N[1],k=Object(s.useState)(""),x=k[0],T=k[1],S=Object(s.useState)(!1),V=S[0],H=S[1],M=Object(s.useState)(),Z=M[0],q=M[1],z=Object(d.b)(e.location.search);Object(s.useEffect)((function(){z.hashedId&&q(z.hashedId)}),[]);var B=function(){var e=b(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=4;break}return x&&T(""),j("Venligst fyll inn epost."),e.abrupt("return");case 4:i.a.post(f.a.apiBaseUrl+"/users/current/password/reset",{email:w},{headers:{authorization:f.a.apiKey}}).then((function(e){O&&j(""),T("Du vil om kort tid motta en email med en link du må følge for å tilbakestille passordet ditt.")})).catch((function(e){x&&T(""),j(e.response.data.message)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=b(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==a.length&&0!==v.length){e.next=4;break}return x&&T(""),j("Venligst fyll inn begge feltene."),e.abrupt("return");case 4:if(a===v){e.next=8;break}return x&&T(""),j("Begge passordene må være like."),e.abrupt("return");case 8:i.a.post(f.a.apiBaseUrl+"/users/current/password/reset/"+Z,{new_password:a},{headers:{authorization:f.a.apiKey}}).then((function(e){O&&j(""),H(!0),T("Passordet ditt er nå oppdatert.")})).catch((function(e){x&&T(""),j(e.response.data.message)}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:y.a.container},c.a.createElement("div",{className:y.a.wrapper},c.a.createElement("div",{className:y.a.logo}," ",c.a.createElement(u.a,null)," "),Z?c.a.createElement(c.a.Fragment,null," ",c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{value:a,type:"password",onChange:function(e){return n(e.target.value)},placeholder:"Nytt passord",styleType:"secondary",className:y.a.input,required:!0}),c.a.createElement(o.a,{value:v,type:"password",onChange:function(e){return g(e.target.value)},placeholder:"Gjenta passord",styleType:"secondary",className:y.a.input,required:!0}),c.a.createElement(m.a,{type:"submit",onClick:F}," ","Bekreft"," "))," "):c.a.createElement(c.a.Fragment,null,c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:y.a.header},"Tilbakestill passord"),c.a.createElement(o.a,{value:w,onChange:function(e){return C(e.target.value)},placeholder:"Epost",styleType:"secondary",className:y.a.input,required:!0}),c.a.createElement(m.a,{type:"submit",onClick:B}," ","Neste"," "))),c.a.createElement("div",{className:y.a.alert},O||x?c.a.createElement(p.a,{error:O,success:x}):null),V&&c.a.createElement(h.a,{to:"/login"},c.a.createElement(m.a,{type:"button",styleType:"secondary"}," ","Login"," ")," ")))}},519:function(e,t,a){"use strict";a(7);var n=a(0),r=a(535);t.a=function(e){var t=Object.assign({},e);return n.createElement(r.a,Object.assign({element:"button"},t))}},535:function(e,t,a){"use strict";a(42),a(45),a(4),a(100),a(7);var n=a(0),r=a(147),s=a.n(r),c=a(536),l=a(411),i=a.n(l);var u=function(e){switch(e){case"primary":return i.a.primary;case"secondary":return i.a.secondary;case"outlined":return i.a.outlined;case"noline":return i.a.noline;default:Object(c.a)(e)}},o=function(e){switch(e){case"large":return i.a.sizeLarge;case"normal":return i.a.sizeNormal;default:Object(c.a)(e)}};t.a=function(e){var t,a=e.className,r=e.styleType,c=void 0===r?"primary":r,l=e.theme,m=void 0===l?"light":l,f=e.size,d=void 0===f?"normal":f,p=e.children,h=e.element,v=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["className","styleType","theme","size","children","element"]);return n.createElement(h,Object.assign({className:s()((t={},t[i.a.themeLight]="light"===m,t[i.a.themeDark]="dark"===m,t[i.a.themeBrown]="brown"===m,t),i.a.callToAction,u(c),o(d),a)},v,{children:p}))}},536:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){throw new Error(e+" is unreachable")}},552:function(e,t,a){"use strict";a(42),a(45),a(4),a(100);var n=a(0),r=a(59),s=a(412),c=a.n(s);t.a=function(e){e.className;var t=e.color,a=void 0===t?"#8e4f5a":t;!function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a])}(e,["className","color"]);return n.createElement("svg",{width:"80px",height:"36px",viewBox:"0 0 80 36",onClick:function(){return Object(r.navigate)("/")},className:c.a.logo},n.createElement("title",null,"Hjem"),n.createElement("g",{id:"SVG-Layer",transform:"translate(-0.500000, 0.000000)",fill:a},n.createElement("path",{d:"M13.9615 29.7019C9.97528 29.7019 6.73063 26.5051 6.73063 22.5724C6.73063 18.6457 9.97528 15.4428 13.9615 15.4428C17.9538 15.4428 21.1987 18.6457 21.1987 22.5724C21.1987 26.5051 17.9538 29.7019 13.9615 29.7019ZM13.9615 9.73063C6.77425 9.73063 0.925812 15.4919 0.925812 22.5724C0.925812 29.6529 6.77425 35.4141 13.9615 35.4141C21.155 35.4141 27.0035 29.6529 27.0035 22.5724C27.0035 15.4919 21.155 9.73063 13.9615 9.73063Z",fill:"#fff"}),n.createElement("path",{d:"M66.8901 29.7018C62.8971 29.7018 59.6514 26.5049 59.6514 22.5721C59.6514 18.6453 62.8971 15.4424 66.8901 15.4424C70.8771 15.4424 74.1226 18.6453 74.1226 22.5721C74.1226 26.5049 70.8771 29.7018 66.8901 29.7018ZM65.5508 9.79749C59.421 10.3989 54.5247 15.2215 53.9142 21.2591C53.5216 25.1245 54.8922 28.9163 57.6704 31.6529C60.1375 34.0827 63.4453 35.4141 66.9025 35.4141C67.3387 35.4141 67.7809 35.3957 68.2234 35.3528C74.353 34.7453 79.2432 29.9287 79.8597 23.8851C80.2524 20.0197 78.8818 16.2339 76.1036 13.4973C73.3251 10.7548 69.4753 9.40487 65.5508 9.79749Z",fill:"#fff"}),n.createElement("path",{d:"M31.5202 35.1623H37.4005V0.414093H31.5202V35.1623Z",fill:"#fff"}),n.createElement("path",{d:"M43.3659 35.0784H49.2462V10.1503H43.3659V35.0784Z",fill:"#fff"}),n.createElement("path",{d:"M43.3659 6.20546H49.2462V0.414093H43.3659V6.20546Z",fill:"#fff"})))}},555:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(147),c=a.n(s),l=a(148),i=a(430),u=a.n(i);t.a=function(e){var t,a=e.error,n=void 0===a?null:a,s=e.success,i=void 0===s?null:s;if(!n&&!i)return null;var o=n?"Oops!":"",m=n||i;return r.a.createElement("div",{className:c()(u.a.alert,(t={},t[u.a.alertDanger]=n,t[u.a.alertSuccess]=i,t))},r.a.createElement("div",{className:u.a.alertContent},r.a.createElement(l.e,{className:u.a.text},o),r.a.createElement(l.a,{className:u.a.text},m)))}},583:function(e,t,a){"use strict";a(42),a(45),a(4),a(100),a(7);var n=a(0),r=a(147),s=a.n(r),c=a(536),l=a(429),i=a.n(l);var u=function(e){switch(e){case"primary":return i.a.primary;case"secondary":return i.a.secondary;default:Object(c.a)(e)}},o=function(e){switch(e){case"name":return"name";case"tel":return"tel";case"email":return"email";case"date":return"date";case"password":return"password";default:return"text"}};t.a=function(e){var t,a,r=e.className,c=e.required,l=void 0===c||c,m=e.styleType,f=void 0===m?"primary":m,d=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["className","required","styleType"]);return n.createElement("div",{className:s()(i.a.container,r)},n.createElement("input",Object.assign({},d,{type:o(d.type),className:s()(i.a.input,u(f)),placeholder:(t=d.placeholder,a=d.type,t||o(a)),required:l})))}}}]);
//# sourceMappingURL=component---src-domain-user-components-request-password-reset-page-tsx-3c32e1434d41c659b452.js.map