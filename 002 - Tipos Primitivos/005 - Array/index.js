console.log(typeof Array, typeof new Array, typeof []);//Aqui ele retorna function object object
console.log("Ginaldo", "Ribeiro", "da", "Silva");//Aqui ele retorna Ginaldo Ribeiro da Silva
console.log("Ginaldo Ribeiro da Silva".split(" "));//Aqui ele retorna [ 'Ginaldo', 'Ribeiro', 'da', 'Silva' ]
console.log(["Ginaldo", "Ribeiro"].length);//Aqui ele retorna 2
["Ginaldo", "Ribeiro"].forEach((nome, indice) => {
    console.log(indice, nome);
});//Aqui ele retorna 0 Ginaldo e 1 Ribeiro