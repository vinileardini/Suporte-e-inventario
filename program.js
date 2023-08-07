var escolhaChamado = "Chamados";

const addButton = document.getElementById("#button-add");

const menuTrigger = document.getElementById("menu-trigger");

const abrirMenuChamado = document.getElementById("menu-add-chamado");

const abrirMenuInventario = document.getElementById("menu-add-inventario")

var contagemClick = 0;

var numeroUltimoId = 0;

var Array_chamados = [];

var Array_Inv = [];

const chamadoTeste = new Chamados;

chamadoTeste.nome_do_chamado = "vini";
chamadoTeste.local_do_chamado = "prefeitura";
chamadoTeste.data_do_chamado = "19/05/2003";
chamadoTeste.descricao_do_chamado = "manutenção pc";

Array_chamados.push(chamadoTeste);

if (Array_chamados.length >= 1){


    for(let i = 0; i <= Array_chamados.length; i++){

        let checkExistsDivChamado = document.getElementById("grid-tela");

        let body_chamado = document.getElementById("body");

        let checkExistsTelaChamado = document.contains(checkExistsDivChamado);

        console.log(checkExistsTelaChamado);

        if(body_chamado.contains(checkExistsDivChamado) == true){

            Array_chamados[i];
            
            const div_chamado = document.getElementById("grid-tela");
            const div_card = document.createElement("div");
            div_card.className = "shape-card";
            div_card.id = "shape-card";
            const label_idNumber = document.createElement("label");
            label_idNumber.id = "number-id";
            label_idNumber.className = "id-number";
            label_idNumber.innerText = "";
            let pulaLinha = document.createElement("p");
            const label_nomeSolicitante = document.createElement("label");
            label_nomeSolicitante.innerHTML = "Nome do solicitante:";
            const input_nome = document.createElement("input");
            input_nome.type = "text";
            input_nome.id = "input-label-nome";
            input_nome.className = "input-label";
            input_nome.readOnly = true;
            input_nome.value = Array_chamados[i].nome_do_chamado;
            let pulaLinha_1 = document.createElement("p");
            const label_local = document.createElement("label");
            label_local.innerText = "Local:";
            label_local.id = "label-local";
            const input_local = document.createElement("input");
            input_local.type = "text";
            input_local.id = "input-label-local";
            input_local.className = "input-label";
            input_local.readOnly = true;
            input_local.value = Array_chamados[i].local_do_chamado;
            let pulaLinha_2 = document.createElement("p");
            const label_data = document.createElement("label");
            label_data.innerHTML = "Data:";
            const input_data = document.createElement("label");
            input_data.type = "date";
            input_data.id = "input-date-style";
            input_data.className = "input-label";
            input_data.readOnly = true;
            input_data.innerText = Array_chamados[i].data_do_chamado;
            let pulaLinha_3 = document.createElement("p");
            const label_descricao = document.createElement("label");
            label_descricao.innerHTML = "Descrição:";
            label_descricao.id = "label-desc";
            let pulaLinha_4 = document.createElement("p");
            const text_descricao = document.createElement("textarea") 
            text_descricao.id = "desc-chamados";
            text_descricao.cols = 35;
            text_descricao.rows = 5;
            text_descricao.readOnly = true;
            text_descricao.innerText = Array_chamados[i].descricao_do_chamado;
            let pulaLinha_5 = document.createElement("p");
            const div_botoes = document.createElement("div");
            div_botoes.className = "div-botoes-chamado";
            div_botoes.id = "div-botoes-chamados"
            const button_edit = document.createElement("button");
            button_edit.innerHTML = "Editar";
            button_edit.type ="submit";
            button_edit.className = "button-edit-remove";
            button_edit.id = "button-edit";
            button_edit.onclick = function(){editarChamado()};
            const button_remove = document.createElement("button");
            button_remove.innerHTML= "Remover";
            button_remove.type = "submit";
            button_remove.className = "button-edit-remove";
            button_remove.id = "button-remove";
            button_remove.onclick = function(){fecharChamado()}


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
            div_card.appendChild(div_botoes);
            div_botoes.appendChild(button_edit);
            div_botoes.appendChild(button_remove);

        }

        else{
            const div_chamado = document.createElement("grid-tela");
            div_chamado.id = "grid-tela";
            div_chamado.className = "grid-1-cards-chamados";
            const div_card = document.createElement("div");
            div_card.className = "shape-card";
            div_card.id = "shape-card";
            const label_idNumber = document.createElement("label");
            label_idNumber.id = "number-id";
            label_idNumber.className = "id-number";
            label_idNumber.innerText = "#";
            let pulaLinha = document.createElement("p");
            const label_nomeSolicitante = document.createElement("label");
            label_nomeSolicitante.innerHTML = "Nome do solicitante:";
            const input_nome = document.createElement("input");
            input_nome.type = "text";
            input_nome.id = "input-label-nome";
            input_nome.className = "input-label";
            input_nome.readOnly = true;
            input_nome.value = chamadoTeste.nome_do_chamado;
            let pulaLinha_1 = document.createElement("p");
            const label_local = document.createElement("label");
            label_local.innerText = "Local:";
            label_local.id = "label-local";
            const input_local = document.createElement("input");
            input_local.type = "text";
            input_local.id = "input-label-local";
            input_local.className = "input-label";
            input_local.readOnly = true;
            input_local.value = chamadoTeste.local_do_chamado;
            let pulaLinha_2 = document.createElement("p");
            const label_data = document.createElement("label");
            label_data.innerHTML = "Data:";
            const input_data = document.createElement("label");
            input_data.type = "date";
            input_data.id = "input-date-style";
            input_data.className = "input-label";
            input_data.readOnly = true;
            input_data.innerText = chamadoTeste.data_do_chamado;
            let pulaLinha_3 = document.createElement("p");
            const label_descricao = document.createElement("label");
            label_descricao.innerHTML = "Descrição:";
            label_descricao.id = "label-desc";
            let pulaLinha_4 = document.createElement("p");
            const text_descricao = document.createElement("textarea") 
            text_descricao.id = "desc-chamados";
            text_descricao.cols = 35;
            text_descricao.rows = 5;
            text_descricao.readOnly = true;
            text_descricao.innerText = chamadoTeste.descricao_do_chamado;
            let pulaLinha_5 = document.createElement("p");
            const div_botoes = document.createElement("div");
            div_botoes.className = "div-botoes-chamado";
            div_botoes.id = "div-botoes-chamados"
            const button_edit = document.createElement("button");
            button_edit.innerHTML = "Editar";
            button_edit.type ="submit";
            button_edit.className = "button-edit-remove";
            button_edit.id = "button-edit";
            button_edit.onclick = function(){editarChamado()};
            const button_remove = document.createElement("button");
            button_remove.innerHTML= "Remover";
            button_remove.type = "submit";
            button_remove.className = "button-edit-remove";
            button_remove.id = "button-remove";
            button_remove.onclick = function(){fecharChamado()}


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
            div_card.appendChild(div_botoes);
            div_botoes.appendChild(button_edit);
            div_botoes.appendChild(button_remove);

        }

        select_function_chamado.value = "Chamados";

    }

}



function Chamados (id_do_chamado, nome_do_chamado, local_do_chamado, data_do_chamado, descricao_do_chamado){
    this.id_do_chamado = id_do_chamado;
    this.nome_do_chamado = nome_do_chamado;
    this.local_do_chamado = local_do_chamado;
    this.data_do_chamado = data_do_chamado;
    this.descricao_do_chamado = data_do_chamado;
}

function Inventario (tipo_item, local_item, numeracao_item){

    this.tipo_item = tipo_item;
    this.local_item = local_item;
    this.numeracao_item = numeracao_item;

}

var data = new Date();

function changeSymbol() {   

    contagemClick++;

    const body_menu_add= document.body;

    var checkExistsMenuAddChamado = document.getElementById("menu-add-chamado");
    var checkExistsMenuAddInv = document.getElementById("menu-add-inventario");
    var checkExists = body_menu_add.contains (checkExistsMenuAddChamado || checkExistsMenuAddInv);


    if((contagemClick%2)==0){
        document.getElementById("symbol-plus").style.display="contents";
        document.getElementById("symbol-minus").style.display="none";

        document.getElementById("menu-opened").remove();
        
        if(checkExists == true){

            body_menu_add.removeChild(checkExistsMenuAddChamado || checkExistsMenuAddInv);

        }
        
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
    input_item.id = "input-item-inv";
    const li_menu_inv_local = document.createElement('li');
    li_menu_inv_local.id = "local-item";
    li_menu_inv_local.innerText = "Local:"
    const input_menu_inv_local = document.createElement('input');
    input_menu_inv_local.type = "text";
    input_menu_inv_local.id = "input-local-inv";
    const li_menu_inv_numeracao = document.createElement('li');
    li_menu_inv_numeracao.id = "numeracao-item";
    li_menu_inv_numeracao.innerText = "Numeração:";
    const input_menu_inv_numeracao = document.createElement('input');
    input_menu_inv_numeracao.type = "text";
    input_menu_inv_numeracao.id = "input-inv-numeracao";
    const pulaLinha = document.createElement('p');
    const button_confirm = document.createElement('button');
    button_confirm.className = "button-confirm";
    button_confirm.onclick = function(){novoItemInventario()};
    const button_confirm_symbol_check = document.createElement('i');
    button_confirm_symbol_check.className = "fa-solid fa-check";
    const button_cancel = document.createElement('button');
    button_cancel.className = "button-close";
    const button_cancel_symbol_x = document.createElement('i');
    button_cancel_symbol_x.type = "submit";
    button_cancel_symbol_x.className = "fa-solid fa-xmark";
    button_cancel.onclick = function(){resetAdd()};


    body_add_inventario.appendChild(ul_menu_inventario);
    ul_menu_inventario.appendChild(li_menu_item)
    li_menu_item.appendChild(input_item);
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

    var numeroSerieInv = document.getElementById("input-inv-numeracao");
    var itemInv = document.getElementById("input-item-inv");
    var localInv = document.getElementById("input-local-inv");
    var checkExistsDivInventario = document.getElementById("tela-inventario");

    const select_function_inventario = document.getElementById("select-inv-chamado");

    const body_inventario = document.body;

    if(body_inventario.contains(checkExistsDivInventario) == false){
        const div_inventario = document.createElement('div');
        div_inventario.className = 'inventario';
        div_inventario.id = "tela-inventario";
        const ul_inventario = document.createElement('ul');
        ul_inventario.className = "list-inventario";
        const li_chamado = document.createElement('li');
        li_chamado.className = "list-inventario-li";
        li_chamado.id = "list-inventario-li";
        const label_numeroSerie = document.createElement('label');
        label_numeroSerie.innerHTML = "Número de série:";
        label_numeroSerie.id = "number-serie-align";
        const input_inv_numeroSerie = document.createElement('input');
        input_inv_numeroSerie.className = "inputs-inv";
        input_inv_numeroSerie.id = "input-numeroDeSerie"
        input_inv_numeroSerie.type = "text";
        input_inv_numeroSerie.readOnly = true;
        input_inv_numeroSerie.value = numeroSerieInv.value;
        const label_equipamento = document.createElement('label');
        label_equipamento.innerHTML = "Equipamento:";
        label_equipamento.id = "label_equipamento";
        const input_inv_equipamento = document.createElement('input');
        input_inv_equipamento.className = "inputs-inv";
        input_inv_equipamento.id = "input-equipamento"
        input_inv_equipamento.type = "text";
        input_inv_equipamento.readOnly = true;
        input_inv_equipamento.value = itemInv.value ;
        const label_local = document.createElement('label');
        label_local.id = "label-local";
        label_local.textContent = "Local:";
        const input_local = document.createElement('input');
        input_local.id.className = "inputs-inv";
        input_local.id = "input-local";
        input_local.type = "text";
        input_local.readOnly = true;
        input_local.value = localInv.value;
        const button_edit_inv = document.createElement('button');
        button_edit_inv.textContent = "Editar";
        button_edit_inv.className = "button-edit-remove";
        button_edit_inv.type = "submit";
        button_edit_inv.onclick = function(){editarInventario()};
        const button_remove_inv = document.createElement('button');
        button_remove_inv.textContent = "Remover";
        button_remove_inv.id = "button-remove-inv";
        button_remove_inv.className = "button-edit-remove";
        button_remove_inv.type = "submit";
        button_remove_inv.onclick = function(){removerInventario()};
    
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
    else{
        const div_inventario = document.getElementById("tela-inventario");

        const ul_inventario = document.createElement('ul');
        ul_inventario.className = "list-inventario";
        const li_chamado = document.createElement('li');
        li_chamado.className = "list-inventario-li";
        li_chamado.id = "list-inventario-li";
        const label_numeroSerie = document.createElement('label');
        label_numeroSerie.innerHTML = "Número de série:";
        label_numeroSerie.id = "number-serie-align";
        const input_inv_numeroSerie = document.createElement('input');
        input_inv_numeroSerie.className = "inputs-inv";
        input_inv_numeroSerie.id = "input-numeroDeSerie"
        input_inv_numeroSerie.type = "text";
        input_inv_numeroSerie.readOnly = true;
        input_inv_numeroSerie.value = numeroSerieInv.value;
        const label_equipamento = document.createElement('label');
        label_equipamento.innerHTML = "Equipamento:";
        label_equipamento.id = "label_equipamento";
        const input_inv_equipamento = document.createElement('input');
        input_inv_equipamento.className = "inputs-inv";
        input_inv_equipamento.id = "input-equipamento"
        input_inv_equipamento.type = "text";
        input_inv_equipamento.readOnly = true;
        input_inv_equipamento.value = itemInv.value ;
        const label_local = document.createElement('label');
        label_local.id = "label-local";
        label_local.textContent = "Local:";
        const input_local = document.createElement('input');
        input_local.id.className = "inputs-inv";
        input_local.id = "input-local";
        input_local.type = "text";
        input_local.readOnly = true;
        input_local.value = localInv.value;
        const button_edit_inv = document.createElement('button');
        button_edit_inv.textContent = "Editar";
        button_edit_inv.className = "button-edit-remove";
        button_edit_inv.type = "submit";
        button_edit_inv.onclick = function(){editarInventario()};
        const button_remove_inv = document.createElement('button');
        button_remove_inv.textContent = "Remover";
        button_remove_inv.id = "button-remove-inv";
        button_remove_inv.className = "button-edit-remove";
        button_remove_inv.type = "submit";
        button_remove_inv.onclick = function(){removerInventario()};
        
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

    select_function_inventario.value = "Inventario";

    var novoItemInventario = new Inventario();

    novoItemInventario.tipo_item = itemInv.value;
    novoItemInventario.local_item = localInv.value;
    novoItemInventario.numeracao_item = numeroSerieInv.value;

    Array_Inv.push(novoItemInventario);

    console.log(Array_Inv);

}

function editarInventario(){

    const body_inventario_remove = document.body;

    const tela_inventario_remove = document.getElementById("list-inventario-li");

    const botao_remove_inv = document.getElementById("button-remove-inv");

    const input_numeroSerie_editado = document.getElementById("input-numeroDeSerie");
    const input_equipamento_editado = document.getElementById("input-equipamento");
    const input_item_editado = document.getElementById("input-local");

    input_numeroSerie_editado.readOnly = false;
    input_equipamento_editado.readOnly = false;
    input_item_editado.readOnly = false;

    tela_inventario_remove.removeChild(botao_remove_inv);

    const botao_salvar_inv = document.createElement("button");
    botao_salvar_inv.id = "botao-salvar-inv";
    botao_salvar_inv.className = "button-salvar";
    botao_salvar_inv.type = "submit";
    botao_salvar_inv.innerHTML = "Salvar";
    botao_salvar_inv.onclick = function(){inventarioEditado()};


    tela_inventario_remove.appendChild(botao_salvar_inv);

    

}

function inventarioEditado(){

    const input_numeroSerie_salvar = document.getElementById("input-numeroDeSerie");
    const input_equipamento_salvar = document.getElementById("input-equipamento");
    const input_item_salvar = document.getElementById("input-local");

    const button_editar_editado = document.createElement("button");
    
    input_numeroSerie_salvar.readOnly = true;
    input_equipamento_salvar.readOnly = true;
    input_item_salvar.readOnly = true;

    button_editar_editado.textContent = "Editar";
    button_editar_editado.className = "button-edit-remove";
    button_editar_editado.type = "submit";
    button_editar_editado.onclick = function(){editarInventario()};




}


function removerInventario(){

    const body_inventario_edit = document.body;

    const tela_inventario = document.getElementById("tela-inventario");

    body_inventario_edit.removeChild(tela_inventario);

    



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
    button_cancel.onclick = function(){resetAdd()};

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

    
    var checkExistsChamado = document.getElementById("shape-card");

    var checkExistsChamadoBody = document.body.contains(checkExistsChamado);

    const select_function_chamado = document.getElementById("select-inv-chamado");


    if(checkExistsChamadoBody == true){

        var numeroUltimoId = document.getElementById("number-id").innerText;

        var novoNumeroId = numeroUltimoId+1;
        
        console.log(numeroUltimoId);
    }
    else{
        console.log("não existe chamado");

        var novoNumeroId = 1;
    }
    

    var nomeChamado = document.getElementById("input-nome-menu-chamado");
    var dia_chamado = String(data.getDate()).padStart(2,'0');
    var mes_chamado = String(data.getMonth()+1).padStart(2,'0');
    var ano_chamado = String(data.getFullYear());
    var dataChamado = dia_chamado+'/'+mes_chamado+'/'+ano_chamado
    var localChamado = document.getElementById("input-local-menu-chamado");
    var descricaoChamado = document.getElementById("text-area-descricao-menu-chamado");

    var checkExistsDivChamado = document.getElementById("grid-tela");

    const body_chamado = document.body;

    if(body_chamado.contains(checkExistsDivChamado) == true){
        
        const div_chamado = document.getElementById("grid-tela");
        const div_card = document.createElement("div");
        div_card.className = "shape-card";
        div_card.id = "shape-card";
        const label_idNumber = document.createElement("label");
        label_idNumber.id = "number-id";
        label_idNumber.className = "id-number";
        label_idNumber.innerText = "#"+novoNumeroId;
        let pulaLinha = document.createElement("p");
        const label_nomeSolicitante = document.createElement("label");
        label_nomeSolicitante.innerHTML = "Nome do solicitante:";
        const input_nome = document.createElement("input");
        input_nome.type = "text";
        input_nome.id = "input-label-nome";
        input_nome.className = "input-label";
        input_nome.readOnly = true;
        input_nome.value = nomeChamado.value;
        let pulaLinha_1 = document.createElement("p");
        const label_local = document.createElement("label");
        label_local.innerText = "Local:";
        label_local.id = "label-local";
        const input_local = document.createElement("input");
        input_local.type = "text";
        input_local.id = "input-label-local";
        input_local.className = "input-label";
        input_local.readOnly = true;
        input_local.value = localChamado.value;
        let pulaLinha_2 = document.createElement("p");
        const label_data = document.createElement("label");
        label_data.innerHTML = "Data:";
        const input_data = document.createElement("label");
        input_data.type = "date";
        input_data.id = "input-date-style";
        input_data.className = "input-label";
        input_data.readOnly = true;
        input_data.innerText = dataChamado;
        let pulaLinha_3 = document.createElement("p");
        const label_descricao = document.createElement("label");
        label_descricao.innerHTML = "Descrição:";
        label_descricao.id = "label-desc";
        let pulaLinha_4 = document.createElement("p");
        const text_descricao = document.createElement("textarea") 
        text_descricao.id = "desc-chamados";
        text_descricao.cols = 35;
        text_descricao.rows = 5;
        text_descricao.readOnly = true;
        text_descricao.innerText = descricaoChamado.value;
        let pulaLinha_5 = document.createElement("p");
        const div_botoes = document.createElement("div");
        div_botoes.className = "div-botoes-chamado";
        div_botoes.id = "div-botoes-chamados"
        const button_edit = document.createElement("button");
        button_edit.innerHTML = "Editar";
        button_edit.type ="submit";
        button_edit.className = "button-edit-remove";
        button_edit.id = "button-edit";
        button_edit.onclick = function(){editarChamado()};
        const button_remove = document.createElement("button");
        button_remove.innerHTML= "Remover";
        button_remove.type = "submit";
        button_remove.className = "button-edit-remove";
        button_remove.id = "button-remove";
        button_remove.onclick = function(){fecharChamado()}


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
        div_card.appendChild(div_botoes);
        div_botoes.appendChild(button_edit);
        div_botoes.appendChild(button_remove);

    }

    else{
        const div_chamado = document.createElement("grid-tela");
        div_chamado.id = "grid-tela";
        div_chamado.className = "grid-1-cards-chamados";
        const div_card = document.createElement("div");
        div_card.className = "shape-card";
        div_card.id = "shape-card";
        const label_idNumber = document.createElement("label");
        label_idNumber.id = "number-id";
        label_idNumber.className = "id-number";
        label_idNumber.innerText = "#"+novoNumeroId;
        let pulaLinha = document.createElement("p");
        const label_nomeSolicitante = document.createElement("label");
        label_nomeSolicitante.innerHTML = "Nome do solicitante:";
        const input_nome = document.createElement("input");
        input_nome.type = "text";
        input_nome.id = "input-label-nome";
        input_nome.className = "input-label";
        input_nome.readOnly = true;
        input_nome.value = nomeChamado.value;
        let pulaLinha_1 = document.createElement("p");
        const label_local = document.createElement("label");
        label_local.innerText = "Local:";
        label_local.id = "label-local";
        const input_local = document.createElement("input");
        input_local.type = "text";
        input_local.id = "input-label-local";
        input_local.className = "input-label";
        input_local.readOnly = true;
        input_local.value = localChamado.value;
        let pulaLinha_2 = document.createElement("p");
        const label_data = document.createElement("label");
        label_data.innerHTML = "Data:";
        const input_data = document.createElement("label");
        input_data.type = "date";
        input_data.id = "input-date-style";
        input_data.className = "input-label";
        input_data.readOnly = true;
        input_data.innerText = dataChamado;
        let pulaLinha_3 = document.createElement("p");
        const label_descricao = document.createElement("label");
        label_descricao.innerHTML = "Descrição:";
        label_descricao.id = "label-desc";
        let pulaLinha_4 = document.createElement("p");
        const text_descricao = document.createElement("textarea") 
        text_descricao.id = "desc-chamados";
        text_descricao.cols = 35;
        text_descricao.rows = 5;
        text_descricao.readOnly = true;
        text_descricao.innerText = descricaoChamado.value;
        let pulaLinha_5 = document.createElement("p");
        const div_botoes = document.createElement("div");
        div_botoes.className = "div-botoes-chamado";
        div_botoes.id = "div-botoes-chamados"
        const button_edit = document.createElement("button");
        button_edit.innerHTML = "Editar";
        button_edit.type ="submit";
        button_edit.className = "button-edit-remove";
        button_edit.id = "button-edit";
        button_edit.onclick = function(){editarChamado()};
        const button_remove = document.createElement("button");
        button_remove.innerHTML= "Remover";
        button_remove.type = "submit";
        button_remove.className = "button-edit-remove";
        button_remove.id = "button-remove";
        button_remove.onclick = function(){fecharChamado()}


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
        div_card.appendChild(div_botoes);
        div_botoes.appendChild(button_edit);
        div_botoes.appendChild(button_remove);

    }

    select_function_chamado.value = "Chamados";

    const novaAberturaChamado = new Chamados();

    novaAberturaChamado.id_do_chamado = novoNumeroId;
    novaAberturaChamado.nome_do_chamado = nomeChamado.value;
    novaAberturaChamado.local_do_chamado = localChamado.value;
    novaAberturaChamado.data_do_chamado = dataChamado;
    novaAberturaChamado.descricao_do_chamado = descricaoChamado.value;

    Array_chamados.push(novaAberturaChamado);

    console.log(Array_chamados);

}

function fecharChamado(){

    console.log("click");

    const body_chamado = document.body;
    const div_chamado = document.getElementById("grid-tela");
    const div_card = document.getElementById("shape-card");

    div_chamado.removeChild(div_card);
    

}

function editarChamado(){

    const button_editar = document.getElementById("button-edit");
    const div_botoes_card = document.getElementById("div-botoes-chamados");

    const input_nome_card_chamado = document.getElementById("input-label-nome");
    const input_local_card_chamado = document.getElementById("input-label-local");
    const descricao_card_chamado = document.getElementById("desc-chamados");

    div_botoes_card.removeChild(button_editar);

    input_nome_card_chamado.readOnly = false;
    input_local_card_chamado.readOnly = false;
    descricao_card_chamado.readOnly = false;

    const button_salvar = document.createElement("button");
    button_salvar.id = "button-salvar";
    button_salvar.className = "button-salvar";
    button_salvar.type = "submit";
    button_salvar.innerHTML = "Salvar";
    button_salvar.onclick = function(){salvarChamadoEditado()};

    div_botoes_card.appendChild(button_salvar);


}

function salvarChamadoEditado(){

    console.log("ok");

    const button_salvar_editado = document.getElementById("button-salvar");
    const div_buttons_card = document.getElementById("div-botoes-chamados");

    const input_nome_card_chamado = document.getElementById("input-label-nome");
    const input_local_card_chamado = document.getElementById("input-label-local");
    const descricao_card_chamado = document.getElementById("desc-chamados");

    input_nome_card_chamado.readOnly = true;
    input_local_card_chamado.readOnly = true;
    descricao_card_chamado.readOnly = true;

    div_buttons_card.removeChild(button_salvar_editado);

    const new_button_edit_card_chamado = document.createElement("button");
    new_button_edit_card_chamado.innerHTML = "Editar";
    new_button_edit_card_chamado.type ="submit";
    new_button_edit_card_chamado.className = "button-edit-remove";
    new_button_edit_card_chamado.id = "button-edit";
    new_button_edit_card_chamado.onclick = function(){editarChamado()}
    
    
    div_buttons_card.appendChild(new_button_edit_card_chamado);
    div_buttons_card.insertAdjacentElement("beforebegin",new_button_edit_card_chamado)
    

}

function pesquisaNome(){

    searchName = document.getElementById("input-area-pesquisa");



    

}

function pesquisaData(){

    searchDate = document.getElementById("input-date-search");


}

function resetAdd(){

    var checkAddInv = document.getElementById("menu-add-inventario");

    var checkAddChamado = document.getElementById("menu-add-chamado");

    var existsAdd = document.body.contains(checkAddInv || checkAddChamado);

    if(existsAdd == true){
        const body_add = document.body;

        body_add.removeChild(checkAddChamado || checkAddInv);
    }
    else{
        console.log("não existe Add");
    }
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

