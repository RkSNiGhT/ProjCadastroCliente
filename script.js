
let Clientes = [{
    id: 1,
    nome: "Roberto",
    endereço: "Rua Jacinto, 115",
    cep: "Indaiatuba - SP"
}];
let uf;
//-----------Load in start-------
inputStart();

//-----------On blur function---------
function CEPSearch() {

    let citestpai = document.getElementById("inputCEP").value;

    let url = `https://viacep.com.br/ws/${citestpai}/json/`;


    $.getJSON(url, (cep) => {
        preencherdados(cep);
        if ("erro" in cep) {
            cepinvalido();
        } else {
            document.getElementById("inputNum").innerHTML = `<input id="inputNumero" type="number" class="form-control" required></input>`;
        }
    }).fail(() => {
        document.getElementById("areaCEP").innerHTML = `<div class="alert alert-danger" role="alert"> Error 404!  </div>`;
    });

}
//---------------Button Adicionar--------
function add() {

    let cli = {
        id: Clientes.length + 1,
        nome: document.getElementById("inputNome").value +       " "   + document.getElementById("inputSobrenome").value,
        endereço: document.getElementById("inputEndere").value + ", "  + document.getElementById("inputNumero").value,
        cep: document.getElementById("inputEstado").value +      " - " + uf
    };

    addNewRow(cli);
    Clientes.push(cli);

    document.getElementById("some-form").reset();
    inputNumStart();
    /**const form = document.getElementById('some-form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        console.log('Deu certo')
    })**/

}
//------------Load Clientes-------
function inputStart() {
    inputNumStart();

    for (let cli of Clientes) {
        addNewRow(cli);
    }

}
//---------Inicio do main---------
function preencherdados(cep) {
    uf = cep.uf;

    document.getElementById("inputEndere").value = cep.logradouro;
    document.getElementById("inputBairro").value = cep.bairro;
    document.getElementById("inputCidade").value = cep.localidade;
    document.getElementById("inputEstado").value = cep.estado;


    document.getElementById("areaCEP").innerHTML = ``;
}
function cepinvalido() {
    document.getElementById("inputEndere").value = "";
    document.getElementById("inputBairro").value = "";
    document.getElementById("inputCidade").value = "";
    document.getElementById("inputEstado").value = "";

    document.getElementById("areaCEP").innerHTML = `<div class="alert alert-danger" role="alert"> CEP invalido! </div>`;
}

function inputNumStart() {
    document.getElementById("inputNum").innerHTML = `<input id="inputNumero" type="number" class="form-control" disabled></input>`
}
//-----------Termino do main--------

function addNewRow(cli) {
    let table = document.getElementById("tableClientes");
    let newRow = table.insertRow();

    let idNode = document.createTextNode(cli.id);
    newRow.insertCell().appendChild(idNode);
    let nomeNode = document.createTextNode(cli.nome);
    newRow.insertCell().appendChild(nomeNode);
    let endereçoNode = document.createTextNode(cli.endereço);
    newRow.insertCell().appendChild(endereçoNode);
    let cepNode = document.createTextNode(cli.cep);
    newRow.insertCell().appendChild(cepNode);
}