(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{519:function(e,t,n){"use strict";n(525);var a=n(0),r=n(148),i=n.n(r),c=n(59),l=n(150),o=n(413),s=n.n(o);t.a=function(e){var t,n=e.className,r=e.underlined,o=e.type,u=void 0===o?"primary":o,m=e.to,f=void 0===m?l.b.Main():m,d=e.children,v=e.getProps,g=e.onClick;return a.createElement(c.a,{to:f,className:i()(s.a.link,(t={},t[s.a.linkUnderlined]=r,t),s.a[u],n),getProps:v,onClick:g},d)}},520:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return f}));n(42),n(45),n(4),n(101),n(7);var a=n(0),r=n(606),i=n(148),c=n.n(i),l=n(418),o=n.n(l);function s(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var u=function(e){var t=e.className,n=s(e,["className"]);return a.createElement(r.Grid,Object.assign({className:c()(o.a.container,t)},n),n.children)},m=function(e){return a.createElement(r.Row,e,e.children)},f=function(e){var t=e.children,n=e.xs,i=void 0===n||n,c=s(e,["children","xs"]);return a.createElement(r.Col,Object.assign({xs:i},c),t)}},523:function(e,t,n){"use strict";n(7);var a=n(0),r=n(539);t.a=function(e){var t=Object.assign({},e);return a.createElement(r.a,Object.assign({element:"button"},t))}},524:function(e,t,n){"use strict";n(7);var a=n(0),r=n(539),i=n(519);t.a=function(e){var t=Object.assign({},e);return a.createElement(r.a,Object.assign({element:i.a},t))}},539:function(e,t,n){"use strict";n(42),n(45),n(4),n(101),n(7);var a=n(0),r=n(148),i=n.n(r),c=n(540),l=n(414),o=n.n(l);var s=function(e){switch(e){case"primary":return o.a.primary;case"secondary":return o.a.secondary;case"outlined":return o.a.outlined;case"noline":return o.a.noline;default:Object(c.a)(e)}},u=function(e){switch(e){case"large":return o.a.sizeLarge;case"normal":return o.a.sizeNormal;default:Object(c.a)(e)}};t.a=function(e){var t,n=e.className,r=e.styleType,c=void 0===r?"primary":r,l=e.theme,m=void 0===l?"light":l,f=e.size,d=void 0===f?"normal":f,v=e.children,g=e.element,p=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","styleType","theme","size","children","element"]);return a.createElement(g,Object.assign({className:i()((t={},t[o.a.themeLight]="light"===m,t[o.a.themeDark]="dark"===m,t[o.a.themeBrown]="brown"===m,t),o.a.callToAction,s(c),u(d),n)},p,{children:v}))}},540:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){throw new Error(e+" is unreachable")}},547:function(e,t,n){"use strict";n(8),n(4),n(34);var a=n(1),r=n.n(a),i=(n(12),n(0)),c=n(82),l=n(150),o=n(554),s=n(524),u=n(519),m=n(556),f=n(6),d=(n(239),n(42),n(45),n(101),n(24),n(47),n(7),n(525),n(148)),v=n.n(d),g=n(615);var p=function(e){var t=e.color,n=void 0===t?"#fff":t,a=e.active,r=void 0!==a&&a,c=e.lineHeight,l=void 0===c?4:c,o=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["color","active","lineHeight"]);return i.createElement(g.Squeeze,Object.assign({lineHeight:l,padding:0,color:n,active:r},o))},b=n(149),k=n(60),h=n(151),E=n.n(h),N=n(422),y=n.n(N);function O(e,t,n,a,r,i,c){try{var l=e[i](c),o=l.value}catch(s){return void n(s)}l.done?t(o):Promise.resolve(o).then(a,r)}var C=function(e){var t,n;n=e,(t=c).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a;a=c;function c(t){var n;return(n=e.call(this,t)||this).state={isOpen:!1},n}var o=c.prototype;return o.toggleMenu=function(e){this.setState({isOpen:e})},o.scrollTo=function(){var e,t=(e=r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.toggleMenu(!1),"/"===window.location.pathname){e.next=5;break}return e.next=5,Object(k.navigate)("/");case 5:E.a.scroller.scrollTo(t,{smooth:!0});case 6:case"end":return e.stop()}}),e,this)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function c(e){O(i,a,r,c,l,"next",e)}function l(e){O(i,a,r,c,l,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}(),o.render=function(){var e,t,n=this,a=this.props,r=a.className,c=a.isLoggedIn,o=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(a,["className","isLoggedIn"]);return i.createElement("div",{className:r},i.createElement("div",Object.assign({className:v()(y.a.container,(e={},e[y.a.containerVisible]=this.state.isOpen,e))},o),i.createElement("div",{className:v()(y.a.innerContainer,(t={},t[y.a.innerContainerVisible]=this.state.isOpen,t))},i.createElement("ul",{className:y.a.list},function(e){var t=[{title:"Hjem",link:l.b.Main(),type:"link"},{title:"Behandlinger",link:l.b.TreatmentSection(),type:"pageSection"},{title:"Gavekort",link:l.b.GiftCard(),type:"link"},{title:"Nettbutikk",link:l.b.Store(),type:"link"},{title:"Om oss",link:l.b.AboutSection(),type:"pageSection"}];return[].concat(t,e?[{title:"Min olio",link:l.b.Dashboard(),type:"link"}]:[{title:"Bli medlem",link:l.b.Register(),type:"link"},{title:"Logg inn",link:l.b.LogIn(),type:"link"}])}(c).map((function(e){return i.createElement("li",{className:y.a.listItem,key:e.title},"link"===e.type?i.createElement(u.a,{className:y.a.link,to:e.link,onClick:function(){return n.toggleMenu(!1)}},i.createElement(b.d,null,e.title)):i.createElement(b.d,{onClick:function(){return n.scrollTo(e.link)}},e.title))}))))),i.createElement("div",{className:y.a.hamburgerMenu},i.createElement(p,{active:this.state.isOpen,onClick:function(){return n.toggleMenu(!n.state.isOpen)}})))},c}(i.Component),x=n(423),w=n.n(x),j=n(153);function A(e,t,n,a,r,i,c){try{var l=e[i](c),o=l.value}catch(s){return void n(s)}l.done?t(o):Promise.resolve(o).then(a,r)}var S=function(){var e,t=(e=r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(j.a)()){e.next=13;break}if("/store"!==t){e.next=8;break}(n=document.getElementsByClassName("snipcart-modal__close-title")).length>0&&n[0].click(),Object(k.navigate)(t),e.next=13;break;case 8:if("/"===window.location.pathname){e.next=12;break}return e.next=12,Object(k.navigate)("/");case 12:E.a.scroller.scrollTo(t,{smooth:!0});case 13:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function c(e){A(i,a,r,c,l,"next",e)}function l(e){A(i,a,r,c,l,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}(),L=function(e){return i.createElement("div",{className:w.a.loggedOutContainer},i.createElement("span",{onClick:function(){return S(l.b.Store())},className:w.a.routeLink},"Nettbutikk"),i.createElement("span",{onClick:function(){return S(l.b.TreatmentSection())},className:w.a.routeLink},"Behandlinger"),i.createElement(u.a,{underlined:!0,type:"secondary",to:l.b.GiftCard(),className:w.a.routeLink},"Gavekort"),i.createElement("span",{onClick:function(){return S(l.b.AboutSection())},className:w.a.routeLink},"Om oss"),i.createElement(u.a,{underlined:!0,type:"secondary",to:l.b.LogIn(),className:w.a.routeLink},"Logg inn"),i.createElement(s.a,{styleType:"outlined",to:l.b.Register(),className:w.a.buttons},"Bli medlem!"),i.createElement(s.a,{styleType:"secondary",to:l.b.Booking(),className:w.a.userSelect},"Book time"))},T=function(e){return e.isUserDataLoading||null==e.currentUser?null:i.createElement("div",{className:w.a.loggedOutContainer},i.createElement("span",{onClick:function(){return S(l.b.Store())},className:w.a.routeLink},"Nettbutikk"),i.createElement("span",{onClick:function(){return S(l.b.TreatmentSection())},className:w.a.routeLink},"Behandlinger"),i.createElement("span",{onClick:function(){return S(l.b.AboutSection())},className:w.a.routeLink},"Om oss"),i.createElement(u.a,{underlined:!0,type:"secondary",to:l.b.GiftCard(),className:w.a.routeLink},"Gavekort"),i.createElement(s.a,{styleType:"outlined",to:l.b.Dashboard(),className:w.a.buttons},"Hei, ",(t=e.currentUser.name,0===(n=t.split(" ")).length?t:n[0]),"! Gå til Min olio"),i.createElement(s.a,{styleType:"secondary",to:l.b.Booking()},"Book time"));var t,n};t.a=Object(c.b)((function(e){return{isLoggedIn:Object(f.h)(e),currentUser:Object(f.a)(e),isUserDataLoading:Object(f.k)(e),state:e}}),{})((function(e){return i.createElement(o.a,{leftColumn:i.createElement(i.Fragment,null,i.createElement("div",null,i.createElement(m.a,{color:"#fff"}))),rightColumn:i.createElement(i.Fragment,null,i.createElement("div",{className:w.a.rightColumn},e.isLoggedIn?i.createElement(T,e):i.createElement(L,e)),i.createElement("div",{className:w.a.mobileMenu},i.createElement("div",{className:w.a.bookingButton},i.createElement(s.a,{styleType:"secondary",to:l.b.Booking()},"Book time")),i.createElement(C,{isLoggedIn:e.isLoggedIn})))})}))},548:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABAdJREFUWAm9V81vTFEUP/fOVD8QrVEramzErhOsRKiQsEB0ZWHBlk0trCRimkhtfK4sbPgLCBYkRJGwoRk7sTHKik7a+mhH23nX+d3Ondx33p1nWomzeffjd88593zd8xS1SJNmsrtGtCeKoqPKqLxRlFdEeRw3RGVlqGyUKWut72WInveonqlWWDOPdGLB+fkouqBInUxHxncNmdttWg+zIuX4TnzWVAHceIEFE6kz8SNLnaliVtONZhYJKgDh85F5xpuFpYoL4dlFpTat9oaUSCjw1UwWFAtnRt0hZv+wNmVYifWqp+TziCmwaHbzsZlwNTND7a9fUltpjPTEN9KVCcsryq2jWt8mmitso/n+7WS6unwZ/ngqq9Vm3xINBdLMDsEdTx9Tx4O7PrPg2HR20e/9B6i670BQEemOhgITtcp1Q2pIcsVNV968QdnP43Irdb6wsY9+nRqiaF1vAGeGezO5IjasAnz7/EJkTR8DZ8Y/0eorl0jNzsTWW53AGtOXrgYtUXdFWYMZ53lRMoXZu+7cWrZw8IPiq66MSNZ27mSqeuBNSlTH/bvU+TDpc9PZSTPHjtN8YUfjZjY4X72wMaJmZyUrmj00SNUjg4l1tkKP5vI6IHfAMCS8tqGPTXqN5nbubgjHWUR9df9BuweMJAQweEqCbI3aLjfa+TaScPMfZ8/FBCcwrIjFMNYnuCLEE7I1HhYfjHGW81xS9fBgqnCHt9ZgrKTsh/dyiSBbcx7k5U728ye5RL/Z7K3SXGF7ApoJpDG/qGuQBZskOhRIKdVNHg/mvquaPphrQMGmob/4v8dQIGHvKJdL6IGK2CqFsCGeXJbfaW5nypJxbWPCK7Si9FbCms5D2BBP7qKmNNooyWlhy1a5xEXmXjCXJRD5DqwkvJSS6i2cTqAR8ch7n1xZDRUUh8MeSq98O8ALlVMS+sdllGKuelxW5/q3NaIdPl/xboxQvqVwCG1WinszaxVnAtHXWuU2N50nMHaE26y+PEKZL+NuaVlflOZQBeWm9c76TO6kTUPuXouSO/L+5+mhhCskLm0O01segQ7JybQKLLbOZlgyQzPx/fxFCj0wEivnOIOzzRqSRZn1hgSH6y3ZKPukXzKDO9qfcEv29BH7OPnc+njcurrvoG3LQtUTuc8d8oDrC20MOAb13qDM8zVuzf9CkbbSG64JY5Th90JXKnYbRaaW6+VnelesT/DP1sfT3APknXCsxRTAQr0tH+VhUAlglknT3JYPpLbljnGaOxxmKV9pdv+sDUJ/AWOYCH7iXicRmBL797kZ9n0u8QkXSABbAz+nRVknJE7OkedINRftct/N/6qAA8It6OG83/NuPmwzBibGw+L9no/6geZ4hL5/AKodxn9pXV5eAAAAAElFTkSuQmCC"},549:function(e,t,n){"use strict";var a=n(0),r=n(424),i=n.n(r);t.a=function(){return a.createElement("div",{className:i.a.container},a.createElement("div",{className:i.a.icon}),a.createElement("p",{className:i.a.text},"olio er midlertidig stengt i påvente av videre føringer fra regjeringen."))}},550:function(e,t,n){"use strict";n(8),n(4);var a=n(1),r=n.n(a),i=(n(12),n(0)),c=n.n(i),l=n(59),o=n(523),s=n(150),u=n(6),m=n(13),f=n(33),d=n(153),v=n(82),g=n(425),p=n.n(g);function b(e,t,n,a,r,i,c){try{var l=e[i](c),o=l.value}catch(s){return void n(s)}l.done?t(o):Promise.resolve(o).then(a,r)}t.a=Object(v.b)((function(e,t){return{privacyPolicyStatus:Object(u.c)(e),user:Object(u.a)(e)}}),(function(e){return Object(f.bindActionCreators)({setPrivacyPolicyStatus:m.t},e)}))((function(e){var t=Object(i.useState)(),n=t[0],a=t[1],u=function(){var t,n=(t=r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.user){t.next=3;break}return t.next=3,e.setPrivacyPolicyStatus(!0);case 3:a(!0),Object(d.a)()&&localStorage.setItem("privacy_policy_status","true");case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function c(e){b(i,a,r,c,l,"next",e)}function l(e){b(i,a,r,c,l,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,function(){if(!e.privacyPolicyStatus&&!n)return c.a.createElement("div",{className:p.a.container},c.a.createElement("div",{className:p.a.textContainer},c.a.createElement("span",{className:p.a.text},"Denne nettsiden benytter cookies (informasjonskapsler) for å optimalisere opplevelsen din."," ",c.a.createElement(l.a,{to:s.b.PrivacyPolicyDetail(),className:p.a.text},"Les mer her"))),c.a.createElement(o.a,{className:p.a.button,styleType:"secondary",onClick:function(){return u()}},"Den er grei!"))}())}))},551:function(e,t,n){"use strict";n(525);var a=n(0),r=n(148),i=n.n(r),c=n(520),l=(n(42),n(45),n(4),n(101),n(7),n(420)),o=n.n(l);var s=function(e){var t=e.className,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className"]);return a.createElement("a",Object.assign({className:i()(o.a.container,t),target:"_blank"},n),n.children)},u=n(519),m=n(150),f=n(421),d=n.n(f);t.a=function(e){return a.createElement("footer",{className:d.a.container},a.createElement(c.b,null,a.createElement(c.c,null,a.createElement(c.a,{xs:6,sm:!0,className:d.a.column},a.createElement("a",{href:"https://www.facebook.com/pg/oliono/about/?ref=page_internal",target:"_blank",className:d.a.link},"Om oss")),a.createElement(c.a,{xs:6,sm:!0,className:d.a.column},a.createElement("a",{href:"https://www.messenger.com/t/oliono",target:"_blank",className:d.a.link},"Kontakt oss")),a.createElement(c.a,{xs:6,sm:!0,className:d.a.column},a.createElement(u.a,{to:m.b.Booking(),className:d.a.link},"Book time")),a.createElement(c.a,{xs:6,sm:!0,className:d.a.column},a.createElement(u.a,{to:m.b.Terms(),className:d.a.link},"Vilkår")),a.createElement(c.a,{xs:6,sm:!0,className:i()(d.a.column,d.a.socialMediaIcons)},a.createElement(s,{href:"https://www.facebook.com/oliono/",className:d.a.iconFacebook})),a.createElement(c.a,{xs:6,sm:!0,className:d.a.column},a.createElement(s,{href:"https://www.instagram.com/olio.no/",className:d.a.iconInstagram})))))}},554:function(e,t,n){"use strict";n(42),n(45),n(4),n(101),n(7);var a=n(0),r=n(148),i=n.n(r),c=n(520),l=n(419),o=n.n(l);t.a=function(e){var t=e.className,n=e.leftColumn,r=e.rightColumn,l=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["className","leftColumn","rightColumn"]);return a.createElement("div",Object.assign({className:i()(o.a.container,t)},l),a.createElement(c.b,null,a.createElement(c.c,{className:o.a.row},a.createElement(c.a,{xs:3,md:3,className:o.a.columnLeft},n),r&&a.createElement(c.a,{xs:9,md:9,className:o.a.columnRight},r))))}},556:function(e,t,n){"use strict";n(42),n(45),n(4),n(101);var a=n(0),r=n(60),i=n(415),c=n.n(i);t.a=function(e){e.className;var t=e.color,n=void 0===t?"#8e4f5a":t;!function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n])}(e,["className","color"]);return a.createElement("svg",{width:"80px",height:"36px",viewBox:"0 0 80 36",onClick:function(){return Object(r.navigate)("/")},className:c.a.logo},a.createElement("title",null,"Hjem"),a.createElement("g",{id:"SVG-Layer",transform:"translate(-0.500000, 0.000000)",fill:n},a.createElement("path",{d:"M13.9615 29.7019C9.97528 29.7019 6.73063 26.5051 6.73063 22.5724C6.73063 18.6457 9.97528 15.4428 13.9615 15.4428C17.9538 15.4428 21.1987 18.6457 21.1987 22.5724C21.1987 26.5051 17.9538 29.7019 13.9615 29.7019ZM13.9615 9.73063C6.77425 9.73063 0.925812 15.4919 0.925812 22.5724C0.925812 29.6529 6.77425 35.4141 13.9615 35.4141C21.155 35.4141 27.0035 29.6529 27.0035 22.5724C27.0035 15.4919 21.155 9.73063 13.9615 9.73063Z",fill:"#fff"}),a.createElement("path",{d:"M66.8901 29.7018C62.8971 29.7018 59.6514 26.5049 59.6514 22.5721C59.6514 18.6453 62.8971 15.4424 66.8901 15.4424C70.8771 15.4424 74.1226 18.6453 74.1226 22.5721C74.1226 26.5049 70.8771 29.7018 66.8901 29.7018ZM65.5508 9.79749C59.421 10.3989 54.5247 15.2215 53.9142 21.2591C53.5216 25.1245 54.8922 28.9163 57.6704 31.6529C60.1375 34.0827 63.4453 35.4141 66.9025 35.4141C67.3387 35.4141 67.7809 35.3957 68.2234 35.3528C74.353 34.7453 79.2432 29.9287 79.8597 23.8851C80.2524 20.0197 78.8818 16.2339 76.1036 13.4973C73.3251 10.7548 69.4753 9.40487 65.5508 9.79749Z",fill:"#fff"}),a.createElement("path",{d:"M31.5202 35.1623H37.4005V0.414093H31.5202V35.1623Z",fill:"#fff"}),a.createElement("path",{d:"M43.3659 35.0784H49.2462V10.1503H43.3659V35.0784Z",fill:"#fff"}),a.createElement("path",{d:"M43.3659 6.20546H49.2462V0.414093H43.3659V6.20546Z",fill:"#fff"})))}}}]);
//# sourceMappingURL=3-388280469f129ad46583.js.map