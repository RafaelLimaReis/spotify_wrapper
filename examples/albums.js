global.fetch = require('node-fetch');

import { searchAlbums } from '../src/main';

const albums = searchAlbums('Projota');

albums.then(data => data.albums.items.map(item => console.log(item))).catch(e => console.error(e));
