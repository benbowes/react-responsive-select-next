!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("singleline"),require("fbjs/lib/emptyFunction"),require("fbjs/lib/invariant"),require("lodash"),require("react-dom")):"function"==typeof define&&define.amd?define("ReactResponsiveSelect",["react","singleline","fbjs/lib/emptyFunction","fbjs/lib/invariant","lodash","react-dom"],t):"object"==typeof exports?exports.ReactResponsiveSelect=t(require("react"),require("singleline"),require("fbjs/lib/emptyFunction"),require("fbjs/lib/invariant"),require("lodash"),require("react-dom")):e.ReactResponsiveSelect=t(e.react,e.singleline,e["fbjs/lib/emptyFunction"],e["fbjs/lib/invariant"],e.lodash,e["react-dom"])}(this,function(e,t,n,r,l,o){return function(e){function t(r){if(n[r])return n[r].exports;var l=n[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=27)}([function(e,t,n){e.exports=n(21)()},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("singleline")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BOOTSTRAP_STATE="BOOTSTRAP_STATE",t.SET_IS_DRAGGING="SET_IS_DRAGGING",t.SET_OPTIONS_PANEL_OPEN="SET_OPTIONS_PANEL_OPEN",t.SET_OPTIONS_PANEL_CLOSED="SET_OPTIONS_PANEL_CLOSED",t.SET_MULTISELECT_OPTIONS="SET_MULTISELECT_OPTIONS",t.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION="SET_OPTIONS_PANEL_CLOSED_NO_SELECTION",t.SET_SELECTED_INDEX="SET_SELECTED_INDEX",t.SET_NEXT_SELECTED_INDEX="SET_NEXT_SELECTED_INDEX"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function e(t,n,r){null===t&&(t=Function.prototype);var l=Object.getOwnPropertyDescriptor(t,n);if(void 0===l){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in l)return l.value;var i=l.get;if(void 0!==i)return i.call(r)},s=n(26),c=r(s),d=function(e){return function(e){function t(){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"scrollIntoView",value:function(){var e=this.props,t=e.scrollIntoViewElementSelector,n=e.scrollIntoViewScrollPaneRef,r=e.isDragging;this.scrollPaneDOM=this.scrollPaneDOM||n(),this.elementDOM=this.elementDOM||c.default.findDOMNode(this);var l=this.elementDOM.classList.contains(t);if(!0===r&&(this.dontScrollIntoView=!0),!this.dontScrollIntoView&&l){var o=this.scrollPaneDOM.getBoundingClientRect().top,i=this.scrollPaneDOM.getBoundingClientRect().bottom,a=this.elementDOM.getBoundingClientRect().top;this.elementDOM.getBoundingClientRect().bottom>i&&(this.scrollPaneDOM.scrollTop+=this.elementDOM.getBoundingClientRect().height),a<o&&(this.scrollPaneDOM.scrollTop-=this.elementDOM.getBoundingClientRect().height),"0"===this.elementDOM.getAttribute("data-key")&&(this.scrollPaneDOM.scrollTop=0)}}},{key:"componentDidUpdate",value:function(){return u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidUpdate",this)&&u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidUpdate",this).call(this),this.scrollIntoView()}},{key:"render",value:function(){return u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"render",this).call(this)}}]),t}(e)};t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=r(u),c=n(0),d=r(c),f=n(2),p=r(f),S=n(4),_=r(S),O=n(10),y=r(O),h=(0,_.default)(y.default),m=function(e){function t(){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.altered,r=t.caretIcon,l=t.customLabelText,o=t.disabled,i=t.isDragging,a=t.isOptionsPanelOpen,u=t.multiSelectSelectedIndexes,c=t.multiSelectSelectedOptions,d=t.name,f=t.options,S=t.nextPotentialSelectionIndex,_=t.prefix;return s.default.createElement("div",{className:(0,p.default)("\n          rrs__select-container\n          rrs__select-container--multiselect\n          "+(!0===o?"rrs__select-container--disabled":"")+"\n          "+(!0===a?"rrs__options-container--visible":"")+"\n          "+(n?"rrs__has-changed":"")+"\n        "),role:"listbox",tabIndex:"0"},l&&s.default.createElement("div",{className:"rrs__label-container"},s.default.createElement("span",{className:"rrs__label"},l),r&&r),!l&&s.default.createElement("div",{className:"rrs__label-container"},s.default.createElement("span",{className:"rrs__label"},s.default.createElement("span",{className:"rrs__multiselect__label"},s.default.createElement("span",{className:"rrs__multiselect__label-text"},(_?_+" ":"")+c.options[0].text),c.options.length>1&&s.default.createElement("span",{className:"rrs__multiselect__label-badge"},"+ "+(c.options.length-1)))),r&&r),s.default.createElement("div",{className:"rrs__options-container",ref:function(t){if(t)return e.optionsContainer=t}},f.length>0&&f.map(function(t,n){return s.default.createElement(h,{scrollIntoViewScrollPaneRef:function(){return e.optionsContainer},scrollIntoViewElementSelector:"rrs__option--next-selection",key:n,index:n,option:t,isDragging:i,multiSelectSelectedIndexes:u,nextPotentialSelectionIndex:S})})),d&&s.default.createElement("input",{type:"hidden",name:d,value:[c.options.map(function(e){return e.value})].join(",")}))}}]),t}(u.Component);t.default=m,m.propTypes={altered:d.default.bool,caretIcon:d.default.oneOfType([d.default.string,d.default.element]),customLabelText:d.default.oneOfType([d.default.string,d.default.bool,d.default.element]),disabled:d.default.bool,multiSelectInitialSelectedIndexes:d.default.arrayOf(d.default.number),multiSelectSelectedIndexes:d.default.arrayOf(d.default.number),multiSelectSelectedOptions:d.default.shape({altered:d.default.bool,options:d.default.arrayOf(d.default.shape({name:d.default.string,text:d.default.string,value:d.default.string,markup:d.default.object}))}),isDragging:d.default.bool,isOptionsPanelOpen:d.default.bool,name:d.default.string,nextPotentialSelectionIndex:d.default.number,onSubmit:d.default.func,options:d.default.arrayOf(d.default.shape({text:d.default.string.isRequired,value:d.default.string.isRequired})).isRequired,prefix:d.default.string}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=r(u),c=n(0),d=r(c),f=n(2),p=r(f),S=n(4),_=r(S),O=n(11),y=r(O),h=(0,_.default)(y.default),m=function(e){function t(){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.altered,r=t.caretIcon,l=t.customLabelText,o=t.disabled,i=t.isOptionsPanelOpen,a=t.isDragging,u=t.name,c=t.nextPotentialSelectionIndex,d=t.options,f=t.prefix,S=t.singleSelectSelectedIndex,_=t.singleSelectSelectedOption;return s.default.createElement("div",{className:(0,p.default)("\n          rrs__select-container\n          "+(!0===o?"rrs__select-container--disabled":"")+"\n          "+(!0===i?"rrs__options-container--visible":"")+"\n          "+(n?"rrs__has-changed":"")+"\n        "),role:"listbox",tabIndex:"0"},l&&s.default.createElement("div",{className:"rrs__label-container"},s.default.createElement("span",{className:"rrs__label"},l),r&&r),!l&&s.default.createElement("div",{className:"rrs__label-container"},s.default.createElement("span",{className:"rrs__label"},f&&s.default.createElement("span",null,f),_.text),r&&r),s.default.createElement("div",{className:"rrs__options-container",ref:function(t){if(t)return e.optionsContainer=t}},d.length>0&&d.map(function(t,n){return s.default.createElement(h,{scrollIntoViewScrollPaneRef:function(){return e.optionsContainer},scrollIntoViewElementSelector:"rrs__option--next-selection",key:n,index:n,isDragging:a,option:t,singleSelectSelectedIndex:S,nextPotentialSelectionIndex:c})})),u&&s.default.createElement("input",{type:"hidden",name:u,value:_.value}))}}]),t}(u.Component);t.default=m,m.propTypes={altered:d.default.bool,caretIcon:d.default.oneOfType([d.default.string,d.default.element]),customLabelText:d.default.oneOfType([d.default.string,d.default.bool,d.default.element]),disabled:d.default.bool,singleSelectInitialIndex:d.default.number,singleSelectSelectedIndex:d.default.number,singleSelectSelectedOption:d.default.shape({text:d.default.string,value:d.default.string}),isDragging:d.default.bool,isOptionsPanelOpen:d.default.bool,name:d.default.string,nextPotentialSelectionIndex:d.default.number,onSubmit:d.default.func,options:d.default.arrayOf(d.default.shape({text:d.default.string.isRequired,value:d.default.string.isRequired})).isRequired,prefix:d.default.string,selectedValue:d.default.string}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={TAB:9,ENTER:13,SPACE:32,ESCAPE:27,UP:38,DOWN:40}},function(e,t,n){"use strict";function r(e,t,n,r){return"increment"===e?!1===t?n:n===r-1?r-1:n+1:"decrement"===e?!1===t?n:0===n?0:n-1:void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e){return u({},e,{multiSelectSelectedIndexes:[].concat(o(j.multiSelectSelectedIndexes)),multiSelectSelectedOptions:u({},j.multiSelectSelectedOptions)})}function a(e,t){switch(t.type){case c.BOOTSTRAP_STATE:var n=(0,f.default)(t.value.options,t.value.selectedValue),r=(0,S.default)(t.value.options,t.value.selectedValues),l=(0,O.default)(t.value.options,t.value.selectedValues,t.value.name);return u({},e,{isMultiSelect:t.value.multiselect||!1,name:t.value.name,options:t.value.options,altered:!1,singleSelectInitialIndex:n,singleSelectSelectedIndex:n,singleSelectSelectedOption:u({name:t.value.name},t.value.options[n]),nextPotentialSelectionIndex:n,multiSelectInitialSelectedIndexes:r,multiSelectSelectedIndexes:r,multiSelectSelectedOptions:{options:l}});case c.SET_IS_DRAGGING:return u({},e,{isDragging:t.boolean});case c.SET_OPTIONS_PANEL_OPEN:var o=u({},e,{isOptionsPanelOpen:!0,nextPotentialSelectionIndex:e.singleSelectSelectedIndex,singleSelectSelectedOption:u({name:e.name},e.options[e.singleSelectSelectedIndex])});return(0,I.default)(o);case c.SET_OPTIONS_PANEL_CLOSED:var a=u({},e,{isOptionsPanelOpen:!1,singleSelectSelectedIndex:e.nextPotentialSelectionIndex,singleSelectSelectedOption:u({name:e.name},e.options[e.nextPotentialSelectionIndex])});return(0,I.default)(a);case c.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION:return u({},e,{isOptionsPanelOpen:!1});case c.SET_NEXT_SELECTED_INDEX:return u({},e,{nextPotentialSelectionIndex:t.optionIndex});case c.SET_SELECTED_INDEX:return u({},e,{nextPotentialSelectionIndex:t.optionIndex,singleSelectSelectedIndex:t.optionIndex});case c.SET_MULTISELECT_OPTIONS:var s=0===e.multiSelectSelectedIndexes[0]&&1===e.multiSelectSelectedIndexes.length,d=e.multiSelectSelectedIndexes.length>0&&!s&&0===t.optionIndex,p=s&&0!==t.optionIndex;if(d){var _=(0,N.default)(e);return(0,I.default)(_)}p&&(e=i(e));var y=e.multiSelectSelectedIndexes.indexOf(t.optionIndex),m=u({},e,{nextPotentialSelectionIndex:t.optionIndex,multiSelectSelectedIndexes:-1===y?(0,h.default)(e,t.optionIndex):(0,b.default)(e,y),multiSelectSelectedOptions:-1===y?(0,E.default)(e,t.optionIndex):(0,x.default)(e,y)});return 0===m.multiSelectSelectedOptions.options.length&&(m=(0,N.default)(e)),(0,I.default)(m)}}Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=a;var s=n(3),c=l(s),d=n(16),f=r(d),p=n(17),S=r(p),_=n(14),O=r(_),y=n(12),h=r(y),m=n(19),b=r(m),v=n(13),E=r(v),g=n(20),x=r(g),P=n(18),I=r(P),T=n(15),N=r(T),j=t.initialState={isMultiSelect:!1,name:void 0,options:[],isDragging:!1,isOptionsPanelOpen:!1,altered:!1,singleSelectInitialIndex:0,singleSelectSelectedIndex:0,singleSelectSelectedOption:{},nextPotentialSelectionIndex:0,multiSelectInitialSelectedIndexes:[0],multiSelectSelectedOptions:{options:[]},multiSelectSelectedIndexes:[]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=r(u),c=n(0),d=r(c),f=n(2),p=r(f),S=function(e){function t(){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.index,r=t.multiSelectSelectedIndexes,l=t.nextPotentialSelectionIndex,o=t.option;return s.default.createElement("div",{role:"option","data-key":n,ref:function(t){e["option_"+n]=t},className:(0,p.default)("\n          rrs__option\n          "+(r.some(function(e){return e===n})?"rrs__option--selected":"")+"\n          "+(l===n?"rrs__option--next-selection":"")+"\n        ")},o.markup||o.text)}}]),t}(u.Component);t.default=S,S.propTypes={index:d.default.number.isRequired,multiSelectSelectedIndexes:d.default.arrayOf(d.default.number),nextPotentialSelectionIndex:d.default.number,option:d.default.shape({text:d.default.string.isRequired,value:d.default.string.isRequired,markup:d.default.element}).isRequired}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=r(u),c=n(0),d=r(c),f=n(2),p=r(f),S=function(e){function t(){return l(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.index,r=t.nextPotentialSelectionIndex,l=t.option,o=t.singleSelectSelectedIndex;return s.default.createElement("div",{role:"option","data-key":n,ref:function(t){e["option_"+n]=t},className:(0,p.default)("\n          rrs__option\n          "+(o===n?"rrs__option--selected":"")+"\n          "+(r===n?"rrs__option--next-selection":"")+"\n        ")},l.markup||l.text)}}]),t}(u.Component);t.default=S,S.propTypes={index:d.default.number.isRequired,nextPotentialSelectionIndex:d.default.number,option:d.default.shape({text:d.default.string.isRequired,value:d.default.string.isRequired,markup:d.default.element}).isRequired,singleSelectSelectedIndex:d.default.number}},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){return[].concat(r(e.multiSelectSelectedIndexes),[t])}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){return{options:[].concat(r(e.multiSelectSelectedOptions.options),[o({name:e.name},e.options[t])])}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=l},function(e,t,n){"use strict";function r(e,t,n){return t?e.filter(function(e){return t.some(function(t){return t===e.value})}).map(function(e){return l({name:n},e)}):[l({name:n},e[0])]}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r},function(e,t,n){"use strict";function r(e){return l({},e,{multiSelectSelectedIndexes:[0],multiSelectSelectedOptions:{options:[l({name:e.name},e.options[0])]},nextPotentialSelectionIndex:0})}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=r},function(e,t,n){"use strict";function r(e,t){var n=e.map(function(e){return e.value}).indexOf(t);return n>-1?n:0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.map(function(e,n){return t.some(function(t){return e.value===t})&&n||void 0}).filter(function(e){return void 0!==e});return n.length&&n||[0]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e){return e.isMultiSelect?!u.default.isEqual(e.multiSelectInitialSelectedIndexes,e.multiSelectSelectedIndexes):e.singleSelectSelectedIndex!==e.singleSelectInitialIndex}function o(e){return i({},e,{altered:l(e)})}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.isAltered=l,t.default=o;var a=n(25),u=r(a)},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){return[].concat(r(e.multiSelectSelectedIndexes.slice(0,t)),r(e.multiSelectSelectedIndexes.slice(t+1)))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){return{options:[].concat(r(e.multiSelectSelectedOptions.options.slice(0,t)),r(e.multiSelectSelectedOptions.options.slice(t+1)))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l},function(e,t,n){"use strict";var r=n(23),l=n(24),o=n(22);e.exports=function(){function e(e,t,n,r,i,a){a!==o&&l(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports=require("fbjs/lib/emptyFunction")},function(e,t){e.exports=require("fbjs/lib/invariant")},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("react-dom")},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),d=l(c),f=n(0),p=l(f),S=n(3),_=r(S),O=n(7),y=l(O),h=n(9),m=l(h),b=n(8),v=l(b),E=n(6),g=l(E),x=n(5),P=l(x),I=function(e){function t(){var e,n,r,l;o(this,t);for(var a=arguments.length,u=Array(a),s=0;s<a;s++)u[s]=arguments[s];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state=h.initialState,r.reducer=m.default,r.handleBlur=r.handleBlur.bind(r),r.handleTouchMove=r.handleTouchMove.bind(r),r.handleTouchStart=r.handleTouchStart.bind(r),r.handleClick=r.handleClick.bind(r),r.handleKeyEvent=r.handleKeyEvent.bind(r),r.OPTION_NODES_LENGTH=0,l=n,i(r,l)}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.options,n=e.selectedValue,r=e.selectedValues,l=e.name,o=e.multiselect,i=e.disabled;this.updateState({type:_.BOOTSTRAP_STATE,value:{options:t,selectedValue:n,selectedValues:r,name:l,multiselect:o}}),this.OPTION_NODES_LENGTH=t.length,i||(this.listeners={onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleClick,onBlur:this.handleBlur,onMouseDown:this.handleClick,onKeyDown:this.handleKeyEvent})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,r=n.singleSelectSelectedOption,l=n.multiSelectSelectedOptions,o=n.isMultiSelect,i=n.altered,a=this.props.onChange;if(o){var u=t.multiSelectSelectedOptions.options,s=l.options;if(u.length&&(u.length!==s.length||u[0].value!==s[0].value))return a({options:l.options.map(function(e){return{name:e.name,text:e.text,value:e.value}}),altered:i})}else{var c=t.singleSelectSelectedOption.value,d=r.value;if(c&&c!==d)return a({name:r.name,text:r.text,value:r.value,altered:i})}}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefix,r=t.caretIcon,l=t.customLabelRenderer,o=t.disabled,i=this.state,a=i.altered,s=i.singleSelectInitialIndex,c=i.isOptionsPanelOpen,f=i.isDragging,p=i.multiSelectInitialSelectedIndexes,S=i.multiSelectSelectedIndexes,_=i.multiSelectSelectedOptions,O=i.name,y=i.nextPotentialSelectionIndex,h=i.options,m=i.singleSelectSelectedIndex,b=i.singleSelectSelectedOption;if(i.isMultiSelect){var v=l&&l(_)||!1;return d.default.createElement("div",u({ref:function(t){e.selectBox=t}},this.listeners),d.default.createElement(P.default,{disabled:o,altered:a,isDragging:f,caretIcon:r,customLabelText:v,prefix:n,name:O,multiSelectInitialSelectedIndexes:p,multiSelectSelectedOptions:_,multiSelectSelectedIndexes:S,nextPotentialSelectionIndex:y,isOptionsPanelOpen:c,options:h}))}var E=l&&l(b)||!1;return d.default.createElement("div",u({ref:function(t){e.selectBox=t}},this.listeners),d.default.createElement(g.default,{disabled:o,altered:a,isDragging:f,singleSelectInitialIndex:s,caretIcon:r,prefix:n,name:O,customLabelText:E,singleSelectSelectedOption:b,singleSelectSelectedIndex:m,nextPotentialSelectionIndex:y,isOptionsPanelOpen:c,options:h}))}},{key:"updateState",value:function(e){var t=this.reducer(this.state,e);this.setState(t)}},{key:"handleTouchStart",value:function(){this.updateState({type:_.SET_IS_DRAGGING,boolean:!1})}},{key:"handleTouchMove",value:function(){this.updateState({type:_.SET_IS_DRAGGING,boolean:!0})}},{key:"handleKeyEvent",value:function(e){var t=this.state,n=t.isMultiSelect,r=t.isOptionsPanelOpen;return this.preventDefaultForKeyCodes([y.default.ENTER,y.default.SPACE,y.default.ESCAPE,y.default.UP,y.default.DOWN],e),e.keyCode===y.default.TAB?(r&&!n&&e.preventDefault(),e):e.keyCode===y.default.ENTER?this.enterPressed(e):e.keyCode===y.default.SPACE?r?this.updateState({type:_.SET_OPTIONS_PANEL_CLOSED}):this.updateState({type:_.SET_OPTIONS_PANEL_OPEN}):e.keyCode===y.default.ESC?this.selectBox.firstChild.blur():e.keyCode===y.default.UP?this.keyUpOrDownPressed("decrement"):e.keyCode===y.default.DOWN?this.keyUpOrDownPressed("increment"):void 0}},{key:"handleClick",value:function(e){var t=this,n=this.state,r=n.isMultiSelect,l=n.isOptionsPanelOpen;if(!1===n.isDragging){if(e.preventDefault(),this.selectBox.firstChild.focus(),e&&e.target.classList.contains("rrs__option")){if(r){var o=parseFloat(e.target.getAttribute("data-key"));return this.updateState({type:_.SET_MULTISELECT_OPTIONS,optionIndex:o})}return this.updateState({type:_.SET_SELECTED_INDEX,optionIndex:parseFloat(e.target.getAttribute("data-key"))}),this.forceUpdate(function(){return t.updateState({type:_.SET_OPTIONS_PANEL_CLOSED})})}return(!e||!e.target.classList.contains("rrs__options-container"))&&(l?this.updateState({type:_.SET_OPTIONS_PANEL_CLOSED}):this.updateState({type:_.SET_OPTIONS_PANEL_OPEN}))}}},{key:"handleBlur",value:function(){this.updateState({type:_.SET_OPTIONS_PANEL_CLOSED_NO_SELECTION})}},{key:"preventDefaultForKeyCodes",value:function(e,t){e.forEach(function(e){e===t.keyCode&&t.preventDefault()})}},{key:"enterPressed",value:function(e){var t=this.state,n=t.isMultiSelect,r=t.isOptionsPanelOpen,l=t.nextPotentialSelectionIndex;return n?this.updateState({type:_.SET_MULTISELECT_OPTIONS,optionIndex:l}):!0===r?(e.stopPropagation(),this.updateState({type:_.SET_OPTIONS_PANEL_CLOSED})):this.props.onSubmit()}},{key:"keyUpOrDownPressed",value:function(e){var t=this.state,n=t.isOptionsPanelOpen,r=t.nextPotentialSelectionIndex;this.updateState({type:_.SET_NEXT_SELECTED_INDEX,optionIndex:(0,v.default)(e,n,r,this.OPTION_NODES_LENGTH)}),!1===n&&this.updateState({type:_.SET_OPTIONS_PANEL_OPEN})}}]),t}(c.Component);t.default=I,I.propTypes={caretIcon:p.default.oneOfType([p.default.string,p.default.element]),customLabelRenderer:p.default.func,disabled:p.default.bool,multiselect:p.default.bool,name:p.default.string.isRequired,onChange:p.default.func,options:p.default.arrayOf(p.default.shape({text:p.default.string.isRequired,value:p.default.string.isRequired})).isRequired,onSubmit:p.default.func,prefix:p.default.string,selectedValue:p.default.string,selectedValues:p.default.arrayOf(p.default.string.isRequired)}}])});