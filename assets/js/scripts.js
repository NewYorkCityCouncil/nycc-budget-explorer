/*!
 * Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

!function(t,e){"use strict";"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,n){var o,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,n);o=void 0===o?l:o}),void 0!==o?o:t}function h(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new s(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return u(this,t,e)}return h(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];o;){var r=s&&s[o];r&&(this.off(t,o),delete s[o]),o.apply(this,e),n+=r?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;h>e;e++){var i=u[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s.isBoxSizeOuter=r=200==t(o.width),i.removeChild(e)}}function s(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=n(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;h>l;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width);x!==!1&&(a.width=x+(z?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),s=0;s<i.length;s++)o.push(i[s])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,s=this;this[o]=setTimeout(function(){n.apply(s,e),delete s[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=h[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],s=this.layout.size,r=-1!=n.indexOf("%")?parseFloat(n)/100*s.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*s.height:parseInt(o,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[o];e[s]=this.getXValue(a),e[r]="";var u=n?"paddingTop":"paddingBottom",h=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),s=parseInt(e,10),r=o===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-n,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,s){return e(t,i,n,o,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function s(t,e){var i=n.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,f[o]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=o,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;n.extend(c,e.prototype),c.option=function(t){n.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var s=e[o],r=new i(s,this);n.push(r)}return n},c._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){r++,r==s&&i()}var o=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,n)})},c.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var o=h.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),s={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return s},c.handleEvent=n.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},n.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=n.extend({},s.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(o),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=o,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),n=i._create;i._create=function(){this.id=this.layout.itemGUID++,n.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var n=e[i];this.sortData[i]=n(this.element,this)}}};var o=i.destroy;return i.destroy=function(){o.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=i.prototype,o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return o.forEach(function(t){n[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),n.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i=t+e,n="outer"+e;if(this._getMeasurement(i,n),!this[i]){var o=this.getFirstItemSize();this[i]=o&&o[n]||this.isotope.size["inner"+e]}},n.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=Object.create(n),o.prototype.constructor=o,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,s=o/n,r=n-o%n,a=r&&1>r?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),s=Math.min.apply(Math,o),r=o.indexOf(s),a={x:this.columnWidth*r,y:s},u=s+t.size.outerHeight,h=this.cols+1-o.length,d=0;h>d;d++)this.colYs[r+d]=u;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),s=o?n.left:n.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?n.top:n.bottom)+i.outerHeight,l=a;u>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),n=i.prototype,o={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)o[s]||(n[s]=e.prototype[s]);var r=n.measureColumns;n.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=n._getOption;return n._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var n={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,n},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(i,n,o,s,r,a){return e(t,i,n,o,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope/js/item"),require("isotope/js/layout-mode"),require("isotope/js/layout-modes/masonry"),require("isotope/js/layout-modes/fit-rows"),require("isotope/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,n,o,s,r){function a(t,e){return function(i,n){for(var o=0;o<t.length;o++){var s=t[o],r=i.sortData[s],a=n.sortData[s];if(r>a||a>r){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var n=t[i];n.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?o.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&n&&o.dispatchEvent("arrangeComplete",null,[o.filteredItems])}var e,i,n,o=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){n=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],n=[],o=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?n.push(a):u||a.isHidden||o.push(a)}}return{matches:i,needReveal:n,needHide:o}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return n(e.element,t)}},l.updateSortData=function(t){var e;t?(t=o.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&e>i;i++){var n=t[i];n.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),n=i[0],o=n.match(/^\[(.+)\]$/),s=o&&o[1],r=e(s,n),a=d.sortDataParsers[i[1]];
return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=a(e,this.options.sortAscending);this.filteredItems.sort(i),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,n,o=e.length;for(i=0;o>i;i++)n=e[i],this.element.appendChild(n.element);var s=this._filter(e).matches;for(i=0;o>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;o>i;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=o.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,n=0;i&&i>n;n++){var s=e[n];o.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var n=t.apply(this,e);return this.options.transitionDuration=i,n},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});
var budgetSummary = {
  "classes": {
    "AMOUNTS TO BE SCHEDULED": ["05"],
    "Charges, Services, Expenses": ["70","07","40"],
    "CONTRACTUAL SERVICES": ["60"],
    "OTPS HOLDING CODES": ["90"],
    "Pay, Fringe Benefits": ["04","06","01","02","03"],
    "Property, Equipment, Supplies": ["30","10"],
    "SOCIAL SERVICES": ["50"],
    "TRANSFERS FOR DEBT SERVICE": ["80"],
  },

  "agencies": {
    "ADMIN FOR CHILDREN'S SERVICES": [
      "068"
    ],
    "BOARD OF CORRECTION": [
      "073"
    ],
    "BOARD OF ELECTIONS": [
      "003"
    ],
    "BUSINESS INTEGRITY COMMISSION":[
      "829"
    ],
    "BOROUGH PRESIDENT": [
      "010",
      "011",
      "012",
      "013",
      "014"
    ],
    "CAMPAIGN FINANCE BOARD": [
      "004"
    ],
    "CITY CLERK": [
      "103"
    ],
    "CITY COUNCIL": [
      "102"
    ],
    "CITY UNIVERSITY OF NEW YORK": [
      "042"
    ],
    "CIVIL SERVICE COMMISSION": [
      "134"
    ],
    "CIVILIAN COMPLAINT REVIEW BOARD": [
      "054"
    ],
    "COMMISSION ON HUMAN RIGHTS": [
      "226"
    ],

    "COMMUNITY BOARD": [
      "341",
      "342",
      "343",
      "344",
      "345",
      "346",
      "347",
      "348",
      "349",
      "350",
      "351",
      "352",
      "381",
      "382",
      "383",
      "384",
      "385",
      "386",
      "387",
      "388",
      "389",
      "390",
      "391",
      "392",
      "431",
      "432",
      "433",
      "434",
      "435",
      "436",
      "437",
      "438",
      "439",
      "440",
      "441",
      "442",
      "443",
      "444",
      "471",
      "472",
      "473",
      "474",
      "475",
      "476",
      "477",
      "478",
      "479",
      "480",
      "481",
      "482",
      "483",
      "484",
      "485",
      "486",
      "487",
      "488",
      "491",
      "492",
      "493"
    ],
    "CONFLICTS OF INTEREST BOARD": [
      "312"
    ],
    "DEBT SERVICE": [
      "099"
    ],
    "DEPARTMENT FOR THE AGING": [
      "125"
    ],
    "DEPARTMENT OF BUILDINGS": [
      "810"
    ],
    "DEPARTMENT OF CITY PLANNING": [
      "030"
    ],
    "DEPARTMENT OF CITYWIDE ADMIN SERVICE": [
      "856"
    ],
    "DEPARTMENT OF CONSUMER AFFAIRS": [
      "866"
    ],
    "DEPARTMENT OF CORRECTION": [
      "072"
    ],
    "DEPARTMENT OF CULTURAL AFFAIRS": [
      "126"
    ],
    "DEPARTMENT OF DESIGN & CONSTRUCTION": [
      "850"
    ],
    "DEPARTMENT OF EDUCATION": [
      "040"
    ],
    "DEPARTMENT OF EMERGENCY MANAGEMENT": [
      "017"
    ],
    "DEPARTMENT OF ENVIRONMENTAL PROTECT.": [
      "826"
    ],
    "DEPARTMENT OF FINANCE": [
      "836"
    ],
    "DEPARTMENT OF HEALTH AND MENTAL HYGIENE": [
      "816"
    ],
    "DEPARTMENT OF HOMELESS SERVICES": [
      "071"
    ],
    "DEPARTMENT OF INFO TECH & TELECOMM": [
      "858"
    ],
    "DEPARTMENT OF INVESTIGATION": [
      "032"
    ],
    "DEPARTMENT OF PARKS AND RECREATION": [
      "846"
    ],
    "DEPARTMENT OF PROBATION": [
      "781"
    ],
    "DEPARTMENT OF RECORDS & INFORMATION SVS": [
      "860"
    ],
    "DEPARTMENT OF SANITATION": [
      "827"
    ],
    "DEPARTMENT OF SMALL BUSINESS SERVICES": [
      "801"
    ],
    "DEPARTMENT OF SOCIAL SERVICES": [
      "069"
    ],
    "DEPARTMENT OF TRANSPORTATION": [
      "841"
    ],
    "DEPARTMENT OF VETERANS' SERVICES": [
      "063"
    ],
    "DEPARTMENT OF YOUTH & COMMUNITY DEV": [
      "260"
    ],
    "DISTRICT ATTORNEY": [
      "901",
      "902",
      "903",
      "904",
      "905"
    ],
    "EQUAL EMPLOYMENT PRACTICES COMMISSION": [
      "133"
    ],
    "FINANCIAL INFORMATION SERVICE AGENCY": [
      "127"
    ],
    "FIRE DEPARTMENT": [
      "057"
    ],
    "HEALTH AND HOSPITALS CORP": [
      "819"
    ],
    "HOUSING PRESERVATION AND DEVELOPMENT": [
      "806"
    ],
    "INDEPENDENT BUDGET OFFICE": [
      "132"
    ],
    "LANDMARKS PRESERVATION COMM.": [
      "136"
    ],
    "LAW DEPARTMENT": [
      "025"
    ],
    "LIBRARIES": [
      "035",
      "037",
      "038",
      "039"
    ],
    "MAYORALTY": [
      "002"
    ],
    "MISCELLANEOUS": [
      "098"
    ],
    "NYC TAXI AND LIMOUSINE COMM": [
      "156"
    ],
    "OFFICE OF ADMIN TRIALS & HEARINGS": [
      "820"
    ],
    "OFFICE OF ADMINISTRATIVE TAX APPEALS": [
      "021"
    ],
    "OFFICE OF COLLECTIVE BARGAINING": [
      "313"
    ],
    "OFFICE OF PAYROLL ADMINISTRATION": [
      "131"
    ],
    "OFFICE OF PROSECUTION SPEC NARCO": [
      "906"
    ],
    "OFFICE OF THE ACTUARY": [
      "008"
    ],
    "OFFICE OF THE COMPTROLLER": [
      "015"
    ],
    "PENSION CONTRIBUTIONS": [
      "095"
    ],
    "POLICE DEPARTMENT": [
      "056"
    ],
    "PUBLIC ADMINISTRATOR": [
      "941",
      "942",
      "943",
      "944",
      "945"
    ],
    "PUBLIC ADMINISTRATOR": [
      "945"
    ],
    "PUBLIC ADVOCATE": [
      "101"
    ]
  },


  "aspects": {"rows":[
    {"key":["ADMIN FOR CHILDREN'S SERVICES","AMOUNTS TO BE SCHEDULED"],"value":61395},
    {"key":["ADMIN FOR CHILDREN'S SERVICES","Charges, Services and Expenses"],"value":183481878},
    {"key":["ADMIN FOR CHILDREN'S SERVICES","CONTRACTUAL SERVICES"],"value":1873795501},
    {"key":["ADMIN FOR CHILDREN'S SERVICES","Pay and Fringe Benefits"],"value":462534164},
    {"key":["ADMIN FOR CHILDREN'S SERVICES","Property, Equipment, and Supplies"],"value":6863226},
    {"key":["ADMIN FOR CHILDREN'S SERVICES","SOCIAL SERVICES"],"value":450183286},
    {"key":["BOARD OF CORRECTION","AMOUNTS TO BE SCHEDULED"],"value":37543},
    {"key":["BOARD OF CORRECTION","Charges, Services and Expenses"],"value":99160},
    {"key":["BOARD OF CORRECTION","CONTRACTUAL SERVICES"],"value":57350},
    {"key":["BOARD OF CORRECTION","Pay and Fringe Benefits"],"value":2823200},
    {"key":["BOARD OF CORRECTION","Property, Equipment, and Supplies"],"value":43850},
    {"key":["BOARD OF ELECTIONS","AMOUNTS TO BE SCHEDULED"],"value":1146345},
    {"key":["BOARD OF ELECTIONS","Charges, Services and Expenses"],"value":34411891},
    {"key":["BOARD OF ELECTIONS","CONTRACTUAL SERVICES"],"value":37822187},
    {"key":["BOARD OF ELECTIONS","Pay and Fringe Benefits"],"value":51209331},
    {"key":["BOARD OF ELECTIONS","Property, Equipment, and Supplies"],"value":7957691},
    {"key":["BOROUGH PRESIDENT","AMOUNTS TO BE SCHEDULED"],"value":696483},
    {"key":["BOROUGH PRESIDENT","Charges, Services and Expenses"],"value":4961471},
    {"key":["BOROUGH PRESIDENT","CONTRACTUAL SERVICES"],"value":1695975},
    {"key":["BOROUGH PRESIDENT","Pay and Fringe Benefits"],"value":24151416},
    {"key":["BOROUGH PRESIDENT","Property, Equipment, and Supplies"],"value":842410},
    {"key":["BUSINESS INTEGRITY COMMISSION","Charges, Services and Expenses"],"value":2369486},
    {"key":["BUSINESS INTEGRITY COMMISSION","CONTRACTUAL SERVICES"],"value":125268},
    {"key":["BUSINESS INTEGRITY COMMISSION","Pay and Fringe Benefits"],"value":5985452},
    {"key":["BUSINESS INTEGRITY COMMISSION","Property, Equipment, and Supplies"],"value":644825},
    {"key":["CAMPAIGN FINANCE BOARD","AMOUNTS TO BE SCHEDULED"],"value":429045},
    {"key":["CAMPAIGN FINANCE BOARD","Charges, Services and Expenses"],"value":2763000},
    {"key":["CAMPAIGN FINANCE BOARD","CONTRACTUAL SERVICES"],"value":3189000},
    {"key":["CAMPAIGN FINANCE BOARD","Pay and Fringe Benefits"],"value":9032716},
    {"key":["CAMPAIGN FINANCE BOARD","Property, Equipment, and Supplies"],"value":762000},
    {"key":["CITY CLERK","AMOUNTS TO BE SCHEDULED"],"value":6809},
    {"key":["CITY CLERK","Charges, Services and Expenses"],"value":655318},
    {"key":["CITY CLERK","CONTRACTUAL SERVICES"],"value":345990},
    {"key":["CITY CLERK","Pay and Fringe Benefits"],"value":4563575},
    {"key":["CITY CLERK","Property, Equipment, and Supplies"],"value":150091},
    {"key":["CITY COUNCIL","AMOUNTS TO BE SCHEDULED"],"value":3992772},
    {"key":["CITY COUNCIL","Charges, Services and Expenses"],"value":11576037},
    {"key":["CITY COUNCIL","CONTRACTUAL SERVICES"],"value":977500},
    {"key":["CITY COUNCIL","Pay and Fringe Benefits"],"value":45237229},
    {"key":["CITY COUNCIL","Property, Equipment, and Supplies"],"value":2293906},
    {"key":["CITY UNIVERSITY OF NEW YORK","AMOUNTS TO BE SCHEDULED"],"value":2206110},
    {"key":["CITY UNIVERSITY OF NEW YORK","Charges, Services and Expenses"],"value":153690739},
    {"key":["CITY UNIVERSITY OF NEW YORK","CONTRACTUAL SERVICES"],"value":10223975},
    {"key":["CITY UNIVERSITY OF NEW YORK","Pay and Fringe Benefits"],"value":720878927},
    {"key":["CITY UNIVERSITY OF NEW YORK","Property, Equipment, and Supplies"],"value":169957658},
    {"key":["CIVIL SERVICE COMMISSION","AMOUNTS TO BE SCHEDULED"],"value":23291},
    {"key":["CIVIL SERVICE COMMISSION","Charges, Services and Expenses"],"value":4683},
    {"key":["CIVIL SERVICE COMMISSION","CONTRACTUAL SERVICES"],"value":20817},
    {"key":["CIVIL SERVICE COMMISSION","Pay and Fringe Benefits"],"value":988362},
    {"key":["CIVIL SERVICE COMMISSION","Property, Equipment, and Supplies"],"value":48817},
    {"key":["CIVILIAN COMPLAINT REVIEW BOARD","Charges, Services and Expenses"],"value":2621091},
    {"key":["CIVILIAN COMPLAINT REVIEW BOARD","CONTRACTUAL SERVICES"],"value":119115},
    {"key":["CIVILIAN COMPLAINT REVIEW BOARD","Pay and Fringe Benefits"],"value":12746019},
    {"key":["CIVILIAN COMPLAINT REVIEW BOARD","Property, Equipment, and Supplies"],"value":773941},
    {"key":["COMMISSION ON HUMAN RIGHTS","AMOUNTS TO BE SCHEDULED"],"value":576},
    {"key":["COMMISSION ON HUMAN RIGHTS","Charges, Services and Expenses"],"value":2876251},
    {"key":["COMMISSION ON HUMAN RIGHTS","CONTRACTUAL SERVICES"],"value":219227},
    {"key":["COMMISSION ON HUMAN RIGHTS","Pay and Fringe Benefits"],"value":8005977},
    {"key":["COMMISSION ON HUMAN RIGHTS","Property, Equipment, and Supplies"],"value":457468},
    {"key":["COMMUNITY BOARD","AMOUNTS TO BE SCHEDULED"],"value":506235},
    {"key":["COMMUNITY BOARD","Charges, Services and Expenses"],"value":4552089},
    {"key":["COMMUNITY BOARD","CONTRACTUAL SERVICES"],"value":243257},
    {"key":["COMMUNITY BOARD","OTPS HOLDING CODES"],"value":24041},
    {"key":["COMMUNITY BOARD","Pay and Fringe Benefits"],"value":12087409},
    {"key":["COMMUNITY BOARD","Property, Equipment, and Supplies"],"value":362503},
    {"key":["CONFLICTS OF INTEREST BOARD","Charges, Services and Expenses"],"value":79934},
    {"key":["CONFLICTS OF INTEREST BOARD","CONTRACTUAL SERVICES"],"value":29603},
    {"key":["CONFLICTS OF INTEREST BOARD","Pay and Fringe Benefits"],"value":2400634},
    {"key":["CONFLICTS OF INTEREST BOARD","Property, Equipment, and Supplies"],"value":50949},
    {"key":["DEBT SERVICE","CONTRACTUAL SERVICES"],"value":115078628},
    {"key":["DEBT SERVICE","TRANSFERS FOR DEBT SERVICE"],"value":2870412982},
    {"key":["DEPARTMENT FOR THE AGING","AMOUNTS TO BE SCHEDULED"],"value":282058},
    {"key":["DEPARTMENT FOR THE AGING","Charges, Services and Expenses"],"value":18534095},
    {"key":["DEPARTMENT FOR THE AGING","CONTRACTUAL SERVICES"],"value":281583105},
    {"key":["DEPARTMENT FOR THE AGING","Pay and Fringe Benefits"],"value":30151483},
    {"key":["DEPARTMENT FOR THE AGING","Property, Equipment, and Supplies"],"value":586435},
    {"key":["DEPARTMENT OF BUILDINGS","AMOUNTS TO BE SCHEDULED"],"value":35263},
    {"key":["DEPARTMENT OF BUILDINGS","Charges, Services and Expenses"],"value":4940776},
    {"key":["DEPARTMENT OF BUILDINGS","CONTRACTUAL SERVICES"],"value":32609341},
    {"key":["DEPARTMENT OF BUILDINGS","Pay and Fringe Benefits"],"value":129888949},
    {"key":["DEPARTMENT OF BUILDINGS","Property, Equipment, and Supplies"],"value":7607854},
    {"key":["DEPARTMENT OF CITY PLANNING","Charges, Services and Expenses"],"value":7366016},
    {"key":["DEPARTMENT OF CITY PLANNING","CONTRACTUAL SERVICES"],"value":8349605},
    {"key":["DEPARTMENT OF CITY PLANNING","Pay and Fringe Benefits"],"value":27998984},
    {"key":["DEPARTMENT OF CITY PLANNING","Property, Equipment, and Supplies"],"value":2579339},
    {"key":["DEPARTMENT OF CITYWIDE ADMIN SERVICE","AMOUNTS TO BE SCHEDULED"],"value":1774380},
    {"key":["DEPARTMENT OF CITYWIDE ADMIN SERVICE","Charges, Services and Expenses"],"value":883537609},
    {"key":["DEPARTMENT OF CITYWIDE ADMIN SERVICE","CONTRACTUAL SERVICES"],"value":77787155},
    {"key":["DEPARTMENT OF CITYWIDE ADMIN SERVICE","Pay and Fringe Benefits"],"value":181907963},
    {"key":["DEPARTMENT OF CITYWIDE ADMIN SERVICE","Property, Equipment, and Supplies"],"value":41530126},
    {"key":["DEPARTMENT OF CONSUMER AFFAIRS","AMOUNTS TO BE SCHEDULED"],"value":11223},
    {"key":["DEPARTMENT OF CONSUMER AFFAIRS","Charges, Services and Expenses"],"value":12352138},
    {"key":["DEPARTMENT OF CONSUMER AFFAIRS","CONTRACTUAL SERVICES"],"value":589689},
    {"key":["DEPARTMENT OF CONSUMER AFFAIRS","Pay and Fringe Benefits"],"value":27249466},
    {"key":["DEPARTMENT OF CONSUMER AFFAIRS","Property, Equipment, and Supplies"],"value":1112148},
    {"key":["DEPARTMENT OF CORRECTION","AMOUNTS TO BE SCHEDULED"],"value":118313},
    {"key":["DEPARTMENT OF CORRECTION","Charges, Services and Expenses"],"value":51056065},
    {"key":["DEPARTMENT OF CORRECTION","CONTRACTUAL SERVICES"],"value":60958900},
    {"key":["DEPARTMENT OF CORRECTION","Pay and Fringe Benefits"],"value":1203674756},
    {"key":["DEPARTMENT OF CORRECTION","Property, Equipment, and Supplies"],"value":74566611},
    {"key":["DEPARTMENT OF CORRECTION","SOCIAL SERVICES"],"value":3247951},
    {"key":["DEPARTMENT OF CULTURAL AFFAIRS","Charges, Services and Expenses"],"value":116965340},
    {"key":["DEPARTMENT OF CULTURAL AFFAIRS","CONTRACTUAL SERVICES"],"value":59621602},
    {"key":["DEPARTMENT OF CULTURAL AFFAIRS","Pay and Fringe Benefits"],"value":5036192},
    {"key":["DEPARTMENT OF CULTURAL AFFAIRS","Property, Equipment, and Supplies"],"value":151277},
    {"key":["DEPARTMENT OF DESIGN & CONSTRUCTION","Charges, Services and Expenses"],"value":24112108},
    {"key":["DEPARTMENT OF DESIGN & CONSTRUCTION","CONTRACTUAL SERVICES"],"value":335723471},
    {"key":["DEPARTMENT OF DESIGN & CONSTRUCTION","Pay and Fringe Benefits"],"value":114558245},
    {"key":["DEPARTMENT OF DESIGN & CONSTRUCTION","Property, Equipment, and Supplies"],"value":4061925},
    {"key":["DEPARTMENT OF EDUCATION","AMOUNTS TO BE SCHEDULED"],"value":17327778},
    {"key":["DEPARTMENT OF EDUCATION","Charges, Services and Expenses"],"value":1381291536},
    {"key":["DEPARTMENT OF EDUCATION","CONTRACTUAL SERVICES"],"value":6336597300},
    {"key":["DEPARTMENT OF EDUCATION","Pay and Fringe Benefits"],"value":14442947100},
    {"key":["DEPARTMENT OF EDUCATION","Property, Equipment, and Supplies"],"value":940476777},
    {"key":["DEPARTMENT OF EMERGENCY MANAGEMENT","AMOUNTS TO BE SCHEDULED"],"value":33773},
    {"key":["DEPARTMENT OF EMERGENCY MANAGEMENT","Charges, Services and Expenses"],"value":28824443},
    {"key":["DEPARTMENT OF EMERGENCY MANAGEMENT","CONTRACTUAL SERVICES"],"value":12727511},
    {"key":["DEPARTMENT OF EMERGENCY MANAGEMENT","Pay and Fringe Benefits"],"value":18388562},
    {"key":["DEPARTMENT OF EMERGENCY MANAGEMENT","Property, Equipment, and Supplies"],"value":396003},
    {"key":["DEPARTMENT OF ENVIRONMENTAL PROTECT.","AMOUNTS TO BE SCHEDULED"],"value":5409},
    {"key":["DEPARTMENT OF ENVIRONMENTAL PROTECT.","Charges, Services and Expenses"],"value":574426959},
    {"key":["DEPARTMENT OF ENVIRONMENTAL PROTECT.","CONTRACTUAL SERVICES"],"value":254355078},
    {"key":["DEPARTMENT OF ENVIRONMENTAL PROTECT.","Pay and Fringe Benefits"],"value":519734280},
    {"key":["DEPARTMENT OF ENVIRONMENTAL PROTECT.","Property, Equipment, and Supplies"],"value":124861186},
    {"key":["DEPARTMENT OF FINANCE","AMOUNTS TO BE SCHEDULED"],"value":3575},
    {"key":["DEPARTMENT OF FINANCE","Charges, Services and Expenses"],"value":43963453},
    {"key":["DEPARTMENT OF FINANCE","CONTRACTUAL SERVICES"],"value":59886736},
    {"key":["DEPARTMENT OF FINANCE","Pay and Fringe Benefits"],"value":164579921},
    {"key":["DEPARTMENT OF FINANCE","Property, Equipment, and Supplies"],"value":9314272},
    {"key":["DEPARTMENT OF HEALTH AND MENTAL HYGIENE","AMOUNTS TO BE SCHEDULED"],"value":1534684},
    {"key":["DEPARTMENT OF HEALTH AND MENTAL HYGIENE","Charges, Services and Expenses"],"value":192766868},
    {"key":["DEPARTMENT OF HEALTH AND MENTAL HYGIENE","CONTRACTUAL SERVICES"],"value":805363251},
    {"key":["DEPARTMENT OF HEALTH AND MENTAL HYGIENE","Pay and Fringe Benefits"],"value":451225037},
    {"key":["DEPARTMENT OF HEALTH AND MENTAL HYGIENE","Property, Equipment, and Supplies"],"value":38534525},
    {"key":["DEPARTMENT OF HEALTH AND MENTAL HYGIENE","SOCIAL SERVICES"],"value":42116649},
    {"key":["DEPARTMENT OF HOMELESS SERVICES","Charges, Services and Expenses"],"value":55362710},
    {"key":["DEPARTMENT OF HOMELESS SERVICES","CONTRACTUAL SERVICES"],"value":1090723554},
    {"key":["DEPARTMENT OF HOMELESS SERVICES","Pay and Fringe Benefits"],"value":151809917},
    {"key":["DEPARTMENT OF HOMELESS SERVICES","Property, Equipment, and Supplies"],"value":12371645},
    {"key":["DEPARTMENT OF INFO TECH & TELECOMM","Charges, Services and Expenses"],"value":199710771},
    {"key":["DEPARTMENT OF INFO TECH & TELECOMM","CONTRACTUAL SERVICES"],"value":283180144},
    {"key":["DEPARTMENT OF INFO TECH & TELECOMM","Pay and Fringe Benefits"],"value":148344926},
    {"key":["DEPARTMENT OF INFO TECH & TELECOMM","Property, Equipment, and Supplies"],"value":3061261},
    {"key":["DEPARTMENT OF INVESTIGATION","Charges, Services and Expenses"],"value":14773806},
    {"key":["DEPARTMENT OF INVESTIGATION","CONTRACTUAL SERVICES"],"value":601290},
    {"key":["DEPARTMENT OF INVESTIGATION","Pay and Fringe Benefits"],"value":30039929},
    {"key":["DEPARTMENT OF INVESTIGATION","Property, Equipment, and Supplies"],"value":1290557},
    {"key":["DEPARTMENT OF PARKS AND RECREATION","AMOUNTS TO BE SCHEDULED"],"value":9092951},
    {"key":["DEPARTMENT OF PARKS AND RECREATION","Charges, Services and Expenses"],"value":28654598},
    {"key":["DEPARTMENT OF PARKS AND RECREATION","CONTRACTUAL SERVICES"],"value":57033467},
    {"key":["DEPARTMENT OF PARKS AND RECREATION","Pay and Fringe Benefits"],"value":374618476},
    {"key":["DEPARTMENT OF PARKS AND RECREATION","Property, Equipment, and Supplies"],"value":41028202},
    {"key":["DEPARTMENT OF PROBATION","Charges, Services and Expenses"],"value":8817293},
    {"key":["DEPARTMENT OF PROBATION","CONTRACTUAL SERVICES"],"value":22653496},
    {"key":["DEPARTMENT OF PROBATION","Pay and Fringe Benefits"],"value":72645123},
    {"key":["DEPARTMENT OF PROBATION","Property, Equipment, and Supplies"],"value":2224279},
    {"key":["DEPARTMENT OF RECORDS & INFORMATION SVS","AMOUNTS TO BE SCHEDULED"],"value":3712},
    {"key":["DEPARTMENT OF RECORDS & INFORMATION SVS","Charges, Services and Expenses"],"value":3194927},
    {"key":["DEPARTMENT OF RECORDS & INFORMATION SVS","CONTRACTUAL SERVICES"],"value":851709},
    {"key":["DEPARTMENT OF RECORDS & INFORMATION SVS","Pay and Fringe Benefits"],"value":3387375},
    {"key":["DEPARTMENT OF RECORDS & INFORMATION SVS","Property, Equipment, and Supplies"],"value":145457},
    {"key":["DEPARTMENT OF SANITATION","Charges, Services and Expenses"],"value":96244265},
    {"key":["DEPARTMENT OF SANITATION","CONTRACTUAL SERVICES"],"value":511934719},
    {"key":["DEPARTMENT OF SANITATION","Pay and Fringe Benefits"],"value":963923828},
    {"key":["DEPARTMENT OF SANITATION","Property, Equipment, and Supplies"],"value":109122978},
    {"key":["DEPARTMENT OF SMALL BUSINESS SERVICES","Charges, Services and Expenses"],"value":34171282},
    {"key":["DEPARTMENT OF SMALL BUSINESS SERVICES","CONTRACTUAL SERVICES"],"value":176549626},
    {"key":["DEPARTMENT OF SMALL BUSINESS SERVICES","Pay and Fringe Benefits"],"value":25031992},
    {"key":["DEPARTMENT OF SMALL BUSINESS SERVICES","Property, Equipment, and Supplies"],"value":613612},
    {"key":["DEPARTMENT OF SOCIAL SERVICES","AMOUNTS TO BE SCHEDULED"],"value":4362},
    {"key":["DEPARTMENT OF SOCIAL SERVICES","Charges, Services and Expenses"],"value":354021687},
    {"key":["DEPARTMENT OF SOCIAL SERVICES","CONTRACTUAL SERVICES"],"value":662813750},
    {"key":["DEPARTMENT OF SOCIAL SERVICES","Pay and Fringe Benefits"],"value":867104533},
    {"key":["DEPARTMENT OF SOCIAL SERVICES","Property, Equipment, and Supplies"],"value":43164491},
    {"key":["DEPARTMENT OF SOCIAL SERVICES","SOCIAL SERVICES"],"value":7767967708},
    {"key":["DEPARTMENT OF TRANSPORTATION","AMOUNTS TO BE SCHEDULED"],"value":1744124},
    {"key":["DEPARTMENT OF TRANSPORTATION","Charges, Services and Expenses"],"value":132991987},
    {"key":["DEPARTMENT OF TRANSPORTATION","CONTRACTUAL SERVICES"],"value":228340540},
    {"key":["DEPARTMENT OF TRANSPORTATION","Pay and Fringe Benefits"],"value":460957181},
    {"key":["DEPARTMENT OF TRANSPORTATION","Property, Equipment, and Supplies"],"value":135093841},
    {"key":["DEPARTMENT OF VETERANS' SERVICES","Charges, Services and Expenses"],"value":453000},
    {"key":["DEPARTMENT OF VETERANS' SERVICES","CONTRACTUAL SERVICES"],"value":514000},
    {"key":["DEPARTMENT OF VETERANS' SERVICES","Pay and Fringe Benefits"],"value":2876222},
    {"key":["DEPARTMENT OF YOUTH & COMMUNITY DEV","AMOUNTS TO BE SCHEDULED"],"value":6855},
    {"key":["DEPARTMENT OF YOUTH & COMMUNITY DEV","Charges, Services and Expenses"],"value":46490767},
    {"key":["DEPARTMENT OF YOUTH & COMMUNITY DEV","CONTRACTUAL SERVICES"],"value":640569372},
    {"key":["DEPARTMENT OF YOUTH & COMMUNITY DEV","Pay and Fringe Benefits"],"value":38579397},
    {"key":["DEPARTMENT OF YOUTH & COMMUNITY DEV","Property, Equipment, and Supplies"],"value":2743092},
    {"key":["DISTRICT ATTORNEY","Charges, Services and Expenses"],"value":30807834},
    {"key":["DISTRICT ATTORNEY","CONTRACTUAL SERVICES"],"value":2625824},
    {"key":["DISTRICT ATTORNEY","Pay and Fringe Benefits"],"value":306142336},
    {"key":["DISTRICT ATTORNEY","Property, Equipment, and Supplies"],"value":7755664},
    {"key":["EQUAL EMPLOYMENT PRACTICES COMMISSION","AMOUNTS TO BE SCHEDULED"],"value":756},
    {"key":["EQUAL EMPLOYMENT PRACTICES COMMISSION","Charges, Services and Expenses"],"value":71813},
    {"key":["EQUAL EMPLOYMENT PRACTICES COMMISSION","CONTRACTUAL SERVICES"],"value":68000},
    {"key":["EQUAL EMPLOYMENT PRACTICES COMMISSION","Pay and Fringe Benefits"],"value":914307},
    {"key":["EQUAL EMPLOYMENT PRACTICES COMMISSION","Property, Equipment, and Supplies"],"value":36656},
    {"key":["FINANCIAL INFORMATION SERVICE AGENCY","AMOUNTS TO BE SCHEDULED"],"value":4708},
    {"key":["FINANCIAL INFORMATION SERVICE AGENCY","Charges, Services and Expenses"],"value":23755950},
    {"key":["FINANCIAL INFORMATION SERVICE AGENCY","CONTRACTUAL SERVICES"],"value":29895438},
    {"key":["FINANCIAL INFORMATION SERVICE AGENCY","Pay and Fringe Benefits"],"value":49804565},
    {"key":["FINANCIAL INFORMATION SERVICE AGENCY","Property, Equipment, and Supplies"],"value":3063250},
    {"key":["FIRE DEPARTMENT","Charges, Services and Expenses"],"value":62418775},
    {"key":["FIRE DEPARTMENT","CONTRACTUAL SERVICES"],"value":84566955},
    {"key":["FIRE DEPARTMENT","Pay and Fringe Benefits"],"value":1755347512},
    {"key":["FIRE DEPARTMENT","Property, Equipment, and Supplies"],"value":45134643},
    {"key":["HEALTH AND HOSPITALS CORP","Charges, Services and Expenses"],"value":343289097},
    {"key":["HOUSING PRESERVATION AND DEVELOPMENT","AMOUNTS TO BE SCHEDULED"],"value":2180033},
    {"key":["HOUSING PRESERVATION AND DEVELOPMENT","Charges, Services and Expenses"],"value":829580047},
    {"key":["HOUSING PRESERVATION AND DEVELOPMENT","CONTRACTUAL SERVICES"],"value":267047934},
    {"key":["HOUSING PRESERVATION AND DEVELOPMENT","Pay and Fringe Benefits"],"value":167631455},
    {"key":["HOUSING PRESERVATION AND DEVELOPMENT","Property, Equipment, and Supplies"],"value":6630796},
    {"key":["INDEPENDENT BUDGET OFFICE","AMOUNTS TO BE SCHEDULED"],"value":28196},
    {"key":["INDEPENDENT BUDGET OFFICE","Charges, Services and Expenses"],"value":396513},
    {"key":["INDEPENDENT BUDGET OFFICE","CONTRACTUAL SERVICES"],"value":92694},
    {"key":["INDEPENDENT BUDGET OFFICE","Pay and Fringe Benefits"],"value":6047384},
    {"key":["INDEPENDENT BUDGET OFFICE","Property, Equipment, and Supplies"],"value":305977},
    {"key":["LANDMARKS PRESERVATION COMM.","Charges, Services and Expenses"],"value":165596},
    {"key":["LANDMARKS PRESERVATION COMM.","CONTRACTUAL SERVICES"],"value":211061},
    {"key":["LANDMARKS PRESERVATION COMM.","Pay and Fringe Benefits"],"value":5574373},
    {"key":["LANDMARKS PRESERVATION COMM.","Property, Equipment, and Supplies"],"value":361985},
    {"key":["LAW DEPARTMENT","Charges, Services and Expenses"],"value":20957773},
    {"key":["LAW DEPARTMENT","CONTRACTUAL SERVICES"],"value":42600714},
    {"key":["LAW DEPARTMENT","Pay and Fringe Benefits"],"value":147294476},
    {"key":["LAW DEPARTMENT","Property, Equipment, and Supplies"],"value":1926016},
    {"key":["LIBRARIES","Charges, Services and Expenses"],"value":365100577},
    {"key":["LIBRARIES","CONTRACTUAL SERVICES"],"value":2000},
    {"key":["LIBRARIES","Property, Equipment, and Supplies"],"value":1250},
    {"key":["MAYORALTY","AMOUNTS TO BE SCHEDULED"],"value":50304},
    {"key":["MAYORALTY","Charges, Services and Expenses"],"value":19099832},
    {"key":["MAYORALTY","CONTRACTUAL SERVICES"],"value":13666570},
    {"key":["MAYORALTY","Pay and Fringe Benefits"],"value":103753633},
    {"key":["MAYORALTY","Property, Equipment, and Supplies"],"value":2459440},
    {"key":["MISCELLANEOUS","Charges, Services and Expenses"],"value":4191731824},
    {"key":["MISCELLANEOUS","CONTRACTUAL SERVICES"],"value":371070437},
    {"key":["MISCELLANEOUS","Pay and Fringe Benefits"],"value":6141693039},
    {"key":["NYC TAXI AND LIMOUSINE COMM","AMOUNTS TO BE SCHEDULED"],"value":204100},
    {"key":["NYC TAXI AND LIMOUSINE COMM","Charges, Services and Expenses"],"value":26800909},
    {"key":["NYC TAXI AND LIMOUSINE COMM","CONTRACTUAL SERVICES"],"value":3077812},
    {"key":["NYC TAXI AND LIMOUSINE COMM","Pay and Fringe Benefits"],"value":38269439},
    {"key":["NYC TAXI AND LIMOUSINE COMM","Property, Equipment, and Supplies"],"value":2259821},
    {"key":["OFFICE OF ADMIN TRIALS & HEARINGS","Charges, Services and Expenses"],"value":4562305},
    {"key":["OFFICE OF ADMIN TRIALS & HEARINGS","CONTRACTUAL SERVICES"],"value":2271505},
    {"key":["OFFICE OF ADMIN TRIALS & HEARINGS","Pay and Fringe Benefits"],"value":30752054},
    {"key":["OFFICE OF ADMIN TRIALS & HEARINGS","Property, Equipment, and Supplies"],"value":2020352},
    {"key":["OFFICE OF ADMINISTRATIVE TAX APPEALS","AMOUNTS TO BE SCHEDULED"],"value":10995},
    {"key":["OFFICE OF ADMINISTRATIVE TAX APPEALS","Charges, Services and Expenses"],"value":71206},
    {"key":["OFFICE OF ADMINISTRATIVE TAX APPEALS","CONTRACTUAL SERVICES"],"value":168333},
    {"key":["OFFICE OF ADMINISTRATIVE TAX APPEALS","Pay and Fringe Benefits"],"value":4751772},
    {"key":["OFFICE OF ADMINISTRATIVE TAX APPEALS","Property, Equipment, and Supplies"],"value":74152},
    {"key":["OFFICE OF COLLECTIVE BARGAINING","Charges, Services and Expenses"],"value":45449},
    {"key":["OFFICE OF COLLECTIVE BARGAINING","CONTRACTUAL SERVICES"],"value":332109},
    {"key":["OFFICE OF COLLECTIVE BARGAINING","Pay and Fringe Benefits"],"value":1984442},
    {"key":["OFFICE OF COLLECTIVE BARGAINING","Property, Equipment, and Supplies"],"value":64534},
    {"key":["OFFICE OF PAYROLL ADMINISTRATION","Charges, Services and Expenses"],"value":356370},
    {"key":["OFFICE OF PAYROLL ADMINISTRATION","CONTRACTUAL SERVICES"],"value":1235478},
    {"key":["OFFICE OF PAYROLL ADMINISTRATION","Pay and Fringe Benefits"],"value":15528008},
    {"key":["OFFICE OF PAYROLL ADMINISTRATION","Property, Equipment, and Supplies"],"value":164570},
    {"key":["OFFICE OF PROSECUTION SPEC NARCO","Charges, Services and Expenses"],"value":784873},
    {"key":["OFFICE OF PROSECUTION SPEC NARCO","CONTRACTUAL SERVICES"],"value":102326},
    {"key":["OFFICE OF PROSECUTION SPEC NARCO","Pay and Fringe Benefits"],"value":21062416},
    {"key":["OFFICE OF PROSECUTION SPEC NARCO","Property, Equipment, and Supplies"],"value":171470},
    {"key":["OFFICE OF THE ACTUARY","Charges, Services and Expenses"],"value":1002776},
    {"key":["OFFICE OF THE ACTUARY","CONTRACTUAL SERVICES"],"value":1881303},
    {"key":["OFFICE OF THE ACTUARY","Pay and Fringe Benefits"],"value":4431279},
    {"key":["OFFICE OF THE ACTUARY","Property, Equipment, and Supplies"],"value":85954},
    {"key":["OFFICE OF THE COMPTROLLER","Charges, Services and Expenses"],"value":9458905},
    {"key":["OFFICE OF THE COMPTROLLER","CONTRACTUAL SERVICES"],"value":24439726},
    {"key":["OFFICE OF THE COMPTROLLER","Pay and Fringe Benefits"],"value":69818412},
    {"key":["OFFICE OF THE COMPTROLLER","Property, Equipment, and Supplies"],"value":1283994},
    {"key":["PENSION CONTRIBUTIONS","Pay and Fringe Benefits"],"value":9831152405},
    {"key":["POLICE DEPARTMENT","AMOUNTS TO BE SCHEDULED"],"value":11125},
    {"key":["POLICE DEPARTMENT","Charges, Services and Expenses"],"value":162120082},
    {"key":["POLICE DEPARTMENT","CONTRACTUAL SERVICES"],"value":110735606},
    {"key":["POLICE DEPARTMENT","Pay and Fringe Benefits"],"value":4759106877},
    {"key":["POLICE DEPARTMENT","Property, Equipment, and Supplies"],"value":119273713},
    {"key":["POLICE DEPARTMENT","SOCIAL SERVICES"],"value":444279},
    {"key":["PUBLIC ADMINISTRATOR","Charges, Services and Expenses"],"value":1239528},
    {"key":["PUBLIC ADMINISTRATOR","CONTRACTUAL SERVICES"],"value":18624},
    {"key":["PUBLIC ADMINISTRATOR","Pay and Fringe Benefits"],"value":3220537},
    {"key":["PUBLIC ADMINISTRATOR","Property, Equipment, and Supplies"],"value":21394},
    {"key":["PUBLIC ADVOCATE","AMOUNTS TO BE SCHEDULED"],"value":358539},
    {"key":["PUBLIC ADVOCATE","Charges, Services and Expenses"],"value":265311},
    {"key":["PUBLIC ADVOCATE","CONTRACTUAL SERVICES"],"value":54500},
    {"key":["PUBLIC ADVOCATE","Pay and Fringe Benefits"],"value":3975790},
    {"key":["PUBLIC ADVOCATE","Property, Equipment, and Supplies"],"value":99606}
  ]}
};

// Format text strings as slugs
function slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// Change text to title case
function capitalizeMe(str){
  var noCaps = ['of','a','the','and','an','am','or','nor','but','is','if','then', 'else','when','at','from','by','on','off','for','in','out','to','into','with'];
  return str.replace(/\w\S*/g, function(txt, offset){
      if(offset != 0 && noCaps.indexOf(txt.toLowerCase()) != -1){
          return txt.toLowerCase();
      }
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

jQuery(document).ready(function($) {

  budgetSummary.aspects.rows.forEach(function(row){
    // slugify the agency and category
    var agencySlug = slugify(row.key[0]);
    var categorySlug = slugify(row.key[1]);
    var agencyName = capitalizeMe(row.key[0]);
    var categoryName = capitalizeMe(row.key[1]);

    // render budget items
    var size = Math.sqrt(row.value / 10000);
    if(size < 1) { size = 1;}
    $('#budget-items').append('<div class="budget-item ' + agencySlug + ' ' + categorySlug + '" data-amount="' + row.value + '" data-amount-desc="' + (-1*row.value) + '"><div class="size" style="border-top-width:' + size + 'px;"><span class="dollar-ammount">$' + row.value.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '</span> <span class="agency">' + agencyName + '</span> <span class="category">' + categoryName + '</span> </div></div>');
  });

  // init budget items grid
  var $grid = $('#budget-items').isotope({
    itemSelector: '.budget-item',
    percentPosition: true,
    layoutMode: 'masonry',
    masonry: {
      columnWidth: '.budget-item'
    },
    // getSortData: {
    //   amount: '[data-amount-desc] parseInt'
    // },
    // sortBy: 'amount'
  });

  // render the filters
  for (var agencyName in budgetSummary.agencies) {
    if (budgetSummary.agencies.hasOwnProperty(agencyName)) {
       $('#budget-filter--agency').append( '<option value=".' + slugify(agencyName) + '">' + agencyName + '</option>');
     }
  }
  for (var className in budgetSummary.classes) {
    if (budgetSummary.classes.hasOwnProperty(className)) {
      $('#budget-filter--category').append( '<option value=".' + slugify(className) + '">' + className + '</option>');
      $('#budget-filter--key').append( '<li><span class="label ' + slugify(className) + '">' + capitalizeMe(className) + '</span></li>');
    }
  }

  // filter functions
  $('.budget-filter').on( 'change', function() {
    var filterAgency = $('#budget-filter--agency').val();
    var filterCategory = $('#budget-filter--category').val();
    filterValue = filterAgency + filterCategory;
    $grid.isotope({ filter: filterValue });
  });

});
