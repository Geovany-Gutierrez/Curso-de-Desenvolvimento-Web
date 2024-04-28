// 02
function retornaTipoTriangulo(a, b, c) {
    if (a == b && a == c) {
        console.log('Equilatero')
    } else if (a == b || a == c) {
        console.log('Isosceles')
    } else {
        console.log('Escaleno')
    }
}
retornaTipoTriangulo(3, 2, 1)
/*equilatero = tres lados iguais, 
isosceles = dois lados iguais, 
escaleno = todos lados diferentes */