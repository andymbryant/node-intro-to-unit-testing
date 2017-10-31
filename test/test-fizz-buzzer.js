const should = require('chai').should();

const fizzBuzz = require('../fizzBuzzer.js');

describe('fizzBuzz', function() {
  it('should test if fizzBuzz works', function() {
    const goodCases = [
    {a: 15, expected: "fizz-buzz"},
    {a: 5, expected: "buzz"},
    {a: 3, expected: "fizz"}
  ];

  goodCases.forEach(function(input) {
    const answer = fizzBuzz(input.a);
    answer.should.equal(input.expected);
  });
})

  it('should raise error if args not numbers', function() {
    const badInputs = [
      ['a'],
      ['1'],
      ['/'],
      [false]
    ];
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzz(input[0])
      }).should.throw(Error);
    });
  });
})
