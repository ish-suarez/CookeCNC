"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/navbar.jsx":
/*!*******************************!*\
  !*** ./components/navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar navigationLinks = [\n    {\n        to: \"/\",\n        linkName: \"Home\"\n    },\n    {\n        to: \"/CNC-Parts\",\n        linkName: \"CNC Parts\"\n    },\n    {\n        to: \"/AboutUs\",\n        linkName: \"About Us\"\n    },\n    {\n        to: \"/ContactUs\",\n        linkName: \"Contact Us\"\n    }, \n];\nvar NavLink = function(param) {\n    var to = param.to, children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: to,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, _this);\n};\n_c = NavLink;\nvar MobileNav = function(param) {\n    var open = param.open, setOpen = param.setOpen;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute top-0 left-0 h-screen w-screen bg-white transform \".concat(open ? \"-translate-x-0\" : \"-translate-x-full\", \" transition-transform duration-300 ease-in-out filter drop-shadow-md \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"cursor-pointer text-lg\",\n                    children: \"LOGO\"\n                }, void 0, false, {\n                    fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dev\", {\n                className: \"flex\",\n                children: navigationLinks.map({\n                    t: t\n                })\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = MobileNav;\nfunction Navbar() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"cursor-pointer text-lg\",\n                    children: \"LOGO\"\n                }, void 0, false, {\n                    fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: navigationLinks.map(function(param, i) {\n                    var to = param.to, linkName = param.linkName;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                        to: to,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"cursor-pointer\",\n                            children: linkName\n                        }, void 0, false, {\n                            fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 29\n                        }, _this)\n                    }, i, false, {\n                        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n};\n_c2 = Navbar;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c1, \"MobileNav\");\n$RefreshReg$(_c2, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUNJO0FBRWhDLElBQU1FLGVBQWUsR0FBRztJQUNwQjtRQUNJQyxFQUFFLEVBQUUsR0FBRztRQUNQQyxRQUFRLEVBQUUsTUFBTTtLQUNuQjtJQUNEO1FBQ0lELEVBQUUsRUFBRSxZQUFZO1FBQ2hCQyxRQUFRLEVBQUUsV0FBVztLQUN4QjtJQUNEO1FBQ0lELEVBQUUsRUFBRSxVQUFVO1FBQ2RDLFFBQVEsRUFBRSxVQUFVO0tBQ3ZCO0lBQ0Q7UUFDSUQsRUFBRSxFQUFFLFlBQVk7UUFDaEJDLFFBQVEsRUFBRSxZQUFZO0tBQ3pCO0NBRUo7QUFFRCxJQUFNQyxPQUFPLEdBQUcsZ0JBQXNCO1FBQW5CRixFQUFFLFNBQUZBLEVBQUUsRUFBRUcsUUFBUSxTQUFSQSxRQUFRO0lBQzNCLHFCQUNJLDhEQUFDTixrREFBSTtRQUFDTyxJQUFJLEVBQUVKLEVBQUU7a0JBQUlHLFFBQVE7Ozs7O2FBQVMsQ0FDckM7Q0FDTDtBQUpLRCxLQUFBQSxPQUFPO0FBTWIsSUFBTUcsU0FBUyxHQUFHLGdCQUFxQjtRQUFuQkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLE9BQU8sU0FBUEEsT0FBTztJQUM3QixxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUUsNkRBQTRELENBQWdELE1BQXFFLENBQW5ISCxJQUFJLEdBQUcsZ0JBQWdCLEdBQUcsbUJBQW1CLEVBQUMsdUVBQXFFLENBQUM7OzBCQUM5TCw4REFBQ1Qsa0RBQUk7Z0JBQUNPLElBQUksRUFBQyxHQUFHOzBCQUNWLDRFQUFDTSxHQUFDO29CQUFDRCxTQUFTLEVBQUMsd0JBQXdCOzhCQUFDLE1BQUk7Ozs7O3lCQUFJOzs7OztxQkFDM0M7MEJBRVAsOERBQUNFLEtBQUc7Z0JBQUNGLFNBQVMsRUFBQyxNQUFNOzBCQUViVixlQUFlLENBQUNhLEdBQUcsQ0FBQztvQkFBRUMsQ0FBQyxFQUFEQSxDQUFDO2lCQUFDLENBQUM7Ozs7O3FCQUUzQjs7Ozs7O2FBQ0osQ0FDVDtDQUNKO0FBZEtSLE1BQUFBLFNBQVM7QUFnQkEsU0FBU1MsTUFBTSxHQUFHOztJQUM3QixxQkFDSSw4REFBQ0MsS0FBRztRQUFDTixTQUFTLEVBQUMsTUFBTTs7MEJBQ2pCLDhEQUFDWixrREFBSTtnQkFBQ08sSUFBSSxFQUFDLEdBQUc7MEJBQ1YsNEVBQUNNLEdBQUM7b0JBQUNELFNBQVMsRUFBQyx3QkFBd0I7OEJBQUMsTUFBSTs7Ozs7d0JBQUk7Ozs7O29CQUMzQzswQkFFUCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLE1BQU07MEJBRWJWLGVBQWUsQ0FBQ2EsR0FBRyxDQUFDLGdCQUFpQkksQ0FBQzt3QkFBaEJoQixFQUFFLFNBQUZBLEVBQUUsRUFBRUMsUUFBUSxTQUFSQSxRQUFRO3lDQUM5Qiw4REFBQ0MsT0FBTzt3QkFBU0YsRUFBRSxFQUFFQSxFQUFFO2tDQUNuQiw0RUFBQ1UsR0FBQzs0QkFBQ0QsU0FBUyxFQUFDLGdCQUFnQjtzQ0FBRVIsUUFBUTs7Ozs7aUNBQUs7dUJBRGxDZSxDQUFDOzs7OzZCQUVMO2lCQUNiLENBQUM7Ozs7O29CQUVKOzs7Ozs7WUFHSixDQUNUO0NBQ0o7QUFwQnVCRixNQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzeD9mNTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IG5hdmlnYXRpb25MaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIHRvOiAnLycsXG4gICAgICAgIGxpbmtOYW1lOiAnSG9tZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdG86ICcvQ05DLVBhcnRzJyxcbiAgICAgICAgbGlua05hbWU6ICdDTkMgUGFydHMnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRvOiAnL0Fib3V0VXMnLFxuICAgICAgICBsaW5rTmFtZTogJ0Fib3V0IFVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0bzogJy9Db250YWN0VXMnLFxuICAgICAgICBsaW5rTmFtZTogJ0NvbnRhY3QgVXMnXG4gICAgfSxcblxuXVxuXG5jb25zdCBOYXZMaW5rID0gKHsgdG8sIGNoaWxkcmVuIH0gKT0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXt0b30+eyBjaGlsZHJlbiB9PC9MaW5rPlxuICAgICk7XG59XG5cbmNvbnN0IE1vYmlsZU5hdiA9ICh7b3Blbiwgc2V0T3Blbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIHRvcC0wIGxlZnQtMCBoLXNjcmVlbiB3LXNjcmVlbiBiZy13aGl0ZSB0cmFuc2Zvcm0gJHtvcGVuID8gXCItdHJhbnNsYXRlLXgtMFwiIDogXCItdHJhbnNsYXRlLXgtZnVsbFwifSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZmlsdGVyIGRyb3Atc2hhZG93LW1kIGB9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1sZ1wiPkxPR088L3A+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxkZXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbkxpbmtzLm1hcCh7IHR9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGV2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWxnXCI+TE9HTzwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbkxpbmtzLm1hcCgoe3RvLCBsaW5rTmFtZX0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17aX0gdG89e3RvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJz57bGlua05hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuXG4gICAgICAgIDwvbmF2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwibmF2aWdhdGlvbkxpbmtzIiwidG8iLCJsaW5rTmFtZSIsIk5hdkxpbmsiLCJjaGlsZHJlbiIsImhyZWYiLCJNb2JpbGVOYXYiLCJvcGVuIiwic2V0T3BlbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJkZXYiLCJtYXAiLCJ0IiwiTmF2YmFyIiwibmF2IiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.jsx\n"));

/***/ })

});