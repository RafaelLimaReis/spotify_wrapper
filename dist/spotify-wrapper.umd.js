(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spotifyWrapper"] = factory();
	else
		root["spotifyWrapper"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/album.js":
/*!**********************!*\
  !*** ./src/album.js ***!
  \**********************/
/*! exports provided: getAlbum, getAlbums, getAlbumTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbum", function() { return getAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbums", function() { return getAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbumTracks", function() { return getAlbumTracks; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



var getAlbum = function getAlbum(idAlbum) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/albums/").concat(idAlbum), _config__WEBPACK_IMPORTED_MODULE_0__["HEADERS"]).then(_utils__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
};

var getAlbums = function getAlbums(idAlbums) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/albums/?ids=").concat(idAlbums), _config__WEBPACK_IMPORTED_MODULE_0__["HEADERS"]).then(_utils__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
};

var getAlbumTracks = function getAlbumTracks(idAlbum) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/albums/").concat(idAlbum, "/tracks"), _config__WEBPACK_IMPORTED_MODULE_0__["HEADERS"]).then(_utils__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
};



/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var API_URL = 'https://api.spotify.com/v1';
var TOKEN_API = 'BQD0mFqnpO9Or-CzeOpRgS1oMEAubIj126Z2T8-Q6ZF7auJZFn4U_2dX6NzB1Un5EC8s8mB2jpfdoBTa4jQs6ZMKVCBng8lFigjeUfQA83DrhZMLnj5krS14ysg_pgKMtFhbwKG2olRJvSl1D6CprX5EilJdz4LnAa60tcxRnOadXvet0irTJdV6KHs30vlYe5oN0ikMUolMpon8tKwAw4RLc3Dq1wKWqq-uDzMQ2sXkzSywFgkx8gRjiG5fpIck49uHk-YKwhtLbDg8E9CKzJD5';
/*  https://developer.spotify.com/console/get-search-item/ */

var HEADERS = {
  headers: {
    Authorization: "Bearer ".concat(TOKEN_API)
  }
};
module.exports = {
  API_URL: API_URL,
  HEADERS: HEADERS
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: search, searchAlbums, searchArtists, searchTracks, searchPlaylists, getAlbum, getAlbums, getAlbumTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./src/search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "search", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchAlbums", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["searchAlbums"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchArtists", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["searchArtists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchTracks", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["searchTracks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchPlaylists", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["searchPlaylists"]; });

/* harmony import */ var _src_album_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/album.js */ "./src/album.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlbum", function() { return _src_album_js__WEBPACK_IMPORTED_MODULE_1__["getAlbum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlbums", function() { return _src_album_js__WEBPACK_IMPORTED_MODULE_1__["getAlbums"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAlbumTracks", function() { return _src_album_js__WEBPACK_IMPORTED_MODULE_1__["getAlbumTracks"]; });





/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! exports provided: search, searchAlbums, searchArtists, searchTracks, searchPlaylists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchAlbums", function() { return searchAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchArtists", function() { return searchArtists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchTracks", function() { return searchTracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPlaylists", function() { return searchPlaylists; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



var search = function search(param, type) {
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/search?q=").concat(param, "&type=").concat(type), _config__WEBPACK_IMPORTED_MODULE_0__["HEADERS"]).then(_utils__WEBPACK_IMPORTED_MODULE_1__["toJSON"]);
};

var searchArtists = function searchArtists(artist) {
  return search(artist, 'artist');
};

var searchAlbums = function searchAlbums(album) {
  return search(album, 'album');
};

var searchTracks = function searchTracks(tracks) {
  return search(tracks, 'track');
};

var searchPlaylists = function searchPlaylists(playlist) {
  return search(playlist, 'playlist');
};



/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return toJSON; });
var toJSON = function toJSON(data) {
  return data.json();
};

/***/ })

/******/ });
});
//# sourceMappingURL=spotify-wrapper.umd.js.map