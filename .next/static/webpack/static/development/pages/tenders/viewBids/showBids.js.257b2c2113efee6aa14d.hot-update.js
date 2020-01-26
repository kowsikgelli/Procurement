webpackHotUpdate("static/development/pages/tenders/viewBids/showBids.js",{

/***/ "./pages/tenders/viewBids/showBids.js":
/*!********************************************!*\
  !*** ./pages/tenders/viewBids/showBids.js ***!
  \********************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ethereum_tender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ethereum/tender */ "./ethereum/tender.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var showBids =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(showBids, _React$Component);

  function showBids() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, showBids);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(showBids).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(showBids, [{
    key: "renderBids",
    value: function renderBids() {
      var items = this.props.bids.map(function (bidobject) {
        return {
          header: bidobject.address,
          description: bidobject.bidValue,
          fluid: true
        };
      });
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Group, {
        items: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("h1", null, "this is bid list");
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      var bidCount, bids, i, bidTenderId, singleBid;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_tender__WEBPACK_IMPORTED_MODULE_7__["default"].methods.bidCount().call());

            case 2:
              bidCount = _context.sent;
              bids = [];
              i = 1;

            case 5:
              if (!(i <= bidCount)) {
                _context.next = 17;
                break;
              }

              _context.next = 8;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_tender__WEBPACK_IMPORTED_MODULE_7__["default"].methods().Bids(i).tenderId.call());

            case 8:
              bidTenderId = _context.sent;

              if (!(bidTenderId == props.query.id)) {
                _context.next = 14;
                break;
              }

              _context.next = 12;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_tender__WEBPACK_IMPORTED_MODULE_7__["default"].methods().Bids(i).call());

            case 12:
              singleBid = _context.sent;
              bids.push(singleBid);

            case 14:
              i++;
              _context.next = 5;
              break;

            case 17:
              return _context.abrupt("return", {
                bids: bids
              });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return showBids;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (showBids);

/***/ })

})
//# sourceMappingURL=showBids.js.257b2c2113efee6aa14d.hot-update.js.map