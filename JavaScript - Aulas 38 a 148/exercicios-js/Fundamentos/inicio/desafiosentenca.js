function imparpar() {
    for(let i = 0; i < 10; i=i+1) {
        if(i % 2 == 0) {
            continue;
        }
        console.log(i);
        for(let j = 0; j <= 10; j=j+2) {
            console.log(j);
        }
    }
}
imparpar();