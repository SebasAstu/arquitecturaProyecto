let FacturaController = require("../src/facturaController")

describe("manejador de factura", () => {

    let f = new FacturaController();

    it("deberia devolver el precio del tipo de plan elegido (PLAN WAO)", () => {
        const resultado1 = f.tipoPlan("PLAN WAO")
        expect(resultado1).toEqual(200);
      });

      it("deberia devolver el precio del tipo de plan elegido (PREPAGO LIBRE)", () => {
        const resultado1 = f.tipoPlan("PREPAGO LIBRE")
        expect(resultado1).toEqual(1.70);
      });  

      it("deberia devolver los megas del addOn elegido", () => {
        const resultado1 = f.cantMegasAddons("Plan M a medida","DATOS XS")
        expect(resultado1).toEqual(400);
      });  

      it("deberia devolver los minutos adicionales disponibles de un addon", () => {
        const resultado1 = f.addonsMinuto("S")
        expect(resultado1).toEqual(60);
      });

      it("deberia devolver el precio de los minutos adicionales disponibles de un addon", () => {
        const resultado1 = f.addonAdicionalCredito(true,"Youtube")
        expect(resultado1).toEqual(50);
      });

      it("deberia devolver el precio del addon elegido", () => {
        const resultado1 = f.precioAddons("Plan M a medida","DATOS M")
        expect(resultado1).toEqual(82);
      });

      it("deberia devolver el costo total del servicio", () => {
        const resultado1 = f.costoTotal("Plan M a medida","DATOS M","Youtube",true)
        expect(resultado1).toEqual(232);
      });
});