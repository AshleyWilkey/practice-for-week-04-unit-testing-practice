const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const hi = new Word("Hi");
      expect(hi.word).to.exist;
    });

    it('should set the "word" property when a new word is created', function () {
      const bye = new Word("Bye");
      expect(bye.word).to.eql("Bye");
    });
  });

  describe("removeVowels function", function () {
    it("should return the word with all vowels removed", function () {
      const mango = new Word("Mango");
      expect(mango.removeVowels()).to.eql("Mng");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const water = new Word("Water");
      expect(water.removeConsonants()).to.eql("ae");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const dog = new Word("Dog");
      expect(dog.pigLatin()).to.eql("og-Day");
    });
  });
});
