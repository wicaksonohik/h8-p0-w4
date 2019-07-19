function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var result = [];

  for(var i = 0; i < arrPenumpang.length; i++){
    var obj = {
      'penumpang' : arrPenumpang[i][0],
      'naikDari' : arrPenumpang[i][1],
      'tujuan' : arrPenumpang[i][2],
      'harga' : 0
    }
    var jarak = 0
    var berangkat = 0;
    var tujuan = 0
    
    for(var j = 0; j < rute.length; j++){
      if(obj.naikDari === rute[j]){
          berangkat = j
             
      }else if(obj.tujuan === rute[j]){
          tujuan = j

      }
        jarak = Math.abs(tujuan - berangkat)
        obj.harga = jarak * 2000   
        
    }
      result.push(obj);
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]