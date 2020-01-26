webpackHotUpdate("static/development/pages/tenders/show.js",{

/***/ "./pages/tenders/show.js":
/*!*******************************!*\
  !*** ./pages/tenders/show.js ***!
  \*******************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _ethereum_tender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ethereum/tender */ "./ethereum/tender.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_10__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var tendershow =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(tendershow, _React$Component);

  function tendershow() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, tendershow);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(tendershow).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(tendershow, [{
    key: "renderCards",
    value: function renderCards() {
      var _this$props = this.props,
          tenderId = _this$props.tenderId,
          tenderType = _this$props.tenderType,
          startDate = _this$props.startDate,
          endDate = _this$props.endDate,
          tenderSubject = _this$props.tenderSubject,
          tenderReceivingLocation = _this$props.tenderReceivingLocation,
          maxBidValue = _this$props.maxBidValue;
      var start = new Date(startDate * 1000);
      var normalStartDate = "".concat(start.getDate(), "/").concat(start.getMonth() + 1, "/").concat(start.getFullYear(), "    ").concat(start.getHours(), ":").concat(start.getMinutes(), ":").concat(start.getSeconds());
      var end = new Date(endDate * 1000);
      var normalEndDate = "".concat(end.getDate(), "/").concat(end.getMonth() + 1, "/").concat(end.getFullYear(), "    ").concat(end.getHours(), ":").concat(end.getMinutes(), ":").concat(end.getSeconds());
      var items = [{
        header: tenderType,
        meta: "type of tender",
        description: 'tender type is shown here',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: tenderId,
        description: 'tender id is shown here',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: normalStartDate,
        description: 'tender start date is shown here',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: normalEndDate,
        description: 'tender closing date is shown here',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: tenderSubject,
        description: 'tender subject is shown here',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: tenderReceivingLocation,
        description: 'tenderReceivingLocation is shown here',
        style: {
          overflowWrap: 'break-word'
        }
      }, {
        header: maxBidValue,
        description: 'maxBidValue is shown here',
        style: {
          overflowWrap: 'break-word'
        }
      }];
      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Card"].Group, {
        items: items
      });
    }
  }, {
    key: "render",
    value: function render() {
      //console.log(this.props.query.id)
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx("h3", null, "Tender Details"), this.renderCards(), __jsx("br", null), __jsx("br", null), __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "/tenders/submitbid/".concat(this.props.tenderId)
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        primary: true,
        size: "large"
      }, "Submit Bid"))), __jsx(_routes__WEBPACK_IMPORTED_MODULE_10__["Link"], {
        route: "/tenders/viewBids/".concat(this.props.tenderId)
      }, __jsx("a", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        primary: true,
        size: "large"
      }, "View Bids"))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      var tenderDetails;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_ethereum_tender__WEBPACK_IMPORTED_MODULE_8__["default"].methods.Tenders(props.query.id).call());

            case 2:
              tenderDetails = _context.sent;
              console.log(tenderDetails[1]);
              return _context.abrupt("return", {
                tenderId: tenderDetails[0],
                tenderType: tenderDetails[1],
                startDate: tenderDetails[2],
                endDate: tenderDetails[3],
                tenderSubject: tenderDetails[4],
                tenderReceivingLocation: tenderDetails[5],
                maxBidValue: tenderDetails[6]
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return tendershow;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (tendershow);

/***/ })

})
//# sourceMappingURL=show.js.9daf6a347d9f90a7ff39.hot-update.js.map