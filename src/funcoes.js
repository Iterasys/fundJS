// bibliotecas

// classe

// funcionalidade
function contagemProgressiva(){
    let resultado = "";
    const inicio = 1;
    const fim = 50;
    const incremento = 3;

    // monta o texto de resultado
    for (let index = inicio; index <= fim; index+=incremento) {
        // resultado = resultado + index;
        if (index < fim) {
            resultado += index + ", ";
        }
        else{
            resultado += index;
        }
    }

    // tratar a eventual virgula no final
    const tamanho = resultado.length;
    const ultimoCaracter = resultado.substring(tamanho-1,tamanho);

    // exibe o texto do resultado na página
    if (ultimoCaracter == " ") {
        // remover o último caracter
        const novoResultado = resultado.substring(0,tamanho - 2);
        document.getElementById("menu").innerHTML = novoResultado + 
       "<br>" + tamanho + "<br>" + ultimoCaracter;
    } else {
        document.getElementById("menu").innerHTML = resultado + 
       "<br>" + tamanho + "<br>" + ultimoCaracter;
    }
    
    
}

function contagemProgressivaEndsWith(){
    let resultado = "";
    const inicio = 0;
    const fim = 73;
    const incremento = 2;

    // monta o texto de resultado
    for (let index = inicio; index <= fim; index+=incremento) {
        // resultado = resultado + index;
        if (index < fim) {
            resultado += index + ", ";
        }
        else{
            resultado += index;
        }
    }
    if (resultado.endsWith(" ")) {
        document.getElementById("menu").innerHTML = resultado.substring(0,resultado.length-2);
    } else {
        document.getElementById("menu").innerHTML = resultado
    }
        
    
}

function contagemRegressiva(){
    let resultado = "";
    const inicio = 50;
    const fim = 1;

    for (let index = inicio; index >= fim; index--) {
        // resultado = resultado + index;
        if (index > fim) {
            resultado += index + ", ";
        }
        else{
            resultado += index;
        }
        
        
    }

    document.getElementById("menu").innerHTML = resultado;
    
}