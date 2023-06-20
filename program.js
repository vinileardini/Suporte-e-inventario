var tela = document.getElementById("grid-tela");

const telaChamado = document.getElementById("tela-chamado");

const telaInventario = document.getElementById("tela-inventario");

function mudarTela(){

    if(document.getElementById("tela")=document.getElementById("telaChamado")){
        document.getElementById("tela-chamado").hidden=false;
    }

    else{
        document.getElementById("tela-inventario").hidden=false;
    }
    

}