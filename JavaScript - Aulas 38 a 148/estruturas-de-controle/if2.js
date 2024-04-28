function teste1(num) {
  if (num > 7) console.log(num);
  console.log("Final");
}

teste1(8);
teste1(2);

function teste2(num) {
    if (num > 7); // o ponto e virgula quebra a estrutura, interrompendo ela
    
    {
        console.log(num)
    }
}

teste2(8)
teste2(6)

