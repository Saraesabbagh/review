const color = require('./color');

describe('color', () => {
  it('checks how many instances there are of each color and returns the numeric value for each', () =>{
    expect(color("Green, Green, Red, Amber, Red")).toEqual("Green:2, Amber:1, Red:2");
  });
});