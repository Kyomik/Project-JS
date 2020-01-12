var arr = ['Kyoo', 'Luci', 'Nofa'];

console.log("Array saat pertama kali : " + arr.join());

arr.splice(1, 2, 'Cute', "iku");

console.log("Setelah di modifikasi : ");
console.log(arr.join());

arr.splice(2, 0, "TOy", "Cut");
console.log(arr.join());

var arr2 = [];

console.log("Array ke2 pertama kali : " + arr2.join());

var arr2 = arr.slice(1,4);

console.log("Setelah di slice : " + arr2.join());