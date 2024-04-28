const num = [1, 2, 3, 4, 5]

for (x in num) {
    if (x == 3) break
    console.log(`${x} = ${num[x]}`)
}

for (y in num) {
    if (y == 2) continue
    console.log(`${x}: ${num[y]}`)
}
