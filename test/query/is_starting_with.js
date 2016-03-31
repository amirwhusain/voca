import v from '../voca';
import { expect } from 'chai';

describe('isStartingWith', function() {

  it('should return true for valid starting string', function() {
    expect(v.isStartingWith('Hello World!', '')).to.be.true;
    expect(v.isStartingWith('Hello World!', 'H')).to.be.true;
    expect(v.isStartingWith('Hello World!', 'He')).to.be.true;
    expect(v.isStartingWith('Hello World!', 'Hel')).to.be.true;
    expect(v.isStartingWith('Hello World!', 'Hell')).to.be.true;
    expect(v.isStartingWith('Hello World!', 'Hello')).to.be.true;
    expect(v.isStartingWith('Hello World!', 'Hello ')).to.be.true;
    expect(v.isStartingWith('Hello World!', 'Hello W')).to.be.true;
    expect(v.isStartingWith('Hello World!', 'Hello Wo')).to.be.true;
    expect(v.isStartingWith('Hello World!', 'Hello Wor')).to.be.true;
    expect(v.isStartingWith('Hello World!', 'Hello Worl')).to.be.true;
    expect(v.isStartingWith('Hello World!', 'Hello World')).to.be.true;
    expect(v.isStartingWith('Hello World!', 'Hello World!')).to.be.true;
    expect(v.isStartingWith('Привет Мир!', 'Привет')).to.be.true;
    expect(v.isStartingWith('', '')).to.be.true;
  });

  it('should return true for valid starting string and position', function() {
    expect(v.isStartingWith('Hello World!', '', 0)).to.be.true;
    expect(v.isStartingWith('Hello World!', '!', 'Hello World!'.length - 1)).to.be.true;
    expect(v.isStartingWith('Hello World!', 'd!', 'Hello World!'.length - 2)).to.be.true;
    expect(v.isStartingWith('Hello World!', 'ld!', 'Hello World!'.length - 3)).to.be.true;
    expect(v.isStartingWith('Hello World!', 'rld!', 'Hello World!'.length - 4)).to.be.true;
    expect(v.isStartingWith('Hello World!', 'orld!', 'Hello World!'.length - 5)).to.be.true;
    expect(v.isStartingWith('Hello World!', 'World!', 'Hello World!'.length - 6)).to.be.true;
    expect(v.isStartingWith('Hello World!', ' World!', 'Hello World!'.length - 7)).to.be.true;
    expect(v.isStartingWith('Hello World!', 'o World!', 'Hello World!'.length - 8)).to.be.true;
    expect(v.isStartingWith('Hello World!', 'lo World!', 'Hello World!'.length - 9)).to.be.true;
    expect(v.isStartingWith('Hello World!', 'llo World!', 'Hello World!'.length - 10)).to.be.true;
    expect(v.isStartingWith('Hello World!', 'ello World!', 'Hello World!'.length - 11)).to.be.true;
    expect(v.isStartingWith('Hello World!', 'Hello World!', 0)).to.be.true;
    expect(v.isStartingWith('', '', 0)).to.be.true;
  });

  it('should return true for valid starting number', function() {
    expect(v.isStartingWith(1000, 100)).to.be.true;
    expect(v.isStartingWith(1250, 12)).to.be.true;
    expect(v.isStartingWith('916', 91)).to.be.true;
  });

  it('should return true for a valid ending in an object string representation', function() {
    expect(v.isStartingWith(['Welcome to Earth'], 'Welcome')).to.be.true;
    expect(v.isStartingWith({
      toString: function() {
        return 'Let us not stand on ceremony, Mr. Wayne.';
      }
    }, ['Let us not stand on ceremony'])).to.be.true;
  });

  it('should return false for an invalid starting string', function() {
    expect(v.isStartingWith('The shadows betray you, because they belong to me!', 'belong to me!')).to.be.false;
    expect(v.isStartingWith('The shadows betray you, because they belong to me!', 'he shadows')).to.be.false;
    expect(v.isStartingWith('They belong to me!', 'hey belong to me!')).to.be.false;
    expect(v.isStartingWith('They belong to me!', 'belong')).to.be.false;
    expect(v.isStartingWith('', 'The shadows')).to.be.false;
  });

  it('should return false for an invalid starting string and position', function() {
    expect(v.isStartingWith('The shadows betray you, because they belong to me!', 'The shadows betray you', 1)).to.be.false;
    expect(v.isStartingWith('They belong to me!', 'They belong to me!', 1)).to.be.false;
    expect(v.isStartingWith('They belong to me!', 'They', 1)).to.be.false;
    expect(v.isStartingWith('They belong to me!', 'belong', 2)).to.be.false;
    expect(v.isStartingWith('They belong to me!', 'to me!', 3)).to.be.false;
    expect(v.isStartingWith('They belong to me!', 'They belong', 100)).to.be.false;
  });

  it('should return false for invalid starting number', function() {
    expect(v.isStartingWith(1000, 11)).to.be.false;
    expect(v.isStartingWith(1250, 10)).to.be.false;
    expect(v.isStartingWith('916', 90)).to.be.false;
  });

  it('should return false for undefined and null parameters', function() {
    expect(v.isStartingWith()).to.be.false;
    expect(v.isStartingWith(undefined)).to.be.false;
    expect(v.isStartingWith(undefined, undefined)).to.be.false;
    expect(v.isStartingWith(undefined, undefined, undefined)).to.be.false;
    expect(v.isStartingWith(undefined, undefined, 0)).to.be.false;
    expect(v.isStartingWith(undefined, 'Hello World!')).to.be.false;
    expect(v.isStartingWith(null)).to.be.false;
    expect(v.isStartingWith(null, null)).to.be.false;
    expect(v.isStartingWith(null, null, null)).to.be.false;
    expect(v.isStartingWith(null, null, 0)).to.be.false;
    expect(v.isStartingWith(null, 'Hello World!')).to.be.false;
  });

});