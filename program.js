var escolhaChamado = "Chamados";

const addButton = document.getElementById("button-add");

const buttonOpenClose = document.getElementById("menu-open-close");

let state = addButton.dataset.aberto;

buttonOpenClose.addEventListener('click',() => {
    if (state == "false"){
        state = "true";
    }
    else{
        state = "false";
    }

    addButton.dataset.aberto = state;
})



function adicionarInventario(){

}

function removerInventario(){

}

function editarInventario(){

}

function selectFunction(){

    if(document.getElementById("select-inv-chamado").value == escolhaChamado)
    {
        document.getElementById("grid-tela").style.display="contents";
        document.getElementById("tela-inventario").style.display = "none";
    }
    else{

        document.getElementById("tela-inventario").style.display="contents";
        document.getElementById("grid-tela").style.display ="none";
        
    }


}

function adicionarChamado(){

}

function fecharChamado(){

}

function editarChamado(){

}

function pesquisaNome(){

}

function pesquisaData(){

    


}