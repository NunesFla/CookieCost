// =======================================
// COOKIECOST
// Script principal da aplicação
// PARTE 1/4
// =======================================


// =======================================
// CONFIGURAÇÕES DOS INGREDIENTES
// =======================================

const ingredientes = [

    {
        nome: "Farinha",
        id: "farinha",
        unidade: "g"
    },

    {
        nome: "Chocolate",
        id: "chocolate",
        unidade: "g"
    },

    {
        nome: "Fermento",
        id: "fermento",
        unidade: "g"
    },

    {
        nome: "Ovo",
        id: "ovo",
        unidade: "unidade"
    },

    {
        nome: "Açúcar Refinado",
        id: "acucarRefi",
        unidade: "g"
    },

    {
        nome: "Açúcar Mascavo",
        id: "acucarMasc",
        unidade: "g"
    },

    {
        nome: "Amido",
        id: "amido",
        unidade: "g"
    },

    {
        nome: "Bicarbonato",
        id: "bicarbonato",
        unidade: "g"
    }

];


// =======================================
// FUNÇÕES AUXILIARES
// =======================================


// Converte valor para moeda brasileira

function moeda(valor){

    if(isNaN(valor)){

        return "R$ 0,00";

    }


    return valor.toLocaleString(
        "pt-BR",
        {
            style:"currency",
            currency:"BRL"
        }
    );

}



// Busca valor numérico de um campo

function valorCampo(id){

    const campo = document.getElementById(id);


    if(!campo){

        return 0;

    }


    let valor = parseFloat(campo.value);


    if(isNaN(valor)){

        return 0;

    }


    return valor;

}



// Coloca valor em um campo

function preencherCampo(id, valor){

    const campo = document.getElementById(id);


    if(campo){

        campo.value = valor;

    }

}



// =======================================
// LEITURA DOS DADOS DOS INGREDIENTES
// =======================================


// Obtém quantidade comprada

function obterQuantidadePacote(ingrediente){

    return valorCampo(
        ingrediente.id + "Qtd"
    );

}



// Obtém valor pago

function obterValorPacote(ingrediente){

    return valorCampo(
        ingrediente.id + "Valor"
    );

}



// Calcula custo por grama ou unidade

function calcularCustoUnitario(ingrediente){


    const quantidade =
        obterQuantidadePacote(ingrediente);



    const valor =
        obterValorPacote(ingrediente);



    if(quantidade <= 0){

        return 0;

    }



    return valor / quantidade;


}



// =======================================
// CÁLCULO DO CUSTO DE CADA INGREDIENTE
// =======================================


function calcularCustosUnitarios(){


    let custos = {};



    ingredientes.forEach(ingrediente => {


        custos[ingrediente.id] =
            calcularCustoUnitario(ingrediente);



    });



    return custos;


}

// =======================================
// COOKIECOST
// Script principal da aplicação
// PARTE 2/4
// =======================================



// =======================================
// LEITURA DA QUANTIDADE UTILIZADA
// NA RECEITA
// =======================================


function obterQuantidadeUtilizada(ingrediente){

    return valorCampo(
        ingrediente.id + "Uso"
    );

}



// =======================================
// CALCULA O CUSTO DE CADA INGREDIENTE
// NA RECEITA
// =======================================


function calcularCustoReceita(){

    const custosUnitarios = calcularCustosUnitarios();


    let resultado = {};



    ingredientes.forEach(ingrediente => {


        const quantidadeUsada =
            obterQuantidadeUtilizada(ingrediente);



        const custoUnitario =
            custosUnitarios[ingrediente.id];



        resultado[ingrediente.id] = {

            nome: ingrediente.nome,

            quantidade:
                quantidadeUsada,

            custoUnitario:
                custoUnitario,

            total:
                quantidadeUsada * custoUnitario

        };


    });



    return resultado;

}



// =======================================
// CALCULA O TOTAL DA RECEITA
// =======================================


function calcularTotalReceita(){


    const custos =
        calcularCustoReceita();



    let total = 0;



    Object.values(custos).forEach(item => {


        total += item.total;


    });



    return total;


}



// =======================================
// CALCULA CUSTOS EXTRAS
// (PADRÃO 30% IGUAL AO PYTHON)
// =======================================


function calcularCustosExtras(total){


    let percentual =
        valorCampo("acrescimo");



    if(percentual <= 0){

        percentual = 30;

    }



    return total * percentual / 100;


}



// =======================================
// CUSTO FINAL DA RECEITA
// =======================================


function calcularCustoFinal(){


    const total =
        calcularTotalReceita();



    const extras =
        calcularCustosExtras(total);



    return {

        custoIngredientes:
            total,


        custosExtras:
            extras,


        custoFinal:
            total + extras

    };


}



// =======================================
// CALCULA CUSTO POR COOKIE
// =======================================


function calcularCustoPorCookie(custoFinal){


    const quantidade =
        valorCampo("quantidadeCookies");



    if(quantidade <= 0){

        return 0;

    }



    return custoFinal / quantidade;


}



// =======================================
// CALCULA PREÇO DE VENDA
// BASEADO NO LUCRO INFORMADO
// =======================================


function calcularPrecoVenda(custoCookie){


    let lucro =
        valorCampo("lucro");



    if(lucro <= 0){

        lucro = 100;

    }



    return custoCookie +
    (custoCookie * lucro / 100);



}



// =======================================
// MONTA O OBJETO COMPLETO DO CÁLCULO
// =======================================


function calcularTudo(){


    const detalhes =
        calcularCustoReceita();



    const custos =
        calcularCustoFinal();



    const custoCookie =
        calcularCustoPorCookie(
            custos.custoFinal
        );



    const precoVenda =
        calcularPrecoVenda(
            custoCookie
        );



    return {


        detalhes,


        custos,


        custoCookie,


        precoVenda


    };


}

// =======================================
// COOKIECOST
// Script principal da aplicação
// PARTE 3/4
// =======================================



// =======================================
// EXIBE RESULTADOS NA TELA
// =======================================


function mostrarResultado(){


    const resultado =
        document.getElementById("resultado");



    if(!resultado){

        return;

    }



    const dados =
        calcularTudo();



    let html = "";



    // -------------------------------
    // DETALHAMENTO DOS INGREDIENTES
    // -------------------------------


    html += `

        <h3>
            📋 Detalhamento dos custos
        </h3>

    `;



    Object.values(dados.detalhes)
    .forEach(item => {


        if(item.total > 0){


            html += `

            <div class="linhaResultado">

                <span>
                    ${item.nome}
                </span>


                <strong>
                    ${moeda(item.total)}
                </strong>


            </div>

            `;


        }


    });



    // -------------------------------
    // RESUMO FINAL
    // -------------------------------


    html += `


    <hr>


    <div class="linhaResultado">

        <span>
            Custo dos ingredientes
        </span>


        <strong>
            ${moeda(
                dados.custos.custoIngredientes
            )}
        </strong>


    </div>



    <div class="linhaResultado">

        <span>
            Custos extras
        </span>


        <strong>
            ${moeda(
                dados.custos.custosExtras
            )}
        </strong>


    </div>



    <div class="linhaResultado total">

        <span>
            Custo total da receita
        </span>


        <strong>
            ${moeda(
                dados.custos.custoFinal
            )}
        </strong>


    </div>



    `;



    // -------------------------------
    // CUSTO POR COOKIE
    // -------------------------------


    const quantidadeCookies =
        valorCampo(
            "quantidadeCookies"
        );



    if(quantidadeCookies > 0){


        html += `


        <div class="linhaResultado">


            <span>
                🍪 Custo por cookie
            </span>


            <strong>
                ${moeda(
                    dados.custoCookie
                )}
            </strong>


        </div>



        <div class="linhaResultado precoVenda">


            <span>
                💰 Preço sugerido
            </span>


            <strong>
                ${moeda(
                    dados.precoVenda
                )}
            </strong>


        </div>


        `;


    }



    resultado.innerHTML = html;


}



// =======================================
// VALIDAÇÃO BÁSICA
// =======================================


function validarDados(){


    let preenchido = false;



    ingredientes.forEach(ingrediente => {


        const quantidade =
            obterQuantidadePacote(
                ingrediente
            );



        const valor =
            obterValorPacote(
                ingrediente
            );



        if(
            quantidade > 0 &&
            valor > 0
        ){

            preenchido = true;

        }


    });



    if(!preenchido){


        alert(
            "Preencha os valores dos ingredientes antes de calcular."
        );


        return false;


    }



    return true;


}



// =======================================
// LIMPA TODOS OS CAMPOS
// =======================================


function limparCampos(){



    const campos =
        document.querySelectorAll(
            "input"
        );



    campos.forEach(campo => {


        if(
            campo.id === "acrescimo"
        ){

            campo.value = 30;


        }

        else if(
            campo.id === "lucro"
        ){

            campo.value = 100;


        }

        else{


            campo.value = "";


        }


    });



    const resultado =
        document.getElementById(
            "resultado"
        );



    if(resultado){


        resultado.innerHTML =
        "<p>Aguardando cálculo...</p>";


    }


}



// =======================================
// EVENTOS DOS BOTÕES
// =======================================



document.addEventListener(
    "DOMContentLoaded",
    () => {



        const btnCalcular =
            document.getElementById(
                "btnCalcular"
            );



        const btnLimpar =
            document.getElementById(
                "btnLimpar"
            );



        if(btnCalcular){


            btnCalcular.addEventListener(
                "click",
                () => {


                    if(
                        validarDados()
                    ){

                        mostrarResultado();


                    }


                }

            );


        }



        if(btnLimpar){


            btnLimpar.addEventListener(
                "click",
                () => {


                    limparCampos();


                }

            );


        }



    }

);

// =======================================
// COOKIECOST
// Script principal da aplicação
// PARTE 4/4
// =======================================



// =======================================
// SALVAMENTO AUTOMÁTICO
// LOCALSTORAGE
// =======================================


function salvarDados(){


    const dados = {};



    const campos =
        document.querySelectorAll(
            "input"
        );



    campos.forEach(campo => {


        dados[campo.id] =
            campo.value;


    });



    localStorage.setItem(

        "cookiecost_dados",

        JSON.stringify(dados)

    );


}



// =======================================
// CARREGAR DADOS SALVOS
// =======================================


function carregarDados(){



    const dadosSalvos =
        localStorage.getItem(
            "cookiecost_dados"
        );



    if(!dadosSalvos){

        return;

    }



    const dados =
        JSON.parse(
            dadosSalvos
        );



    Object.keys(dados)
    .forEach(id => {



        const campo =
            document.getElementById(
                id
            );



        if(campo){


            campo.value =
                dados[id];


        }



    });



}



// =======================================
// LIMPAR DADOS SALVOS
// =======================================


function apagarDadosSalvos(){


    localStorage.removeItem(

        "cookiecost_dados"

    );


}



// =======================================
// OBSERVA ALTERAÇÕES NOS CAMPOS
// E SALVA AUTOMATICAMENTE
// =======================================


function ativarAutoSave(){



    const campos =
        document.querySelectorAll(
            "input"
        );



    campos.forEach(campo => {


        campo.addEventListener(

            "input",

            () => {


                salvarDados();


            }

        );


    });


}



// =======================================
// INICIALIZAÇÃO FINAL DO APLICATIVO
// =======================================


window.addEventListener(

    "load",

    () => {



        carregarDados();



        ativarAutoSave();



    }

);