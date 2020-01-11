var kubus1 = 8;
var kubus2 = 3;

function menghitungKubus(kubus){
    var hasil =  kubus * kubus * kubus;
    return hasil;
}

function menghitung2Kubus(kubus1, kubus2){
    var hasil = kubus1 + kubus2;
    return hasil;
}

var hasil = menghitung2Kubus(menghitungKubus(kubus1), menghitungKubus(kubus2));

alert(hasil);
