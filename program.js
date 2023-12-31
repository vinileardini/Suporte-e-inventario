class Chamados{
    constructor(id_do_chamado,nome_do_chamado,local_do_chamado,data_do_chamado,descricao_do_chamado) {
        this.id_do_chamado = id_do_chamado;
        this.nome_do_chamado = nome_do_chamado;
        this.local_do_chamado = local_do_chamado;
        this.data_do_chamado = data_do_chamado;
        this.descricao_do_chamado = descricao_do_chamado;
    }
}

class Inventario{
    constructor(tipo_item,local_item,numeracao_item,id_card) {
        this.tipo_item = tipo_item;
        this.local_item = local_item;
        this.numeracao_item = numeracao_item;
        this.id_card = id_card
    }
}

var escolhaChamado = "Chamados";

var escolhaInventario = "Inventario";

const addButton = document.getElementById("#button-add");

const menuTrigger = document.getElementById("menu-trigger");

const abrirMenuChamado = document.getElementById("menu-add-chamado");

const abrirMenuInventario = document.getElementById("menu-add-inventario");

var contagemClick = 0;

var numeroUltimoId = 0;

var Array_chamados = [];

var Array_Inv = [];

console.log(Array_Inv,Array_chamados);

// No carregamento da página checa array de chamados e no caso existam exibe os cards de chamado

window.onload = function checkArrayChamado () {if (Array_chamados.length >= 1){

    window.localStorage.setItem('inventario',JSON.stringify(Array_chamados));

    window.localStorage.setItem('chamados',JSON.stringify(Array_Inv));

    JSON.parse(window.localStorage.getItem('chamados'));

    JSON.parse(window.localStorage.getItem('inventario'));

    for(let i = 0; i < Array_chamados.length; i++){

        let checkExistsDivChamado = document.getElementById("grid-tela");

        const body_chamado = document.getElementById("body-page");

        let checkExistsTelaChamado = document.contains(checkExistsDivChamado);

        console.log(checkExistsTelaChamado);
 
        console.log(Array_chamados[i]);

        if(body_chamado.contains(checkExistsDivChamado) == true){

            Array_chamados[i];
            
            const div_chamado = document.getElementById("grid-tela");
            const div_card = document.createElement("div");
            div_card.className = "shape-card";
            div_card.id = "shape-card";
            const label_idNumber = document.createElement("label");
            label_idNumber.id = "number-id";
            label_idNumber.className = "id-number";
            label_idNumber.innerText = novoNumeroId;
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

        

    }

}}

var data = new Date();

function changeSymbol(){   

    contagemClick++;

    const body_menu_add= document.body;
    const telaInventario = document.getElementById("tela-inventario");
    const telaChamado = document.getElementById("grid-tela");

    var checkExistsMenuAddChamado = document.getElementById("menu-add-chamado");
    var checkExistsMenuAddInv = document.getElementById("menu-add-inventario");
    var checkExists = body_menu_add.contains (checkExistsMenuAddChamado || checkExistsMenuAddInv);
    var checkExistsBoth = body_menu_add.contains (checkExistsMenuAddChamado && checkExistsMenuAddInv);
    var checkExistsTelaInvOrChamados = body_menu_add.contains (telaInventario || telaChamado);
    var checkExistsTelaInv = body_menu_add.contains (telaInventario);


    if((contagemClick%2)==0){
        document.getElementById("symbol-plus").style.display="contents";
        document.getElementById("symbol-minus").style.display="none";

        document.getElementById("menu-opened").remove();
        

            if(checkExists == true){

                if(checkExistsBoth == true){
                    body_menu_add.removeChild(checkExistsMenuAddChamado);
                    body_menu_add.removeChild(checkExistsMenuAddInv);
                }
                else{
                    body_menu_add.removeChild(checkExistsMenuAddChamado || checkExistsMenuAddInv);
              }

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
        li_menu_open_chamado.onclick = function(){adicionarChamado(),selectFunction()};
        li_menu_open_chamado.innerText = "Abrir Chamado";
        const li_menu_open_inventario = document.createElement('li');
        li_menu_open_inventario.id = "liAddInventario";
        li_menu_open_inventario.onmouseover = function(){opacidadeSelecaoInventario( )};
        li_menu_open_inventario.onmouseout = function(){opacidadePadrao()};
        li_menu_open_inventario.className = "li-menu";
        li_menu_open_inventario.onclick = function(){adicionarInventario(),selectFunction()};
        li_menu_open_inventario.innerText = "Adicionar item ao inventário";

        body_menu_open.appendChild(menu_add_open);
        // Checagem se existe tela de inventarios ou de chamados
        if(checkExistsTelaInvOrChamados == true){
            if(checkExistsTelaInv == true){
                telaInventario.insertAdjacentElement("beforebegin",menu_add_open);
            }
            else{
                telaChamado.insertAdjacentElement("beforebegin",menu_add_open);
            }
        }
        menu_add_open.appendChild(li_menu_open_chamado);
        menu_add_open.appendChild(li_menu_open_inventario);
        }


}


function adicionarInventario(){

    const body_add_inventario = document.body;

    const seleciona_function = document.getElementById("select-inv-chamado");

    var MenuAddInv  = document.getElementById("menu-add-inventario");

    var telaInv = document.getElementById("tela-inventario");

    var telaChamado = document.getElementById("grid-tela");

    var MenuAdicionaChamado = document.getElementById("menu-add-chamado");

    var checkExistsAdicionaChamado = body_add_inventario.contains(MenuAdicionaChamado);

    var checkExistsTelaChamado = body_add_inventario.contains(telaChamado);

    var checkExistsInv = body_add_inventario.contains(telaInv);

    var checkAddInv = body_add_inventario.contains(MenuAddInv);

    var tamanhoArrayInv = Array_Inv.length;


    seleciona_function.value = "Inventario"; 

        if(checkAddInv == false){


            //Remove o menu de adição de chamado caso exista
            if(checkExistsAdicionaChamado == true){
                body_add_inventario.removeChild(MenuAdicionaChamado);
            }


            // Remove a tela de chamados caso exista
            if(checkExistsTelaChamado == true){
                body_add_inventario.removeChild(telaChamado);
            }

            const ul_menu_inventario = document.createElement('ul');
            ul_menu_inventario.id = "menu-add-inventario";
            ul_menu_inventario.className = "menu-add-inventario";
            const li_menu_item = document.createElement('li');
            li_menu_item.id = "item";
            li_menu_item.innerText = "Item:";
            const input_item = document.createElement('input');
            input_item.type = "text";
            input_item.id = "input-item-inv";
            input_item.className = "input-card-add-item";
            const li_menu_inv_local = document.createElement('li');
            li_menu_inv_local.id = "local-item";
            li_menu_inv_local.innerText = "Local:"
            const input_menu_inv_local = document.createElement('input');
            input_menu_inv_local.type = "text";
            input_menu_inv_local.id = "input-local-inv";
            input_menu_inv_local.className = "input-card-add-local-inv";
            const li_menu_inv_numeracao = document.createElement('li');
            li_menu_inv_numeracao.id = "numeracao-item";
            li_menu_inv_numeracao.innerText = "Patrimônio:";
            const input_menu_inv_numeracao = document.createElement('input');
            input_menu_inv_numeracao.type = "text";
            input_menu_inv_numeracao.id = "input-inv-numeracao";
            input_menu_inv_numeracao.className = "input-card-add-numero";
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
            if(checkExistsInv == true){
                telaInv.insertAdjacentElement("beforebegin",ul_menu_inventario)
            }
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

}

// Cria o card do item do inventário

function novoItemInventario(){

    var numeroSerieInv = document.getElementById("input-inv-numeracao");
    var itemInv = document.getElementById("input-item-inv");
    var localInv = document.getElementById("input-local-inv");
    var checkExistsDivInventario = document.getElementById("tela-inventario");

    var tamanhoArraydoInv = Array_Inv.length;

    var id_card_inv = tamanhoArraydoInv+1;

    const select_function_inventario = document.getElementById("select-inv-chamado");

    const body_inventario = document.body;

    if(body_inventario.contains(checkExistsDivInventario) == false){

        const div_inventario = document.createElement('div');
        div_inventario.className = 'inventario';
        div_inventario.id = "tela-inventario";
        const ul_inventario = document.createElement('ul');
        ul_inventario.className = "list-inventario";
        ul_inventario.id = "list-inventario"
        const li_chamado = document.createElement('li');
        li_chamado.className = "list-inventario-li";
        li_chamado.id = 'list-inventario-li'+id_card_inv;
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
        ul_inventario.id = "list-inventario";
        const li_chamado = document.createElement('li');
        li_chamado.className = "list-inventario-li";
        li_chamado.id = "list-inventario-li"+id_card_inv;
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

    var valor_tipoItem = itemInv.value;
    var valor_localItem = localInv.value;
    var valor_numeracaoItem = numeroSerieInv.value;
    var valor_idItem = id_card_inv

    const novoItemInventario = new Inventario(valor_tipoItem,valor_localItem,valor_numeracaoItem,valor_idItem);

    Array_Inv.push(novoItemInventario);

}


// Habilita a edição dos inputs dos cards do inventario 

function editarInventario(){

    let button_edit_clickado = event.target;

    let card_clickado = button_edit_clickado.parentNode;

    let input_numeroSerie_editado = card_clickado.children[1];

    let input_equipamento_editado = card_clickado.children[3];

    let input_item_editado = card_clickado.children[5];
    
    let botao_remove_inv = card_clickado.children[7];

    console.log(card_clickado);

    input_numeroSerie_editado.readOnly = false;
    input_equipamento_editado.readOnly = false;
    input_item_editado.readOnly = false;

    card_clickado.removeChild(button_edit_clickado);

    const botao_salvar_inv = document.createElement("button");
    botao_salvar_inv.id = "botao-salvar-inv";
    botao_salvar_inv.className = "button-salvar";
    botao_salvar_inv.type = "submit";
    botao_salvar_inv.innerHTML = "Salvar";
    botao_salvar_inv.onclick = function(){inventarioEditado()};

     card_clickado.appendChild(botao_salvar_inv);
     botao_remove_inv.insertAdjacentElement("beforebegin",botao_salvar_inv);


}

// Salva as alterações e bloqueia os campos de input dos cards de inventario

function inventarioEditado(){

    let salvar_click = event.target;

    let card_click = salvar_click.parentNode;

    idCard = card_click.getAttribute('id').replace('list-inventario-li','');
    
    let input_numeroSerie_salvar = card_click.children[1];

    let input_equipamento_salvar = card_click.children[3];

    let input_local_item_salvar = card_click.children[5];

    manipulaId = idCard - 1;

    // Altera o valor do numero de série no array
    if(input_numeroSerie_salvar != Array_Inv[manipulaId].numeroSerieInv){
        Array_Inv[manipulaId].numeracao_item = input_numeroSerie_salvar.value;
    }
    // Altera o valor de tipo de equipamento no array
    if(input_equipamento_salvar != Array_Inv[manipulaId].tipo_item){
        Array_Inv[manipulaId].tipo_item = input_equipamento_salvar.value;
    }
    // Altera o valor do local do item no array
    if(input_local_item_salvar != Array_Inv[manipulaId].local_item){
        Array_Inv[manipulaId].local_item = input_local_item_salvar.value;
    }

    let botao_remove_inv = card_click.children[7];
    
    input_numeroSerie_salvar.readOnly = true;
    input_equipamento_salvar.readOnly = true;
    input_local_item_salvar.readOnly = true;

    card_click.removeChild(salvar_click);

    const button_editar_editado = document.createElement('button');
    button_editar_editado.textContent = "Editar";
    button_editar_editado.className = "button-edit-remove";
    button_editar_editado.type = "submit";
    button_editar_editado.onclick = function(){editarInventario()};

    card_click.appendChild(button_editar_editado);
    botao_remove_inv.insertAdjacentElement('beforebegin',button_editar_editado);
    

}

// Exclui o card do inventario e exclui o objeto do array do inventario

function removerInventario(){

    const body_inventario_edit = document.body;

    const div_tela_inventario = document.getElementById("tela-inventario");

    let recebeClick = event.target;

    let recebeDivBotões = recebeClick.parentNode;

    let recebeCard = recebeDivBotões.parentNode;

    div_tela_inventario.removeChild(recebeCard);

    


}

//Operação de alteração de exibição entre chamados e inventário

function selectFunction(){

    const doc_body = document.body;
    
    const div_filtragem = document.getElementById("grid-filtragem");

    const botao_add = document.getElementById("button-add");

    let id_tela_chamado = document.getElementById("grid-tela");

    let id_tela_inv = document.getElementById('tela-inventario');

    const checkExistsChamadoScreen = doc_body.contains(id_tela_chamado);

    const checkExistsInvScreen = doc_body.contains(id_tela_inv);

    if(document.getElementById("select-inv-chamado").value == escolhaChamado)
    {
        const checkExistsFiltragemChamado = document.getElementById("input-name-search");

        if(checkExistsInvScreen == true){
            doc_body.removeChild(id_tela_inv);
        }

        // Cria filtragem para cards dos chamados a partir do nome 

        if(doc_body.contains(checkExistsFiltragemChamado)== false){

            const nova_div_pesquisa_nome = document.createElement("div");
            nova_div_pesquisa_nome.textContent = "Insira o nome para pesquisa:";
            nova_div_pesquisa_nome.id = "input-name-search";
            nova_div_pesquisa_nome.className = "input-name-search";
            const input_pesquisa_nome = document.createElement("input");
            input_pesquisa_nome.id = "input-area-pesquisa";
            input_pesquisa_nome.className = "input-area-pesquisa";
            input_pesquisa_nome.type = "text";
            const button_submit_pesquisa_nome = document.createElement("button");
            button_submit_pesquisa_nome.id = "lupa-pesquisa-nome";
            button_submit_pesquisa_nome.className = "lupa-pesquisa";
            button_submit_pesquisa_nome.type = "submit";
            button_submit_pesquisa_nome.onclick=function(){pesquisaNome()};
            const symbol_lupa_nome = document.createElement("i");
            symbol_lupa_nome.id = "symbol-lupa-nome";
            symbol_lupa_nome.className = "fa-solid fa-magnifying-glass";

            div_filtragem.appendChild(nova_div_pesquisa_nome);
            nova_div_pesquisa_nome.appendChild(input_pesquisa_nome);
            nova_div_pesquisa_nome.appendChild(button_submit_pesquisa_nome);
            button_submit_pesquisa_nome.appendChild(symbol_lupa_nome);

        // Cria filtragem dos cards de chamado a partir do local do chamado

            const nova_div_pesquisa_local_chamado = document.createElement("div");
            nova_div_pesquisa_local_chamado.textContent = "Insira o local do chamado:";
            nova_div_pesquisa_local_chamado.id = "input-local-chamado-search";
            nova_div_pesquisa_local_chamado.className = "input-area-local";
            const input_pesquisa_local = document.createElement("input");
            input_pesquisa_local.id = "input-area-local-chamado";
            input_pesquisa_local.className = "input-area-local";
            input_pesquisa_local.type = 'text';
            const button_submit_pesquisa_local_chamado= document.createElement("button");
            button_submit_pesquisa_local_chamado.id = "lupa-pesquisa-nome";
            button_submit_pesquisa_local_chamado.className = "lupa-pesquisa";
            button_submit_pesquisa_local_chamado.type = "submit";
            button_submit_pesquisa_local_chamado.onclick=function(){pesquisaLocalChamado};
            const symbol_lupa_local_chamado = document.createElement("i");
            symbol_lupa_local_chamado.id = "symbol-lupa-nome";
            symbol_lupa_local_chamado.className = "fa-solid fa-magnifying-glass";

            div_filtragem.appendChild(nova_div_pesquisa_local_chamado);
            nova_div_pesquisa_local_chamado.appendChild(input_pesquisa_local);
            nova_div_pesquisa_local_chamado.appendChild(button_submit_pesquisa_local_chamado);
            button_submit_pesquisa_local_chamado.appendChild(symbol_lupa_local_chamado)

            botao_add.insertAdjacentElement("beforebegin",nova_div_pesquisa_nome);
            botao_add.insertAdjacentElement("beforebegin",nova_div_pesquisa_local_chamado);

            const area_pesquisa_local = document.getElementById("input-local-search");

            const area_pesquisa_numeracao = document.getElementById("input-numeracao-search");

            div_filtragem.removeChild(area_pesquisa_local);
            div_filtragem.removeChild(area_pesquisa_numeracao);
        }

    }
    else{

        
        let checkExistsFiltragemInventario = document.getElementById("input-local-search");

        if(doc_body.contains(checkExistsFiltragemInventario)==false){

            if(checkExistsChamadoScreen == true){
                doc_body.removeChild(id_tela_chamado);
            }
        

            // Cria filtragem de local para os itens do inventário

            const nova_div_pesquisa_local = document.createElement("div");
            nova_div_pesquisa_local.id = "input-local-search";
            nova_div_pesquisa_local.className = "input-local-search";
            nova_div_pesquisa_local.textContent = "Insira o local a ser pesquisado:";
            const input_pesquisa_local = document.createElement("input");
            input_pesquisa_local.id = "input-area-local";
            input_pesquisa_local.className = "input-area-local";
            input_pesquisa_local.type = "text";
            input_pesquisa_local.onchange=function(){verificaPesquisaLocal()};
            const button_submit_pesquisa_local = document.createElement("button");
            button_submit_pesquisa_local.id = "lupa-pesquisa-local";
            button_submit_pesquisa_local.className = "lupa-pesquisa";
            button_submit_pesquisa_local.type = "submit";
            button_submit_pesquisa_local.onclick=function(){pesquisaLocal()};
            const symbol_lupa_local = document.createElement("i");
            symbol_lupa_local.id = "symbol-lupa-local";
            symbol_lupa_local.className = "fa-solid fa-magnifying-glass";

            div_filtragem.appendChild(nova_div_pesquisa_local);
            nova_div_pesquisa_local.appendChild(input_pesquisa_local);
            nova_div_pesquisa_local.appendChild(button_submit_pesquisa_local);
            button_submit_pesquisa_local.appendChild(symbol_lupa_local);

            botao_add.insertAdjacentElement("beforebegin",nova_div_pesquisa_local);

            

            // Cria filtragem através da numeração para os itens do inventário

            const nova_div_pesquisa_numeracao = document.createElement("div");
            nova_div_pesquisa_numeracao.id = "input-numeracao-search";
            nova_div_pesquisa_numeracao.className = "input-numeracao-search";
            nova_div_pesquisa_numeracao.textContent = "Insira o patrimônio a ser pesquisado:";
            const input_pesquisa_numeracao = document.createElement("input");
            input_pesquisa_numeracao.id = "input-area-numeracao";
            input_pesquisa_numeracao.className = "input-area-numeracao";
            input_pesquisa_numeracao.type = "text";
            input_pesquisa_numeracao.onchange = function(){verificaPesquisaNumeracao()}
            const button_submit_pesquisa_numeracao = document.createElement("button");
            button_submit_pesquisa_numeracao.id = "lupa-pesquisa-numeracao";
            button_submit_pesquisa_numeracao.className = "lupa-pesquisa";
            button_submit_pesquisa_numeracao.type = "submit";
            button_submit_pesquisa_numeracao.onclick = function(){pesquisaNumeracao()};
            const symbol_lupa_numeracao = document.createElement("i");
            symbol_lupa_numeracao.id = "symbol-lupa-numeracao";
            symbol_lupa_numeracao.className = "fa-solid fa-magnifying-glass";

            div_filtragem.appendChild(nova_div_pesquisa_numeracao);
            nova_div_pesquisa_numeracao.appendChild(input_pesquisa_numeracao);
            nova_div_pesquisa_numeracao.appendChild(button_submit_pesquisa_numeracao);
            button_submit_pesquisa_numeracao.appendChild(symbol_lupa_numeracao);

            botao_add.insertAdjacentElement("beforebegin",nova_div_pesquisa_numeracao);

            const area_pesquisa_nome = document.getElementById("input-name-search");
            const area_pesquisa_local_chamado = document.getElementById("input-local-chamado-search");

            div_filtragem.removeChild(area_pesquisa_nome);
            div_filtragem.removeChild(area_pesquisa_local_chamado);
            
        
    }

    }


}

// Cria a tabela para a adição de um novo chamado

function adicionarChamado(){

    var MenuAddChamado = document.getElementById("menu-add-chamado");

    const body_menu_chamado = document.body;

    const alterna_inv_chamado = document.getElementById("select-inv-chamado")

    var checkExistsAddChamado = body_menu_chamado.contains(MenuAddChamado);

    var TelaDeChamados = document.getElementById("grid-tela");

    var TelaInventario = document.getElementById("tela-inventario");

    var MenuAddInventario = document.getElementById("menu-add-inventario");

    var checkExistsAddInv = body_menu_chamado.contains(MenuAddInventario);

    var checkExistsTelaDeChamados = body_menu_chamado.contains(TelaDeChamados);

    var checkExistsTelaInventario = body_menu_chamado.contains(TelaInventario);

   alterna_inv_chamado.value = "Chamados";

    if(checkExistsAddChamado == false){


        // Remove o menu de adição no inventário, caso exista
        if(checkExistsAddInv == true){
            body_menu_chamado.removeChild(MenuAddInventario);
        }

        // Remove a tela de exibição dos cards de inventário caso exista
        if(checkExistsTelaInventario == true){
            body_menu_chamado.removeChild(TelaInventario);
        }

        const ul_menu_chamado = document.createElement('ul');
        ul_menu_chamado.id = "menu-add-chamado";
        ul_menu_chamado.className = "menu-add-chamado";
        const li_menu_chamado_nome = document.createElement('li');
        li_menu_chamado_nome.id = "nomeSolicitante";
        li_menu_chamado_nome.innerText = "Nome:";
        const input_nome_menu_chamado = document.createElement('input');
        input_nome_menu_chamado.type = "text";
        input_nome_menu_chamado.id = "input-nome-menu-chamado";
        input_nome_menu_chamado.className = "input-card-add-nome";
        const li_menu_chamado_local = document.createElement('li');
        li_menu_chamado_local.id = "local-chamado";
        li_menu_chamado_local.innerText = "Local:";
        const input_local_menu_chamado = document.createElement('input');
        input_local_menu_chamado.type = "text";
        input_local_menu_chamado.id = "input-local-menu-chamado";
        input_local_menu_chamado.className = "input-card-add-local-chamado";
        const li_menu_chamado_descricao = document.createElement('li')
        li_menu_chamado_descricao.id = "descricao-chamado";
        li_menu_chamado_descricao.innerText = "Descrição:";
        const alinha_desc_acima = document.createElement('p');
        const textarea_descricao_menu_chamado = document.createElement('textarea');
        textarea_descricao_menu_chamado.cols = 20;
        textarea_descricao_menu_chamado.rows = 4;
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
        if(checkExistsTelaDeChamados == true){
            TelaDeChamados.insertAdjacentElement("beforebegin",ul_menu_chamado); 
        }
        ul_menu_chamado.appendChild(li_menu_chamado_nome);
        li_menu_chamado_nome.appendChild(input_nome_menu_chamado);
        ul_menu_chamado.appendChild(li_menu_chamado_local);
        li_menu_chamado_local.appendChild(input_local_menu_chamado);
        ul_menu_chamado.appendChild(li_menu_chamado_descricao);
        ul_menu_chamado.appendChild(textarea_descricao_menu_chamado);
        ul_menu_chamado.appendChild(alinha_desc_acima);
        ul_menu_chamado.appendChild(pulaLinha);
        ul_menu_chamado.appendChild(button_confirm);
        button_confirm.appendChild(button_confirm_symbol_check);
        ul_menu_chamado.appendChild(button_cancel);
        button_cancel.appendChild(button_cancel_symbol_x);

        }
    }


// Cria o card do novo Chamado 
    
function novoChamado(){

    
    var checkExistsChamado = document.getElementById("shape-card");

    var checkExistsChamadoBody = document.body.contains(checkExistsChamado);

    const select_function_chamado = document.getElementById("select-inv-chamado");

    var tamanhoArray = Array_chamados.length;

    var id_do_chamado = tamanhoArray+1;
    

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
        div_card.id = "shape-card"+id_do_chamado;
        div_card.dataset.id_card = tamanhoArray;
        const label_idNumber = document.createElement("label");
        label_idNumber.id = "number-id";
        label_idNumber.className = "id-number";
        label_idNumber.innerHTML = id_do_chamado;
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
        div_card.id = "shape-card"+id_do_chamado;
        const label_idNumber = document.createElement("label");
        label_idNumber.id = "number-id";
        label_idNumber.className = "id-number";
        label_idNumber.innerText = id_do_chamado;
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

    var checkId = document.getElementsByClassName("shape-card");
    
    console.log(checkId);


    // Altera o valor do seletor de chamado ou inventário

    select_function_chamado.value = "Chamados";

    // Insire os valores do card de chamado em um objeto dentro de um array

    var value_idChamado = id_do_chamado;
    var value_nome = nomeChamado.value;
    var value_local = localChamado.value;
    var value_data = dataChamado
    var value_descricao = descricaoChamado.value

    const novaAberturaChamado =  new Chamados(value_idChamado,value_nome,value_local,value_data,value_descricao);

    Array_chamados.push(novaAberturaChamado);

    console.log(Array_chamados);

}

// Exclui um chamado

function fecharChamado(){

    console.log("click");

    const body_chamado = document.body;
    const div_chamado = document.getElementById("grid-tela");
    const checkId = document.getElementById("number-id").innerText;
    let array_chamado_size = Array_chamados.length;

    let obj = event.currentTarget;

    let paiObj = obj.parentNode;

    let voObj = paiObj.parentNode;

    let pegaId = voObj.getAttribute('id');

    let retira_card = document.getElementById(pegaId);

    div_chamado.removeChild(retira_card);


}

// Torna possível a edição de um chamado

function editarChamado(){

    let card_alvo = event.target;

    let div_botoes_card_alvo = card_alvo.parentNode;

    let card_alvo_selecionado = div_botoes_card_alvo.parentNode;

    let elementsCard = card_alvo_selecionado.childNodes;

    console.log(elementsCard);

    let seleciona_input_nome = card_alvo_selecionado.children[3];
    let seleciona_input_local = card_alvo_selecionado.children[6];
    let seleciona_textarea_desc = card_alvo_selecionado.children[13];

    seleciona_input_nome.readOnly = false;
    seleciona_input_local.readOnly = false;
    seleciona_textarea_desc.readOnly = false;

    const div_botoes_card = card_alvo_selecionado.children[15];

    const button_editar = div_botoes_card.children[0];
    const button_remove = div_botoes_card.children[1];

    div_botoes_card.removeChild(button_editar);

    const button_salvar = document.createElement("button");
    button_salvar.id = "button-salvar";
    button_salvar.className = "button-salvar";
    button_salvar.type = "submit";
    button_salvar.innerHTML = "Salvar";
    button_salvar.onclick = function(){salvarChamadoEditado()};

    div_botoes_card.appendChild(button_salvar);
    button_remove.insertAdjacentElement("beforebegin",button_salvar);


}

// Salva as alterações realizadas na edição de um chamado

function salvarChamadoEditado(){

    let button_salvar_card_clickado = event.target;

    let div_botao_card_clickado = button_salvar_card_clickado.parentNode;

    let button_card_edit = div_botao_card_clickado.children[1];

    let checkId_button_edit = button_card_edit.getAttribute('id');

    let card_clickado = div_botao_card_clickado.parentNode;

    let input_nome_card_chamado = card_clickado.children[3];

    let input_local_card_chamado = card_clickado.children[6];
 
    let descricao_card_chamado = card_clickado.children[13];

    idChamado = card_clickado.children[0].innerHTML;

    manipulaId = idChamado - 1;

    console.log('manipula id:'+manipulaId)

    if(input_local_card_chamado != Array_chamados[manipulaId].local_do_chamado){
        Array_chamados[manipulaId].local_do_chamado = input_local_card_chamado.value;
    }

    if(input_nome_card_chamado != Array_chamados[manipulaId].nome_do_chamado){
        Array_chamados[manipulaId].nome_do_chamado = input_nome_card_chamado;
    }

    if(descricao_card_chamado != Array_chamados[manipulaId].descricao_do_chamado){
        Array_chamados[manipulaId].descricao_do_chamado = descricao_card_chamado.value;
    }

    console.log(Array_chamados);

    input_nome_card_chamado.readOnly = true;
    input_local_card_chamado.readOnly = true;
    descricao_card_chamado.readOnly = true;

    div_botao_card_clickado.removeChild(button_salvar_card_clickado);

    const new_button_edit_card_chamado = document.createElement("button");
    new_button_edit_card_chamado.innerHTML = "Editar";
    new_button_edit_card_chamado.type ="submit";
    new_button_edit_card_chamado.className = "button-edit-remove";
    new_button_edit_card_chamado.id = "button-edit";
    new_button_edit_card_chamado.onclick = function(){editarChamado()}
    
    
    div_botao_card_clickado.appendChild(new_button_edit_card_chamado);
    if(checkId_button_edit != "button-edit"){
        button_card_edit.insertAdjacentElement("beforebegin",new_button_edit_card_chamado)
    }
    

}

// Realiza a pesquisa através do nome informado

function pesquisaNome(){

    
    const searchName = document.getElementById("input-area-pesquisa").value;

    const DivChamado = document.getElementById('grid-tela');

    console.log(searchName);

    var Array_pesquisa_nome = [];


        for(u = 0; u<Array_chamados.length; u++){

            var TesteNome = Array_chamados[u].nome_do_chamado;
            var TesteID = Array_chamados[u].id_do_chamado;

            if(TesteNome != searchName){

                seleciona_nome_pesquisa = TesteNome;
                seleciona_id_nome_pesquisa = TesteID;

                Array_pesquisa_nome.push(seleciona_id_nome_pesquisa);

                console.log(Array_pesquisa_nome);

            }


        }
        

        for(i=0;i<Array_pesquisa_nome.length;i++){
                
            idRetira = Array_pesquisa_nome[i]

            if(idRetira != null){

                cardRetira = document.getElementById('shape-card'+idRetira)

                DivChamado.removeChild(cardRetira)
            }
            
        }

              
                
     }
        
        


function verificaPesquisa(){

    if(document.getElementById('input-area-pesquisa').value == ''){

        body_chamado = document.body;

        checkExistsDiv = body_chamado.contains(document.getElementById('grid-tela'));

        DivCardChamado = document.getElementById('grid-tela');

        checkExistsCards = DivCardChamado.children.length

        Array_exclui = []

        if(checkExistsDiv == true){

            if(checkExistsCards > 0){
                for(a = 0;a<checkExistsCards;a++){
                    excluiCard = DivCardChamado.children[a]

                    Array_exclui.push(excluiCard.children[0].innerHTML)

                }

                for(i=0;i<Array_exclui.length;i++){
                    IdCardExclui = Array_exclui[i]
                    CardExclui = document.getElementById('shape-card'+IdCardExclui)
                    DivCardChamado.removeChild(CardExclui)
                }

                updateCheckExistsCards = DivCardChamado.children.length

                if(updateCheckExistsCards == 0){
                    for(i=0;i<Array_chamados.length;i++){

                        nomeChamado = Array_chamados[i].nome_do_chamado;
                        id_do_chamado = Array_chamados[i].id_do_chamado;
                        localChamado = Array_chamados[i].local_do_chamado;
                        dataChamado = Array_chamados[i].data_do_chamado;
                        descricaoChamado = Array_chamados[i].descricao_do_chamado;
        
                        tamanhoArray = Array_chamados.length;

                        const div_chamado = document.getElementById("grid-tela");
                        const div_card = document.createElement("div");
                        div_card.className = "shape-card";
                        div_card.id = "shape-card";
                        div_card.dataset.id_card = tamanhoArray;
                        const label_idNumber = document.createElement("label");
                        label_idNumber.id = "number-id";
                        label_idNumber.className = "id-number";
                        label_idNumber.innerHTML = id_do_chamado;
                        let pulaLinha = document.createElement("p");
                        const label_nomeSolicitante = document.createElement("label");
                        label_nomeSolicitante.innerHTML = "Nome do solicitante:";
                        const input_nome = document.createElement("input");
                        input_nome.type = "text";
                        input_nome.id = "input-label-nome";
                        input_nome.className = "input-label";
                        input_nome.readOnly = true;
                        input_nome.value = nomeChamado;
                        let pulaLinha_1 = document.createElement("p");
                        const label_local = document.createElement("label");
                        label_local.innerText = "Local:";
                        label_local.id = "label-local";
                        const input_local = document.createElement("input");
                        input_local.type = "text";
                        input_local.id = "input-label-local";
                        input_local.className = "input-label";
                        input_local.readOnly = true;
                        input_local.value = localChamado;
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
                        text_descricao.innerText = descricaoChamado;
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
                }

            }

            

            else{
                for(a = 0;a<=Array_chamados.length;a++){

                    nomeChamado = Array_chamados[a].nome_do_chamado;
                    id_do_chamado = Array_chamados[a].id_do_chamado;
                    localChamado = Array_chamados[a].local_do_chamado;
                    dataChamado = Array_chamados[a].data_do_chamado;
                    descricaoChamado = Array_chamados[a].descricao_do_chamado;
        
                    tamanhoArray = Array_chamados.length;
        
                    if(checkExistsDiv == true){
        
                        const div_chamado = document.getElementById("grid-tela");
                        const div_card = document.createElement("div");
                        div_card.className = "shape-card";
                        div_card.id = "shape-card";
                        div_card.dataset.id_card = tamanhoArray;
                        const label_idNumber = document.createElement("label");
                        label_idNumber.id = "number-id";
                        label_idNumber.className = "id-number";
                        label_idNumber.innerHTML = id_do_chamado;
                        let pulaLinha = document.createElement("p");
                        const label_nomeSolicitante = document.createElement("label");
                        label_nomeSolicitante.innerHTML = "Nome do solicitante:";
                        const input_nome = document.createElement("input");
                        input_nome.type = "text";
                        input_nome.id = "input-label-nome";
                        input_nome.className = "input-label";
                        input_nome.readOnly = true;
                        input_nome.value = nomeChamado;
                        let pulaLinha_1 = document.createElement("p");
                        const label_local = document.createElement("label");
                        label_local.innerText = "Local:";
                        label_local.id = "label-local";
                        const input_local = document.createElement("input");
                        input_local.type = "text";
                        input_local.id = "input-label-local";
                        input_local.className = "input-label";
                        input_local.readOnly = true;
                        input_local.value = localChamado;
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
                        text_descricao.innerText = descricaoChamado;
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

                    for(u=0;u<Array_chamados.length;u++){

                    }
                    
                }

            }
           
        }
    }

}
}


// Realiza a pesquisa através da data informada

function pesquisaLocalChamado(){

    const searchDate = document.getElementById("input-area-local-chamado").value;

    DivCardChamado = document.getElementById('grid-tela')

    Array_pesquisa_local_chamado = []

    for(a=0;a<Array_chamados.length;a++){

        var testeLocalChamado = Array_chamados[a].local_do_chamado
        var idTesteLocalChamado = Array_chamados[a].id_do_chamado

        if(searchDate != testeLocalChamado){
            Array_pesquisa_local_chamado.push(idTesteLocalChamado)
        }
    }

    for(j=0;j<Array_pesquisa_local_chamado.length;j++){
        idRetirada = Array_pesquisa_local_chamado[j]

        if(idRetirada != null){
            cardRetirada = document.getElementById('shape-card'+idRetirada)
            console.log('card retirada:'+cardRetirada)

            DivCardChamado.removeChild(cardRetirada)
        }
    }
    

}

function verificaPesquisaLocalChamado(){
    if(document.getElementById('input-area-local-chamado').value == ''){
        body_chamado = document.body;

        DivCardChamado = document.getElementById('grid-tela');

        checkExistsDivdoChamado = body_chamado.contains(DivCardChamado);

        Array_retira_chamado = []

        if(checkExistsDivdoChamado == true){

            console.log('entrou')

            checkExistsChamado = DivCardChamado.children.length;

            if(checkExistsChamado > 0){

                console.log('entrou 2')

                for(i=0;i<checkExistsChamado;i++){

                    exclui_chamado = DivCardChamado.children[i];

                    manipulaId = exclui_chamado.getAttribute('id').replace('shape-card','')

                    console.log('manipula id:'+manipulaId)

                    Array_retira_chamado.push(manipulaId);

                }

                for(a=0;a<Array_retira_chamado.length;a++){
                    idChamado = Array_retira_chamado[a];
                    retiraChamado = document.getElementById('shape-card'+idChamado);
                    DivCardChamado.removeChild(retiraChamado);
                }

                updateCheckExistsChamado = DivCardChamado.children.length;

                if(updateCheckExistsChamado == 0){
                    
                    for(u=0;u<Array_chamados.length;u++){
                        
                        nomeChamado = Array_chamados[u].nome_do_chamado;
                        id_do_chamado = Array_chamados[u].id_do_chamado;
                        localChamado = Array_chamados[u].local_do_chamado;
                        dataChamado = Array_chamados[u].data_do_chamado;
                        descricaoChamado = Array_chamados[u].descricao_do_chamado;
            
                        tamanhoArray = Array_chamados.length;

                        const div_chamado = document.getElementById("grid-tela");
                        const div_card = document.createElement("div");
                        div_card.className = "shape-card";
                        div_card.id = "shape-card";
                        div_card.dataset.id_card = tamanhoArray;
                        const label_idNumber = document.createElement("label");
                        label_idNumber.id = "number-id";
                        label_idNumber.className = "id-number";
                        label_idNumber.innerHTML = id_do_chamado;
                        let pulaLinha = document.createElement("p");
                        const label_nomeSolicitante = document.createElement("label");
                        label_nomeSolicitante.innerHTML = "Nome do solicitante:";
                        const input_nome = document.createElement("input");
                        input_nome.type = "text";
                        input_nome.id = "input-label-nome";
                        input_nome.className = "input-label";
                        input_nome.readOnly = true;
                        input_nome.value = nomeChamado;
                        let pulaLinha_1 = document.createElement("p");
                        const label_local = document.createElement("label");
                        label_local.innerText = "Local:";
                        label_local.id = "label-local";
                        const input_local = document.createElement("input");
                        input_local.type = "text";
                        input_local.id = "input-label-local";
                        input_local.className = "input-label";
                        input_local.readOnly = true;
                        input_local.value = localChamado;
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
                        text_descricao.innerText = descricaoChamado;
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

                }
                else{
                    
                    for(i=0;i<Array_chamados.length;i++){
                        
                        nomeChamado = Array_chamados[i].nome_do_chamado;
                        id_do_chamado = Array_chamados[i].id_do_chamado;
                        localChamado = Array_chamados[i].local_do_chamado;
                        dataChamado = Array_chamados[i].data_do_chamado;
                        descricaoChamado = Array_chamados[i].descricao_do_chamado;

                        tamanhoArray = Array_chamados.length;

                        const div_chamado = document.getElementById("grid-tela");
                        const div_card = document.createElement("div");
                        div_card.className = "shape-card";
                        div_card.id = "shape-card";
                        div_card.dataset.id_card = tamanhoArray;
                        const label_idNumber = document.createElement("label");
                        label_idNumber.id = "number-id";
                        label_idNumber.className = "id-number";
                        label_idNumber.innerHTML = id_do_chamado;
                        let pulaLinha = document.createElement("p");
                        const label_nomeSolicitante = document.createElement("label");
                        label_nomeSolicitante.innerHTML = "Nome do solicitante:";
                        const input_nome = document.createElement("input");
                        input_nome.type = "text";
                        input_nome.id = "input-label-nome";
                        input_nome.className = "input-label";
                        input_nome.readOnly = true;
                        input_nome.value = nomeChamado;
                        let pulaLinha_1 = document.createElement("p");
                        const label_local = document.createElement("label");
                        label_local.innerText = "Local:";
                        label_local.id = "label-local";
                        const input_local = document.createElement("input");
                        input_local.type = "text";
                        input_local.id = "input-label-local";
                        input_local.className = "input-label";
                        input_local.readOnly = true;
                        input_local.value = localChamado;
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
                        text_descricao.innerText = descricaoChamado;
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

                    
                }
            }
        }


    }
}

// Realiza a pesquisa a partir  da numeracao informada do item

function pesquisaNumeracao(){

    const searchNumber = document.getElementById("input-area-numeracao").value;

    const DivInventario = document.getElementById('tela-inventario')

    var Array_pesquisa_numeracao = []

    for(u=0;u<Array_Inv.length;u++){

        var testeNum = Array_Inv[u].numeracao_item
        console.log('teste num ='+testeNum)
        var testeIdNum = Array_Inv[u].id_card
        console.log('teste id num='+testeIdNum)

        if(searchNumber != testeNum){
            Array_pesquisa_numeracao.push(testeIdNum)
        }

    }

    for(i=0;i<Array_pesquisa_numeracao.length;i++){

        idTesteRetira = Array_pesquisa_numeracao[i]

        if(idTesteRetira != null){

            li_excluiCard = document.getElementById('list-inventario-li'+idTesteRetira)
            ExcluiCard  = li_excluiCard.parentNode

            DivInventario.removeChild(ExcluiCard)
        }

    }


}


//Verifica se o campo de pesquisa de numeracao está em branco
function verificaPesquisaNumeracao(){

    if(document.getElementById('input-area-numeracao').value == ''){
        
        body_inventario = document.body;

        DivCardInventario = document.getElementById('tela-inventario');

        checkExistsDivInventario = body_inventario.contains(DivCardInventario)

        Array_exclui_inventario = []

        if(checkExistsDivInventario == true){

            checkExistsItemInv = DivCardInventario.children.length;

            if(checkExistsItemInv > 0){

                for(a=0;a<checkExistsItemInv;a++){

                    exclui_item_inv = DivCardInventario.children[a]

                    Array_exclui_inventario.push(exclui_item_inv.getAttribute('id'))

                }

                for(i=0;i<Array_exclui_inventario.length;i++){
                    IdItemInvExclui = Array_exclui_inventario[i]
                    ItemInvExclui = document.getElementById(IdItemInvExclui)
                    DivCardInventario.removeChild(ItemInvExclui)

                }

                updateCheckExistsCardItem = DivCardInventario.children.length

                if(updateCheckExistsCardItem == 0){

                    for(u=0;u<Array_Inv.length;u++){

                        numeroSerieInv = Array_Inv[u].numeracao_item;
                        itemInv = Array_Inv[u].tipo_item;
                        localInv = Array_Inv[u].local_item;

                        tamanhoArrayInventario = Array_Inv.length;

                        id_card_inv = tamanhoArrayInventario+1;

                        const div_inventario = document.createElement('div');
                        div_inventario.className = 'inventario';
                        div_inventario.id = "tela-inventario";
                        const ul_inventario = document.createElement('ul');
                        ul_inventario.className = "list-inventario";
                        ul_inventario.id = "list-inventario"
                        const li_chamado = document.createElement('li');
                        li_chamado.className = "list-inventario-li";
                        li_chamado.id = 'list-inventario-li'+id_card_inv;
                        const label_numeroSerie = document.createElement('label');
                        label_numeroSerie.innerHTML = "Número de série:";
                        label_numeroSerie.id = "number-serie-align";
                        const input_inv_numeroSerie = document.createElement('input');
                        input_inv_numeroSerie.className = "inputs-inv";
                        input_inv_numeroSerie.id = "input-numeroDeSerie"
                        input_inv_numeroSerie.type = "text";
                        input_inv_numeroSerie.readOnly = true;
                        input_inv_numeroSerie.value = numeroSerieInv;
                        const label_equipamento = document.createElement('label');
                        label_equipamento.innerHTML = "Equipamento:";
                        label_equipamento.id = "label_equipamento";
                        const input_inv_equipamento = document.createElement('input');
                        input_inv_equipamento.className = "inputs-inv";
                        input_inv_equipamento.id = "input-equipamento"
                        input_inv_equipamento.type = "text";
                        input_inv_equipamento.readOnly = true;
                        input_inv_equipamento.value = itemInv;
                        const label_local = document.createElement('label');
                        label_local.id = "label-local";
                        label_local.textContent = "Local:";
                        const input_local = document.createElement('input');
                        input_local.id.className = "inputs-inv";
                        input_local.id = "input-local";
                        input_local.type = "text";
                        input_local.readOnly = true;
                        input_local.value = localInv;
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
                }
                else{
                    const div_inventario = document.createElement('div');
                    div_inventario.className = 'inventario';
                    div_inventario.id = 'tela-inventario';

                    for(i=0;i<Array_Inv.length;i++){

                        numeroSerieInv = Array_Inv[i].numeracao_item
                        itemInv = Array_Inv[i].tipo_item
                        localInv = Array_Inv[i].local_item
                    
                        const ul_inventario = document.createElement('ul');
                        ul_inventario.className = "list-inventario";
                        ul_inventario.id = "list-inventario"
                        const li_chamado = document.createElement('li');
                        li_chamado.className = "list-inventario-li";
                        li_chamado.id = 'list-inventario-li'+id_card_inv;
                        const label_numeroSerie = document.createElement('label');
                        label_numeroSerie.innerHTML = "Número de série:";
                        label_numeroSerie.id = "number-serie-align";
                        const input_inv_numeroSerie = document.createElement('input');
                        input_inv_numeroSerie.className = "inputs-inv";
                        input_inv_numeroSerie.id = "input-numeroDeSerie"
                        input_inv_numeroSerie.type = "text";
                        input_inv_numeroSerie.readOnly = true;
                        input_inv_numeroSerie.value = numeroSerieInv;
                        const label_equipamento = document.createElement('label');
                        label_equipamento.innerHTML = "Equipamento:";
                        label_equipamento.id = "label_equipamento";
                        const input_inv_equipamento = document.createElement('input');
                        input_inv_equipamento.className = "inputs-inv";
                        input_inv_equipamento.id = "input-equipamento"
                        input_inv_equipamento.type = "text";
                        input_inv_equipamento.readOnly = true;
                        input_inv_equipamento.value = itemInv;
                        const label_local = document.createElement('label');
                        label_local.id = "label-local";
                        label_local.textContent = "Local:";
                        const input_local = document.createElement('input');
                        input_local.id.className = "inputs-inv";
                        input_local.id = "input-local";
                        input_local.type = "text";
                        input_local.readOnly = true;
                        input_local.value = localInv;
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
                }

            }

        }


    }
}

// Realiza a pesquisa de itens a partir do local informado na pesquisa

function pesquisaLocal(){

    const searchLocal = document.getElementById("input-area-local").value;


    const DivInventario = document.getElementById('tela-inventario')

    var Array_pesquisa_local = []

    for(i=0;i<Array_Inv.length;i++){


        var testeLocal = Array_Inv[i].local_item
        var testeIdLocal = Array_Inv[i].id_card

        if(searchLocal != testeLocal){

            Array_pesquisa_local.push(testeIdLocal)

        }
        
    }

    for (i=0;i<Array_pesquisa_local.length;i++){

        idRetira = Array_pesquisa_local[i]

        if(idRetira != null){

            li_cardRetira = document.getElementById('list-inventario-li'+idRetira)

            cardRetira = li_cardRetira.parentNode

            DivInventario.removeChild(cardRetira)
        }

    }

    if(Array_pesquisa_local.length == 0){
        alert("Não existe item neste local")
    }


}

function verificaPesquisaLocal(){
    
    if(document.getElementById('input-area-local').value == ''){

        body_inventario = document.body

        DivCardInv = document.getElementById('tela-inventario');

        checkExistsDivInv = body_inventario.contains(DivCardInv);

        Array_exclui_inv = []

        if(checkExistsDivInv == true){

            checkExistsItemInventario = DivCardInv.children.length;

            if(checkExistsItemInventario > 0){


                for(i = 0;i<checkExistsItemInventario;i++){

                    exclui_item = DivCardInv.children[i]

                    Array_exclui_inv.push(exclui_item.children[0].getAttribute('id'))
                }

                for(j=0;j<Array_exclui_inv.length;j++){
                    IdItemExclui = Array_exclui_inv[j]
                    ItemExclui = document.getElementById(IdItemExclui);
                    CardExclui = ItemExclui.parentNode;
                    DivCardInv.removeChild(CardExclui)
                }

                updateCheckExistsItem = DivCardInv.children.lenght

                if(updateCheckExistsItem == 0){
                    for(a=0;a<Array_Inv.lenght;a++){

                        numeroSerieInv = Array_Inv[a].numeracao_item
                        itemInv = Array_Inv[a].tipo_item
                        localInv = Array_Inv[a].local_item

                        var tamanhoArraydoInv = Array_Inv.length;

                        var id_card_inv = tamanhoArraydoInv+1;

                        const div_inventario = document.createElement('div');
                        div_inventario.className = 'inventario';
                        div_inventario.id = "tela-inventario";
                        const ul_inventario = document.createElement('ul');
                        ul_inventario.className = "list-inventario";
                        ul_inventario.id = "list-inventario"
                        const li_chamado = document.createElement('li');
                        li_chamado.className = "list-inventario-li";
                        li_chamado.id = 'list-inventario-li'+id_card_inv;
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
                }

                else{

                    const div_inventario = document.createElement('div');
                    div_inventario.className = 'inventario';
                    div_inventario.id = "tela-inventario";
                    
                    for(u=0;u<Array_Inv.length;u++){

                        numeroSerieInv = Array_Inv[u].numeracao_item
                        itemInv = Array_Inv[u].tipo_item
                        localInv = Array_Inv[u].local_item
                    
                        const ul_inventario = document.createElement('ul');
                        ul_inventario.className = "list-inventario";
                        ul_inventario.id = "list-inventario"
                        const li_chamado = document.createElement('li');
                        li_chamado.className = "list-inventario-li";
                        li_chamado.id = 'list-inventario-li'+id_card_inv;
                        const label_numeroSerie = document.createElement('label');
                        label_numeroSerie.innerHTML = "Número de série:";
                        label_numeroSerie.id = "number-serie-align";
                        const input_inv_numeroSerie = document.createElement('input');
                        input_inv_numeroSerie.className = "inputs-inv";
                        input_inv_numeroSerie.id = "input-numeroDeSerie"
                        input_inv_numeroSerie.type = "text";
                        input_inv_numeroSerie.readOnly = true;
                        input_inv_numeroSerie.value = numeroSerieInv;
                        const label_equipamento = document.createElement('label');
                        label_equipamento.innerHTML = "Equipamento:";
                        label_equipamento.id = "label_equipamento";
                        const input_inv_equipamento = document.createElement('input');
                        input_inv_equipamento.className = "inputs-inv";
                        input_inv_equipamento.id = "input-equipamento"
                        input_inv_equipamento.type = "text";
                        input_inv_equipamento.readOnly = true;
                        input_inv_equipamento.value = itemInv;
                        const label_local = document.createElement('label');
                        label_local.id = "label-local";
                        label_local.textContent = "Local:";
                        const input_local = document.createElement('input');
                        input_local.id.className = "inputs-inv";
                        input_local.id = "input-local";
                        input_local.type = "text";
                        input_local.readOnly = true;
                        input_local.value = localInv;
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
                }
            }
        }

    }

    else{
        console.log('alteracao campo pesquisa')
    }
}





// Exclui o campo de adição de chamado ou inventário

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

// Altera a opacidade do texto para a adição de um novo chamado

function opacidadeSelecaoChamado(){
    document.getElementById("liAddInventario").style.opacity=0.5;
}

// Altera a opacidade do texto para a adição de um item no inventário

function opacidadeSelecaoInventario(){
    document.getElementById("liAbrirChamado").style.opacity=0.5;
}

// Altera a opacidade para padrão quando não se tem selecionado nenhuma opção de adição

function opacidadePadrao(){
    document.getElementById("liAbrirChamado").style.opacity=1;
    document.getElementById("liAddInventario").style.opacity=1;
}
