webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _interopRequireDefault = __webpack_require__(1)['default'];\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _containersAppJsx = __webpack_require__(158);\n\nvar _containersAppJsx2 = _interopRequireDefault(_containersAppJsx);\n\n_react2['default'].render(_react2['default'].createElement(_containersAppJsx2['default'], null), document.getElementById('react-app'));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./front-end/src/js/admin/admin.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./front-end/src/js/admin/admin.js?");

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _classCallCheck = __webpack_require__(159)['default'];\n\nvar _interopRequireDefault = __webpack_require__(1)['default'];\n\nvar _interopRequireWildcard = __webpack_require__(160)['default'];\n\nexports.__esModule = true;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AdminAppJsx = __webpack_require__(161);\n\nvar _AdminAppJsx2 = _interopRequireDefault(_AdminAppJsx);\n\nvar _redux = __webpack_require__(171);\n\nvar _reactRedux = __webpack_require__(183);\n\nvar _reducers = __webpack_require__(205);\n\nvar reducers = _interopRequireWildcard(_reducers);\n\nvar _sharedRedux = __webpack_require__(208);\n\nvar store = _sharedRedux.create(reducers);\n\nvar App = (function () {\n  function App() {\n    _classCallCheck(this, App);\n  }\n\n  App.prototype.render = function render() {\n    return _react2['default'].createElement(\n      _reactRedux.Provider,\n      { redux: store },\n      function () {\n        return _react2['default'].createElement(_AdminAppJsx2['default'], null);\n      }\n    );\n  };\n\n  return App;\n})();\n\nexports['default'] = App;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./front-end/src/js/admin/containers/App.jsx\n ** module id = 158\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./front-end/src/js/admin/containers/App.jsx?");

/***/ },
/* 159 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports[\"default\"] = function (instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n};\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/class-call-check.js\n ** module id = 159\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/class-call-check.js?");

/***/ },
/* 160 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports[\"default\"] = function (obj) {\n  if (obj && obj.__esModule) {\n    return obj;\n  } else {\n    var newObj = {};\n\n    if (obj != null) {\n      for (var key in obj) {\n        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n      }\n    }\n\n    newObj[\"default\"] = obj;\n    return newObj;\n  }\n};\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/interop-require-wildcard.js\n ** module id = 160\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/interop-require-wildcard.js?");

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _classCallCheck = __webpack_require__(159)['default'];\n\nvar _extends = __webpack_require__(162)['default'];\n\nvar _interopRequireDefault = __webpack_require__(1)['default'];\n\nvar _interopRequireWildcard = __webpack_require__(160)['default'];\n\nexports.__esModule = true;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _redux = __webpack_require__(171);\n\nvar _reactRedux = __webpack_require__(183);\n\nvar _componentsUserListJsx = __webpack_require__(195);\n\nvar _componentsUserListJsx2 = _interopRequireDefault(_componentsUserListJsx);\n\nvar _actionCreatorsAdminActionsJs = __webpack_require__(203);\n\nvar AdminActions = _interopRequireWildcard(_actionCreatorsAdminActionsJs);\n\nvar AdminApp = (function () {\n  function AdminApp() {\n    _classCallCheck(this, _AdminApp);\n  }\n\n  AdminApp.prototype.render = function render() {\n    var _props = this.props;\n    var users = _props.users;\n    var dispatch = _props.dispatch;\n\n    return _react2['default'].createElement(_componentsUserListJsx2['default'], _extends({ users: users }, _redux.bindActionCreators(AdminActions, dispatch)));\n  };\n\n  var _AdminApp = AdminApp;\n  AdminApp = _reactRedux.connect(function (state) {\n    return {\n      users: state.users\n    };\n  })(AdminApp) || AdminApp;\n  return AdminApp;\n})();\n\nexports['default'] = AdminApp;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./front-end/src/js/admin/containers/AdminApp.jsx\n ** module id = 161\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./front-end/src/js/admin/containers/AdminApp.jsx?");

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _Object$assign = __webpack_require__(163)[\"default\"];\n\nexports[\"default\"] = _Object$assign || function (target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i];\n\n    for (var key in source) {\n      if (Object.prototype.hasOwnProperty.call(source, key)) {\n        target[key] = source[key];\n      }\n    }\n  }\n\n  return target;\n};\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/extends.js\n ** module id = 162\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/extends.js?");

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = { \"default\": __webpack_require__(164), __esModule: true };\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/core-js/object/assign.js\n ** module id = 163\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/core-js/object/assign.js?");

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(165);\nmodule.exports = __webpack_require__(167).core.Object.assign;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/fn/object/assign.js\n ** module id = 164\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/fn/object/assign.js?");

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	eval("// 19.1.3.1 Object.assign(target, source)\nvar $def = __webpack_require__(166);\n$def($def.S, 'Object', {assign: __webpack_require__(169)});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/es6.object.assign.js\n ** module id = 165\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/es6.object.assign.js?");

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	eval("var $          = __webpack_require__(167)\n  , global     = $.g\n  , core       = $.core\n  , isFunction = $.isFunction;\nfunction ctx(fn, that){\n  return function(){\n    return fn.apply(that, arguments);\n  };\n}\n// type bitmap\n$def.F = 1;  // forced\n$def.G = 2;  // global\n$def.S = 4;  // static\n$def.P = 8;  // proto\n$def.B = 16; // bind\n$def.W = 32; // wrap\nfunction $def(type, name, source){\n  var key, own, out, exp\n    , isGlobal = type & $def.G\n    , isProto  = type & $def.P\n    , target   = isGlobal ? global : type & $def.S\n        ? global[name] : (global[name] || {}).prototype\n    , exports  = isGlobal ? core : core[name] || (core[name] = {});\n  if(isGlobal)source = name;\n  for(key in source){\n    // contains in native\n    own = !(type & $def.F) && target && key in target;\n    if(own && key in exports)continue;\n    // export native or passed\n    out = own ? target[key] : source[key];\n    // prevent global pollution for namespaces\n    if(isGlobal && !isFunction(target[key]))exp = source[key];\n    // bind timers to global for call from export context\n    else if(type & $def.B && own)exp = ctx(out, global);\n    // wrap global constructors for prevent change them in library\n    else if(type & $def.W && target[key] == out)!function(C){\n      exp = function(param){\n        return this instanceof C ? new C(param) : C(param);\n      };\n      exp.prototype = C.prototype;\n    }(out);\n    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;\n    // export\n    exports[key] = exp;\n    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;\n  }\n}\nmodule.exports = $def;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.def.js\n ** module id = 166\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.def.js?");

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar global = typeof self != 'undefined' ? self : Function('return this')()\n  , core   = {}\n  , defineProperty = Object.defineProperty\n  , hasOwnProperty = {}.hasOwnProperty\n  , ceil  = Math.ceil\n  , floor = Math.floor\n  , max   = Math.max\n  , min   = Math.min;\n// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.\nvar DESC = !!function(){\n  try {\n    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;\n  } catch(e){ /* empty */ }\n}();\nvar hide = createDefiner(1);\n// 7.1.4 ToInteger\nfunction toInteger(it){\n  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);\n}\nfunction desc(bitmap, value){\n  return {\n    enumerable  : !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable    : !(bitmap & 4),\n    value       : value\n  };\n}\nfunction simpleSet(object, key, value){\n  object[key] = value;\n  return object;\n}\nfunction createDefiner(bitmap){\n  return DESC ? function(object, key, value){\n    return $.setDesc(object, key, desc(bitmap, value));\n  } : simpleSet;\n}\n\nfunction isObject(it){\n  return it !== null && (typeof it == 'object' || typeof it == 'function');\n}\nfunction isFunction(it){\n  return typeof it == 'function';\n}\nfunction assertDefined(it){\n  if(it == undefined)throw TypeError(\"Can't call method on  \" + it);\n  return it;\n}\n\nvar $ = module.exports = __webpack_require__(168)({\n  g: global,\n  core: core,\n  html: global.document && document.documentElement,\n  // http://jsperf.com/core-js-isobject\n  isObject:   isObject,\n  isFunction: isFunction,\n  that: function(){\n    return this;\n  },\n  // 7.1.4 ToInteger\n  toInteger: toInteger,\n  // 7.1.15 ToLength\n  toLength: function(it){\n    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991\n  },\n  toIndex: function(index, length){\n    index = toInteger(index);\n    return index < 0 ? max(index + length, 0) : min(index, length);\n  },\n  has: function(it, key){\n    return hasOwnProperty.call(it, key);\n  },\n  create:     Object.create,\n  getProto:   Object.getPrototypeOf,\n  DESC:       DESC,\n  desc:       desc,\n  getDesc:    Object.getOwnPropertyDescriptor,\n  setDesc:    defineProperty,\n  setDescs:   Object.defineProperties,\n  getKeys:    Object.keys,\n  getNames:   Object.getOwnPropertyNames,\n  getSymbols: Object.getOwnPropertySymbols,\n  assertDefined: assertDefined,\n  // Dummy, fix for not array-like ES3 string in es5 module\n  ES5Object: Object,\n  toObject: function(it){\n    return $.ES5Object(assertDefined(it));\n  },\n  hide: hide,\n  def: createDefiner(0),\n  set: global.Symbol ? simpleSet : hide,\n  each: [].forEach\n});\n/* eslint-disable no-undef */\nif(typeof __e != 'undefined')__e = core;\nif(typeof __g != 'undefined')__g = global;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.js\n ** module id = 167\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.js?");

/***/ },
/* 168 */
/***/ function(module, exports) {

	eval("module.exports = function($){\n  $.FW   = false;\n  $.path = $.core;\n  return $;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.fw.js\n ** module id = 168\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.fw.js?");

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	eval("var $        = __webpack_require__(167)\n  , enumKeys = __webpack_require__(170);\n// 19.1.2.1 Object.assign(target, source, ...)\n/* eslint-disable no-unused-vars */\nmodule.exports = Object.assign || function assign(target, source){\n/* eslint-enable no-unused-vars */\n  var T = Object($.assertDefined(target))\n    , l = arguments.length\n    , i = 1;\n  while(l > i){\n    var S      = $.ES5Object(arguments[i++])\n      , keys   = enumKeys(S)\n      , length = keys.length\n      , j      = 0\n      , key;\n    while(length > j)T[key = keys[j++]] = S[key];\n  }\n  return T;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.assign.js\n ** module id = 169\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.assign.js?");

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	eval("var $ = __webpack_require__(167);\nmodule.exports = function(it){\n  var keys       = $.getKeys(it)\n    , getDesc    = $.getDesc\n    , getSymbols = $.getSymbols;\n  if(getSymbols)$.each.call(getSymbols(it), function(key){\n    if(getDesc(it, key).enumerable)keys.push(key);\n  });\n  return keys;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/modules/$.enum-keys.js\n ** module id = 170\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/modules/$.enum-keys.js?");

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	eval("// Core\n'use strict';\n\nexports.__esModule = true;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _createStore = __webpack_require__(174);\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\n// Utilities\n\nvar _utilsCompose = __webpack_require__(178);\n\nvar _utilsCompose2 = _interopRequireDefault(_utilsCompose);\n\nvar _utilsCombineReducers = __webpack_require__(179);\n\nvar _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);\n\nvar _utilsBindActionCreators = __webpack_require__(172);\n\nvar _utilsBindActionCreators2 = _interopRequireDefault(_utilsBindActionCreators);\n\nvar _utilsApplyMiddleware = __webpack_require__(181);\n\nvar _utilsApplyMiddleware2 = _interopRequireDefault(_utilsApplyMiddleware);\n\nvar _utilsComposeMiddleware = __webpack_require__(182);\n\nvar _utilsComposeMiddleware2 = _interopRequireDefault(_utilsComposeMiddleware);\n\nexports.createStore = _createStore2['default'];\nexports.compose = _utilsCompose2['default'];\nexports.combineReducers = _utilsCombineReducers2['default'];\nexports.bindActionCreators = _utilsBindActionCreators2['default'];\nexports.applyMiddleware = _utilsApplyMiddleware2['default'];\nexports.composeMiddleware = _utilsComposeMiddleware2['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/redux/lib/index.js\n ** module id = 171\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/redux/lib/index.js?");

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports['default'] = bindActionCreators;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _utilsMapValues = __webpack_require__(173);\n\nvar _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);\n\nfunction bindActionCreators(actionCreators, dispatch) {\n  return _utilsMapValues2['default'](actionCreators, function (actionCreator) {\n    return function () {\n      return dispatch(actionCreator.apply(undefined, arguments));\n    };\n  });\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/redux/lib/utils/bindActionCreators.js\n ** module id = 172\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/redux/lib/utils/bindActionCreators.js?");

/***/ },
/* 173 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports.__esModule = true;\nexports[\"default\"] = mapValues;\n\nfunction mapValues(obj, fn) {\n  return Object.keys(obj).reduce(function (result, key) {\n    result[key] = fn(obj[key], key);\n    return result;\n  }, {});\n}\n\nmodule.exports = exports[\"default\"];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/redux/lib/utils/mapValues.js\n ** module id = 173\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/redux/lib/utils/mapValues.js?");

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports['default'] = createStore;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _Store = __webpack_require__(175);\n\nvar _Store2 = _interopRequireDefault(_Store);\n\nfunction createStore(reducer, initialState) {\n  var store = new _Store2['default'](reducer, initialState);\n\n  return {\n    dispatch: store.dispatch.bind(store),\n    subscribe: store.subscribe.bind(store),\n    getState: store.getState.bind(store),\n    getReducer: store.getReducer.bind(store),\n    replaceReducer: store.replaceReducer.bind(store)\n  };\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/redux/lib/createStore.js\n ** module id = 174\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/redux/lib/createStore.js?");

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nvar _invariant = __webpack_require__(176);\n\nvar _invariant2 = _interopRequireDefault(_invariant);\n\nvar _utilsIsPlainObject = __webpack_require__(177);\n\nvar _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);\n\n// Don't ever try to handle these action types in your code. They are private.\n// For any unknown actions, you must return the current state.\n// If the current state is undefined, you must return the initial state.\nvar ActionTypes = {\n  INIT: '@@redux/INIT'\n};\n\nexports.ActionTypes = ActionTypes;\n\nvar Store = (function () {\n  function Store(reducer, initialState) {\n    _classCallCheck(this, Store);\n\n    _invariant2['default'](typeof reducer === 'function', 'Expected the reducer to be a function.');\n\n    this.state = initialState;\n    this.listeners = [];\n    this.replaceReducer(reducer);\n  }\n\n  Store.prototype.getReducer = function getReducer() {\n    return this.reducer;\n  };\n\n  Store.prototype.replaceReducer = function replaceReducer(nextReducer) {\n    this.reducer = nextReducer;\n    this.dispatch({ type: ActionTypes.INIT });\n  };\n\n  Store.prototype.dispatch = function dispatch(action) {\n    _invariant2['default'](_utilsIsPlainObject2['default'](action), 'Actions must be plain objects. Use custom middleware for async actions.');\n\n    var reducer = this.reducer;\n\n    this.state = reducer(this.state, action);\n    this.listeners.forEach(function (listener) {\n      return listener();\n    });\n    return action;\n  };\n\n  Store.prototype.getState = function getState() {\n    return this.state;\n  };\n\n  Store.prototype.subscribe = function subscribe(listener) {\n    var listeners = this.listeners;\n\n    listeners.push(listener);\n\n    return function unsubscribe() {\n      var index = listeners.indexOf(listener);\n      listeners.splice(index, 1);\n    };\n  };\n\n  return Store;\n})();\n\nexports['default'] = Store;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/redux/lib/Store.js\n ** module id = 175\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/redux/lib/Store.js?");

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright 2013-2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule invariant\n */\n\n'use strict';\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar invariant = function(condition, format, a, b, c, d, e, f) {\n  if (process.env.NODE_ENV !== 'production') {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  }\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error(\n        'Minified exception occurred; use the non-minified dev environment ' +\n        'for the full error message and additional helpful warnings.'\n      );\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(\n        'Invariant Violation: ' +\n        format.replace(/%s/g, function() { return args[argIndex++]; })\n      );\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n};\n\nmodule.exports = invariant;\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/redux/~/invariant/browser.js\n ** module id = 176\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/redux/~/invariant/browser.js?");

/***/ },
/* 177 */
/***/ function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports['default'] = isPlainObject;\n\nfunction isPlainObject(obj) {\n  return obj ? typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype : false;\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/redux/lib/utils/isPlainObject.js\n ** module id = 177\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/redux/lib/utils/isPlainObject.js?");

/***/ },
/* 178 */
/***/ function(module, exports) {

	eval("/**\n * Composes functions from left to right\n * @param  {...Function} funcs - Functions to compose\n * @return {Function}\n */\n\"use strict\";\n\nexports.__esModule = true;\nexports[\"default\"] = compose;\n\nfunction compose() {\n  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {\n    funcs[_key] = arguments[_key];\n  }\n\n  return funcs.reduceRight(function (composed, f) {\n    return f(composed);\n  });\n}\n\nmodule.exports = exports[\"default\"];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/redux/lib/utils/compose.js\n ** module id = 178\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/redux/lib/utils/compose.js?");

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports['default'] = combineReducers;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _utilsMapValues = __webpack_require__(173);\n\nvar _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);\n\nvar _utilsPick = __webpack_require__(180);\n\nvar _utilsPick2 = _interopRequireDefault(_utilsPick);\n\nvar _invariant = __webpack_require__(176);\n\nvar _invariant2 = _interopRequireDefault(_invariant);\n\nvar _Store = __webpack_require__(175);\n\nfunction getErrorMessage(key, action) {\n  var actionType = action && action.type;\n  var actionName = actionType && '\"' + actionType + '\"' || 'an action';\n\n  return 'Reducer \"' + key + '\" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';\n}\n\nfunction combineReducers(reducers) {\n  var finalReducers = _utilsPick2['default'](reducers, function (val) {\n    return typeof val === 'function';\n  });\n\n  Object.keys(finalReducers).forEach(function (key) {\n    var reducer = finalReducers[key];\n    _invariant2['default'](typeof reducer(undefined, { type: _Store.ActionTypes.INIT }) !== 'undefined', 'Reducer \"' + key + '\" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');\n\n    var type = Math.random().toString(36).substring(7).split('').join('.');\n    _invariant2['default'](typeof reducer(undefined, { type: type }) !== 'undefined', 'Reducer \"' + key + '\" returned undefined when probed with a random type. ' + ('Don\\'t try to handle ' + _Store.ActionTypes.INIT + ' or other actions in \"redux/*\" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');\n  });\n\n  return function composition(state, action) {\n    if (state === undefined) state = {};\n\n    return _utilsMapValues2['default'](finalReducers, function (reducer, key) {\n      var newState = reducer(state[key], action);\n      _invariant2['default'](typeof newState !== 'undefined', getErrorMessage(key, action));\n      return newState;\n    });\n  };\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/redux/lib/utils/combineReducers.js\n ** module id = 179\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/redux/lib/utils/combineReducers.js?");

/***/ },
/* 180 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports.__esModule = true;\nexports[\"default\"] = pick;\n\nfunction pick(obj, fn) {\n  return Object.keys(obj).reduce(function (result, key) {\n    if (fn(obj[key])) {\n      result[key] = obj[key];\n    }\n    return result;\n  }, {});\n}\n\nmodule.exports = exports[\"default\"];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/redux/lib/utils/pick.js\n ** module id = 180\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/redux/lib/utils/pick.js?");

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports['default'] = applyMiddleware;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _compose = __webpack_require__(178);\n\nvar _compose2 = _interopRequireDefault(_compose);\n\nvar _composeMiddleware = __webpack_require__(182);\n\nvar _composeMiddleware2 = _interopRequireDefault(_composeMiddleware);\n\n/**\n * Creates a higher-order store that applies middleware to a store's dispatch.\n * Because middleware is potentially asynchronous, this should be the first\n * higher-order store in the composition chain.\n * @param {...Function} ...middlewares\n * @return {Function} A higher-order store\n */\n\nfunction applyMiddleware() {\n  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {\n    middlewares[_key] = arguments[_key];\n  }\n\n  return function (next) {\n    return function () {\n      var store = next.apply(undefined, arguments);\n      var middleware = _composeMiddleware2['default'].apply(undefined, middlewares);\n\n      function dispatch(action) {\n        var methods = {\n          dispatch: dispatch,\n          getState: store.getState\n        };\n\n        return _compose2['default'](middleware(methods), store.dispatch)(action);\n      }\n\n      return _extends({}, store, {\n        dispatch: dispatch\n      });\n    };\n  };\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/redux/lib/utils/applyMiddleware.js\n ** module id = 181\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/redux/lib/utils/applyMiddleware.js?");

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports['default'] = composeMiddleware;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _compose = __webpack_require__(178);\n\nvar _compose2 = _interopRequireDefault(_compose);\n\n/**\n * Compose middleware from left to right\n * @param  {...Function} middlewares\n * @return {Function}\n */\n\nfunction composeMiddleware() {\n  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {\n    middlewares[_key] = arguments[_key];\n  }\n\n  return function (methods) {\n    return function (next) {\n      return _compose2['default'].apply(undefined, middlewares.map(function (m) {\n        return m(methods);\n      }).concat([next]));\n    };\n  };\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/redux/lib/utils/composeMiddleware.js\n ** module id = 182\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/redux/lib/utils/composeMiddleware.js?");

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _componentsCreateAll = __webpack_require__(184);\n\nvar _componentsCreateAll2 = _interopRequireDefault(_componentsCreateAll);\n\nvar _createAll = _componentsCreateAll2['default'](_react2['default']);\n\nvar Provider = _createAll.Provider;\nvar Connector = _createAll.Connector;\nvar provide = _createAll.provide;\nvar connect = _createAll.connect;\nexports.Provider = Provider;\nexports.Connector = Connector;\nexports.provide = provide;\nexports.connect = connect;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/index.js\n ** module id = 183\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/index.js?");

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports['default'] = createAll;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nvar _createProvider = __webpack_require__(185);\n\nvar _createProvider2 = _interopRequireDefault(_createProvider);\n\nvar _createProvideDecorator = __webpack_require__(187);\n\nvar _createProvideDecorator2 = _interopRequireDefault(_createProvideDecorator);\n\nvar _createConnector = __webpack_require__(189);\n\nvar _createConnector2 = _interopRequireDefault(_createConnector);\n\nvar _createConnectDecorator = __webpack_require__(193);\n\nvar _createConnectDecorator2 = _interopRequireDefault(_createConnectDecorator);\n\nfunction createAll(React) {\n  // Wrapper components\n  var Provider = _createProvider2['default'](React);\n  var Connector = _createConnector2['default'](React);\n\n  // Higher-order components (decorators)\n  var provide = _createProvideDecorator2['default'](React, Provider);\n  var connect = _createConnectDecorator2['default'](React, Connector);\n\n  return { Provider: Provider, Connector: Connector, provide: provide, connect: connect };\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/components/createAll.js\n ** module id = 184\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/components/createAll.js?");

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nexports['default'] = createProvider;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }\n\nvar _utilsCreateStoreShape = __webpack_require__(186);\n\nvar _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);\n\nfunction createProvider(React) {\n  var Component = React.Component;\n  var PropTypes = React.PropTypes;\n\n  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);\n\n  return (function (_Component) {\n    function Provider(props, context) {\n      _classCallCheck(this, Provider);\n\n      _Component.call(this, props, context);\n      this.state = { store: props.store };\n    }\n\n    _inherits(Provider, _Component);\n\n    Provider.prototype.getChildContext = function getChildContext() {\n      return { store: this.state.store };\n    };\n\n    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {\n      var store = this.state.store;\n      var nextStore = nextProps.store;\n\n      if (store !== nextStore) {\n        var nextReducer = nextStore.getReducer();\n        store.replaceReducer(nextReducer);\n      }\n    };\n\n    Provider.prototype.render = function render() {\n      var children = this.props.children;\n\n      return children();\n    };\n\n    _createClass(Provider, null, [{\n      key: 'childContextTypes',\n      value: {\n        store: storeShape.isRequired\n      },\n      enumerable: true\n    }, {\n      key: 'propTypes',\n      value: {\n        children: PropTypes.func.isRequired\n      },\n      enumerable: true\n    }]);\n\n    return Provider;\n  })(Component);\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/components/createProvider.js\n ** module id = 185\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/components/createProvider.js?");

/***/ },
/* 186 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports.__esModule = true;\nexports[\"default\"] = createStoreShape;\n\nfunction createStoreShape(PropTypes) {\n  return PropTypes.shape({\n    subscribe: PropTypes.func.isRequired,\n    dispatch: PropTypes.func.isRequired,\n    getState: PropTypes.func.isRequired\n  });\n}\n\nmodule.exports = exports[\"default\"];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/utils/createStoreShape.js\n ** module id = 186\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/utils/createStoreShape.js?");

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nexports['default'] = createProvideDecorator;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }\n\nvar _utilsGetDisplayName = __webpack_require__(188);\n\nvar _utilsGetDisplayName2 = _interopRequireDefault(_utilsGetDisplayName);\n\nfunction createProvideDecorator(React, Provider) {\n  var Component = React.Component;\n\n  return function provide(store) {\n    return function (DecoratedComponent) {\n      return (function (_Component) {\n        function ProviderDecorator() {\n          _classCallCheck(this, ProviderDecorator);\n\n          _Component.apply(this, arguments);\n        }\n\n        _inherits(ProviderDecorator, _Component);\n\n        ProviderDecorator.prototype.render = function render() {\n          var _this = this;\n\n          return React.createElement(\n            Provider,\n            { store: store },\n            function () {\n              return React.createElement(DecoratedComponent, _this.props);\n            }\n          );\n        };\n\n        _createClass(ProviderDecorator, null, [{\n          key: 'displayName',\n          value: 'Provider(' + _utilsGetDisplayName2['default'](DecoratedComponent) + ')',\n          enumerable: true\n        }, {\n          key: 'DecoratedComponent',\n          value: DecoratedComponent,\n          enumerable: true\n        }]);\n\n        return ProviderDecorator;\n      })(Component);\n    };\n  };\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/components/createProvideDecorator.js\n ** module id = 187\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/components/createProvideDecorator.js?");

/***/ },
/* 188 */
/***/ function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports['default'] = getDisplayName;\n\nfunction getDisplayName(Component) {\n  return Component.displayName || Component.name || 'Component';\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/utils/getDisplayName.js\n ** module id = 188\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/utils/getDisplayName.js?");

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nexports['default'] = createConnector;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }\n\nvar _utilsCreateStoreShape = __webpack_require__(186);\n\nvar _utilsCreateStoreShape2 = _interopRequireDefault(_utilsCreateStoreShape);\n\nvar _utilsShallowEqual = __webpack_require__(190);\n\nvar _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);\n\nvar _utilsIsPlainObject = __webpack_require__(191);\n\nvar _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);\n\nvar _invariant = __webpack_require__(192);\n\nvar _invariant2 = _interopRequireDefault(_invariant);\n\nfunction createConnector(React) {\n  var Component = React.Component;\n  var PropTypes = React.PropTypes;\n\n  var storeShape = _utilsCreateStoreShape2['default'](PropTypes);\n\n  return (function (_Component) {\n    function Connector(props, context) {\n      _classCallCheck(this, Connector);\n\n      _Component.call(this, props, context);\n      this.state = this.selectState(props, context);\n    }\n\n    _inherits(Connector, _Component);\n\n    Connector.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {\n      return !this.isSliceEqual(this.state.slice, nextState.slice) || !_utilsShallowEqual2['default'](this.props, nextProps);\n    };\n\n    Connector.prototype.isSliceEqual = function isSliceEqual(slice, nextSlice) {\n      var isRefEqual = slice === nextSlice;\n      if (isRefEqual) {\n        return true;\n      } else if (typeof slice !== 'object' || typeof nextSlice !== 'object') {\n        return isRefEqual;\n      }\n      return _utilsShallowEqual2['default'](slice, nextSlice);\n    };\n\n    Connector.prototype.componentDidMount = function componentDidMount() {\n      this.unsubscribe = this.context.store.subscribe(this.handleChange.bind(this));\n      this.handleChange();\n    };\n\n    Connector.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {\n      if (nextProps.select !== this.props.select) {\n        // Force the state slice recalculation\n        this.handleChange(nextProps);\n      }\n    };\n\n    Connector.prototype.componentWillUnmount = function componentWillUnmount() {\n      this.unsubscribe();\n    };\n\n    Connector.prototype.handleChange = function handleChange() {\n      var props = arguments[0] === undefined ? this.props : arguments[0];\n\n      var nextState = this.selectState(props, this.context);\n      if (!this.isSliceEqual(this.state.slice, nextState.slice)) {\n        this.setState(nextState);\n      }\n    };\n\n    Connector.prototype.selectState = function selectState(props, context) {\n      var state = context.store.getState();\n      var slice = props.select(state);\n\n      _invariant2['default'](_utilsIsPlainObject2['default'](slice), 'The return value of `select` prop must be an object. Instead received %s.', slice);\n\n      return { slice: slice };\n    };\n\n    Connector.prototype.render = function render() {\n      var children = this.props.children;\n      var slice = this.state.slice;\n      var dispatch = this.context.store.dispatch;\n\n      return children(_extends({ dispatch: dispatch }, slice));\n    };\n\n    _createClass(Connector, null, [{\n      key: 'contextTypes',\n      value: {\n        store: storeShape.isRequired\n      },\n      enumerable: true\n    }, {\n      key: 'propTypes',\n      value: {\n        children: PropTypes.func.isRequired,\n        select: PropTypes.func.isRequired\n      },\n      enumerable: true\n    }, {\n      key: 'defaultProps',\n      value: {\n        select: function select(state) {\n          return state;\n        }\n      },\n      enumerable: true\n    }]);\n\n    return Connector;\n  })(Component);\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/components/createConnector.js\n ** module id = 189\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/components/createConnector.js?");

/***/ },
/* 190 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports.__esModule = true;\nexports[\"default\"] = shallowEqual;\n\nfunction shallowEqual(objA, objB) {\n  if (objA === objB) {\n    return true;\n  }\n\n  var keysA = Object.keys(objA);\n  var keysB = Object.keys(objB);\n\n  if (keysA.length !== keysB.length) {\n    return false;\n  }\n\n  // Test for A's keys different from B.\n  var hasOwn = Object.prototype.hasOwnProperty;\n  for (var i = 0; i < keysA.length; i++) {\n    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nmodule.exports = exports[\"default\"];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/utils/shallowEqual.js\n ** module id = 190\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/utils/shallowEqual.js?");

/***/ },
/* 191 */
/***/ function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports['default'] = isPlainObject;\n\nfunction isPlainObject(obj) {\n  return obj ? typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype : false;\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/utils/isPlainObject.js\n ** module id = 191\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/utils/isPlainObject.js?");

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright 2013-2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule invariant\n */\n\n'use strict';\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar invariant = function(condition, format, a, b, c, d, e, f) {\n  if (process.env.NODE_ENV !== 'production') {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  }\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error(\n        'Minified exception occurred; use the non-minified dev environment ' +\n        'for the full error message and additional helpful warnings.'\n      );\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(\n        'Invariant Violation: ' +\n        format.replace(/%s/g, function() { return args[argIndex++]; })\n      );\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n};\n\nmodule.exports = invariant;\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/~/invariant/browser.js\n ** module id = 192\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/~/invariant/browser.js?");

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nexports['default'] = createConnectDecorator;\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }\n\nvar _utilsGetDisplayName = __webpack_require__(188);\n\nvar _utilsGetDisplayName2 = _interopRequireDefault(_utilsGetDisplayName);\n\nvar _utilsShallowEqualScalar = __webpack_require__(194);\n\nvar _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);\n\nfunction createConnectDecorator(React, Connector) {\n  var Component = React.Component;\n\n  return function connect(select) {\n    return function (DecoratedComponent) {\n      return (function (_Component) {\n        function ConnectorDecorator() {\n          _classCallCheck(this, ConnectorDecorator);\n\n          _Component.apply(this, arguments);\n        }\n\n        _inherits(ConnectorDecorator, _Component);\n\n        ConnectorDecorator.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {\n          return !_utilsShallowEqualScalar2['default'](this.props, nextProps);\n        };\n\n        ConnectorDecorator.prototype.render = function render() {\n          var _this = this;\n\n          return React.createElement(\n            Connector,\n            { select: function (state) {\n                return select(state, _this.props);\n              } },\n            function (stuff) {\n              return React.createElement(DecoratedComponent, _extends({}, stuff, _this.props));\n            }\n          );\n        };\n\n        _createClass(ConnectorDecorator, null, [{\n          key: 'displayName',\n          value: 'Connector(' + _utilsGetDisplayName2['default'](DecoratedComponent) + ')',\n          enumerable: true\n        }, {\n          key: 'DecoratedComponent',\n          value: DecoratedComponent,\n          enumerable: true\n        }]);\n\n        return ConnectorDecorator;\n      })(Component);\n    };\n  };\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/components/createConnectDecorator.js\n ** module id = 193\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/components/createConnectDecorator.js?");

/***/ },
/* 194 */
/***/ function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports['default'] = shallowEqualScalar;\n\nfunction shallowEqualScalar(objA, objB) {\n  if (objA === objB) {\n    return true;\n  }\n\n  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {\n    return false;\n  }\n\n  var keysA = Object.keys(objA);\n  var keysB = Object.keys(objB);\n\n  if (keysA.length !== keysB.length) {\n    return false;\n  }\n\n  // Test for A's keys different from B.\n  var hasOwn = Object.prototype.hasOwnProperty;\n  for (var i = 0; i < keysA.length; i++) {\n    if (!hasOwn.call(objB, keysA[i])) {\n      return false;\n    }\n\n    var valA = objA[keysA[i]];\n    var valB = objB[keysA[i]];\n\n    if (valA !== valB || typeof valA === 'object' || typeof valB === 'object') {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/utils/shallowEqualScalar.js\n ** module id = 194\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/utils/shallowEqualScalar.js?");

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _inherits = __webpack_require__(196)['default'];\n\nvar _createClass = __webpack_require__(199)['default'];\n\nvar _classCallCheck = __webpack_require__(159)['default'];\n\nvar _interopRequireDefault = __webpack_require__(1)['default'];\n\nexports.__esModule = true;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _UserJsx = __webpack_require__(202);\n\nvar _UserJsx2 = _interopRequireDefault(_UserJsx);\n\nvar UserList = (function (_Component) {\n  _inherits(UserList, _Component);\n\n  _createClass(UserList, null, [{\n    key: 'propTypes',\n    value: {\n      users: _react.PropTypes.array.isRequired\n    },\n    enumerable: true\n  }]);\n\n  function UserList(props, context) {\n    _classCallCheck(this, UserList);\n\n    _Component.call(this, props, context);\n  }\n\n  UserList.prototype.render = function render() {\n    var users = this.props.users;\n\n    return _react2['default'].createElement(\n      'section',\n      { id: 'main' },\n      _react2['default'].createElement(\n        'h2',\n        null,\n        'Users'\n      ),\n      _react2['default'].createElement(\n        'ul',\n        { className: 'user-list' },\n        users.map(function (user) {\n          return _react2['default'].createElement(_UserJsx2['default'], { key: user.id, user: user });\n        })\n      )\n    );\n  };\n\n  return UserList;\n})(_react.Component);\n\nexports['default'] = UserList;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./front-end/src/js/admin/components/UserList.jsx\n ** module id = 195\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./front-end/src/js/admin/components/UserList.jsx?");

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _Object$create = __webpack_require__(197)[\"default\"];\n\nexports[\"default\"] = function (subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass);\n  }\n\n  subClass.prototype = _Object$create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) subClass.__proto__ = superClass;\n};\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/inherits.js\n ** module id = 196\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/inherits.js?");

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = { \"default\": __webpack_require__(198), __esModule: true };\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/core-js/object/create.js\n ** module id = 197\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/core-js/object/create.js?");

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	eval("var $ = __webpack_require__(167);\nmodule.exports = function create(P, D){\n  return $.create(P, D);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/fn/object/create.js\n ** module id = 198\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/fn/object/create.js?");

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _Object$defineProperty = __webpack_require__(200)[\"default\"];\n\nexports[\"default\"] = (function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];\n      descriptor.enumerable = descriptor.enumerable || false;\n      descriptor.configurable = true;\n      if (\"value\" in descriptor) descriptor.writable = true;\n\n      _Object$defineProperty(target, descriptor.key, descriptor);\n    }\n  }\n\n  return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) defineProperties(Constructor, staticProps);\n    return Constructor;\n  };\n})();\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/create-class.js\n ** module id = 199\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/create-class.js?");

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = { \"default\": __webpack_require__(201), __esModule: true };\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/core-js/object/define-property.js\n ** module id = 200\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/core-js/object/define-property.js?");

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	eval("var $ = __webpack_require__(167);\nmodule.exports = function defineProperty(it, key, desc){\n  return $.setDesc(it, key, desc);\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/~/core-js/library/fn/object/define-property.js\n ** module id = 201\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/~/core-js/library/fn/object/define-property.js?");

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _inherits = __webpack_require__(196)['default'];\n\nvar _createClass = __webpack_require__(199)['default'];\n\nvar _classCallCheck = __webpack_require__(159)['default'];\n\nvar _interopRequireDefault = __webpack_require__(1)['default'];\n\nexports.__esModule = true;\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar User = (function (_Component) {\n  _inherits(User, _Component);\n\n  _createClass(User, null, [{\n    key: 'propTypes',\n    value: {\n      user: _react.PropTypes.object.isRequired\n    },\n    enumerable: true\n  }]);\n\n  function User(props, context) {\n    _classCallCheck(this, User);\n\n    _Component.call(this, props, context);\n  }\n\n  User.prototype.render = function render() {\n    var user = this.props.user;\n\n    return _react2['default'].createElement(\n      'li',\n      null,\n      _react2['default'].createElement(\n        'span',\n        null,\n        'Email: ',\n        user.email\n      ),\n      _react2['default'].createElement(\n        'span',\n        null,\n        'UserId: ',\n        user.id\n      )\n    );\n  };\n\n  return User;\n})(_react.Component);\n\nexports['default'] = User;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./front-end/src/js/admin/components/User.jsx\n ** module id = 202\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./front-end/src/js/admin/components/User.jsx?");

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _interopRequireWildcard = __webpack_require__(160)['default'];\n\nexports.__esModule = true;\nexports.updatePassword = updatePassword;\n\nvar _constantsActionTypes = __webpack_require__(204);\n\nvar types = _interopRequireWildcard(_constantsActionTypes);\n\nfunction updatePassword(id, password) {\n  return {\n    type: types.UPDATE_PASSWORD,\n    id: id,\n    password: password\n  };\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./front-end/src/js/admin/actionCreators/AdminActions.js\n ** module id = 203\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./front-end/src/js/admin/actionCreators/AdminActions.js?");

/***/ },
/* 204 */
/***/ function(module, exports) {

	eval("'use strict';\n\nexports.__esModule = true;\nvar UPDATE_PASSWORD = 'UPDATE_PASSWORD';\nexports.UPDATE_PASSWORD = UPDATE_PASSWORD;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./front-end/src/js/admin/constants/ActionTypes.js\n ** module id = 204\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./front-end/src/js/admin/constants/ActionTypes.js?");

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _interopRequire = __webpack_require__(206)['default'];\n\nexports.__esModule = true;\n\nvar _users = __webpack_require__(207);\n\nexports.users = _interopRequire(_users);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./front-end/src/js/admin/reducers/index.js\n ** module id = 205\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./front-end/src/js/admin/reducers/index.js?");

/***/ },
/* 206 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports[\"default\"] = function (obj) {\n  return obj && obj.__esModule ? obj[\"default\"] : obj;\n};\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/interop-require.js\n ** module id = 206\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/interop-require.js?");

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports['default'] = users;\n\nvar _constantsActionTypes = __webpack_require__(204);\n\nfunction users(state, action) {\n  if (state === undefined) state = [];\n\n  return state;\n}\n\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./front-end/src/js/admin/reducers/users.js\n ** module id = 207\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./front-end/src/js/admin/reducers/users.js?");

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _extends = __webpack_require__(162)['default'];\n\nvar _objectWithoutProperties = __webpack_require__(209)['default'];\n\nexports.__esModule = true;\nexports['default'] = create;\n\nvar _redux = __webpack_require__(171);\n\nfunction create(stores, initialState) {\n  var store = _redux.composeStores(stores);\n  var dispatcher = _redux.createDispatcher(store, function () {\n    return [promiseMiddleware()];\n  });\n  return _redux.createRedux(dispatcher, initialState);\n}\n\n// promise middleware\nfunction promiseMiddleware() {\n  return function (next) {\n    return function (action) {\n      var promise = action.promise;\n\n      var rest = _objectWithoutProperties(action, ['promise']);\n\n      if (!promise) {\n        return next(_extends({}, rest));\n      }\n\n      return promise.then(function (res) {\n        return next(_extends({}, rest, { count: res }));\n      }, function (err) {\n        return console.log(err);\n      });\n    };\n  };\n}\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./front-end/src/js/shared/redux.js\n ** module id = 208\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./front-end/src/js/shared/redux.js?");

/***/ },
/* 209 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports[\"default\"] = function (obj, keys) {\n  var target = {};\n\n  for (var i in obj) {\n    if (keys.indexOf(i) >= 0) continue;\n    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;\n    target[i] = obj[i];\n  }\n\n  return target;\n};\n\nexports.__esModule = true;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/babel-runtime/helpers/object-without-properties.js\n ** module id = 209\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/babel-runtime/helpers/object-without-properties.js?");

/***/ }
]);