"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/article/[slug]/page",{

/***/ "(app-client)/./src/components/NotesView/index.tsx":
/*!********************************************!*\
  !*** ./src/components/NotesView/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotesView\": function() { return /* binding */ NotesView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"(app-client)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _components_common_MemoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/common/MemoCard */ \"(app-client)/./src/components/common/MemoCard/index.tsx\");\n/* harmony import */ var _store_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/Sidebar */ \"(app-client)/./src/store/Sidebar/index.tsx\");\n/* harmony import */ var _store_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/User */ \"(app-client)/./src/store/User/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NotesView = (props)=>{\n    _s();\n    const { articleId , onMemoClick , title  } = props;\n    const { closeSidebar , selection  } = (0,_store_Sidebar__WEBPACK_IMPORTED_MODULE_3__.useSidebarStore)();\n    const { addMemo , memos , editMemo  } = (0,_store_User__WEBPACK_IMPORTED_MODULE_4__.useUserStore)();\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [memoToEdit, setMemoToEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openInput, setOpenInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((selection === null || selection === void 0 ? void 0 : selection.selectedText) || memoToEdit !== undefined ? true : false);\n    const onCancel = ()=>{\n        closeSidebar();\n        setComment(\"\");\n    };\n    const onSave = ()=>{\n        if (memoToEdit) {\n            setLoading(true);\n            editMemo({\n                ...memoToEdit,\n                comment\n            });\n            setComment(\"\");\n            setMemoToEdit(undefined);\n            setLoading(false);\n        } else {\n            setLoading(true);\n            addMemo({\n                comment,\n                textPosition: {\n                    start: selection === null || selection === void 0 ? void 0 : selection.start,\n                    end: selection === null || selection === void 0 ? void 0 : selection.end\n                },\n                highlightedText: selection === null || selection === void 0 ? void 0 : selection.selectedText,\n                articleId: articleId,\n                articleTitle: title,\n                updatedAt: new Date().toDateString(),\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n            });\n            setComment(\"\");\n            setMemoToEdit(undefined);\n            setOpenInput(false);\n            setLoading(false);\n        }\n    };\n    const onEditMemo = (event, memo)=>{\n        setMemoToEdit(memo);\n        setComment(memo.comment);\n    };\n    const savedMemos = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>memos.filter((memo)=>memo.articleId === articleId), [\n        memos,\n        articleId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"notes-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"notes-input-section\",\n                children: openInput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"comment\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"textarea-section\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    placeholder: \"What are your thoughts?\",\n                                    value: comment,\n                                    onChange: (e)=>setComment(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"comment-buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: onCancel,\n                                        className: \"cancel\",\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: onSave,\n                                        disabled: loading,\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 8\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                lineNumber: 81,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"saved-notes-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This is where all your notes will be saved\"\n                    }, void 0, false, {\n                        fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 5\n                    }, undefined),\n                    articleId && savedMemos.map((memo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_MemoCard__WEBPACK_IMPORTED_MODULE_2__.MemoCard, {\n                            memo: memo,\n                            onMemoClick: onMemoClick,\n                            onEdit: onEditMemo\n                        }, memo.id, false, {\n                            fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 7\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                lineNumber: 107,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n        lineNumber: 80,\n        columnNumber: 3\n    }, undefined);\n};\n_s(NotesView, \"WDpyNWI1mSW1/6QQC9qHPjLg8Rg=\", false, function() {\n    return [\n        _store_Sidebar__WEBPACK_IMPORTED_MODULE_3__.useSidebarStore,\n        _store_User__WEBPACK_IMPORTED_MODULE_4__.useUserStore\n    ];\n});\n_c = NotesView;\nvar _c;\n$RefreshReg$(_c, \"NotesView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTm90ZXNWaWV3L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXNEO0FBRTVCO0FBRTZCO0FBQ047QUFDTjtBQUtwQyxNQUFNTSxZQUFZLENBQUNDLFFBQTBCOztJQUNuRCxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsWUFBVyxFQUFFQyxNQUFLLEVBQUUsR0FBR0g7SUFFMUMsTUFBTSxFQUFFSSxhQUFZLEVBQUVDLFVBQVMsRUFBRSxHQUFHUiwrREFBZUE7SUFDbkQsTUFBTSxFQUFFUyxRQUFPLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdWLHlEQUFZQTtJQUVqRCxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFTO0lBQy9DLE1BQU0sQ0FBQ2lCLFlBQVlDLGNBQWMsR0FBR2xCLCtDQUFRQTtJQUM1QyxNQUFNLENBQUNtQixTQUFTQyxXQUFXLEdBQUdwQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVDLE1BQU0sQ0FBQ3FCLFdBQVdDLGFBQWEsR0FBR3RCLCtDQUFRQSxDQUN6Q1csQ0FBQUEsc0JBQUFBLHVCQUFBQSxLQUFBQSxJQUFBQSxVQUFXWSxZQUFZLEtBQUlOLGVBQWVPLFlBQVksSUFBSSxHQUFHLEtBQUs7SUFHbkUsTUFBTUMsV0FBVyxJQUFNO1FBQ3RCZjtRQUNBTSxXQUFXO0lBQ1o7SUFFQSxNQUFNVSxTQUFTLElBQU07UUFDcEIsSUFBSVQsWUFBWTtZQUNmRyxXQUFXLElBQUk7WUFFZk4sU0FBUztnQkFDUixHQUFHRyxVQUFVO2dCQUNiRjtZQUNEO1lBQ0FDLFdBQVc7WUFDWEUsY0FBY007WUFDZEosV0FBVyxLQUFLO1FBQ2pCLE9BQU87WUFDTkEsV0FBVyxJQUFJO1lBRWZSLFFBQVE7Z0JBQ1BHO2dCQUNBWSxjQUFjO29CQUNiQyxPQUFPakIsc0JBQUFBLHVCQUFBQSxLQUFBQSxJQUFBQSxVQUFXaUIsS0FBSztvQkFDdkJDLEtBQUtsQixzQkFBQUEsdUJBQUFBLEtBQUFBLElBQUFBLFVBQVdrQixHQUFHO2dCQUNwQjtnQkFDQUMsaUJBQWlCbkIsc0JBQUFBLHVCQUFBQSxLQUFBQSxJQUFBQSxVQUFXWSxZQUFZO2dCQUN4Q2hCLFdBQVdBO2dCQUNYd0IsY0FBY3RCO2dCQUNkdUIsV0FBVyxJQUFJQyxPQUFPQyxZQUFZO2dCQUNsQ0MsSUFBSWxDLGdEQUFFQTtZQUNQO1lBQ0FlLFdBQVc7WUFDWEUsY0FBY007WUFDZEYsYUFBYSxLQUFLO1lBQ2xCRixXQUFXLEtBQUs7UUFDakIsQ0FBQztJQUNGO0lBRUEsTUFBTWdCLGFBQWEsQ0FDbEJDLE9BQ0FDLE9BQ0k7UUFDSnBCLGNBQWNvQjtRQUNkdEIsV0FBV3NCLEtBQUt2QixPQUFPO0lBQ3hCO0lBRUEsTUFBTXdCLGFBQWF4Qyw4Q0FBT0EsQ0FDekIsSUFBTWMsTUFBTTJCLE1BQU0sQ0FBQyxDQUFDRixPQUFTQSxLQUFLL0IsU0FBUyxLQUFLQSxZQUNoRDtRQUFDTTtRQUFPTjtLQUFVO0lBR25CLHFCQUNDLDhEQUFDa0M7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNickIsMkJBQ0E7OEJBQ0MsNEVBQUNvQjt3QkFBSUMsV0FBVTs7MENBQ2QsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUlkLDRFQUFDQztvQ0FDQUMsYUFBWTtvQ0FDWkMsT0FBTzlCO29DQUNQK0IsVUFBVSxDQUFDQyxJQUFNL0IsV0FBVytCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7MENBRzVDLDhEQUFDSjtnQ0FBSUMsV0FBVTs7a0RBQ2QsOERBQUNPO3dDQUFPQyxTQUFTekI7d0NBQVVpQixXQUFVO2tEQUFTOzs7Ozs7a0RBRzlDLDhEQUFDTzt3Q0FBT0MsU0FBU3hCO3dDQUFReUIsVUFBVWhDO2tEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUWpELDhEQUFDc0I7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDVTtrQ0FBRTs7Ozs7O29CQUNGN0MsYUFDQWdDLFdBQVdjLEdBQUcsQ0FBQyxDQUFDZixxQkFDZiw4REFBQ3BDLGlFQUFRQTs0QkFFUm9DLE1BQU1BOzRCQUNOOUIsYUFBYUE7NEJBQ2I4QyxRQUFRbEI7MkJBSEhFLEtBQUtILEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU25CLEVBQUU7R0EzR1c5Qjs7UUFHd0JGLDJEQUFlQTtRQUNkQyxxREFBWUE7OztLQUpyQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTm90ZXNWaWV3L2luZGV4LnRzeD80ZWI0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBNb3VzZUV2ZW50LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyB2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB7IE1lbW9DYXJkIH0gZnJvbSBcIkBjb21wb25lbnRzL2NvbW1vbi9NZW1vQ2FyZFwiO1xuaW1wb3J0IHsgdXNlU2lkZWJhclN0b3JlIH0gZnJvbSBcIkBzdG9yZS9TaWRlYmFyXCI7XG5pbXBvcnQgeyB1c2VVc2VyU3RvcmUgfSBmcm9tIFwiQHN0b3JlL1VzZXJcIjtcbmltcG9ydCB7IE1lbW8gfSBmcm9tIFwiQHN0b3JlL1VzZXIvVXNlci50eXBlc1wiO1xuXG5pbXBvcnQgeyBOb3Rlc1ZpZXdQcm9wcyB9IGZyb20gXCIuL05vdGVzVmlldy50eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgTm90ZXNWaWV3ID0gKHByb3BzOiBOb3Rlc1ZpZXdQcm9wcykgPT4ge1xuXHRjb25zdCB7IGFydGljbGVJZCwgb25NZW1vQ2xpY2ssIHRpdGxlIH0gPSBwcm9wcztcblxuXHRjb25zdCB7IGNsb3NlU2lkZWJhciwgc2VsZWN0aW9uIH0gPSB1c2VTaWRlYmFyU3RvcmUoKTtcblx0Y29uc3QgeyBhZGRNZW1vLCBtZW1vcywgZWRpdE1lbW8gfSA9IHVzZVVzZXJTdG9yZSgpO1xuXG5cdGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cdGNvbnN0IFttZW1vVG9FZGl0LCBzZXRNZW1vVG9FZGl0XSA9IHVzZVN0YXRlPE1lbW8gfCB1bmRlZmluZWQ+KCk7XG5cdGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCBbb3BlbklucHV0LCBzZXRPcGVuSW5wdXRdID0gdXNlU3RhdGUoXG5cdFx0c2VsZWN0aW9uPy5zZWxlY3RlZFRleHQgfHwgbWVtb1RvRWRpdCAhPT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZhbHNlLFxuXHQpO1xuXG5cdGNvbnN0IG9uQ2FuY2VsID0gKCkgPT4ge1xuXHRcdGNsb3NlU2lkZWJhcigpO1xuXHRcdHNldENvbW1lbnQoXCJcIik7XG5cdH07XG5cblx0Y29uc3Qgb25TYXZlID0gKCkgPT4ge1xuXHRcdGlmIChtZW1vVG9FZGl0KSB7XG5cdFx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXG5cdFx0XHRlZGl0TWVtbyh7XG5cdFx0XHRcdC4uLm1lbW9Ub0VkaXQsXG5cdFx0XHRcdGNvbW1lbnQsXG5cdFx0XHR9KTtcblx0XHRcdHNldENvbW1lbnQoXCJcIik7XG5cdFx0XHRzZXRNZW1vVG9FZGl0KHVuZGVmaW5lZCk7XG5cdFx0XHRzZXRMb2FkaW5nKGZhbHNlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0TG9hZGluZyh0cnVlKTtcblxuXHRcdFx0YWRkTWVtbyh7XG5cdFx0XHRcdGNvbW1lbnQsXG5cdFx0XHRcdHRleHRQb3NpdGlvbjoge1xuXHRcdFx0XHRcdHN0YXJ0OiBzZWxlY3Rpb24/LnN0YXJ0IGFzIG51bWJlcixcblx0XHRcdFx0XHRlbmQ6IHNlbGVjdGlvbj8uZW5kIGFzIG51bWJlcixcblx0XHRcdFx0fSxcblx0XHRcdFx0aGlnaGxpZ2h0ZWRUZXh0OiBzZWxlY3Rpb24/LnNlbGVjdGVkVGV4dCBhcyBzdHJpbmcsXG5cdFx0XHRcdGFydGljbGVJZDogYXJ0aWNsZUlkIGFzIHN0cmluZyxcblx0XHRcdFx0YXJ0aWNsZVRpdGxlOiB0aXRsZSBhcyBzdHJpbmcsXG5cdFx0XHRcdHVwZGF0ZWRBdDogbmV3IERhdGUoKS50b0RhdGVTdHJpbmcoKSxcblx0XHRcdFx0aWQ6IHY0KCksXG5cdFx0XHR9KTtcblx0XHRcdHNldENvbW1lbnQoXCJcIik7XG5cdFx0XHRzZXRNZW1vVG9FZGl0KHVuZGVmaW5lZCk7XG5cdFx0XHRzZXRPcGVuSW5wdXQoZmFsc2UpO1xuXHRcdFx0c2V0TG9hZGluZyhmYWxzZSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IG9uRWRpdE1lbW8gPSAoXG5cdFx0ZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIGdsb2JhbFRoaXMuTW91c2VFdmVudD4sXG5cdFx0bWVtbzogTWVtbyxcblx0KSA9PiB7XG5cdFx0c2V0TWVtb1RvRWRpdChtZW1vKTtcblx0XHRzZXRDb21tZW50KG1lbW8uY29tbWVudCk7XG5cdH07XG5cblx0Y29uc3Qgc2F2ZWRNZW1vcyA9IHVzZU1lbW8oXG5cdFx0KCkgPT4gbWVtb3MuZmlsdGVyKChtZW1vKSA9PiBtZW1vLmFydGljbGVJZCA9PT0gYXJ0aWNsZUlkKSxcblx0XHRbbWVtb3MsIGFydGljbGVJZF0sXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5vdGVzLWNvbnRhaW5lclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJub3Rlcy1pbnB1dC1zZWN0aW9uXCI+XG5cdFx0XHRcdHtvcGVuSW5wdXQgJiYgKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0YXJlYS1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxoMz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3NlbGVjdGlvbj8uc2VsZWN0ZWRUZXh0ID8/IG1lbW9Ub0VkaXQ/LmhpZ2hsaWdodGVkVGV4dH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvaDM+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXaGF0IGFyZSB5b3VyIHRob3VnaHRzP1wiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y29tbWVudH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1idXR0b25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtvbkNhbmNlbH0gY2xhc3NOYW1lPVwiY2FuY2VsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRDYW5jZWxcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e29uU2F2ZX0gZGlzYWJsZWQ9e2xvYWRpbmd9PlxuXHRcdFx0XHRcdFx0XHRcdFx0U2F2ZVxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNhdmVkLW5vdGVzLXNlY3Rpb25cIj5cblx0XHRcdFx0PHA+VGhpcyBpcyB3aGVyZSBhbGwgeW91ciBub3RlcyB3aWxsIGJlIHNhdmVkPC9wPlxuXHRcdFx0XHR7YXJ0aWNsZUlkICYmXG5cdFx0XHRcdFx0c2F2ZWRNZW1vcy5tYXAoKG1lbW8pID0+IChcblx0XHRcdFx0XHRcdDxNZW1vQ2FyZFxuXHRcdFx0XHRcdFx0XHRrZXk9e21lbW8uaWR9XG5cdFx0XHRcdFx0XHRcdG1lbW89e21lbW99XG5cdFx0XHRcdFx0XHRcdG9uTWVtb0NsaWNrPXtvbk1lbW9DbGlja31cblx0XHRcdFx0XHRcdFx0b25FZGl0PXtvbkVkaXRNZW1vfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ2NCIsIk1lbW9DYXJkIiwidXNlU2lkZWJhclN0b3JlIiwidXNlVXNlclN0b3JlIiwiTm90ZXNWaWV3IiwicHJvcHMiLCJhcnRpY2xlSWQiLCJvbk1lbW9DbGljayIsInRpdGxlIiwiY2xvc2VTaWRlYmFyIiwic2VsZWN0aW9uIiwiYWRkTWVtbyIsIm1lbW9zIiwiZWRpdE1lbW8iLCJjb21tZW50Iiwic2V0Q29tbWVudCIsIm1lbW9Ub0VkaXQiLCJzZXRNZW1vVG9FZGl0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJvcGVuSW5wdXQiLCJzZXRPcGVuSW5wdXQiLCJzZWxlY3RlZFRleHQiLCJ1bmRlZmluZWQiLCJvbkNhbmNlbCIsIm9uU2F2ZSIsInRleHRQb3NpdGlvbiIsInN0YXJ0IiwiZW5kIiwiaGlnaGxpZ2h0ZWRUZXh0IiwiYXJ0aWNsZVRpdGxlIiwidXBkYXRlZEF0IiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsImlkIiwib25FZGl0TWVtbyIsImV2ZW50IiwibWVtbyIsInNhdmVkTWVtb3MiLCJmaWx0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJwIiwibWFwIiwib25FZGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/NotesView/index.tsx\n"));

/***/ })

});