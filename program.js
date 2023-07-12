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

function novoItemInventario(){


    const div_chamado = document.createElement("div");
    div_chamado.className = "inventario";
    div_chamado.id = "tela-inventario";
    const ul_chamado = document.createElement("ul");
    ul_chamado.className = "list-inventario";
    const li_chamado = document.createElement("li");
    li_chamado.className = "list-inventario-li";
    const label_numeroSerie = document.createElement("label");
    label_numeroSerie.innerHTML = "Número de série:";
    label_numeroSerie.id = "number-serie-align";
    const input_inv_numeroSerie = document.createElement("input");
    input_inv_numeroSerie.className = "inputs-inv";
    input_inv_numeroSerie.type = "text";
    input_inv_numeroSerie.readOnly;
    const label_equipamento = document.createElement("label");
    label_equipamento.innerHTML = "Equipamento:";
    label_equipamento.id = "label_equipamento";
    const input_inv_equipamento = document.createElement("inv");
    input_inv_equipamento.className = "inputs-inv";
    input_inv_equipamento.type = "text";
    input_inv_equipamento.readOnly;
    const label_local = document.createElement("label");
    label_local.id = "label-local";
    label_local.innerHTML = "Local:";
    const input_local = document.createElement("input");
    input_local.id.className = "inputs-inv";
    input_local.id = "input-local";
    input_local.type = "text";
    input_local.readOnly;
    const button_edit_inv = document.createElement("button");
    button_edit_inv.innerHTML = "Editar";
    button_edit_inv.className = "button-edit-remove";
    button_edit_inv.type = "submit";
    const button_remove_inv = document.createElement("button");
    button_remove_inv.innerHTML = "Remover";
    button_remove_inv.className = "button-edit-remove";
    button_remove_inv.type = "submit";


    div_chamado.appendChild(ul_chamado);
    ul_chamado.appendChild(li_chamado);
    li_chamado.appendChild(label_numeroSerie);
    li_chamado.appendChild(input_inv_numeroSerie);
    li_chamado.appendChild(label_equipamento);
    li_chamado.appendChild(input_inv_equipamento);
    li_chamado.appendChild(label_local);
    li_chamado.appendChild(input_local);
    li_chamado.appendChild(button_edit_inv);
    li_chamado.appendChild(button_remove_inv);


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

function novoChamado(){

    const div_chamado = document.createElement("div");
    div_chamado.className = "grid-1-cards-chamados";
    div_chamado.id = "grid-tela";
    const div_card = document.createElement("div");
    div_card.className = "shape-card";
    div_card.id = "shape-card";
    const label_nomeSolicitante = document.createElement("label");
    label_nomeSolicitante.innerHTML = "Nome do solicitante:";
    const input_nome = document.createElement("input");
    input_nome.type = "text";
    input_nome.id = "size-input";
    input_nome.readOnly;
    const pulaLinha = document.createElement("p");
    const label_local = document.createElement("label");
    label_local.innerHTML = "Local:";
    const input_local = document.createElement("input");
    input_local.type = "text";
    input_local.id = "size-input";
    input_local.readOnly;
    pulaLinha;
    const label_data = document.createElement("label");
    label_data.innerHTML = "Data:";
    const input_data = document.createElement("input");
    input_data.type = "date";
    input_data.id = "input-date-style";
    input_data.readOnly;
    pulaLinha;
    const label_descricao = document.createElement("label");
    label_descricao.innerHTML = "Descrição:";
    label_descricao.id = "label-desc";
    pulaLinha;
    const text_descricao = document.createElement("textarea")
    text_descricao.id = "desc-chamados";
    text_descricao.cols = 35;
    text_descricao.rows = 5;
    text_descricao.readOnly;
    pulaLinha;
    const button_edit = document.createElement("button");
    button_edit.innerHTML = "Editar";
    button_edit.type ="submit";
    button_edit.className = "button-edit-remove";
    const button_remove = document.createElement("button");
    button_remove.innerHTML = "Remover";
    button_remove.type = "submit";
    button_remove.className = "button-edit-remove";

    console.log("ok")

    div_chamado.appendChild(div_card);
    div_card.appendChild(label_nomeSolicitante);
    div_card.appendChild(input_nome);
    div_card.appendChild(label_local);
    div_card.appendChild(input_local);
    div_card.appendChild(label_data);
    div_card.appendChild(input_data);
    div_card.appendChild(label_descricao);
    div_card.appendChild(text_descricao);
    div_card.appendChild(button_edit);
    div_card.appendChild(button_remove);




}

function fecharChamado(){

}

function editarChamado(){

}

function pesquisaNome(){

    searchName = document.getElementById("input-area-pesquisa");

    

}

function pesquisaData(){

    searchDate = document.getElementById("input-date-search");


}

function resetAdd(){

    document.getElementById("menu-add-chamado").style.display="none";
    document.getElementById("menu-add-inventario").style.display="none";
}