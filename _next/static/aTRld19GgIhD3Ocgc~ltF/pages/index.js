(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{11:function(e,t,a){"use strict";var n=a(2),i=a.n(n),o=a(1),s=a.n(o),r=a(0);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}t.a=function(e){var t=e.src,a=e.alt,n=l(e,["src","alt"]);return s.a.createElement("p",{className:i.a.dynamic([["2285008036",[r.e,r.a]]])},s.a.createElement(i.a,{styleId:"2285008036",css:["p.__jsx-style-dynamic-selector{max-width:".concat(r.e,"px !important;}"),"img.__jsx-style-dynamic-selector{width:100%;border-radius:".concat(r.a,"px;}")],dynamic:[r.e,r.a]}),s.a.createElement("img",d({src:t,alt:a||t},n,{className:i.a.dynamic([["2285008036",[r.e,r.a]]])+" "+(null!=n.className&&n.className||"")})))}},25:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};t.default=function(e,t,a,n){return"in"in e&&(e.when=e.in),o.default.Children.count(n)<2?o.default.createElement(s.default,i({},e,{inEffect:t,outEffect:a,children:n})):(n=o.default.Children.map(n,function(n){return o.default.createElement(s.default,i({},e,{inEffect:t,outEffect:a,children:n}))}),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,n):o.default.createElement("span",null,n))};var o=n(a(1)),s=n(a(26));e.exports=t.default},26:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,i=!1,o=void 0;try{for(var s,r=e[Symbol.iterator]();!(n=(s=r.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(i)throw o}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),d=a(1),l=(n=d)&&n.__esModule?n:{default:n},c=a(3),m=a(8),u=(0,c.shape)({make:c.func,duration:c.number.isRequired,delay:c.number.isRequired,forever:c.bool,count:c.number.isRequired,style:c.object.isRequired,reverse:c.bool}),p={collapse:c.bool,collapseEl:c.element,cascade:c.bool,wait:c.number,force:c.bool,disabled:c.bool,appear:c.bool,enter:c.bool,exit:c.bool,fraction:c.number,refProp:c.string,innerRef:c.func,onReveal:c.func,unmountOnExit:c.bool,mountOnEnter:c.bool,inEffect:u.isRequired,outEffect:(0,c.oneOfType)([u,(0,c.oneOf)([!1])]).isRequired,ssrReveal:c.bool,collapseOnly:c.bool,ssrFadeout:c.bool},f={transitionGroup:c.object},h=function(e){function t(e,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,m.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?s({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!m.observerMode&&this.props.collapse&&window.document.dispatchEvent(m.collapseend)))}},{key:"animationEnd",value:function(e,t,a){var n=this,i=a.forever,o=a.count,s=a.delay,r=a.duration;if(!i){this.animationEndTimeout=window.setTimeout(function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))},s+(r+(t?r:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,a){var n=a.duration+(t.cascade?a.duration:0),i=this.isOn?this.getDimensionValue():0,o=void 0,s=void 0;if(t.collapseOnly)o=a.duration/3,s=a.delay;else{var r=n>>2,d=r>>1;o=r,s=a.delay+(this.isOn?0:n-r-d),e.style.animationDuration=n-r+(this.isOn?d:-d)+"ms",e.style.animationDelay=a.delay+(this.isOn?r-d:0)+"ms"}return e.collapse={height:i,transition:"height "+o+"ms ease "+s+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,a=e[t?"outEffect":"inEffect"],n="style"in a&&a.style.animationName||void 0,i=void 0;e.collapseOnly?i={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&a.make&&(n=a.make),i={hasAppeared:!0,hasExited:!1,collapse:void 0,style:s({},a.style,{animationDuration:a.duration+"ms",animationDelay:a.delay+"ms",animationIterationCount:a.forever?"infinite":a.count,opacity:1,animationName:n}),className:a.className}),this.setState(e.collapse?this.collapse(i,e,a):i),t?(this.savedChild=l.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,a)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),m.ssr&&(0,m.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&m.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];m.globalHide||(0,m.hideAll)(),this&&this.el&&(e||(e=this.props),m.ssr&&(0,m.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):a||this.inViewport(e)||e.force?this.animate(e):m.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var a=this.context.transitionGroup,n=a&&!a.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||m.ssr&&!m.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):m.ssr&&(m.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,a=void 0;a="string"==typeof e?e.split("").map(function(e,t){return l.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):l.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=n.duration,r=n.reverse,d=a.length,c=2*o;this.props.collapse&&(c=parseInt(this.state.style.animationDuration,10),o=c/2);var u=r?d:0;return a.map(function(e){return"object"===(void 0===e?"undefined":i(e))&&e?l.default.cloneElement(e,{style:s({},e.props.style,t.state.style,{animationDuration:Math.round((0,m.cascade)(r?u--:u++,0,d,o,c))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===i(this.props.children)){var e=l.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:l.default.createElement("div",null,e)}return l.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var a=!1,n=t.props,i=n.style,o=n.className,r=n.children,d=this.props.disabled?o:(this.props.outEffect?m.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,c=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(a=this.cascade(r),c=s({},i,{opacity:1})):c=this.props.disabled?i:s({},i,this.state.style);var u=s({},this.props.props,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({className:d,style:c},this.props.refProp,this.saveRef)),p=l.default.cloneElement(t,u,e?a||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?l.default.cloneElement(this.props.collapseEl,{style:s({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):l.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,a=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,m.raf)(a),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var a=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),i=Math.min(a,window.innerHeight)*(m.globalHide?e.fraction:0);return n>i-window.innerHeight&&n<a-i}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){m.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!m.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();h.propTypes=p,h.defaultProps={fraction:.2,refProp:"ref"},h.contextTypes=f,h.displayName="RevealBase",t.default=h,e.exports=t.default},313:function(e,t,a){__NEXT_REGISTER_PAGE("/",function(){return e.exports=a(314),{page:e.exports.default}})},314:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),o=a(1),s=a.n(o),r=a(10),d=a.n(r),l=a(7),c=a(11),m=a(6),u=a(70),p=a(0);t.default=function(){return s.a.createElement("div",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},s.a.createElement(d.a,null,s.a.createElement("meta",{name:"google-site-verification",content:"aFUa4OCasgi_PmWe855lK7IlNCW2HuFS3jUWEyewnOU",className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])})),s.a.createElement(i.a,{styleId:"3653063494",css:["@media only screen and (max-width:270px){h3.__jsx-style-dynamic-selector{font-size:0.7em;}}","header.__jsx-style-dynamic-selector{margin-bottom:3em;}","div.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{margin:".concat(5*p.d,"px 0;}"),"section.__jsx-style-dynamic-selector{width:calc(100vw - 120px);padding:120px 60px;}","#form.__jsx-style-dynamic-selector,#proposito-4.__jsx-style-dynamic-selector{background:#277ed6;color:#e5f2ff;}","#form.__jsx-style-dynamic-selector label,#proposito-4.__jsx-style-dynamic-selector label{color:#e5f2ff;}","div.__jsx-style-dynamic-selector>.__jsx-style-dynamic-selector:not(section),section.__jsx-style-dynamic-selector > *{max-width:740px;margin:0 auto;display:block;}","section.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:2em auto;}","#proposito-2.__jsx-style-dynamic-selector{background:#e0e0e0;}","section.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{max-width:100%;}","#post.__jsx-style-dynamic-selector a{text-transform:initial;padding:0 ".concat(p.d,"px;}"),"#title.__jsx-style-dynamic-selector{position:relative;display:inline-block;margin-bottom:".concat(7*p.d,"px;}"),"#title.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{display:inline-block;}","#title.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{position:absolute;right:0;font-size:0.8em;margin-top:-15px;font-weight:100;color:#58838e;text-align:right;text-shadow:none;}",".bg1.__jsx-style-dynamic-selector{background:#e0e0e0;}",".bad.__jsx-style-dynamic-selector{color:#c74242;}",".good.__jsx-style-dynamic-selector{color:#4949d9;}","#thunder.__jsx-style-dynamic-selector{margin:-320px -60px -290px -60px;max-width:initial;width:calc(100% + 120px);opacity:0.1;}","@media only screen and (max-width:1200px){#thunder.__jsx-style-dynamic-selector{margin:-240px -60px;}}","@media only screen and (max-width:900px){#thunder.__jsx-style-dynamic-selector{margin:-160px -60px;}}","@media only screen and (max-width:600px){#thunder.__jsx-style-dynamic-selector{margin:-120px -60px;}}","@media only screen and (max-width:270px){#thunder.__jsx-style-dynamic-selector{margin:-80px -60px;}}"],dynamic:[5*p.d,p.d,7*p.d]}),s.a.createElement("header",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},s.a.createElement("div",{id:"title",className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},s.a.createElement(u.a,null,"Bussola",s.a.createElement("span",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])+" hide-xs"},".school")),s.a.createElement("h2",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"Escola de desenvolvimento pessoal")),s.a.createElement("h3",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"Na busca por despertar o potencial da consciência humana e integrar a humanidade.")),s.a.createElement("section",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])+" bg1"},s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"O mundo está seguindo uma tendência exponencial e você encontrará dois tipos de visões: a pessimista e a otimista."),s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"Nós sabemos que essas duas forças lutam entre si, e a tendência é que a polarização aumente: um futuro ",s.a.createElement("strong",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])+" bad"},"cada vez pior")," ou um futuro ",s.a.createElement("strong",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])+" good"},"cada vez melhor"),"."),s.a.createElement("img",{src:"/static/thunder.png",id:"thunder",alt:"thunder",className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])}),s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"Sabemos também que podemos ",s.a.createElement("strong",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"contribuir ativamente")," para construir uma das duas realidades."),s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"É por isso que a ",s.a.createElement("strong",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])+" good"},"Bussola")," está trabalhando para despertar o potencial das pessoas, desenvolvê-las e integrar a humanidade no ",s.a.createElement("strong",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])+" good"},"melhor futuro que conseguirmos criar.")),s.a.createElement("br",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])}),s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},s.a.createElement(l.a,{href:"/voce-nao-sabe-mas-voce-ja-esta-exercendo-seu-proposito-de-vida"},"Mesmo sem saber, você já está contribuindo para esse futuro."))),s.a.createElement("section",{id:"form",className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"Já pensou no que te impede de viver uma vida que vale a pena ser vivida?"),s.a.createElement(m.a,{text:"Se esse assunto te interessa, coloca seu email abaixo para saber como podemos te ajudar nisso!",buttonText:"quero!",location:"homepage",light:!0})),s.a.createElement("section",{id:"proposito-1",className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"O que é um propósito de vida? Para que ele serve? Como posso construir o meu?"),s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"Um propósito de vida é uma referência de futuro, como se fosse uma bússola temporal, algo que te ajuda a guiar sua vida."),s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"Quer saber como você pode usar seu passado e seu presente para definir seu futuro?"),s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"O texto ",s.a.createElement(l.a,{href:"/como-uma-referencia-temporal-pode-mudar-sua-vida"},"como uma bússola pode mudar a sua vida")," pode te ajudar."),s.a.createElement(m.a,{text:"Também podemos te ajudar pessoalmente, é só deixar seu email:",buttonText:"quero ajuda!",location:"homepage-2",placeholder:"seu melhor email"})),s.a.createElement("section",{id:"proposito-2",className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"Se você já tem um propósito mas não sabe como fazer para conquistá-lo, talvez te falte mais clareza dos passos necessários para chegar lá."),s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"Talvez lhe falte motivação?"),s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"Nós sabemos como pode ser difícil manter a motivação alta. Por isso escrevemos um texto ",s.a.createElement("strong",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"descrevendo")," do que a motivação é composta"),s.a.createElement(l.a,{nostyle:!0,href:"/como-ter-motivacao-e-fazer-o-que-nos-propomos"},s.a.createElement("img",{src:"/static/texto-1-diagrama-tarefas-2.svg",alt:"Do que motivação é composta?",className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])})),s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"Basta clicar na imagem acima ou ",s.a.createElement(l.a,{href:"/como-ter-motivacao-e-fazer-o-que-nos-propomos"},"clicar neste link.")),s.a.createElement(m.a,{text:"Receba conteúdo grátis com dicas para melhorar sua motivação:",buttonText:"Quero receber!",location:"homepage-3"})),s.a.createElement("section",{id:"proposito-3",className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"Se não estiver plenamente convencido, esperamos ter pelo menos plantado a semente do propósito."),s.a.createElement(l.a,{nostyle:!0,href:"/como-ter-proposito-de-vida"},s.a.createElement(c.a,{src:"/static/texto-2-cover.jpg",alt:"Do que motivação é composta?"})),s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"Pois como diria Nietzsche, aquele que tem um ",s.a.createElement("strong",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"porquê")," supera qualquer ",s.a.createElement("strong",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"como"),"."),s.a.createElement("p",{className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},"O nosso texto mais completo sobre ",s.a.createElement(l.a,{href:"/como-ter-proposito-de-vida"},"como desenvolver propósito de vida")," pode ser de grande ajuda também!")),s.a.createElement("section",{id:"proposito-4",className:i.a.dynamic([["3653063494",[5*p.d,p.d,7*p.d]]])},s.a.createElement(m.a,{text:"Pra conversar pessoalmente com a gente sobre isso, é só deixar seu email!",buttonText:"Quero conversar sobre propósito!",location:"homepage-4",light:!0})))}},6:function(e,t,a){"use strict";var n=a(2),i=a.n(n),o=a(1),s=a.n(o),r=(a(3),a(13)),d=a(9),l=a.n(d);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var a,n,i,o,s,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,i=u(t).call(this,e),a=!i||"object"!==c(i)&&"function"!=typeof i?f(n):i,o=f(f(a)),r=function(){a.setState({animate:!0}),setTimeout(function(){return a.setState({animate:!1})},a.animateInterval/2),clearTimeout(a.animateTimeout),a.animateTimeout=setTimeout(a.animateForever.bind(f(f(a))),a.animateInterval)},(s="animateForever")in o?Object.defineProperty(o,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[s]=r,a.state={animate:!1},a.animateInterval=Math.max(5e3,e.animateInterval||0),a.delay=e.delay||0,a}var a,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o["Component"]),a=t,(n=[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.animateForever()},this.delay)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.animateTimeout)}},{key:"render",value:function(){var e=this.state.animate,t=this.props.children;return s.a.createElement(l.a,{when:e},t)}}])&&m(a.prototype,n),i&&m(a,i),t}();h.defaultProps={animateInterval:0,delay:0};var y=a(0),v=function(e){var t=e.text,a=e.buttonText,n=e.placeholder,o=e.id,d=e.buttonAnimationDelay,l=e.inputRef,c=e.light,m=e.lightText,u=e.location,p=e.coloredBg;return s.a.createElement("div",{id:"form-".concat(o),className:i.a.dynamic([["2143503395",[2*y.d,2*y.d,y.a,y.h.deepblue,2*y.d,o,m?"#e5f2ff":y.h.deepblue,7*y.d,p,y.c,y.c,4*y.d,y.g,2*y.d,6*y.d,y.d,y.d]]])+" "+((p?"colored-bg":"")||"")},s.a.createElement(i.a,{styleId:"2143503395",css:['input[type="email"].__jsx-style-dynamic-selector{padding:0 '.concat(2*y.d,"px;margin:0 ").concat(2*y.d,"px;font-size:1rem;background-color:#fff;background-image:none;border-radius:").concat(y.a,"px;border:0;color:").concat(y.h.deepblue,";}"),".mc-field-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:".concat(2*y.d,"px 0;}"),"#form-".concat(o,".__jsx-style-dynamic-selector{color:").concat(m?"#e5f2ff":y.h.deepblue,";margin-top:").concat(7*y.d,"px;}"),".colored-bg.__jsx-style-dynamic-selector{background:".concat(p,";max-width:none;margin-left:-").concat(y.c,"px;margin-right:-").concat(y.c,"px;padding:").concat(4*y.d,"px;}"),".colored-bg.__jsx-style-dynamic-selector>form.__jsx-style-dynamic-selector{margin:0 auto;max-width:".concat(y.g,"px;}"),".mc-field-group.__jsx-style-dynamic-selector input,.mc-field-group.__jsx-style-dynamic-selector button{padding:0 ".concat(2*y.d,"px;min-height:").concat(6*y.d,"px;}"),".mc-field-group.__jsx-style-dynamic-selector>*{margin-top:".concat(y.d,"px;margin-bottom:").concat(y.d,"px;}")],dynamic:[2*y.d,2*y.d,y.a,y.h.deepblue,2*y.d,o,m?"#e5f2ff":y.h.deepblue,7*y.d,p,y.c,y.c,4*y.d,y.g,2*y.d,6*y.d,y.d,y.d]}),s.a.createElement("form",{action:"https://dayman.us12.list-manage.com/subscribe/post?u=52f6e7a33b2d54479c5fc54ee&id=b3accd19af&SIGNUP=".concat(u),method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",noValidate:!0,className:i.a.dynamic([["2143503395",[2*y.d,2*y.d,y.a,y.h.deepblue,2*y.d,o,m?"#e5f2ff":y.h.deepblue,7*y.d,p,y.c,y.c,4*y.d,y.g,2*y.d,6*y.d,y.d,y.d]]])+" validate"},s.a.createElement("div",{id:"mc_embed_signup_scroll",className:i.a.dynamic([["2143503395",[2*y.d,2*y.d,y.a,y.h.deepblue,2*y.d,o,m?"#e5f2ff":y.h.deepblue,7*y.d,p,y.c,y.c,4*y.d,y.g,2*y.d,6*y.d,y.d,y.d]]])},s.a.createElement("label",{htmlFor:"mce-EMAIL",className:i.a.dynamic([["2143503395",[2*y.d,2*y.d,y.a,y.h.deepblue,2*y.d,o,m?"#e5f2ff":y.h.deepblue,7*y.d,p,y.c,y.c,4*y.d,y.g,2*y.d,6*y.d,y.d,y.d]]])},t),s.a.createElement("div",{className:i.a.dynamic([["2143503395",[2*y.d,2*y.d,y.a,y.h.deepblue,2*y.d,o,m?"#e5f2ff":y.h.deepblue,7*y.d,p,y.c,y.c,4*y.d,y.g,2*y.d,6*y.d,y.d,y.d]]])+" mc-field-group"},s.a.createElement(h,{delay:1e3,animateInterval:3*d},s.a.createElement("div",{className:i.a.dynamic([["2143503395",[2*y.d,2*y.d,y.a,y.h.deepblue,2*y.d,o,m?"#e5f2ff":y.h.deepblue,7*y.d,p,y.c,y.c,4*y.d,y.g,2*y.d,6*y.d,y.d,y.d]]])},s.a.createElement("input",{ref:l,type:"email",name:"EMAIL",id:"mce-EMAIL",placeholder:n,className:i.a.dynamic([["2143503395",[2*y.d,2*y.d,y.a,y.h.deepblue,2*y.d,o,m?"#e5f2ff":y.h.deepblue,7*y.d,p,y.c,y.c,4*y.d,y.g,2*y.d,6*y.d,y.d,y.d]]])+" required email"}))),s.a.createElement(h,{animateInterval:d,delay:d},s.a.createElement(r.a,{light:c,defaultValue:a,name:"subscribe",id:"mc-embedded-subscribe"},a))),s.a.createElement("div",{id:"mce-responses",className:i.a.dynamic([["2143503395",[2*y.d,2*y.d,y.a,y.h.deepblue,2*y.d,o,m?"#e5f2ff":y.h.deepblue,7*y.d,p,y.c,y.c,4*y.d,y.g,2*y.d,6*y.d,y.d,y.d]]])+" clear"},s.a.createElement("div",{id:"mce-error-response",style:{display:"none"},className:i.a.dynamic([["2143503395",[2*y.d,2*y.d,y.a,y.h.deepblue,2*y.d,o,m?"#e5f2ff":y.h.deepblue,7*y.d,p,y.c,y.c,4*y.d,y.g,2*y.d,6*y.d,y.d,y.d]]])+" response"}),s.a.createElement("div",{id:"mce-success-response",style:{display:"none"},className:i.a.dynamic([["2143503395",[2*y.d,2*y.d,y.a,y.h.deepblue,2*y.d,o,m?"#e5f2ff":y.h.deepblue,7*y.d,p,y.c,y.c,4*y.d,y.g,2*y.d,6*y.d,y.d,y.d]]])+" response"})),s.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true",className:i.a.dynamic([["2143503395",[2*y.d,2*y.d,y.a,y.h.deepblue,2*y.d,o,m?"#e5f2ff":y.h.deepblue,7*y.d,p,y.c,y.c,4*y.d,y.g,2*y.d,6*y.d,y.d,y.d]]])},s.a.createElement("input",{type:"text",name:"b_52f6e7a33b2d54479c5fc54ee_b3accd19af",tabIndex:-1,className:i.a.dynamic([["2143503395",[2*y.d,2*y.d,y.a,y.h.deepblue,2*y.d,o,m?"#e5f2ff":y.h.deepblue,7*y.d,p,y.c,y.c,4*y.d,y.g,2*y.d,6*y.d,y.d,y.d]]])})))))};v.defaultProps={text:"Cadastre-se para receber na íntegra as novidades!",buttonText:"Inscrever",placeholder:"digite seu email aqui",id:"signup",buttonAnimationDelay:1e4,light:!1,lightText:!1,location:"end-of-post",coloredBg:!1,inputRef:s.a.createRef()};t.a=v},70:function(e,t,a){"use strict";var n=a(2),i=a.n(n),o=a(1),s=a.n(o);a(3);t.a=function(e){var t=e.children;return s.a.createElement("div",{className:"jsx-835501959"},s.a.createElement(i.a,{styleId:"835501959",css:["@media only screen and (max-width:600px) and (min-width:421px){h1.jsx-835501959{font-size:1.5em;}}","@media only screen and (max-width:420px){h1.jsx-835501959>.hide-xs{display:none;}}","@media only screen and (max-width:270px){h1.jsx-835501959{font-size:1em;}}"]}),s.a.createElement("h1",{className:"jsx-835501959"},t))}},8:function(e,t,a){"use strict";function n(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function i(){c||(t.globalHide=c=!0,window.removeEventListener("scroll",i,!0),n("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",i,!0),window.document.removeEventListener("visibilitychange",i))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,a,n,i){var o=Math.log(n),s=(Math.log(i)-o)/(a-t);return Math.exp(o+s*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(h+u)+"{"+e+"}",a=p[e];return a?""+h+a:(f.insertRule(t,f.cssRules.length),p[e]=u,""+h+u++)},t.hideAll=i,t.default=function(e){var a=e.ssrFadeout;t.fadeOutEnabled=a};var o=t.namespace="react-reveal",s=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,d=t.raf=function(e){return window.setTimeout(e,66)},l=t.disableSsr=function(){return t.ssr=s=!1},c=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),m=(t.ie10=!1,t.collapseend=void 0),u=1,p={},f=!1,h=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||d,t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=s=!1),s&&window.setTimeout(l,1500),r||(t.collapseend=m=document.createEvent("Event"),m.initEvent("collapseend",!0,!0));var y=document.createElement("style");document.head.appendChild(y),y.sheet&&y.sheet.cssRules&&y.sheet.insertRule&&(f=y.sheet,window.addEventListener("scroll",i,!0),window.addEventListener("orientationchange",i,!0),window.document.addEventListener("visibilitychange",i))}},9:function(e,t,a){"use strict";function n(){return u||(u=(0,l.animation)(m))}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=e.children,a=(e.out,e.timeout),i=e.duration,o=void 0===i?l.defaults.duration:i,s=e.delay,r=void 0===s?l.defaults.delay:s,c=e.count,m=void 0===c?l.defaults.count:c,u=e.forever,p=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["children","out","timeout","duration","delay","count","forever"]),f={make:n,duration:void 0===a?o:a,delay:r,forever:u,count:m,style:{animationFillMode:"both"}};return(0,d.default)(p,f,!1,t,!0)}Object.defineProperty(t,"__esModule",{value:!0});var o,s=a(3),r=a(25),d=(o=r)&&o.__esModule?o:{default:o},l=a(8),c={duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},m="\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n}\n",u=!1;i.propTypes=c,t.default=i,e.exports=t.default}},[[313,1,0]]]);