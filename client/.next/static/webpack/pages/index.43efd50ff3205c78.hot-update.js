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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar navigationLinks = [\n    {\n        to: \"/\",\n        linkName: \"Home\"\n    },\n    {\n        to: \"/CNC-Parts\",\n        linkName: \"CNC Parts\"\n    },\n    {\n        to: \"/AboutUs\",\n        linkName: \"About Us\"\n    },\n    {\n        to: \"/ContactUs\",\n        linkName: \"Contact Us\"\n    }, \n];\nvar NavLink = function(param) {\n    var to = param.to, children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: to,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, _this);\n};\n_c = NavLink;\nvar MobileNav = function(param) {\n    var open = param.open, setOpen = param.setOpen;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n_c1 = MobileNav;\nfunction Navbar() {\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lg\",\n                    children: \"LOGO\"\n                }, void 0, false, {\n                    fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: navigationLinks.map(function(param, i) {\n                    var to = param.to, linkName = param.linkName;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                        to: to,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"cursor-pointer\",\n                            children: linkName\n                        }, void 0, false, {\n                            fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 29\n                        }, _this)\n                    }, i, false, {\n                        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n};\n_c2 = Navbar;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c1, \"MobileNav\");\n$RefreshReg$(_c2, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUNJO0FBRWhDLElBQU1FLGVBQWUsR0FBRztJQUNwQjtRQUNJQyxFQUFFLEVBQUUsR0FBRztRQUNQQyxRQUFRLEVBQUUsTUFBTTtLQUNuQjtJQUNEO1FBQ0lELEVBQUUsRUFBRSxZQUFZO1FBQ2hCQyxRQUFRLEVBQUUsV0FBVztLQUN4QjtJQUNEO1FBQ0lELEVBQUUsRUFBRSxVQUFVO1FBQ2RDLFFBQVEsRUFBRSxVQUFVO0tBQ3ZCO0lBQ0Q7UUFDSUQsRUFBRSxFQUFFLFlBQVk7UUFDaEJDLFFBQVEsRUFBRSxZQUFZO0tBQ3pCO0NBRUo7QUFFRCxJQUFNQyxPQUFPLEdBQUcsZ0JBQXNCO1FBQW5CRixFQUFFLFNBQUZBLEVBQUUsRUFBRUcsUUFBUSxTQUFSQSxRQUFRO0lBQzNCLHFCQUNJLDhEQUFDTixrREFBSTtRQUFDTyxJQUFJLEVBQUVKLEVBQUU7a0JBQUlHLFFBQVE7Ozs7O2FBQVMsQ0FDckM7Q0FDTDtBQUpLRCxLQUFBQSxPQUFPO0FBTWIsSUFBTUcsU0FBUyxHQUFHLGdCQUFxQjtRQUFuQkMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLE9BQU8sU0FBUEEsT0FBTztJQUM3QixxQkFBTyw2SUFBSztDQUNmO0FBRktGLE1BQUFBLFNBQVM7QUFJQSxTQUFTRyxNQUFNLEdBQUc7O0lBQzdCLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxNQUFNOzswQkFDakIsOERBQUNiLGtEQUFJO2dCQUFDTyxJQUFJLEVBQUMsR0FBRzswQkFDViw0RUFBQ08sR0FBQztvQkFBQ0QsU0FBUyxFQUFDLFNBQVM7OEJBQUMsTUFBSTs7Ozs7d0JBQUk7Ozs7O29CQUM1QjswQkFFUCw4REFBQ0UsS0FBRztnQkFBQ0YsU0FBUyxFQUFDLE1BQU07MEJBRWJYLGVBQWUsQ0FBQ2MsR0FBRyxDQUFDLGdCQUFpQkMsQ0FBQzt3QkFBaEJkLEVBQUUsU0FBRkEsRUFBRSxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7eUNBQzlCLDhEQUFDQyxPQUFPO3dCQUFTRixFQUFFLEVBQUVBLEVBQUU7a0NBQ25CLDRFQUFDVyxHQUFDOzRCQUFDRCxTQUFTLEVBQUMsZ0JBQWdCO3NDQUFFVCxRQUFROzs7OztpQ0FBSzt1QkFEbENhLENBQUM7Ozs7NkJBRUw7aUJBQ2IsQ0FBQzs7Ozs7b0JBRUo7Ozs7OztZQUdKLENBQ1Q7Q0FDSjtBQXBCdUJOLE1BQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanN4P2Y1M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgbmF2aWdhdGlvbkxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgdG86ICcvJyxcbiAgICAgICAgbGlua05hbWU6ICdIb21lJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0bzogJy9DTkMtUGFydHMnLFxuICAgICAgICBsaW5rTmFtZTogJ0NOQyBQYXJ0cydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdG86ICcvQWJvdXRVcycsXG4gICAgICAgIGxpbmtOYW1lOiAnQWJvdXQgVXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRvOiAnL0NvbnRhY3RVcycsXG4gICAgICAgIGxpbmtOYW1lOiAnQ29udGFjdCBVcydcbiAgICB9LFxuXG5dXG5cbmNvbnN0IE5hdkxpbmsgPSAoeyB0bywgY2hpbGRyZW4gfSApPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e3RvfT57IGNoaWxkcmVuIH08L0xpbms+XG4gICAgKTtcbn1cblxuY29uc3QgTW9iaWxlTmF2ID0gKHtvcGVuLCBzZXRPcGVufSkgPT4ge1xuICAgIHJldHVybiA8PjwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPkxPR088L3A+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25MaW5rcy5tYXAoKHt0bywgbGlua05hbWV9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBrZXk9e2l9IHRvPXt0b30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlcic+e2xpbmtOYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBcblxuICAgICAgICA8L25hdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIm5hdmlnYXRpb25MaW5rcyIsInRvIiwibGlua05hbWUiLCJOYXZMaW5rIiwiY2hpbGRyZW4iLCJocmVmIiwiTW9iaWxlTmF2Iiwib3BlbiIsInNldE9wZW4iLCJOYXZiYXIiLCJuYXYiLCJjbGFzc05hbWUiLCJwIiwiZGl2IiwibWFwIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.jsx\n"));

/***/ })

});