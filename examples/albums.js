
/* to run: babel-node albums.js */
global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQDHUqvDyFOFUkYWPkhu_3S-rudQKDVQ1OAel8J1rH-C2FVxG5LC5DMK1T1I3hTU1tlIBLRtCJMjRePtJoRGydOPw_79TcH5rsm39isrxgljANaX9h_gXeCcqA6IYGADR6OoECVZHShkaUbIOLbwRC-J536m8uEkeolptoCPCvavdBIDynKTOZT7y2FF-5_fW70qe4pbphcPw9z0x5SsmIXcDUgU0uGo9AKE0-DgoAI9Lj9PAWx05hTXMldOFXQ6um06p4aZo6yn0LJX3BpeCsiT'
})

const albums = spotify.search.albums('Projota');
albums.then(data => data.albums.items.map(item => console.log(item.name)));
