"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = void 0;

var _config = require("./config");

var _utils = require("./utils");

var getAlbum = function getAlbum(idAlbum) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(idAlbum), _config.HEADERS).then(_utils.toJSON);
};

exports.getAlbum = getAlbum;

var getAlbums = function getAlbums(idAlbums) {
  return fetch("".concat(_config.API_URL, "/albums/?ids=").concat(idAlbums), _config.HEADERS).then(_utils.toJSON);
};

exports.getAlbums = getAlbums;

var getAlbumTracks = function getAlbumTracks(idAlbum) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(idAlbum, "/tracks"), _config.HEADERS).then(_utils.toJSON);
};

exports.getAlbumTracks = getAlbumTracks;