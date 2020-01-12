var arr = [9, 8, 3, 5, 20, 52, 90, 6, 6];

console.log("Data saat pertama kali : " + arr.join(' - '));

arr.sort(function(a, b){
    return a - b;
});

console.log("Data setelah diurut : " + arr.join(' - '));