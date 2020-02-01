webpackHotUpdate("static/development/pages/tenders/validDoc/validDocument.js",{

/***/ "./pages/tenders/validDoc/validDocument.js":
/*!*************************************************!*\
  !*** ./pages/tenders/validDoc/validDocument.js ***!
  \*************************************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_tender__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ethereum/tender */ "./ethereum/tender.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! js-sha256 */ "./node_modules/js-sha256/src/sha256.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_14__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








var validDocument =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(validDocument, _React$Component);

  function validDocument() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, validDocument);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(validDocument)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      errorMessage: '',
      loading: false,
      fileHash: '',
      isButtonDisabled: false,
      exactTwoFiles: false,
      valid: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "combinehash", function (event) {
      event.preventDefault();

      if (!!_this.state.fileHash) {
        _this.setState({
          fileHash: Object(js_sha256__WEBPACK_IMPORTED_MODULE_14__["sha256"])(_this.state.fileHash),
          isButtonDisabled: true
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "uploadFile", function (event) {
      try {
        console.log(event.target.files.length);

        if (event.target.files.length == 2) {
          for (var i = 0; i < event.target.files.length; i++) {
            console.log("hi");

            _this.generateHash(event.target.files[i]);
          }
        } else {
          throw "select exact two files";
        }
      } catch (err) {
        _this.setState({
          errorMessage: err
        });

        console.log(err);
      } // console.log(event.target.files[0])

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSubmit", function _callee(event) {
      var accounts, bidCount, i, singleBid;
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
              _context.next = 5;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_web3__WEBPACK_IMPORTED_MODULE_12__["default"].eth.getAccounts());

            case 5:
              accounts = _context.sent;
              _context.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_tender__WEBPACK_IMPORTED_MODULE_11__["default"].methods.bidCount().call());

            case 8:
              bidCount = _context.sent;
              i = 1;

            case 10:
              if (!(i <= bidCount)) {
                _context.next = 19;
                break;
              }

              console.log("valids");
              _context.next = 14;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_tender__WEBPACK_IMPORTED_MODULE_11__["default"].methods.Bids(i).call());

            case 14:
              singleBid = _context.sent;

              if (singleBid.fileHash == _this.state.fileHash) {
                _this.setState({
                  valid: true
                });
              }

            case 16:
              i++;
              _context.next = 10;
              break;

            case 19:
              _context.next = 24;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](2);

              _this.setState({
                errorMessage: _context.t0.message
              });

            case 24:
              _this.setState({
                loading: false
              });

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[2, 21]]);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(validDocument, [{
    key: "generateHash",
    value: function generateHash(file) {
      var _this2 = this;

      var reader = new FileReader();

      reader.onload = function () {
        var hash = Object(js_sha256__WEBPACK_IMPORTED_MODULE_14__["sha256"])(reader.result);
        var result = _this2.state.fileHash;
        result = result + hash;

        _this2.setState({
          fileHash: result
        });

        console.log("result:" + _this2.state.fileHash);
      };

      reader.readAsText(file);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"], {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        success: !!this.state.valid
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("label", null, "upload technical and financial bids"), __jsx("input", {
        type: "file",
        multiple: true,
        onChange: this.uploadFile
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        size: "small",
        onClick: this.combinehash,
        disabled: this.state.isButtonDisabled
      }, "Generate Hash"), __jsx("br", null), __jsx("br", null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Form"].Field, null, __jsx("label", null, "Documents Hash (sha256)"), __jsx("input", {
        type: "text",
        value: this.state.fileHash
      })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], {
        success: true,
        content: "Document is Valid"
      }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Message"], Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({
        error: true,
        header: "Oops!!"
      }, "header", this.state.errorMessage)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        loading: this.state.loading,
        size: "large",
        primary: true,
        type: "submit"
      }, "Submit")));
    }
  }]);

  return validDocument;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (validDocument);

/***/ })

})
//# sourceMappingURL=validDocument.js.cd9c4eb20eff4f818664.hot-update.js.map