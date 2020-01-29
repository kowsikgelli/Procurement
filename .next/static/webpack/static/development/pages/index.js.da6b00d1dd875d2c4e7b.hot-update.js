webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ethereum_tender__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ethereum/tender */ "./ethereum/tender.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var Procurement =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Procurement, _React$Component);

  function Procurement() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Procurement);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Procurement)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      errorMessage: '',
      loading: false,
      account: '',
      successMessage: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "register", function _callee(event) {
      var accounts;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loading: true,
                errorMessage: ''
              });

              _context.prev = 1;
              _context.next = 4;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(web3.eth.getAccounts());

            case 4:
              accounts = _context.sent;
              console.log(accounts);

              _this.setState({
                account: accounts[0]
              });

              console.log(_this.state.account);
              _context.next = 10;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_tender__WEBPACK_IMPORTED_MODULE_9__["default"].methods.Register(_this.state.account).send({
                from: accounts[0]
              }));

            case 10:
              _this.setState({
                successMessage: "successfully Registered"
              });

              _context.next = 17;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);

              _this.setState({
                errorMessage: _context.t0.message
              });

              console.log(_context.t0.message);

            case 17:
              _this.setState({
                loading: false
              });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 13]]);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Procurement, [{
    key: "renderTenders",
    value: function renderTenders() {
      var items = this.props.tenders.map(function (tenderobject) {
        return {
          header: tenderobject.tenderSubject,
          description: __jsx(_routes__WEBPACK_IMPORTED_MODULE_12__["Link"], {
            route: "/tenders/".concat(tenderobject.id)
          }, __jsx("a", null, "view tender")),
          fluid: true,
          color: 'red'
        };
      });
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Card"].Group, {
        items: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx("div", null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_12__["Link"], {
        route: "/tenders/new"
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        floated: "right",
        content: "create tender",
        icon: "add",
        labelposition: "left",
        primary: true
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.register,
        error: !!this.state.errorMessage,
        success: !!this.state.successMessage
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        loading: this.state.loading,
        type: "submit",
        content: "Register",
        primary: true
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], {
        error: true,
        header: this.state.errorMessage
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], {
        success: true,
        header: this.state.successMessage
      })), __jsx("h3", null, "Open Tenders"), this.renderTenders()));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var tenderCount, tenders, d, exitDate, i, singletender, index;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_tender__WEBPACK_IMPORTED_MODULE_9__["default"].methods.tenderCount().call());

            case 2:
              tenderCount = _context2.sent;
              tenders = [];
              d = new Date();
              exitDate = ~~(d.getTime() * 0.001);
              i = 1;

            case 7:
              if (!(i <= tenderCount)) {
                _context2.next = 17;
                break;
              }

              _context2.next = 10;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_tender__WEBPACK_IMPORTED_MODULE_9__["default"].methods.Tenders(i).call());

            case 10:
              singletender = _context2.sent;
              tenders.push(singletender);
              index = tenders.indexOf(singletender);

              if (exitDate > singletender.endDate) {
                tenders.splice(index, 1);
              }

            case 14:
              i++;
              _context2.next = 7;
              break;

            case 17:
              return _context2.abrupt("return", {
                tenders: tenders
              });

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return Procurement;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Procurement);

/***/ })

})
//# sourceMappingURL=index.js.da6b00d1dd875d2c4e7b.hot-update.js.map