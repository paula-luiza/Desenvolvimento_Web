/*var: possui o escopo de função
"se criarmos uma variável deste tipo dentro de uma função, sua referência poderá ser identificada e modificada em qualquer parte desta função, mesmo que criemos outros escopos dentro dela, como um bloco if(), switch() ou for()"*/

function testeVar(x){
    var exemploVar = 'azul';
    if (x > 1){
        return exemploVar;
    } else {
        var exemploVar = 'rosa'
        return exemploVar;
    }
}


/*let: */
function testeLet(y){
    let exemploLet;
    if (y > 1){
        exemploLet = 'azul';
    } else {
        exemploLet = 'rosa';
    }
    return exemploLet;
}

/*const: define uma constante
Não significa necessariamente que seu valor não pode ser mudado. Significa que não podemos sobrescrever o seu identificador */

function testeConst(z){
    const exemploConst = 'Paula';
    if (z > 1){
       return exemploConst;
    } else {
       return exemploConst;
    }
}

const meuArray = [];

meuArray[0] = 'primeiro';
meuArray[2] = 'elemento indice 2';

console.log(meuArray);
console.log(meuArray[2]);
console.log('tamanho do array', meuArray.length);

/*FUNÇÕES*/

meuArray.push('novo elemento');
console.log(meuArray);
console.log('tamanho do array', meuArray.length);

console.log(meuArray.pop());
console.log(meuArray);
console.log('tamanho do array dps do pop', meuArray.length);

console.log(meuArray.shift());
console.log(meuArray);
console.log('tamanho do array', meuArray.length);

meuArray.unshift('no inicio');
console.log(meuArray);
console.log('tamanho do array', meuArray.length);