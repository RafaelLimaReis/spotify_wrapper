import { expect } from 'chai';
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
});
