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
exports.id = "pages/movies3";
exports.ids = ["pages/movies3"];
exports.modules = {

/***/ "./pages/movies3.js":
/*!**************************!*\
  !*** ./pages/movies3.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies3),\n/* harmony export */   \"TheMovies\": () => (/* binding */ TheMovies),\n/* harmony export */   \"TheMovie\": () => (/* binding */ TheMovie),\n/* harmony export */   \"TheLink\": () => (/* binding */ TheLink)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nfunction Movies3() {\n    const { 0: url1 , 1: setUrl1  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const { 0: url2 , 1: setUrl2  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const { 0: url3 , 1: setUrl3  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const result1 = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url1, theFetcher);\n    const result2 = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url2, theFetcher);\n    const result3 = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url3, theFetcher);\n    const { 0: input1 , 1: setInput1  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const { 0: input2 , 1: setInput2  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const { 0: input3 , 1: setInput3  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const onClickHandler1 = (e)=>{\n        e.preventDefault();\n        if (url1 === '') setUrl1(`https://www.omdbapi.com/?apikey=6d17a1f&s=${input1}`);\n        else setUrl1('');\n    };\n    const onClickHandler2 = (e)=>{\n        e.preventDefault();\n        if (url2 === '') setUrl2(`https://www.omdbapi.com/?apikey=6d17a1f&s=${input2}`);\n        else setUrl2('');\n    };\n    const onClickHandler3 = (e)=>{\n        e.preventDefault();\n        if (url3 === '') setUrl3(`https://www.omdbapi.com/?apikey=6d17a1f&s=${input3}`);\n        else setUrl3('');\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: 30\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Digite o nome do filme\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"filme1\",\n                        style: {\n                            marginBottom: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            margin: 10\n                        },\n                        onClick: ()=>setInput1(document.getElementById(\"filme1\").value)\n                        ,\n                        children: \"REQUISITAR\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheLink, {\n                url: url1,\n                handler: onClickHandler1\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: result1.error ? {\n                    error: 'Erro na pesquisa'\n                } : result1.data ? result1.data : {\n                    Search: ''\n                },\n                show: url1 !== ''\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: 30\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Digite o nome do filme\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"filme2\",\n                        style: {\n                            marginBottom: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            margin: 10\n                        },\n                        onClick: ()=>setInput2(document.getElementById(\"filme2\").value)\n                        ,\n                        children: \"REQUISITAR\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheLink, {\n                url: url2,\n                handler: onClickHandler2\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: result2.error ? {\n                    error: 'Erro na pesquisa'\n                } : result2.data ? result2.data : {\n                    Search: ''\n                },\n                show: url2 !== ''\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: 30\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Digite o nome do filme\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"filme3\",\n                        style: {\n                            marginBottom: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            margin: 10\n                        },\n                        onClick: ()=>setInput3(document.getElementById(\"filme3\").value)\n                        ,\n                        children: \"REQUISITAR\"\n                    }, void 0, false, {\n                        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheLink, {\n                url: url3,\n                handler: onClickHandler3\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: result3.error ? {\n                    error: 'Erro na pesquisa'\n                } : result3.data ? result3.data : {\n                    Search: ''\n                },\n                show: url3 !== ''\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this));\n};\nfunction TheMovies({ data , show  }) {\n    if (!data.Search) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n        lineNumber: 87,\n        columnNumber: 31\n    }, this));\n    if (!show) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n        lineNumber: 89,\n        columnNumber: 24\n    }, this));\n    if (data.error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n        lineNumber: 91,\n        columnNumber: 29\n    }, this));\n    if (data.Search === '') return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n        lineNumber: 93,\n        columnNumber: 37\n    }, this));\n    //////////////////////////////////////////////\n    const { 0: urlMovie , 1: setUrlMovie  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const movie = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(urlMovie, theFetcher);\n    const showMovie = (imdbID)=>{\n        setUrlMovie(`https://www.omdbapi.com/?apikey=6d17a1f&i=${imdbID}`);\n    };\n    //////////////////////////////////////////////   \n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    margin: 100\n                },\n                children: movie.data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovie, {\n                    data: movie.data,\n                    error: movie.error\n                }, void 0, false, {\n                    fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                    lineNumber: 112,\n                    columnNumber: 56\n                }, this) : ''\n            }, void 0, false, {\n                fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, this),\n            data.Search.map((m, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                cursor: 'pointer'\n                            },\n                            onClick: ()=>{\n                                window.location.href = \"/movieclient?id=\" + m.imdbID;\n                            },\n                            children: [\n                                m.Title,\n                                \" --- \",\n                                m.Year,\n                                \" ---\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                            lineNumber: 115,\n                            columnNumber: 30\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>showMovie(m.imdbID)\n                            ,\n                            style: {\n                                marginBottom: 50,\n                                cursor: 'pointer'\n                            },\n                            children: \"MOSTRAR\"\n                        }, void 0, false, {\n                            fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                            lineNumber: 117,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, i, true, {\n                    fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                    lineNumber: 115,\n                    columnNumber: 17\n                }, this)\n            )\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n        lineNumber: 110,\n        columnNumber: 9\n    }, this));\n}\nfunction TheMovie({ data , error  }) {\n    if (error) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n        lineNumber: 129,\n        columnNumber: 23\n    }, this));\n    if (!data) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n        lineNumber: 131,\n        columnNumber: 23\n    }, this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                data.Title,\n                \" --- \",\n                data.Year,\n                \" --- \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    style: {\n                        height: 200,\n                        marginLeft: 10\n                    },\n                    src: data.Poster\n                }, void 0, false, {\n                    fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n                    lineNumber: 137,\n                    columnNumber: 51\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n            lineNumber: 137,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n        lineNumber: 135,\n        columnNumber: 9\n    }, this));\n}\nfunction TheLink({ url , handler  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/movies3.js\",\n            onClick: handler,\n            children: [\n                \" \",\n                url === '' ? 'Mostrar' : 'Ocultar',\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n            lineNumber: 150,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/arthur/Documents/2021.2/PROGRAMA\\xc7\\xc3O WEB/3 unidade/next5/pages/movies3.js\",\n        lineNumber: 148,\n        columnNumber: 9\n    }, this));\n}\nasync function theFetcher(url) {\n    if (url === null || url === '') return {\n        Search: ''\n    };\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dDAvLi9wYWdlcy9tb3ZpZXMzLmpzPzdhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllczMoKSB7XG5cbiAgICBjb25zdCBbdXJsMSwgc2V0VXJsMV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbdXJsMiwgc2V0VXJsMl0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbdXJsMywgc2V0VXJsM10gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IHJlc3VsdDEgPSB1c2VTV1IodXJsMSwgdGhlRmV0Y2hlcilcbiAgICBjb25zdCByZXN1bHQyID0gdXNlU1dSKHVybDIsIHRoZUZldGNoZXIpXG4gICAgY29uc3QgcmVzdWx0MyA9IHVzZVNXUih1cmwzLCB0aGVGZXRjaGVyKVxuXG5cbiAgICBjb25zdCBbaW5wdXQxLCBzZXRJbnB1dDFdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2lucHV0Miwgc2V0SW5wdXQyXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtpbnB1dDMsIHNldElucHV0M10gPSB1c2VTdGF0ZSgnJylcblxuXG4gICAgY29uc3Qgb25DbGlja0hhbmRsZXIxID0gKGUpID0+IHtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICBpZiAodXJsMSA9PT0gJycpIHNldFVybDEoYGh0dHBzOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9NmQxN2ExZiZzPSR7aW5wdXQxfWApXG5cbiAgICAgICAgZWxzZSBzZXRVcmwxKCcnKVxuICAgIH1cblxuICAgIGNvbnN0IG9uQ2xpY2tIYW5kbGVyMiA9IChlKSA9PiB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgaWYgKHVybDIgPT09ICcnKSBzZXRVcmwyKGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTZkMTdhMWYmcz0ke2lucHV0Mn1gKVxuXG4gICAgICAgIGVsc2Ugc2V0VXJsMignJylcbiAgICB9XG5cbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlcjMgPSAoZSkgPT4ge1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGlmICh1cmwzID09PSAnJykgc2V0VXJsMyhgaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT02ZDE3YTFmJnM9JHtpbnB1dDN9YClcblxuICAgICAgICBlbHNlIHNldFVybDMoJycpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzAgfX0+XG4gICAgICAgICAgICAgICAgPGg0PkRpZ2l0ZSBvIG5vbWUgZG8gZmlsbWU8L2g0PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlsbWUxXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT48L2lucHV0PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IDEwIH19IG9uQ2xpY2s9eygpID0+IHNldElucHV0MShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbG1lMVwiKS52YWx1ZSl9PlJFUVVJU0lUQVI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFRoZUxpbmsgdXJsPXt1cmwxfSBoYW5kbGVyPXtvbkNsaWNrSGFuZGxlcjF9IC8+XG4gICAgICAgICAgICA8VGhlTW92aWVzIGRhdGE9e3Jlc3VsdDEuZXJyb3IgPyB7IGVycm9yOiAnRXJybyBuYSBwZXNxdWlzYScgfSA6IHJlc3VsdDEuZGF0YSA/IHJlc3VsdDEuZGF0YSA6IHsgU2VhcmNoOiAnJyB9fSBzaG93PXt1cmwxICE9PSAnJ30gLz5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMwIH19PlxuICAgICAgICAgICAgICAgIDxoND5EaWdpdGUgbyBub21lIGRvIGZpbG1lPC9oND5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZpbG1lMlwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+PC9pbnB1dD5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgbWFyZ2luOiAxMCB9fSBvbkNsaWNrPXsoKSA9PiBzZXRJbnB1dDIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxtZTJcIikudmFsdWUpfT5SRVFVSVNJVEFSPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxUaGVMaW5rIHVybD17dXJsMn0gaGFuZGxlcj17b25DbGlja0hhbmRsZXIyfSAvPlxuICAgICAgICAgICAgPFRoZU1vdmllcyBkYXRhPXtyZXN1bHQyLmVycm9yID8geyBlcnJvcjogJ0Vycm8gbmEgcGVzcXVpc2EnIH0gOiByZXN1bHQyLmRhdGEgPyByZXN1bHQyLmRhdGEgOiB7IFNlYXJjaDogJycgfX0gc2hvdz17dXJsMiAhPT0gJyd9IC8+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzMCB9fT5cbiAgICAgICAgICAgICAgICA8aDQ+RGlnaXRlIG8gbm9tZSBkbyBmaWxtZTwvaDQ+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaWxtZTNcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19PjwvaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0gb25DbGljaz17KCkgPT4gc2V0SW5wdXQzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsbWUzXCIpLnZhbHVlKX0+UkVRVUlTSVRBUjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8VGhlTGluayB1cmw9e3VybDN9IGhhbmRsZXI9e29uQ2xpY2tIYW5kbGVyM30gLz5cbiAgICAgICAgICAgIDxUaGVNb3ZpZXMgZGF0YT17cmVzdWx0My5lcnJvciA/IHsgZXJyb3I6ICdFcnJvIG5hIHBlc3F1aXNhJyB9IDogcmVzdWx0My5kYXRhID8gcmVzdWx0My5kYXRhIDogeyBTZWFyY2g6ICcnIH19IHNob3c9e3VybDMgIT09ICcnfSAvPlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBUaGVNb3ZpZXMoeyBkYXRhLCBzaG93IH0pIHtcblxuICAgIGlmICghZGF0YS5TZWFyY2gpIHJldHVybiAoPGRpdj48L2Rpdj4pXG5cbiAgICBpZiAoIXNob3cpIHJldHVybiAoPGRpdj48L2Rpdj4pXG5cbiAgICBpZiAoZGF0YS5lcnJvcikgcmV0dXJuICg8ZGl2PmZhbGhhIG5hIHJlcXVpc2nDp8OjbzwvZGl2PilcblxuICAgIGlmIChkYXRhLlNlYXJjaCA9PT0gJycpIHJldHVybiAoPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+KVxuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICBjb25zdCBbdXJsTW92aWUsIHNldFVybE1vdmllXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgbW92aWUgPSB1c2VTV1IodXJsTW92aWUsIHRoZUZldGNoZXIpXG5cbiAgICBjb25zdCBzaG93TW92aWUgPSAoaW1kYklEKSA9PiB7XG4gICAgICAgIHNldFVybE1vdmllKGBodHRwczovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTZkMTdhMWYmaT0ke2ltZGJJRH1gKVxuICAgIH1cblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gICBcblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IDEwMCB9fT57bW92aWUuZGF0YSA/IDxUaGVNb3ZpZSBkYXRhPXttb3ZpZS5kYXRhfSBlcnJvcj17bW92aWUuZXJyb3J9IC8+IDogJyd9PC9kaXY+XG5cbiAgICAgICAgICAgIHtkYXRhLlNlYXJjaC5tYXAoKG0sIGkpID0+XG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PjxkaXYgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gb25DbGljaz17KCkgPT4geyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL21vdmllY2xpZW50P2lkPVwiICsgbS5pbWRiSUQgfX0+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfSAtLS1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaG93TW92aWUobS5pbWRiSUQpfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDUwLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5NT1NUUkFSPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUaGVNb3ZpZSh7IGRhdGEsIGVycm9yIH0pIHtcblxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XG5cbiAgICBpZiAoIWRhdGEpIHJldHVybiA8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj5cblxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgPGRpdj57ZGF0YS5UaXRsZX0gLS0tIHtkYXRhLlllYXJ9IC0tLSA8aW1nIHN0eWxlPXt7IGhlaWdodDogMjAwLCBtYXJnaW5MZWZ0OiAxMCB9fSBzcmM9e2RhdGEuUG9zdGVyfSAvPjwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVGhlTGluayh7IHVybCwgaGFuZGxlciB9KSB7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvbW92aWVzMy5qc1wiIG9uQ2xpY2s9e2hhbmRsZXJ9PiB7dXJsID09PSAnJyA/ICdNb3N0cmFyJyA6ICdPY3VsdGFyJ30gPC9hPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5hc3luYyBmdW5jdGlvbiB0aGVGZXRjaGVyKHVybCkge1xuXG4gICAgaWYgKHVybCA9PT0gbnVsbCB8fCB1cmwgPT09ICcnKSByZXR1cm4geyBTZWFyY2g6ICcnIH1cblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiBqc29uO1xuXG59Il0sIm5hbWVzIjpbInVzZVNXUiIsInVzZVN0YXRlIiwiTW92aWVzMyIsInVybDEiLCJzZXRVcmwxIiwidXJsMiIsInNldFVybDIiLCJ1cmwzIiwic2V0VXJsMyIsInJlc3VsdDEiLCJ0aGVGZXRjaGVyIiwicmVzdWx0MiIsInJlc3VsdDMiLCJpbnB1dDEiLCJzZXRJbnB1dDEiLCJpbnB1dDIiLCJzZXRJbnB1dDIiLCJpbnB1dDMiLCJzZXRJbnB1dDMiLCJvbkNsaWNrSGFuZGxlcjEiLCJlIiwicHJldmVudERlZmF1bHQiLCJvbkNsaWNrSGFuZGxlcjIiLCJvbkNsaWNrSGFuZGxlcjMiLCJkaXYiLCJzdHlsZSIsIm1hcmdpbkJvdHRvbSIsImg0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJidXR0b24iLCJtYXJnaW4iLCJvbkNsaWNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwiVGhlTGluayIsInVybCIsImhhbmRsZXIiLCJUaGVNb3ZpZXMiLCJkYXRhIiwiZXJyb3IiLCJTZWFyY2giLCJzaG93IiwidXJsTW92aWUiLCJzZXRVcmxNb3ZpZSIsIm1vdmllIiwic2hvd01vdmllIiwiaW1kYklEIiwiVGhlTW92aWUiLCJtYXAiLCJtIiwiaSIsImN1cnNvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIlRpdGxlIiwiWWVhciIsImltZyIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJzcmMiLCJQb3N0ZXIiLCJhIiwicmVzIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies3.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/movies3.js"));
module.exports = __webpack_exports__;

})();