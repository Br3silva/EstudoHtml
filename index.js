
var teste2 = document.forms.namedItem("form");

cadastro.addEventListener("click", e =>{

e.preventDefault();

const teste = new teste(


cadastro.cliente.value,
cadastro.empresa.value,


);
console.log(teste);

});

function teste(cliente,empresa){



this.cliente = cliente;
this.empresa = empresa;


}