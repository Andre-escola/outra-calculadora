
function idade(){
    let anoDeNascimento = parseInt(prompt("Em que ano você naceu?"));
    console.log(anoDeNascimento);
    let idade = 2023 - anoDeNascimento;
    if(idade >= 18){
        alert("tá ficando véio em kkkkk");
    }
    else{
        alert("o novato, vai pro youtube kids");
    }
    }

//------------------------------------------------------------------------------------------//
//calculos de nerd e função de aparecer o pop up de escrever delas lá poh kkk lol pq vc tá lendo ainda?
function notas(){
    let nota1= parseFloat(prompt("digite a nota do primeiro trimestre: "));
    let nota2= parseFloat(prompt("digite a nota do segundo trimestre: "));
    let nota3= parseFloat(prompt("digite a nota do terceiro trimestre: "));
    
    let resultado = nota1 + nota2 + nota3;
    
    console.log(resultado);
    
    //se passou ou n (bichin irresponsável)
    if(resultado >= 180){ 
        alert("aprovadação parental");
    }
    else{
        alert("desaprovação parental");
    }

}
