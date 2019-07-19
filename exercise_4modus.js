function cariModus(arr) {
  // you can only write your code here!
  var temp = 0;
  var modus = 0;

  for(var i = 0; i < arr.length; i++){
    var count = 0
    for(var j = 0; j < arr.length; j++){
      if(arr[i] === arr[j]){
        count ++
      }
      if(temp < count){
        temp = count;
        modus = arr[i]
      }
    }
  }
  if(temp === 1){
    modus = -1
  }else if(temp === arr.length){
    modus = -1
  }
  return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1