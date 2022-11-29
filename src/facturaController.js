class FacturaController {

    cantMegasAddons(plan,addon){
        let megas=0;
        if(plan === "Plan S a medida" || plan === "Plan M a medida" || plan === "Plan L a medida"){
            switch(addon){
                case "DATOS S":
                    megas = 1200; 
                    break;
                case "DATOS M":
                    megas = 4200; 
                    break;
                case "DATOS L":
                    megas = 7200; 
                    break;
                case "DATOS XL":
                    megas = 13700; 
                    break;
                case "DATOS XXL":
                    megas = 23200; 
                    break;
                case "DATOS XS":
                    megas = 400; 
                    break;
            }
        }
        return megas;
    }

    addonsMinuto(addon){
        let minutos=0;

        switch (addon)
            {
                case "S":
                    minutos = 60; 
                    break;
                case "M":
                    minutos = 120; 
                    break;
            }
            return minutos;
    }

    tipoPlan(plan){
        let precio=0;

        switch (plan)
            {
                case "PREPAGO LIBRE":
                    precio = 1.70; 
                    break;
                case "PREPAGO FAMILIA":
                    precio = 1.70; 
                    break;
                case "PLAN WAO":
                    precio = 200; 
                    break;
                case "Plan S a medida":
                    precio = 50; 
                    break;
                case "Plan M a medida":
                    precio = 100; 
                    break;
                case "Plan L a medida":
                    precio = 150; 
                    break;
            }
        return precio;
    }

    addonAdicionalCredito(existe,addon){
        let precio=0;

        if(existe=true){
            switch (addon)
            {
                case "M":
                    precio = 20; 
                    break;
                case "L":
                    precio = 50; 
                    break;
                case "XL":
                    precio = 80; 
                    break;
                case "Youtube":
                    precio = 50;
                    break;
                case "Vimeo":
                    precio = 50;
                    break;
            }
        }
        return precio;
    }

    precioAddons(plan, addon){
        let precio=0;

        if(plan === "Plan S a medida" || plan === "Plan M a medida" || plan === "Plan L a medida"){
            switch (addon)
            {
                case "DATOS XS":
                    precio = 10; 
                    break;
                case "DATOS S":
                    precio = 33; 
                    break;
                case "DATOS M":
                    precio = 82; 
                    break;
                case "DATOS L":
                    precio = 112; 
                    break;
                case "DATOS XL":
                    precio = 212; 
                    break;
                case "DATOS XXL":
                     precio = 353; 
                    break;
            }
        }
        return precio;
    }

    costoTotal(plan,addon,adicional,existe)
    {
        let valorPlan=this.tipoPlan(plan);
        let valorAddpn= this.precioAddons(plan,addon);
        let valorAddonCredito = this.addonAdicionalCredito(existe,adicional);
        return valorPlan+valorAddpn+valorAddonCredito;
    }
}
module.exports= FacturaController;