(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(149),i=a(138);t.default=function(e){e.data;return r.a.createElement(l.a,null,r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("h2",null,"About")),r.a.createElement("article",null,"I'm a Web Developer, living and working in Austin, Tx."," ")),r.a.createElement("section",null,r.a.createElement("header",null,r.a.createElement("h2",null,"Projects"),r.a.createElement("ul",{className:"ul__general"},r.a.createElement("li",{className:"li__general"},r.a.createElement(i.Link,{className:"link__general",to:"/projects/wtf-bake"},"WTF_Bake")),r.a.createElement("li",{className:"li__general"},r.a.createElement(i.Link,{className:"link__general",to:"/projects/keep-up"},"Keep Up"))))))}},137:function(e,t,a){"use strict";var n=a(30);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(144)),l=n(a(145)),i=n(a(6)),o=n(a(47)),s=n(a(48)),c=n(a(4)),u=n(a(0)),d=a(14),f=a(138);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/portfolio/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},h=function(e){function t(t){var a;a=e.call(this,t)||this,(0,s.default)((0,o.default)((0,o.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,l.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,i=void 0===n?this.defaultGetProps:n,o=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var v=p(a);return u.default.createElement(d.Link,(0,l.default)({to:v,state:c,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return o&&o(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),_(a,{state:c,replace:m})),!0}},h))},t}(u.default.Component);h.propTypes=(0,l.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var v=u.default.forwardRef(function(e,t){return u.default.createElement(h,(0,l.default)({innerRef:t},e))});t.default=v;var _=function(e,t){window.___navigate(p(e),t)};t.navigate=_;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},138:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(137),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(139),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(28);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},139:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},140:function(e,t,a){},142:function(e,t,a){},144:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},145:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},146:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(49),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},147:function(e,t,a){},149:function(e,t,a){"use strict";a(140);var n=a(0),r=a.n(n),l=(a(142),a(138)),i=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__name"},r.a.createElement(l.Link,{className:"link__general",to:"/"},"Abbey Hart")),r.a.createElement("nav",{className:"header__nav"},r.a.createElement("ul",{className:"header__list"},r.a.createElement("li",{className:"header__list-item"},r.a.createElement(l.Link,{className:"link__general",to:"/about"},"About")),r.a.createElement("li",{className:"header__list-item"},r.a.createElement(l.Link,{className:"link__general",to:"/projects"},"Projects")),r.a.createElement("li",{className:"header__list-item"},r.a.createElement(l.Link,{className:"link__general",to:"/writing"},"Writing")),r.a.createElement("li",{className:"header__list-item"},r.a.createElement(l.Link,{className:"link__general",to:"/contact"},"Contact")))))},o=(a(147),function(){return r.a.createElement("footer",null,r.a.createElement("div",null,"Made with"," ",r.a.createElement("span",{role:"img","aria-label":"Facepalm"},"🤦‍♀️")),r.a.createElement("ul",{className:"footer__list"},r.a.createElement("li",{className:"footer__list-item"},"Email"),r.a.createElement("li",{className:"footer__list-item"},"GitHub"),r.a.createElement("li",{className:"footer__list-item"},"LinkedIn"),r.a.createElement("li",{className:"footer__list-item"},"Medium")))});t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,null),r.a.createElement("div",{className:"content"},t),r.a.createElement(o,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-42c1a6977b20b385421e.js.map