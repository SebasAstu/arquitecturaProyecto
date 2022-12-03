let FacturaController = require("../src/adapter/in/facturaController")

const btnS = document.querySelector("#plan-s");
const btnM = document.querySelector("#plan-m");
const btnL = document.querySelector("#plan-l");
const btnAddon = document.querySelector("#addon");

const formAddons= document.querySelector("#form-addon")

const datosSelect=document.querySelector("#addon-datos")
const addOnSocial = document.querySelector("#addon-social");
const addOnVideo = document.querySelector("#addon-video");

const div = document.querySelector("#resultado");
const div2 = document.querySelector("#result");
let factura= new FacturaController();

let total=0;
let plan="";

btnS.addEventListener("click", (event) => {
    event.preventDefault(); 
    plan= "Plan S a medida"
    total+=factura.tipoPlan("Plan S a medida");
    div.innerHTML = total;
    window.open("addOn.html");
});

btnAddon.addEventListener("click", (event) => {
    event.preventDefault();      
    console.log("pagina2")
    total+=factura.precioAddons(plan,datosSelect.value);
    if(addOnSocial.value==="true")
    {
        total+=50
    }
    total+=factura.addonAdicionalCredito(true,addOnVideo.value)
    div2.innerHTML = total;
});