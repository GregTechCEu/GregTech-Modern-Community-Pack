ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  // Printed Silicon
  greg
    .forming_press("printed_silicon_circuit")
    .itemInputs("#forge:plates/silicon")
    .notConsumable("ae2:silicon_press")
    .itemOutputs("ae2:printed_silicon")
    .duration(200)
    .EUt(30);

  // Printed Logic Circuit
  greg
    .forming_press("printed_logic_processor")
    .itemInputs("#forge:plates/gold")
    .notConsumable("ae2:logic_processor_press")
    .itemOutputs("ae2:printed_logic_processor")
    .duration(200)
    .EUt(30);

  // Printed Engineering Circuit
  greg
    .forming_press("printed_engineering_processor")
    .itemInputs("#forge:plates/diamond")
    .notConsumable("ae2:engineering_processor_press")
    .itemOutputs("ae2:printed_engineering_processor")
    .duration(200)
    .EUt(30);

  // Printed Calculation Circuit
  greg
    .forming_press("printed_calculation_circuit")
    .itemInputs("#forge:plates/certus_quartz")
    .notConsumable("ae2:calculation_processor_press")
    .itemOutputs("ae2:printed_calculation_processor")
    .duration(200)
    .EUt(30);
;
});
