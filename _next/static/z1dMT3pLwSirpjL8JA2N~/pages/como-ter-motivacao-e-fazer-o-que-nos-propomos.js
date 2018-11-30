(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,t,n){"use strict";var r=n(57);e.exports=function(e){return r(e,!1)}},110:function(e,t,n){"use strict";var r=n(14),o=n(45),i=n(24),a="mixins";e.exports=function(e,t,n){var s=[],c={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},l={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},u={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)f(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=r({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=r({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=m(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=r({},e.propTypes,t)},statics:function(e,t){!function(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in u;i(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;if(a){var s=l.hasOwnProperty(n)?l[n]:null;return i("DEFINE_MANY_MERGED"===s,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=m(e[n],r))}e[n]=r}}}(e,t)},autobind:function(){}};function p(e,t){var n=c.hasOwnProperty(t)?c[t]:null;g.hasOwnProperty(t)&&i("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&i("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function f(e,n){if(n){i("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),i(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=e.prototype,o=r.__reactAutoBindPairs;for(var s in n.hasOwnProperty(a)&&u.mixins(e,n.mixins),n)if(n.hasOwnProperty(s)&&s!==a){var l=n[s],f=r.hasOwnProperty(s);if(p(f,s),u.hasOwnProperty(s))u[s](e,l);else{var d=c.hasOwnProperty(s);if("function"!=typeof l||d||f||!1===n.autobind)if(f){var y=c[s];i(d&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,s),"DEFINE_MANY_MERGED"===y?r[s]=m(r[s],l):"DEFINE_MANY"===y&&(r[s]=h(r[s],l))}else r[s]=l;else o.push(s,l),r[s]=l}}}}function d(e,t){for(var n in i(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."),t)t.hasOwnProperty(n)&&(i(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function m(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return d(o,n),d(o,r),o}}function h(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function y(e,t){return t.bind(e)}var v={componentDidMount:function(){this.__isMounted=!0}},b={componentWillUnmount:function(){this.__isMounted=!1}},g={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},w=function(){};return r(w.prototype,e.prototype,g),function(e){var t=function(e,r,a){this.__reactAutoBindPairs.length&&function(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var r=t[n],o=t[n+1];e[r]=y(e,o)}}(this),this.props=e,this.context=r,this.refs=o,this.updater=a||n,this.state=null;var s=this.getInitialState?this.getInitialState():null;i("object"==typeof s&&!Array.isArray(s),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=s};for(var r in t.prototype=new w,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],s.forEach(f.bind(null,t)),f(t,v),f(t,e),f(t,b),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),i(t.prototype.render,"createClass(...): Class specification must implement a `render` method."),c)t.prototype[r]||(t.prototype[r]=null);return t}}},111:function(e,t,n){e.exports=n(112)()},112:function(e,t,n){"use strict";var r=n(113);function o(){}e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},113:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18:function(e,t,n){"use strict";var r=n(2),o=n.n(r),i=n(1),a=n.n(i),s=n(62),c=n.n(s),l=n(63),u=n.n(l),p=n(64),f=n.n(p),d=function(e){return e.cloneNode(!0)},m={},h=[],y=function(e,t){h[e]=h[e]||[],h[e].push(t)},v=function(e,t){var n="file:"===window.location.protocol;if(void 0!==m[e])m[e]instanceof SVGSVGElement?t(d(m[e])):y(e,t);else{if(!window.XMLHttpRequest)return t("Browser does not support XMLHttpRequest"),!1;m[e]={},y(e,t);var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState){if(404===r.status||null===r.responseXML)return t("Unable to load SVG file: "+e),n&&t("Note: SVG injection ajax calls do not work locally without adjusting security setting in your browser. Or consider using a local webserver."),t(),!1;if(!(200===r.status||n&&0===r.status))return t("There was a problem injecting the SVG: "+r.status+" "+r.statusText),!1;if(r.responseXML instanceof Document)m[e]=r.responseXML.documentElement;else if(DOMParser&&DOMParser instanceof Function){var o;try{o=(new DOMParser).parseFromString(r.responseText,"text/xml")}catch(e){o=void 0}if(!o||o.getElementsByTagName("parsererror").length)return t("Unable to parse SVG file: "+e),!1;m[e]=o.documentElement}!function(e){for(var t=0,n=h[e].length;t<n;t++)!function(t){setTimeout(function(){h[e][t](d(m[e]))},0)}(t)}(e)}},r.open("GET",e),r.overrideMimeType&&r.overrideMimeType("text/xml"),r.send()}},b=function(e){for(var t={},n=(e=e.split(" ")).length,r=[];n--;)t.hasOwnProperty(e[n])||(t[e[n]]=1,r.unshift(e[n]));return r.join(" ")},g="http://www.w3.org/1999/xlink",w=[],E={},_=0,x=function(e,t,n,r,o){var i=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),a=e.getAttribute("data-src")||e.getAttribute("src");if(/\.svg/i.test(a))if(i)-1===w.indexOf(e)&&(w.push(e),e.setAttribute("src",""),v(a,function(n){if(void 0===n||"string"==typeof n)return o(n),!1;var i=e.getAttribute("id");i&&n.setAttribute("id",i);var s=e.getAttribute("title");s&&n.setAttribute("title",s);var c=[].concat(n.getAttribute("class")||[],"injected-svg",e.getAttribute("class")||[]).join(" ");n.setAttribute("class",b(c));var l=e.getAttribute("style");l&&n.setAttribute("style",l);var u=[].filter.call(e.attributes,function(e){return/^data-\w[\w-]*$/.test(e.name)});if(Array.prototype.forEach.call(u,function(e){e.name&&e.value&&n.setAttribute(e.name,e.value)}),r){var p,f,d,m,h,y={clipPath:["clip-path"],"color-profile":["color-profile"],cursor:["cursor"],filter:["filter"],linearGradient:["fill","stroke"],marker:["marker","marker-start","marker-mid","marker-end"],mask:["mask"],pattern:["fill","stroke"],radialGradient:["fill","stroke"]};Object.keys(y).forEach(function(e){p=e,d=y[e];for(var t=0,r=(f=n.querySelectorAll("defs "+p+"[id]")).length;t<r;t++){var o;m=f[t].id,h=m+"-"+_,Array.prototype.forEach.call(d,function(e){for(var t=0,r=(o=n.querySelectorAll("["+e+'*="'+m+'"]')).length;t<r;t++)o[t].setAttribute(e,"url(#"+h+")")});for(var i=n.querySelectorAll("[*|href]"),a=[],s=0,c=i.length;s<c;s++)i[s].getAttributeNS(g,"href").toString()==="#"+f[t].id&&a.push(i[s]);for(var l=0,u=a.length;l<u;l++)a[l].setAttributeNS(g,"href","#"+h);f[t].id=h}})}n.removeAttribute("xmlns:a");for(var v,x,j=n.querySelectorAll("script"),O=[],I=0,S=j.length;I<S;I++)(x=j[I].getAttribute("type"))&&"application/ecmascript"!==x&&"application/javascript"!==x||(v=j[I].innerText||j[I].textContent,O.push(v),n.removeChild(j[I]));if(O.length>0&&("always"===t||"once"===t&&!E[a])){for(var N=0,D=O.length;N<D;N++)new Function(O[N])(window);E[a]=!0}var C=n.querySelectorAll("style");Array.prototype.forEach.call(C,function(e){e.textContent+=""}),n.setAttribute("xmlns","http://www.w3.org/2000/svg"),n.setAttribute("xmlns:xlink",g),e.parentNode.replaceChild(n,e),delete w[w.indexOf(e)],e=null,_++,o(n)}));else{var s=e.getAttribute("data-fallback")||e.getAttribute("data-png");s?(e.setAttribute("src",s),o(null)):n?(e.setAttribute("src",n+"/"+a.split("/").pop().replace(".svg",".png")),o(null)):o("This browser does not support SVG and no PNG fallback was defined.")}else o("Attempted to inject a file with a non-svg extension: "+a)},j=function(e,t,n){var r=void 0===t?{}:t,o=r.evalScripts,i=void 0===o?"always":o,a=r.pngFallback,s=void 0!==a&&a,c=r.each,l=r.renumerateIRIElements,u=void 0===l||l;if(void 0!==e.length){var p=0;Array.prototype.forEach.call(e,function(t){x(t,i,s,u,function(t){c&&"function"==typeof c&&c(t),n&&e.length===++p&&n(p)})})}else e?x(e,i,s,u,function(t){c&&"function"==typeof c&&c(t),n&&n(1),e=null}):n&&n(0)},O=(n(111),n(81)),I=n.n(O),S=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).container=void 0,t.refCallback=function(e){t.container=e},t}f()(t,e);var n=t.prototype;return n.renderSVG=function(){if(this.container instanceof Node){var e=this.props,t=e.evalScripts,n=e.onInjected,r=e.renumerateIRIElements,o=e.src,a=e.svgClassName,s=e.svgStyle,c=document.createElement("div");c.innerHTML=I.a.renderToStaticMarkup(Object(i.createElement)("div",null,Object(i.createElement)("div",{className:a,"data-src":o,style:s})));var l=this.container.appendChild(c.firstChild);j(l.firstChild,{each:n,evalScripts:t,renumerateIRIElements:r})}},n.removeSVG=function(){this.container instanceof Node&&this.container.firstChild instanceof Node&&this.container.removeChild(this.container.firstChild)},n.componentDidMount=function(){this.renderSVG()},n.componentDidUpdate=function(){this.removeSVG(),this.renderSVG()},n.componentWillUnmount=function(){this.removeSVG()},n.render=function(){var e=this.props,t=(e.evalScripts,e.onInjected,e.renumerateIRIElements,e.src,e.svgClassName,e.svgStyle,u()(e,["evalScripts","onInjected","renumerateIRIElements","src","svgClassName","svgStyle"]));return Object(i.createElement)("div",c()({},t,{ref:this.refCallback}))},t}(i.Component);S.defaultProps={evalScripts:"never",onInjected:function(){},renumerateIRIElements:!0,svgClassName:null,svgStyle:{}},S.propTypes={};var N=S,D=n(0);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var A=2*D.d,k=function(e){var t=e.src,n=P(e,["src"]);return a.a.createElement("div",{className:o.a.dynamic([["4129127977",[6*D.d,A,D.a,2*D.c+2*D.f+2*A,D.e,D.h.transparent.light]]])+" svg"},a.a.createElement(o.a,{styleId:"4129127977",css:["div.__jsx-style-dynamic-selector{margin:0 auto;margin-top:".concat(6*D.d,"px;padding:").concat(A,"px;border-radius:").concat(D.a,"px;width:calc(100vw - ").concat(2*D.c+2*D.f+2*A,"px);max-width:").concat(D.e,"px !important;-webkit-transition:200ms background;transition:200ms background;}"),"div.__jsx-style-dynamic-selector:hover{background:".concat(D.h.transparent.light,";}"),"div.__jsx-style-dynamic-selector svg{width:100%;}","@media only screen and (max-width:740px){div.__jsx-style-dynamic-selector{overflow:auto;}div.__jsx-style-dynamic-selector svg{width:initial;}}"],dynamic:[6*D.d,A,D.a,2*D.c+2*D.f+2*A,D.e,D.h.transparent.light]}),a.a.createElement(N,C({src:t},n)))};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.a=function(e){var t=e.src,n=T(e,["src"]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{styleId:"1019815350",css:['g[id$="group"] path{-webkit-transition:200ms all;transition:200ms all;}','g[id$="group"]:hover path{fill-opacity:0.9;}']}),a.a.createElement(k,M({src:t},n)))}},24:function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,i,a,s,c){if(r(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,i,a,s,c],p=0;(l=new Error(t.replace(/%s/g,function(){return u[p++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,i=arguments,a=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,i)},t),a&&e.apply(o,i)}}},303:function(e,t,n){__NEXT_REGISTER_PAGE("/como-ter-motivacao-e-fazer-o-que-nos-propomos",function(){return e.exports=n(304),{page:e.exports.default}})},304:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(33),a=(n(32),n(17)),s=(n(5),n(18));t.default=function(){return o.a.createElement(i.a,{title:"Como ter motivação e sempre fazer o que nos propomos?",date:1539970091528,id:"como-ter-motivacao-e-fazer-o-que-nos-propomos"},o.a.createElement("h3",null,"Por que não temos motivação?"),o.a.createElement("p",null,"Poucas coisas na vida nos dão muita motivação. E para piorar, raramente são as mesmas coisas que temos obrigação de fazer."),o.a.createElement("p",null,"Como mostra o diagrama abaixo, passamos a maior parte de nossas vidas, fazendo tarefas que não queremos estar fazendo, ou que não estamos plenamente felizes ao fazê-las, o que não contribuem de forma clara para o nosso futuro."),o.a.createElement(s.a,{src:"/static/texto-1-diagrama-tarefas-2.svg"}),o.a.createElement("p",null,"Existem muitos fatores que contribuem para manter esses três círculos separados e, com certeza, a falta de compreensão de do que é composto nossa ",o.a.createElement("strong",null,"motivação")," é um deles."),o.a.createElement("p",null,"Nesse texto completo, nós explicamos como conquistar aquilo você procurava ao clicar nesse texto: como unir ao máximo esses três círculos de nossa vida."),o.a.createElement(s.a,{src:"/static/texto-1-diagrama-tarefas-6.svg"}),o.a.createElement("p",null,"A coisa é muito mais simples do que você pode imaginar. Pra ler o texto completo, é só deixar seu email aqui, que eu te envio!"),o.a.createElement(a.a,{text:"",location:"texto-1-want-more",buttonText:"quero ter motivação!"}),o.a.createElement("p",null,"Um abraço, e qualquer coisa, deixa um comentário aí em baixo e vamos conversando :)"))}},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(55),o=n(59),i=n(60);t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},32:function(e,t,n){"use strict";var r=n(2),o=n.n(r),i=n(1),a=n.n(i),s=n(0);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.a=function(e){var t=e.src,n=e.alt,r=l(e,["src","alt"]);return a.a.createElement("p",{className:o.a.dynamic([["2285008036",[s.e,s.a]]])},a.a.createElement(o.a,{styleId:"2285008036",css:["p.__jsx-style-dynamic-selector{max-width:".concat(s.e,"px !important;}"),"img.__jsx-style-dynamic-selector{width:100%;border-radius:".concat(s.a,"px;}")],dynamic:[s.e,s.a]}),a.a.createElement("img",c({src:t,alt:n||t},r,{className:o.a.dynamic([["2285008036",[s.e,s.a]]])+" "+(null!=r.className&&r.className||"")})))}},33:function(e,t,n){"use strict";var r=n(2),o=n.n(r),i=n(1),a=n.n(i),s=(n(4),n(20)),c=n.n(s),l=n(31),u="https://".concat("bussola.school"),p=function(e){var t=e.id,n=e.title;return a.a.createElement("div",null,a.a.createElement("h4",null,"Comentários"),a.a.createElement(l.DiscussionEmbed,{shortname:"bussola-school",config:{title:n,identifier:t,url:"".concat(u,"/").concat(t)}}))},f=n(0);t.a=function(e){var t=e.children,n=e.title,r=e.date,i=e.id;return a.a.createElement("section",{className:o.a.dynamic([["4117766596",[f.h.lightwhite,f.h.lightblack,f.f,f.f,f.g,6*f.d,f.e,6*f.d,2*f.d,4*f.d,3*f.d,f.h.lightblue]]])},a.a.createElement(c.a,null,a.a.createElement("title",{className:o.a.dynamic([["4117766596",[f.h.lightwhite,f.h.lightblack,f.f,f.f,f.g,6*f.d,f.e,6*f.d,2*f.d,4*f.d,3*f.d,f.h.lightblue]]])},n," - Bussola.school")),a.a.createElement(o.a,{styleId:"4117766596",css:["main{background:".concat(f.h.lightwhite," !important;}"),"section.__jsx-style-dynamic-selector{color:".concat(f.h.lightblack,";text-align:left;line-height:1.6;-webkit-letter-spacing:-.004em;-moz-letter-spacing:-.004em;-ms-letter-spacing:-.004em;letter-spacing:-.004em;margin:0 auto;padding-left:").concat(f.f,"px padding-right:").concat(f.f,"px;font-size:0.9em;}"),"article.__jsx-style-dynamic-selector > *{max-width:".concat(f.g,"px;margin-left:auto;margin-right:auto;}"),"section.__jsx-style-dynamic-selector ul.LayoutPost-clear{list-style:none;}","section.__jsx-style-dynamic-selector p{margin-top:".concat(6*f.d,"px;margin-bottom:0;}"),"section.__jsx-style-dynamic-selector article.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:1.5em;}","section.__jsx-style-dynamic-selector h1,section.__jsx-style-dynamic-selector h2,section.__jsx-style-dynamic-selector h3,section.__jsx-style-dynamic-selector h4{text-shadow:initial;text-transform:initial;max-width:".concat(f.e,"px !important;font-weight:900;margin-top:").concat(6*f.d,"px;}"),"section.__jsx-style-dynamic-selector h3,section.__jsx-style-dynamic-selector h4{padding:".concat(2*f.d,"px ").concat(4*f.d,"px;border-bottom:4px dotted #00000020;-webkit-transition:200ms all;transition:200ms all;}"),"section.__jsx-style-dynamic-selector acticle.__jsx-style-dynamic-selector h3,section.__jsx-style-dynamic-selector article.__jsx-style-dynamic-selector h4{margin-bottom:-".concat(3*f.d,"px;}"),"section.__jsx-style-dynamic-selector h3:hover,section.__jsx-style-dynamic-selector h4:hover{border-bottom:4px dotted #00000050;}","date.__jsx-style-dynamic-selector{font-size:0.9em;color:".concat(f.h.lightblue,";}")],dynamic:[f.h.lightwhite,f.h.lightblack,f.f,f.f,f.g,6*f.d,f.e,6*f.d,2*f.d,4*f.d,3*f.d,f.h.lightblue]}),a.a.createElement("article",{className:o.a.dynamic([["4117766596",[f.h.lightwhite,f.h.lightblack,f.f,f.f,f.g,6*f.d,f.e,6*f.d,2*f.d,4*f.d,3*f.d,f.h.lightblue]]])},a.a.createElement("h1",{className:o.a.dynamic([["4117766596",[f.h.lightwhite,f.h.lightblack,f.f,f.f,f.g,6*f.d,f.e,6*f.d,2*f.d,4*f.d,3*f.d,f.h.lightblue]]])},n),a.a.createElement("date",{className:o.a.dynamic([["4117766596",[f.h.lightwhite,f.h.lightblack,f.f,f.f,f.g,6*f.d,f.e,6*f.d,2*f.d,4*f.d,3*f.d,f.h.lightblue]]])},new Date(r).toDateString()),t),a.a.createElement(p,{id:i,title:n}))}},44:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},45:function(e,t,n){"use strict";e.exports={}},5:function(e,t,n){"use strict";var r=n(2),o=n.n(r),i=n(1),a=n.n(i),s=(n(4),n(0));t.a=function(e){var t=e.children;return a.a.createElement("p",{className:o.a.dynamic([["4009615491",[s.d,2*s.d,4*s.d,s.a,s.h.transparent.light]]])},a.a.createElement(o.a,{styleId:"4009615491",css:["p.__jsx-style-dynamic-selector{border-left:".concat(s.d,"px solid #e0e0e0;padding:").concat(2*s.d,"px ").concat(4*s.d,"px;font-size:0.9em;-webkit-transition:200ms all;transition:200ms all;border-radius:").concat(s.a,"px;}"),"p.__jsx-style-dynamic-selector:hover{background:".concat(s.h.transparent.light,";}")],dynamic:[s.d,2*s.d,4*s.d,s.a,s.h.transparent.light]}),a.a.createElement("i",{className:o.a.dynamic([["4009615491",[s.d,2*s.d,4*s.d,s.a,s.h.transparent.light]]])},t))}},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(23),a=(r=i)&&r.__esModule?r:{default:r},s=n(30);var c=(0,s.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?c():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},56:function(e,t,n){"use strict";var r=n(44);e.exports=r},57:function(e,t,n){"use strict";var r=n(14),o=n(78),i=n(58),a=function(){};function s(){return null}e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,c="@@iterator";var l="<<anonymous>>",u={array:m("array"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:d(s),arrayOf:function(e){return d(function(t,n,r,i,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s)){var c=y(s);return new f("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an array.")}for(var l=0;l<s.length;l++){var u=e(s,l,r,i,a+"["+l+"]",o);if(u instanceof Error)return u}return null})},element:function(){return d(function(t,n,r,o,i){var a=t[n];if(!e(a)){var s=y(a);return new f("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected a single ReactElement.")}return null})}(),instanceOf:function(e){return d(function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||l,s=function(e){if(!e.constructor||!e.constructor.name)return l;return e.constructor.name}(t[n]);return new f("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null})},node:function(){return d(function(e,t,n,r,o){if(!h(e[t]))return new f("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.");return null})}(),objectOf:function(e){return d(function(t,n,r,i,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var s=t[n],c=y(s);if("object"!==c)return new f("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var l in s)if(s.hasOwnProperty(l)){var u=e(s,l,r,i,a+"."+l,o);if(u instanceof Error)return u}return null})},oneOf:function(e){if(!Array.isArray(e))return s;return d(function(t,n,r,o,i){for(var a=t[n],s=0;s<e.length;s++)if(p(a,e[s]))return null;var c=JSON.stringify(e);return new f("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+c+".")})},oneOfType:function(e){if(!Array.isArray(e))return s;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+b(n)+" at index "+t+"."),s}return d(function(t,n,r,i,a){for(var s=0;s<e.length;s++){var c=e[s];if(null==c(t,n,r,i,a,o))return null}return new f("Invalid "+i+" `"+a+"` supplied to `"+r+"`.")})},shape:function(e){return d(function(t,n,r,i,a){var s=t[n],c=y(s);if("object"!==c)return new f("Invalid "+i+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var u=e[l];if(u){var p=u(s,l,r,i,a+"."+l,o);if(p)return p}}return null})},exact:function(e){return d(function(t,n,i,a,s){var c=t[n],l=y(c);if("object"!==l)return new f("Invalid "+a+" `"+s+"` of type `"+l+"` supplied to `"+i+"`, expected `object`.");var u=r({},t[n],e);for(var p in u){var d=e[p];if(!d)return new f("Invalid "+a+" `"+s+"` key `"+p+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=d(c,p,i,a,s+"."+p,o);if(m)return m}return null})}};function p(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e){this.message=e,this.stack=""}function d(e){function n(n,r,i,a,s,c,u){if((a=a||l,c=c||i,u!==o)&&t){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}return null==r[i]?n?null===r[i]?new f("The "+s+" `"+c+"` is marked as required in `"+a+"`, but its value is `null`."):new f("The "+s+" `"+c+"` is marked as required in `"+a+"`, but its value is `undefined`."):null:e(r,i,a,s,c)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function m(e){return d(function(t,n,r,o,i,a){var s=t[n];return y(s)!==e?new f("Invalid "+o+" `"+i+"` of type `"+v(s)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e[c]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!h(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!h(a[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function v(e){if(null==e)return""+e;var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function b(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,u.checkPropTypes=i,u.PropTypes=u,u}},58:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){}},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(23),a=(r=i)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(23),a=(r=i)&&r.__esModule?r:{default:r},s=n(30);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}()},62:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},63:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},64:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}}},[[303,1,0]]]);