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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-collapse */ \"./node_modules/react-collapse/lib/index.js\");\n/* harmony import */ var react_collapse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_collapse__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar navigationLinks = [\n    {\n        to: \"/\",\n        linkName: \"Home\"\n    },\n    {\n        to: \"/CNC-Parts\",\n        linkName: \"CNC Parts\"\n    },\n    {\n        to: \"/AboutUs\",\n        linkName: \"About Us\"\n    },\n    {\n        to: \"/ContactUs\",\n        linkName: \"Contact Us\"\n    }, \n];\nvar NavLink = function(param) {\n    var to = param.to, children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: to,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, _this);\n};\n_c = NavLink;\nvar MobileNav = function(param) {\n    var open = param.open, setOpen = param.setOpen;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute top-0 left-0 h-screen w-screen bg-white transform \".concat(open ? \"translate-y-0\" : \"-translate-y-40\", \" transition-transform duration-300 ease-in-out filter drop-shadow-md \"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dev\", {\n            className: \"flex\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"cursor-pointer text-lg\",\n                        children: \"LOGO\"\n                    }, void 0, false, {\n                        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: navigationLinks.map(function(param, i) {\n                        var to = param.to, linkName = param.linkName;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                            to: to,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"cursor-pointer\",\n                                onClick: function() {\n                                    return setTimeout(function(open) {\n                                        return setOpen(!open);\n                                    }, 100);\n                                },\n                                children: linkName\n                            }, void 0, false, {\n                                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 33\n                            }, _this)\n                        }, i, false, {\n                            fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 29\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = MobileNav;\nfunction Navbar() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), open = ref[0], setOpen = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MobileNav, {\n                open: open,\n                setOpen: open\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"cursor-pointer w-3/12 flex items-center text-lg\",\n                    children: \"LOGO\"\n                }, void 0, false, {\n                    fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-9/12 flex justify-end items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden\",\n                        onClick: function() {\n                            setOpen(!open);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out \".concat(open ? \"rotate-45 translate-y-3.5\" : \"\")\n                            }, void 0, false, {\n                                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out \".concat(open ? \"w-0\" : \"w-full\")\n                            }, void 0, false, {\n                                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out \".concat(open ? \"-rotate-45 -translate-y-3.5\" : \"\")\n                            }, void 0, false, {\n                                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden md:flex md:space-x-7\",\n                        children: navigationLinks.map(function(param, i) {\n                            var to = param.to, linkName = param.linkName;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                                to: to,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"cursor-pointer\",\n                                    children: linkName\n                                }, void 0, false, {\n                                    fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 33\n                                }, _this)\n                            }, i, false, {\n                                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 29\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n};\n_s(Navbar, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c2 = Navbar;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c1, \"MobileNav\");\n$RefreshReg$(_c2, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE0QjtBQUNJO0FBQ1M7QUFFekMsSUFBTUcsZUFBZSxHQUFHO0lBQ3BCO1FBQ0lDLEVBQUUsRUFBRSxHQUFHO1FBQ1BDLFFBQVEsRUFBRSxNQUFNO0tBQ25CO0lBQ0Q7UUFDSUQsRUFBRSxFQUFFLFlBQVk7UUFDaEJDLFFBQVEsRUFBRSxXQUFXO0tBQ3hCO0lBQ0Q7UUFDSUQsRUFBRSxFQUFFLFVBQVU7UUFDZEMsUUFBUSxFQUFFLFVBQVU7S0FDdkI7SUFDRDtRQUNJRCxFQUFFLEVBQUUsWUFBWTtRQUNoQkMsUUFBUSxFQUFFLFlBQVk7S0FDekI7Q0FFSjtBQUVELElBQU1DLE9BQU8sR0FBRyxnQkFBc0I7UUFBbkJGLEVBQUUsU0FBRkEsRUFBRSxFQUFFRyxRQUFRLFNBQVJBLFFBQVE7SUFDM0IscUJBQ0ksOERBQUNQLGtEQUFJO1FBQUNRLElBQUksRUFBRUosRUFBRTtrQkFBSUcsUUFBUTs7Ozs7YUFBUyxDQUNyQztDQUNMO0FBSktELEtBQUFBLE9BQU87QUFNYixJQUFNRyxTQUFTLEdBQUcsZ0JBQXFCO1FBQW5CQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsT0FBTyxTQUFQQSxPQUFPO0lBQzdCLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRSw2REFBNEQsQ0FBNkMsTUFBcUUsQ0FBaEhILElBQUksR0FBRyxlQUFlLEdBQUcsaUJBQWlCLEVBQUMsdUVBQXFFLENBQUM7a0JBQzNMLDRFQUFDSSxLQUFHO1lBQUNELFNBQVMsRUFBQyxNQUFNOzs4QkFDakIsOERBQUNiLGtEQUFJO29CQUFDUSxJQUFJLEVBQUMsR0FBRzs4QkFDViw0RUFBQ08sR0FBQzt3QkFBQ0YsU0FBUyxFQUFDLHdCQUF3QjtrQ0FBQyxNQUFJOzs7Ozs2QkFBSTs7Ozs7eUJBQzNDOzhCQUVQLDhEQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsTUFBTTs4QkFFYlYsZUFBZSxDQUFDYSxHQUFHLENBQUMsZ0JBQW1CQyxDQUFDOzRCQUFqQmIsRUFBRSxTQUFGQSxFQUFFLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTs2Q0FDL0IsOERBQUNDLE9BQU87NEJBQVNGLEVBQUUsRUFBRUEsRUFBRTtzQ0FDbkIsNEVBQUNXLEdBQUM7Z0NBQUNGLFNBQVMsRUFBQyxnQkFBZ0I7Z0NBQUNLLE9BQU8sRUFBRTsyQ0FBTUMsVUFBVSxDQUFDVCxTQUFBQSxJQUFJOytDQUFJQyxPQUFPLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO3FDQUFBLEVBQUUsR0FBRyxDQUFDO2lDQUFBOzBDQUFHTCxRQUFROzs7OztxQ0FBSzsyQkFEMUZZLENBQUM7Ozs7aUNBRUw7cUJBQ2IsQ0FBQzs7Ozs7eUJBRUo7Ozs7OztpQkFFSjs7Ozs7YUFDSixDQUNUO0NBQ0o7QUFyQktSLE1BQUFBLFNBQVM7QUF1QkEsU0FBU1csTUFBTSxHQUFHOzs7SUFFN0IsSUFBeUJuQixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQWpDUyxJQUFJLEdBQWNULEdBQWUsR0FBN0IsRUFBRVUsT0FBTyxHQUFLVixHQUFlLEdBQXBCO0lBQ3BCLHFCQUNJLDhEQUFDb0IsS0FBRztRQUFDUixTQUFTLEVBQUMsaUVBQWlFOzswQkFDNUUsOERBQUNKLFNBQVM7Z0JBQUNDLElBQUksRUFBRUEsSUFBSTtnQkFBRUMsT0FBTyxFQUFFRCxJQUFJOzs7OztvQkFBSTswQkFDeEMsOERBQUNWLGtEQUFJO2dCQUFDUSxJQUFJLEVBQUMsR0FBRzswQkFDViw0RUFBQ08sR0FBQztvQkFBQ0YsU0FBUyxFQUFDLGlEQUFpRDs4QkFBQyxNQUFJOzs7Ozt3QkFBSTs7Ozs7b0JBQ3BFOzBCQUVQLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0NBQXNDOztrQ0FDakQsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw0RUFBNEU7d0JBQUNLLE9BQU8sRUFBRSxXQUFNOzRCQUNuR1AsT0FBTyxDQUFDLENBQUNELElBQUksQ0FBQzt5QkFDakI7OzBDQUVHLDhEQUFDWSxNQUFJO2dDQUFDVCxTQUFTLEVBQUUsK0VBQThFLENBQTBDLE9BQXhDSCxJQUFJLEdBQUcsMkJBQTJCLEdBQUcsRUFBRSxDQUFFOzs7OztvQ0FBSTswQ0FDOUksOERBQUNZLE1BQUk7Z0NBQUNULFNBQVMsRUFBRSx5RUFBd0UsQ0FBMEIsT0FBeEJILElBQUksR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFFOzs7OztvQ0FBSTswQ0FDeEgsOERBQUNZLE1BQUk7Z0NBQUNULFNBQVMsRUFBRSwrRUFBOEUsQ0FBNEMsT0FBMUNILElBQUksR0FBRyw2QkFBNkIsR0FBRyxFQUFFLENBQUU7Ozs7O29DQUFJOzs7Ozs7NEJBQ2xKO2tDQUVOLDhEQUFDRSxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsNkJBQTZCO2tDQUVwQ1YsZUFBZSxDQUFDYSxHQUFHLENBQUMsZ0JBQWlCQyxDQUFDO2dDQUFoQmIsRUFBRSxTQUFGQSxFQUFFLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTtpREFDOUIsOERBQUNDLE9BQU87Z0NBQVNGLEVBQUUsRUFBRUEsRUFBRTswQ0FDbkIsNEVBQUNXLEdBQUM7b0NBQUNGLFNBQVMsRUFBQyxnQkFBZ0I7OENBQUVSLFFBQVE7Ozs7O3lDQUFLOytCQURsQ1ksQ0FBQzs7OztxQ0FFTDt5QkFDYixDQUFDOzs7Ozs0QkFFSjs7Ozs7O29CQUVKOzs7Ozs7WUFJSixDQUNUO0NBQ0o7R0FwQ3VCRyxNQUFNO0FBQU5BLE1BQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanN4P2Y1M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbGxhcHNlIH0gZnJvbSAncmVhY3QtY29sbGFwc2UnXG5cbmNvbnN0IG5hdmlnYXRpb25MaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIHRvOiAnLycsXG4gICAgICAgIGxpbmtOYW1lOiAnSG9tZSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdG86ICcvQ05DLVBhcnRzJyxcbiAgICAgICAgbGlua05hbWU6ICdDTkMgUGFydHMnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRvOiAnL0Fib3V0VXMnLFxuICAgICAgICBsaW5rTmFtZTogJ0Fib3V0IFVzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0bzogJy9Db250YWN0VXMnLFxuICAgICAgICBsaW5rTmFtZTogJ0NvbnRhY3QgVXMnXG4gICAgfSxcblxuXVxuXG5jb25zdCBOYXZMaW5rID0gKHsgdG8sIGNoaWxkcmVuIH0gKT0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXt0b30+eyBjaGlsZHJlbiB9PC9MaW5rPlxuICAgICk7XG59XG5cbmNvbnN0IE1vYmlsZU5hdiA9ICh7b3Blbiwgc2V0T3Blbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFic29sdXRlIHRvcC0wIGxlZnQtMCBoLXNjcmVlbiB3LXNjcmVlbiBiZy13aGl0ZSB0cmFuc2Zvcm0gJHtvcGVuID8gXCJ0cmFuc2xhdGUteS0wXCIgOiBcIi10cmFuc2xhdGUteS00MFwifSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZmlsdGVyIGRyb3Atc2hhZG93LW1kIGB9PlxuICAgICAgICAgICAgPGRldiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtbGdcIj5MT0dPPC9wPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uTGlua3MubWFwKCh7IHRvLCBsaW5rTmFtZSB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsga2V5PXtpfSB0bz17dG99PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJyBvbkNsaWNrPXsoKSA9PiBzZXRUaW1lb3V0KG9wZW4gPT4gc2V0T3Blbighb3BlbiksIDEwMCl9PntsaW5rTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kZXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW4gXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPSdmbGV4IGZpbHRlciBkcm9wLXNoYWRvdy1tZCBiZy13aGl0ZSBweC00IHB5LTQgaC0yMCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPE1vYmlsZU5hdiBvcGVuPXtvcGVufSBzZXRPcGVuPXtvcGVufSAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdy0zLzEyIGZsZXggaXRlbXMtY2VudGVyIHRleHQtbGdcIj5MT0dPPC9wPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy05LzEyIGZsZXgganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotNTAgZmxleCByZWxhdGl2ZSB3LTggaC04IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWQ6aGlkZGVuXCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3Blbighb3BlbilcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogaGFtYnVyZ2VyIGJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGgtMSB3LWZ1bGwgYmctYmxhY2sgcm91bmRlZC1sZyB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHtvcGVuID8gXCJyb3RhdGUtNDUgdHJhbnNsYXRlLXktMy41XCIgOiBcIlwifWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoLTEgdy1mdWxsIGJnLWJsYWNrIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7b3BlbiA/IFwidy0wXCIgOiBcInctZnVsbFwifWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoLTEgdy1mdWxsIGJnLWJsYWNrIHJvdW5kZWQtbGcgdHJhbnNmb3JtIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7b3BlbiA/IFwiLXJvdGF0ZS00NSAtdHJhbnNsYXRlLXktMy41XCIgOiBcIlwifWB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZGVuIG1kOmZsZXggbWQ6c3BhY2UteC03Jz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbkxpbmtzLm1hcCgoe3RvLCBsaW5rTmFtZX0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBrZXk9e2l9IHRvPXt0b30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXInPntsaW5rTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgIFxuXG4gICAgICAgIDwvbmF2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwiQ29sbGFwc2UiLCJuYXZpZ2F0aW9uTGlua3MiLCJ0byIsImxpbmtOYW1lIiwiTmF2TGluayIsImNoaWxkcmVuIiwiaHJlZiIsIk1vYmlsZU5hdiIsIm9wZW4iLCJzZXRPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGV2IiwicCIsIm1hcCIsImkiLCJvbkNsaWNrIiwic2V0VGltZW91dCIsIk5hdmJhciIsIm5hdiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.jsx\n"));

/***/ })

});