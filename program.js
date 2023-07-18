var escolhaChamado = "Chamados";

const addButton = document.getElementById("#button-add");

const menuTrigger = document.getElementById("menu-trigger");

const abrirMenuChamado = document.getElementById("menu-add-chamado");

const abrirMenuInventario = document.getElementById("menu-add-inventario");

var contagemClick = 0;


function openMenu() {

    const body_menu = document.body;
    const span_menu_symbol = document.createElement('span');
    span_menu_symbol.id = "menu-trigger";
    span_menu_symbol.className = "menu-trigger";
    const symbol_plus = document.createElement('i');
    symbol_plus.className = "fa-solid fa-plus"
    const symbol_minus = document.createElement('i');
    symbol_minus.className = "fa-solid fa-minus";


    body_menu.appendChild(span_menu_symbol);
    span_menu_symbol.appendChild(symbol_plus);
    span_menu_symbol.appendChild(symbol_minus);

    if(contagemClick == 0){
        body_menu.removeChild(symbol_minus);
        contagemClick++;
    }
    else{
        body_menu.removeChild(symbol_plus);
    }

}



function adicionarInventario(){

    document.getElementById(".menu-add-chamado").style.display="none";
    document.getElementById(".menu-add-inventario").style.display="contents";
}

function novoItemInventario(){

    const body_inventario = document.body;
    const div_inventario = document.createElement('div');
    div_inventario.className = 'inventario';
    div_inventario.id = "tela-inventario";
    const ul_chamado = document.createElement('ul');
    ul_chamado.className = "list-inventario";
    const li_chamado = document.createElement('li');
    li_chamado.className = "list-inventario-li";
    const label_numeroSerie = document.createElement('label');
    label_numeroSerie.innerHTML = "Número de série:";
    label_numeroSerie.id = "number-serie-align";
    const input_inv_numeroSerie = document.createElement('input');
    input_inv_numeroSerie.className = "inputs-inv";
    input_inv_numeroSerie.type = "text";
    input_inv_numeroSerie.readOnly;
    const label_equipamento = document.createElement('labelinput');
    label_equipamento.innerHTML = "Equipamento:";
    label_equipamento.id = "label_equipamento";
    const input_inv_equipamento = document.createElement('input');
    input_inv_equipamento.className = "inputs-inv";
    input_inv_equipamento.type = "text";
    input_inv_equipamento.readOnly;
    const label_local = document.createElement('label');
    label_local.id = "label-local";
    label_local.textContent = "Local:";
    const input_local = document.createElement('input');
    input_local.id.className = "inputs-inv";
    input_local.id = "input-local";
    input_local.type = "text";
    input_local.readOnly;
    const button_edit_inv = document.createElement('button');
    button_edit_inv.textContent = "Editar";
    button_edit_inv.className = "button-edit-remove";
    button_edit_inv.type = "submit";
    const button_remove_inv = document.createElement('button');
    button_remove_inv.textContent = "Remover";
    button_remove_inv.className = "button-edit-remove";
    button_remove_inv.type = "submit";

    body_inventario.appendChild(div_inventario);
    div_inventario.appendChild(ul_chamado);
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

    var nomeChamado = document.getElementById("nomeSolicitante").value;
    var dataChamado = document.getElementById("data-abertura-chamado").value;
    var localChamado = document.getElementById("local-chamado").value;
    var descricaoChamado = document.getElementById("descricao-chamado");

    const body_chamado = document.body;
    const div_chamado = document.createElement("div");
    div_chamado.className = "grid-1-cards-chamados";
    div_chamado.id = "grid-tela";
    const div_card = document.createElement("div");
    div_card.className = "shape-card";
    div_card.id = "shape-card";
    const label_idNumber = document.createElement("label");
    label_idNumber.id = "number-id";
    label_idNumber.className = "number-id";
    const label_nomeSolicitante = document.createElement("label");
    label_nomeSolicitante.innerHTML = "Nome do solicitante:";
    const input_nome = document.createElement("label");
    input_nome.type = "text";
    input_nome.id = "size-input";
    input_nome.readOnly = true;
    input_nome.innerHTML = nomeChamado;
    let pulaLinha = document.createElement("p");
    const label_local = document.createElement("label");
    label_local.innerText = "Local:";
    const input_local = document.createElement("input");
    input_local.type = "text";
    input_local.id = "size-input";
    input_local.readOnly = true;
    input_local.innerText = localChamado;
    pulaLinha;
    const label_data = document.createElement("label");
    label_data.innerHTML = "Data:";
    const input_data = document.createElement("input");
    input_data.type = "date";
    input_data.id = "input-date-style";
    input_data.readOnly;
    input_data.innerText = dataChamado;
    pulaLinha;
    const label_descricao = document.createElement("label");
    label_descricao.innerHTML = "Descrição:";
    label_descricao.id = "label-desc";
    pulaLinha;
    const text_descricao = document.createElement("textarea")
    text_descricao.innerHTML;
    text_descricao.id = "desc-chamados";
    text_descricao.cols = 35;
    text_descricao.rows = 5;
    text_descricao.readOnly;
    text_descricao.innerHTML = "";
    pulaLinha;
    const button_edit = document.createElement("button");
    button_edit.innerHTML = "Editar";
    button_edit.type ="submit";
    button_edit.className = "button-edit-remove";
    const button_remove = document.createElement("button")
    button_remove.innerHTML= "Remover";
    button_remove.type = "submit";
    button_remove.className = "button-edit-remove";

    console.log("ok")

    body_chamado.appendChild(div_chamado);
    div_chamado.appendChild(div_card);
    div_card.appendChild(label_nomeSolicitante);
    div_card.appendChild(pulaLinha);
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

    id_chamado_editado = document.getElementById("id-number");
    
    

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