var escolhaChamado = "Chamados";

const addButton = document.getElementById("#button-add");

const menuTrigger = document.getElementById("menu-trigger");

const abrirMenuChamado = document.getElementById("menu-add-chamado");

const abrirMenuInventario = document.getElementById("menu-add-inventario")

var contagemClick = 0;

var Array_chamados = Array();

var data = new Date();

function changeSymbol() {   

    contagemClick++;

    const elementoChecado = document.querySelector("menu-opened");
    const checkExists = document.body.contains(elementoChecado);

    if((contagemClick%2)==0){
        document.getElementById("symbol-plus").style.display="contents";
        document.getElementById("symbol-minus").style.display="none";

        document.getElementById("menu-opened").remove();
        document.getElementById("liAbrirChamado").remove();
        document.getElementById("liAddInventario").remove();
    }
    else{
        document.getElementById("symbol-minus").style.display="contents";
        document.getElementById("symbol-plus").style.display="none";

        const body_menu_open = document.body;
        const menu_add_open = document.createElement('ul');
        menu_add_open.id = "menu-opened";
        menu_add_open.className = "menu-opened";
        const li_menu_open_chamado = document.createElement('li');
        li_menu_open_chamado.id = "liAbrirChamado";
        li_menu_open_chamado.onmouseover = function(){opacidadeSelecaoChamado()};
        li_menu_open_chamado.onmouseout = function(){opacidadePadrao()};
        li_menu_open_chamado.className = "li-menu";
        li_menu_open_chamado.onclick = function(){adicionarChamado()};
        li_menu_open_chamado.innerText = "Abrir Chamado";
        const li_menu_open_inventario = document.createElement('li');
        li_menu_open_inventario.id = "liAddInventario";
        li_menu_open_inventario.onmouseover = function(){opacidadeSelecaoInventario( )};
        li_menu_open_inventario.onmouseout = function(){opacidadePadrao()};
        li_menu_open_inventario.className = "li-menu";
        li_menu_open_inventario.onclick = function(){adicionarInventario()};
        li_menu_open_inventario.innerText = "Adicionar item ao inventário";

        body_menu_open.appendChild(menu_add_open);
        menu_add_open.appendChild(li_menu_open_chamado);
        menu_add_open.appendChild(li_menu_open_inventario);
        }


}


function adicionarInventario(){

    const body_add_inventario = document.body;
    const ul_menu_inventario = document.createElement('ul');
    ul_menu_inventario.id = "menu-add-inventario";
    ul_menu_inventario.className = "menu-add-inventario";
    const li_menu_item = document.createElement('li');
    li_menu_item.id = "item";
    li_menu_item.innerText = "Item:";
    const input_item = document.createElement('input');
    input_item.type = "text";
    const li_menu_inv_data = document.createElement('li');
    li_menu_inv_data.id = "data-abertura";
    li_menu_inv_data.innerText = "Data:"
    const input_menu_inv_data = document.createElement('input');
    input_menu_inv_data.type = "date";
    const li_menu_inv_local = document.createElement('li');
    li_menu_inv_local.id = "local-item";
    li_menu_inv_local.innerText = "Local:"
    const input_menu_inv_local = document.createElement('input');
    input_menu_inv_local.type = "text";
    const li_menu_inv_numeracao = document.createElement('li');
    li_menu_inv_numeracao.id = "numeracao-item";
    li_menu_inv_numeracao.innerText = "Numeração:";
    const input_menu_inv_numeracao = document.createElement('input');
    input_menu_inv_numeracao.type = "text";
    const pulaLinha = document.createElement('p');
    const button_confirm = document.createElement('button');
    button_confirm.className = "button-confirm";
    button_confirm.onclick = function(){novoItemInventario()};
    const button_confirm_symbol_check = document.createElement('i');
    button_confirm_symbol_check.className = "fa-solid fa-check";
    const button_cancel = document.createElement('button');
    button_cancel.className = "button-close";
    const button_cancel_symbol_x = document.createElement('i');
    button_cancel_symbol_x.className = "fa-solid fa-xmark";


    body_add_inventario.appendChild(ul_menu_inventario);
    ul_menu_inventario.appendChild(li_menu_item)
    li_menu_item.appendChild(input_item);
    ul_menu_inventario.appendChild(li_menu_inv_data);
    li_menu_inv_data.appendChild(input_menu_inv_data);
    ul_menu_inventario.appendChild(li_menu_inv_local);
    li_menu_inv_local.appendChild(input_menu_inv_local);
    ul_menu_inventario.appendChild(li_menu_inv_numeracao);
    li_menu_inv_numeracao.appendChild(input_menu_inv_numeracao);
    ul_menu_inventario.appendChild(pulaLinha);
    ul_menu_inventario.appendChild(button_confirm);
    button_confirm.appendChild(button_confirm_symbol_check);
    ul_menu_inventario.appendChild(button_cancel);
    button_cancel.appendChild(button_cancel_symbol_x);
    }



function novoItemInventario(){

    const body_inventario = document.body;
    const div_inventario = document.createElement('div');
    div_inventario.className = 'inventario';
    div_inventario.id = "tela-inventario";
    const ul_inventario = document.createElement('ul');
    ul_inventario.className = "list-inventario";
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
    div_inventario.appendChild(ul_inventario);
    ul_inventario.appendChild(li_chamado);
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

    const body_menu_chamado = document.body;
    const ul_menu_chamado = document.createElement('ul');
    ul_menu_chamado.id = "menu-add-chamado";
    ul_menu_chamado.className = "menu-add-chamado";
    const li_menu_chamado_nome = document.createElement('li');
    li_menu_chamado_nome.id = "nomeSolicitante";
    li_menu_chamado_nome.innerText = "Nome:";
    const input_nome_menu_chamado = document.createElement('input');
    input_nome_menu_chamado.type = "text";
    input_nome_menu_chamado.id = "input-nome-menu-chamado";
    const li_menu_chamado_local = document.createElement('li');
    li_menu_chamado_local.id = "local-chamado";
    li_menu_chamado_local.innerText = "Local:";
    const input_local_menu_chamado = document.createElement('input');
    input_local_menu_chamado.type = "text";
    input_local_menu_chamado.id = "input-local-menu-chamado";
    const li_menu_chamado_descricao = document.createElement('li')
    li_menu_chamado_descricao.id = "descricao-chamado";
    li_menu_chamado_descricao.innerText = "Descrição:";
    const label_descricao_menu_chamado = document.createElement('label');
    const textarea_descricao_menu_chamado = document.createElement('textarea');
    textarea_descricao_menu_chamado.cols = "";
    textarea_descricao_menu_chamado.rows = "";
    textarea_descricao_menu_chamado.id = "text-area-descricao-menu-chamado";
    const pulaLinha = document.createElement('p');
    const button_confirm = document.createElement('button');
    button_confirm.className = "button-confirm";
    button_confirm.onclick = function(){novoChamado()};
    const button_confirm_symbol_check = document.createElement('i');
    button_confirm_symbol_check.className = "fa-solid fa-check";
    const button_cancel = document.createElement('button');
    button_cancel.className = "button-close";
    const button_cancel_symbol_x = document.createElement('i');
    button_cancel_symbol_x.className = "fa-solid fa-xmark";

    body_menu_chamado.appendChild(ul_menu_chamado);
    ul_menu_chamado.appendChild(li_menu_chamado_nome);
    li_menu_chamado_nome.appendChild(input_nome_menu_chamado);
    ul_menu_chamado.appendChild(li_menu_chamado_local);
    li_menu_chamado_local.appendChild(input_local_menu_chamado);
    ul_menu_chamado.appendChild(li_menu_chamado_descricao);
    li_menu_chamado_descricao.appendChild(label_descricao_menu_chamado);
    label_descricao_menu_chamado.appendChild(textarea_descricao_menu_chamado);
    ul_menu_chamado.appendChild(pulaLinha);
    ul_menu_chamado.appendChild(button_confirm);
    button_confirm.appendChild(button_confirm_symbol_check);
    ul_menu_chamado.appendChild(button_cancel);
    button_cancel.appendChild(button_cancel_symbol_x);
    }

    
function novoChamado(){

    var nomeChamado = document.getElementById("input-nome-menu-chamado");
    var dia_chamado = String(data.getDate()).padStart(2,'0');
    var mes_chamado = String(data.getMonth()+1).padStart(2,'0');
    var ano_chamado = String(data.getFullYear());
    var dataChamado = dia_chamado+'/'+mes_chamado+'/'+ano_chamado
    var localChamado = document.getElementById("input-local-menu-chamado");
    var descricaoChamado = document.getElementById("text-area-descricao-menu-chamado");

    const body_chamado = document.body;
    const div_chamado = document.getElementById("grid-tela")
    const div_card = document.createElement("div");
    div_card.className = "shape-card";
    div_card.id = "shape-card";
    const label_idNumber = document.createElement("label");
    label_idNumber.id = "number-id";
    label_idNumber.className = "id-number";
    label_idNumber.innerText = "#"+numeroId;
    let pulaLinha = document.createElement("p");
    const label_nomeSolicitante = document.createElement("label");
    label_nomeSolicitante.innerHTML = "Nome do solicitante:";
    const input_nome = document.createElement("label");
    input_nome.type = "text";
    input_nome.id = "input_label_nome";
    input_nome.className = "input-label";
    input_nome.readOnly = true;
    input_nome.innerText = nomeChamado.value;
    let pulaLinha_1 = document.createElement("p");
    const label_local = document.createElement("label");
    label_local.innerText = "Local:";
    label_local.id = "label-local";
    const input_local = document.createElement("label");
    input_local.type = "text";
    input_local.id = "input-label-local";
    input_local.className = "input-label";
    input_local.readOnly = true;
    input_local.innerText = localChamado.value;
    let pulaLinha_2 = document.createElement("p");
    const label_data = document.createElement("label");
    label_data.innerHTML = "Data:";
    const input_data = document.createElement("label");
    input_data.type = "date";
    input_data.id = "input-date-style";
    input_data.className = "input-label";
    input_data.readOnly = true;
    input_data.innerText = dataChamado
    let pulaLinha_3 = document.createElement("p");
    const label_descricao = document.createElement("label");
    label_descricao.innerHTML = "Descrição:";
    label_descricao.id = "label-desc";
    let pulaLinha_4 = document.createElement("p");
    const text_descricao = document.createElement("textarea") 
    text_descricao.id = "desc-chamados";
    text_descricao.cols = 35;
    text_descricao.rows = 5;
    text_descricao.readOnly;
    text_descricao.innerText = descricaoChamado.value;
    let pulaLinha_5 = document.createElement("p");
    const button_edit = document.createElement("button");
    button_edit.innerHTML = "Editar";
    button_edit.type ="submit";
    button_edit.className = "button-edit-remove";
    const button_remove = document.createElement("button")
    button_remove.innerHTML= "Remover";
    button_remove.type = "submit";
    button_remove.className = "button-edit-remove";
    button_remove.onclick = function(){fecharChamado()};


    body_chamado.appendChild(div_chamado);
    div_chamado.appendChild(div_card);
    div_card.appendChild(label_idNumber);
    div_card.appendChild(pulaLinha);
    div_card.appendChild(label_nomeSolicitante);
    div_card.appendChild(input_nome);
    div_card.appendChild(pulaLinha_1);
    div_card.appendChild(label_local);
    div_card.appendChild(input_local);
    div_card.appendChild(pulaLinha_2)
    div_card.appendChild(label_data);
    div_card.appendChild(input_data);
    div_card.appendChild(pulaLinha_3); 
    div_card.appendChild(label_descricao);
    div_card.appendChild(pulaLinha_4);
    div_card.appendChild(text_descricao);
    div_card.appendChild(pulaLinha_5);
    div_card.appendChild(button_edit);
    div_card.appendChild(button_remove);

    var numeroUltimoId = document.getElementById("number-id");
    var numeroId = numeroUltimoId.innerText+"1";  

}

function fecharChamado(){

    console.log("click");

    const body_chamado = document.body;
    const div_chamado = document.getElementById("grid-tela");
    const div_card = document.getElementById("shape-card");

    div_chamado.remove(div_card);
    div_card.remove(label_nomeSolicitante);
    div_card.remove(input_nome);
    div_card.remove(pulaLinha_1);
    div_card.remove(label_local);
    div_card.remove(input_local);
    div_card.remove(pulaLinha_2)
    div_card.remove(label_data);
    div_card.remove(input_data);
    div_card.remove(pulaLinha_3); 
    div_card.remove(label_descricao);
    div_card.remove(pulaLinha_4);
    div_card.remove(text_descricao);
    div_card.remove(pulaLinha_5);
    div_card.remove(button_edit);
    div_card.remove(button_remove);

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

function opacidadeSelecaoChamado(){
    document.getElementById("liAddInventario").style.opacity=0.5;
}

function opacidadeSelecaoInventario(){
    document.getElementById("liAbrirChamado").style.opacity=0.5;
}

function opacidadePadrao(){
    document.getElementById("liAbrirChamado").style.opacity=1;
    document.getElementById("liAddInventario").style.opacity=1;
}

