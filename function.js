function tampilkan(n){
    if(n === 0) return;
    console.log(n);
    return tampilkan(n-1);
}

tampilkan(10);

