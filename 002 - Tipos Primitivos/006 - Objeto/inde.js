console.log({
    tenis: [
        {
            preco: 50,
            disponivel: true,
            estoque: 5,
            cadaco: {
                cor: 'branco',
                tamanho: 42,
            },
            palmilha: {
                cor: 'azul',
                tamanho: 42,
            }
        },
        {
            preco: 100,
            disponivel: true,
            estoque: 10,
            cadaco: {
                cor: 'branco',
                tamanho: 42,
            },
            palmilha: {
                cor: 'azul',
                tamanho: 42,
            }
        },
    ],
});
console.log("tenis: ", typeof "tenis");//string
console.log("preco: ", typeof 50);//number
console.log("disponivel: ", typeof true);//boolean
console.log("estoque: ", typeof 5);//number
console.log("cadarco: ", typeof {cor: 'branco', tamanho: 42});//object
console.log("palmilha: ", typeof {cor: 'azul', tamanho: 42});//object
console.log("celular: ", typeof {marca: 'samsung'});//object
console.log("marca: ", typeof 'samsung');//string
console.log("cor: ", typeof 'branco');//string
console.log("tamanho: ", typeof 42);//number

console.log([
    {
        tenis:{
            preco: 50,
            disponivel: true,
            estoque: 5,
            cadarco: {
                cor: 'branco',
                tamanho: 42,
            },
            palmilha: {
                cor: 'azul',
                tamanho: 42,
            }
        }, 
    },
    {
        celular:{
            marca: 'samsung',
        },
    },
]);