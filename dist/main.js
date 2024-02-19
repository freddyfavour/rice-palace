/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Box-sizing reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove margin and padding */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

/* Reset font styles */
body,
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1;
  margin: 0;
}

/* Remove list styling */
ol,
ul {
  list-style: none;
}

/* Remove default styles for block-level elements */
blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

/* Remove default table spacing */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Remove focus outline */
a:focus,
button:focus {
  outline: none;
}
`, "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,8BAA8B;AAC9B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,wBAAwB;AAC1B;;AAEA,sBAAsB;AACtB;;;;;;EAME,oBAAoB;EACpB,eAAe;EACf,cAAc;EACd,SAAS;AACX;;AAEA,wBAAwB;AACxB;;EAEE,gBAAgB;AAClB;;AAEA,mDAAmD;AACnD;;EAEE,YAAY;AACd;;AAEA;;;;EAIE,WAAW;EACX,aAAa;AACf;;AAEA,iCAAiC;AACjC;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA,yBAAyB;AACzB;;EAEE,aAAa;AACf","sourcesContent":["/* Box-sizing reset */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove margin and padding */\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: baseline;\n}\n\n/* Reset font styles */\nbody,\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1;\n  margin: 0;\n}\n\n/* Remove list styling */\nol,\nul {\n  list-style: none;\n}\n\n/* Remove default styles for block-level elements */\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\n/* Remove default table spacing */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* Remove focus outline */\na:focus,\nbutton:focus {\n  outline: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.jpg */ "./assets/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Global styles */
:root {
  --main-color: #ececec;
  --accent-color: #0077cc; /* Complementary shade of blue */
  --text-color: #fff;
}

body {
  font-family: "Poppins", sans-serif;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}); /* Background image for the entire body */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: var(--text-color);
  line-height: 1.6;
  margin: 0;
}

/* Header styles */
.header {
  text-align: center;
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.5); /* Transparent black */
}

.header h1 {
  font-size: 2.5rem;
}

/* Navigation styles */
.navigation {
  background-color: var(--accent-color);
  padding: 10px 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
}

.nav-item {
  margin: 0 15px;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.2rem;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Transparent white */
}

/* Main content styles */
.main-content {
  padding: 20px;
}

/* Footer styles */
.footer {
  background-color: rgba(0, 0, 0, 0.7); /* Transparent black */
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.footer p {
  margin: 0;
}

/* Homepage specific styles */
.home {
  background-color: rgba(0, 0, 0, 0.5); /* Transparent black */
  padding: 20px;
}

.home .home-container {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home .home-text {
  height: 100%;
  text-align: start;
  justify-content: space-between;
}

.home .avatar-container {
  width: 755px;
  height: 100%;
}

.home .avatar-container img {
  width: 100%;
  height: 100%;
}

.home .heading {
  font-size: 3rem;
}

.home .subHeading {
  font-size: 1.5rem;
}

.home .text {
  font-size: 1.1rem;
}

.home .button {
  padding: 10px 20px;
  background-color: var(--accent-color);
  color: var(--text-color);
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.home .button:hover {
  background-color: #0056b3; /* Darker shade of blue */
}

/* Menu specific styles */
.menu {
  background-color: rgba(0, 0, 0, 0.5); /* Transparent black */
  padding: 20px;
}

.menu .header {
  font-size: 2.5rem;
  border-radius: 10px;
  margin-bottom: 10px;
}

.menu .gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
}

.menu .meal-tile {
  background-color: rgba(0, 0, 0, 0.7); /* Transparent black */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.menu .meal-img {
  width: 100%;
  border-radius: 5px;
}

.menu .meal-text {
  margin-top: 10px;
}

.menu .meal-name {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.menu .meal-price {
  font-size: 1rem;
  margin-bottom: 5px;
  color: #45a049; /* Green color */
}

.menu .meal-desc {
  font-size: 1rem;
}

/* Gallery specific styles */
.gallery {
  background-color: rgba(0, 0, 0, 0.5); /* Transparent black */
  text-align: center;
  padding: 20px;
}

.gallery .gallery-item {
  display: inline-block;
  width: 200px;
  margin: 20px;
}

.gallery .gallery-item img {
  width: 100%;
  border-radius: 10px;
}

/* Story specific styles */
.story {
  background-color: rgba(0, 0, 0, 0.7); /* Transparent black */
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
}

.story h2 {
  font-size: 2rem;
}

.story .header {
  border-radius: 10px;
  margin-bottom: 10px;
}

.story p {
  font-size: 1.1rem;
  line-height: 1.8;
}

/* Responsive styles */
@media only screen and (max-width: 768px) {
  .navbar li {
    display: block;
    margin: 10px 0;
  }

  .navbar a {
    display: block;
    padding: 10px 0;
  }

  .footer p {
    font-size: 0.9rem;
  }

  .home-container {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .home-text {
    text-align: center;
    justify-content: center;
  }

  .home .heading {
    font-size: 2.5rem;
    text-align: center;
  }

  .home .subHeading {
    font-size: 1.3rem;
    text-align: center;
  }

  .home .text {
    font-size: 1rem;
  }

  .home-text {
    align-items: center;
    justify-content: center;
  }

  .home .avatar-container {
    width: auto;
    height: 30rem;
  }

  .menu .header {
    font-size: 2rem;
  }

  .menu .meal-tile {
    width: 100%;
  }

  .gallery .gallery-item {
    width: 100%;
    margin: 10px 0;
  }

  .story h2 {
    font-size: 1.8rem;
  }

  .story p {
    font-size: 1rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* Global styles */\n:root {\n  --main-color: #ececec;\n  --accent-color: #0077cc; /* Complementary shade of blue */\n  --text-color: #fff;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  background-image: url(\"../assets/background.jpg\"); /* Background image for the entire body */\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  color: var(--text-color);\n  line-height: 1.6;\n  margin: 0;\n}\n\n/* Header styles */\n.header {\n  text-align: center;\n  padding: 20px 0;\n  background-color: rgba(0, 0, 0, 0.5); /* Transparent black */\n}\n\n.header h1 {\n  font-size: 2.5rem;\n}\n\n/* Navigation styles */\n.navigation {\n  background-color: var(--accent-color);\n  padding: 10px 20px;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n.nav-list {\n  list-style: none;\n  display: flex;\n  justify-content: center;\n}\n\n.nav-item {\n  margin: 0 15px;\n}\n\n.nav-link {\n  text-decoration: none;\n  color: var(--text-color);\n  font-size: 1.2rem;\n  padding: 10px 15px;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n}\n\n.nav-link:hover {\n  background-color: rgba(255, 255, 255, 0.1); /* Transparent white */\n}\n\n/* Main content styles */\n.main-content {\n  padding: 20px;\n}\n\n/* Footer styles */\n.footer {\n  background-color: rgba(0, 0, 0, 0.7); /* Transparent black */\n  color: var(--text-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 20px 0;\n}\n\n.footer p {\n  margin: 0;\n}\n\n/* Homepage specific styles */\n.home {\n  background-color: rgba(0, 0, 0, 0.5); /* Transparent black */\n  padding: 20px;\n}\n\n.home .home-container {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.home .home-text {\n  height: 100%;\n  text-align: start;\n  justify-content: space-between;\n}\n\n.home .avatar-container {\n  width: 755px;\n  height: 100%;\n}\n\n.home .avatar-container img {\n  width: 100%;\n  height: 100%;\n}\n\n.home .heading {\n  font-size: 3rem;\n}\n\n.home .subHeading {\n  font-size: 1.5rem;\n}\n\n.home .text {\n  font-size: 1.1rem;\n}\n\n.home .button {\n  padding: 10px 20px;\n  background-color: var(--accent-color);\n  color: var(--text-color);\n  border: none;\n  border-radius: 5px;\n  margin-top: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.home .button:hover {\n  background-color: #0056b3; /* Darker shade of blue */\n}\n\n/* Menu specific styles */\n.menu {\n  background-color: rgba(0, 0, 0, 0.5); /* Transparent black */\n  padding: 20px;\n}\n\n.menu .header {\n  font-size: 2.5rem;\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.menu .gallery-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 20px;\n  justify-content: center;\n}\n\n.menu .meal-tile {\n  background-color: rgba(0, 0, 0, 0.7); /* Transparent black */\n  border-radius: 10px;\n  padding: 20px;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n}\n\n.menu .meal-img {\n  width: 100%;\n  border-radius: 5px;\n}\n\n.menu .meal-text {\n  margin-top: 10px;\n}\n\n.menu .meal-name {\n  font-size: 1.2rem;\n  margin-bottom: 10px;\n}\n\n.menu .meal-price {\n  font-size: 1rem;\n  margin-bottom: 5px;\n  color: #45a049; /* Green color */\n}\n\n.menu .meal-desc {\n  font-size: 1rem;\n}\n\n/* Gallery specific styles */\n.gallery {\n  background-color: rgba(0, 0, 0, 0.5); /* Transparent black */\n  text-align: center;\n  padding: 20px;\n}\n\n.gallery .gallery-item {\n  display: inline-block;\n  width: 200px;\n  margin: 20px;\n}\n\n.gallery .gallery-item img {\n  width: 100%;\n  border-radius: 10px;\n}\n\n/* Story specific styles */\n.story {\n  background-color: rgba(0, 0, 0, 0.7); /* Transparent black */\n  padding: 20px;\n  margin: 10px;\n  border-radius: 10px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);\n}\n\n.story h2 {\n  font-size: 2rem;\n}\n\n.story .header {\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n\n.story p {\n  font-size: 1.1rem;\n  line-height: 1.8;\n}\n\n/* Responsive styles */\n@media only screen and (max-width: 768px) {\n  .navbar li {\n    display: block;\n    margin: 10px 0;\n  }\n\n  .navbar a {\n    display: block;\n    padding: 10px 0;\n  }\n\n  .footer p {\n    font-size: 0.9rem;\n  }\n\n  .home-container {\n    display: flex;\n    flex-direction: column-reverse;\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .home-text {\n    text-align: center;\n    justify-content: center;\n  }\n\n  .home .heading {\n    font-size: 2.5rem;\n    text-align: center;\n  }\n\n  .home .subHeading {\n    font-size: 1.3rem;\n    text-align: center;\n  }\n\n  .home .text {\n    font-size: 1rem;\n  }\n\n  .home-text {\n    align-items: center;\n    justify-content: center;\n  }\n\n  .home .avatar-container {\n    width: auto;\n    height: 30rem;\n  }\n\n  .menu .header {\n    font-size: 2rem;\n  }\n\n  .menu .meal-tile {\n    width: 100%;\n  }\n\n  .gallery .gallery-item {\n    width: 100%;\n    margin: 10px 0;\n  }\n\n  .story h2 {\n    font-size: 1.8rem;\n  }\n\n  .story p {\n    font-size: 1rem;\n  }\n}\n"],"sourceRoot":""}]);
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/footer/footer.js":
/*!**************************************!*\
  !*** ./src/modules/footer/footer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_githublogo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/githublogo.png */ "./assets/githublogo.png");


const footer = {
  title: "Footer",

  createSection: () => {
    // Create footer container
    const content = document.createElement("div");
    content.classList.add("footer");

    // Create footer text element
    const footerText = document.createElement("p");
    footerText.classList.add("footer-text");

    // Create "Made by" text
    const madeByText = document.createElement("span");
    madeByText.innerText = "Made by ";
    madeByText.classList.add("made-by");

    // Create GitHub logo
    const githubLogo = document.createElement("img");
    githubLogo.src = _assets_githublogo_png__WEBPACK_IMPORTED_MODULE_0__;
    githubLogo.alt = "GitHub Logo";
    githubLogo.classList.add("github-logo");

    // Create name element
    const nameText = document.createElement("span");
    nameText.innerText = "freddyfavour";
    nameText.classList.add("name");

    // Append elements to footer text
    footerText.appendChild(madeByText);
    footerText.appendChild(githubLogo);
    footerText.appendChild(nameText);
    footerText.appendChild(document.createTextNode(" "));

    // Append footer text to footer container
    content.appendChild(footerText);

    return content;
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);


/***/ }),

/***/ "./src/modules/home/home.js":
/*!**********************************!*\
  !*** ./src/modules/home/home.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_ricebuddy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/ricebuddy.png */ "./assets/ricebuddy.png");
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu */ "./src/modules/menu/menu.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page */ "./src/modules/page.js");
// Importing necessary assets and modules




// Defining the home object
const home = {
  title: "Home", // Title of the home section

  // Method to create the home section
  createSection: () => {
    // Creating a container div for the home section
    const content = document.createElement("div");
    content.classList.add("home");

    // Creating a container div for the content of the home section
    const homeContent = document.createElement("div");
    homeContent.classList.add("home-container");
    content.appendChild(homeContent);

    // Creating a div for the text content
    const homeText = document.createElement("div");
    homeText.classList.add("home-text");
    homeContent.appendChild(homeText);

    // Defining elements to be created dynamically
    const elements = [
      { tag: "h1", text: "Rice Palace", class: "heading" }, // Main heading
      { tag: "h2", text: "Home of Rice Buddy", class: "subHeading" }, // Subheading
      {
        tag: "h3",
        text: "Culinary haven serving diverse rice dishes from global cuisines in a vibrant atmosphere.",
        class: "text",
      }, // Description text
      {
        // Button to explore dishes
        tag: "button",
        text: "Explore Dishes",
        class: "button",
        clickHandler: () => (0,_page__WEBPACK_IMPORTED_MODULE_2__.displayPage)(_menu_menu__WEBPACK_IMPORTED_MODULE_1__["default"]), // Click handler to navigate to the menu page
      },
    ];

    // Creating elements dynamically
    elements.forEach(({ tag, text, class: className, clickHandler }) => {
      const element = document.createElement(tag);
      element.innerText = text;
      element.classList.add(className);
      if (tag === "button") element.addEventListener("click", clickHandler); // Adding click handler for button element
      homeText.appendChild(element); // Appending the created element to the home text container
    });

    // Creating a container div for the avatar image
    const homeImage = document.createElement("div");
    homeImage.classList.add("avatar-container");
    homeContent.appendChild(homeImage);

    // Creating the avatar image
    const img = document.createElement("img");
    img.src = _assets_ricebuddy_png__WEBPACK_IMPORTED_MODULE_0__; // Setting the image source
    img.classList.add("avatar"); // Adding CSS class for styling
    homeImage.appendChild(img);

    // Returning the created content
    return content;
  },
};

// Exporting the home object as the default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ }),

/***/ "./src/modules/menu/gallery.js":
/*!*************************************!*\
  !*** ./src/modules/menu/gallery.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_biryani_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/biryani.png */ "./assets/biryani.png");
/* harmony import */ var _assets_arrozala_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/arrozala.png */ "./assets/arrozala.png");
/* harmony import */ var _assets_Chelow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/Chelow.png */ "./assets/Chelow.png");
/* harmony import */ var _assets_coconut_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/coconut.png */ "./assets/coconut.png");
/* harmony import */ var _assets_curry_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/curry.png */ "./assets/curry.png");
/* harmony import */ var _assets_fried_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/fried.png */ "./assets/fried.png");
/* harmony import */ var _assets_jollof_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/jollof.png */ "./assets/jollof.png");
/* harmony import */ var _assets_kabsa_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/kabsa.png */ "./assets/kabsa.png");
/* harmony import */ var _assets_paella_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/paella.png */ "./assets/paella.png");
/* harmony import */ var _assets_pilaf_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/pilaf.png */ "./assets/pilaf.png");
/* harmony import */ var _assets_risotto_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/risotto.png */ "./assets/risotto.png");
// Import images












// Gallery function
const gallery = (name, src, price, description) => {
  return { name, src, price, description };
};

//meals array
const meals = [
  gallery(
    "Biryani",
    _assets_biryani_png__WEBPACK_IMPORTED_MODULE_0__,
    "$10",
    "Biryani is a flavorful and aromatic rice dish made with basmati rice, spices, and usually meat or vegetables."
  ),
  gallery(
    "Arroz Ala",
    _assets_arrozala_png__WEBPACK_IMPORTED_MODULE_1__,
    "$12",
    "Arroz Ala is a Spanish rice dish cooked with saffron, vegetables, and sometimes seafood or meat."
  ),
  gallery(
    "Chelow",
    _assets_Chelow_png__WEBPACK_IMPORTED_MODULE_2__,
    "$8",
    "Chelow is a Persian rice dish consisting of fluffy rice served with a pat of butter or saffron-infused rice."
  ),
  gallery(
    "Coconut Rice",
    _assets_coconut_png__WEBPACK_IMPORTED_MODULE_3__,
    "$9",
    "Coconut Rice is a tropical dish made by cooking rice with coconut milk, giving it a rich and creamy flavor."
  ),
  gallery(
    "Curry Rice",
    _assets_curry_png__WEBPACK_IMPORTED_MODULE_4__,
    "$11",
    "Curry Rice is a dish where rice is cooked with a flavorful curry sauce, often containing meat, vegetables, or tofu."
  ),
  gallery(
    "Fried Rice",
    _assets_fried_png__WEBPACK_IMPORTED_MODULE_5__,
    "$7",
    "Fried Rice is a Chinese dish made by stir-frying pre-cooked rice with vegetables, eggs, and sometimes meat or seafood."
  ),
  gallery(
    "Jollof Rice",
    _assets_jollof_png__WEBPACK_IMPORTED_MODULE_6__,
    "$13",
    "Jollof Rice is a popular West African dish made with rice, tomatoes, onions, and a blend of spices, often served with meat or fish."
  ),
  gallery(
    "Kabsa",
    _assets_kabsa_png__WEBPACK_IMPORTED_MODULE_7__,
    "$15",
    "Kabsa is a traditional Saudi Arabian dish made with spiced rice, meat (usually chicken, lamb, or goat), and vegetables."
  ),
  gallery(
    "Paella",
    _assets_paella_png__WEBPACK_IMPORTED_MODULE_8__,
    "$14",
    "Paella is a Spanish rice dish originating from the Valencia region, typically made with saffron-infused rice, seafood, chicken, and vegetables."
  ),
  gallery(
    "Pilaf",
    _assets_pilaf_png__WEBPACK_IMPORTED_MODULE_9__,
    "$10",
    "Pilaf is a dish where rice is cooked in a seasoned broth, often with spices, vegetables, and sometimes meat or dried fruits."
  ),
  gallery(
    "Risotto",
    _assets_risotto_png__WEBPACK_IMPORTED_MODULE_10__,
    "$16",
    "Risotto is an Italian rice dish cooked with broth to a creamy consistency, often flavored with ingredients such as mushrooms, seafood, or cheese."
  ),
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meals);


/***/ }),

/***/ "./src/modules/menu/menu.js":
/*!**********************************!*\
  !*** ./src/modules/menu/menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery */ "./src/modules/menu/gallery.js");
// Importing the meals array from the gallery module


// Definition of the menu object
const menu = {
  title: "Menu", // Title of the menu section

  // Method to create the menu section
  createSection: () => {
    // Creating the main container for the menu section
    const content = document.createElement("div");
    content.classList.add("menu");

    // Creating the header section with the title
    const header = document.createElement("div");
    header.classList.add("header");
    const headertext = document.createElement("h1");
    headertext.innerText = "Menu";
    header.appendChild(headertext);
    content.appendChild(header);

    // Creating a container for the meal gallery
    const galleryContainer = document.createElement("div");
    galleryContainer.classList.add("gallery-container");
    content.appendChild(galleryContainer);

    // Looping through each meal to create a tile for it
    _gallery__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((meal) => {
      const mealTile = document.createElement("div");
      mealTile.classList.add("meal-tile");

      // Creating the image container and adding the meal image
      const mealImgContainer = document.createElement("div");
      mealImgContainer.classList.add("meal-img-container");
      const mealImg = document.createElement("img");
      mealImg.src = meal.src;
      mealImg.classList.add("meal-img");
      mealImgContainer.appendChild(mealImg);
      mealTile.appendChild(mealImgContainer);

      // Creating the text container and adding the meal name, price, and description
      const mealText = document.createElement("div");
      mealText.classList.add("meal-text");
      const mealName = document.createElement("p");
      mealName.classList.add("meal-name");
      mealName.innerText = meal.name;
      const mealPrice = document.createElement("p");
      mealPrice.classList.add("meal-price");
      mealPrice.innerText = meal.price;
      const mealDesc = document.createElement("p");
      mealDesc.classList.add("meal-desc");
      mealDesc.innerText = meal.description;
      mealText.appendChild(mealName);
      mealText.appendChild(mealPrice);
      mealText.appendChild(mealDesc);
      mealTile.appendChild(mealText);

      // Appending the created meal tile to the gallery container
      galleryContainer.appendChild(mealTile);
    });

    // Returning the completed menu section
    return content;
  },
};

// Exporting the menu object as the default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/modules/nav/nav.js":
/*!********************************!*\
  !*** ./src/modules/nav/nav.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.js */ "./src/modules/home/home.js");
/* harmony import */ var _menu_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.js */ "./src/modules/menu/menu.js");
/* harmony import */ var _story_story_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../story/story.js */ "./src/modules/story/story.js");
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page.js */ "./src/modules/page.js");
// Import the objects from the respective files





// Navigation object definition
const nav = {
  // Title of the navigation section
  title: "Navigation",

  // Method to create the navigation section
  createSection: () => {
    // Create a container for the navigation section
    const content = document.createElement("div");
    content.classList.add("navigation");

    // Create an unordered list for navigation links
    const navList = document.createElement("ul");
    navList.classList.add("nav-list");

    // Array of navigation items with text and corresponding page
    const navItems = [
      { text: "Home", page: _home_home_js__WEBPACK_IMPORTED_MODULE_0__["default"] },
      { text: "Menu", page: _menu_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"] },
      { text: "Story", page: _story_story_js__WEBPACK_IMPORTED_MODULE_2__["default"] },
    ];

    // Loop through each navigation item
    navItems.forEach(({ text, page }) => {
      // Create list item and link for each navigation item
      const listItem = document.createElement("li");
      listItem.classList.add("nav-item"); // Add class to list item
      const link = document.createElement("a");
      link.innerText = text;
      link.href = "#";
      link.classList.add("nav-link"); // Add class to link
      // Add event listener to the link for page navigation
      link.addEventListener("click", (event) => {
        event.preventDefault();
        (0,_page_js__WEBPACK_IMPORTED_MODULE_3__.displayPage)(page);
      });
      // Append link to list item and list item to navigation list
      listItem.appendChild(link);
      navList.appendChild(listItem);
    });

    // Append navigation list to the navigation section container
    content.appendChild(navList);

    return content; // Return the created navigation section
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav); // Export the navigation object as default


/***/ }),

/***/ "./src/modules/page.js":
/*!*****************************!*\
  !*** ./src/modules/page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializePage),
/* harmony export */   displayPage: () => (/* binding */ displayPage)
/* harmony export */ });
/* harmony import */ var _home_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.js */ "./src/modules/home/home.js");
/* harmony import */ var _menu_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.js */ "./src/modules/menu/menu.js");
/* harmony import */ var _story_story_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./story/story.js */ "./src/modules/story/story.js");
/* harmony import */ var _nav_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.js */ "./src/modules/nav/nav.js");
/* harmony import */ var _footer_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.js */ "./src/modules/footer/footer.js");
// Import the objects from the respective files






// Function to display a page based on its title
function displayPage(page) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  // Render Nav section
  const navSection = _nav_nav_js__WEBPACK_IMPORTED_MODULE_3__["default"].createSection();
  contentDiv.appendChild(navSection);

  // Render requested page section
  const pageSection = page.createSection();
  contentDiv.appendChild(pageSection);

  // Render Footer section
  const footerSection = _footer_footer_js__WEBPACK_IMPORTED_MODULE_4__["default"].createSection();
  contentDiv.appendChild(footerSection);
}

// Function to handle navigation clicks
function handleNavigation() {
  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const pageName = event.target.innerText.toLowerCase();
      switch (pageName) {
        case "home":
          displayPage(_home_home_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
          break;
        case "menu":
          displayPage(_menu_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
          break;
        case "story":
          displayPage(_story_story_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
          break;
        default:
          break;
      }
    });
  });
}

function initializePage() {
  // Initialize the default page (Home)
  displayPage(_home_home_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

  // Initialize navigation event listeners
  handleNavigation();
}


/***/ }),

/***/ "./src/modules/story/story.js":
/*!************************************!*\
  !*** ./src/modules/story/story.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const story = {
  title: "Our Story", // Title of the story section

  // Method to create the story section
  createSection: () => {
    // Creating the main container for the story section
    const content = document.createElement("div");
    content.classList.add("story");

    // Creating the header section with the title
    const header = document.createElement("div");
    header.classList.add("header");
    const headertext = document.createElement("h1");
    headertext.innerText = "Our Story";
    header.appendChild(headertext);
    content.appendChild(header);

    // Creating the story container
    const storyContainer = document.createElement("div");
    storyContainer.classList.add("story-container");

    const storyContent = document.createElement("p");
    storyContent.classList.add("story-content");
    storyContent.innerText = `Once upon a time, nestled in a quaint little village tucked away amidst rolling hills and whispering trees, there stood a remarkable place called Rice Palace: The Home of Rice Buddy. Legend had it that this enchanted restaurant was built upon a field where the rice grains sang melodies of joy to anyone who dared to listen.

    The tale of Rice Buddy, the mischievous yet lovable rice grain, was whispered among the villagers. It was said that Rice Buddy possessed magical powers, capable of turning a mundane meal into a culinary adventure filled with laughter and delight.

    As the sun dipped below the horizon, casting hues of pink and gold across the sky, the doors of Rice Palace would open, inviting weary travelers and hungry souls to step into a world where rice reigned supreme.

    Upon entering, guests were greeted by the tantalizing aroma of freshly cooked rice, swirling around them like a warm embrace. The walls were adorned with whimsical paintings depicting Rice Buddy's misadventures, from sneaking into pots of boiling water to playfully bouncing from plate to plate.

    But the true magic happened when diners took their first bite. With each spoonful of fluffy rice or savory rice dish, they would feel a warmth spreading through their bodies, as if Rice Buddy himself was whispering secrets of happiness and contentment into their hearts.

    And oh, the dishes! From classic fried rice to exotic rice bowls infused with flavors from distant lands, Rice Palace offered a feast fit for kings and commoners alike. Each dish was lovingly crafted with the finest ingredients, sprinkled with a dash of whimsy and a pinch of enchantment.

    But the real star of the show was Rice Buddy himself, who would often make surprise appearances, popping out of bowls or peeking from behind curtains to greet delighted diners with a mischievous grin. His infectious laughter would fill the air, turning even the grumpiest of patrons into giggling bundles of joy.

    As the night wore on and bellies grew full, guests would depart with smiles on their faces and hearts aglow with the magic of Rice Palace. For in this humble restaurant, where rice was king and Rice Buddy its playful guardian, every meal was not just a culinary experience, but a journey into a world where laughter, love, and rice reigned supreme. So come, dear traveler, and let Rice Palace whisk you away on a magical adventure you'll never forget!`;

    storyContainer.appendChild(storyContent);
    content.appendChild(storyContainer);

    // Returning the completed story section
    return content;
  },
};

// Exporting the story object as the default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (story);


/***/ }),

/***/ "./assets/Chelow.png":
/*!***************************!*\
  !*** ./assets/Chelow.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b13c32fe834e1c31dea.png";

/***/ }),

/***/ "./assets/arrozala.png":
/*!*****************************!*\
  !*** ./assets/arrozala.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d38f473b2fdf09edf82.png";

/***/ }),

/***/ "./assets/background.jpg":
/*!*******************************!*\
  !*** ./assets/background.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce537185c8c537b41505.jpg";

/***/ }),

/***/ "./assets/biryani.png":
/*!****************************!*\
  !*** ./assets/biryani.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81eb6155578a481516af.png";

/***/ }),

/***/ "./assets/coconut.png":
/*!****************************!*\
  !*** ./assets/coconut.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9983841a2f2f28e15737.png";

/***/ }),

/***/ "./assets/curry.png":
/*!**************************!*\
  !*** ./assets/curry.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "071af1b06644547f1fb9.png";

/***/ }),

/***/ "./assets/fried.png":
/*!**************************!*\
  !*** ./assets/fried.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6882664094ca4cdae131.png";

/***/ }),

/***/ "./assets/githublogo.png":
/*!*******************************!*\
  !*** ./assets/githublogo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16586d27e32aa6788cfe.png";

/***/ }),

/***/ "./assets/jollof.png":
/*!***************************!*\
  !*** ./assets/jollof.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21b8a38e9410d725b6ba.png";

/***/ }),

/***/ "./assets/kabsa.png":
/*!**************************!*\
  !*** ./assets/kabsa.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3c553bed090dea6c27b.png";

/***/ }),

/***/ "./assets/paella.png":
/*!***************************!*\
  !*** ./assets/paella.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a67bd1dbf6d20bded96.png";

/***/ }),

/***/ "./assets/pilaf.png":
/*!**************************!*\
  !*** ./assets/pilaf.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72349327d3b8251c4021.png";

/***/ }),

/***/ "./assets/ricebuddy.png":
/*!******************************!*\
  !*** ./assets/ricebuddy.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7b740d1b4436d7c5676.png";

/***/ }),

/***/ "./assets/risotto.png":
/*!****************************!*\
  !*** ./assets/risotto.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ef332408b91a9a8e49a.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page */ "./src/modules/page.js");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");




// Calling the function to initialize the page
(0,_modules_page__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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O0FBQ3ZCO0FBQ0M7O0FBRXRCO0FBQ0EseURBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvcmVzZXQuY3NzP2VkZTAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS9ob21lLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS9nYWxsZXJ5LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS9tZW51LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbmF2L25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9zdG9yeS9zdG9yeS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBCb3gtc2l6aW5nIHJlc2V0ICovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBSZW1vdmUgbWFyZ2luIGFuZCBwYWRkaW5nICovXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBSZXNldCBmb250IHN0eWxlcyAqL1xuYm9keSxcbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIFJlbW92ZSBsaXN0IHN0eWxpbmcgKi9cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4vKiBSZW1vdmUgZGVmYXVsdCBzdHlsZXMgZm9yIGJsb2NrLWxldmVsIGVsZW1lbnRzICovXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgdGFibGUgc3BhY2luZyAqL1xudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogUmVtb3ZlIGZvY3VzIG91dGxpbmUgKi9cbmE6Zm9jdXMsXG5idXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFCQUFxQjtBQUNyQjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLDhCQUE4QjtBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULHdCQUF3QjtBQUMxQjs7QUFFQSxzQkFBc0I7QUFDdEI7Ozs7OztFQU1FLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQSx3QkFBd0I7QUFDeEI7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLG1EQUFtRDtBQUNuRDs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUEseUJBQXlCO0FBQ3pCOztFQUVFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBCb3gtc2l6aW5nIHJlc2V0ICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogUmVtb3ZlIG1hcmdpbiBhbmQgcGFkZGluZyAqL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIFJlc2V0IGZvbnQgc3R5bGVzICovXFxuYm9keSxcXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxpbmcgKi9cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBzdHlsZXMgZm9yIGJsb2NrLWxldmVsIGVsZW1lbnRzICovXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgdGFibGUgc3BhY2luZyAqL1xcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGZvY3VzIG91dGxpbmUgKi9cXG5hOmZvY3VzLFxcbmJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogR2xvYmFsIHN0eWxlcyAqL1xuOnJvb3Qge1xuICAtLW1haW4tY29sb3I6ICNlY2VjZWM7XG4gIC0tYWNjZW50LWNvbG9yOiAjMDA3N2NjOyAvKiBDb21wbGVtZW50YXJ5IHNoYWRlIG9mIGJsdWUgKi9cbiAgLS10ZXh0LWNvbG9yOiAjZmZmO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7IC8qIEJhY2tncm91bmQgaW1hZ2UgZm9yIHRoZSBlbnRpcmUgYm9keSAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBIZWFkZXIgc3R5bGVzICovXG4uaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogVHJhbnNwYXJlbnQgYmxhY2sgKi9cbn1cblxuLmhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4vKiBOYXZpZ2F0aW9uIHN0eWxlcyAqL1xuLm5hdmlnYXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm5hdi1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uYXYtaXRlbSB7XG4gIG1hcmdpbjogMCAxNXB4O1xufVxuXG4ubmF2LWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbn1cblxuLm5hdi1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyAvKiBUcmFuc3BhcmVudCB3aGl0ZSAqL1xufVxuXG4vKiBNYWluIGNvbnRlbnQgc3R5bGVzICovXG4ubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogRm9vdGVyIHN0eWxlcyAqL1xuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgLyogVHJhbnNwYXJlbnQgYmxhY2sgKi9cbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG4uZm9vdGVyIHAge1xuICBtYXJnaW46IDA7XG59XG5cbi8qIEhvbWVwYWdlIHNwZWNpZmljIHN0eWxlcyAqL1xuLmhvbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIFRyYW5zcGFyZW50IGJsYWNrICovXG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5ob21lIC5ob21lLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaG9tZSAuaG9tZS10ZXh0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaG9tZSAuYXZhdGFyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA3NTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaG9tZSAuYXZhdGFyLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaG9tZSAuaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmhvbWUgLnN1YkhlYWRpbmcge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmhvbWUgLnRleHQge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmhvbWUgLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uaG9tZSAuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMzsgLyogRGFya2VyIHNoYWRlIG9mIGJsdWUgKi9cbn1cblxuLyogTWVudSBzcGVjaWZpYyBzdHlsZXMgKi9cbi5tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBUcmFuc3BhcmVudCBibGFjayAqL1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubWVudSAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tZW51IC5nYWxsZXJ5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBnYXA6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudSAubWVhbC10aWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpOyAvKiBUcmFuc3BhcmVudCBibGFjayAqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4ubWVudSAubWVhbC1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubWVudSAubWVhbC10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1lbnUgLm1lYWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWVudSAubWVhbC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzQ1YTA0OTsgLyogR3JlZW4gY29sb3IgKi9cbn1cblxuLm1lbnUgLm1lYWwtZGVzYyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLyogR2FsbGVyeSBzcGVjaWZpYyBzdHlsZXMgKi9cbi5nYWxsZXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBUcmFuc3BhcmVudCBibGFjayAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5nYWxsZXJ5IC5nYWxsZXJ5LWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uZ2FsbGVyeSAuZ2FsbGVyeS1pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4vKiBTdG9yeSBzcGVjaWZpYyBzdHlsZXMgKi9cbi5zdG9yeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgLyogVHJhbnNwYXJlbnQgYmxhY2sgKi9cbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uc3RvcnkgaDIge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5zdG9yeSAuaGVhZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnN0b3J5IHAge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuODtcbn1cblxuLyogUmVzcG9uc2l2ZSBzdHlsZXMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhciBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cblxuICAubmF2YmFyIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgfVxuXG4gIC5mb290ZXIgcCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cblxuICAuaG9tZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmhvbWUtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmhvbWUgLmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5ob21lIC5zdWJIZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaG9tZSAudGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgLmhvbWUtdGV4dCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5ob21lIC5hdmF0YXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDMwcmVtO1xuICB9XG5cbiAgLm1lbnUgLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgLm1lbnUgLm1lYWwtdGlsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZ2FsbGVyeSAuZ2FsbGVyeS1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgfVxuXG4gIC5zdG9yeSBoMiB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cblxuICAuc3RvcnkgcCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjtBQUNsQjtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUIsRUFBRSxnQ0FBZ0M7RUFDekQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlEQUFpRCxFQUFFLHlDQUF5QztFQUM1RixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFNBQVM7QUFDWDs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9DQUFvQyxFQUFFLHNCQUFzQjtBQUM5RDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsMENBQTBDLEVBQUUsc0JBQXNCO0FBQ3BFOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7QUFDZjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxvQ0FBb0MsRUFBRSxzQkFBc0I7RUFDNUQsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0Usb0NBQW9DLEVBQUUsc0JBQXNCO0VBQzVELGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLHlCQUF5QjtBQUN0RDs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxvQ0FBb0MsRUFBRSxzQkFBc0I7RUFDNUQsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQ0FBb0MsRUFBRSxzQkFBc0I7RUFDNUQsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYyxFQUFFLGdCQUFnQjtBQUNsQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0Usb0NBQW9DLEVBQUUsc0JBQXNCO0VBQzVELGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUEsMEJBQTBCO0FBQzFCO0VBQ0Usb0NBQW9DLEVBQUUsc0JBQXNCO0VBQzVELGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLGNBQWM7SUFDZCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdsb2JhbCBzdHlsZXMgKi9cXG46cm9vdCB7XFxuICAtLW1haW4tY29sb3I6ICNlY2VjZWM7XFxuICAtLWFjY2VudC1jb2xvcjogIzAwNzdjYzsgLyogQ29tcGxlbWVudGFyeSBzaGFkZSBvZiBibHVlICovXFxuICAtLXRleHQtY29sb3I6ICNmZmY7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vYXNzZXRzL2JhY2tncm91bmQuanBnXFxcIik7IC8qIEJhY2tncm91bmQgaW1hZ2UgZm9yIHRoZSBlbnRpcmUgYm9keSAqL1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIZWFkZXIgc3R5bGVzICovXFxuLmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIFRyYW5zcGFyZW50IGJsYWNrICovXFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi8qIE5hdmlnYXRpb24gc3R5bGVzICovXFxuLm5hdmlnYXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uYXYtaXRlbSB7XFxuICBtYXJnaW46IDAgMTVweDtcXG59XFxuXFxuLm5hdi1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5uYXYtbGluazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IC8qIFRyYW5zcGFyZW50IHdoaXRlICovXFxufVxcblxcbi8qIE1haW4gY29udGVudCBzdHlsZXMgKi9cXG4ubWFpbi1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIEZvb3RlciBzdHlsZXMgKi9cXG4uZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgLyogVHJhbnNwYXJlbnQgYmxhY2sgKi9cXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4IDA7XFxufVxcblxcbi5mb290ZXIgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIEhvbWVwYWdlIHNwZWNpZmljIHN0eWxlcyAqL1xcbi5ob21lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogVHJhbnNwYXJlbnQgYmxhY2sgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5ob21lIC5ob21lLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUgLmhvbWUtdGV4dCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhvbWUgLmF2YXRhci1jb250YWluZXIge1xcbiAgd2lkdGg6IDc1NXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uaG9tZSAuYXZhdGFyLWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5ob21lIC5oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmhvbWUgLnN1YkhlYWRpbmcge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5ob21lIC50ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uaG9tZSAuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLmhvbWUgLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzOyAvKiBEYXJrZXIgc2hhZGUgb2YgYmx1ZSAqL1xcbn1cXG5cXG4vKiBNZW51IHNwZWNpZmljIHN0eWxlcyAqL1xcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogVHJhbnNwYXJlbnQgYmxhY2sgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5tZW51IC5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLm1lbnUgLmdhbGxlcnktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGdhcDogMjBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubWVudSAubWVhbC10aWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgLyogVHJhbnNwYXJlbnQgYmxhY2sgKi9cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLm1lbnUgLm1lYWwtaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubWVudSAubWVhbC10ZXh0IHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5tZW51IC5tZWFsLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubWVudSAubWVhbC1wcmljZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBjb2xvcjogIzQ1YTA0OTsgLyogR3JlZW4gY29sb3IgKi9cXG59XFxuXFxuLm1lbnUgLm1lYWwtZGVzYyB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi8qIEdhbGxlcnkgc3BlY2lmaWMgc3R5bGVzICovXFxuLmdhbGxlcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBUcmFuc3BhcmVudCBibGFjayAqL1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmdhbGxlcnkgLmdhbGxlcnktaXRlbSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjAwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5nYWxsZXJ5IC5nYWxsZXJ5LWl0ZW0gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogU3Rvcnkgc3BlY2lmaWMgc3R5bGVzICovXFxuLnN0b3J5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgLyogVHJhbnNwYXJlbnQgYmxhY2sgKi9cXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLnN0b3J5IGgyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnN0b3J5IC5oZWFkZXIge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5zdG9yeSBwIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuODtcXG59XFxuXFxuLyogUmVzcG9uc2l2ZSBzdHlsZXMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAubmF2YmFyIGxpIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbiAgfVxcblxcbiAgLm5hdmJhciBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gIH1cXG5cXG4gIC5mb290ZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgfVxcblxcbiAgLmhvbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhvbWUtdGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaG9tZSAuaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaG9tZSAuc3ViSGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaG9tZSAudGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5ob21lLXRleHQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ob21lIC5hdmF0YXItY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogMzByZW07XFxuICB9XFxuXFxuICAubWVudSAuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLm1lbnUgLm1lYWwtdGlsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmdhbGxlcnkgLmdhbGxlcnktaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gIH1cXG5cXG4gIC5zdG9yeSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgfVxcblxcbiAgLnN0b3J5IHAge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2l0bG9nbyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2dpdGh1YmxvZ28ucG5nXCI7XG5cbmNvbnN0IGZvb3RlciA9IHtcbiAgdGl0bGU6IFwiRm9vdGVyXCIsXG5cbiAgY3JlYXRlU2VjdGlvbjogKCkgPT4ge1xuICAgIC8vIENyZWF0ZSBmb290ZXIgY29udGFpbmVyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gICAgLy8gQ3JlYXRlIGZvb3RlciB0ZXh0IGVsZW1lbnRcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZm9vdGVyVGV4dC5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLXRleHRcIik7XG5cbiAgICAvLyBDcmVhdGUgXCJNYWRlIGJ5XCIgdGV4dFxuICAgIGNvbnN0IG1hZGVCeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBtYWRlQnlUZXh0LmlubmVyVGV4dCA9IFwiTWFkZSBieSBcIjtcbiAgICBtYWRlQnlUZXh0LmNsYXNzTGlzdC5hZGQoXCJtYWRlLWJ5XCIpO1xuXG4gICAgLy8gQ3JlYXRlIEdpdEh1YiBsb2dvXG4gICAgY29uc3QgZ2l0aHViTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZ2l0aHViTG9nby5zcmMgPSBnaXRsb2dvO1xuICAgIGdpdGh1YkxvZ28uYWx0ID0gXCJHaXRIdWIgTG9nb1wiO1xuICAgIGdpdGh1YkxvZ28uY2xhc3NMaXN0LmFkZChcImdpdGh1Yi1sb2dvXCIpO1xuXG4gICAgLy8gQ3JlYXRlIG5hbWUgZWxlbWVudFxuICAgIGNvbnN0IG5hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbmFtZVRleHQuaW5uZXJUZXh0ID0gXCJmcmVkZHlmYXZvdXJcIjtcbiAgICBuYW1lVGV4dC5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcblxuICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byBmb290ZXIgdGV4dFxuICAgIGZvb3RlclRleHQuYXBwZW5kQ2hpbGQobWFkZUJ5VGV4dCk7XG4gICAgZm9vdGVyVGV4dC5hcHBlbmRDaGlsZChnaXRodWJMb2dvKTtcbiAgICBmb290ZXJUZXh0LmFwcGVuZENoaWxkKG5hbWVUZXh0KTtcbiAgICBmb290ZXJUZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIFwiKSk7XG5cbiAgICAvLyBBcHBlbmQgZm9vdGVyIHRleHQgdG8gZm9vdGVyIGNvbnRhaW5lclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjtcbiIsIi8vIEltcG9ydGluZyBuZWNlc3NhcnkgYXNzZXRzIGFuZCBtb2R1bGVzXG5pbXBvcnQgYXZhdGFyIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvcmljZWJ1ZGR5LnBuZ1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4uL21lbnUvbWVudVwiO1xuaW1wb3J0IHsgZGlzcGxheVBhZ2UgfSBmcm9tIFwiLi4vcGFnZVwiO1xuXG4vLyBEZWZpbmluZyB0aGUgaG9tZSBvYmplY3RcbmNvbnN0IGhvbWUgPSB7XG4gIHRpdGxlOiBcIkhvbWVcIiwgLy8gVGl0bGUgb2YgdGhlIGhvbWUgc2VjdGlvblxuXG4gIC8vIE1ldGhvZCB0byBjcmVhdGUgdGhlIGhvbWUgc2VjdGlvblxuICBjcmVhdGVTZWN0aW9uOiAoKSA9PiB7XG4gICAgLy8gQ3JlYXRpbmcgYSBjb250YWluZXIgZGl2IGZvciB0aGUgaG9tZSBzZWN0aW9uXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICAgIC8vIENyZWF0aW5nIGEgY29udGFpbmVyIGRpdiBmb3IgdGhlIGNvbnRlbnQgb2YgdGhlIGhvbWUgc2VjdGlvblxuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZS1jb250YWluZXJcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lQ29udGVudCk7XG5cbiAgICAvLyBDcmVhdGluZyBhIGRpdiBmb3IgdGhlIHRleHQgY29udGVudFxuICAgIGNvbnN0IGhvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lVGV4dC5jbGFzc0xpc3QuYWRkKFwiaG9tZS10ZXh0XCIpO1xuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGhvbWVUZXh0KTtcblxuICAgIC8vIERlZmluaW5nIGVsZW1lbnRzIHRvIGJlIGNyZWF0ZWQgZHluYW1pY2FsbHlcbiAgICBjb25zdCBlbGVtZW50cyA9IFtcbiAgICAgIHsgdGFnOiBcImgxXCIsIHRleHQ6IFwiUmljZSBQYWxhY2VcIiwgY2xhc3M6IFwiaGVhZGluZ1wiIH0sIC8vIE1haW4gaGVhZGluZ1xuICAgICAgeyB0YWc6IFwiaDJcIiwgdGV4dDogXCJIb21lIG9mIFJpY2UgQnVkZHlcIiwgY2xhc3M6IFwic3ViSGVhZGluZ1wiIH0sIC8vIFN1YmhlYWRpbmdcbiAgICAgIHtcbiAgICAgICAgdGFnOiBcImgzXCIsXG4gICAgICAgIHRleHQ6IFwiQ3VsaW5hcnkgaGF2ZW4gc2VydmluZyBkaXZlcnNlIHJpY2UgZGlzaGVzIGZyb20gZ2xvYmFsIGN1aXNpbmVzIGluIGEgdmlicmFudCBhdG1vc3BoZXJlLlwiLFxuICAgICAgICBjbGFzczogXCJ0ZXh0XCIsXG4gICAgICB9LCAvLyBEZXNjcmlwdGlvbiB0ZXh0XG4gICAgICB7XG4gICAgICAgIC8vIEJ1dHRvbiB0byBleHBsb3JlIGRpc2hlc1xuICAgICAgICB0YWc6IFwiYnV0dG9uXCIsXG4gICAgICAgIHRleHQ6IFwiRXhwbG9yZSBEaXNoZXNcIixcbiAgICAgICAgY2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNsaWNrSGFuZGxlcjogKCkgPT4gZGlzcGxheVBhZ2UobWVudSksIC8vIENsaWNrIGhhbmRsZXIgdG8gbmF2aWdhdGUgdG8gdGhlIG1lbnUgcGFnZVxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgLy8gQ3JlYXRpbmcgZWxlbWVudHMgZHluYW1pY2FsbHlcbiAgICBlbGVtZW50cy5mb3JFYWNoKCh7IHRhZywgdGV4dCwgY2xhc3M6IGNsYXNzTmFtZSwgY2xpY2tIYW5kbGVyIH0pID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICBlbGVtZW50LmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIGlmICh0YWcgPT09IFwiYnV0dG9uXCIpIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7IC8vIEFkZGluZyBjbGljayBoYW5kbGVyIGZvciBidXR0b24gZWxlbWVudFxuICAgICAgaG9tZVRleHQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7IC8vIEFwcGVuZGluZyB0aGUgY3JlYXRlZCBlbGVtZW50IHRvIHRoZSBob21lIHRleHQgY29udGFpbmVyXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGluZyBhIGNvbnRhaW5lciBkaXYgZm9yIHRoZSBhdmF0YXIgaW1hZ2VcbiAgICBjb25zdCBob21lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYXZhdGFyLWNvbnRhaW5lclwiKTtcbiAgICBob21lQ29udGVudC5hcHBlbmRDaGlsZChob21lSW1hZ2UpO1xuXG4gICAgLy8gQ3JlYXRpbmcgdGhlIGF2YXRhciBpbWFnZVxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNyYyA9IGF2YXRhcjsgLy8gU2V0dGluZyB0aGUgaW1hZ2Ugc291cmNlXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJhdmF0YXJcIik7IC8vIEFkZGluZyBDU1MgY2xhc3MgZm9yIHN0eWxpbmdcbiAgICBob21lSW1hZ2UuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIC8vIFJldHVybmluZyB0aGUgY3JlYXRlZCBjb250ZW50XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH0sXG59O1xuXG4vLyBFeHBvcnRpbmcgdGhlIGhvbWUgb2JqZWN0IGFzIHRoZSBkZWZhdWx0IGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcbiIsIi8vIEltcG9ydCBpbWFnZXNcbmltcG9ydCBiaXJ5YW5pSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9iaXJ5YW5pLnBuZ1wiO1xuaW1wb3J0IGFycm96YWxhSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9hcnJvemFsYS5wbmdcIjtcbmltcG9ydCBjaGVsb3dJbWFnZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL0NoZWxvdy5wbmdcIjtcbmltcG9ydCBjb2NvbnV0UmljZUltYWdlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvY29jb251dC5wbmdcIjtcbmltcG9ydCBjdXJyeVJpY2VJbWFnZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2N1cnJ5LnBuZ1wiO1xuaW1wb3J0IGZyaWVkUmljZUltYWdlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvZnJpZWQucG5nXCI7XG5pbXBvcnQgam9sbG9mUmljZUltYWdlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvam9sbG9mLnBuZ1wiO1xuaW1wb3J0IGthYnNhSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9rYWJzYS5wbmdcIjtcbmltcG9ydCBwYWVsbGFJbWFnZSBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL3BhZWxsYS5wbmdcIjtcbmltcG9ydCBwaWxhZkltYWdlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvcGlsYWYucG5nXCI7XG5pbXBvcnQgcmlzb3R0b0ltYWdlIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvcmlzb3R0by5wbmdcIjtcblxuLy8gR2FsbGVyeSBmdW5jdGlvblxuY29uc3QgZ2FsbGVyeSA9IChuYW1lLCBzcmMsIHByaWNlLCBkZXNjcmlwdGlvbikgPT4ge1xuICByZXR1cm4geyBuYW1lLCBzcmMsIHByaWNlLCBkZXNjcmlwdGlvbiB9O1xufTtcblxuLy9tZWFscyBhcnJheVxuY29uc3QgbWVhbHMgPSBbXG4gIGdhbGxlcnkoXG4gICAgXCJCaXJ5YW5pXCIsXG4gICAgYmlyeWFuaUltYWdlLFxuICAgIFwiJDEwXCIsXG4gICAgXCJCaXJ5YW5pIGlzIGEgZmxhdm9yZnVsIGFuZCBhcm9tYXRpYyByaWNlIGRpc2ggbWFkZSB3aXRoIGJhc21hdGkgcmljZSwgc3BpY2VzLCBhbmQgdXN1YWxseSBtZWF0IG9yIHZlZ2V0YWJsZXMuXCJcbiAgKSxcbiAgZ2FsbGVyeShcbiAgICBcIkFycm96IEFsYVwiLFxuICAgIGFycm96YWxhSW1hZ2UsXG4gICAgXCIkMTJcIixcbiAgICBcIkFycm96IEFsYSBpcyBhIFNwYW5pc2ggcmljZSBkaXNoIGNvb2tlZCB3aXRoIHNhZmZyb24sIHZlZ2V0YWJsZXMsIGFuZCBzb21ldGltZXMgc2VhZm9vZCBvciBtZWF0LlwiXG4gICksXG4gIGdhbGxlcnkoXG4gICAgXCJDaGVsb3dcIixcbiAgICBjaGVsb3dJbWFnZSxcbiAgICBcIiQ4XCIsXG4gICAgXCJDaGVsb3cgaXMgYSBQZXJzaWFuIHJpY2UgZGlzaCBjb25zaXN0aW5nIG9mIGZsdWZmeSByaWNlIHNlcnZlZCB3aXRoIGEgcGF0IG9mIGJ1dHRlciBvciBzYWZmcm9uLWluZnVzZWQgcmljZS5cIlxuICApLFxuICBnYWxsZXJ5KFxuICAgIFwiQ29jb251dCBSaWNlXCIsXG4gICAgY29jb251dFJpY2VJbWFnZSxcbiAgICBcIiQ5XCIsXG4gICAgXCJDb2NvbnV0IFJpY2UgaXMgYSB0cm9waWNhbCBkaXNoIG1hZGUgYnkgY29va2luZyByaWNlIHdpdGggY29jb251dCBtaWxrLCBnaXZpbmcgaXQgYSByaWNoIGFuZCBjcmVhbXkgZmxhdm9yLlwiXG4gICksXG4gIGdhbGxlcnkoXG4gICAgXCJDdXJyeSBSaWNlXCIsXG4gICAgY3VycnlSaWNlSW1hZ2UsXG4gICAgXCIkMTFcIixcbiAgICBcIkN1cnJ5IFJpY2UgaXMgYSBkaXNoIHdoZXJlIHJpY2UgaXMgY29va2VkIHdpdGggYSBmbGF2b3JmdWwgY3Vycnkgc2F1Y2UsIG9mdGVuIGNvbnRhaW5pbmcgbWVhdCwgdmVnZXRhYmxlcywgb3IgdG9mdS5cIlxuICApLFxuICBnYWxsZXJ5KFxuICAgIFwiRnJpZWQgUmljZVwiLFxuICAgIGZyaWVkUmljZUltYWdlLFxuICAgIFwiJDdcIixcbiAgICBcIkZyaWVkIFJpY2UgaXMgYSBDaGluZXNlIGRpc2ggbWFkZSBieSBzdGlyLWZyeWluZyBwcmUtY29va2VkIHJpY2Ugd2l0aCB2ZWdldGFibGVzLCBlZ2dzLCBhbmQgc29tZXRpbWVzIG1lYXQgb3Igc2VhZm9vZC5cIlxuICApLFxuICBnYWxsZXJ5KFxuICAgIFwiSm9sbG9mIFJpY2VcIixcbiAgICBqb2xsb2ZSaWNlSW1hZ2UsXG4gICAgXCIkMTNcIixcbiAgICBcIkpvbGxvZiBSaWNlIGlzIGEgcG9wdWxhciBXZXN0IEFmcmljYW4gZGlzaCBtYWRlIHdpdGggcmljZSwgdG9tYXRvZXMsIG9uaW9ucywgYW5kIGEgYmxlbmQgb2Ygc3BpY2VzLCBvZnRlbiBzZXJ2ZWQgd2l0aCBtZWF0IG9yIGZpc2guXCJcbiAgKSxcbiAgZ2FsbGVyeShcbiAgICBcIkthYnNhXCIsXG4gICAga2Fic2FJbWFnZSxcbiAgICBcIiQxNVwiLFxuICAgIFwiS2Fic2EgaXMgYSB0cmFkaXRpb25hbCBTYXVkaSBBcmFiaWFuIGRpc2ggbWFkZSB3aXRoIHNwaWNlZCByaWNlLCBtZWF0ICh1c3VhbGx5IGNoaWNrZW4sIGxhbWIsIG9yIGdvYXQpLCBhbmQgdmVnZXRhYmxlcy5cIlxuICApLFxuICBnYWxsZXJ5KFxuICAgIFwiUGFlbGxhXCIsXG4gICAgcGFlbGxhSW1hZ2UsXG4gICAgXCIkMTRcIixcbiAgICBcIlBhZWxsYSBpcyBhIFNwYW5pc2ggcmljZSBkaXNoIG9yaWdpbmF0aW5nIGZyb20gdGhlIFZhbGVuY2lhIHJlZ2lvbiwgdHlwaWNhbGx5IG1hZGUgd2l0aCBzYWZmcm9uLWluZnVzZWQgcmljZSwgc2VhZm9vZCwgY2hpY2tlbiwgYW5kIHZlZ2V0YWJsZXMuXCJcbiAgKSxcbiAgZ2FsbGVyeShcbiAgICBcIlBpbGFmXCIsXG4gICAgcGlsYWZJbWFnZSxcbiAgICBcIiQxMFwiLFxuICAgIFwiUGlsYWYgaXMgYSBkaXNoIHdoZXJlIHJpY2UgaXMgY29va2VkIGluIGEgc2Vhc29uZWQgYnJvdGgsIG9mdGVuIHdpdGggc3BpY2VzLCB2ZWdldGFibGVzLCBhbmQgc29tZXRpbWVzIG1lYXQgb3IgZHJpZWQgZnJ1aXRzLlwiXG4gICksXG4gIGdhbGxlcnkoXG4gICAgXCJSaXNvdHRvXCIsXG4gICAgcmlzb3R0b0ltYWdlLFxuICAgIFwiJDE2XCIsXG4gICAgXCJSaXNvdHRvIGlzIGFuIEl0YWxpYW4gcmljZSBkaXNoIGNvb2tlZCB3aXRoIGJyb3RoIHRvIGEgY3JlYW15IGNvbnNpc3RlbmN5LCBvZnRlbiBmbGF2b3JlZCB3aXRoIGluZ3JlZGllbnRzIHN1Y2ggYXMgbXVzaHJvb21zLCBzZWFmb29kLCBvciBjaGVlc2UuXCJcbiAgKSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IG1lYWxzO1xuIiwiLy8gSW1wb3J0aW5nIHRoZSBtZWFscyBhcnJheSBmcm9tIHRoZSBnYWxsZXJ5IG1vZHVsZVxuaW1wb3J0IG1lYWxzIGZyb20gXCIuL2dhbGxlcnlcIjtcblxuLy8gRGVmaW5pdGlvbiBvZiB0aGUgbWVudSBvYmplY3RcbmNvbnN0IG1lbnUgPSB7XG4gIHRpdGxlOiBcIk1lbnVcIiwgLy8gVGl0bGUgb2YgdGhlIG1lbnUgc2VjdGlvblxuXG4gIC8vIE1ldGhvZCB0byBjcmVhdGUgdGhlIG1lbnUgc2VjdGlvblxuICBjcmVhdGVTZWN0aW9uOiAoKSA9PiB7XG4gICAgLy8gQ3JlYXRpbmcgdGhlIG1haW4gY29udGFpbmVyIGZvciB0aGUgbWVudSBzZWN0aW9uXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIC8vIENyZWF0aW5nIHRoZSBoZWFkZXIgc2VjdGlvbiB3aXRoIHRoZSB0aXRsZVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaGVhZGVydGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXJ0ZXh0LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJ0ZXh0KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAvLyBDcmVhdGluZyBhIGNvbnRhaW5lciBmb3IgdGhlIG1lYWwgZ2FsbGVyeVxuICAgIGNvbnN0IGdhbGxlcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbGxlcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdhbGxlcnktY29udGFpbmVyXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2FsbGVyeUNvbnRhaW5lcik7XG5cbiAgICAvLyBMb29waW5nIHRocm91Z2ggZWFjaCBtZWFsIHRvIGNyZWF0ZSBhIHRpbGUgZm9yIGl0XG4gICAgbWVhbHMuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgICAgY29uc3QgbWVhbFRpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWVhbFRpbGUuY2xhc3NMaXN0LmFkZChcIm1lYWwtdGlsZVwiKTtcblxuICAgICAgLy8gQ3JlYXRpbmcgdGhlIGltYWdlIGNvbnRhaW5lciBhbmQgYWRkaW5nIHRoZSBtZWFsIGltYWdlXG4gICAgICBjb25zdCBtZWFsSW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG1lYWxJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lYWwtaW1nLWNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnN0IG1lYWxJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgbWVhbEltZy5zcmMgPSBtZWFsLnNyYztcbiAgICAgIG1lYWxJbWcuY2xhc3NMaXN0LmFkZChcIm1lYWwtaW1nXCIpO1xuICAgICAgbWVhbEltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZWFsSW1nKTtcbiAgICAgIG1lYWxUaWxlLmFwcGVuZENoaWxkKG1lYWxJbWdDb250YWluZXIpO1xuXG4gICAgICAvLyBDcmVhdGluZyB0aGUgdGV4dCBjb250YWluZXIgYW5kIGFkZGluZyB0aGUgbWVhbCBuYW1lLCBwcmljZSwgYW5kIGRlc2NyaXB0aW9uXG4gICAgICBjb25zdCBtZWFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtZWFsVGV4dC5jbGFzc0xpc3QuYWRkKFwibWVhbC10ZXh0XCIpO1xuICAgICAgY29uc3QgbWVhbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIG1lYWxOYW1lLmNsYXNzTGlzdC5hZGQoXCJtZWFsLW5hbWVcIik7XG4gICAgICBtZWFsTmFtZS5pbm5lclRleHQgPSBtZWFsLm5hbWU7XG4gICAgICBjb25zdCBtZWFsUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIG1lYWxQcmljZS5jbGFzc0xpc3QuYWRkKFwibWVhbC1wcmljZVwiKTtcbiAgICAgIG1lYWxQcmljZS5pbm5lclRleHQgPSBtZWFsLnByaWNlO1xuICAgICAgY29uc3QgbWVhbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIG1lYWxEZXNjLmNsYXNzTGlzdC5hZGQoXCJtZWFsLWRlc2NcIik7XG4gICAgICBtZWFsRGVzYy5pbm5lclRleHQgPSBtZWFsLmRlc2NyaXB0aW9uO1xuICAgICAgbWVhbFRleHQuYXBwZW5kQ2hpbGQobWVhbE5hbWUpO1xuICAgICAgbWVhbFRleHQuYXBwZW5kQ2hpbGQobWVhbFByaWNlKTtcbiAgICAgIG1lYWxUZXh0LmFwcGVuZENoaWxkKG1lYWxEZXNjKTtcbiAgICAgIG1lYWxUaWxlLmFwcGVuZENoaWxkKG1lYWxUZXh0KTtcblxuICAgICAgLy8gQXBwZW5kaW5nIHRoZSBjcmVhdGVkIG1lYWwgdGlsZSB0byB0aGUgZ2FsbGVyeSBjb250YWluZXJcbiAgICAgIGdhbGxlcnlDb250YWluZXIuYXBwZW5kQ2hpbGQobWVhbFRpbGUpO1xuICAgIH0pO1xuXG4gICAgLy8gUmV0dXJuaW5nIHRoZSBjb21wbGV0ZWQgbWVudSBzZWN0aW9uXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH0sXG59O1xuXG4vLyBFeHBvcnRpbmcgdGhlIG1lbnUgb2JqZWN0IGFzIHRoZSBkZWZhdWx0IGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiIsIi8vIEltcG9ydCB0aGUgb2JqZWN0cyBmcm9tIHRoZSByZXNwZWN0aXZlIGZpbGVzXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi4vaG9tZS9ob21lLmpzXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi4vbWVudS9tZW51LmpzXCI7XG5pbXBvcnQgc3RvcnkgZnJvbSBcIi4uL3N0b3J5L3N0b3J5LmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5UGFnZSB9IGZyb20gXCIuLi9wYWdlLmpzXCI7XG5cbi8vIE5hdmlnYXRpb24gb2JqZWN0IGRlZmluaXRpb25cbmNvbnN0IG5hdiA9IHtcbiAgLy8gVGl0bGUgb2YgdGhlIG5hdmlnYXRpb24gc2VjdGlvblxuICB0aXRsZTogXCJOYXZpZ2F0aW9uXCIsXG5cbiAgLy8gTWV0aG9kIHRvIGNyZWF0ZSB0aGUgbmF2aWdhdGlvbiBzZWN0aW9uXG4gIGNyZWF0ZVNlY3Rpb246ICgpID0+IHtcbiAgICAvLyBDcmVhdGUgYSBjb250YWluZXIgZm9yIHRoZSBuYXZpZ2F0aW9uIHNlY3Rpb25cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uXCIpO1xuXG4gICAgLy8gQ3JlYXRlIGFuIHVub3JkZXJlZCBsaXN0IGZvciBuYXZpZ2F0aW9uIGxpbmtzXG4gICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBuYXZMaXN0LmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlzdFwiKTtcblxuICAgIC8vIEFycmF5IG9mIG5hdmlnYXRpb24gaXRlbXMgd2l0aCB0ZXh0IGFuZCBjb3JyZXNwb25kaW5nIHBhZ2VcbiAgICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICAgIHsgdGV4dDogXCJIb21lXCIsIHBhZ2U6IGhvbWUgfSxcbiAgICAgIHsgdGV4dDogXCJNZW51XCIsIHBhZ2U6IG1lbnUgfSxcbiAgICAgIHsgdGV4dDogXCJTdG9yeVwiLCBwYWdlOiBzdG9yeSB9LFxuICAgIF07XG5cbiAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBuYXZpZ2F0aW9uIGl0ZW1cbiAgICBuYXZJdGVtcy5mb3JFYWNoKCh7IHRleHQsIHBhZ2UgfSkgPT4ge1xuICAgICAgLy8gQ3JlYXRlIGxpc3QgaXRlbSBhbmQgbGluayBmb3IgZWFjaCBuYXZpZ2F0aW9uIGl0ZW1cbiAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIpOyAvLyBBZGQgY2xhc3MgdG8gbGlzdCBpdGVtXG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBsaW5rLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICBsaW5rLmhyZWYgPSBcIiNcIjtcbiAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rXCIpOyAvLyBBZGQgY2xhc3MgdG8gbGlua1xuICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBsaW5rIGZvciBwYWdlIG5hdmlnYXRpb25cbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwbGF5UGFnZShwYWdlKTtcbiAgICAgIH0pO1xuICAgICAgLy8gQXBwZW5kIGxpbmsgdG8gbGlzdCBpdGVtIGFuZCBsaXN0IGl0ZW0gdG8gbmF2aWdhdGlvbiBsaXN0XG4gICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgLy8gQXBwZW5kIG5hdmlnYXRpb24gbGlzdCB0byB0aGUgbmF2aWdhdGlvbiBzZWN0aW9uIGNvbnRhaW5lclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbiAgICByZXR1cm4gY29udGVudDsgLy8gUmV0dXJuIHRoZSBjcmVhdGVkIG5hdmlnYXRpb24gc2VjdGlvblxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2OyAvLyBFeHBvcnQgdGhlIG5hdmlnYXRpb24gb2JqZWN0IGFzIGRlZmF1bHRcbiIsIi8vIEltcG9ydCB0aGUgb2JqZWN0cyBmcm9tIHRoZSByZXNwZWN0aXZlIGZpbGVzXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lL2hvbWUuanNcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnUvbWVudS5qc1wiO1xuaW1wb3J0IHN0b3J5IGZyb20gXCIuL3N0b3J5L3N0b3J5LmpzXCI7XG5pbXBvcnQgbmF2IGZyb20gXCIuL25hdi9uYXYuanNcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyL2Zvb3Rlci5qc1wiO1xuXG4vLyBGdW5jdGlvbiB0byBkaXNwbGF5IGEgcGFnZSBiYXNlZCBvbiBpdHMgdGl0bGVcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UGFnZShwYWdlKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyBSZW5kZXIgTmF2IHNlY3Rpb25cbiAgY29uc3QgbmF2U2VjdGlvbiA9IG5hdi5jcmVhdGVTZWN0aW9uKCk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobmF2U2VjdGlvbik7XG5cbiAgLy8gUmVuZGVyIHJlcXVlc3RlZCBwYWdlIHNlY3Rpb25cbiAgY29uc3QgcGFnZVNlY3Rpb24gPSBwYWdlLmNyZWF0ZVNlY3Rpb24oKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChwYWdlU2VjdGlvbik7XG5cbiAgLy8gUmVuZGVyIEZvb3RlciBzZWN0aW9uXG4gIGNvbnN0IGZvb3RlclNlY3Rpb24gPSBmb290ZXIuY3JlYXRlU2VjdGlvbigpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3RlclNlY3Rpb24pO1xufVxuXG4vLyBGdW5jdGlvbiB0byBoYW5kbGUgbmF2aWdhdGlvbiBjbGlja3NcbmZ1bmN0aW9uIGhhbmRsZU5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtbGlzdCBhXCIpO1xuICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgcGFnZU5hbWUgPSBldmVudC50YXJnZXQuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICBzd2l0Y2ggKHBhZ2VOYW1lKSB7XG4gICAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgICAgZGlzcGxheVBhZ2UoaG9tZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtZW51XCI6XG4gICAgICAgICAgZGlzcGxheVBhZ2UobWVudSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzdG9yeVwiOlxuICAgICAgICAgIGRpc3BsYXlQYWdlKHN0b3J5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxpemVQYWdlKCkge1xuICAvLyBJbml0aWFsaXplIHRoZSBkZWZhdWx0IHBhZ2UgKEhvbWUpXG4gIGRpc3BsYXlQYWdlKGhvbWUpO1xuXG4gIC8vIEluaXRpYWxpemUgbmF2aWdhdGlvbiBldmVudCBsaXN0ZW5lcnNcbiAgaGFuZGxlTmF2aWdhdGlvbigpO1xufVxuIiwiY29uc3Qgc3RvcnkgPSB7XG4gIHRpdGxlOiBcIk91ciBTdG9yeVwiLCAvLyBUaXRsZSBvZiB0aGUgc3Rvcnkgc2VjdGlvblxuXG4gIC8vIE1ldGhvZCB0byBjcmVhdGUgdGhlIHN0b3J5IHNlY3Rpb25cbiAgY3JlYXRlU2VjdGlvbjogKCkgPT4ge1xuICAgIC8vIENyZWF0aW5nIHRoZSBtYWluIGNvbnRhaW5lciBmb3IgdGhlIHN0b3J5IHNlY3Rpb25cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJzdG9yeVwiKTtcblxuICAgIC8vIENyZWF0aW5nIHRoZSBoZWFkZXIgc2VjdGlvbiB3aXRoIHRoZSB0aXRsZVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaGVhZGVydGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXJ0ZXh0LmlubmVyVGV4dCA9IFwiT3VyIFN0b3J5XCI7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcnRleHQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIC8vIENyZWF0aW5nIHRoZSBzdG9yeSBjb250YWluZXJcbiAgICBjb25zdCBzdG9yeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RvcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN0b3J5LWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHN0b3J5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHN0b3J5Q29udGVudC5jbGFzc0xpc3QuYWRkKFwic3RvcnktY29udGVudFwiKTtcbiAgICBzdG9yeUNvbnRlbnQuaW5uZXJUZXh0ID0gYE9uY2UgdXBvbiBhIHRpbWUsIG5lc3RsZWQgaW4gYSBxdWFpbnQgbGl0dGxlIHZpbGxhZ2UgdHVja2VkIGF3YXkgYW1pZHN0IHJvbGxpbmcgaGlsbHMgYW5kIHdoaXNwZXJpbmcgdHJlZXMsIHRoZXJlIHN0b29kIGEgcmVtYXJrYWJsZSBwbGFjZSBjYWxsZWQgUmljZSBQYWxhY2U6IFRoZSBIb21lIG9mIFJpY2UgQnVkZHkuIExlZ2VuZCBoYWQgaXQgdGhhdCB0aGlzIGVuY2hhbnRlZCByZXN0YXVyYW50IHdhcyBidWlsdCB1cG9uIGEgZmllbGQgd2hlcmUgdGhlIHJpY2UgZ3JhaW5zIHNhbmcgbWVsb2RpZXMgb2Ygam95IHRvIGFueW9uZSB3aG8gZGFyZWQgdG8gbGlzdGVuLlxuXG4gICAgVGhlIHRhbGUgb2YgUmljZSBCdWRkeSwgdGhlIG1pc2NoaWV2b3VzIHlldCBsb3ZhYmxlIHJpY2UgZ3JhaW4sIHdhcyB3aGlzcGVyZWQgYW1vbmcgdGhlIHZpbGxhZ2Vycy4gSXQgd2FzIHNhaWQgdGhhdCBSaWNlIEJ1ZGR5IHBvc3Nlc3NlZCBtYWdpY2FsIHBvd2VycywgY2FwYWJsZSBvZiB0dXJuaW5nIGEgbXVuZGFuZSBtZWFsIGludG8gYSBjdWxpbmFyeSBhZHZlbnR1cmUgZmlsbGVkIHdpdGggbGF1Z2h0ZXIgYW5kIGRlbGlnaHQuXG5cbiAgICBBcyB0aGUgc3VuIGRpcHBlZCBiZWxvdyB0aGUgaG9yaXpvbiwgY2FzdGluZyBodWVzIG9mIHBpbmsgYW5kIGdvbGQgYWNyb3NzIHRoZSBza3ksIHRoZSBkb29ycyBvZiBSaWNlIFBhbGFjZSB3b3VsZCBvcGVuLCBpbnZpdGluZyB3ZWFyeSB0cmF2ZWxlcnMgYW5kIGh1bmdyeSBzb3VscyB0byBzdGVwIGludG8gYSB3b3JsZCB3aGVyZSByaWNlIHJlaWduZWQgc3VwcmVtZS5cblxuICAgIFVwb24gZW50ZXJpbmcsIGd1ZXN0cyB3ZXJlIGdyZWV0ZWQgYnkgdGhlIHRhbnRhbGl6aW5nIGFyb21hIG9mIGZyZXNobHkgY29va2VkIHJpY2UsIHN3aXJsaW5nIGFyb3VuZCB0aGVtIGxpa2UgYSB3YXJtIGVtYnJhY2UuIFRoZSB3YWxscyB3ZXJlIGFkb3JuZWQgd2l0aCB3aGltc2ljYWwgcGFpbnRpbmdzIGRlcGljdGluZyBSaWNlIEJ1ZGR5J3MgbWlzYWR2ZW50dXJlcywgZnJvbSBzbmVha2luZyBpbnRvIHBvdHMgb2YgYm9pbGluZyB3YXRlciB0byBwbGF5ZnVsbHkgYm91bmNpbmcgZnJvbSBwbGF0ZSB0byBwbGF0ZS5cblxuICAgIEJ1dCB0aGUgdHJ1ZSBtYWdpYyBoYXBwZW5lZCB3aGVuIGRpbmVycyB0b29rIHRoZWlyIGZpcnN0IGJpdGUuIFdpdGggZWFjaCBzcG9vbmZ1bCBvZiBmbHVmZnkgcmljZSBvciBzYXZvcnkgcmljZSBkaXNoLCB0aGV5IHdvdWxkIGZlZWwgYSB3YXJtdGggc3ByZWFkaW5nIHRocm91Z2ggdGhlaXIgYm9kaWVzLCBhcyBpZiBSaWNlIEJ1ZGR5IGhpbXNlbGYgd2FzIHdoaXNwZXJpbmcgc2VjcmV0cyBvZiBoYXBwaW5lc3MgYW5kIGNvbnRlbnRtZW50IGludG8gdGhlaXIgaGVhcnRzLlxuXG4gICAgQW5kIG9oLCB0aGUgZGlzaGVzISBGcm9tIGNsYXNzaWMgZnJpZWQgcmljZSB0byBleG90aWMgcmljZSBib3dscyBpbmZ1c2VkIHdpdGggZmxhdm9ycyBmcm9tIGRpc3RhbnQgbGFuZHMsIFJpY2UgUGFsYWNlIG9mZmVyZWQgYSBmZWFzdCBmaXQgZm9yIGtpbmdzIGFuZCBjb21tb25lcnMgYWxpa2UuIEVhY2ggZGlzaCB3YXMgbG92aW5nbHkgY3JhZnRlZCB3aXRoIHRoZSBmaW5lc3QgaW5ncmVkaWVudHMsIHNwcmlua2xlZCB3aXRoIGEgZGFzaCBvZiB3aGltc3kgYW5kIGEgcGluY2ggb2YgZW5jaGFudG1lbnQuXG5cbiAgICBCdXQgdGhlIHJlYWwgc3RhciBvZiB0aGUgc2hvdyB3YXMgUmljZSBCdWRkeSBoaW1zZWxmLCB3aG8gd291bGQgb2Z0ZW4gbWFrZSBzdXJwcmlzZSBhcHBlYXJhbmNlcywgcG9wcGluZyBvdXQgb2YgYm93bHMgb3IgcGVla2luZyBmcm9tIGJlaGluZCBjdXJ0YWlucyB0byBncmVldCBkZWxpZ2h0ZWQgZGluZXJzIHdpdGggYSBtaXNjaGlldm91cyBncmluLiBIaXMgaW5mZWN0aW91cyBsYXVnaHRlciB3b3VsZCBmaWxsIHRoZSBhaXIsIHR1cm5pbmcgZXZlbiB0aGUgZ3J1bXBpZXN0IG9mIHBhdHJvbnMgaW50byBnaWdnbGluZyBidW5kbGVzIG9mIGpveS5cblxuICAgIEFzIHRoZSBuaWdodCB3b3JlIG9uIGFuZCBiZWxsaWVzIGdyZXcgZnVsbCwgZ3Vlc3RzIHdvdWxkIGRlcGFydCB3aXRoIHNtaWxlcyBvbiB0aGVpciBmYWNlcyBhbmQgaGVhcnRzIGFnbG93IHdpdGggdGhlIG1hZ2ljIG9mIFJpY2UgUGFsYWNlLiBGb3IgaW4gdGhpcyBodW1ibGUgcmVzdGF1cmFudCwgd2hlcmUgcmljZSB3YXMga2luZyBhbmQgUmljZSBCdWRkeSBpdHMgcGxheWZ1bCBndWFyZGlhbiwgZXZlcnkgbWVhbCB3YXMgbm90IGp1c3QgYSBjdWxpbmFyeSBleHBlcmllbmNlLCBidXQgYSBqb3VybmV5IGludG8gYSB3b3JsZCB3aGVyZSBsYXVnaHRlciwgbG92ZSwgYW5kIHJpY2UgcmVpZ25lZCBzdXByZW1lLiBTbyBjb21lLCBkZWFyIHRyYXZlbGVyLCBhbmQgbGV0IFJpY2UgUGFsYWNlIHdoaXNrIHlvdSBhd2F5IG9uIGEgbWFnaWNhbCBhZHZlbnR1cmUgeW91J2xsIG5ldmVyIGZvcmdldCFgO1xuXG4gICAgc3RvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RvcnlDb250ZW50KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHN0b3J5Q29udGFpbmVyKTtcblxuICAgIC8vIFJldHVybmluZyB0aGUgY29tcGxldGVkIHN0b3J5IHNlY3Rpb25cbiAgICByZXR1cm4gY29udGVudDtcbiAgfSxcbn07XG5cbi8vIEV4cG9ydGluZyB0aGUgc3Rvcnkgb2JqZWN0IGFzIHRoZSBkZWZhdWx0IGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgc3Rvcnk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBpbml0aWFsaXplUGFnZSBmcm9tIFwiLi9tb2R1bGVzL3BhZ2VcIjtcbmltcG9ydCBcIi4vcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuLy8gQ2FsbGluZyB0aGUgZnVuY3Rpb24gdG8gaW5pdGlhbGl6ZSB0aGUgcGFnZVxuaW5pdGlhbGl6ZVBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==