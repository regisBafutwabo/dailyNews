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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotesView\": function() { return /* binding */ NotesView; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"(app-client)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _components_common_MemoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/common/MemoCard */ \"(app-client)/./src/components/common/MemoCard/index.tsx\");\n/* harmony import */ var _store_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/Sidebar */ \"(app-client)/./src/store/Sidebar/index.tsx\");\n/* harmony import */ var _store_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/User */ \"(app-client)/./src/store/User/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NotesView = (props)=>{\n    _s();\n    const { articleId , onMemoClick , title  } = props;\n    const { closeSidebar , selection  } = (0,_store_Sidebar__WEBPACK_IMPORTED_MODULE_3__.useSidebarStore)();\n    const { addMemo , memos , editMemo  } = (0,_store_User__WEBPACK_IMPORTED_MODULE_4__.useUserStore)();\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [memoToEdit, setMemoToEdit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openInput, setOpenInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((selection === null || selection === void 0 ? void 0 : selection.selectedText) || memoToEdit !== undefined);\n    const onCancel = ()=>{\n        closeSidebar();\n        setComment(\"\");\n    };\n    const onSave = ()=>{\n        if (memoToEdit) {\n            setLoading(true);\n            editMemo({\n                ...memoToEdit,\n                comment\n            });\n            setComment(\"\");\n            setMemoToEdit(undefined);\n            setLoading(false);\n        } else {\n            setLoading(true);\n            addMemo({\n                comment,\n                textPosition: {\n                    start: selection === null || selection === void 0 ? void 0 : selection.start,\n                    end: selection === null || selection === void 0 ? void 0 : selection.end\n                },\n                highlightedText: selection === null || selection === void 0 ? void 0 : selection.selectedText,\n                articleId: articleId,\n                articleTitle: title,\n                updatedAt: new Date().toDateString(),\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n            });\n            setComment(\"\");\n            setMemoToEdit(undefined);\n            setLoading(false);\n        }\n    };\n    const onEditMemo = (event, memo)=>{\n        setMemoToEdit(memo);\n        setComment(memo.comment);\n    };\n    const savedMemos = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>memos.filter((memo)=>memo.articleId === articleId), [\n        memos,\n        articleId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"notes-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"notes-input-section\",\n                children: ((selection === null || selection === void 0 ? void 0 : selection.selectedText) || memoToEdit !== undefined) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"comment\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"textarea-section\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    placeholder: \"What are your thoughts?\",\n                                    value: comment,\n                                    onChange: (e)=>setComment(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 9\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 8\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"comment-buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: onCancel,\n                                        className: \"cancel\",\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: onSave,\n                                        disabled: loading,\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 8\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                lineNumber: 80,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"saved-notes-section\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This is where all your notes will be saved\"\n                    }, void 0, false, {\n                        fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 5\n                    }, undefined),\n                    articleId && savedMemos.map((memo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_MemoCard__WEBPACK_IMPORTED_MODULE_2__.MemoCard, {\n                            memo: memo,\n                            onMemoClick: onMemoClick,\n                            onEdit: onEditMemo\n                        }, memo.id, false, {\n                            fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 7\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n                lineNumber: 106,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/regisbafutwabo/Documents/fe-elas-regis/src/components/NotesView/index.tsx\",\n        lineNumber: 79,\n        columnNumber: 3\n    }, undefined);\n};\n_s(NotesView, \"KRYB7ZoWvlkh8rf2+rSC1cfmp0w=\", false, function() {\n    return [\n        _store_Sidebar__WEBPACK_IMPORTED_MODULE_3__.useSidebarStore,\n        _store_User__WEBPACK_IMPORTED_MODULE_4__.useUserStore\n    ];\n});\n_c = NotesView;\nvar _c;\n$RefreshReg$(_c, \"NotesView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTm90ZXNWaWV3L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXNEO0FBRTVCO0FBRTZCO0FBQ047QUFDTjtBQUtwQyxNQUFNTSxZQUFZLENBQUNDLFFBQTBCOztJQUNuRCxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsWUFBVyxFQUFFQyxNQUFLLEVBQUUsR0FBR0g7SUFFMUMsTUFBTSxFQUFFSSxhQUFZLEVBQUVDLFVBQVMsRUFBRSxHQUFHUiwrREFBZUE7SUFDbkQsTUFBTSxFQUFFUyxRQUFPLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdWLHlEQUFZQTtJQUVqRCxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFTO0lBQy9DLE1BQU0sQ0FBQ2lCLFlBQVlDLGNBQWMsR0FBR2xCLCtDQUFRQTtJQUM1QyxNQUFNLENBQUNtQixTQUFTQyxXQUFXLEdBQUdwQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVDLE1BQU0sQ0FBQ3FCLFdBQVdDLGFBQWEsR0FBR3RCLCtDQUFRQSxDQUN6Q1csQ0FBQUEsc0JBQUFBLHVCQUFBQSxLQUFBQSxJQUFBQSxVQUFXWSxZQUFZLEtBQUlOLGVBQWVPO0lBRzNDLE1BQU1DLFdBQVcsSUFBTTtRQUN0QmY7UUFDQU0sV0FBVztJQUNaO0lBRUEsTUFBTVUsU0FBUyxJQUFNO1FBQ3BCLElBQUlULFlBQVk7WUFDZkcsV0FBVyxJQUFJO1lBRWZOLFNBQVM7Z0JBQ1IsR0FBR0csVUFBVTtnQkFDYkY7WUFDRDtZQUNBQyxXQUFXO1lBQ1hFLGNBQWNNO1lBQ2RKLFdBQVcsS0FBSztRQUNqQixPQUFPO1lBQ05BLFdBQVcsSUFBSTtZQUVmUixRQUFRO2dCQUNQRztnQkFDQVksY0FBYztvQkFDYkMsT0FBT2pCLHNCQUFBQSx1QkFBQUEsS0FBQUEsSUFBQUEsVUFBV2lCLEtBQUs7b0JBQ3ZCQyxLQUFLbEIsc0JBQUFBLHVCQUFBQSxLQUFBQSxJQUFBQSxVQUFXa0IsR0FBRztnQkFDcEI7Z0JBQ0FDLGlCQUFpQm5CLHNCQUFBQSx1QkFBQUEsS0FBQUEsSUFBQUEsVUFBV1ksWUFBWTtnQkFDeENoQixXQUFXQTtnQkFDWHdCLGNBQWN0QjtnQkFDZHVCLFdBQVcsSUFBSUMsT0FBT0MsWUFBWTtnQkFDbENDLElBQUlsQyxnREFBRUE7WUFDUDtZQUNBZSxXQUFXO1lBQ1hFLGNBQWNNO1lBQ2RKLFdBQVcsS0FBSztRQUNqQixDQUFDO0lBQ0Y7SUFFQSxNQUFNZ0IsYUFBYSxDQUNsQkMsT0FDQUMsT0FDSTtRQUNKcEIsY0FBY29CO1FBQ2R0QixXQUFXc0IsS0FBS3ZCLE9BQU87SUFDeEI7SUFFQSxNQUFNd0IsYUFBYXhDLDhDQUFPQSxDQUN6QixJQUFNYyxNQUFNMkIsTUFBTSxDQUFDLENBQUNGLE9BQVNBLEtBQUsvQixTQUFTLEtBQUtBLFlBQ2hEO1FBQUNNO1FBQU9OO0tBQVU7SUFHbkIscUJBQ0MsOERBQUNrQztRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsQ0FBQy9CLENBQUFBLHNCQUFBQSx1QkFBQUEsS0FBQUEsSUFBQUEsVUFBV1ksWUFBWSxLQUFJTixlQUFlTyxTQUFRLG1CQUNuRDs4QkFDQyw0RUFBQ2lCO3dCQUFJQyxXQUFVOzswQ0FDZCw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBSWQsNEVBQUNDO29DQUNBQyxhQUFZO29DQUNaQyxPQUFPOUI7b0NBQ1ArQixVQUFVLENBQUNDLElBQU0vQixXQUFXK0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7OzswQ0FHNUMsOERBQUNKO2dDQUFJQyxXQUFVOztrREFDZCw4REFBQ087d0NBQU9DLFNBQVN6Qjt3Q0FBVWlCLFdBQVU7a0RBQVM7Ozs7OztrREFHOUMsOERBQUNPO3dDQUFPQyxTQUFTeEI7d0NBQVF5QixVQUFVaEM7a0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFRakQsOERBQUNzQjtnQkFBSUMsV0FBVTs7a0NBQ2QsOERBQUNVO2tDQUFFOzs7Ozs7b0JBQ0Y3QyxhQUNBZ0MsV0FBV2MsR0FBRyxDQUFDLENBQUNmLHFCQUNmLDhEQUFDcEMsaUVBQVFBOzRCQUVSb0MsTUFBTUE7NEJBQ045QixhQUFhQTs0QkFDYjhDLFFBQVFsQjsyQkFISEUsS0FBS0gsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkIsRUFBRTtHQTFHVzlCOztRQUd3QkYsMkRBQWVBO1FBQ2RDLHFEQUFZQTs7O0tBSnJDQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ob3Rlc1ZpZXcvaW5kZXgudHN4PzRlYjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IE1vdXNlRXZlbnQsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHsgTWVtb0NhcmQgfSBmcm9tIFwiQGNvbXBvbmVudHMvY29tbW9uL01lbW9DYXJkXCI7XG5pbXBvcnQgeyB1c2VTaWRlYmFyU3RvcmUgfSBmcm9tIFwiQHN0b3JlL1NpZGViYXJcIjtcbmltcG9ydCB7IHVzZVVzZXJTdG9yZSB9IGZyb20gXCJAc3RvcmUvVXNlclwiO1xuaW1wb3J0IHsgTWVtbyB9IGZyb20gXCJAc3RvcmUvVXNlci9Vc2VyLnR5cGVzXCI7XG5cbmltcG9ydCB7IE5vdGVzVmlld1Byb3BzIH0gZnJvbSBcIi4vTm90ZXNWaWV3LnR5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBOb3Rlc1ZpZXcgPSAocHJvcHM6IE5vdGVzVmlld1Byb3BzKSA9PiB7XG5cdGNvbnN0IHsgYXJ0aWNsZUlkLCBvbk1lbW9DbGljaywgdGl0bGUgfSA9IHByb3BzO1xuXG5cdGNvbnN0IHsgY2xvc2VTaWRlYmFyLCBzZWxlY3Rpb24gfSA9IHVzZVNpZGViYXJTdG9yZSgpO1xuXHRjb25zdCB7IGFkZE1lbW8sIG1lbW9zLCBlZGl0TWVtbyB9ID0gdXNlVXNlclN0b3JlKCk7XG5cblx0Y29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblx0Y29uc3QgW21lbW9Ub0VkaXQsIHNldE1lbW9Ub0VkaXRdID0gdXNlU3RhdGU8TWVtbyB8IHVuZGVmaW5lZD4oKTtcblx0Y29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGNvbnN0IFtvcGVuSW5wdXQsIHNldE9wZW5JbnB1dF0gPSB1c2VTdGF0ZShcblx0XHRzZWxlY3Rpb24/LnNlbGVjdGVkVGV4dCB8fCBtZW1vVG9FZGl0ICE9PSB1bmRlZmluZWQsXG5cdCk7XG5cblx0Y29uc3Qgb25DYW5jZWwgPSAoKSA9PiB7XG5cdFx0Y2xvc2VTaWRlYmFyKCk7XG5cdFx0c2V0Q29tbWVudChcIlwiKTtcblx0fTtcblxuXHRjb25zdCBvblNhdmUgPSAoKSA9PiB7XG5cdFx0aWYgKG1lbW9Ub0VkaXQpIHtcblx0XHRcdHNldExvYWRpbmcodHJ1ZSk7XG5cblx0XHRcdGVkaXRNZW1vKHtcblx0XHRcdFx0Li4ubWVtb1RvRWRpdCxcblx0XHRcdFx0Y29tbWVudCxcblx0XHRcdH0pO1xuXHRcdFx0c2V0Q29tbWVudChcIlwiKTtcblx0XHRcdHNldE1lbW9Ub0VkaXQodW5kZWZpbmVkKTtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRMb2FkaW5nKHRydWUpO1xuXG5cdFx0XHRhZGRNZW1vKHtcblx0XHRcdFx0Y29tbWVudCxcblx0XHRcdFx0dGV4dFBvc2l0aW9uOiB7XG5cdFx0XHRcdFx0c3RhcnQ6IHNlbGVjdGlvbj8uc3RhcnQgYXMgbnVtYmVyLFxuXHRcdFx0XHRcdGVuZDogc2VsZWN0aW9uPy5lbmQgYXMgbnVtYmVyLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRoaWdobGlnaHRlZFRleHQ6IHNlbGVjdGlvbj8uc2VsZWN0ZWRUZXh0IGFzIHN0cmluZyxcblx0XHRcdFx0YXJ0aWNsZUlkOiBhcnRpY2xlSWQgYXMgc3RyaW5nLFxuXHRcdFx0XHRhcnRpY2xlVGl0bGU6IHRpdGxlIGFzIHN0cmluZyxcblx0XHRcdFx0dXBkYXRlZEF0OiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpLFxuXHRcdFx0XHRpZDogdjQoKSxcblx0XHRcdH0pO1xuXHRcdFx0c2V0Q29tbWVudChcIlwiKTtcblx0XHRcdHNldE1lbW9Ub0VkaXQodW5kZWZpbmVkKTtcblx0XHRcdHNldExvYWRpbmcoZmFsc2UpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBvbkVkaXRNZW1vID0gKFxuXHRcdGV2ZW50OiBNb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBnbG9iYWxUaGlzLk1vdXNlRXZlbnQ+LFxuXHRcdG1lbW86IE1lbW8sXG5cdCkgPT4ge1xuXHRcdHNldE1lbW9Ub0VkaXQobWVtbyk7XG5cdFx0c2V0Q29tbWVudChtZW1vLmNvbW1lbnQpO1xuXHR9O1xuXG5cdGNvbnN0IHNhdmVkTWVtb3MgPSB1c2VNZW1vKFxuXHRcdCgpID0+IG1lbW9zLmZpbHRlcigobWVtbykgPT4gbWVtby5hcnRpY2xlSWQgPT09IGFydGljbGVJZCksXG5cdFx0W21lbW9zLCBhcnRpY2xlSWRdLFxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJub3Rlcy1jb250YWluZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibm90ZXMtaW5wdXQtc2VjdGlvblwiPlxuXHRcdFx0XHR7KHNlbGVjdGlvbj8uc2VsZWN0ZWRUZXh0IHx8IG1lbW9Ub0VkaXQgIT09IHVuZGVmaW5lZCkgJiYgKFxuXHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0YXJlYS1zZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxoMz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3NlbGVjdGlvbj8uc2VsZWN0ZWRUZXh0ID8/IG1lbW9Ub0VkaXQ/LmhpZ2hsaWdodGVkVGV4dH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvaDM+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXaGF0IGFyZSB5b3VyIHRob3VnaHRzP1wiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y29tbWVudH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudC1idXR0b25zXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtvbkNhbmNlbH0gY2xhc3NOYW1lPVwiY2FuY2VsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRDYW5jZWxcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e29uU2F2ZX0gZGlzYWJsZWQ9e2xvYWRpbmd9PlxuXHRcdFx0XHRcdFx0XHRcdFx0U2F2ZVxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNhdmVkLW5vdGVzLXNlY3Rpb25cIj5cblx0XHRcdFx0PHA+VGhpcyBpcyB3aGVyZSBhbGwgeW91ciBub3RlcyB3aWxsIGJlIHNhdmVkPC9wPlxuXHRcdFx0XHR7YXJ0aWNsZUlkICYmXG5cdFx0XHRcdFx0c2F2ZWRNZW1vcy5tYXAoKG1lbW8pID0+IChcblx0XHRcdFx0XHRcdDxNZW1vQ2FyZFxuXHRcdFx0XHRcdFx0XHRrZXk9e21lbW8uaWR9XG5cdFx0XHRcdFx0XHRcdG1lbW89e21lbW99XG5cdFx0XHRcdFx0XHRcdG9uTWVtb0NsaWNrPXtvbk1lbW9DbGlja31cblx0XHRcdFx0XHRcdFx0b25FZGl0PXtvbkVkaXRNZW1vfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ2NCIsIk1lbW9DYXJkIiwidXNlU2lkZWJhclN0b3JlIiwidXNlVXNlclN0b3JlIiwiTm90ZXNWaWV3IiwicHJvcHMiLCJhcnRpY2xlSWQiLCJvbk1lbW9DbGljayIsInRpdGxlIiwiY2xvc2VTaWRlYmFyIiwic2VsZWN0aW9uIiwiYWRkTWVtbyIsIm1lbW9zIiwiZWRpdE1lbW8iLCJjb21tZW50Iiwic2V0Q29tbWVudCIsIm1lbW9Ub0VkaXQiLCJzZXRNZW1vVG9FZGl0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJvcGVuSW5wdXQiLCJzZXRPcGVuSW5wdXQiLCJzZWxlY3RlZFRleHQiLCJ1bmRlZmluZWQiLCJvbkNhbmNlbCIsIm9uU2F2ZSIsInRleHRQb3NpdGlvbiIsInN0YXJ0IiwiZW5kIiwiaGlnaGxpZ2h0ZWRUZXh0IiwiYXJ0aWNsZVRpdGxlIiwidXBkYXRlZEF0IiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsImlkIiwib25FZGl0TWVtbyIsImV2ZW50IiwibWVtbyIsInNhdmVkTWVtb3MiLCJmaWx0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJwIiwibWFwIiwib25FZGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/NotesView/index.tsx\n"));

/***/ })

});