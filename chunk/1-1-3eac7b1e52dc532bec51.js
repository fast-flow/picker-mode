webpackJsonp([1],{143:function(e,t,n){"use strict";var r=n(144),a=n(156)["default"],i=n(158),o=r.createClass({displayName:"Item",render:function(){var e=this;return n(144).createElement("label",{style:{cursor:"pointer",display:"block"}},n(144).createElement("input",{type:"checkbox",checked:e.props.checked,onChange:function(t){e.props.onChange(e.props.id,t.target.checked)}}),e.props.text)}}),c=r.createClass({displayName:"App",getInitialState:function(){return{data:[]}},picker:null,componentWillMount:function(){var e=this,t=e.state,n=[{id:"f23iuh23bff2",text:"mail@qq.com"},{id:"3tufh23ifghuw",text:"abc@163.com"},{id:"g24hg823hg`232",text:"999@gmail.com"},{id:"g32igh2iughh3",text:"wehfiu2q3@tom.cc"}];t.data=n,e.picker=new a({data:t.data.map(function(e){return{id:e.id,checked:!1}}),getViewData:function(){return t.data.map(function(e){return e.id})},onChange:function(n){t.stat=n,e.setState(t)}}),e.setState(t)},change:function(e,t){var n=this;t?n.picker.check(e):n.picker.uncheck(e)},render:function(){var e=this;return n(144).createElement("div",null,n(144).createElement("label",null,n(144).createElement("input",{type:"checkbox",checked:e.state.stat.viewDataCheckedAll,onChange:function(t){t.target.checked?e.picker.checkViewData():e.picker.uncheckViewData()}}),"选择当前页"),e.state.data.map(function(t,r){var a=e.state.stat.checked.indexOf(t.id)!==-1;return n(144).createElement(o,{key:r,id:t.id,text:t.text,checked:a,onChange:e.change})}),n(144).createElement("pre",null,i(e.state.stat)))}});e.exports=c},144:function(e,t,n){"use strict";e.exports=n(145)},145:function(e,t,n){"use strict";var r=n(3),a=n(146),i=n(150),o=n(38),c=n(155),u={};o(u,i),o(u,{findDOMNode:c("findDOMNode","ReactDOM","react-dom",r,r.findDOMNode),render:c("render","ReactDOM","react-dom",r,r.render),unmountComponentAtNode:c("unmountComponentAtNode","ReactDOM","react-dom",r,r.unmountComponentAtNode),renderToString:c("renderToString","ReactDOMServer","react-dom/server",a,a.renderToString),renderToStaticMarkup:c("renderToStaticMarkup","ReactDOMServer","react-dom/server",a,a.renderToStaticMarkup)}),u.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r,u.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a,e.exports=u},146:function(e,t,n){"use strict";var r=n(70),a=n(147),i=n(141);r.inject();var o={renderToString:a.renderToString,renderToStaticMarkup:a.renderToStaticMarkup,version:i};e.exports=o},147:function(e,t,n){"use strict";function r(e){o.isValidElement(e)?void 0:h(!1);var t;try{l.injection.injectBatchingStrategy(d);var n=c.createReactRootID();return t=s.getPooled(!1),t.perform(function(){var r=p(e,null),a=r.mountComponent(n,t,f);return u.addChecksumToMarkup(a)},null)}finally{s.release(t),l.injection.injectBatchingStrategy(i)}}function a(e){o.isValidElement(e)?void 0:h(!1);var t;try{l.injection.injectBatchingStrategy(d);var n=c.createReactRootID();return t=s.getPooled(!0),t.perform(function(){var r=p(e,null);return r.mountComponent(n,t,f)},null)}finally{s.release(t),l.injection.injectBatchingStrategy(i)}}var i=n(91),o=n(41),c=n(44),u=n(47),d=n(148),s=n(149),l=n(53),f=n(57),p=n(61),h=n(12);e.exports={renderToString:r,renderToStaticMarkup:a}},148:function(e,t){"use strict";var n={isBatchingUpdates:!1,batchedUpdates:function(e){}};e.exports=n},149:function(e,t,n){"use strict";function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=i.getPooled(null),this.useCreateElement=!1}var a=n(55),i=n(54),o=n(56),c=n(38),u=n(14),d={initialize:function(){this.reactMountReady.reset()},close:u},s=[d],l={getTransactionWrappers:function(){return s},getReactMountReady:function(){return this.reactMountReady},destructor:function(){i.release(this.reactMountReady),this.reactMountReady=null}};c(r.prototype,o.Mixin,l),a.addPoolingTo(r),e.exports=r},150:function(e,t,n){"use strict";var r=n(109),a=n(122),i=n(121),o=n(151),c=n(41),u=(n(152),n(106)),d=n(141),s=n(38),l=n(154),f=c.createElement,p=c.createFactory,h=c.cloneElement,m={Children:{map:r.map,forEach:r.forEach,count:r.count,toArray:r.toArray,only:l},Component:a,createElement:f,cloneElement:h,isValidElement:c.isValidElement,PropTypes:u,createClass:i.createClass,createFactory:p,createMixin:function(e){return e},DOM:o,version:d,__spread:s};e.exports=m},151:function(e,t,n){"use strict";function r(e){return a.createFactory(e)}var a=n(41),i=(n(152),n(153)),o=i({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hgroup:"hgroup",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",image:"image",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},r);e.exports=o},152:function(e,t,n){"use strict";function r(){if(l.current){var e=l.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function a(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;i("uniqueKey",e,t)}}function i(e,t,n){var a=r();if(!a){var i="string"==typeof n?n:n.displayName||n.name;i&&(a=" Check the top-level render call using <"+i+">.")}var o=h[e]||(h[e]={});if(o[a])return null;o[a]=!0;var c={parentOrOwner:a,url:" See https://fb.me/react-warning-keys for more information.",childOwner:null};return t&&t._owner&&t._owner!==l.current&&(c.childOwner=" It was passed a child from "+t._owner.getName()+"."),c}function o(e,t){if("object"==typeof e)if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];d.isValidElement(r)&&a(r,t)}else if(d.isValidElement(e))e._store&&(e._store.validated=!0);else if(e){var i=f(e);if(i&&i!==e.entries)for(var o,c=i.call(e);!(o=c.next()).done;)d.isValidElement(o.value)&&a(o.value,t)}}function c(e,t,n,a){for(var i in t)if(t.hasOwnProperty(i)){var o;try{"function"!=typeof t[i]?p(!1):void 0,o=t[i](n,i,e,a)}catch(c){o=c}if(o instanceof Error&&!(o.message in m)){m[o.message]=!0;r()}}}function u(e){var t=e.type;if("function"==typeof t){var n=t.displayName||t.name;t.propTypes&&c(n,t.propTypes,e.props,s.prop),"function"==typeof t.getDefaultProps}}var d=n(41),s=n(64),l=(n(65),n(4)),f=(n(42),n(107)),p=n(12),h=(n(24),{}),m={},g={createElement:function(e,t,n){var r="string"==typeof e||"function"==typeof e,a=d.createElement.apply(this,arguments);if(null==a)return a;if(r)for(var i=2;i<arguments.length;i++)o(arguments[i],e);return u(a),a},createFactory:function(e){var t=g.createElement.bind(null,e);return t.type=e,t},cloneElement:function(e,t,n){for(var r=d.cloneElement.apply(this,arguments),a=2;a<arguments.length;a++)o(arguments[a],r.type);return u(r),r}};e.exports=g},153:function(e,t){"use strict";function n(e,t,n){if(!e)return null;var a={};for(var i in e)r.call(e,i)&&(a[i]=t.call(n,e[i],i,e));return a}var r=Object.prototype.hasOwnProperty;e.exports=n},154:function(e,t,n){"use strict";function r(e){return a.isValidElement(e)?void 0:i(!1),e}var a=n(41),i=n(12);e.exports=r},155:function(e,t,n){"use strict";function r(e,t,n,r,a){return a}n(38),n(24);e.exports=r},156:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var i,o,c,u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=n(157),s=r(d),l=(o=i=function(){function e(t){a(this,e),c.call(this);var n=this;t=(0,s["default"])(!0,e.getDefaultSettings(),t),n.settings=t,n.data=n.settings.data,n.mode="check",n.triggerChange()}return e.getDefaultSettings=function(){return{data:[],onChange:function(e){},getDataCount:function(){return Number.MAX_VALUE},notExistModeUncheckTypeAll:!0}},e.prototype.triggerChange=function(e){var t=this,n=void 0,r={mode:null,checked:[],uncheck:[]},a=t.settings.getDataCount();if(t.data.forEach(function(e){e.checked?r.checked.push(e.id):r.uncheck.push(e.id)}),n="check"===t.mode?0===r.checked.length?"empty":r.checked.length>=a?"all":"some":0===r.uncheck.length?"empty":r.uncheck.length>=a?"all":"some",t.settings.notExistModeUncheckTypeAll&&"uncheck"===t.mode&&"all"===n&&(t.mode="check",n="empty"),"undefined"==typeof n)throw new Error("node_modules/picker-mode/lib/index.js triggerChange: not match type,Please tell me https://github.com/fast-flow/picker-mode/issues/new");if("function"==typeof t.settings.getViewData){var i=t.settings.getViewData();if(r.viewDataCheckedAll=!1,0!==i.length){var o=0;i.some(function(e){var n=t.data.forEach(function(t){t.id===e&&t.checked===!0&&o++});return n}),o===i.length&&(r.viewDataCheckedAll=!0)}}r.mode=t.mode,r.type=n,t.settings.onChange(r,{data:t.data,mode:t.mode},e)},e}(),c=function(){var e=this;this._find=function(t,n,r){var a=e;a.data=a.data.map(function(e){return u(e.id)!==("undefined"==typeof t?"undefined":u(t))&&console.warn("node_modules/picker-mode/lib/index.js _find: "+r+'(id) typeof id === "'+("undefined"==typeof t?"undefined":u(t))+'" | typeof data[index].id === '+u(e.id)),e.id===t&&(e=n(e)),e})},this.check=function(t){var n=e;if("undefined"==typeof t)throw new Error("node_modules/picker-mode/lib/index.js check: check(id) must have id");Array.isArray(t)||(t=[t]),t.forEach(function(e){n._find(e,function(e){return e.checked=!0,e},"checked")}),n.triggerChange("check")},this.uncheck=function(t){var n=e;if("undefined"==typeof t)throw new Error("node_modules/picker-mode/lib/index.js uncheck: check(id) must have id");Array.isArray(t)||(t=[t]),t.forEach(function(e){n._find(e,function(e){return e.checked=!1,e},"uncheck")}),n.triggerChange("uncheck")},this.del=function(t){var n=e;if("undefined"==typeof t)throw new Error("node_modules/picker-mode/lib/index.js del: del(id) must have id");Array.isArray(t)||(t=[t]),t.forEach(function(e){n.data=n.data.filter(function(t){return t.id!==e})}),n.triggerChange("del")},this.checkAll=function(){var t=e;t.mode="uncheck",t.data=t.data.map(function(e){return e.checked=!0,e}),t.triggerChange("checkAll")},this.uncheckAll=function(){var t=e;t.mode="check",t.data=t.data.map(function(e){return e.checked=!1,e}),t.triggerChange("uncheckAll")},this.checkViewData=function(){var t=e,n=t.settings.getViewData();console.log(n),n.forEach(function(e){t._find(e,function(e){return e.checked=!0,e},"checked")}),t.triggerChange("checkViewData")},this.uncheckViewData=function(){var t=e,n=t.settings.getViewData();n.forEach(function(e){t._find(e,function(e){return e.checked=!1,e},"checked")}),t.triggerChange("uncheckViewData")},this.clear=function(){var t=e;t.mode="check",t.data=[],t.triggerChange("clear")},this.concat=function(t){var n=e,r=n.data.map(function(e){return e.id}),a=t.map(function(e){if(r.indexOf(e)!==-1)return!1;var t="check"!==n.mode;return{id:e,checked:t}}).filter(function(e){return e});n.data=n.data.concat(a),n.triggerChange("concat")}},o);t["default"]=l},157:function(e,t){"use strict";var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,a=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===r.call(e)},i=function(e){if(!e||"[object Object]"!==r.call(e))return!1;var t=n.call(e,"constructor"),a=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!a)return!1;var i;for(i in e);return"undefined"==typeof i||n.call(e,i)};e.exports=function o(){var e,t,n,r,c,u,d=arguments[0],s=1,l=arguments.length,f=!1;for("boolean"==typeof d?(f=d,d=arguments[1]||{},s=2):("object"!=typeof d&&"function"!=typeof d||null==d)&&(d={});s<l;++s)if(e=arguments[s],null!=e)for(t in e)n=d[t],r=e[t],d!==r&&(f&&r&&(i(r)||(c=a(r)))?(c?(c=!1,u=n&&a(n)?n:[]):u=n&&i(n)?n:{},d[t]=o(f,u,r)):"undefined"!=typeof r&&(d[t]=r));return d}},158:function(e,t){function n(e,t){r=[];var n="",a=0;e=e.replace(/\\./g,o).replace(/(".*?"|'.*?')/g,o).replace(/\s+/,"");for(var i=0;i<e.length;i++){var d=e.charAt(i);switch(d){case"{":case"[":n+=d+"\n"+u(++a,t);break;case"}":case"]":n+="\n"+u(--a,t)+d;break;case",":n+=",\n"+u(a,t);break;case":":n+=": ";break;default:n+=d}}return n=n.replace(/\[[\d,\s]+?\]/g,function(e){return e.replace(/\s/g,"")}).replace(/\\(\d+)\\/g,c).replace(/\\(\d+)\\/g,c)}var r=[],a={tab:{"char":"\t",size:1},space:{"char":" ",size:4}},i={type:"tab"},o=function(e){return"\\"+r.push(e)+"\\"},c=function(e,t){return r[t-1]},u=function(e,t){return new Array(e+1).join(t)};e.exports=function(e,t){t=t||i;var r=a[t.type];if(null==r)throw new Error('Unrecognized indent type: "'+t.type+'"');var o=new Array((t.size||r.size)+1).join(r["char"]);return n(JSON.stringify(e),o)}}});
//# sourceMappingURL=1-1-3eac7b1e52dc532bec51.js.map