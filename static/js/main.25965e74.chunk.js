(this["webpackJsonpcalculator-app-in-react"]=this["webpackJsonpcalculator-app-in-react"]||[]).push([[0],[,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Vvork_Cloud_Technologies_completed_projects_JS_Projects_REACT_projects_calculator_app_in_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),D_Vvork_Cloud_Technologies_completed_projects_JS_Projects_REACT_projects_calculator_app_in_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),D_Vvork_Cloud_Technologies_completed_projects_JS_Projects_REACT_projects_calculator_app_in_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),D_Vvork_Cloud_Technologies_completed_projects_JS_Projects_REACT_projects_calculator_app_in_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_App_css__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(15),_App_css__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__),_operators_num_section_operators_num_section_jsx__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8),CalculatorApp=function(_Component){Object(D_Vvork_Cloud_Technologies_completed_projects_JS_Projects_REACT_projects_calculator_app_in_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(CalculatorApp,_Component);var _super=Object(D_Vvork_Cloud_Technologies_completed_projects_JS_Projects_REACT_projects_calculator_app_in_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(CalculatorApp);function CalculatorApp(){var _this;Object(D_Vvork_Cloud_Technologies_completed_projects_JS_Projects_REACT_projects_calculator_app_in_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,CalculatorApp);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={value:"0"},_this.ButtonPressed=function(btn){console.log(_this.state.value),"="===btn?_this.setState({value:eval(_this.state.value)}):"AC"===btn?_this.setState({value:""}):"CE"===btn?_this.setState({value:_this.state.value.slice(0,-1)}):_this.setState({value:_this.state.value+btn})},_this}return Object(D_Vvork_Cloud_Technologies_completed_projects_JS_Projects_REACT_projects_calculator_app_in_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(CalculatorApp,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"calculator-app"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"result-section"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1",null," ",this.state.value," ")),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_operators_num_section_operators_num_section_jsx__WEBPACK_IMPORTED_MODULE_6__.a,{onClick:this.ButtonPressed}))}}]),CalculatorApp}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=CalculatorApp},function(e,_,t){"use strict";t.d(_,"a",(function(){return s}));var a=t(1),r=t(2),o=t(4),n=t(3),l=t(0),c=t.n(l),s=function(e){Object(o.a)(t,e);var _=Object(n.a)(t);function t(){return Object(a.a)(this,t),_.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"operators-num-section"},c.a.createElement("button",{value:"AC",onClick:function(_){return e.props.onClick(_.target.value)},className:"clear-buttons"},"AC"),c.a.createElement("button",{value:"CE",onClick:function(_){return e.props.onClick(_.target.value)},className:"clear-buttons"},"CE"),c.a.createElement("button",{value:"/",onClick:function(_){return e.props.onClick(_.target.value)},className:"operators"},"/"),c.a.createElement("button",{value:"*",onClick:function(_){return e.props.onClick(_.target.value)},className:"operators"},"x"),c.a.createElement("button",{value:"7",onClick:function(_){return e.props.onClick(_.target.value)},className:"numbers"},"7"),c.a.createElement("button",{value:"8",onClick:function(_){return e.props.onClick(_.target.value)},className:"numbers"},"8"),c.a.createElement("button",{value:"9",onClick:function(_){return e.props.onClick(_.target.value)},className:"numbers"},"9"),c.a.createElement("button",{value:"-",onClick:function(_){return e.props.onClick(_.target.value)},className:"operators"},"-"),c.a.createElement("button",{value:"4",onClick:function(_){return e.props.onClick(_.target.value)},className:"numbers"},"4"),c.a.createElement("button",{value:"5",onClick:function(_){return e.props.onClick(_.target.value)},className:"numbers"},"5"),c.a.createElement("button",{value:"6",onClick:function(_){return e.props.onClick(_.target.value)},className:"numbers"},"6"),c.a.createElement("button",{value:"+",onClick:function(_){return e.props.onClick(_.target.value)},className:"operators"},"+"),c.a.createElement("button",{value:"1",onClick:function(_){return e.props.onClick(_.target.value)},className:"numbers"},"1"),c.a.createElement("button",{value:"2",onClick:function(_){return e.props.onClick(_.target.value)},className:"numbers"},"2"),c.a.createElement("button",{value:"3",onClick:function(_){return e.props.onClick(_.target.value)},className:"numbers"},"3"),c.a.createElement("button",{value:"0",onClick:function(_){return e.props.onClick(_.target.value)},className:"numbers"},"0"),c.a.createElement("button",{value:"=",onClick:function(_){return e.props.onClick(_.target.value)},className:"operators"},"="))}}]),t}(c.a.Component)},function(e,_,t){e.exports=t(10)},function(e,_,t){"use strict";t.r(_);var a=t(0),r=t.n(a),o=t(6),n=t.n(o),l=t(7);n.a.render(r.a.createElement(l.a,null),document.getElementById("root"))},,,,,function(e,_,t){}],[[9,1,2]]]);
//# sourceMappingURL=main.25965e74.chunk.js.map