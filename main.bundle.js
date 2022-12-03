"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/home-background2.jpg */ "./src/img/home-background2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/homeBackground.jpg */ "./src/img/homeBackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/contact.jpg */ "./src/img/contact.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Variables */\r\n:root{\r\n  --primary-color: rgb(255, 0, 179);\r\n}\r\n\r\n/* Reset CSS */\r\nbody{\r\n  margin:0;\r\n  padding: 0;\r\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  background:black;\r\n}\r\n\r\n.navbar{\r\n  display:flex;\r\n  justify-content: center;\r\n  padding: 20px;\r\n  background-color: black;\r\n  display:flex;\r\n  gap: 100px;\r\n}\r\n\r\n.nav-buttons{\r\n  position:relative;\r\n  padding: 10px 20px;\r\n  background-color: black;\r\n  border:none;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n  color:white;\r\n  top:0;\r\n  transition: top 0.2s;\r\n}\r\n\r\n.nav-buttons:hover{\r\n  top: -10px;\r\n}\r\n\r\n.active{\r\n  font-weight: bold; \r\n  color: var(--primary-color);\r\n  border-bottom: 2px solid white;\r\n}\r\n\r\n.home{\r\n  display:flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding-bottom: 100px;\r\n  animation: fadeIn 0.5s;\r\n}\r\n\r\n.home{\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  width: 100%;\r\n}\r\n\r\n.home-logo{\r\n  padding: 10px 0 30px 0;\r\n  background: black;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.main-logo{\r\n  width: 650px;\r\n  height: 260px;\r\n}\r\n\r\n.intro-section{\r\n  margin-top: 100px;\r\n  width: 30%;\r\n  background-color: rgba(0,0,0,0.6);\r\n  height:auto;\r\n  text-align:center;\r\n  color:white;\r\n  padding: 20px;\r\n}\r\n\r\n.intro-image{\r\n  margin: 20px 0;\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 300px;\r\n  border: 2px solid white;\r\n}\r\n\r\n\r\n.menu{\r\nbackground: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\nanimation: fadeIn 0.5s;\r\n}\r\n\r\n.card-group{\r\n  display:grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(3, 1fr);\r\n  padding:30px 60px;\r\n  column-gap: 30px;\r\n  background-color: rgba(0,0,0,0.6);\r\n}\r\n\r\n.menu-card{\r\n  border: 2px solid var(--primary-color);\r\n  padding: 20px;\r\n}\r\n\r\n.menu-card:nth-child(1){\r\n  grid-column: 1 / 2;\r\n  grid-row: 1 / 3;\r\n}\r\n\r\n.menu-card:nth-child(2){\r\n  grid-column: 2 / 3;\r\n  grid-row: 1 / 3;\r\n}\r\n\r\n.menu-card:nth-child(3){\r\n  grid-column: 2 / 3;\r\n  grid-row: 3 / 4;\r\n}\r\n\r\n.menu-card:nth-child(4){\r\n  grid-column: 3 / 4;\r\n  grid-row: 1 / 2;\r\n}\r\n\r\n.menu-card:nth-child(5){\r\n  grid-column: 3 / 4;\r\n  grid-row: 2 / 3;\r\n}\r\n\r\n.menu-card:nth-child(6){\r\n  grid-column: 1 / 2;\r\n  grid-row: 3 / 4;\r\n}\r\n\r\n.menu-card:nth-child(7){\r\n  margin-top: 20px;\r\n  border: none;\r\n  display: flex;\r\n  align-items: center;\r\n  grid-column: 3 / 4;\r\n  grid-row: 3 / 4;\r\n}\r\n\r\n.menu-card > .home-logo > img{\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.menu-label{\r\n  text-align:center;\r\n  color:var(--primary-color);\r\n  font-size: 2rem;\r\n  padding: 0 20px;\r\n}\r\n\r\n\r\n/* Add top margin on all menu items except the first */\r\n.item-list > .menu-item + .menu-item{\r\n  margin-top: 40px;\r\n}\r\n\r\n.menu-item{\r\n  color: white;\r\n  font-size: .8rem;\r\n}\r\n\r\n.name-rating-group{\r\n  display:flex;\r\n  justify-content: space-between;\r\n  padding:0;\r\n}\r\n\r\n.name-rating-group > h1{\r\n  margin: 0 5px 0 0;\r\n}\r\n\r\n.item-description{\r\n  color:gray;\r\n  font-style: italic;\r\n  margin:0;\r\n}\r\n\r\n.contact{\r\n  display:flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  padding: 100px 20%;\r\n  height: 40vw;\r\n  animation: fadeIn 0.5s;\r\n}\r\n\r\n.address-section{\r\n  text-align: center;\r\n  margin: 20px;\r\n  height: auto;\r\n  background-color:rgba(0,0,0,0.6);\r\n  padding: 40px;\r\n  display:flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n\r\n}\r\n\r\n.address-section > h1{\r\n  margin:0;\r\n  color:white;\r\n}\r\n\r\n.address-section > img{\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 20px;\r\n}\r\n\r\n/* animation */\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA,cAAc;AACd;EACE,iCAAiC;AACnC;;AAEA,cAAc;AACd;EACE,QAAQ;EACR,UAAU;EACV,2DAA2D;EAC3D,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,uBAAuB;EACvB,WAAW;EACX,eAAe;EACf,eAAe;EACf,WAAW;EACX,KAAK;EACL,oBAAoB;AACtB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,mDAA8C;EAC9C,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,iCAAiC;EACjC,WAAW;EACX,iBAAiB;EACjB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,uBAAuB;AACzB;;;AAGA;AACA,mDAA4C;AAC5C,sBAAsB;AACtB;;AAEA;EACE,YAAY;EACZ,qCAAqC;EACrC,kCAAkC;EAClC,iBAAiB;EACjB,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,sCAAsC;EACtC,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,eAAe;EACf,eAAe;AACjB;;;AAGA,sDAAsD;AACtD;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,mDAAqC;EACrC,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,gCAAgC;EAChC,aAAa;EACb,YAAY;EACZ,sBAAsB;EACtB,SAAS;;AAEX;;AAEA;EACE,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB;;AAEA,cAAc;AACd;EACE;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":["/* Variables */\r\n:root{\r\n  --primary-color: rgb(255, 0, 179);\r\n}\r\n\r\n/* Reset CSS */\r\nbody{\r\n  margin:0;\r\n  padding: 0;\r\n  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  background:black;\r\n}\r\n\r\n.navbar{\r\n  display:flex;\r\n  justify-content: center;\r\n  padding: 20px;\r\n  background-color: black;\r\n  display:flex;\r\n  gap: 100px;\r\n}\r\n\r\n.nav-buttons{\r\n  position:relative;\r\n  padding: 10px 20px;\r\n  background-color: black;\r\n  border:none;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n  color:white;\r\n  top:0;\r\n  transition: top 0.2s;\r\n}\r\n\r\n.nav-buttons:hover{\r\n  top: -10px;\r\n}\r\n\r\n.active{\r\n  font-weight: bold; \r\n  color: var(--primary-color);\r\n  border-bottom: 2px solid white;\r\n}\r\n\r\n.home{\r\n  display:flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100%;\r\n  padding-bottom: 100px;\r\n  animation: fadeIn 0.5s;\r\n}\r\n\r\n.home{\r\n  background: url('../img/home-background2.jpg');\r\n  background-size: cover;\r\n  width: 100%;\r\n}\r\n\r\n.home-logo{\r\n  padding: 10px 0 30px 0;\r\n  background: black;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.main-logo{\r\n  width: 650px;\r\n  height: 260px;\r\n}\r\n\r\n.intro-section{\r\n  margin-top: 100px;\r\n  width: 30%;\r\n  background-color: rgba(0,0,0,0.6);\r\n  height:auto;\r\n  text-align:center;\r\n  color:white;\r\n  padding: 20px;\r\n}\r\n\r\n.intro-image{\r\n  margin: 20px 0;\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 300px;\r\n  border: 2px solid white;\r\n}\r\n\r\n\r\n.menu{\r\nbackground: url('../img/homeBackground.jpg');\r\nanimation: fadeIn 0.5s;\r\n}\r\n\r\n.card-group{\r\n  display:grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  grid-template-rows: repeat(3, 1fr);\r\n  padding:30px 60px;\r\n  column-gap: 30px;\r\n  background-color: rgba(0,0,0,0.6);\r\n}\r\n\r\n.menu-card{\r\n  border: 2px solid var(--primary-color);\r\n  padding: 20px;\r\n}\r\n\r\n.menu-card:nth-child(1){\r\n  grid-column: 1 / 2;\r\n  grid-row: 1 / 3;\r\n}\r\n\r\n.menu-card:nth-child(2){\r\n  grid-column: 2 / 3;\r\n  grid-row: 1 / 3;\r\n}\r\n\r\n.menu-card:nth-child(3){\r\n  grid-column: 2 / 3;\r\n  grid-row: 3 / 4;\r\n}\r\n\r\n.menu-card:nth-child(4){\r\n  grid-column: 3 / 4;\r\n  grid-row: 1 / 2;\r\n}\r\n\r\n.menu-card:nth-child(5){\r\n  grid-column: 3 / 4;\r\n  grid-row: 2 / 3;\r\n}\r\n\r\n.menu-card:nth-child(6){\r\n  grid-column: 1 / 2;\r\n  grid-row: 3 / 4;\r\n}\r\n\r\n.menu-card:nth-child(7){\r\n  margin-top: 20px;\r\n  border: none;\r\n  display: flex;\r\n  align-items: center;\r\n  grid-column: 3 / 4;\r\n  grid-row: 3 / 4;\r\n}\r\n\r\n.menu-card > .home-logo > img{\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.menu-label{\r\n  text-align:center;\r\n  color:var(--primary-color);\r\n  font-size: 2rem;\r\n  padding: 0 20px;\r\n}\r\n\r\n\r\n/* Add top margin on all menu items except the first */\r\n.item-list > .menu-item + .menu-item{\r\n  margin-top: 40px;\r\n}\r\n\r\n.menu-item{\r\n  color: white;\r\n  font-size: .8rem;\r\n}\r\n\r\n.name-rating-group{\r\n  display:flex;\r\n  justify-content: space-between;\r\n  padding:0;\r\n}\r\n\r\n.name-rating-group > h1{\r\n  margin: 0 5px 0 0;\r\n}\r\n\r\n.item-description{\r\n  color:gray;\r\n  font-style: italic;\r\n  margin:0;\r\n}\r\n\r\n.contact{\r\n  display:flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: url('../img/contact.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  padding: 100px 20%;\r\n  height: 40vw;\r\n  animation: fadeIn 0.5s;\r\n}\r\n\r\n.address-section{\r\n  text-align: center;\r\n  margin: 20px;\r\n  height: auto;\r\n  background-color:rgba(0,0,0,0.6);\r\n  padding: 40px;\r\n  display:flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n\r\n}\r\n\r\n.address-section > h1{\r\n  margin:0;\r\n  color:white;\r\n}\r\n\r\n.address-section > img{\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 20px;\r\n}\r\n\r\n/* animation */\r\n@keyframes fadeIn {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactComponent": () => (/* binding */ createContactComponent)
/* harmony export */ });
/* harmony import */ var _img_que_pasa_branch_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/que-pasa-branch.png */ "./src/img/que-pasa-branch.png");


function createAddressSection(){
  let element = document.createElement('div');
  element.classList.add('address-section');

  let phoneNumber = document.createElement('h1');
  phoneNumber.textContent = "+6562356626";

  let webLink = document.createElement('h1');
  webLink.textContent = "quepasa.com.sg";

  let address = document.createElement('h1');
  address.textContent = "7 Emerald Hill Rd, Singapore 229291";

  let locationImage = new Image();
  locationImage.src = _img_que_pasa_branch_png__WEBPACK_IMPORTED_MODULE_0__;

  element.append(phoneNumber, webLink, address, locationImage);
  
  return element;
}

function createContactComponent(){
  let element = document.createElement('div');
  element.classList.add('contact');

  element.appendChild(createAddressSection());

  return element;
}



/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomeComponent": () => (/* binding */ createHomeComponent),
/* harmony export */   "createHomeLogo": () => (/* binding */ createHomeLogo)
/* harmony export */ });
/* harmony import */ var _img_main_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/main-logo.png */ "./src/img/main-logo.png");
/* harmony import */ var _img_intro_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/intro-image.jpg */ "./src/img/intro-image.jpg");



function createHomeLogo(){
  const element = document.createElement('div');
  element.classList.add('home-logo');
  let homeLogo = new Image();
  homeLogo.src = _img_main_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  homeLogo.classList.add('main-logo');
  element.appendChild(homeLogo);

  return element;
}

function createIntroSection(){
  const element = document.createElement('div');
  element.classList.add('intro-section');

  const mainHeader = document.createElement('h1');
  mainHeader.textContent = 'Best bar of the State!';

  const header2 = document.createElement('h2');
  header2.textContent = "Serving the best drinks since 1966.";

  
  const sectionImage = new Image();
  sectionImage.src = _img_intro_image_jpg__WEBPACK_IMPORTED_MODULE_1__;
  sectionImage.classList.add('intro-image');

  const para = document.createElement('h2');
  para.textContent = 'Visit us or Order online!';

  element.appendChild(mainHeader);

  element.appendChild(header2);

  element.appendChild(sectionImage);

  element.appendChild(para);

  return element;
}

function createHomeComponent(){
  let element = document.createElement('div');
  element.classList.add('home');

  element.appendChild(createHomeLogo());

  element.appendChild(createIntroSection());  
  return element;
}



/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuComponent": () => (/* binding */ createMenuComponent)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/components/home.js");


const eats = [
  {
    name:"Guacamole",
    description:"w/ corn tostadas, salsa picante, roasted pepitas & lime. [VE GF]",
    rating: "12"
  },
  {
    name:"Crispy Pollo",
    description:"Southern fried & served w/ chipotle aioli",
    rating: "14.5"
  },
  {
    name: "Chorizo & Manchego Cheese Croquettes",
    description:"w/ lime & chipotle aioli. 4pc.",
    rating:"14"
  },
  {
    name:"Vegetable Taquitos",
    description:"Fried vegetable house made salsa roja dip & sour cream. 3pc",
    rating: "14"
  },
  {
    name: "Charred Street Corn",
    description: "w/ lime & chipotle aioli, Manchego cheese & chilli salt. 3pc. [GF VEO]" ,
    rating:"12"
  },
  {
    name:"Crispy Calamares",
    description:"w/ chipotle aioli",
    rating:"15"
  },
  {
    name:"Chiken Fajita Ensalada",
    description:"Shredded chicken tinga, lettuce, charred corn. [VEO]",
    rating:"19"
  },
  {
    name:"Patatas Bravas",
    description:"w/ chorizo, smoked paprika, parseley & Manchego. [GF DFO]",
    rating:"13"
  },
  {
    name:"Chilli Con Carne",
    description:"w/ mixed rice, sour cream, corn chips & Manchego cheese",
    rating:"24"
  },
  
]

const wine = [
  {
    name:"Hare & Tortoisee Prosecco",
    description:"NV Yarra Valley, VIC",
    rating: "10 / 48"
  },
  {
    name:"Plus Minus Zero Alcohol Prosecco",
    description:"",
    rating: "6.5 / 30"
  },
  {
    name: "Mandoleto Pinot Grigio",
    description:"2020, Italy",
    rating:"9.5 / 45"
  },
  {
    name:"The Pass Sauvignon Blanc",
    description:"2020, Marlborough Nz",
    rating: "10 / 48"
  },
  {
    name: "Tread Softly Rose",
    description: "2021, SA" ,
    rating:"10/48"
  },
  {
    name:"Plus Minus Zero Alcohol Rose",
    description:"",
    rating:"6.5 / 30"
  },
  {
    name:"Mesta Tempranillo",
    description:"2020, Spain",
    rating:"19"
  },
  {
    name:"The Hare & Tortoise Pinot Noir",
    description:"2021, Yarre Valley Vic",
    rating:"11.5 / 55"
  },
]

const beer = [
  {
    name:"Heaps Normal XPA Alcohol Free Beer",
    description:"",
    rating: "9"
  },
  {
    name:"Asahi",
    description:"",
    rating: "9.5"
  },
  {
    name: "Corona",
    description:"",
    rating:"9.5"
  },
  {
    name:"Stone & Wood Pacific Ale",
    description:"",
    rating: "11"
  },
  {
    name: "2 Brothers Brewery Little Apple Cider",
    description: "" ,
    rating:"9.5"
  },
  
]

const cocktails = [
  {
    name:"Main St Espresso Martini",
    description:"Eristoff Vodka, Sailor Jerry Spiced Rum, Baileys, Kahlua, Espresso (fancy w/ Gray Goose - add 3)",
    rating: "19.5"
  },
  {
    name:"Winter Garden",
    description:"Bombay Gin, Elderflower, Lemon, Apple, Cucumber",
    rating: "18.5"
  },
  {
    name: "Fire & Ice",
    description:"Cinnamon Whiskey, Lemon, Falernum, Whites",
    rating:"19"
  },
  {
    name:"Pash Me Off",
    description:"Bacardi Rum, Passionfruit Liqueur, Passionfruit, Pulp, Lime, Vanilla",
    rating: "20"
  },
]

const margaritas = [
  {
    name:"Classic",
    description:"Patron Silver Tequila, Contreau, Lime, Agave",
    rating: ""
  },
  {
    name:"Coconut",
    description:"Tequila, Contreau, Lime, Agave",
    rating: ""
  },
  {
    name: "Strawberry",
    description:"Patron Silver Tequila, Contreau, Strawberry, Lime",
    rating:""
  },
  {
    name:"Spicy",
    description:"Jalapeno Infused Blanco Tequila, Cointreau, Lime, Agave",
    rating: ""
  },  
]

const gin = [
  {
    name:"Beefeater 24",
    description:"",
    rating: "10"
  },
  {
    name:"The Botanist",
    description:"",
    rating: "12"
  },
  {
    name: "Roku Gin",
    description:"",
    rating:"12"
  },
  {
    name:"Monkey 47",
    description:"",
    rating: "12"
  },  
  {
    name:"Hendricks",
    description:"",
    rating: "12"
  },  
  {
    name:"Hendrick Lunar",
    description:"",
    rating: "12"
  },  
  {
    name:"Hendrick Neptunia",
    description:"",
    rating: "12"
  },  
]

function createMenuItem(name, description, rating){
  let element = document.createElement('div');
  element.classList.add('menu-item');
  
  let nameRatingGroup = document.createElement('div');
  nameRatingGroup.classList.add('name-rating-group');

  let itemName = document.createElement('h1');
  itemName.textContent = name;
  let itemRating = document.createElement('h1');
  itemRating.textContent = rating;

  nameRatingGroup.append(itemName, itemRating);

  let itemDescription = document.createElement('h2');
  itemDescription.textContent = description;
  itemDescription.classList.add('item-description');

  element.append(nameRatingGroup, itemDescription);

  return element
}


function createCards(){
  let element = document.createElement('div');
  element.classList.add('card-group');

  let card1 = document.createElement('fieldset');
  card1.classList.add('menu-card');
  let legend1 = document.createElement('legend');
  let itemList1 = document.createElement('div')
  itemList1.classList.add('item-list');

  eats.forEach(item =>{
    itemList1.appendChild(createMenuItem(item.name, item.description, item.rating));
  });

  legend1.textContent = 'Eats';
  legend1.classList.add('menu-label');



  let card2 = document.createElement('fieldset');
  card2.classList.add('menu-card');
  let itemList2 = document.createElement('div')
  itemList2.classList.add('item-list');


  wine.forEach(item =>{
    itemList2.appendChild(createMenuItem(item.name, item.description, item.rating));
  });


  let legend2 = document.createElement('legend');
  legend2.textContent = 'Wine';
  legend2.classList.add('menu-label');

  let card3 = document.createElement('fieldset');
  card3.classList.add('menu-card');
  let itemList3 = document.createElement('div')
  itemList3.classList.add('item-list');


  beer.forEach(item =>{
    itemList3.appendChild(createMenuItem(item.name, item.description, item.rating));
  });


  let legend3 = document.createElement('legend');
  legend3.textContent = 'Beers';
  legend3.classList.add('menu-label');

  let card4 = document.createElement('fieldset');
  card4.classList.add('menu-card');
  let itemList4 = document.createElement('div')
  itemList4.classList.add('item-list');

  cocktails.forEach(item =>{
    itemList4.appendChild(createMenuItem(item.name, item.description, item.rating));
  });

  let legend4 = document.createElement('legend');
  legend4.textContent = 'Cocktails';
  legend4.classList.add('menu-label');

  let card5 = document.createElement('fieldset');
  card5.classList.add('menu-card');
  let itemList5 = document.createElement('div')
  itemList5.classList.add('item-list');

  margaritas.forEach(item =>{
    itemList5.appendChild(createMenuItem(item.name, item.description, item.rating));
  });

  let legend5 = document.createElement('legend');
  legend5.textContent = 'Margaritas';
  legend5.classList.add('menu-label');

  let card6 = document.createElement('fieldset');
  card6.classList.add('menu-card');
  let itemList6 = document.createElement('div')
  itemList6.classList.add('item-list');

  gin.forEach(item =>{
    itemList6.appendChild(createMenuItem(item.name, item.description, item.rating));
  });

  let legend6 = document.createElement('legend');
  legend6.textContent = 'Gin';
  legend6.classList.add('menu-label');


  let card7 = document.createElement('fieldset');
  card7.classList.add('menu-card');
  card7.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createHomeLogo)());

  card1.append(legend1, itemList1);
  card2.append(legend2, itemList2);
  card3.append(legend3, itemList3);
  card4.append(legend4, itemList4);
  card5.append(legend5, itemList5);
  card6.append(legend6, itemList6);
  
  element.append(card1, card2, card3, card4, card5, card6, card7);

  return element;
}

function createMenuComponent(){
  let element = document.createElement('div');
  element.classList.add('menu');

  element.appendChild(createCards());
  return element;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ "./src/components/home.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact */ "./src/components/contact.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");






let navbar = navbarComponent();
let buttons = Array.prototype.slice.call(navbar.querySelectorAll('.nav-buttons'));

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

let content = mainComponent();

document.body.appendChild(navbar);
document.body.appendChild(content);

function navbarComponent(){
  const element = document.createElement('header');
  element.classList.add('navbar');

  // Three Buttons
  const homeButton = document.createElement('button');
  homeButton.classList.add('nav-buttons');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', ()=>{
    content.innerHTML = '';
    content.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_0__.createHomeComponent)());
  });

  const menuButton = document.createElement('button');
  menuButton.classList.add('nav-buttons');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', ()=>{
    content.innerHTML = '';
    content.appendChild((0,_components_menu__WEBPACK_IMPORTED_MODULE_2__.createMenuComponent)());
  });


  const contactButton = document.createElement('button');
  contactButton.classList.add('nav-buttons');
  contactButton.textContent = 'Contact';
  contactButton.addEventListener('click', ()=>{
    content.innerHTML = '';
    content.appendChild((0,_components_contact__WEBPACK_IMPORTED_MODULE_1__.createContactComponent)());
  });

  element.append(homeButton, menuButton, contactButton);

  return element
}

function mainComponent(){
  let element = document.createElement('div');
  element.classList.add('content');


  // display home component on initial load
  buttons[0].classList.add('active');
  element.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_0__.createHomeComponent)());
  return element;
}



/***/ }),

/***/ "./src/img/contact.jpg":
/*!*****************************!*\
  !*** ./src/img/contact.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a55b995ba612532e31a6.jpg";

/***/ }),

/***/ "./src/img/home-background2.jpg":
/*!**************************************!*\
  !*** ./src/img/home-background2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a44ac63a64a29da3f864.jpg";

/***/ }),

/***/ "./src/img/homeBackground.jpg":
/*!************************************!*\
  !*** ./src/img/homeBackground.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e428c9cb725f229ea03b.jpg";

/***/ }),

/***/ "./src/img/intro-image.jpg":
/*!*********************************!*\
  !*** ./src/img/intro-image.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8f86e6191215e1add89.jpg";

/***/ }),

/***/ "./src/img/main-logo.png":
/*!*******************************!*\
  !*** ./src/img/main-logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55ad53588d0982c88062.png";

/***/ }),

/***/ "./src/img/que-pasa-branch.png":
/*!*************************************!*\
  !*** ./src/img/que-pasa-branch.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6524f76e6118b4e5320c.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFEQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZWd0Q7QUFDTTtBQUNOO0FBQzVCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0JBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUVBQW1CO0FBQzNDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUVBQW1CO0FBQzNDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyRUFBc0I7QUFDOUMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFFQUFtQjtBQUN6QztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2hvbWUtYmFja2dyb3VuZDIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2hvbWVCYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltZy9jb250YWN0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVmFyaWFibGVzICovXFxyXFxuOnJvb3R7XFxyXFxuICAtLXByaW1hcnktY29sb3I6IHJnYigyNTUsIDAsIDE3OSk7XFxyXFxufVxcclxcblxcclxcbi8qIFJlc2V0IENTUyAqL1xcclxcbmJvZHl7XFxyXFxuICBtYXJnaW46MDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6YmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJ7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGdhcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnV0dG9uc3tcXHJcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXI6bm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOndoaXRlO1xcclxcbiAgdG9wOjA7XFxyXFxuICB0cmFuc2l0aW9uOiB0b3AgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1idXR0b25zOmhvdmVye1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZXtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyBcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWV7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWV7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1sb2dve1xcclxcbiAgcGFkZGluZzogMTBweCAwIDMwcHggMDtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWxvZ297XFxyXFxuICB3aWR0aDogNjUwcHg7XFxyXFxuICBoZWlnaHQ6IDI2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8tc2VjdGlvbntcXHJcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcXHJcXG4gIGhlaWdodDphdXRvO1xcclxcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICBjb2xvcjp3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnRyby1pbWFnZXtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tZW51e1xcclxcbmJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuYW5pbWF0aW9uOiBmYWRlSW4gMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtZ3JvdXB7XFxyXFxuICBkaXNwbGF5OmdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIHBhZGRpbmc6MzBweCA2MHB4O1xcclxcbiAgY29sdW1uLWdhcDogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZDpudGgtY2hpbGQoMSl7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxuICBncmlkLXJvdzogMSAvIDM7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmQ6bnRoLWNoaWxkKDIpe1xcclxcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkOm50aC1jaGlsZCgzKXtcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gIGdyaWQtcm93OiAzIC8gNDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZDpudGgtY2hpbGQoNCl7XFxyXFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxyXFxuICBncmlkLXJvdzogMSAvIDI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmQ6bnRoLWNoaWxkKDUpe1xcclxcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcclxcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkOm50aC1jaGlsZCg2KXtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXHJcXG4gIGdyaWQtcm93OiAzIC8gNDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZDpudGgtY2hpbGQoNyl7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxyXFxuICBncmlkLXJvdzogMyAvIDQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmQgPiAuaG9tZS1sb2dvID4gaW1ne1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxhYmVse1xcclxcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICBjb2xvcjp2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQWRkIHRvcCBtYXJnaW4gb24gYWxsIG1lbnUgaXRlbXMgZXhjZXB0IHRoZSBmaXJzdCAqL1xcclxcbi5pdGVtLWxpc3QgPiAubWVudS1pdGVtICsgLm1lbnUtaXRlbXtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW17XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1yYXRpbmctZ3JvdXB7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOjA7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLXJhdGluZy1ncm91cCA+IGgxe1xcclxcbiAgbWFyZ2luOiAwIDVweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWRlc2NyaXB0aW9ue1xcclxcbiAgY29sb3I6Z3JheTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIG1hcmdpbjowO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwMHB4IDIwJTtcXHJcXG4gIGhlaWdodDogNDB2dztcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzLXNlY3Rpb257XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC42KTtcXHJcXG4gIHBhZGRpbmc6IDQwcHg7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcy1zZWN0aW9uID4gaDF7XFxyXFxuICBtYXJnaW46MDtcXHJcXG4gIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcy1zZWN0aW9uID4gaW1ne1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBhbmltYXRpb24gKi9cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVB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O0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVmFyaWFibGVzICovXFxyXFxuOnJvb3R7XFxyXFxuICAtLXByaW1hcnktY29sb3I6IHJnYigyNTUsIDAsIDE3OSk7XFxyXFxufVxcclxcblxcclxcbi8qIFJlc2V0IENTUyAqL1xcclxcbmJvZHl7XFxyXFxuICBtYXJnaW46MDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQ6YmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXJ7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGdhcDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnV0dG9uc3tcXHJcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXI6bm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOndoaXRlO1xcclxcbiAgdG9wOjA7XFxyXFxuICB0cmFuc2l0aW9uOiB0b3AgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1idXR0b25zOmhvdmVye1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZXtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyBcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWV7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWV7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltZy9ob21lLWJhY2tncm91bmQyLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1sb2dve1xcclxcbiAgcGFkZGluZzogMTBweCAwIDMwcHggMDtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWxvZ297XFxyXFxuICB3aWR0aDogNjUwcHg7XFxyXFxuICBoZWlnaHQ6IDI2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW50cm8tc2VjdGlvbntcXHJcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcXHJcXG4gIGhlaWdodDphdXRvO1xcclxcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICBjb2xvcjp3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnRyby1pbWFnZXtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tZW51e1xcclxcbmJhY2tncm91bmQ6IHVybCgnLi4vaW1nL2hvbWVCYWNrZ3JvdW5kLmpwZycpO1xcclxcbmFuaW1hdGlvbjogZmFkZUluIDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWdyb3Vwe1xcclxcbiAgZGlzcGxheTpncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBwYWRkaW5nOjMwcHggNjBweDtcXHJcXG4gIGNvbHVtbi1nYXA6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmR7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmQ6bnRoLWNoaWxkKDEpe1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkOm50aC1jaGlsZCgyKXtcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gIGdyaWQtcm93OiAxIC8gMztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZDpudGgtY2hpbGQoMyl7XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxyXFxuICBncmlkLXJvdzogMyAvIDQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmQ6bnRoLWNoaWxkKDQpe1xcclxcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkOm50aC1jaGlsZCg1KXtcXHJcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXHJcXG4gIGdyaWQtcm93OiAyIC8gMztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZDpudGgtY2hpbGQoNil7XFxyXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxuICBncmlkLXJvdzogMyAvIDQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmQ6bnRoLWNoaWxkKDcpe1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcclxcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkID4gLmhvbWUtbG9nbyA+IGltZ3tcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1sYWJlbHtcXHJcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgY29sb3I6dmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEFkZCB0b3AgbWFyZ2luIG9uIGFsbCBtZW51IGl0ZW1zIGV4Y2VwdCB0aGUgZmlyc3QgKi9cXHJcXG4uaXRlbS1saXN0ID4gLm1lbnUtaXRlbSArIC5tZW51LWl0ZW17XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVte1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtcmF0aW5nLWdyb3Vwe1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzowO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1yYXRpbmctZ3JvdXAgPiBoMXtcXHJcXG4gIG1hcmdpbjogMCA1cHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1kZXNjcmlwdGlvbntcXHJcXG4gIGNvbG9yOmdyYXk7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBtYXJnaW46MDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3R7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWcvY29udGFjdC5qcGcnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMDBweCAyMCU7XFxyXFxuICBoZWlnaHQ6IDQwdnc7XFxyXFxuICBhbmltYXRpb246IGZhZGVJbiAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcy1zZWN0aW9ue1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDAuNik7XFxyXFxuICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3Mtc2VjdGlvbiA+IGgxe1xcclxcbiAgbWFyZ2luOjA7XFxyXFxuICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3Mtc2VjdGlvbiA+IGltZ3tcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogYW5pbWF0aW9uICovXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYnJhbmNoTG9jYXRpb24gZnJvbSAnLi4vaW1nL3F1ZS1wYXNhLWJyYW5jaC5wbmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWRkcmVzc1NlY3Rpb24oKXtcclxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcy1zZWN0aW9uJyk7XHJcblxyXG4gIGxldCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBcIis2NTYyMzU2NjI2XCI7XHJcblxyXG4gIGxldCB3ZWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICB3ZWJMaW5rLnRleHRDb250ZW50ID0gXCJxdWVwYXNhLmNvbS5zZ1wiO1xyXG5cclxuICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiNyBFbWVyYWxkIEhpbGwgUmQsIFNpbmdhcG9yZSAyMjkyOTFcIjtcclxuXHJcbiAgbGV0IGxvY2F0aW9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBsb2NhdGlvbkltYWdlLnNyYyA9IGJyYW5jaExvY2F0aW9uO1xyXG5cclxuICBlbGVtZW50LmFwcGVuZChwaG9uZU51bWJlciwgd2ViTGluaywgYWRkcmVzcywgbG9jYXRpb25JbWFnZSk7XHJcbiAgXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RDb21wb25lbnQoKXtcclxuICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG5cclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUFkZHJlc3NTZWN0aW9uKCkpO1xyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVDb250YWN0Q29tcG9uZW50fTsiLCJpbXBvcnQgbWFpbkxvZ28gZnJvbSAnLi4vaW1nL21haW4tbG9nby5wbmcnO1xyXG5pbXBvcnQgaW50cm9JbWFnZSBmcm9tICcuLi9pbWcvaW50cm8taW1hZ2UuanBnJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWVMb2dvKCl7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9tZS1sb2dvJyk7XHJcbiAgbGV0IGhvbWVMb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgaG9tZUxvZ28uc3JjID0gbWFpbkxvZ287XHJcbiAgaG9tZUxvZ28uY2xhc3NMaXN0LmFkZCgnbWFpbi1sb2dvJyk7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChob21lTG9nbyk7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJbnRyb1NlY3Rpb24oKXtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbnRyby1zZWN0aW9uJyk7XHJcblxyXG4gIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSAnQmVzdCBiYXIgb2YgdGhlIFN0YXRlISc7XHJcblxyXG4gIGNvbnN0IGhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGhlYWRlcjIudGV4dENvbnRlbnQgPSBcIlNlcnZpbmcgdGhlIGJlc3QgZHJpbmtzIHNpbmNlIDE5NjYuXCI7XHJcblxyXG4gIFxyXG4gIGNvbnN0IHNlY3Rpb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIHNlY3Rpb25JbWFnZS5zcmMgPSBpbnRyb0ltYWdlO1xyXG4gIHNlY3Rpb25JbWFnZS5jbGFzc0xpc3QuYWRkKCdpbnRyby1pbWFnZScpO1xyXG5cclxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBwYXJhLnRleHRDb250ZW50ID0gJ1Zpc2l0IHVzIG9yIE9yZGVyIG9ubGluZSEnO1xyXG5cclxuICBlbGVtZW50LmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xyXG5cclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlcjIpO1xyXG5cclxuICBlbGVtZW50LmFwcGVuZENoaWxkKHNlY3Rpb25JbWFnZSk7XHJcblxyXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQocGFyYSk7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb21lQ29tcG9uZW50KCl7XHJcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcclxuXHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lTG9nbygpKTtcclxuXHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVJbnRyb1NlY3Rpb24oKSk7ICBcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVIb21lQ29tcG9uZW50LCBjcmVhdGVIb21lTG9nb307IiwiaW1wb3J0IHsgY3JlYXRlSG9tZUxvZ28gfSBmcm9tIFwiLi9ob21lXCI7XHJcblxyXG5jb25zdCBlYXRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6XCJHdWFjYW1vbGVcIixcclxuICAgIGRlc2NyaXB0aW9uOlwidy8gY29ybiB0b3N0YWRhcywgc2Fsc2EgcGljYW50ZSwgcm9hc3RlZCBwZXBpdGFzICYgbGltZS4gW1ZFIEdGXVwiLFxyXG4gICAgcmF0aW5nOiBcIjEyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6XCJDcmlzcHkgUG9sbG9cIixcclxuICAgIGRlc2NyaXB0aW9uOlwiU291dGhlcm4gZnJpZWQgJiBzZXJ2ZWQgdy8gY2hpcG90bGUgYWlvbGlcIixcclxuICAgIHJhdGluZzogXCIxNC41XCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ2hvcml6byAmIE1hbmNoZWdvIENoZWVzZSBDcm9xdWV0dGVzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIncvIGxpbWUgJiBjaGlwb3RsZSBhaW9saS4gNHBjLlwiLFxyXG4gICAgcmF0aW5nOlwiMTRcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTpcIlZlZ2V0YWJsZSBUYXF1aXRvc1wiLFxyXG4gICAgZGVzY3JpcHRpb246XCJGcmllZCB2ZWdldGFibGUgaG91c2UgbWFkZSBzYWxzYSByb2phIGRpcCAmIHNvdXIgY3JlYW0uIDNwY1wiLFxyXG4gICAgcmF0aW5nOiBcIjE0XCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ2hhcnJlZCBTdHJlZXQgQ29yblwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwidy8gbGltZSAmIGNoaXBvdGxlIGFpb2xpLCBNYW5jaGVnbyBjaGVlc2UgJiBjaGlsbGkgc2FsdC4gM3BjLiBbR0YgVkVPXVwiICxcclxuICAgIHJhdGluZzpcIjEyXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6XCJDcmlzcHkgQ2FsYW1hcmVzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIncvIGNoaXBvdGxlIGFpb2xpXCIsXHJcbiAgICByYXRpbmc6XCIxNVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOlwiQ2hpa2VuIEZhaml0YSBFbnNhbGFkYVwiLFxyXG4gICAgZGVzY3JpcHRpb246XCJTaHJlZGRlZCBjaGlja2VuIHRpbmdhLCBsZXR0dWNlLCBjaGFycmVkIGNvcm4uIFtWRU9dXCIsXHJcbiAgICByYXRpbmc6XCIxOVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOlwiUGF0YXRhcyBCcmF2YXNcIixcclxuICAgIGRlc2NyaXB0aW9uOlwidy8gY2hvcml6bywgc21va2VkIHBhcHJpa2EsIHBhcnNlbGV5ICYgTWFuY2hlZ28uIFtHRiBERk9dXCIsXHJcbiAgICByYXRpbmc6XCIxM1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOlwiQ2hpbGxpIENvbiBDYXJuZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XCJ3LyBtaXhlZCByaWNlLCBzb3VyIGNyZWFtLCBjb3JuIGNoaXBzICYgTWFuY2hlZ28gY2hlZXNlXCIsXHJcbiAgICByYXRpbmc6XCIyNFwiXHJcbiAgfSxcclxuICBcclxuXVxyXG5cclxuY29uc3Qgd2luZSA9IFtcclxuICB7XHJcbiAgICBuYW1lOlwiSGFyZSAmIFRvcnRvaXNlZSBQcm9zZWNjb1wiLFxyXG4gICAgZGVzY3JpcHRpb246XCJOViBZYXJyYSBWYWxsZXksIFZJQ1wiLFxyXG4gICAgcmF0aW5nOiBcIjEwIC8gNDhcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTpcIlBsdXMgTWludXMgWmVybyBBbGNvaG9sIFByb3NlY2NvXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIlwiLFxyXG4gICAgcmF0aW5nOiBcIjYuNSAvIDMwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTWFuZG9sZXRvIFBpbm90IEdyaWdpb1wiLFxyXG4gICAgZGVzY3JpcHRpb246XCIyMDIwLCBJdGFseVwiLFxyXG4gICAgcmF0aW5nOlwiOS41IC8gNDVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTpcIlRoZSBQYXNzIFNhdXZpZ25vbiBCbGFuY1wiLFxyXG4gICAgZGVzY3JpcHRpb246XCIyMDIwLCBNYXJsYm9yb3VnaCBOelwiLFxyXG4gICAgcmF0aW5nOiBcIjEwIC8gNDhcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUcmVhZCBTb2Z0bHkgUm9zZVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiMjAyMSwgU0FcIiAsXHJcbiAgICByYXRpbmc6XCIxMC80OFwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOlwiUGx1cyBNaW51cyBaZXJvIEFsY29ob2wgUm9zZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgIHJhdGluZzpcIjYuNSAvIDMwXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6XCJNZXN0YSBUZW1wcmFuaWxsb1wiLFxyXG4gICAgZGVzY3JpcHRpb246XCIyMDIwLCBTcGFpblwiLFxyXG4gICAgcmF0aW5nOlwiMTlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTpcIlRoZSBIYXJlICYgVG9ydG9pc2UgUGlub3QgTm9pclwiLFxyXG4gICAgZGVzY3JpcHRpb246XCIyMDIxLCBZYXJyZSBWYWxsZXkgVmljXCIsXHJcbiAgICByYXRpbmc6XCIxMS41IC8gNTVcIlxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IGJlZXIgPSBbXHJcbiAge1xyXG4gICAgbmFtZTpcIkhlYXBzIE5vcm1hbCBYUEEgQWxjb2hvbCBGcmVlIEJlZXJcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICByYXRpbmc6IFwiOVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOlwiQXNhaGlcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICByYXRpbmc6IFwiOS41XCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ29yb25hXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIlwiLFxyXG4gICAgcmF0aW5nOlwiOS41XCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6XCJTdG9uZSAmIFdvb2QgUGFjaWZpYyBBbGVcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICByYXRpbmc6IFwiMTFcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCIyIEJyb3RoZXJzIEJyZXdlcnkgTGl0dGxlIEFwcGxlIENpZGVyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIiAsXHJcbiAgICByYXRpbmc6XCI5LjVcIlxyXG4gIH0sXHJcbiAgXHJcbl1cclxuXHJcbmNvbnN0IGNvY2t0YWlscyA9IFtcclxuICB7XHJcbiAgICBuYW1lOlwiTWFpbiBTdCBFc3ByZXNzbyBNYXJ0aW5pXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkVyaXN0b2ZmIFZvZGthLCBTYWlsb3IgSmVycnkgU3BpY2VkIFJ1bSwgQmFpbGV5cywgS2FobHVhLCBFc3ByZXNzbyAoZmFuY3kgdy8gR3JheSBHb29zZSAtIGFkZCAzKVwiLFxyXG4gICAgcmF0aW5nOiBcIjE5LjVcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTpcIldpbnRlciBHYXJkZW5cIixcclxuICAgIGRlc2NyaXB0aW9uOlwiQm9tYmF5IEdpbiwgRWxkZXJmbG93ZXIsIExlbW9uLCBBcHBsZSwgQ3VjdW1iZXJcIixcclxuICAgIHJhdGluZzogXCIxOC41XCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRmlyZSAmIEljZVwiLFxyXG4gICAgZGVzY3JpcHRpb246XCJDaW5uYW1vbiBXaGlza2V5LCBMZW1vbiwgRmFsZXJudW0sIFdoaXRlc1wiLFxyXG4gICAgcmF0aW5nOlwiMTlcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTpcIlBhc2ggTWUgT2ZmXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkJhY2FyZGkgUnVtLCBQYXNzaW9uZnJ1aXQgTGlxdWV1ciwgUGFzc2lvbmZydWl0LCBQdWxwLCBMaW1lLCBWYW5pbGxhXCIsXHJcbiAgICByYXRpbmc6IFwiMjBcIlxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IG1hcmdhcml0YXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTpcIkNsYXNzaWNcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiUGF0cm9uIFNpbHZlciBUZXF1aWxhLCBDb250cmVhdSwgTGltZSwgQWdhdmVcIixcclxuICAgIHJhdGluZzogXCJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTpcIkNvY29udXRcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiVGVxdWlsYSwgQ29udHJlYXUsIExpbWUsIEFnYXZlXCIsXHJcbiAgICByYXRpbmc6IFwiXCJcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU3RyYXdiZXJyeVwiLFxyXG4gICAgZGVzY3JpcHRpb246XCJQYXRyb24gU2lsdmVyIFRlcXVpbGEsIENvbnRyZWF1LCBTdHJhd2JlcnJ5LCBMaW1lXCIsXHJcbiAgICByYXRpbmc6XCJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTpcIlNwaWN5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIkphbGFwZW5vIEluZnVzZWQgQmxhbmNvIFRlcXVpbGEsIENvaW50cmVhdSwgTGltZSwgQWdhdmVcIixcclxuICAgIHJhdGluZzogXCJcIlxyXG4gIH0sICBcclxuXVxyXG5cclxuY29uc3QgZ2luID0gW1xyXG4gIHtcclxuICAgIG5hbWU6XCJCZWVmZWF0ZXIgMjRcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICByYXRpbmc6IFwiMTBcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTpcIlRoZSBCb3RhbmlzdFwiLFxyXG4gICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgIHJhdGluZzogXCIxMlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJva3UgR2luXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcIlwiLFxyXG4gICAgcmF0aW5nOlwiMTJcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTpcIk1vbmtleSA0N1wiLFxyXG4gICAgZGVzY3JpcHRpb246XCJcIixcclxuICAgIHJhdGluZzogXCIxMlwiXHJcbiAgfSwgIFxyXG4gIHtcclxuICAgIG5hbWU6XCJIZW5kcmlja3NcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICByYXRpbmc6IFwiMTJcIlxyXG4gIH0sICBcclxuICB7XHJcbiAgICBuYW1lOlwiSGVuZHJpY2sgTHVuYXJcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICByYXRpbmc6IFwiMTJcIlxyXG4gIH0sICBcclxuICB7XHJcbiAgICBuYW1lOlwiSGVuZHJpY2sgTmVwdHVuaWFcIixcclxuICAgIGRlc2NyaXB0aW9uOlwiXCIsXHJcbiAgICByYXRpbmc6IFwiMTJcIlxyXG4gIH0sICBcclxuXVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgZGVzY3JpcHRpb24sIHJhdGluZyl7XHJcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xyXG4gIFxyXG4gIGxldCBuYW1lUmF0aW5nR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuYW1lUmF0aW5nR3JvdXAuY2xhc3NMaXN0LmFkZCgnbmFtZS1yYXRpbmctZ3JvdXAnKTtcclxuXHJcbiAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgbGV0IGl0ZW1SYXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGl0ZW1SYXRpbmcudGV4dENvbnRlbnQgPSByYXRpbmc7XHJcblxyXG4gIG5hbWVSYXRpbmdHcm91cC5hcHBlbmQoaXRlbU5hbWUsIGl0ZW1SYXRpbmcpO1xyXG5cclxuICBsZXQgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjcmlwdGlvbicpO1xyXG5cclxuICBlbGVtZW50LmFwcGVuZChuYW1lUmF0aW5nR3JvdXAsIGl0ZW1EZXNjcmlwdGlvbik7XHJcblxyXG4gIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkcygpe1xyXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJkLWdyb3VwJyk7XHJcblxyXG4gIGxldCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XHJcbiAgY2FyZDEuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkJyk7XHJcbiAgbGV0IGxlZ2VuZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcclxuICBsZXQgaXRlbUxpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBpdGVtTGlzdDEuY2xhc3NMaXN0LmFkZCgnaXRlbS1saXN0Jyk7XHJcblxyXG4gIGVhdHMuZm9yRWFjaChpdGVtID0+e1xyXG4gICAgaXRlbUxpc3QxLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGl0ZW0ubmFtZSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5yYXRpbmcpKTtcclxuICB9KTtcclxuXHJcbiAgbGVnZW5kMS50ZXh0Q29udGVudCA9ICdFYXRzJztcclxuICBsZWdlbmQxLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGFiZWwnKTtcclxuXHJcblxyXG5cclxuICBsZXQgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xyXG4gIGNhcmQyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xyXG4gIGxldCBpdGVtTGlzdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGl0ZW1MaXN0Mi5jbGFzc0xpc3QuYWRkKCdpdGVtLWxpc3QnKTtcclxuXHJcblxyXG4gIHdpbmUuZm9yRWFjaChpdGVtID0+e1xyXG4gICAgaXRlbUxpc3QyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGl0ZW0ubmFtZSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5yYXRpbmcpKTtcclxuICB9KTtcclxuXHJcblxyXG4gIGxldCBsZWdlbmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XHJcbiAgbGVnZW5kMi50ZXh0Q29udGVudCA9ICdXaW5lJztcclxuICBsZWdlbmQyLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGFiZWwnKTtcclxuXHJcbiAgbGV0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcclxuICBjYXJkMy5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKTtcclxuICBsZXQgaXRlbUxpc3QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBpdGVtTGlzdDMuY2xhc3NMaXN0LmFkZCgnaXRlbS1saXN0Jyk7XHJcblxyXG5cclxuICBiZWVyLmZvckVhY2goaXRlbSA9PntcclxuICAgIGl0ZW1MaXN0My5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShpdGVtLm5hbWUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0ucmF0aW5nKSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICBsZXQgbGVnZW5kMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xyXG4gIGxlZ2VuZDMudGV4dENvbnRlbnQgPSAnQmVlcnMnO1xyXG4gIGxlZ2VuZDMuY2xhc3NMaXN0LmFkZCgnbWVudS1sYWJlbCcpO1xyXG5cclxuICBsZXQgY2FyZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xyXG4gIGNhcmQ0LmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xyXG4gIGxldCBpdGVtTGlzdDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGl0ZW1MaXN0NC5jbGFzc0xpc3QuYWRkKCdpdGVtLWxpc3QnKTtcclxuXHJcbiAgY29ja3RhaWxzLmZvckVhY2goaXRlbSA9PntcclxuICAgIGl0ZW1MaXN0NC5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbShpdGVtLm5hbWUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0ucmF0aW5nKSk7XHJcbiAgfSk7XHJcblxyXG4gIGxldCBsZWdlbmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XHJcbiAgbGVnZW5kNC50ZXh0Q29udGVudCA9ICdDb2NrdGFpbHMnO1xyXG4gIGxlZ2VuZDQuY2xhc3NMaXN0LmFkZCgnbWVudS1sYWJlbCcpO1xyXG5cclxuICBsZXQgY2FyZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xyXG4gIGNhcmQ1LmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xyXG4gIGxldCBpdGVtTGlzdDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGl0ZW1MaXN0NS5jbGFzc0xpc3QuYWRkKCdpdGVtLWxpc3QnKTtcclxuXHJcbiAgbWFyZ2FyaXRhcy5mb3JFYWNoKGl0ZW0gPT57XHJcbiAgICBpdGVtTGlzdDUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oaXRlbS5uYW1lLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLnJhdGluZykpO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgbGVnZW5kNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xyXG4gIGxlZ2VuZDUudGV4dENvbnRlbnQgPSAnTWFyZ2FyaXRhcyc7XHJcbiAgbGVnZW5kNS5jbGFzc0xpc3QuYWRkKCdtZW51LWxhYmVsJyk7XHJcblxyXG4gIGxldCBjYXJkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XHJcbiAgY2FyZDYuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkJyk7XHJcbiAgbGV0IGl0ZW1MaXN0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgaXRlbUxpc3Q2LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbGlzdCcpO1xyXG5cclxuICBnaW4uZm9yRWFjaChpdGVtID0+e1xyXG4gICAgaXRlbUxpc3Q2LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKGl0ZW0ubmFtZSwgaXRlbS5kZXNjcmlwdGlvbiwgaXRlbS5yYXRpbmcpKTtcclxuICB9KTtcclxuXHJcbiAgbGV0IGxlZ2VuZDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcclxuICBsZWdlbmQ2LnRleHRDb250ZW50ID0gJ0dpbic7XHJcbiAgbGVnZW5kNi5jbGFzc0xpc3QuYWRkKCdtZW51LWxhYmVsJyk7XHJcblxyXG5cclxuICBsZXQgY2FyZDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xyXG4gIGNhcmQ3LmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xyXG4gIGNhcmQ3LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVMb2dvKCkpO1xyXG5cclxuICBjYXJkMS5hcHBlbmQobGVnZW5kMSwgaXRlbUxpc3QxKTtcclxuICBjYXJkMi5hcHBlbmQobGVnZW5kMiwgaXRlbUxpc3QyKTtcclxuICBjYXJkMy5hcHBlbmQobGVnZW5kMywgaXRlbUxpc3QzKTtcclxuICBjYXJkNC5hcHBlbmQobGVnZW5kNCwgaXRlbUxpc3Q0KTtcclxuICBjYXJkNS5hcHBlbmQobGVnZW5kNSwgaXRlbUxpc3Q1KTtcclxuICBjYXJkNi5hcHBlbmQobGVnZW5kNiwgaXRlbUxpc3Q2KTtcclxuICBcclxuICBlbGVtZW50LmFwcGVuZChjYXJkMSwgY2FyZDIsIGNhcmQzLCBjYXJkNCwgY2FyZDUsIGNhcmQ2LCBjYXJkNyk7XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51Q29tcG9uZW50KCl7XHJcbiAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuXHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVDYXJkcygpKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVNZW51Q29tcG9uZW50fTsiLCJpbXBvcnQgeyBjcmVhdGVIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21lbnUnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcblxyXG5cclxubGV0IG5hdmJhciA9IG5hdmJhckNvbXBvbmVudCgpO1xyXG5sZXQgYnV0dG9ucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5hdmJhci5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ1dHRvbnMnKSk7XHJcblxyXG5mb3IgKHZhciBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcclxuICBidXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICB2YXIgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmVcIik7XHJcbiAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICB0aGlzLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxuICB9KTtcclxufVxyXG5cclxubGV0IGNvbnRlbnQgPSBtYWluQ29tcG9uZW50KCk7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdmJhcik7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcblxyXG5mdW5jdGlvbiBuYXZiYXJDb21wb25lbnQoKXtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcclxuXHJcbiAgLy8gVGhyZWUgQnV0dG9uc1xyXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b25zJyk7XHJcbiAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJztcclxuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVDb21wb25lbnQoKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b25zJyk7XHJcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDb21wb25lbnQoKSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9ucycpO1xyXG4gIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcbiAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0Q29tcG9uZW50KCkpO1xyXG4gIH0pO1xyXG5cclxuICBlbGVtZW50LmFwcGVuZChob21lQnV0dG9uLCBtZW51QnV0dG9uLCBjb250YWN0QnV0dG9uKTtcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZnVuY3Rpb24gbWFpbkNvbXBvbmVudCgpe1xyXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XHJcblxyXG5cclxuICAvLyBkaXNwbGF5IGhvbWUgY29tcG9uZW50IG9uIGluaXRpYWwgbG9hZFxyXG4gIGJ1dHRvbnNbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lQ29tcG9uZW50KCkpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=