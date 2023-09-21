GTCEuStartupEvents.registry('gtceu:machine', event => {
  event.create('inscriber', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV) //(ID, Type, Voltage Teirs)
  .recipeType('inscriber', true, true)
  .workableTieredHullRenderer(GTCEu.id("block/machines/inscriber"))
})