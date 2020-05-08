const isOdd = (number) => {
  alert("test");
};
// 6,1,15

// 2000 false 3000false 4999 false 5000 true 5001 true 10000 true 60000 false     5000 15000

const inRange = (x, min, max) => {
  //   if (x >= min && x <= max) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  //   if (min <= x <= max) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return min <= x && x <= max;
};
