var length = prompt("Berapa Data yg ingin dimasukkan hari ini?");

var arr = [];

for(var i = 0; i < length; i++){
    arr[i] = prompt("Data " + (i+1) + " : ");
}
alert("Isi dari array : " + arr);
alert("besar array nya : " + arr.length());

