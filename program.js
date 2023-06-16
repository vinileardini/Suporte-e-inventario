var tela = document.getElementById("grid-tela");

var telaChamado = document.getElementById("tela-chamado");

var telaInventario = document.getElementById("tela-inventario");

function mudarTela(){

    tela = telaChamado;

    if(tela=telaChamado){
        tela.innerHTML=telaInventario;
    }

    else{
        tela.innerHTML=telaChamado;
    }
    

}