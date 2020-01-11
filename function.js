var ang1;
var ang2;

var penambahanEx = function(ang1, ang2){
    return ang1 + ang2;
}

ang1 = parseInt(prompt("Bil 1 : "));
ang2 = parseInt(prompt("Bil 2 : "));

alert(ang1 + "+" + ang2 + " = " + penambahanEx(ang1,ang2));
alert(ang1 + "+" + ang2 + " = " + penambahanDes(ang1,ang2));

function penambahanDes(ang1, ang2){
    return ang1 + ang2;
}