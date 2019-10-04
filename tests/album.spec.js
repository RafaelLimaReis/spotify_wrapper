import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';
import { API_URL } from '../src/config';

chai.use(sinonChai);

describe('Album', () => {
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

  describe('Smoke tests', () => {
    it('Should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });
    it('Should have getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });

    it('should have getTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });
  });
  describe('getAlbum', () => {
    it('should call fetch method', () => {
      spotify.album.getAlbum();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.album.getAlbum('0aehbkYCoF1rnj9uATqFIt');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/0aehbkYCoF1rnj9uATqFIt`);

      spotify.album.getAlbum('0aehbkYCoF1rnj9uATqFIts');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/0aehbkYCoF1rnj9uATqFIts`);
    });

    it('should return the correct data from promise', () => {
      spotify.album.getAlbum('0aehbkYCoF1rnj9uATqFIt').then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      spotify.album.getAlbums();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.album.getAlbums(['0aehbkYCoF1rnj9uATqFIt', '2OxtEzyqnUHk3SK8JywoXX']);
      expect(fetchedStub)
        .to.have.been.calledWith(`${API_URL}/albums/?ids=0aehbkYCoF1rnj9uATqFIt,2OxtEzyqnUHk3SK8JywoXX`);

      spotify.album.getAlbums(['0aehbkYCoF1rnj9uATqFIt', '2OxtEzyqnUHk3SK8JywoXXz']);
      expect(fetchedStub)
        .to.have.been.calledWith(`${API_URL}/albums/?ids=0aehbkYCoF1rnj9uATqFIt,2OxtEzyqnUHk3SK8JywoXXz`);
    });

    it('should return the correct data from promise', () => {
      spotify.album.getAlbums(['0aehbkYCoF1rnj9uATqFIt', '2OxtEzyqnUHk3SK8JywoXXz']).then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbumsTracks', () => {
    it('should call fetch method', () => {
      spotify.album.getTracks();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      spotify.album.getTracks('0aehbkYCoF1rnj9uATqFIt');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/0aehbkYCoF1rnj9uATqFIt/tracks`);

      spotify.album.getTracks('0aehbkYCoF1rnj9uATqFIts');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/0aehbkYCoF1rnj9uATqFIts/tracks`);
    });

    it('should return the correct data from promise', () => {
      spotify.album.getTracks('0aehbkYCoF1rnj9uATqFIt').then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
      expect()
    });
  });
});
