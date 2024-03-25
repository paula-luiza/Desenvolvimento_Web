/*olhar no terminal do mozilla
TA DANDO TD ROSA*/
/*var: possui o escopo de função
"se criarmos uma variável deste tipo dentro de uma função, sua referência poderá ser identificada e modificada em qualquer parte desta função, mesmo que criemos outros escopos dentro dela, como um bloco if(), switch() ou for()"*/
function testeVar(){
    var exemplo = 'azul';
    var x = 3;
    if (x > 1){
        exemplo = 'rosa';
        x++;
        console.log('VAR dentro do if: ' + exemplo,x);
    }
    console.log('VAR fora do if: ' + exemplo,x);
}


/*let: */
function testeLet(){
    let exemplo2 = 'azul';
    let y = 3;
    if (y > 1){
        exemplo2 = 'rosa';
        y++;
        console.log('LET dentro do if: ' + exemplo2,y);
    }
    console.log('LET fora do if: ' + exemplo2,y);
}

/*const: define uma constante
Não significa necessariamente que seu valor não pode ser mudado. Significa que não podemos sobrescrever o seu identificador */

function testeConst(){
    const nome = 'Paula';
    console.log(nome);
}

testeConst();
testeLet();
testeVar();