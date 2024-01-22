ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  // 1k storage
  event.remove({ output: "ae2:cell_component_1k" });
  greg
    .assembler("gtceu:1k_component")
    .itemInputs(
      "gtceu:cpu_chip",
      "#forge:plates/certus_quartz",
      "#gtceu:circuits/lv"
    )
    .itemOutputs("ae2:cell_component_1k")
    .duration(200)
    .EUt(30);
  greg
    .assembler("gtceu:1k_component_expensive")
    .itemInputs(
      "16x #gtceu:resistors",
      "#forge:plates/certus_quartz",
      "2x #gtceu:circuits/lv"
    )
    .inputFluids("gtceu:red_alloy 288")
    .itemOutputs("ae2:cell_component_1k")
    .duration(200)
    .EUt(30);

  // 4k storage
  event.remove({ output: "ae2:cell_component_4k" });
  greg
    .assembler("gtceu:4k_component")
    .itemInputs(
      "gtceu:ram_chip",
      "3x ae2:cell_component_1k",
      "#gtceu:circuits/mv"
    )
    .itemOutputs("ae2:cell_component_4k")
    .duration(200)
    .EUt(30);

  // 16k storage
  event.remove({ output: "ae2:cell_component_16k" });
  greg
    .assembler("gtceu:16k_component")
    .itemInputs(
      "gtceu:ulpic_chip",
      "3x ae2:cell_component_4k",
      "#gtceu:circuits/hv"
    )
    .itemOutputs("ae2:cell_component_16k")
    .duration(200)
    .EUt(120);

  // 64k storage
  event.remove({ output: "ae2:cell_component_64k" });
  greg
    .assembler("gtceu:64k_component")
    .itemInputs(
      "gtceu:lpic_chip",
      "3x ae2:cell_component_16k",
      "#gtceu:circuits/ev"
    )
    .itemOutputs("ae2:cell_component_64k")
    .duration(200)
    .EUt(480);

  // 256k storage
  event.remove({ output: "ae2:cell_component_256k" });
  greg
    .assembler("gtceu:256k_component")
    .itemInputs(
      "gtceu:qbit_cpu_chip",
      "3x ae2:cell_component_64k",
      "#gtceu:circuits/iv"
    )
    .itemOutputs("ae2:cell_component_256k")
    .duration(200)
    .EUt(1920);
});
