import {
  search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists
} from  './search';

import {
  getAlbum,
  getAlbums,
  getAlbumTracks
} from '../src/album.js';

import { API_URL } from './config';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiUrl = options.apiUrl || API_URL;
    this.token = options.token;
  }
}
