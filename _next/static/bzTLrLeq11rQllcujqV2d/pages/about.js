(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{26:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),o.default.Children.count(i)<2?o.default.createElement(s.default,a({},e,{inEffect:t,outEffect:n,children:i})):(i=o.default.Children.map(i,function(i){return o.default.createElement(s.default,a({},e,{inEffect:t,outEffect:n,children:i}))}),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,i):o.default.createElement("span",null,i))};var o=i(n(1)),s=i(n(27));e.exports=t.default},27:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,a=!1,o=void 0;try{for(var s,r=e[Symbol.iterator]();!(i=(s=r.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{!i&&r.return&&r.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(1),d=(i=l)&&i.__esModule?i:{default:i},c=n(3),u=n(8),p=(0,c.shape)({make:c.func,duration:c.number.isRequired,delay:c.number.isRequired,forever:c.bool,count:c.number.isRequired,style:c.object.isRequired,reverse:c.bool}),f={collapse:c.bool,collapseEl:c.element,cascade:c.bool,wait:c.number,force:c.bool,disabled:c.bool,appear:c.bool,enter:c.bool,exit:c.bool,fraction:c.number,refProp:c.string,innerRef:c.func,onReveal:c.func,unmountOnExit:c.bool,mountOnEnter:c.bool,inEffect:p.isRequired,outEffect:(0,c.oneOfType)([p,(0,c.oneOf)([!1])]).isRequired,ssrReveal:c.bool,collapseOnly:c.bool,ssrFadeout:c.bool},h={transitionGroup:c.object},m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,u.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d.default.Component),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?s({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,a=n.forever,o=n.count,s=n.delay,r=n.duration;if(!a){this.animationEndTimeout=window.setTimeout(function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))},s+(r+(t?r:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),a=this.isOn?this.getDimensionValue():0,o=void 0,s=void 0;if(t.collapseOnly)o=n.duration/3,s=n.delay;else{var r=i>>2,l=r>>1;o=r,s=n.delay+(this.isOn?0:i-r-l),e.style.animationDuration=i-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:a,transition:"height "+o+"ms ease "+s+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,a=void 0;e.collapseOnly?a={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),a={hasAppeared:!0,hasExited:!1,collapse:void 0,style:s({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(a,e,n):a),t?(this.savedChild=d.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):n||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map(function(e,t){return d.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):d.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=i.duration,r=i.reverse,l=n.length,c=2*o;this.props.collapse&&(c=parseInt(this.state.style.animationDuration,10),o=c/2);var p=r?l:0;return n.map(function(e){return"object"===(void 0===e?"undefined":a(e))&&e?d.default.cloneElement(e,{style:s({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(r?p--:p++,0,l,o,c))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===a(this.props.children)){var e=d.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:d.default.createElement("div",null,e)}return d.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,a=i.style,o=i.className,r=i.children,l=this.props.disabled?o:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,c=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(n=this.cascade(r),c=s({},a,{opacity:1})):c=this.props.disabled?a:s({},a,this.state.style);var p=s({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:c},this.props.refProp,this.saveRef)),f=d.default.cloneElement(t,p,e?n||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?d.default.cloneElement(this.props.collapseEl,{style:s({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:f}):d.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:f}):f}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),a=Math.min(n,window.innerHeight)*(u.globalHide?e.fraction:0);return i>a-window.innerHeight&&i<n-a}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();m.propTypes=f,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=h,m.displayName="RevealBase",t.default=m,e.exports=t.default},290:function(e,t,n){__NEXT_REGISTER_PAGE("/about",function(){return e.exports=n(291),{page:e.exports.default}})},291:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),o=n(1),s=n.n(o),r=n(10),l=n.n(r),d=n(7),c=n(71),u=n(6),p=n(72),f=n(0);t.default=function(){return s.a.createElement(d.a,null,s.a.createElement("div",{className:a.a.dynamic([["506717548",[4*f.d,2*f.a]]])},s.a.createElement(l.a,null,s.a.createElement("meta",{property:"og:video",content:"https://www.youtube.com/v/ovFOiN_RWsc",className:a.a.dynamic([["506717548",[4*f.d,2*f.a]]])}),s.a.createElement("meta",{property:"og:image",content:"https://img.youtube.com/vi/ovFOiN_RWsc/maxresdefault.jpg",className:a.a.dynamic([["506717548",[4*f.d,2*f.a]]])}),s.a.createElement("meta",{property:"og:type",content:"video",className:a.a.dynamic([["506717548",[4*f.d,2*f.a]]])}),s.a.createElement("meta",{property:"og:description",content:"O que é a Bussola.school?",className:a.a.dynamic([["506717548",[4*f.d,2*f.a]]])})),s.a.createElement(a.a,{styleId:"506717548",css:["iframe.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;width:100%;height:100%;}",".iframeWrapper.__jsx-style-dynamic-selector{position:relative;padding-bottom:50.25%;padding-top:30px;height:0;overflow:hidden;min-width:calc(90vw - ".concat(4*f.d,"px);border-radius:").concat(2*f.a,"px;}")],dynamic:[4*f.d,2*f.a]}),s.a.createElement(c.a,null,"Bussola",s.a.createElement("span",{className:a.a.dynamic([["506717548",[4*f.d,2*f.a]]])+" hide-xs"},".school")),s.a.createElement("h3",{className:a.a.dynamic([["506717548",[4*f.d,2*f.a]]])},"O que é a Escola Bussola?"),s.a.createElement(p.a,{title:"O que é a Bussola.school?",src:"https://www.youtube.com/embed/ovFOiN_RWsc"}),s.a.createElement(u.a,{text:"Para saber mais, coloque aqui seu melhor email aqui:",placeholder:"> email aqui <",buttonText:"quero saber mais sobre propósito!"})))}},6:function(e,t,n){"use strict";var i=n(2),a=n.n(i),o=n(1),s=n.n(o),r=(n(3),n(12)),l=n(9),d=n.n(l);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(e){var n,i,a,o,s,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,a=p(t).call(this,e),n=!a||"object"!==c(a)&&"function"!=typeof a?h(i):a,o=h(h(n)),r=function(){n.setState({animate:!0}),setTimeout(function(){return n.setState({animate:!1})},n.animateInterval/2),clearTimeout(n.animateTimeout),n.animateTimeout=setTimeout(n.animateForever.bind(h(h(n))),n.animateInterval)},(s="animateForever")in o?Object.defineProperty(o,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[s]=r,n.state={animate:!1},n.animateInterval=Math.max(5e3,e.animateInterval||0),n.delay=e.delay||0,n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),n=t,(i=[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.animateForever()},this.delay)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.animateTimeout)}},{key:"render",value:function(){var e=this.state.animate,t=this.props.children;return s.a.createElement(d.a,{when:e},t)}}])&&u(n.prototype,i),a&&u(n,a),t}();m.defaultProps={animateInterval:0,delay:0};var v=n(0),y=function(e){var t=e.text,n=e.buttonText,i=e.placeholder,o=e.id,l=e.buttonAnimationDelay,d=e.inputRef,c=e.light,u=e.lightText,p=e.location,f=e.coloredBg;return s.a.createElement("div",{id:"form-".concat(o),className:a.a.dynamic([["2143503395",[2*v.d,2*v.d,v.a,v.h.deepblue,2*v.d,o,u?"#e5f2ff":v.h.deepblue,7*v.d,f,v.c,v.c,4*v.d,v.g,2*v.d,6*v.d,v.d,v.d]]])+" "+((f?"colored-bg":"")||"")},s.a.createElement(a.a,{styleId:"2143503395",css:['input[type="email"].__jsx-style-dynamic-selector{padding:0 '.concat(2*v.d,"px;margin:0 ").concat(2*v.d,"px;font-size:1rem;background-color:#fff;background-image:none;border-radius:").concat(v.a,"px;border:0;color:").concat(v.h.deepblue,";}"),".mc-field-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:".concat(2*v.d,"px 0;}"),"#form-".concat(o,".__jsx-style-dynamic-selector{color:").concat(u?"#e5f2ff":v.h.deepblue,";margin-top:").concat(7*v.d,"px;}"),".colored-bg.__jsx-style-dynamic-selector{background:".concat(f,";max-width:none;margin-left:-").concat(v.c,"px;margin-right:-").concat(v.c,"px;padding:").concat(4*v.d,"px;}"),".colored-bg.__jsx-style-dynamic-selector>form.__jsx-style-dynamic-selector{margin:0 auto;max-width:".concat(v.g,"px;}"),".mc-field-group.__jsx-style-dynamic-selector input,.mc-field-group.__jsx-style-dynamic-selector button{padding:0 ".concat(2*v.d,"px;min-height:").concat(6*v.d,"px;}"),".mc-field-group.__jsx-style-dynamic-selector>*{margin-top:".concat(v.d,"px;margin-bottom:").concat(v.d,"px;}")],dynamic:[2*v.d,2*v.d,v.a,v.h.deepblue,2*v.d,o,u?"#e5f2ff":v.h.deepblue,7*v.d,f,v.c,v.c,4*v.d,v.g,2*v.d,6*v.d,v.d,v.d]}),s.a.createElement("form",{action:"https://dayman.us12.list-manage.com/subscribe/post?u=52f6e7a33b2d54479c5fc54ee&id=b3accd19af&SIGNUP=".concat(p),method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",noValidate:!0,className:a.a.dynamic([["2143503395",[2*v.d,2*v.d,v.a,v.h.deepblue,2*v.d,o,u?"#e5f2ff":v.h.deepblue,7*v.d,f,v.c,v.c,4*v.d,v.g,2*v.d,6*v.d,v.d,v.d]]])+" validate"},s.a.createElement("div",{id:"mc_embed_signup_scroll",className:a.a.dynamic([["2143503395",[2*v.d,2*v.d,v.a,v.h.deepblue,2*v.d,o,u?"#e5f2ff":v.h.deepblue,7*v.d,f,v.c,v.c,4*v.d,v.g,2*v.d,6*v.d,v.d,v.d]]])},s.a.createElement("label",{htmlFor:"mce-EMAIL",className:a.a.dynamic([["2143503395",[2*v.d,2*v.d,v.a,v.h.deepblue,2*v.d,o,u?"#e5f2ff":v.h.deepblue,7*v.d,f,v.c,v.c,4*v.d,v.g,2*v.d,6*v.d,v.d,v.d]]])},t),s.a.createElement("div",{className:a.a.dynamic([["2143503395",[2*v.d,2*v.d,v.a,v.h.deepblue,2*v.d,o,u?"#e5f2ff":v.h.deepblue,7*v.d,f,v.c,v.c,4*v.d,v.g,2*v.d,6*v.d,v.d,v.d]]])+" mc-field-group"},s.a.createElement(m,{delay:1e3,animateInterval:3*l},s.a.createElement("div",{className:a.a.dynamic([["2143503395",[2*v.d,2*v.d,v.a,v.h.deepblue,2*v.d,o,u?"#e5f2ff":v.h.deepblue,7*v.d,f,v.c,v.c,4*v.d,v.g,2*v.d,6*v.d,v.d,v.d]]])},s.a.createElement("input",{ref:d,type:"email",name:"EMAIL",id:"mce-EMAIL",placeholder:i,className:a.a.dynamic([["2143503395",[2*v.d,2*v.d,v.a,v.h.deepblue,2*v.d,o,u?"#e5f2ff":v.h.deepblue,7*v.d,f,v.c,v.c,4*v.d,v.g,2*v.d,6*v.d,v.d,v.d]]])+" required email"}))),s.a.createElement(m,{animateInterval:l,delay:l},s.a.createElement(r.a,{light:c,defaultValue:n,name:"subscribe",id:"mc-embedded-subscribe"},n))),s.a.createElement("div",{id:"mce-responses",className:a.a.dynamic([["2143503395",[2*v.d,2*v.d,v.a,v.h.deepblue,2*v.d,o,u?"#e5f2ff":v.h.deepblue,7*v.d,f,v.c,v.c,4*v.d,v.g,2*v.d,6*v.d,v.d,v.d]]])+" clear"},s.a.createElement("div",{id:"mce-error-response",style:{display:"none"},className:a.a.dynamic([["2143503395",[2*v.d,2*v.d,v.a,v.h.deepblue,2*v.d,o,u?"#e5f2ff":v.h.deepblue,7*v.d,f,v.c,v.c,4*v.d,v.g,2*v.d,6*v.d,v.d,v.d]]])+" response"}),s.a.createElement("div",{id:"mce-success-response",style:{display:"none"},className:a.a.dynamic([["2143503395",[2*v.d,2*v.d,v.a,v.h.deepblue,2*v.d,o,u?"#e5f2ff":v.h.deepblue,7*v.d,f,v.c,v.c,4*v.d,v.g,2*v.d,6*v.d,v.d,v.d]]])+" response"})),s.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true",className:a.a.dynamic([["2143503395",[2*v.d,2*v.d,v.a,v.h.deepblue,2*v.d,o,u?"#e5f2ff":v.h.deepblue,7*v.d,f,v.c,v.c,4*v.d,v.g,2*v.d,6*v.d,v.d,v.d]]])},s.a.createElement("input",{type:"text",name:"b_52f6e7a33b2d54479c5fc54ee_b3accd19af",tabIndex:-1,className:a.a.dynamic([["2143503395",[2*v.d,2*v.d,v.a,v.h.deepblue,2*v.d,o,u?"#e5f2ff":v.h.deepblue,7*v.d,f,v.c,v.c,4*v.d,v.g,2*v.d,6*v.d,v.d,v.d]]])})))))};y.defaultProps={text:"Cadastre-se para receber na íntegra as novidades!",buttonText:"Inscrever",placeholder:"digite seu email aqui",id:"signup",buttonAnimationDelay:1e4,light:!1,lightText:!1,location:"end-of-post",coloredBg:!1,inputRef:s.a.createRef()};t.a=y},71:function(e,t,n){"use strict";var i=n(2),a=n.n(i),o=n(1),s=n.n(o);n(3);t.a=function(e){var t=e.children;return s.a.createElement("div",{className:"jsx-3286217773"},s.a.createElement(a.a,{styleId:"3286217773",css:["@media only screen and (max-width:600px) and (min-width:421px){h1.jsx-3286217773{font-size:1.5em;}}","@media only screen and (max-width:420px){h1.jsx-3286217773{font-size:1.4em;}h1.jsx-3286217773>.hide-xs{display:none;}}","@media only screen and (max-width:305px){h1.jsx-3286217773{font-size:1em;}}"]}),s.a.createElement("h1",{className:"jsx-3286217773"},t))}},72:function(e,t,n){"use strict";var i=n(2),a=n.n(i),o=n(1),s=n.n(o),r=(n(3),n(0));function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.a=function(e){var t=e.src,n=e.title,i=d(e,["src","title"]);return s.a.createElement("div",{className:a.a.dynamic([["740628782",[4*r.d,2*r.a]]])},s.a.createElement(a.a,{styleId:"740628782",css:["iframe.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;width:100%;height:100%;}","div.__jsx-style-dynamic-selector{position:relative;padding-bottom:50.25%;padding-top:30px;height:0;overflow:hidden;min-width:calc(90vw - ".concat(4*r.d,"px);border-radius:").concat(2*r.a,"px;}")],dynamic:[4*r.d,2*r.a]}),s.a.createElement("iframe",l({title:n,width:1344,height:608,src:t,frameBorder:0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},i,{className:a.a.dynamic([["740628782",[4*r.d,2*r.a]]])+" "+(null!=i.className&&i.className||"")})))}},8:function(e,t,n){"use strict";function i(e){try{return h.insertRule(e,h.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function a(){c||(t.globalHide=c=!0,window.removeEventListener("scroll",a,!0),i("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",a,!0),window.document.removeEventListener("visibilitychange",a))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,a){var o=Math.log(i),s=(Math.log(a)-o)/(n-t);return Math.exp(o+s*(e-t))},t.animation=function(e){if(!h)return"";var t="@keyframes "+(m+p)+"{"+e+"}",n=f[e];return n?""+m+n:(h.insertRule(t,h.cssRules.length),f[e]=p,""+m+p++)},t.hideAll=a,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var o=t.namespace="react-reveal",s=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},d=t.disableSsr=function(){return t.ssr=s=!1},c=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),p=1,f={},h=!1,m=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=s=!1),s&&window.setTimeout(d,1500),r||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(h=v.sheet,window.addEventListener("scroll",a,!0),window.addEventListener("orientationchange",a,!0),window.document.addEventListener("visibilitychange",a))}},9:function(e,t,n){"use strict";function i(){return p||(p=(0,d.animation)(u))}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,n=(e.out,e.timeout),a=e.duration,o=void 0===a?d.defaults.duration:a,s=e.delay,r=void 0===s?d.defaults.delay:s,c=e.count,u=void 0===c?d.defaults.count:c,p=e.forever,f=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["children","out","timeout","duration","delay","count","forever"]),h={make:i,duration:void 0===n?o:n,delay:r,forever:p,count:u,style:{animationFillMode:"both"}};return(0,l.default)(f,h,!1,t,!0)}Object.defineProperty(t,"__esModule",{value:!0});var o,s=n(3),r=n(26),l=(o=r)&&o.__esModule?o:{default:o},d=n(8),c={duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},u="\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n}\n",p=!1;a.propTypes=c,t.default=a,e.exports=t.default}},[[290,1,0]]]);