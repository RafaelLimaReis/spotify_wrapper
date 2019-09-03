const API_URL = 'https://api.spotify/v1';
/*  https://developer.spotify.com/console/get-search-item/ */
const TOKEN_API = 'API_TOKEN';

const HEADERS = {
  headers: {
    Authorization: `Bearer ${TOKEN_API}`
  }
};

module.exports = {
  API_URL,
  HEADERS
}
