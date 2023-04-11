"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  height: 100vh;\n  background-color: rgba(239, 236, 234, 0.94);\n}\n\n/* ------HEADER SECTION------ */\n\n.header {\n  width: 100%;\n  padding: 15px 30px;\n  display: flex;\n  gap: 2rem;\n  justify-content: space-between;\n  align-items: center;\n  background-color: orange;\n}\n\n.left {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 0.5rem;\n}\n\n.avatar {\n  max-width: 5rem;\n  cursor: pointer;\n}\n\n.name {\n  width: 100%;\n  text-align: center;\n  font-weight: 700;\n  border-radius: 5px;\n  background-color: black;\n  color: orange;\n  cursor: pointer;\n}\n\n.container {\n  flex: 1;\n}\n\n.right {\n  flex: 1;\n  margin-right: 15px;\n  display: flex;\n  justify-content: end;\n  gap: 2rem;\n}\n\n.new-proj.btn,\n.new-task.btn {\n  color: white;\n  background-color: black;\n  padding-left: 25px;\n  padding-right: 25px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.search-form {\n  display: flex;\n  gap: 1rem;\n}\n\n.new-proj.btn,\n.new-task.btn,\nlabel,\n#filter,\n.clear {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-weight: 700;\n}\n\nlabel,\n#filter {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#filter {\n  padding-left: 5px;\n  padding-right: 5px;\n  border-radius: 5px;\n}\n\n.clear {\n  border-style: solid;\n  border-color: black;\n  padding-left: 25px;\n  padding-right: 25px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n/* ------CONTAINER SECTION------ */\n\n.container {\n  width: 100%;\n  padding: 15px 30px;\n  display: flex;\n  gap: 2rem;\n  position: relative;\n  align-items: start;\n  justify-content: start;\n}\n\n.blank-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  text-align: center;\n}\n\n.input-form {\n  padding: 15px;\n  background-color: white;\n  box-shadow: 1px 1px 1px 1px black;\n  position: absolute;\n  width: 50%;\n  border-radius: 15px;\n  top: 25%;\n  left: 25%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  display: none;\n  z-index: 10;\n}\n\n.input-form.active {\n  display: flex;\n}\n\n.form-close {\n  padding: 10px;\n  width: 2.2rem;\n  text-align: center;\n  background-color: black;\n  color: white;\n  border-radius: 50%;\n  font-weight: 800;\n  position: relative;\n  top: -1.5rem;\n  left: -52%;\n  cursor: pointer;\n}\n\n.form-element {\n  width: 80%;\n  padding: 5px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.form-btn {\n  color: white;\n  background-color: black;\n  padding: 10px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.project {\n  padding: 15px;\n  height: 100%;\n  min-width: 200px;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  border-radius: 10px;\n}\n\n.proj-delete {\n  padding: 5px;\n  background-color: black;\n  color: white;\n  border-radius: 50%;\n  position: relative;\n  top: -1.5rem;\n  left: -58%;\n  cursor: pointer;\n}\n\n.proj-name {\n  padding: 5px;\n  width: 100%;\n  font-size: 1.5rem;\n  background-color: black;\n  color: white;\n}\n.proj-description {\n  padding: 5px;\n  width: 100%;\n  font-size: 0.75rem;\n}\n\n.proj-content {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n/* ------FOOTER SECTION------ */\n\n.footer {\n  width: 100%;\n  padding: 15px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  color: orange;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  font-size: 16px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  height: 100vh;\n  background-color: rgba(239, 236, 234, 0.94);\n}\n\n/* ------HEADER SECTION------ */\n\n.header {\n  width: 100%;\n  padding: 15px 30px;\n  display: flex;\n  gap: 2rem;\n  justify-content: space-between;\n  align-items: center;\n  background-color: orange;\n}\n\n.left {\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  gap: 0.5rem;\n}\n\n.avatar {\n  max-width: 5rem;\n  cursor: pointer;\n}\n\n.name {\n  width: 100%;\n  text-align: center;\n  font-weight: 700;\n  border-radius: 5px;\n  background-color: black;\n  color: orange;\n  cursor: pointer;\n}\n\n.container {\n  flex: 1;\n}\n\n.right {\n  flex: 1;\n  margin-right: 15px;\n  display: flex;\n  justify-content: end;\n  gap: 2rem;\n}\n\n.new-proj.btn,\n.new-task.btn {\n  color: white;\n  background-color: black;\n  padding-left: 25px;\n  padding-right: 25px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.search-form {\n  display: flex;\n  gap: 1rem;\n}\n\n.new-proj.btn,\n.new-task.btn,\nlabel,\n#filter,\n.clear {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-weight: 700;\n}\n\nlabel,\n#filter {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n#filter {\n  padding-left: 5px;\n  padding-right: 5px;\n  border-radius: 5px;\n}\n\n.clear {\n  border-style: solid;\n  border-color: black;\n  padding-left: 25px;\n  padding-right: 25px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n/* ------CONTAINER SECTION------ */\n\n.container {\n  width: 100%;\n  padding: 15px 30px;\n  display: flex;\n  gap: 2rem;\n  position: relative;\n  align-items: start;\n  justify-content: start;\n}\n\n.blank-box {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  text-align: center;\n}\n\n.input-form {\n  padding: 15px;\n  background-color: white;\n  box-shadow: 1px 1px 1px 1px black;\n  position: absolute;\n  width: 50%;\n  border-radius: 15px;\n  top: 25%;\n  left: 25%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  display: none;\n  z-index: 10;\n}\n\n.input-form.active {\n  display: flex;\n}\n\n.form-close {\n  padding: 10px;\n  width: 2.2rem;\n  text-align: center;\n  background-color: black;\n  color: white;\n  border-radius: 50%;\n  font-weight: 800;\n  position: relative;\n  top: -1.5rem;\n  left: -52%;\n  cursor: pointer;\n}\n\n.form-element {\n  width: 80%;\n  padding: 5px;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.form-btn {\n  color: white;\n  background-color: black;\n  padding: 10px 20px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.project {\n  padding: 15px;\n  height: 100%;\n  min-width: 200px;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  border-style: solid;\n  border-color: black;\n  border-width: 1px;\n  border-radius: 10px;\n}\n\n.proj-delete {\n  padding: 5px;\n  background-color: black;\n  color: white;\n  border-radius: 50%;\n  position: relative;\n  top: -1.5rem;\n  left: -58%;\n  cursor: pointer;\n}\n\n.proj-name {\n  padding: 5px;\n  width: 100%;\n  font-size: 1.5rem;\n  background-color: black;\n  color: white;\n}\n.proj-description {\n  padding: 5px;\n  width: 100%;\n  font-size: 0.75rem;\n}\n\n.proj-content {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n/* ------FOOTER SECTION------ */\n\n.footer {\n  width: 100%;\n  padding: 15px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: black;\n  color: orange;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _modals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals.js */ "./src/modals.js");
// Import style sheet


// Import other JS modules





// Initialize content
(0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

// Gather declarations for interactive elements
const addProj = document.querySelector('.new-proj.btn');
const addTask = document.querySelector('.new-task.btn');
const clear = document.querySelector('.clear');
const submitTask = document.getElementById('taskSubmit');
const submitProj = document.getElementById('projSubmit');
const taskForm = document.getElementById('task-form');
const projectForm = document.getElementById('project-form');
const formEscapes = document.querySelectorAll('.form-close');

// Add relevant event listeners
addProj.addEventListener('click', _modals_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
submitProj.addEventListener('click', _projects_js__WEBPACK_IMPORTED_MODULE_2__.addProject);
formEscapes.forEach((btn) => btn.addEventListener('click', _modals_js__WEBPACK_IMPORTED_MODULE_3__.deactivate));


/***/ }),

/***/ "./src/modals.js":
/*!***********************!*\
  !*** ./src/modals.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deactivate": () => (/* binding */ deactivate),
/* harmony export */   "default": () => (/* binding */ activate)
/* harmony export */ });
function activate(e) {
  let modal;

  if (e.target.classList.contains('new-task')) {
    modal = document.getElementById('task-form');
  } else if (e.target.classList.contains('new-proj')) {
    modal = document.getElementById('project-form');
  } else return;

  if (!modal.classList.contains('active')) {
    modal.classList.add('active');
  }
  return;
}

function deactivate(e) {
  // Grab possible modal DOM references
  const taskName = document.getElementById('taskNameField');
  const taskDescription = document.getElementById('taskDescriptionField');
  const projName = document.getElementById('projNameField');
  const projDescription = document.getElementById('projDescriptionField');

  const modal = e.target.parentElement;
  if (modal.classList.contains('active')) {
    modal.classList.remove('active');
    taskName.value = '';
    taskDescription.value = '';
    projName.value = '';
    projDescription.value = '';
  }

  return;
}


/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _avatars_avatar_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatars/avatar-1.png */ "./src/avatars/avatar-1.png");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  // ---------------------- Header ---------------------

  // Create header element
  const header = document.createElement('div');
  header.classList.add('header');

  // Create header subsection components
  const left = document.createElement('div');
  left.classList.add('header-section');
  left.classList.add('left');

  const right = document.createElement('div');
  right.classList.add('header-section');
  right.classList.add('right');

  // Create left section elements
  const avatar = document.createElement('img');
  avatar.classList.add('avatar');
  avatar.alt = 'Profile Picture';
  avatar.src = _avatars_avatar_1_png__WEBPACK_IMPORTED_MODULE_0__;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = 'Alex';

  // Add left section elements to left section
  left.appendChild(avatar);
  left.appendChild(name);

  // Create right section elements
  const newProj = document.createElement('div');
  newProj.classList.add('new-proj');
  newProj.classList.add('btn');
  newProj.textContent = '+ Project';

  const newTask = document.createElement('div');
  newTask.classList.add('new-task');
  newTask.classList.add('btn');
  newTask.textContent = '+ Task';

  // Compose form for search bar in right section
  const focus = document.createElement('form');
  focus.classList.add('search-form');

  const label = document.createElement('label');
  label.for = 'filter';
  label.textContent = 'Filter to a specific project:';

  const search = document.createElement('input');
  search.setAttribute('list', 'project-list');
  search.id = 'filter';

  const data = document.createElement('datalist');
  data.id = 'project-list';

  // Add form elements to form
  focus.appendChild(label);
  focus.appendChild(search);
  focus.appendChild(data);

  const clearSearch = document.createElement('div');
  clearSearch.classList.add('clear');
  clearSearch.textContent = 'Clear';

  // Add right section elements to right section
  right.appendChild(newProj);
  right.appendChild(newTask);
  right.appendChild(focus);
  right.appendChild(clearSearch);

  // Add header subsections to header
  header.appendChild(left);
  header.appendChild(right);

  // ---------------------- Container ---------------------

  // Create main container element
  const container = document.createElement('div');
  container.classList.add('container');

  // Create blank box notification
  const blankBox = document.createElement('div');
  blankBox.classList.add('blank-box');

  const blankNote = document.createElement('h1');
  blankNote.textContent = 'You do not have any projects or tasks.';

  blankBox.appendChild(blankNote);

  // Append blank box notification to container

  container.appendChild(blankBox);

  // Create add task form

  const taskForm = document.createElement('form');
  taskForm.classList.add('input-form');
  taskForm.id = 'task-form';

  const formClose = document.createElement('div');
  formClose.classList.add('form-close');
  formClose.textContent = 'X';

  const taskNameLabel = document.createElement('label');
  taskNameLabel.for = 'taskNameField';
  taskNameLabel.textContent = 'Task Name:';
  taskNameLabel.classList.add('form-element');

  const taskNameInput = document.createElement('input');
  taskNameInput.setAttribute('type', 'text');
  taskNameInput.placeholder = 'Task Name';
  taskNameInput.required = true;
  taskNameInput.id = 'taskNameField';
  taskNameInput.classList.add('form-element');

  const taskDescriptionLabel = document.createElement('label');
  taskDescriptionLabel.for = 'taskDescriptionField';
  taskDescriptionLabel.textContent = 'Description:';
  taskDescriptionLabel.classList.add('form-element');

  const taskDescriptionInput = document.createElement('input');
  taskDescriptionInput.setAttribute('type', 'text');
  taskDescriptionInput.placeholder = 'Description';
  taskDescriptionInput.required = true;
  taskDescriptionInput.id = 'taskDescriptionField';
  taskDescriptionInput.classList.add('form-element');

  const taskSubmit = document.createElement('button');
  taskSubmit.setAttribute('type', 'submit');
  taskSubmit.classList.add('form-btn');
  taskSubmit.textContent = 'Submit';
  taskSubmit.id = 'taskSubmit';

  // Append sub-components of task form
  taskForm.appendChild(formClose);
  taskForm.appendChild(taskNameLabel);
  taskForm.appendChild(taskNameInput);
  taskForm.appendChild(taskDescriptionLabel);
  taskForm.appendChild(taskDescriptionInput);
  taskForm.appendChild(taskSubmit);

  // Append add task form to container
  container.appendChild(taskForm);

  // Create add project form

  const projectForm = document.createElement('form');
  projectForm.classList.add('input-form');
  projectForm.id = 'project-form';

  const projNameLabel = document.createElement('label');
  projNameLabel.for = 'projNameField';
  projNameLabel.textContent = 'Project Name:';
  projNameLabel.classList.add('form-element');

  const projNameInput = document.createElement('input');
  projNameInput.setAttribute('type', 'text');
  projNameInput.placeholder = 'Project Name';
  projNameInput.required = true;
  projNameInput.id = 'projNameField';
  projNameInput.classList.add('form-element');

  const projDescriptionLabel = document.createElement('label');
  projDescriptionLabel.for = 'projDescriptionField';
  projDescriptionLabel.textContent = 'Description:';
  projDescriptionLabel.classList.add('form-element');

  const projDescriptionInput = document.createElement('input');
  projDescriptionInput.setAttribute('type', 'text');
  projDescriptionInput.placeholder = 'Description';
  projDescriptionInput.required = true;
  projDescriptionInput.id = 'projDescriptionField';
  projDescriptionInput.classList.add('form-element');

  const projSubmit = document.createElement('button');
  projSubmit.setAttribute('type', 'submit');
  projSubmit.classList.add('form-btn');
  projSubmit.textContent = 'Submit';
  projSubmit.id = 'projSubmit';

  // Append sub-components of project form
  projectForm.appendChild(formClose);
  projectForm.appendChild(projNameLabel);
  projectForm.appendChild(projNameInput);
  projectForm.appendChild(projDescriptionLabel);
  projectForm.appendChild(projDescriptionInput);
  projectForm.appendChild(projSubmit);

  // Append add project form to container
  container.appendChild(projectForm);

  /** Additional Functionality to add later: page loads 'un-assigned' project column. */

  // ---------------------- Footer ---------------------

  // Create footer element
  const footer = document.createElement('div');
  footer.classList.add('footer');

  // Create footer text
  const footerText = document.createElement('p');
  footerText.textContent = '\u00A9 Alex Wurm';

  // Add footer text to footer
  footer.appendChild(footerText);

  // Add header, container, and footer to body
  const body = document.querySelector('body');
  body.appendChild(header);
  body.appendChild(container);
  body.appendChild(footer);
}


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
const projectList = [];
window.projectList = projectList;

class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length > 10) {
      alert('Name is too long.');
      return;
    }
    this._name = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    if (value.length > 50) {
      alert('Description is too long.');
      return;
    }
    this._description = value;
  }

  tasks = [];

  getTasks = () => {
    return this._tasks;
  };

  getTaskNames = () => {
    return this._tasks.map((x) => x.name);
  };

  addTask = (task) => {
    this._tasks.push(task);
  };

  removeTask = (task) => {
    const idx = this._taskNames.indexOf(task.name);
    this._tasks.splice(idx, 1);
  };
}

function addProject(e) {
  e.preventDefault();

  // Global declarations
  const container = document.querySelector('.container');

  // Retrieve values from form
  const projName = document.getElementById('projNameField').value;
  const projDescription = document.getElementById('projDescriptionField').value;

  console.log(projName);
  console.log(projDescription);

  // Don't complete function action if no input provided
  if (!projName || !projDescription) return;

  // Hide no projects notice if first project being added
  if (projectList.length == 0) {
    const blankBox = document.querySelector('.blank-box');
    blankBox.style.display = 'none';
  }

  // Creae project object and add it to the global projects list
  let proj = new Project(projName, projDescription);
  projectList.push(proj);

  // Create project DOM element and add sub-components
  const newProj = document.createElement('div');
  newProj.classList.add('project');

  const newProjDelete = document.createElement('div');
  newProjDelete.classList.add('proj-delete');
  newProjDelete.textContent = 'X';
  newProjDelete.addEventListener('click', removeProject);

  const newProjName = document.createElement('h1');
  newProjName.classList.add('proj-name');
  newProjName.textContent = projName;

  const newProjDescription = document.createElement('p');
  newProjDescription.classList.add('proj-description');
  newProjDescription.textContent = projDescription;

  const newProjContent = document.createElement('div');
  newProjContent.classList.add('proj-content');

  newProj.appendChild(newProjDelete);
  newProj.appendChild(newProjName);
  newProj.appendChild(newProjDescription);
  newProj.appendChild(newProjContent);

  // Append project to container div
  container.appendChild(newProj);

  // Clear values and close form
  document.getElementById('projNameField').value = '';
  document.getElementById('projDescriptionField').value = '';
  const projForm = document.getElementById('project-form');
  projForm.classList.remove('active');
}

function removeProject(e) {
  const proj = e.target.parentElement;
  console.log(proj);

  // Remove project from global projects list
  const projectNamesList = projectList.map((x) => x.name);
  console.log(projectNamesList);
  const projIdx = projectNamesList.indexOf(proj.children[1].textContent);
  console.log(projIdx);
  projectList.splice(projIdx, 1);

  // Delete project DOM element
  proj.remove();

  // Re-display no projects notice if all projects have been deleted
  if (projectList.length == 0) {
    const blankBox = document.querySelector('.blank-box');
    blankBox.style.display = 'flex';
  }
}

// Additional functionality to add later
// export function modifyProject(project, property) {}


/***/ }),

/***/ "./src/avatars/avatar-1.png":
/*!**********************************!*\
  !*** ./src/avatars/avatar-1.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5b6adb8e38ee506fde52.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEM2Qzs7QUFFN0MsNkJBQWUsc0NBQVk7QUFDM0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0RBQU87O0FBRXRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdE5PO0FBQ1A7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2RhbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDIzNiwgMjM0LCAwLjk0KTtcXG59XFxuXFxuLyogLS0tLS0tSEVBREVSIFNFQ1RJT04tLS0tLS0gKi9cXG5cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweCAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5hdmF0YXIge1xcbiAgbWF4LXdpZHRoOiA1cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmFtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiBvcmFuZ2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gIGZsZXg6IDE7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5uZXctcHJvai5idG4sXFxuLm5ldy10YXNrLmJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm5ldy1wcm9qLmJ0bixcXG4ubmV3LXRhc2suYnRuLFxcbmxhYmVsLFxcbiNmaWx0ZXIsXFxuLmNsZWFyIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5sYWJlbCxcXG4jZmlsdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jZmlsdGVyIHtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY2xlYXIge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogLS0tLS0tQ09OVEFJTkVSIFNFQ1RJT04tLS0tLS0gKi9cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTVweCAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5ibGFuay1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXQtZm9ybSB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggYmxhY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHRvcDogMjUlO1xcbiAgbGVmdDogMjUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4uaW5wdXQtZm9ybS5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZvcm0tY2xvc2Uge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAyLjJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0xLjVyZW07XFxuICBsZWZ0OiAtNTIlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9ybS1lbGVtZW50IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvcm0tYnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnByb2otZGVsZXRlIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMS41cmVtO1xcbiAgbGVmdDogLTU4JTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2otbmFtZSB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5wcm9qLWRlc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG5cXG4ucHJvai1jb250ZW50IHtcXG4gIGZsZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4vKiAtLS0tLS1GT09URVIgU0VDVElPTi0tLS0tLSAqL1xcblxcbi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogb3JhbmdlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYiwyQ0FBMkM7QUFDN0M7O0FBRUEsK0JBQStCOztBQUUvQjtFQUNFLFdBQVc7RUFDWCxrQkFB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Q25CLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMjM2LCAyMzQsIDAuOTQpO1xcbn1cXG5cXG4vKiAtLS0tLS1IRUFERVIgU0VDVElPTi0tLS0tLSAqL1xcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLmxlZnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmF2YXRhciB7XFxuICBtYXgtd2lkdGg6IDVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IG9yYW5nZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgZmxleDogMTtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLm5ldy1wcm9qLmJ0bixcXG4ubmV3LXRhc2suYnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubmV3LXByb2ouYnRuLFxcbi5uZXctdGFzay5idG4sXFxubGFiZWwsXFxuI2ZpbHRlcixcXG4uY2xlYXIge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmxhYmVsLFxcbiNmaWx0ZXIge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNmaWx0ZXIge1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jbGVhciB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmctbGVmdDogMjVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiAtLS0tLS1DT05UQUlORVIgU0VDVElPTi0tLS0tLSAqL1xcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLmJsYW5rLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dC1mb3JtIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCBibGFjaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgdG9wOiAyNSU7XFxuICBsZWZ0OiAyNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi5pbnB1dC1mb3JtLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZm9ybS1jbG9zZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDIuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTEuNXJlbTtcXG4gIGxlZnQ6IC01MiU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLWVsZW1lbnQge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZm9ybS1idG4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucHJvai1kZWxldGUge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0xLjVyZW07XFxuICBsZWZ0OiAtNTglO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvai1uYW1lIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnByb2otZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcblxcbi5wcm9qLWNvbnRlbnQge1xcbiAgZmxleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi8qIC0tLS0tLUZPT1RFUiBTRUNUSU9OLS0tLS0tICovXFxuXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiBvcmFuZ2U7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnQgc3R5bGUgc2hlZXRcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBJbXBvcnQgb3RoZXIgSlMgbW9kdWxlc1xuXG5pbXBvcnQgbG9hZFBhZ2UgZnJvbSAnLi9wYWdlLWxvYWQuanMnO1xuaW1wb3J0ICogYXMgUHJvamVjdCBmcm9tICcuL3Byb2plY3RzLmpzJztcbmltcG9ydCAqIGFzIE1vZGFscyBmcm9tICcuL21vZGFscy5qcyc7XG5cbi8vIEluaXRpYWxpemUgY29udGVudFxubG9hZFBhZ2UoKTtcblxuLy8gR2F0aGVyIGRlY2xhcmF0aW9ucyBmb3IgaW50ZXJhY3RpdmUgZWxlbWVudHNcbmNvbnN0IGFkZFByb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2ouYnRuJyk7XG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLmJ0bicpO1xuY29uc3QgY2xlYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXInKTtcbmNvbnN0IHN1Ym1pdFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1N1Ym1pdCcpO1xuY29uc3Qgc3VibWl0UHJvaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qU3VibWl0Jyk7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpO1xuY29uc3QgZm9ybUVzY2FwZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1jbG9zZScpO1xuXG4vLyBBZGQgcmVsZXZhbnQgZXZlbnQgbGlzdGVuZXJzXG5hZGRQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgTW9kYWxzLmRlZmF1bHQpO1xuc3VibWl0UHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFByb2plY3QuYWRkUHJvamVjdCk7XG5mb3JtRXNjYXBlcy5mb3JFYWNoKChidG4pID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE1vZGFscy5kZWFjdGl2YXRlKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmF0ZShlKSB7XG4gIGxldCBtb2RhbDtcblxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctdGFzaycpKSB7XG4gICAgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJyk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctcHJvaicpKSB7XG4gICAgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJyk7XG4gIH0gZWxzZSByZXR1cm47XG5cbiAgaWYgKCFtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZShlKSB7XG4gIC8vIEdyYWIgcG9zc2libGUgbW9kYWwgRE9NIHJlZmVyZW5jZXNcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza05hbWVGaWVsZCcpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2NyaXB0aW9uRmllbGQnKTtcbiAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvak5hbWVGaWVsZCcpO1xuICBjb25zdCBwcm9qRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvakRlc2NyaXB0aW9uRmllbGQnKTtcblxuICBjb25zdCBtb2RhbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIGlmIChtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgdGFza05hbWUudmFsdWUgPSAnJztcbiAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSAnJztcbiAgICBwcm9qTmFtZS52YWx1ZSA9ICcnO1xuICAgIHByb2pEZXNjcmlwdGlvbi52YWx1ZSA9ICcnO1xuICB9XG5cbiAgcmV0dXJuO1xufVxuIiwiaW1wb3J0IFByb2ZQaWMgZnJvbSAnLi9hdmF0YXJzL2F2YXRhci0xLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gQ3JlYXRlIGhlYWRlciBlbGVtZW50XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgLy8gQ3JlYXRlIGhlYWRlciBzdWJzZWN0aW9uIGNvbXBvbmVudHNcbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1zZWN0aW9uJyk7XG4gIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuXG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1zZWN0aW9uJyk7XG4gIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG5cbiAgLy8gQ3JlYXRlIGxlZnQgc2VjdGlvbiBlbGVtZW50c1xuICBjb25zdCBhdmF0YXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYXZhdGFyLmNsYXNzTGlzdC5hZGQoJ2F2YXRhcicpO1xuICBhdmF0YXIuYWx0ID0gJ1Byb2ZpbGUgUGljdHVyZSc7XG4gIGF2YXRhci5zcmMgPSBQcm9mUGljO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICBuYW1lLnRleHRDb250ZW50ID0gJ0FsZXgnO1xuXG4gIC8vIEFkZCBsZWZ0IHNlY3Rpb24gZWxlbWVudHMgdG8gbGVmdCBzZWN0aW9uXG4gIGxlZnQuYXBwZW5kQ2hpbGQoYXZhdGFyKTtcbiAgbGVmdC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAvLyBDcmVhdGUgcmlnaHQgc2VjdGlvbiBlbGVtZW50c1xuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld1Byb2ouY2xhc3NMaXN0LmFkZCgnbmV3LXByb2onKTtcbiAgbmV3UHJvai5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgbmV3UHJvai50ZXh0Q29udGVudCA9ICcrIFByb2plY3QnO1xuXG4gIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKCduZXctdGFzaycpO1xuICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICBuZXdUYXNrLnRleHRDb250ZW50ID0gJysgVGFzayc7XG5cbiAgLy8gQ29tcG9zZSBmb3JtIGZvciBzZWFyY2ggYmFyIGluIHJpZ2h0IHNlY3Rpb25cbiAgY29uc3QgZm9jdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvY3VzLmNsYXNzTGlzdC5hZGQoJ3NlYXJjaC1mb3JtJyk7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC5mb3IgPSAnZmlsdGVyJztcbiAgbGFiZWwudGV4dENvbnRlbnQgPSAnRmlsdGVyIHRvIGEgc3BlY2lmaWMgcHJvamVjdDonO1xuXG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNlYXJjaC5zZXRBdHRyaWJ1dGUoJ2xpc3QnLCAncHJvamVjdC1saXN0Jyk7XG4gIHNlYXJjaC5pZCA9ICdmaWx0ZXInO1xuXG4gIGNvbnN0IGRhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpO1xuICBkYXRhLmlkID0gJ3Byb2plY3QtbGlzdCc7XG5cbiAgLy8gQWRkIGZvcm0gZWxlbWVudHMgdG8gZm9ybVxuICBmb2N1cy5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGZvY3VzLmFwcGVuZENoaWxkKHNlYXJjaCk7XG4gIGZvY3VzLmFwcGVuZENoaWxkKGRhdGEpO1xuXG4gIGNvbnN0IGNsZWFyU2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNsZWFyU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2NsZWFyJyk7XG4gIGNsZWFyU2VhcmNoLnRleHRDb250ZW50ID0gJ0NsZWFyJztcblxuICAvLyBBZGQgcmlnaHQgc2VjdGlvbiBlbGVtZW50cyB0byByaWdodCBzZWN0aW9uXG4gIHJpZ2h0LmFwcGVuZENoaWxkKG5ld1Byb2opO1xuICByaWdodC5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbiAgcmlnaHQuYXBwZW5kQ2hpbGQoZm9jdXMpO1xuICByaWdodC5hcHBlbmRDaGlsZChjbGVhclNlYXJjaCk7XG5cbiAgLy8gQWRkIGhlYWRlciBzdWJzZWN0aW9ucyB0byBoZWFkZXJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxlZnQpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocmlnaHQpO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gQ29udGFpbmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIENyZWF0ZSBtYWluIGNvbnRhaW5lciBlbGVtZW50XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgLy8gQ3JlYXRlIGJsYW5rIGJveCBub3RpZmljYXRpb25cbiAgY29uc3QgYmxhbmtCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmxhbmtCb3guY2xhc3NMaXN0LmFkZCgnYmxhbmstYm94Jyk7XG5cbiAgY29uc3QgYmxhbmtOb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgYmxhbmtOb3RlLnRleHRDb250ZW50ID0gJ1lvdSBkbyBub3QgaGF2ZSBhbnkgcHJvamVjdHMgb3IgdGFza3MuJztcblxuICBibGFua0JveC5hcHBlbmRDaGlsZChibGFua05vdGUpO1xuXG4gIC8vIEFwcGVuZCBibGFuayBib3ggbm90aWZpY2F0aW9uIHRvIGNvbnRhaW5lclxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChibGFua0JveCk7XG5cbiAgLy8gQ3JlYXRlIGFkZCB0YXNrIGZvcm1cblxuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnaW5wdXQtZm9ybScpO1xuICB0YXNrRm9ybS5pZCA9ICd0YXNrLWZvcm0nO1xuXG4gIGNvbnN0IGZvcm1DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtQ2xvc2UuY2xhc3NMaXN0LmFkZCgnZm9ybS1jbG9zZScpO1xuICBmb3JtQ2xvc2UudGV4dENvbnRlbnQgPSAnWCc7XG5cbiAgY29uc3QgdGFza05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHRhc2tOYW1lTGFiZWwuZm9yID0gJ3Rhc2tOYW1lRmllbGQnO1xuICB0YXNrTmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgTmFtZTonO1xuICB0YXNrTmFtZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudCcpO1xuXG4gIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRhc2tOYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnVGFzayBOYW1lJztcbiAgdGFza05hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHRhc2tOYW1lSW5wdXQuaWQgPSAndGFza05hbWVGaWVsZCc7XG4gIHRhc2tOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1lbGVtZW50Jyk7XG5cbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB0YXNrRGVzY3JpcHRpb25MYWJlbC5mb3IgPSAndGFza0Rlc2NyaXB0aW9uRmllbGQnO1xuICB0YXNrRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuICB0YXNrRGVzY3JpcHRpb25MYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQnKTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0Rlc2NyaXB0aW9uJztcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5pZCA9ICd0YXNrRGVzY3JpcHRpb25GaWVsZCc7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudCcpO1xuXG4gIGNvbnN0IHRhc2tTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdGFza1N1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHRhc2tTdWJtaXQuY2xhc3NMaXN0LmFkZCgnZm9ybS1idG4nKTtcbiAgdGFza1N1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICB0YXNrU3VibWl0LmlkID0gJ3Rhc2tTdWJtaXQnO1xuXG4gIC8vIEFwcGVuZCBzdWItY29tcG9uZW50cyBvZiB0YXNrIGZvcm1cbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUNsb3NlKTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza05hbWVMYWJlbCk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xuICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25MYWJlbCk7XG4gIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbiAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza1N1Ym1pdCk7XG5cbiAgLy8gQXBwZW5kIGFkZCB0YXNrIGZvcm0gdG8gY29udGFpbmVyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5cbiAgLy8gQ3JlYXRlIGFkZCBwcm9qZWN0IGZvcm1cblxuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnaW5wdXQtZm9ybScpO1xuICBwcm9qZWN0Rm9ybS5pZCA9ICdwcm9qZWN0LWZvcm0nO1xuXG4gIGNvbnN0IHByb2pOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBwcm9qTmFtZUxhYmVsLmZvciA9ICdwcm9qTmFtZUZpZWxkJztcbiAgcHJvak5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWU6JztcbiAgcHJvak5hbWVMYWJlbC5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQnKTtcblxuICBjb25zdCBwcm9qTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcHJvak5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBwcm9qTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ1Byb2plY3QgTmFtZSc7XG4gIHByb2pOYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBwcm9qTmFtZUlucHV0LmlkID0gJ3Byb2pOYW1lRmllbGQnO1xuICBwcm9qTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudCcpO1xuXG4gIGNvbnN0IHByb2pEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJvakRlc2NyaXB0aW9uTGFiZWwuZm9yID0gJ3Byb2pEZXNjcmlwdGlvbkZpZWxkJztcbiAgcHJvakRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgcHJvakRlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnZm9ybS1lbGVtZW50Jyk7XG5cbiAgY29uc3QgcHJvakRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwcm9qRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBwcm9qRGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdEZXNjcmlwdGlvbic7XG4gIHByb2pEZXNjcmlwdGlvbklucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgcHJvakRlc2NyaXB0aW9uSW5wdXQuaWQgPSAncHJvakRlc2NyaXB0aW9uRmllbGQnO1xuICBwcm9qRGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQnKTtcblxuICBjb25zdCBwcm9qU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2pTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBwcm9qU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnRuJyk7XG4gIHByb2pTdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgcHJvalN1Ym1pdC5pZCA9ICdwcm9qU3VibWl0JztcblxuICAvLyBBcHBlbmQgc3ViLWNvbXBvbmVudHMgb2YgcHJvamVjdCBmb3JtXG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1DbG9zZSk7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2pOYW1lTGFiZWwpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qTmFtZUlucHV0KTtcbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvakRlc2NyaXB0aW9uTGFiZWwpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qRGVzY3JpcHRpb25JbnB1dCk7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2pTdWJtaXQpO1xuXG4gIC8vIEFwcGVuZCBhZGQgcHJvamVjdCBmb3JtIHRvIGNvbnRhaW5lclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuXG4gIC8qKiBBZGRpdGlvbmFsIEZ1bmN0aW9uYWxpdHkgdG8gYWRkIGxhdGVyOiBwYWdlIGxvYWRzICd1bi1hc3NpZ25lZCcgcHJvamVjdCBjb2x1bW4uICovXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGb290ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gQ3JlYXRlIGZvb3RlciBlbGVtZW50XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgLy8gQ3JlYXRlIGZvb3RlciB0ZXh0XG4gIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSAnXFx1MDBBOSBBbGV4IFd1cm0nO1xuXG4gIC8vIEFkZCBmb290ZXIgdGV4dCB0byBmb290ZXJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG4gIC8vIEFkZCBoZWFkZXIsIGNvbnRhaW5lciwgYW5kIGZvb3RlciB0byBib2R5XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG4iLCJleHBvcnQgY29uc3QgcHJvamVjdExpc3QgPSBbXTtcbndpbmRvdy5wcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgc2V0IG5hbWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMTApIHtcbiAgICAgIGFsZXJ0KCdOYW1lIGlzIHRvbyBsb25nLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDUwKSB7XG4gICAgICBhbGVydCgnRGVzY3JpcHRpb24gaXMgdG9vIGxvbmcuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gIH1cblxuICB0YXNrcyA9IFtdO1xuXG4gIGdldFRhc2tzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLl90YXNrcztcbiAgfTtcblxuICBnZXRUYXNrTmFtZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuX3Rhc2tzLm1hcCgoeCkgPT4geC5uYW1lKTtcbiAgfTtcblxuICBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICB0aGlzLl90YXNrcy5wdXNoKHRhc2spO1xuICB9O1xuXG4gIHJlbW92ZVRhc2sgPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IGlkeCA9IHRoaXMuX3Rhc2tOYW1lcy5pbmRleE9mKHRhc2submFtZSk7XG4gICAgdGhpcy5fdGFza3Muc3BsaWNlKGlkeCwgMSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIC8vIEdsb2JhbCBkZWNsYXJhdGlvbnNcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG4gIC8vIFJldHJpZXZlIHZhbHVlcyBmcm9tIGZvcm1cbiAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvak5hbWVGaWVsZCcpLnZhbHVlO1xuICBjb25zdCBwcm9qRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvakRlc2NyaXB0aW9uRmllbGQnKS52YWx1ZTtcblxuICBjb25zb2xlLmxvZyhwcm9qTmFtZSk7XG4gIGNvbnNvbGUubG9nKHByb2pEZXNjcmlwdGlvbik7XG5cbiAgLy8gRG9uJ3QgY29tcGxldGUgZnVuY3Rpb24gYWN0aW9uIGlmIG5vIGlucHV0IHByb3ZpZGVkXG4gIGlmICghcHJvak5hbWUgfHwgIXByb2pEZXNjcmlwdGlvbikgcmV0dXJuO1xuXG4gIC8vIEhpZGUgbm8gcHJvamVjdHMgbm90aWNlIGlmIGZpcnN0IHByb2plY3QgYmVpbmcgYWRkZWRcbiAgaWYgKHByb2plY3RMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgY29uc3QgYmxhbmtCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxhbmstYm94Jyk7XG4gICAgYmxhbmtCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIC8vIENyZWFlIHByb2plY3Qgb2JqZWN0IGFuZCBhZGQgaXQgdG8gdGhlIGdsb2JhbCBwcm9qZWN0cyBsaXN0XG4gIGxldCBwcm9qID0gbmV3IFByb2plY3QocHJvak5hbWUsIHByb2pEZXNjcmlwdGlvbik7XG4gIHByb2plY3RMaXN0LnB1c2gocHJvaik7XG5cbiAgLy8gQ3JlYXRlIHByb2plY3QgRE9NIGVsZW1lbnQgYW5kIGFkZCBzdWItY29tcG9uZW50c1xuICBjb25zdCBuZXdQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld1Byb2ouY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gIGNvbnN0IG5ld1Byb2pEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3UHJvakRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdwcm9qLWRlbGV0ZScpO1xuICBuZXdQcm9qRGVsZXRlLnRleHRDb250ZW50ID0gJ1gnO1xuICBuZXdQcm9qRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlUHJvamVjdCk7XG5cbiAgY29uc3QgbmV3UHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBuZXdQcm9qTmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qLW5hbWUnKTtcbiAgbmV3UHJvak5hbWUudGV4dENvbnRlbnQgPSBwcm9qTmFtZTtcblxuICBjb25zdCBuZXdQcm9qRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5ld1Byb2pEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdwcm9qLWRlc2NyaXB0aW9uJyk7XG4gIG5ld1Byb2pEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2pEZXNjcmlwdGlvbjtcblxuICBjb25zdCBuZXdQcm9qQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdQcm9qQ29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qLWNvbnRlbnQnKTtcblxuICBuZXdQcm9qLmFwcGVuZENoaWxkKG5ld1Byb2pEZWxldGUpO1xuICBuZXdQcm9qLmFwcGVuZENoaWxkKG5ld1Byb2pOYW1lKTtcbiAgbmV3UHJvai5hcHBlbmRDaGlsZChuZXdQcm9qRGVzY3JpcHRpb24pO1xuICBuZXdQcm9qLmFwcGVuZENoaWxkKG5ld1Byb2pDb250ZW50KTtcblxuICAvLyBBcHBlbmQgcHJvamVjdCB0byBjb250YWluZXIgZGl2XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qKTtcblxuICAvLyBDbGVhciB2YWx1ZXMgYW5kIGNsb3NlIGZvcm1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pOYW1lRmllbGQnKS52YWx1ZSA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvakRlc2NyaXB0aW9uRmllbGQnKS52YWx1ZSA9ICcnO1xuICBjb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcbiAgcHJvakZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGUpIHtcbiAgY29uc3QgcHJvaiA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIGNvbnNvbGUubG9nKHByb2opO1xuXG4gIC8vIFJlbW92ZSBwcm9qZWN0IGZyb20gZ2xvYmFsIHByb2plY3RzIGxpc3RcbiAgY29uc3QgcHJvamVjdE5hbWVzTGlzdCA9IHByb2plY3RMaXN0Lm1hcCgoeCkgPT4geC5uYW1lKTtcbiAgY29uc29sZS5sb2cocHJvamVjdE5hbWVzTGlzdCk7XG4gIGNvbnN0IHByb2pJZHggPSBwcm9qZWN0TmFtZXNMaXN0LmluZGV4T2YocHJvai5jaGlsZHJlblsxXS50ZXh0Q29udGVudCk7XG4gIGNvbnNvbGUubG9nKHByb2pJZHgpO1xuICBwcm9qZWN0TGlzdC5zcGxpY2UocHJvaklkeCwgMSk7XG5cbiAgLy8gRGVsZXRlIHByb2plY3QgRE9NIGVsZW1lbnRcbiAgcHJvai5yZW1vdmUoKTtcblxuICAvLyBSZS1kaXNwbGF5IG5vIHByb2plY3RzIG5vdGljZSBpZiBhbGwgcHJvamVjdHMgaGF2ZSBiZWVuIGRlbGV0ZWRcbiAgaWYgKHByb2plY3RMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgY29uc3QgYmxhbmtCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxhbmstYm94Jyk7XG4gICAgYmxhbmtCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfVxufVxuXG4vLyBBZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkgdG8gYWRkIGxhdGVyXG4vLyBleHBvcnQgZnVuY3Rpb24gbW9kaWZ5UHJvamVjdChwcm9qZWN0LCBwcm9wZXJ0eSkge31cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==