function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var tampung = []
  for(var i = 0; i <= angka; i++){
    var temp = '';
    for(var j = 0; j <= angka; j++){
      if(i * j === angka){
        temp += ''+i+j
      }
    }
    if(temp !== ''){
      tampung.push(temp)
    }
  }
  tampung.sort()
  return tampung[tampung.length - 1].length

}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2