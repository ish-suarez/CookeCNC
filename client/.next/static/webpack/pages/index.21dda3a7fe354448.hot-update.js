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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-collapse */ \"./node_modules/react-collapse/lib/index.js\");\n/* harmony import */ var react_collapse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_collapse__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar navigationLinks = [\n    {\n        to: \"/\",\n        linkName: \"Home\"\n    },\n    {\n        to: \"/CNC-Parts\",\n        linkName: \"CNC Parts\"\n    },\n    {\n        to: \"/AboutUs\",\n        linkName: \"About Us\"\n    },\n    {\n        to: \"/ContactUs\",\n        linkName: \"Contact Us\"\n    }, \n];\nvar NavLink = function(param) {\n    var to = param.to, children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: to,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, _this);\n};\n_c = NavLink;\nvar MobileNav = function(param) {\n    var open = param.open, setOpen = param.setOpen;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute top-0 left-0 h-screen w-screen bg-white transform \".concat(open ? \"-translate-y-full\" : \"translate-y-full\", \" transition-transform duration-300 ease-in-out filter drop-shadow-md \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dev\", {\n            className: \"flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"cursor-pointer text-lg\",\n                        children: \"LOGO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: navigationLinks.map(function(param, i) {\n                        var to = param.to, linkName = param.linkName;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                            to: to,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"cursor-pointer\",\n                                onClick: function() {\n                                    return setTimeout(function(open) {\n                                        return setOpen(!open);\n                                    }, 100);\n                                },\n                                children: linkName\n                            }, void 0, false, {\n                                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 33\n                            }, _this)\n                        }, i, false, {\n                            fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 29\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = MobileNav;\nfunction Navbar() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), open = ref[0], setOpen = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MobileNav, {\n                open: open,\n                setOpen: open\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"cursor-pointer w-3/12 flex items-center text-lg\",\n                    children: \"LOGO\"\n                }, void 0, false, {\n                    fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-9/12 flex justify-end items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden\",\n                        onClick: function() {\n                            setOpen(!open);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out \".concat(open ? \"rotate-45 translate-y-3.5\" : \"\")\n                            }, void 0, false, {\n                                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out \".concat(open ? \"w-0\" : \"w-full\")\n                            }, void 0, false, {\n                                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out \".concat(open ? \"-rotate-45 -translate-y-3.5\" : \"\")\n                            }, void 0, false, {\n                                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:flex md:space-x-7\",\n                        children: navigationLinks.map(function(param, i) {\n                            var to = param.to, linkName = param.linkName;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                to: to,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cursor-pointer\",\n                                    children: linkName\n                                }, void 0, false, {\n                                    fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 33\n                                }, _this)\n                            }, i, false, {\n                                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 29\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n};\n_s(Navbar, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c2 = Navbar;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c1, \"MobileNav\");\n$RefreshReg$(_c2, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUcsOERBQUNZLE1BQUk7Z0NBQUNULFNBQVMsRUFBRSwrRUFBOEUsQ0FBMEMsT0FBeENILElBQUksR0FBRywyQkFBMkIsR0FBRyxFQUFFLENBQUU7Ozs7O29DQUFJOzBDQUM5SSw4REFBQ1ksTUFBSTtnQ0FBQ1QsU0FBUyxFQUFFLHlFQUF3RSxDQUEwQixPQUF4QkgsSUFBSSxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUU7Ozs7O29DQUFJOzBDQUN4SCw4REFBQ1ksTUFBSTtnQ0FBQ1QsU0FBUyxFQUFFLCtFQUE4RSxDQUE0QyxPQUExQ0gsSUFBSSxHQUFHLDZCQUE2QixHQUFHLEVBQUUsQ0FBRTs7Ozs7b0NBQUk7Ozs7Ozs0QkFDbEo7a0NBRU4sOERBQUNFLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw2QkFBNkI7a0NBRXBDVixlQUFlLENBQUNhLEdBQUcsQ0FBQyxnQkFBaUJDLENBQUM7Z0NBQWhCYixFQUFFLFNBQUZBLEVBQUUsRUFBRUMsUUFBUSxTQUFSQSxRQUFRO2lEQUM5Qiw4REFBQ0MsT0FBTztnQ0FBU0YsRUFBRSxFQUFFQSxFQUFFOzBDQUNuQiw0RUFBQ1csR0FBQztvQ0FBQ0YsU0FBUyxFQUFDLGdCQUFnQjs4Q0FBRVIsUUFBUTs7Ozs7eUNBQUs7K0JBRGxDWSxDQUFDOzs7O3FDQUVMO3lCQUNiLENBQUM7Ozs7OzRCQUVKOzs7Ozs7b0JBRUo7Ozs7OztZQUlKLENBQ1Q7Q0FDSjtHQXBDdUJHLE1BQU07QUFBTkEsTUFBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qc3g/ZjUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29sbGFwc2UgfSBmcm9tICdyZWFjdC1jb2xsYXBzZSdcblxuY29uc3QgbmF2aWdhdGlvbkxpbmtzID0gW1xuICAgIHtcbiAgICAgICAgdG86ICcvJyxcbiAgICAgICAgbGlua05hbWU6ICdIb21lJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0bzogJy9DTkMtUGFydHMnLFxuICAgICAgICBsaW5rTmFtZTogJ0NOQyBQYXJ0cydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdG86ICcvQWJvdXRVcycsXG4gICAgICAgIGxpbmtOYW1lOiAnQWJvdXQgVXMnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRvOiAnL0NvbnRhY3RVcycsXG4gICAgICAgIGxpbmtOYW1lOiAnQ29udGFjdCBVcydcbiAgICB9LFxuXG5dXG5cbmNvbnN0IE5hdkxpbmsgPSAoeyB0bywgY2hpbGRyZW4gfSApPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIGhyZWY9e3RvfT57IGNoaWxkcmVuIH08L0xpbms+XG4gICAgKTtcbn1cblxuY29uc3QgTW9iaWxlTmF2ID0gKHtvcGVuLCBzZXRPcGVufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtc2NyZWVuIHctc2NyZWVuIGJnLXdoaXRlIHRyYW5zZm9ybSAke29wZW4gPyBcIi10cmFuc2xhdGUteS1mdWxsXCIgOiBcInRyYW5zbGF0ZS15LWZ1bGxcIn0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGZpbHRlciBkcm9wLXNoYWRvdy1tZCBgfT5cbiAgICAgICAgICAgIDxkZXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWxnXCI+TE9HTzwvcD5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbkxpbmtzLm1hcCgoeyB0bywgbGlua05hbWUgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17aX0gdG89e3RvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlcicgb25DbGljaz17KCkgPT4gc2V0VGltZW91dChvcGVuID0+IHNldE9wZW4oIW9wZW4pLCAxMDApfT57bGlua05hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGV2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcblxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuIF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT0nZmxleCBmaWx0ZXIgZHJvcC1zaGFkb3ctbWQgYmctd2hpdGUgcHgtNCBweS00IGgtMjAgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIDxNb2JpbGVOYXYgb3Blbj17b3Blbn0gc2V0T3Blbj17b3Blbn0gLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHctMy8xMiBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWxnXCI+TE9HTzwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctOS8xMiBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTUwIGZsZXggcmVsYXRpdmUgdy04IGgtOCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1kOmhpZGRlblwiIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE9wZW4oIW9wZW4pXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGhhbWJ1cmdlciBidXR0b24gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoLTEgdy1mdWxsIGJnLWJsYWNrIHJvdW5kZWQtbGcgdHJhbnNmb3JtIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7b3BlbiA/IFwicm90YXRlLTQ1IHRyYW5zbGF0ZS15LTMuNVwiIDogXCJcIn1gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaC0xIHctZnVsbCBiZy1ibGFjayByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCAke29wZW4gPyBcInctMFwiIDogXCJ3LWZ1bGxcIn1gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaC0xIHctZnVsbCBiZy1ibGFjayByb3VuZGVkLWxnIHRyYW5zZm9ybSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCAke29wZW4gPyBcIi1yb3RhdGUtNDUgLXRyYW5zbGF0ZS15LTMuNVwiIDogXCJcIn1gfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hpZGRlbiBtZDpmbGV4IG1kOnNwYWNlLXgtNyc+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25MaW5rcy5tYXAoKHt0bywgbGlua05hbWV9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsga2V5PXtpfSB0bz17dG99PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJz57bGlua05hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICBcblxuICAgICAgICA8L25hdj5cbiAgICApXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsIkNvbGxhcHNlIiwibmF2aWdhdGlvbkxpbmtzIiwidG8iLCJsaW5rTmFtZSIsIk5hdkxpbmsiLCJjaGlsZHJlbiIsImhyZWYiLCJNb2JpbGVOYXYiLCJvcGVuIiwic2V0T3BlbiIsImRpdiIsImNsYXNzTmFtZSIsImRldiIsInAiLCJtYXAiLCJpIiwib25DbGljayIsInNldFRpbWVvdXQiLCJOYXZiYXIiLCJuYXYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.jsx\n"));

/***/ })

});