import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
global.fetch = require('node-fetch');

import { getAlbum, getAlbums, getAlbumTracks } from '../src/album.js';
import { API_URL } from '../src/config';

chai.use(sinonChai);

describe('Album', () => {
  let fetchedStub;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => ({ album: 'name' })});
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('Smoke tests', () => {
    it('Should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });
    it('Should have getAlbums method', () => {
      expect(getAlbums).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });
  describe('getAlbum', () => {
    it('should call fetch method', () => {
      getAlbum();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      getAlbum('0aehbkYCoF1rnj9uATqFIt');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/0aehbkYCoF1rnj9uATqFIt`);

      getAlbum('0aehbkYCoF1rnj9uATqFIts');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/0aehbkYCoF1rnj9uATqFIts`);
    });

    it('should return the correct data from promise', () => {
      getAlbum('0aehbkYCoF1rnj9uATqFIt').then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
      expect()
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      getAlbums();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      getAlbums(['0aehbkYCoF1rnj9uATqFIt', '2OxtEzyqnUHk3SK8JywoXX']);
      expect(fetchedStub)
        .to.have.been.calledWith(`${API_URL}/albums/?ids=0aehbkYCoF1rnj9uATqFIt,2OxtEzyqnUHk3SK8JywoXX`);

      getAlbums(['0aehbkYCoF1rnj9uATqFIt', '2OxtEzyqnUHk3SK8JywoXXz']);
      expect(fetchedStub)
        .to.have.been.calledWith(`${API_URL}/albums/?ids=0aehbkYCoF1rnj9uATqFIt,2OxtEzyqnUHk3SK8JywoXXz`);
    });

    it('should return the correct data from promise', () => {
      getAlbums(['0aehbkYCoF1rnj9uATqFIt', '2OxtEzyqnUHk3SK8JywoXXz']).then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
    });
  });

  describe('getAlbumsTracks', () => {
    it('should call fetch method', () => {
      getAlbumTracks();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      getAlbumTracks('0aehbkYCoF1rnj9uATqFIt');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/0aehbkYCoF1rnj9uATqFIt/tracks`);

      getAlbumTracks('0aehbkYCoF1rnj9uATqFIts');
      expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/0aehbkYCoF1rnj9uATqFIts/tracks`);
    });

    it('should return the correct data from promise', () => {
      getAlbumTracks('0aehbkYCoF1rnj9uATqFIt').then(data => {
        expect(data).to.be.eql({ album: 'name' });
      });
      expect()
    });
  });
});
