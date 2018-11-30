(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{109:function(e,t,n){"use strict";var o=n(57);e.exports=function(e){return o(e,!1)}},110:function(e,t,n){"use strict";var o=n(14),a=n(45),r=n(24),s="mixins";e.exports=function(e,t,n){var i=[],c={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},u={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},l={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)d(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=o({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=o({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=o({},e.propTypes,t)},statics:function(e,t){!function(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var a=n in l;r(!a,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var s=n in e;if(s){var i=u.hasOwnProperty(n)?u[n]:null;return r("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=f(e[n],o))}e[n]=o}}}(e,t)},autobind:function(){}};function m(e,t){var n=c.hasOwnProperty(t)?c[t]:null;g.hasOwnProperty(t)&&r("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&r("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function d(e,n){if(n){r("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),r(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,a=o.__reactAutoBindPairs;for(var i in n.hasOwnProperty(s)&&l.mixins(e,n.mixins),n)if(n.hasOwnProperty(i)&&i!==s){var u=n[i],d=o.hasOwnProperty(i);if(m(d,i),l.hasOwnProperty(i))l[i](e,u);else{var p=c.hasOwnProperty(i);if("function"!=typeof u||p||d||!1===n.autobind)if(d){var v=c[i];r(p&&("DEFINE_MANY_MERGED"===v||"DEFINE_MANY"===v),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",v,i),"DEFINE_MANY_MERGED"===v?o[i]=f(o[i],u):"DEFINE_MANY"===v&&(o[i]=h(o[i],u))}else o[i]=u;else a.push(i,u),o[i]=u}}}}function p(e,t){for(var n in r(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."),t)t.hasOwnProperty(n)&&(r(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var a={};return p(a,n),p(a,o),a}}function h(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function v(e,t){return t.bind(e)}var y={componentDidMount:function(){this.__isMounted=!0}},E={componentWillUnmount:function(){this.__isMounted=!1}},g={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},b=function(){};return o(b.prototype,e.prototype,g),function(e){var t=function(e,o,s){this.__reactAutoBindPairs.length&&function(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],a=t[n+1];e[o]=v(e,a)}}(this),this.props=e,this.context=o,this.refs=a,this.updater=s||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;r("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=i};for(var o in t.prototype=new b,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],i.forEach(d.bind(null,t)),d(t,y),d(t,e),d(t,E),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),r(t.prototype.render,"createClass(...): Class specification must implement a `render` method."),c)t.prototype[o]||(t.prototype[o]=null);return t}}},24:function(e,t,n){"use strict";var o=function(e){};e.exports=function(e,t,n,a,r,s,i,c){if(o(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,a,r,s,i,c],m=0;(u=new Error(t.replace(/%s/g,function(){return l[m++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},30:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var a=this,r=arguments,s=n&&!o;window.clearTimeout(o),o=setTimeout(function(){o=null,n||e.apply(a,r)},t),s&&e.apply(a,r)}}},305:function(e,t,n){__NEXT_REGISTER_PAGE("/como-ter-proposito-de-vida",function(){return e.exports=n(306),{page:e.exports.default}})},306:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(33),s=(n(32),n(17)),i=n(5),c=n(10);t.default=function(){return a.a.createElement(r.a,{title:"Como ter um propósito de vida?",date:1542941498357,id:"como-ter-proposito-de-vida"},a.a.createElement("p",null,"Esse é um assunto que está em alta. Tanto é que estou escrevendo sobre ele, tanto é que você se interessou pelo título e está aqui lendo."),a.a.createElement("p",null,'O motivo pelo qual esse tema tem aparecido com frequência é extremamente relevante para compreendermos como podemos realizar essa jornada de "propósito", porém falarei disso mais para frente.'),a.a.createElement("h3",null,"Qual a importância de definir um propósito?"),a.a.createElement("p",null,"Um propósito é uma ",a.a.createElement("strong",null,"direção de vida"),", é uma ",a.a.createElement("strong",null,"referência de futuro"),". É uma situação que queremos atingir em algum ponto no futuro."),a.a.createElement("p",null,"Porém, essa ",a.a.createElement("strong",null,"referência de futuro")," só é realmente útil quando ela nos ajuda no presente. Porque, em teoria, nem o passado nem o futuro existem, apenas o presente. Mas podemos usar essas duas “teorias” para guiar melhor o nosso presente."),a.a.createElement(i.a,null,"O passado e o futuro determinam o nosso presente "),a.a.createElement("p",null,"Quando temos dois possíveis caminhos de vida à nossa frente, ambos igualmente bons, como escolher entre um e outro, se não sabemos onde queremos chegar? Assim como Alice no País das Maravilhas."),a.a.createElement(i.a,null,"Alice: Você poderia me dizer, por favor, qual caminho eu devo seguir?",a.a.createElement("br",null),"O Gato: Bom, isso depende de onde você quer chegar.",a.a.createElement("br",null),"Alice: Eu não me importo muito.",a.a.createElement("br",null),"O Gato: Então não importa muito por qual caminho você siga.",a.a.createElement("br",null),"Alice: Eu só quero chegar em algum lugar.",a.a.createElement("br",null),"O Gato: Com certeza você vai conseguir... basta você andar por tempo suficiente."),a.a.createElement("p",null,"Portanto um propósito nos ajuda a guiar nossa vida no ",a.a.createElement("strong",null,"presente"),"."),a.a.createElement("p",null,"A partir de um propósito bem definido, nossas ações passam a ter mais ",a.a.createElement("strong",null,"coerência")," entre si, pois cada vez mais vamos tentando dar significado para cada contexto de nossas vidas e passamos a viver uma vida mais ",a.a.createElement("strong",null,"autêntica"),"."),a.a.createElement("h3",null,"O que é propósito de vida?"),a.a.createElement("p",null,"Você percebeu que a nossa conversa começou com “como encontrar propósito” e “porque propósito é importante” ao invés de “o que é propósito”?"),a.a.createElement("p",null,"Na verdade, a maioria dos textos e discussões sobre o assunto começam da mesma forma. Porque? Porque todos nós já partimos do pressuposto que já sabemos “mais ou menos” o que é propósito."),a.a.createElement("p",null,"Nunca foi-nos ensinado o hábito de refletir sobre esse tema. Inclusive, era comum sermos taxados de loucos, chatos e inconvenientes se ficássemos a todo momento questionando o objetivo da vida e perguntando o “porquê” de tudo."),a.a.createElement("p",null,'Bom, o fato é que não precisamos mesmo definir com exatidão matemática o significado das coisas para que possamos usá-las a nosso favor, e de fato todos nós já sabemos “mais ou menos” o que é propósito. Porém, um pequeno aprofundamento no tema vai tornar mais fácil quando chegarmos no assunto “como definir meu propósito de vida".'),a.a.createElement("p",null,'Percebe que eu falei sobre “definir” propósito, e não “encontrar" propósito. Essa diferença é importante, pois nos mostra que as coisas não têm um propósito intrínseco que precisa ser encontrado. Um propósito de algo é sempre definido por alguém, ou seja, um observador, um sujeito, uma pessoa.'),a.a.createElement("p",null,"Uma pedra não tem razão de existir, porém você pode usá-la com diferentes propósitos: para segurar uma porta, para fazer fogo, para se proteger de um animal."),a.a.createElement("p",null,"Mesmo um machado, que tenha sido criado por alguém com um propósito específico, pode ser usado com outro objetivo por outra pessoa, como o de decoração, por exemplo. Portanto o propósito de algo também não depende de quem criou, apenas de quem usa."),a.a.createElement("p",null,"Da mesma forma, a vida, ou a sua existência, também não tem uma “razão de existir”. Ela apenas existe. E por mais que você acredite que tenha um criador que a criou com um objetivo específico, isso não significa que essa seja a razão de sua existência para ",a.a.createElement("strong",null,"você"),"."),a.a.createElement("p",null,"E construir um propósito de vida para você, baseado no que você acredita, não significa negar um possível propósito pré-existente. É possível construir um propósito em cima do outro."),a.a.createElement(i.a,null,'Por exemplo: se Deus, ou a minha religião, dizem que "tenho que ser bom”, como posso expressar isso no mundo atual? Como posso ter uma profissão que expresse isso?'),a.a.createElement("p",null,"Essa ideia de que nada tem um significado intrínseco nunca foi tema de grande discussão na filosofia nem na sociedade. Foi apenas em 1945, com o surgimento do ",a.a.createElement("strong",null,"existencialismo"),", que diz que cada indivíduo é responsável por dar o significado à sua vida e viver baseado nisso, ",a.a.createElement("strong",null,"autenticamente"),"."),a.a.createElement(i.a,null,"“Existência precede essência” - Jean-Paul Sartre, precursor do Existencialismo"),a.a.createElement("h3",null,"Ok, propósito sempre foi importante, mas porque o assunto está na “moda”?"),a.a.createElement("p",null,"Durante a maior parte da história, a humanidade viveu (e ainda vive) sob instituições centrais que organizavam a sociedade. Por muito tempo um desses balizadores foi a moral religiosa, definida pela igreja."),a.a.createElement("p",null,"E por mais que as principais igrejas ainda tenham grande presença na vida das pessoas, é notável a diferença de hoje para 50 anos atrás ou para 100 anos atrás. E ao longo do tempo, essa centralização foi se diluindo em cada vez mais correntes religiosas, espirituais e filosóficas."),a.a.createElement("p",null,"A universidade também sempre foi uma referência acadêmica e sinônimo de conhecimento em toda a sociedade. Com o avanço da tecnologia e da internet, essa referência está se perdendo e se tornando cada vez mais descentralizada."),a.a.createElement("p",null,"Essas instituições eram referências externas que nos guiavam e definiam o propósito da nossa vida."),a.a.createElement("p",null,"Também o casamento, o conceito de família, as organizações políticas e até mesmo a economia e os meios de produção estão ou se descentralizando ou perdendo força."),a.a.createElement("p",null,"Com o enfraquecimento das referências externas, surge a necessidade do indivíduo ser capaz de guiar a sua vida, definindo, à partir de si próprio, uma referência a ser seguida."),a.a.createElement("p",null,a.a.createElement("strong",null,"Damos a essa referência interna o nome de propósito.")),a.a.createElement("h3",null,"Como defenir um propósito a partir de mim mesmo?"),a.a.createElement("p",null,"No texto sobre ",a.a.createElement(c.a,{href:"https://bussola.school/como-ter-motivacao-e-fazer-o-que-nos-propomos/"},"como ter motivação"),", explico da dificuldade de se criar um propósito. É, de fato, uma das coisas mais difíceis de se fazer."),a.a.createElement("p",null,"E é claro que é difícil, se fosse fácil todo mundo já teria feito, e esse texto nem precisaria existir."),a.a.createElement("p",null,"Assim como as referências externas não são mais suficientes para guiar toda a sua vida, obviamente não é esse texto que será capaz de fazer isso por você. Mas existem pistas e caminhos mais fáceis que podemos seguir para encontrar essa resposta."),a.a.createElement("p",null,"A primeira (e praticamente única) coisa que você precisa fazer é: descobrir quem você é."),a.a.createElement("p",null,"Vou explicar."),a.a.createElement("p",null,"Quando te pergunto “quem você é?” Há duas respostas possíveis:"),a.a.createElement("ol",null,a.a.createElement("li",null,"Um ser pensante, consciente de si próprio (o que, portanto, te diferencia de pedras, plantas e animais)."),a.a.createElement("li",null,"Um conjunto de características, como: nome, idade, profissão, gênero, nacionalidade, opiniões políticas, etc.")),a.a.createElement("p",null,"Compreender as duas respostas é essencial para nossa tarefa, porém, nesse texto vamos focar apenas na segunda."),a.a.createElement("p",null,"Pode parecer estranho chegar à conclusão de que somos nada mais do que um conjunto de características, mas é a verdade. Pode parecer mais estranho ainda, perceber que essas características foram se construindo ao longo de nossa vida, através da influência do meio ao nosso redor."),a.a.createElement("p",null,'Portanto, "quem somos" nada mais é do que a soma de nossas experiências do passado, das pessoas que nos cercam, dos ambientes que circulamos e das atividades que fazemos.'),a.a.createElement(i.a,null,"Somos a soma"),a.a.createElement("p",null,"Como eu disse, um propósito é uma ",a.a.createElement("strong",null,"referência de futuro"),", que só faz sentido quando nos ",a.a.createElement("strong",null,"identificamos")," com ela. Não adianta essa referência ser algo como “ajudar as pessoas através da música” se você nunca tocou instrumento, se não é uma área que te interessa e se isso nunca fez parte da sua vida."),a.a.createElement("p",null,"Percebe a importância de compreender melhor quem nós somos? Para conseguirmos, ao máximo, unir nosso ",a.a.createElement("strong",null,"passado")," ao nosso ",a.a.createElement("strong",null,"futuro"),"."),a.a.createElement("p",null,"Para essa união ser forte o suficiente, precisamos construir um caminho de vida que conecte ao máximo as nossas ",a.a.createElement("strong",null,"conquistas "),"dos nossos ",a.a.createElement("strong",null,"valores. ")),a.a.createElement("p",null,"À partir disso, precisamos então de duas coisas:"),a.a.createElement("ol",null,a.a.createElement("li",null,"Ter clareza dos nossos valores (nossas características mais importantes, que mais nos identificamos)"),a.a.createElement("li",null,"Ter clareza do que queremos conquistar (que surgem espontaneamente dos nossos valores)")),a.a.createElement("p",null,"Esse é um processo longo, que precisamos constantemente atualizá-lo, e eu te ",a.a.createElement("strong",null,"aconselho fortemente")," a escrever suas conclusões. Pode ser em papel físico, ou em qualquer aplicativo de sua preferência, contando que seja um lugar que você sempre tenha acesso."),a.a.createElement(i.a,null,"1. Pense e anote, quais são as atividades que mais gosto de fazer?"),a.a.createElement(i.a,null,"2. Das atividades que citei, o que elas têm que me fazem gostar dela?"),a.a.createElement(i.a,null,"3. Para cada item listado anteriormente, pense em uma situação real de sua vida que tinha esse item"),a.a.createElement("p",null,"Cada passo seguinte pode ajudar no passo anterior. E não tem problema não conseguir pensar em muitas, tente fazer essa reflexão ao longo da próxima semana, e anote sempre que pensar em algo novo."),a.a.createElement(s.a,{text:"Se tiver dificuldade, posso te ajudar pessoalmente, é so inscrever seu email aqui:",buttonText:"Quero ajuda!",placeholder:"seu melhor email!",location:"want-help"}),a.a.createElement("p",null,"O próximo passo é uma derivação do primeiro: pense nas coisas que você gostaria de conquistar no futuro. Também não tem problema se já não souber de antemão. Tente pensar entre 3 a 6 coisas, nos dois passos."),a.a.createElement("p",null,"O último passo, e talvez o mais difícil é: pense em um ",a.a.createElement("strong",null,"caminho de vida")," que conecte ao máximo todas essas coisas em conjunto."),a.a.createElement(i.a,null,"O que existe no mundo, que possibilita que eu expresse todos os meus valores?"),a.a.createElement("p",null,"Se você não encontrou ainda, não quer dizer que não exista. Talvez você precise explorar mais coisas (ou talvez nós possamos te ajudar pessoalmente), mas essas reflexões acima já lhe serão bem úteis."),a.a.createElement("h3",null,"Calma, fica cada vez melhor"),a.a.createElement("p",null,"No começo a coisa é meio experimental, mas o objetivo é que tenhamos clareza de como navegar nossa vida."),a.a.createElement("p",null,"Se quiser saber mais sobre o assunto é só escrever seu email aí nessa caixinha que eu te aviso!"),a.a.createElement(s.a,{text:""}),a.a.createElement("p",null,"Qualquer dúvida, sugestão ou crítica, deixa um comentário aí em baixo e vamos conversando :)"),a.a.createElement(i.a,null,a.a.createElement("strong",null,"Vivamos"),a.a.createElement("br",null),a.a.createElement("br",null),"Viver com propósito é viver autenticamente.",a.a.createElement("br",null),"Viver autenticamente é viver a partir de quem nós somos.",a.a.createElement("br",null),"Viver a partir de quem nós somos é construir um futuro a partir do presente.",a.a.createElement("br",null),a.a.createElement("br",null),"Descobrir quem nós somos é olhar para quem éramos.",a.a.createElement("br",null),"Quem somos?",a.a.createElement("br",null),a.a.createElement("br",null),"O ponto de encontro entre o passado e o futuro",a.a.createElement("br",null),"É a chance que você tem de mudar o curso do universo!",a.a.createElement("br",null),a.a.createElement("br",null),"Percebe o presente da vida?"))}},31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n(55),a=n(59),r=n(60);t.CommentCount=o.CommentCount,t.CommentEmbed=a.CommentEmbed,t.DiscussionEmbed=r.DiscussionEmbed;var s={CommentCount:o.CommentCount,CommentEmbed:a.CommentEmbed,DiscussionEmbed:r.DiscussionEmbed};t.default=s},32:function(e,t,n){"use strict";var o=n(2),a=n.n(o),r=n(1),s=n.n(r),i=n(0);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.a=function(e){var t=e.src,n=e.alt,o=u(e,["src","alt"]);return s.a.createElement("p",{className:a.a.dynamic([["2285008036",[i.e,i.a]]])},s.a.createElement(a.a,{styleId:"2285008036",css:["p.__jsx-style-dynamic-selector{max-width:".concat(i.e,"px !important;}"),"img.__jsx-style-dynamic-selector{width:100%;border-radius:".concat(i.a,"px;}")],dynamic:[i.e,i.a]}),s.a.createElement("img",c({src:t,alt:n||t},o,{className:a.a.dynamic([["2285008036",[i.e,i.a]]])+" "+(null!=o.className&&o.className||"")})))}},33:function(e,t,n){"use strict";var o=n(2),a=n.n(o),r=n(1),s=n.n(r),i=(n(4),n(20)),c=n.n(i),u=n(31),l="https://".concat("bussola.school"),m=function(e){var t=e.id,n=e.title;return s.a.createElement("div",null,s.a.createElement("h4",null,"Comentários"),s.a.createElement(u.DiscussionEmbed,{shortname:"bussola-school",config:{title:n,identifier:t,url:"".concat(l,"/").concat(t)}}))},d=n(0);t.a=function(e){var t=e.children,n=e.title,o=e.date,r=e.id;return s.a.createElement("section",{className:a.a.dynamic([["4117766596",[d.h.lightwhite,d.h.lightblack,d.f,d.f,d.g,6*d.d,d.e,6*d.d,2*d.d,4*d.d,3*d.d,d.h.lightblue]]])},s.a.createElement(c.a,null,s.a.createElement("title",{className:a.a.dynamic([["4117766596",[d.h.lightwhite,d.h.lightblack,d.f,d.f,d.g,6*d.d,d.e,6*d.d,2*d.d,4*d.d,3*d.d,d.h.lightblue]]])},n," - Bussola.school")),s.a.createElement(a.a,{styleId:"4117766596",css:["main{background:".concat(d.h.lightwhite," !important;}"),"section.__jsx-style-dynamic-selector{color:".concat(d.h.lightblack,";text-align:left;line-height:1.6;-webkit-letter-spacing:-.004em;-moz-letter-spacing:-.004em;-ms-letter-spacing:-.004em;letter-spacing:-.004em;margin:0 auto;padding-left:").concat(d.f,"px padding-right:").concat(d.f,"px;font-size:0.9em;}"),"article.__jsx-style-dynamic-selector > *{max-width:".concat(d.g,"px;margin-left:auto;margin-right:auto;}"),"section.__jsx-style-dynamic-selector ul.LayoutPost-clear{list-style:none;}","section.__jsx-style-dynamic-selector p{margin-top:".concat(6*d.d,"px;margin-bottom:0;}"),"section.__jsx-style-dynamic-selector article.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font-size:1.5em;}","section.__jsx-style-dynamic-selector h1,section.__jsx-style-dynamic-selector h2,section.__jsx-style-dynamic-selector h3,section.__jsx-style-dynamic-selector h4{text-shadow:initial;text-transform:initial;max-width:".concat(d.e,"px !important;font-weight:900;margin-top:").concat(6*d.d,"px;}"),"section.__jsx-style-dynamic-selector h3,section.__jsx-style-dynamic-selector h4{padding:".concat(2*d.d,"px ").concat(4*d.d,"px;border-bottom:4px dotted #00000020;-webkit-transition:200ms all;transition:200ms all;}"),"section.__jsx-style-dynamic-selector acticle.__jsx-style-dynamic-selector h3,section.__jsx-style-dynamic-selector article.__jsx-style-dynamic-selector h4{margin-bottom:-".concat(3*d.d,"px;}"),"section.__jsx-style-dynamic-selector h3:hover,section.__jsx-style-dynamic-selector h4:hover{border-bottom:4px dotted #00000050;}","date.__jsx-style-dynamic-selector{font-size:0.9em;color:".concat(d.h.lightblue,";}")],dynamic:[d.h.lightwhite,d.h.lightblack,d.f,d.f,d.g,6*d.d,d.e,6*d.d,2*d.d,4*d.d,3*d.d,d.h.lightblue]}),s.a.createElement("article",{className:a.a.dynamic([["4117766596",[d.h.lightwhite,d.h.lightblack,d.f,d.f,d.g,6*d.d,d.e,6*d.d,2*d.d,4*d.d,3*d.d,d.h.lightblue]]])},s.a.createElement("h1",{className:a.a.dynamic([["4117766596",[d.h.lightwhite,d.h.lightblack,d.f,d.f,d.g,6*d.d,d.e,6*d.d,2*d.d,4*d.d,3*d.d,d.h.lightblue]]])},n),s.a.createElement("date",{className:a.a.dynamic([["4117766596",[d.h.lightwhite,d.h.lightblack,d.f,d.f,d.g,6*d.d,d.e,6*d.d,2*d.d,4*d.d,3*d.d,d.h.lightblue]]])},new Date(o).toDateString()),t),s.a.createElement(m,{id:r,title:n}))}},44:function(e,t,n){"use strict";function o(e){return function(){return e}}var a=function(){};a.thatReturns=o,a.thatReturnsFalse=o(!1),a.thatReturnsTrue=o(!0),a.thatReturnsNull=o(null),a.thatReturnsThis=function(){return this},a.thatReturnsArgument=function(e){return e},e.exports=a},45:function(e,t,n){"use strict";e.exports={}},5:function(e,t,n){"use strict";var o=n(2),a=n.n(o),r=n(1),s=n.n(r),i=(n(4),n(0));t.a=function(e){var t=e.children;return s.a.createElement("p",{className:a.a.dynamic([["4009615491",[i.d,2*i.d,4*i.d,i.a,i.h.transparent.light]]])},s.a.createElement(a.a,{styleId:"4009615491",css:["p.__jsx-style-dynamic-selector{border-left:".concat(i.d,"px solid #e0e0e0;padding:").concat(2*i.d,"px ").concat(4*i.d,"px;font-size:0.9em;-webkit-transition:200ms all;transition:200ms all;border-radius:").concat(i.a,"px;}"),"p.__jsx-style-dynamic-selector:hover{background:".concat(i.h.transparent.light,";}")],dynamic:[i.d,2*i.d,4*i.d,i.a,i.h.transparent.light]}),s.a.createElement("i",{className:a.a.dynamic([["4009615491",[i.d,2*i.d,4*i.d,i.a,i.h.transparent.light]]])},t))}},55:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(23),s=(o=r)&&o.__esModule?o:{default:o},i=n(30);var c=(0,i.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),a(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?c():(0,i.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,i.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return s.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},56:function(e,t,n){"use strict";var o=n(44);e.exports=o},57:function(e,t,n){"use strict";var o=n(14),a=n(78),r=n(58),s=function(){};function i(){return null}e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,c="@@iterator";var u="<<anonymous>>",l={array:f("array"),bool:f("boolean"),func:f("function"),number:f("number"),object:f("object"),string:f("string"),symbol:f("symbol"),any:p(i),arrayOf:function(e){return p(function(t,n,o,r,s){if("function"!=typeof e)return new d("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var i=t[n];if(!Array.isArray(i)){var c=v(i);return new d("Invalid "+r+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected an array.")}for(var u=0;u<i.length;u++){var l=e(i,u,o,r,s+"["+u+"]",a);if(l instanceof Error)return l}return null})},element:function(){return p(function(t,n,o,a,r){var s=t[n];if(!e(s)){var i=v(s);return new d("Invalid "+a+" `"+r+"` of type `"+i+"` supplied to `"+o+"`, expected a single ReactElement.")}return null})}(),instanceOf:function(e){return p(function(t,n,o,a,r){if(!(t[n]instanceof e)){var s=e.name||u,i=function(e){if(!e.constructor||!e.constructor.name)return u;return e.constructor.name}(t[n]);return new d("Invalid "+a+" `"+r+"` of type `"+i+"` supplied to `"+o+"`, expected instance of `"+s+"`.")}return null})},node:function(){return p(function(e,t,n,o,a){if(!h(e[t]))return new d("Invalid "+o+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.");return null})}(),objectOf:function(e){return p(function(t,n,o,r,s){if("function"!=typeof e)return new d("Property `"+s+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var i=t[n],c=v(i);if("object"!==c)return new d("Invalid "+r+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected an object.");for(var u in i)if(i.hasOwnProperty(u)){var l=e(i,u,o,r,s+"."+u,a);if(l instanceof Error)return l}return null})},oneOf:function(e){if(!Array.isArray(e))return i;return p(function(t,n,o,a,r){for(var s=t[n],i=0;i<e.length;i++)if(m(s,e[i]))return null;var c=JSON.stringify(e);return new d("Invalid "+a+" `"+r+"` of value `"+s+"` supplied to `"+o+"`, expected one of "+c+".")})},oneOfType:function(e){if(!Array.isArray(e))return i;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+E(n)+" at index "+t+"."),i}return p(function(t,n,o,r,s){for(var i=0;i<e.length;i++){var c=e[i];if(null==c(t,n,o,r,s,a))return null}return new d("Invalid "+r+" `"+s+"` supplied to `"+o+"`.")})},shape:function(e){return p(function(t,n,o,r,s){var i=t[n],c=v(i);if("object"!==c)return new d("Invalid "+r+" `"+s+"` of type `"+c+"` supplied to `"+o+"`, expected `object`.");for(var u in e){var l=e[u];if(l){var m=l(i,u,o,r,s+"."+u,a);if(m)return m}}return null})},exact:function(e){return p(function(t,n,r,s,i){var c=t[n],u=v(c);if("object"!==u)return new d("Invalid "+s+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var l=o({},t[n],e);for(var m in l){var p=e[m];if(!p)return new d("Invalid "+s+" `"+i+"` key `"+m+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var f=p(c,m,r,s,i+"."+m,a);if(f)return f}return null})}};function m(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){this.message=e,this.stack=""}function p(e){function n(n,o,r,s,i,c,l){if((s=s||u,c=c||r,l!==a)&&t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}return null==o[r]?n?null===o[r]?new d("The "+i+" `"+c+"` is marked as required in `"+s+"`, but its value is `null`."):new d("The "+i+" `"+c+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(o,r,s,i,c)}var o=n.bind(null,!1);return o.isRequired=n.bind(null,!0),o}function f(e){return p(function(t,n,o,a,r,s){var i=t[n];return v(i)!==e?new d("Invalid "+a+" `"+r+"` of type `"+y(i)+"` supplied to `"+o+"`, expected `"+e+"`."):null})}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var o=function(e){var t=e&&(n&&e[n]||e[c]);if("function"==typeof t)return t}(t);if(!o)return!1;var a,r=o.call(t);if(o!==t.entries){for(;!(a=r.next()).done;)if(!h(a.value))return!1}else for(;!(a=r.next()).done;){var s=a.value;if(s&&!h(s[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function y(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function E(e){var t=y(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,l.checkPropTypes=r,l.PropTypes=l,l}},58:function(e,t,n){"use strict";e.exports=function(e,t,n,o,a){}},59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(23),s=(o=r)&&o.__esModule?o:{default:o};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),a(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return s.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(23),s=(o=r)&&o.__esModule?o:{default:o},i=n(30);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),a(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return s.default.createElement("div",{id:"disqus_thread"})}}]),t}()}},[[305,1,0]]]);