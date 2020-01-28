webpackHotUpdate("static/development/pages/tenders/new.js",{

/***/ "./pages/tenders/new.js":
/*!******************************!*\
  !*** ./pages/tenders/new.js ***!
  \******************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_tender__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/tender */ "./ethereum/tender.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







var newTender =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(newTender, _React$Component);

  function newTender() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, newTender);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(newTender)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      startDate: new Date(),
      tenderSubject: '',
      tenderType: '',
      tenderRecevingLocation: '',
      maxBidValue: '',
      errorMessage: '',
      loading: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (date) {
      _this.setState({
        startDate: date.target.value
      });

      console.log("selected date" + _this.state.startDate + " " + date.target.value);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSubmit", function _callee(event) {
      var accounts, d, closingDate;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();

              _this.setState({
                loading: true,
                errorMessage: ''
              });

              _context.prev = 2;
              console.log(_this.state.startDate);
              _context.next = 6;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].eth.getAccounts());

            case 6:
              accounts = _context.sent;
              console.log(accounts);
              d = new Date(_this.state.startDate);
              closingDate = d.getTime() * 0.001;
              console.log(d.getTime() * 0.001);
              _context.next = 13;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_tender__WEBPACK_IMPORTED_MODULE_11__["default"].methods.createTender(_this.state.tenderType, _this.state.tenderSubject, _this.state.tenderRecevingLocation, closingDate, _this.state.maxBidValue).send({
                from: accounts[0]
              }));

            case 13:
              _routes__WEBPACK_IMPORTED_MODULE_13__["Router"].pushRoute('/');
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](2);

              _this.setState({
                errorMessage: _context.t0.message
              });

            case 19:
              _this.setState({
                loading: false
              });

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[2, 16]]);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(newTender, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], {
        error: true,
        header: "Sorry :( This Page can be accessed by admin only",
        content: "Even if you try to create Tender you will get error"
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("label", null, "Tender Subject"), __jsx("input", {
        placeholder: "Tender Subject",
        value: this.state.tenderSubject,
        onChange: function onChange(event) {
          return _this2.setState({
            tenderSubject: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("label", null, "Tender Type"), __jsx("input", {
        placeholder: "Tender Type",
        value: this.state.tenderType,
        onChange: function onChange(event) {
          return _this2.setState({
            tenderType: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("label", null, "Tender Receving Location"), __jsx("input", {
        placeholder: "Tender Receving Location",
        value: this.state.tenderRecevingLocation,
        onChange: function onChange(event) {
          return _this2.setState({
            tenderRecevingLocation: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("label", null, "Max Bid Value"), __jsx("input", {
        placeholder: "Max Bid Value",
        value: this.state.maxBidValue,
        onChange: function onChange(event) {
          return _this2.setState({
            maxBidValue: event.target.value
          });
        }
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("label", null, "tender closing date"), __jsx("input", {
        type: "date",
        onChange: this.handleChange,
        value: this.state.startDate
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], {
        error: true,
        header: "Oops!!",
        content: this.state.errorMessage
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        loading: this.state.loading,
        primary: true,
        type: "submit"
      }, "Submit")));
    }
  }]);

  return newTender;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (newTender);

/***/ })

})
//# sourceMappingURL=new.js.cb641bdc6632f2807ec3.hot-update.js.map