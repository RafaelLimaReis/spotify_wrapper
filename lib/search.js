"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtists = exports.searchAlbums = exports.search = void 0;

var _config = require("./config");

var _utils = require("./utils");

var search = function search(param, type) {
  return fetch("".concat(_config.API_URL, "/search?q=").concat(param, "&type=").concat(type), _config.HEADERS).then(_utils.toJSON);
};

exports.search = search;

var searchArtists = function searchArtists(artist) {
  return search(artist, 'artist');
};

exports.searchArtists = searchArtists;

var searchAlbums = function searchAlbums(album) {
  return search(album, 'album');
};

exports.searchAlbums = searchAlbums;

var searchTracks = function searchTracks(tracks) {
  return search(tracks, 'track');
};

exports.searchTracks = searchTracks;

var searchPlaylists = function searchPlaylists(playlist) {
  return search(playlist, 'playlist');
};

exports.searchPlaylists = searchPlaylists;