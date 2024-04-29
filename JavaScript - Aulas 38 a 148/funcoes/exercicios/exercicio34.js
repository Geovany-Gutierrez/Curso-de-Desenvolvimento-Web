function recebeStrings(stringUm, stringDois) {
  stringUm.toLowerCase();
  stringDois.toLowerCase();

  const letra = "a";
  if (stringUm == letra && stringDois == letra) {
    return true;
  } else {
    return false;
  }
}
console.log(recebeStrings("a", "gugududa"));
