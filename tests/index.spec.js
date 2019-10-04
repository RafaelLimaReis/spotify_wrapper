import { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('SpotifyWrapper Library', () => {
  it('SHould create an instance of SpotifyWrapper', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    let spotify = new SpotifyWrapper({
      apiUrl: 'blabla'
    });

    expect(spotify.apiUrl).to.be.equal('blabla');
  });

  it('should use the default apiUrl if not provider', () => {
    let spotify = new SpotifyWrapper({});

    expect(spotify.apiUrl).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    let spotify = new SpotifyWrapper({
      token: 'foo'
    });

    expect(spotify.token).to.be.equal('foo');
  });

  describe('reqeust method', () => {
    let fetchedStub;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      fetchedStub.resolves({ json: () => ({})});
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should have request method', () => {
      let spotify = new SpotifyWrapper({});

      expect(spotify.request).to.exist;
    });

    it('should call fetch when request', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      spotify.request('url');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with right url passed', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      spotify.request('url');
      expect(fetchedStub).to.have.been.calledWith('url');
    });

    it('should call fetch with right headers passed', () => {
      let spotify = new SpotifyWrapper({
        token: 'foo'
      });

      const headers = {
        headers: {
          Authorization: `Bearer foo`
        }
      };

      spotify.request('url');
      expect(fetchedStub).to.have.been.calledWith('url', headers);
    });
  });
});
