const Nightmare = require('nightmare');
const chai = require('chai');
const { expect } = chai;
const {
  describe, it, beforeEach,
} = require('mocha');

describe('Nightmare Test', () => {
  let nightmare = null;
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  describe('/ (Home Page)', () => {
    it('should load home page without error', (done) => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('https://davidlatuno-portfolio.herokuapp.com/')
        .end()
        .evaluate(() => document.querySelector('h1').textContent)
        .then((result) => {
          expect(result).contains('Front');
          done();
        })
        .catch(done);
    });
  });

  describe('/ (About Page)', () => {
    it('should load about page without error', (done) => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('https://davidlatuno-portfolio.herokuapp.com/')
        .click('.navbar-nav li:nth-child(2) a')
        .wait(3500)
        .end()
        .evaluate(() => document.querySelector('h1').textContent)
        .then((result) => {
          expect(result).contains('Beer');
          done();
        })
        .catch(done);
    });
  });
});
