const colors = (str) => {
  
  colorsArr = str.split(",");
  // colorArr.trim().toLowerCase();
   greenCount = 0;

  colorsArr.forEach(function (color) {
    if(color==="green" || color ==="Green"){
      greenCount += 1;
    }
    
  return `Green:${greenCount}`
});
};

module.exports = colors;

colors("Green, green");