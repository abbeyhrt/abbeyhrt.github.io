(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{155:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(34),c=n.n(l);n.d(t,"a",function(){return c.a});n(156);var s=a.a.createContext({}),u=function(e){return a.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,n){var r;e.exports=(r=n(158))&&r.default||r},157:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n(35);var r=n(74),a=n.n(r),o=n(0),i=n.n(o);function l(e){var t=e.children,n=a()(e,["children"]);return i.a.createElement("main",Object.assign({id:"skip-to-content"},n),t)}},158:function(e,t,n){"use strict";n.r(t);n(35);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},159:function(e,t,n){"use strict";var r=n(160),a=n(155),o=n(4),i=n.n(o),l=n(0),c=n.n(l),s=n(163),u=n.n(s),b="293310180";function f(e){var t=e.description,n=e.title;return c.a.createElement(a.b,{query:b,render:function(e){var r=e.site.siteMetadata,a=[{name:"description",content:t||r.description},{property:"og:url",content:r.siteUrl},{property:"og:title",content:n||r.title},{property:"og:description",content:t||r.description},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.social.twitter},{name:"twitter:title",content:n||r.title},{name:"twitter:description",content:t||r.description}];return c.a.createElement(u.a,{htmlAttributes:{lang:"en"},title:n||r.title,meta:a})},data:r})}f.propTypes={title:i.a.string,description:i.a.string},t.a=f},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Abbey Hart",description:"The portfolio of Abbey Hart",siteUrl:"https://abbeyhrt.github.io/portfolio",social:{twitter:"@abbeyhrt"}}}}}},161:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(74),a=n.n(r),o=n(0),i=n.n(o),l=n(159);function c(e){var t=e.children,n=a()(e,["children"]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,null),i.a.createElement("a",{href:"#skip-to-content",className:"show-on-focus"},"Skip to content"),i.a.createElement("div",n,t))}},162:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o={focusable:"false",preserveAspectRatio:"xMidYMid meet",style:"will-change: transform;"};function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,n=e.height,i=e.viewBox,l=void 0===i?"0 0 ".concat(t," ").concat(n):i,c=a(e,["width","height","viewBox"]),s=c.tabindex,u=a(c,["tabindex"]),b=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){r(e,t,n[t])})}return e}({},o,u,{width:t,height:n,viewBox:l});return b["aria-label"]||b["aria-labelledby"]||b.title?(b.role="img",null!=s&&(b.focusable="true",b.tabindex=s)):b["aria-hidden"]=!0,b}var l=n(4),c=n.n(l),s=n(0),u=n.n(s);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){m(e,t,n[t])})}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y={willChange:"transform"},d=u.a.forwardRef(function(e,t){var n=e.className,r=e.children,a=e.style,o=e.tabIndex,l=i(f({},p(e,["className","children","style","tabIndex"]),{tabindex:o})),c=l.tabindex,s=p(l,["tabindex"]);return n&&(s.className=n),null!=c&&(s.tabIndex=c),"object"===b(a)?s.style=f({},y,a):s.style=y,t&&(s.ref=t),u.a.createElement("svg",s,r,u.a.createElement("path",{fillRule:"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45 3 3 0 0 0 4.08 1.16 2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76 5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7 5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z"}))});d.displayName="LogoGithub24",d.propTypes={"aria-hidden":c.a.bool,"aria-label":c.a.string,"aria-labelledby":c.a.string,className:c.a.string,children:c.a.node,height:c.a.number,preserveAspectRatio:c.a.string,tabIndex:c.a.string,viewBox:c.a.string,width:c.a.number,xmlns:c.a.string},d.defaultProps={width:24,height:24,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"};var g=d;function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x={willChange:"transform"},j=u.a.forwardRef(function(e,t){var n=e.className,r=e.children,a=e.style,o=e.tabIndex,l=i(v({},O(e,["className","children","style","tabIndex"]),{tabindex:o})),c=l.tabindex,s=O(l,["tabindex"]);return n&&(s.className=n),null!=c&&(s.tabIndex=c),"object"===h(a)?s.style=v({},x,a):s.style=x,t&&(s.ref=t),u.a.createElement("svg",s,r,u.a.createElement("path",{d:"M26.21 4H5.79A1.78 1.78 0 0 0 4 5.73V26.2a1.77 1.77 0 0 0 1.79 1.73h20.42A1.77 1.77 0 0 0 28 26.2V5.73A1.78 1.78 0 0 0 26.21 4zm-15.1 20.41H7.59V13h3.52zm-1.72-13a2.07 2.07 0 0 1-2.07-2.02 2 2 0 0 1 2.07-2.07 2.07 2.07 0 0 1 0 4.13zm15.09 12.93H21v-5.58c0-1.33 0-3.06-1.86-3.06S17 17.16 17 18.63v5.65h-3.56V13h3.32v1.5h.07a3.72 3.72 0 0 1 3.39-1.86c3.59 0 4.26 2.4 4.26 5.45z"}))});j.displayName="LogoLinkedin24",j.propTypes={"aria-hidden":c.a.bool,"aria-label":c.a.string,"aria-labelledby":c.a.string,className:c.a.string,children:c.a.node,height:c.a.number,preserveAspectRatio:c.a.string,tabIndex:c.a.string,viewBox:c.a.string,width:c.a.number,xmlns:c.a.string},j.defaultProps={width:24,height:24,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"};var E=j;function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){P(e,t,n[t])})}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M={willChange:"transform"},k=u.a.forwardRef(function(e,t){var n=e.className,r=e.children,a=e.style,o=e.tabIndex,l=i(A({},N(e,["className","children","style","tabIndex"]),{tabindex:o})),c=l.tabindex,s=N(l,["tabindex"]);return n&&(s.className=n),null!=c&&(s.tabIndex=c),"object"===S(a)?s.style=A({},M,a):s.style=M,t&&(s.ref=t),u.a.createElement("svg",s,r,u.a.createElement("path",{d:"M11.92 24.94A12.76 12.76 0 0 0 24.76 12.1v-.59A9.4 9.4 0 0 0 27 9.18a9.31 9.31 0 0 1-2.59.71 4.56 4.56 0 0 0 2-2.5 8.89 8.89 0 0 1-2.86 1.1 4.52 4.52 0 0 0-7.7 4.11 12.79 12.79 0 0 1-9.3-4.71 4.51 4.51 0 0 0 1.4 6 4.47 4.47 0 0 1-2-.56v.05a4.53 4.53 0 0 0 3.55 4.45 4.53 4.53 0 0 1-2 .08A4.51 4.51 0 0 0 11.68 21a9.05 9.05 0 0 1-5.61 2A9.77 9.77 0 0 1 5 22.91a12.77 12.77 0 0 0 6.92 2"}))});k.displayName="LogoTwitter24",k.propTypes={"aria-hidden":c.a.bool,"aria-label":c.a.string,"aria-labelledby":c.a.string,className:c.a.string,children:c.a.node,height:c.a.number,preserveAspectRatio:c.a.string,tabIndex:c.a.string,viewBox:c.a.string,width:c.a.number,xmlns:c.a.string},k.defaultProps={width:24,height:24,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"};var I=k;function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){B(e,t,n[t])})}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={willChange:"transform"},q=u.a.forwardRef(function(e,t){var n=e.className,r=e.children,a=e.style,o=e.tabIndex,l=i(R({},T(e,["className","children","style","tabIndex"]),{tabindex:o})),c=l.tabindex,s=T(l,["tabindex"]);return n&&(s.className=n),null!=c&&(s.tabIndex=c),"object"===_(a)?s.style=R({},C,a):s.style=C,t&&(s.ref=t),u.a.createElement("svg",s,r,u.a.createElement("path",{d:"M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78 6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z"}))});q.displayName="Email24",q.propTypes={"aria-hidden":c.a.bool,"aria-label":c.a.string,"aria-labelledby":c.a.string,className:c.a.string,children:c.a.node,height:c.a.number,preserveAspectRatio:c.a.string,tabIndex:c.a.string,viewBox:c.a.string,width:c.a.number,xmlns:c.a.string},q.defaultProps={width:24,height:24,viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"};var z=q,H=n(155),L=(n(35),n(74)),V=n.n(L);function D(e){var t=e.children,n=V()(e,["children"]);return u.a.createElement("a",Object.assign({rel:"noopener noreferrer"},n),t)}function F(){return u.a.createElement("aside",{className:"AboutMe"},u.a.createElement("h1",{className:"AboutMe__name"},"Abbey Hart"),u.a.createElement("p",{className:"AboutMe__bio"},"I'm a web developer living in Austin, TX. I am currently a student at ACC pursuing an AS in Computer Science."),u.a.createElement("nav",{"aria-label":"Site links",className:"AboutMe__nav"},u.a.createElement("ul",{className:"AboutMe__links"},u.a.createElement("li",{className:"AboutMe__link"},u.a.createElement(H.a,{to:"/about"},"About")),u.a.createElement("li",{className:"AboutMe__link"},u.a.createElement(H.a,{to:"/projects"},"Projects")),u.a.createElement("li",{className:"AboutMe__link"},u.a.createElement(H.a,{to:"/writing"},"Writing")))),u.a.createElement("ul",{className:"AboutMe__social-links"},u.a.createElement("li",null,u.a.createElement(D,{className:"AboutMe__social-link",href:"https://twitter.com/abbeyhrt",title:"Find me on Twitter"},u.a.createElement(I,null))),u.a.createElement("li",null,u.a.createElement(D,{className:"AboutMe__social-link",href:"https://www.linkedin.com/in/CS-abbey-hart",title:"Find me on LinkedIn"},u.a.createElement(E,null))),u.a.createElement("li",null,u.a.createElement(D,{className:"AboutMe__social-link",href:"https://github.com/abbeyhrt",title:"Find me on GitHub"},u.a.createElement(g,null))),u.a.createElement("li",null,u.a.createElement("a",{className:"AboutMe__social-link",href:"mailto:abbhart.work@gmail.com",title:"Email me"},u.a.createElement(z,null)))))}n.d(t,"a",function(){return F})}}]);
//# sourceMappingURL=1-b85aed86539237c0b7ea.js.map