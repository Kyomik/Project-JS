var arr = [9, 8, 3, 5, 6, 6];

console.log("Data saat pertama kali : ");

arr.forEach(function(e, i){
     console.log('Data - ' + (i + 1) + ' : ' + e);
 });

 var arr2 = arr.map(function(e){
    return e * 2; 
});

console.log("Data arr di tampung ke arr2 skaligus x 2 : " + arr2.join());
