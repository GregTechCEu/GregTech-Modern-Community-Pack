ServerEvents.recipes(event => {
  const greg = event.recipes.gtceu;
  greg.gas_collector("void_air")
    .circuit(4)
    .outputFluids(Fluid.of("gtceu:air", 10000))
    .dimension("javd:void")
    .duration(200).EUt(16);
});
