function checkAB(num) {
  // you can only write your code here!
 
  var A = [];
  var B = [];

  for(var i = 0; i < num.length; i++){
    if(num[i] === 'a'){
      A.push(i)
    }else if(num[i] === 'b'){
      B.push(i)
    }
  }
  var selisih = []
  for(var i = 0; i < A.length; i++){
    for(var j = 0; j < B.length; j++){
      selisih.push(Math.abs(A[i] - B[j]))
    }
  }
  for(var i = 0; i < selisih.length; i++){
    if(selisih[i] === 4){
      return true
    }
  }
  return false
  
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false