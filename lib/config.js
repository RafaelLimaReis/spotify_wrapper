"use strict";

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