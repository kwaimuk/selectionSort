/* jshint esversion: 6 */
const chai = require('chai');
const expect = chai.expect;

const selectionSort = require('../selectionSort.js');

describe('selectionSort',() => {
  it('should be a function', () =>{
    expect(selectionSort).to.be.a('function');
  });

  it('should do a simple sort of an array of a lenth of 2',() => {
  expect(selectionSort([4,2])).to.deep.equal([2,4]);
    });

    it('should do a simple sort of an array of a lenth of 3',() => {
  expect(selectionSort([3,2,4])).to.deep.equal([2,3,4]);
    });



  it('should do a simple sort of an array of a lenth of 5',() => {
  expect(selectionSort([3,2,4,1,8,])).to.deep.equal([1,2,3,4,8]);
    });

  it('should do a simple sort of an array of a lenth of 5 with duplicate numbers',() => {
  expect(selectionSort([7,7,0,-7,8])).to.deep.equal([-7,0,7,7,8]);
    });

});