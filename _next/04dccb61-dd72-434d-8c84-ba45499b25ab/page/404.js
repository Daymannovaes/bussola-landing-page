module.exports=__NEXT_REGISTER_PAGE("/404",function(){return{page:webpackJsonp([5],{270:function(e,t,n){e.exports=n(271)},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return b});var c=n(6),a=n.n(c),o=n(0),r=n.n(o),i=n(272),l=n.n(i),s=n(51),u=n(9);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function f(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var d=l()().publicRuntimeConfig.pages,y=void 0===d?[]:d,b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state={path:"",pages:t.getPages()},n}var n,c,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["Component"]),n=t,i=[{key:"getPages",value:function(){return y.filter(function(e){return!e.match(/404/)}).filter(function(e){return!e.match(/^_/)}).map(function(e){return e.replace(/\.js$/,"")}).map(function(e){return e.replace(/index/,"home")}).map(function(e){return{title:e,url:"home"===e?"/":"/".concat(e)}})}}],(c=[{key:"componentDidMount",value:function(){this.setState({path:document.location.pathname})}},{key:"render",value:function(){return r.a.createElement("div",{className:a.a.dynamic([["4151425571",[u.d.deepblue,u.c,u.c,2*u.c]]])},r.a.createElement(a.a,{styleId:"4151425571",css:["span.__jsx-style-dynamic-selector{color:".concat(u.d.deepblue,";}"),"h3.__jsx-style-dynamic-selector{font-size:1em;}","li.__jsx-style-dynamic-selector{font-size:0.7em;display:inline;}","ul.__jsx-style-dynamic-selector{margin:0;padding:0;margin-top:3em;}","ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:first-child{margin:0 ".concat(u.c,"px;}"),"li.__jsx-style-dynamic-selector a{padding:".concat(u.c,"px ").concat(2*u.c,"px;}")],dynamic:[u.d.deepblue,u.c,u.c,2*u.c]}),r.a.createElement("h1",{className:a.a.dynamic([["4151425571",[u.d.deepblue,u.c,u.c,2*u.c]]])},"Página não encontrada"),r.a.createElement("h3",{className:a.a.dynamic([["4151425571",[u.d.deepblue,u.c,u.c,2*u.c]]])},"Não conseguimos encontra a página ",r.a.createElement("span",{className:a.a.dynamic([["4151425571",[u.d.deepblue,u.c,u.c,2*u.c]]])},this.state.path)),r.a.createElement("ul",{className:a.a.dynamic([["4151425571",[u.d.deepblue,u.c,u.c,2*u.c]]])},r.a.createElement("li",{className:a.a.dynamic([["4151425571",[u.d.deepblue,u.c,u.c,2*u.c]]])},"Tente alguma dessas"),this.state.pages.map(function(e,t){return r.a.createElement("li",{key:t,className:a.a.dynamic([["4151425571",[u.d.deepblue,u.c,u.c,2*u.c]]])},r.a.createElement(s.a,{href:e.url},"/",e.title))})))}}])&&m(n.prototype,c),i&&m(n,i),t}()},272:function(e,t,n){e.exports=n(120)}},[270]).default}});