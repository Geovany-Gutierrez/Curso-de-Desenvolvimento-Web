function troca(v1, v2) {
    // v1 = 2 v2 = 4
    v2 = v2 + v1; // 4 = 4 + 2
    v1 = v2 - v1; // 2 = 6 - 2
    v2 = v2 - v1; 
    
    console.log('Valor 1: ' + v1 + ', Valor 2: ' + v2);
}
troca(2, 4);
troca(5, 7);
troca(10, 15);