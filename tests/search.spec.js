import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
global.fetch = require('node-fetch');

chai.use(sinonChai);

import SpotifyWrapper from '../src/index';
import { API_URL } from '../src/config';

describe('search', () => {
  let spotify;
  let fetchedStub;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'foo'
    });

    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ album: 'name' })});
  });

  afterEach(() => {
    fetchedStub.restore();
  });
  /**
   * search (generico)
   * albums
   * artists
   * tracks
   * playlists
   */
  describe('Smoke tests', () => {
    it('should exist the albums method', () => {
      expect(spotify.search.albums).to.exist;
    });
    it('should exist the artists method', () => {
      expect(spotify.search.artists).to.exist;
    });
    it('should exist the tracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });
    it('should exist the playlists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('Search Artists', () => {
    it('should call fetch function', () => {
      spotify.search.artists('Projota');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.search.artists('Projota');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Projota&type=artist`)
    });
  });

  describe('Search Albums', () => {
    it('should call fetch function', () => {
      spotify.search.albums('Projota');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.search.albums('Projota');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Projota&type=album`)
    });
  });

  describe('Search tracks', () => {
    it('should call fetch function', () => {
      spotify.search.tracks('Projota');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.search.tracks('Projota');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Projota&type=track`)
    });
  });

  describe('Search playlists', () => {
    it('should call fetch function', () => {
      spotify.search.playlists('Projota');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.search.playlists('Projota');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Projota&type=playlist`)
    });
  });
});
