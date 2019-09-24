import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
global.fetch = require('node-fetch');

chai.use(sinonChai);

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';
import { API_URL } from '../src/config';

describe('Spotify Wrapper', () => {
  let fetchedStub;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ album: 'name' })});
  });

  afterEach(() => {
    fetchedStub.restore();
  });
  /**
   * search (generico)
   * searchAlbums
   * searchArtists
   * searchTracks
   * searchPlaylists
   */
  describe('Smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });
    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });
    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });
    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });
    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      search();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should recive the correct url to fetch', () => {

      context('passing one type', () => {
        search('Projota', 'artist');
        expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Projota&type=artist`);

        search('Projota', 'album');
        expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Projota&type=album`);
      });

      context('passing more than on type', () => {
        search('Projota', ['artist', 'album']);

        expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Projota&type=artist,album`)
      });
    });

    it('should return the JSON Data from the Promise', () => {
      const artist = search('Projota', 'artist');
      artist.then(data => {
        expect(data).to.be.eql({ album: 'name' });
      })
    });
  });

  describe('Search Artists', () => {
    it('should call fetch function', () => {
      searchArtists('Projota');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      searchArtists('Projota');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Projota&type=artist`)
    });
  });

  describe('Search Albums', () => {
    it('should call fetch function', () => {
      searchAlbums('Projota');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      searchAlbums('Projota');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Projota&type=album`)
    });
  });

  describe('Search tracks', () => {
    it('should call fetch function', () => {
      searchTracks('Projota');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      searchTracks('Projota');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Projota&type=track`)
    });
  });

  describe('Search playlists', () => {
    it('should call fetch function', () => {
      searchPlaylists('Projota');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      searchPlaylists('Projota');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/search?q=Projota&type=playlist`)
    });
  });
});
