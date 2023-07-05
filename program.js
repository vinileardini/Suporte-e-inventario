var escolhaChamado = "Chamados";

const addButton = document.getElementById("#button-add");

const menuTrigger = document.getElementById("menu-trigger");

const abrirMenuChamado = document.getElementById("menu-add-chamado");

const abrirMenuInventario = document.getElementById("menu-add-inventario");

addButton.dataset.openClose;

console.log(addButton.dataset.openClose)

menuTrigger.addEventListener('click',() =>{

    console.log("click")

    if (state == "false"){
        state = "true";
    }
    else{
        state = "false";
    }

    addButton.dataset.aberto = state;
})

function abrirMenuAdd(){


    if(data-OpenClose == "false" )
    {
        document.getElementsByClassName("fa-minus").style.display="none"
    }
    else{
        document.getElementsByClassName("fa-plus").style.display="none"
    }

}


function adicionarInventario(){

    document.getElementById("menu-add-chamado").style.display="none";
    document.getElementById("menu-add-inventario").style.display="contents";
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
    
    document.getElementById("menu-add-chamado").style.display="contents";
    document.getElementById("menu-add-inventario").style.display="none";
}

function fecharChamado(){

}

function editarChamado(){

}

function pesquisaNome(){

}

function pesquisaData(){

    


}

function resetAdd(){

    document.getElementById("menu-add-chamado").style.display="none";
    document.getElementById("menu-add-inventario").style.display="none";
}