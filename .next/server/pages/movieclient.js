"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/movieclient";
exports.ids = ["pages/movieclient"];
exports.modules = {

/***/ "./pages/movieclient.js":
/*!******************************!*\
  !*** ./pages/movieclient.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);\nswr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nfunction Movies() {\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(`https://www.omdbapi.com/?apikey=6d17a1f&i=${query.id}`, fetcher);\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movieclient.js\",\n        lineNumber: 10,\n        columnNumber: 23\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movieclient.js\",\n        lineNumber: 12,\n        columnNumber: 23\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                data.Title,\n                \" --- \",\n                data.Year,\n                \" --- \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    style: {\n                        height: 200,\n                        marginLeft: 10\n                    },\n                    src: data.Poster\n                }, void 0, false, {\n                    fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movieclient.js\",\n                    lineNumber: 18,\n                    columnNumber: 51\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movieclient.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movieclient.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this));\n};\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZWNsaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ2Y7QUFFVCxRQUFRLENBQUNFLE1BQU0sR0FBRyxDQUFDO0lBRTlCLEtBQUssQ0FBQyxDQUFDLENBQUNDLEtBQUssRUFBQyxDQUFDLEdBQUdILHNEQUFTO0lBRTNCLEtBQUssQ0FBQyxDQUFDLENBQUNJLElBQUksR0FBRUMsS0FBSyxFQUFDLENBQUMsR0FBR0osK0NBQU0sRUFBRSwwQ0FBMEMsRUFBRUUsS0FBSyxDQUFDRyxFQUFFLElBQUlDLE9BQU87SUFFL0YsRUFBRSxFQUFFRixLQUFLLEVBQUUsTUFBTSw2RUFBRUcsQ0FBRztrQkFBQyxDQUFzQjs7Ozs7O0lBRTdDLEVBQUUsR0FBR0osSUFBSSxFQUFFLE1BQU0sNkVBQUVJLENBQUc7a0JBQUMsQ0FBYTs7Ozs7O0lBRXBDLE1BQU0sNkVBRURBLENBQUc7OEZBRUNBLENBQUc7O2dCQUFFSixJQUFJLENBQUNLLEtBQUs7Z0JBQUMsQ0FBSztnQkFBQ0wsSUFBSSxDQUFDTSxJQUFJO2dCQUFDLENBQUs7NEZBQUNDLENBQUc7b0JBQUNDLEtBQUssRUFBRSxDQUFDQzt3QkFBQUEsTUFBTSxFQUFFLEdBQUc7d0JBQUVDLFVBQVUsRUFBRSxFQUFFO29CQUFBLENBQUM7b0JBQUVDLEdBQUcsRUFBRVgsSUFBSSxDQUFDWSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs3RyxDQUFDO2VBR2NULE9BQU8sQ0FBQ1UsR0FBRyxFQUFFLENBQUM7SUFFekIsS0FBSyxDQUFDQyxHQUFHLEdBQUcsS0FBSyxDQUFDQyxLQUFLLENBQUNGLEdBQUc7SUFFM0IsS0FBSyxDQUFDRyxJQUFJLEdBQUcsS0FBSyxDQUFDRixHQUFHLENBQUNFLElBQUk7SUFFM0IsTUFBTSxDQUFDQSxJQUFJO0FBRWYsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQwLy4vcGFnZXMvbW92aWVjbGllbnQuanM/NWYzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoKSB7XG5cbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTZkMTdhMWYmaT0ke3F1ZXJ5LmlkfWAsIGZldGNoZXIpXG5cbiAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8Ojby4uLjwvZGl2PlxuXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDxkaXY+e2RhdGEuVGl0bGV9IC0tLSB7ZGF0YS5ZZWFyfSAtLS0gPGltZyBzdHlsZT17e2hlaWdodDogMjAwLCBtYXJnaW5MZWZ0OiAxMH19IHNyYz17ZGF0YS5Qb3N0ZXJ9IC8+PC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiBqc29uO1xuXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNXUiIsIk1vdmllcyIsInF1ZXJ5IiwiZGF0YSIsImVycm9yIiwiaWQiLCJmZXRjaGVyIiwiZGl2IiwiVGl0bGUiLCJZZWFyIiwiaW1nIiwic3R5bGUiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0Iiwic3JjIiwiUG9zdGVyIiwidXJsIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movieclient.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/movieclient.js"));
module.exports = __webpack_exports__;

})();