var arr = ['Kyoo', 'Luci', 'Nofa'];

console.log(("Isi Array pada saat pertama kali : " + arr.join()));

arr.push('Kuki', 'Cotto');

console.log("Saat di manipulasi dgn method2 array : ");

console.log((arr.join()));

arr.pop();

console.log((arr.join()));

arr.unshift('Cerry', 'Riska');

console.log((arr.join()));

arr.shift();

console.log((arr.join()));