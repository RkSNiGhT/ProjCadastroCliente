



inputStart();


function CEPSearch() {

    let citestpai = document.getElementById("inputCEP").value;

    let url = `https://viacep.com.br/ws/${citestpai}/json/`;


    $.getJSON(url, (cep) => {

        document.getElementById("inputEndere").value = cep.logradouro;
        document.getElementById("inputBairro").value = cep.bairro;
        document.getElementById("inputCidade").value = cep.localidade;
        document.getElementById("inputEstado").value = cep.estado;

        
        document.getElementById("areaCEP").innerHTML = ``;

        if ("erro" in cep) {

            document.getElementById("inputEndere").value = "";
            document.getElementById("inputBairro").value = "";
            document.getElementById("inputCidade").value = "";
            document.getElementById("inputEstado").value = "";

            document.getElementById("areaCEP").innerHTML = `<div class="alert alert-danger" role="alert"> CEP invalido! </div>`;
        }else{
            document.getElementById("inputNum").innerHTML = `<input id="inputNumero" type="number" class="form-control"></input>`;  
        }


    }).fail(() => {
        document.getElementById("areaCEP").innerHTML = `<div class="alert alert-danger" role="alert"> Error 404!  </div>`;
    });

}
function inputStart() {
    document.getElementById("inputNum").innerHTML = `<input id="inputNumero" type="number" class="form-control" disabled></input>`

}