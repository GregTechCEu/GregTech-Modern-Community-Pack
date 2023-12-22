ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  // extended shits
  event.remove({ id: "expatternprovider:epp" });
  greg
    .assembler("extended_pattern_provider")
    .itemInputs(
      "ae2:pattern_provider",
      "4x ae2:engineering_processor",
      "gtceu:soc",
      "#forge:circuits/hv"
    )
    .itemOutputs("expatternprovider:ex_pattern_provider")
    .duration(200)
    .EUt(50);
  event.remove({ id: "expatternprovider:ei" });
  greg
    .assembler("extended_interface")
    .itemInputs(
      "ae2:interface",
      "4x ae2:logic_processor",
      "gtceu:soc",
      "#forge:circuits/hv"
    )
    .itemOutputs("expatternprovider:ex_interface")
    .duration(200)
    .EUt(50);

  // extended thermal upgrade shit
  event.remove({ id: "expatternprovider:epp_upgrade" });
  greg
    .assembler("extended_pattern_provider_upgrade")
    .itemInputs(
      "4x ae2:engineering_processor",
      "gtceu:soc",
      "#forge:circuits/hv"
    )
    .itemOutputs("expatternprovider:pattern_provider_upgrade")
    .duration(180)
    .EUt(50);
  event.remove({ id: "expatternprovider:ei_upgrade" });
  greg
    .assembler("extended_interface_upgrade")
    .itemInputs("4x ae2:logic_processor", "gtceu:soc", "#forge:circuits/hv")
    .itemOutputs("expatternprovider:interface_upgrade")
    .duration(180)
    .EUt(50);

  // infinite cells
  event.remove({ id: "expatternprovider:cobblestone_cell" });
  greg
    .canner("infinite_cobble_cell")
    .itemInputs("ae2:fluid_cell_housing", "gtceu:infinite_water_cover")
    .itemOutputs(
      Item.of(
        "expatternprovider:infinity_cell",
        '{record:{"#c":"ae2:f",id:"minecraft:water"}}'
      )
    )
    .duration(100)
    .EUt(600);
  event.remove({ id: "expatternprovider:water_cell" });
  greg
    .canner("infinite_water_cell")
    .itemInputs("ae2:item_cell_housing", "gtceu:infinite_water_cover")
    .inputFluids("minecraft:lava 5000")
    .itemOutputs(
      Item.of(
        "expatternprovider:infinity_cell",
        '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'
      )
    )
    .duration(100)
    .EUt(600);

  event.remove({ id: "expatternprovider:wireless_connector" });
  greg
    .assembly_line("gtceu:extended_card")
    .itemInputs(
      "gtceu:luv_machine_casing",
      "2x gtceu:luv_sensor",
      "gtceu:luv_emitter",
      "gtceu:quantum_star"
    )
    .inputFluids("gtceu:radon 1000")
    .itemOutputs("2x expatternprovider:wireless_connect")
    .duration(200)
    .EUt(8192);
});
