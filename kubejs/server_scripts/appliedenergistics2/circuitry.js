ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  // Logic Processor
  event.remove({ id: "ae2:inscriber/logic_processor" });
  greg
    .circuit_assembler("gtceu:logic_processor")
    .itemInputs(
      "ae2:printed_logic_processor",
      "ae2:printed_silicon",
      "#gtceu:circuits/lv",
      "#gtceu:resistors",
      "2x #forge:fine_wires/tin"
    )
    .itemOutputs("4x ae2:logic_processor")
    .duration(200)
    .EUt(30);
  // Engineering Processor
  event.remove({ id: "ae2:inscriber/engineering_processor" });
  greg
    .circuit_assembler("gtceu:engineering_processor")
    .itemInputs(
      "ae2:printed_engineering_processor",
      "ae2:printed_silicon",
      "#gtceu:circuits/lv",
      "#gtceu:resistors",
      "2x #forge:fine_wires/tin"
    )
    .itemOutputs("4x ae2:engineering_processor")
    .duration(200)
    .EUt(30);
  // Calculation Processor
  event.remove({ id: "ae2:inscriber/calculation_processor" });
  greg
    .circuit_assembler("gtceu:calculation_processor")
    .itemInputs(
      "ae2:printed_calculation_processor",
      "ae2:printed_silicon",
      "#gtceu:circuits/lv",
      "#gtceu:resistors",
      "2x #forge:fine_wires/tin"
    )
    .itemOutputs("4x ae2:calculation_processor")
    .duration(200)
    .EUt(30);
});
