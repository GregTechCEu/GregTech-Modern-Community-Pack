ServerEvents.recipes(event => {
  const greg = event.recipes.gtceu
  // Printed Silicon
  event.remove({id: "ae2:inscriber/silicon_print"})
  greg.forming_press("gtceu:printed_silicon")
    .itemInputs("#forge:plates/silicon")
    .notConsumable("ae2:silicon_press")
    .itemOutputs("ae2:printed_silicon")
    .duration(200).EUt(30)

  // Printed Logic Circuit
  event.remove({id: "ae2:inscriber/logic_processor_print"})
  greg.forming_press("gtceu:printed_logic_processor")
    .itemInputs("#forge:plates/gold")
    .notConsumable("ae2:logic_processor_press")
    .itemOutputs("ae2:printed_logic_processor")
    .duration(200).EUt(30)
  
  // Printed Engineering Circuit
  event.remove({id: "ae2:inscriber/engineering_processor_print"})
  greg.forming_press("gtceu:printed_engineering_processor")
    .itemInputs("#forge:plates/gold")
    .notConsumable("ae2:engineering_processor_press")
    .itemOutputs("ae2:printed_engineering_processor")
    .duration(200).EUt(30)

  // Printed Calculation Circuit
  event.remove({id: "ae2:inscriber/calculation_processor_print"})
  greg.forming_press("gtceu:printed_calculation_processor")
    .itemInputs("#forge:plates/certus_quartz")
    .notConsumable("ae2:calculation_processor_press")
    .itemOutputs("ae2:printed_calculation_processor")
    .duration(200).EUt(30)

  // Logic Processor
  event.remove({id:"ae2:inscriber/logic_processor"})
  greg.circuit_assembler("gtceu:logic_processor")
    .itemInputs("ae2:printed_logic_processor", "ae2:printed_silicon", "#forge:circuits/lv", "#gtceu:resistors", "2x #forge:wires/fine/tin")
    .itemOutputs("4x ae2:logic_processor")
    .duration(200).EUt(30)
  // Engineering Processor
  event.remove({id:"ae2:inscriber/engineering_processor"})
  greg.circuit_assembler("gtceu:engineering_processor")
    .itemInputs("ae2:printed_engineering_processor", "ae2:printed_silicon", "#forge:circuits/lv", "#gtceu:resistors", "2x #forge:wires/fine/tin")
    .itemOutputs("4x ae2:engineering_processor")
    .duration(200).EUt(30)
  // Calculation Processor
  event.remove({id:"ae2:inscriber/calculation_processor"})
  greg.circuit_assembler("gtceu:calculation_processor")
    .itemInputs("ae2:printed_calculation_processor", "ae2:printed_silicon", "#forge:circuits/lv", "#gtceu:resistors", "2x #forge:wires/fine/tin")
    .itemOutputs("4x ae2:calculation_processor")
    .duration(200).EUt(30)
})