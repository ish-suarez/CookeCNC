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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar navigationLinks = [\n    {\n        to: \"/\",\n        linkName: \"Home\"\n    },\n    {\n        to: \"/CNC-Parts\",\n        linkName: \"CNC Parts\"\n    },\n    {\n        to: \"/AboutUs\",\n        linkName: \"About Us\"\n    },\n    {\n        to: \"/ContactUs\",\n        linkName: \"Contact Us\"\n    }, \n];\nvar NavLink = function(param) {\n    var to = param.to, children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: to,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, _this);\n};\n_c = NavLink;\nvar MobileNav = function(param) {\n    var open = param.open, setOpen = param.setOpen;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute top-0 left-0 h-screen w-screen bg-white transform \".concat(open ? \"-translate-x-0\" : \"-translate-x-full\", \" transition-transform duration-300 ease-in-out filter drop-shadow-md \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"cursor-pointer text-lg\",\n                    children: \"LOGO\"\n                }, void 0, false, {\n                    fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dev\", {\n                className: \"flex\",\n                children: navigationLinks.map(function(param, i) {\n                    var to = param.to, linkName = param.linkName;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                        to: to,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"cursor-pointer\",\n                            onClick: function() {\n                                return setTimeout(function(open) {\n                                    return setOpen(!open);\n                                }, 100);\n                            },\n                            children: linkName\n                        }, void 0, false, {\n                            fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 29\n                        }, _this)\n                    }, i, false, {\n                        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, _this);\n};\n_c1 = MobileNav;\nfunction Navbar() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), open = ref[0], setOpen = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MobileNav, {\n                open: open,\n                setOpen: open\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"cursor-pointer text-lg\",\n                    children: \"LOGO\"\n                }, void 0, false, {\n                    fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden\",\n                onClick: function() {\n                    setOpen(!open);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out \".concat(open ? \"rotate-45 translate-y-3.5\" : \"\")\n                    }, void 0, false, {\n                        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out \".concat(open ? \"w-0\" : \"w-full\")\n                    }, void 0, false, {\n                        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out \".concat(open ? \"-rotate-45 -translate-y-3.5\" : \"\")\n                    }, void 0, false, {\n                        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:flex\",\n                children: navigationLinks.map(function(param, i) {\n                    var to = param.to, linkName = param.linkName;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLink, {\n                        to: to,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"cursor-pointer\",\n                            children: linkName\n                        }, void 0, false, {\n                            fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 29\n                        }, _this)\n                    }, i, false, {\n                        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/spawn/dev/CookeCNC/client/components/navbar.jsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n};\n_s(Navbar, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c2 = Navbar;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"NavLink\");\n$RefreshReg$(_c1, \"MobileNav\");\n$RefreshReg$(_c2, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDWSxNQUFJO3dCQUFDVCxTQUFTLEVBQUUseUVBQXdFLENBQTBCLE9BQXhCSCxJQUFJLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBRTs7Ozs7NEJBQUk7a0NBQ3hILDhEQUFDWSxNQUFJO3dCQUFDVCxTQUFTLEVBQUUsK0VBQThFLENBQTRDLE9BQTFDSCxJQUFJLEdBQUcsNkJBQTZCLEdBQUcsRUFBRSxDQUFFOzs7Ozs0QkFBSTs7Ozs7O29CQUNsSjswQkFFTiw4REFBQ0UsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGdCQUFnQjswQkFFdkJWLGVBQWUsQ0FBQ2EsR0FBRyxDQUFDLGdCQUFpQkMsQ0FBQzt3QkFBaEJiLEVBQUUsU0FBRkEsRUFBRSxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7eUNBQzlCLDhEQUFDQyxPQUFPO3dCQUFTRixFQUFFLEVBQUVBLEVBQUU7a0NBQ25CLDRFQUFDVSxHQUFDOzRCQUFDRCxTQUFTLEVBQUMsZ0JBQWdCO3NDQUFFUixRQUFROzs7OztpQ0FBSzt1QkFEbENZLENBQUM7Ozs7NkJBRUw7aUJBQ2IsQ0FBQzs7Ozs7b0JBRUo7Ozs7OztZQUdKLENBQ1Q7Q0FDSjtHQWhDdUJHLE1BQU07QUFBTkEsTUFBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qc3g/ZjUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBuYXZpZ2F0aW9uTGlua3MgPSBbXG4gICAge1xuICAgICAgICB0bzogJy8nLFxuICAgICAgICBsaW5rTmFtZTogJ0hvbWUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRvOiAnL0NOQy1QYXJ0cycsXG4gICAgICAgIGxpbmtOYW1lOiAnQ05DIFBhcnRzJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0bzogJy9BYm91dFVzJyxcbiAgICAgICAgbGlua05hbWU6ICdBYm91dCBVcydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdG86ICcvQ29udGFjdFVzJyxcbiAgICAgICAgbGlua05hbWU6ICdDb250YWN0IFVzJ1xuICAgIH0sXG5cbl1cblxuY29uc3QgTmF2TGluayA9ICh7IHRvLCBjaGlsZHJlbiB9ICk9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17dG99PnsgY2hpbGRyZW4gfTwvTGluaz5cbiAgICApO1xufVxuXG5jb25zdCBNb2JpbGVOYXYgPSAoe29wZW4sIHNldE9wZW59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC1zY3JlZW4gdy1zY3JlZW4gYmctd2hpdGUgdHJhbnNmb3JtICR7b3BlbiA/IFwiLXRyYW5zbGF0ZS14LTBcIiA6IFwiLXRyYW5zbGF0ZS14LWZ1bGxcIn0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGZpbHRlciBkcm9wLXNoYWRvdy1tZCBgfT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1sZ1wiPkxPR088L3A+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxkZXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbkxpbmtzLm1hcCgoeyB0bywgbGlua05hbWUgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsga2V5PXtpfSB0bz17dG99PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IHNldFRpbWVvdXQob3BlbiA9PiBzZXRPcGVuKCFvcGVuKSwgMTAwKX0+e2xpbmtOYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rldj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG5cbiAgICBjb25zdCBbb3Blbiwgc2V0T3BlbiBdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgPE1vYmlsZU5hdiBvcGVuPXtvcGVufSBzZXRPcGVuPXtvcGVufSAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1sZ1wiPkxPR088L3A+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei01MCBmbGV4IHJlbGF0aXZlIHctOCBoLTggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtZDpoaWRkZW5cIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldE9wZW4oIW9wZW4pXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBoYW1idXJnZXIgYnV0dG9uICovfVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoLTEgdy1mdWxsIGJnLWJsYWNrIHJvdW5kZWQtbGcgdHJhbnNmb3JtIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7b3BlbiA/IFwicm90YXRlLTQ1IHRyYW5zbGF0ZS15LTMuNVwiIDogXCJcIn1gfSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BoLTEgdy1mdWxsIGJnLWJsYWNrIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7b3BlbiA/IFwidy0wXCIgOiBcInctZnVsbFwifWB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGgtMSB3LWZ1bGwgYmctYmxhY2sgcm91bmRlZC1sZyB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgJHtvcGVuID8gXCItcm90YXRlLTQ1IC10cmFuc2xhdGUteS0zLjVcIiA6IFwiXCJ9YH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZGVuIG1kOmZsZXgnPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbkxpbmtzLm1hcCgoe3RvLCBsaW5rTmFtZX0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGtleT17aX0gdG89e3RvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyJz57bGlua05hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuXG4gICAgICAgIDwvbmF2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwibmF2aWdhdGlvbkxpbmtzIiwidG8iLCJsaW5rTmFtZSIsIk5hdkxpbmsiLCJjaGlsZHJlbiIsImhyZWYiLCJNb2JpbGVOYXYiLCJvcGVuIiwic2V0T3BlbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJkZXYiLCJtYXAiLCJpIiwib25DbGljayIsInNldFRpbWVvdXQiLCJOYXZiYXIiLCJuYXYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.jsx\n"));

/***/ })

});