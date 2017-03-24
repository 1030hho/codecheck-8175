"use strict";

function main(argv) {
  if (argv.length <= 1) {
    return -1;
  }
  var coin = argv[0].split(',').map(v => Number(v));// array
  var sum = Number(argv[1]);
  var max = 501;
  if (sum > 500 || sum < 1) {
    console.log(-1);
    return -1;
  }

  coin.forEach(v => {
    if (v > 100 || v < 1) {
      console.log(-1);
      return -1;
    }
  });



  var t = new Array(sum+1);
  t[0] = 0;
  for(var i=1; i < sum+1; i++) {
    t[i] = max;
  }
  for (var i = 0; i < coin.length; i++) {

    for (var j = coin[i]; j < sum+1; j++) {
      t[j] = Math.min(t[j], t[j - coin[i]] + 1);
    }
  }
  if (t[sum] == max) {
    console.log(-1);
    return -1;
  }
  console.log(t[sum]);
  return t[sum];
}

module.exports = main;
