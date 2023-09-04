ServerEvents.recipes(event => {
  const greg = event.recipes.gtceu
  // Silicon
  event.remove({id: "ae2:inscriber/silicon_press"})
  greg.laser_engraver("gtceu:inscriber_silicon_press")
    .itemInputs("#forge:plates/steel")
    .notConsumable("gtceu:light_blue_glass_lens")
    .itemOutputs("ae2:silicon_press")
    .duration(500).EUt(120)
  // Logic
  event.remove({id: "ae2:inscriber/logic_press"})
  greg.laser_engraver("gtceu:inscriber_logic_press")
    .itemInputs("#forge:plates/steel")
    .notConsumable("gtceu:green_glass_lens")
    .itemOutputs("ae2:logic_processor_press")
    .duration(500).EUt(120)
  // Engineering
  event.remove({id: "ae2:inscriber/engineering_press"})
  greg.laser_engraver("gtceu:inscriber_engineering_press")
    .itemInputs("#forge:plates/steel")
    .notConsumable("gtceu:red_glass_lens")
    .itemOutputs("ae2:engineering_processor_press")
    .duration(500).EUt(120)
  // Calculation
  event.remove({id: "ae2:inscriber/calculation_press"})
  greg.laser_engraver("gtceu:inscriber_calculation_press")
    .itemInputs("#forge:plates/steel")
    .notConsumable("gtceu:glass_lens")
    .itemOutputs("ae2:calculation_processor_press")
    .duration(500).EUt(120)
})