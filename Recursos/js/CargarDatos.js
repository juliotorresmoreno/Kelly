var Tarifas={"Clasicos":{"ValorHora":20000,"ValorDia":400000},
             "Deportivos":{"ValorHora":25000,"ValorDia":500000},
             "Motos":{"ValorHora":10000,"ValorDia":200000},
              "Conductor":{"ValorHora":5000,ValorDia:80000}};
debugger;
if (!localStorage.Tarifa)
    localStorage.setItem("Tarifas",JSON.stringify(Tarifas));

