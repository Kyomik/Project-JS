var arr = [9, 8, 3, 5, 20, 52, 90, 6, 6];

var cari = prompt("pencarian data : ");

console.log(arr.filter(function(e){
    return e > cari;
}));

var pencarian = arr.find(function(x){
    return x == cari
})

console.log("Nilai yang diambil : " + pencarian);