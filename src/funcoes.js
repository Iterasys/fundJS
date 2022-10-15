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

function desenharTapete(){
    
    let tapete = "";
    const simbolo = "*";
    const largura = 50;
    const comprimento = 20;
    

    // snippet = trecho de código
    for (let linha = 1; linha <= comprimento; linha++) {
        for (let coluna = 1; coluna <= largura; coluna++) {
            tapete += simbolo;   
        }
        tapete += "<br>"
    }

    // O que acontece
    // coluna   tapete          coluna      tapete
    //   1        ""               4        "###"
    //   1        "#"              4        "####"
    //   2        "#"              5        "####"
    //   2        "##"             5        "#####"
    //   3        "##"
    //   3        "###"

    document.getElementById("menu").innerHTML = tapete;

}

function contarLetrasEPalavras(){
    const palavra = "gUARATINGUETA";
    let contadorEspacos = 0;
    let palavras = [];
    let partePalavra = "";

    resultado =  "A palavra tem " + palavra.length + " caracteres <br>";
    resultado += "A palavra toda em maiusculas: " + palavra.toUpperCase() + "<br>";
    resultado += "A palavra toda em minusculas: " + palavra.toLowerCase() + "<br>";
    resultado += "A primeira letra: " + palavra.substring(0,1) + "<br>";
    resultado += "A ultima letra: " + palavra.substring(palavra.length-1) + "<br>";
    resultado += "A palavra com a primeira maiuscula e as restantes minusculas: " 
               + palavra.substring(0,1).toUpperCase() + palavra.substring(1).toLowerCase() + "<br>";

    const frase = "Ao longo do ceu vi espelhar o mar e me perdi no seu sorriso";

    resultado += "A posicao do 1o espaco na frase: " + frase.indexOf(" ") + "<br>";
    resultado += "A primeira palavra: " + frase.substring(0,frase.indexOf(" ")) + "<br>";
    
    for (let index = 0; index < frase.length; index++) {
        const caracter = frase[index];
            if (caracter == " ") {
                palavras[contadorEspacos] = partePalavra;
                partePalavra = "";
                contadorEspacos++;               
            }
            else{
                partePalavra += caracter;
            }
        
    }

    if (partePalavra.length != 0) {
        palavras[contadorEspacos] = partePalavra;
    }


    resultado += "Existem " + contadorEspacos + " espacos na frase <br>";

    for (let index = 0; index <= contadorEspacos; index++) {
        resultado += palavras[index] + "<br>";
        
    }



    document.getElementById("menu").innerHTML = resultado;

}