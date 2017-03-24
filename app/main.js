"use strict";

function main(argv) {
  if (argv.length <= 1) {
    return -1;
  }
  var coin = argv[0].split(',').map(v => Number(v));// array
  var sum = Number(argv[1]);
  var max = 501;
  // console.log(coin, sum);
  if (sum > 500 || sum < 1) {
    // console.log('invalid');
  }

  coin.forEach(v => {
    if (v > 100 || v < 1) {
      //// console.log('invalid');
    }
  });



  var t = new Array(sum+1);
  t[0] = 0;
  for(var i=1; i < sum+1; i++) {
    t[i] = max;
  }
  // // console.log('tlength', t.length);
  for (var i = 0; i < coin.length; i++) {

    for (var j = coin[i]; j < sum+1; j++) {
      // console.log(i, j, t[j], t[j - coin[i]] + 1);
      t[j] = Math.min(t[j], t[j - coin[i]] + 1);
    }
  }
// console.log(t);
  // console.log(t[sum]);
  if (t[sum] == max) {
    // console.log('cant solve');
    console.log(-1);
  }
  console.log(t[sum]);
}

module.exports = main;
