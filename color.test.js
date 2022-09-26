const colors = require('./color');

describe('colors', () => {
  it('checks how many green there are are returns numeric count', () =>{
    expect(colors("Green, green")).toBe("Green:2");
  });
  xit('counts the number of instances of Green in the string', () =>{
    expect(color("Green, Green, Red, Amber, Red")).toInclude("Green:2");
  });
});