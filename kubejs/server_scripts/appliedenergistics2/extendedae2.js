ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  // extended shits
  event.remove({ id: "extendedae:epp" });
  greg
    .assembler("extended_pattern_provider")
    .itemInputs(
      "ae2:pattern_provider",
      "4x ae2:engineering_processor",
      "gtceu:soc",
      "#gtceu:circuits/hv"
    )
    .circuit(1)
    .itemOutputs("extendedae:ex_pattern_provider")
    .duration(200)
    .EUt(50);
  event.remove({ id: "extendedae:ei" });
  greg
    .assembler("extended_interface")
    .itemInputs(
      "ae2:interface",
      "4x ae2:logic_processor",
      "gtceu:soc",
      "#gtceu:circuits/hv"
    )
    .circuit(1)
    .itemOutputs("extendedae:ex_interface")
    .duration(200)
    .EUt(50);

  // extended upgrades (like thermal)
  event.remove({ id: "extendedae:epp_upgrade" });
  greg
    .assembler("extended_pattern_provider_upgrade")
    .itemInputs(
      "4x ae2:engineering_processor",
      "gtceu:soc",
      "#gtceu:circuits/hv"
    )
    .circuit(2)
    .itemOutputs("extendedae:pattern_provider_upgrade")
    .duration(180)
    .EUt(50);
  event.remove({ id: "extendedae:ei_upgrade" });
  greg
    .assembler("extended_interface_upgrade")
    .itemInputs("4x ae2:logic_processor", "gtceu:soc", "#gtceu:circuits/hv")
    .circuit(2)
    .itemOutputs("extendedae:interface_upgrade")
    .duration(180)
    .EUt(50);

  // infinite cells
  event.remove({ id: "extendedae:water_cell" });
  greg
    .canner("infinite_water_cell")
    .itemInputs("ae2:fluid_cell_housing", "gtceu:infinite_water_cover")
    .itemOutputs("extendedae:infinity_water_cell")
    .duration(100)
    .EUt(600);
  event.remove({ id: "extendedae:cobblestone_cell" });
  greg
    .canner("infinite_cobblestone_cell")
    .itemInputs("ae2:item_cell_housing", "gtceu:infinite_water_cover")
    .inputFluids("minecraft:lava 5000")
    .itemOutputs("extendedae:infinity_cobblestone_cell")
    .duration(100)
    .EUt(600);

  event.remove({ id: "extendedae:wireless_connector" });
  greg
    .assembly_line("gtceu:extended_card")
    .itemInputs(
      "gtceu:luv_machine_casing",
      "2x gtceu:luv_sensor",
      "gtceu:luv_emitter",
      "gtceu:quantum_star"
    )
    .inputFluids("gtceu:radon 1000")
    .itemOutputs("2x extendedae:wireless_connect")
    .duration(200)
    .EUt(8192);

  event.remove({ id: "extendedae:pattern_modifier" });
  event.shaped("extendedae:pattern_modifier", ["PDP", "AKB", "PCP"], {
    P: "#c:plates/ultimet",
    D: "gtceu:computer_monitor_cover",
    A: "ae2:logic_processor",
    K: "#gtceu:circuits/luv",
    B: "ae2:engineering_processor",
    C: "ae2:calculation_processor",
  });


  event.remove({ id: "extendedae:ebus_out" })
  greg.assembler("gtceu:ebus_out")
    .itemInputs("2x ae2:export_bus", "2x ae2:speed_card", "#gtceu:circuits/hv")
    .itemOutputs("extendedae:ex_export_bus_part")
    .EUt(512).duration(100)

  event.remove({ id: "extendedae:ebus_in" })
  greg.assembler("gtceu:ebus_in")
    .itemInputs("2x ae2:import_bus", "2x ae2:speed_card", "#gtceu:circuits/hv")
    .itemOutputs("extendedae:ex_import_bus_part")
    .EUt(512).duration(100)

  event.remove({ id: "extendedae:epa" });
  event.shaped("extendedae:ex_pattern_access_part", ["PL", "Cs"], {
    P: "ae2:pattern_access_terminal",
    L: "ae2:logic_processor",
    C: "#gtceu:circuits/hv",
    s: "#c:tools/screwdrivers"
  });
  greg.assembler("gtceu:exae2_pattern_access")
    .itemInputs("ae2:pattern_access_terminal", "#gtceu:circuits/hv", "ae2:logic_processor")
    .itemOutputs("extendedae:ex_pattern_access_part")
    .duration(10 * 20)
    .EUt(GTValues.VA[GTValues.HV]);

  event.remove({ id: "extendedae:ebus_upgrade" })
  greg.assembler("gtceu:ebus_upgrade")
    .itemInputs("2x ae2:speed_card", "#gtceu:circuits/hv")
    .itemOutputs("extendedae:io_bus_upgrade")
    .circuit(1)
    .EUt(512).duration(100)

  event.remove({ id: "extendedae:epa_upgrade" })

  event.remove({ id: "extendedae:tape" })
  greg.assembler("gtceu:me_packing_tape")
    .itemInputs("gtceu:duct_tape", "#c:dusts/fluix")
    .itemOutputs('extendedae:me_packing_tape')
    .EUt(120).duration(50)

  event.remove({ id: "extendedae:tag_storage_bus" })
  event.shapeless('extendedae:tag_storage_bus', ["ae2:storage_bus", "gtceu:item_tag_filter"])

  event.remove({ id: "extendedae:tag_export_bus" })
  event.shapeless('extendedae:tag_export_bus', ["ae2:export_bus", "gtceu:item_tag_filter"])

  event.remove({ id: "extendedae:precise_storage_bus" })
  event.shapeless('extendedae:precise_storage_bus', ["ae2:storage_bus", "gtceu:lv_robot_arm"])

  event.remove({ id: "extendedae:precise_export_bus" })
  event.shapeless('extendedae:precise_export_bus', ["ae2:export_bus", "gtceu:lv_robot_arm"])

  event.remove({ id: "extendedae:threshold_export_bus" })
  event.shapeless('extendedae:threshold_export_bus', ["ae2:export_bus", "gtceu:item_detector_cover"])

  event.remove({ id: "extendedae:ingredient_buffer" })

  event.remove({ id: "extendedae:ex_drive" })
  greg.assembler("gtceu:ex_drive")
    .itemInputs("2x ae2:drive", "2x ae2:capacity_card", "#gtceu:circuits/hv")
    .itemOutputs('extendedae:ex_drive')
    .EUt(120).duration(200)

  event.remove({ output: "extendedae:drive_upgrade" })
  greg.assembler("gtceu:drive_upgrade")
    .itemInputs("2x ae2:capacity_card", "#gtceu:circuits/hv")
    .circuit(1)
    .itemOutputs('extendedae:drive_upgrade')
    .EUt(120).duration(200)

  event.remove({ id: "extendedae:ex_molecular_assembler" })
  greg.assembler("gtceu:ex_molecular_assembler")
    .itemInputs("3x ae2:molecular_assembler", "2x ae2:capacity_card", "#gtceu:circuits/hv")
    .itemOutputs('extendedae:ex_molecular_assembler')
    .EUt(120).duration(200)

  event.remove({ id: "extendedae:ex_inscriber" })
  event.remove({ id: "extendedae:ex_charger" })
  event.remove({ id: "extendedae:crystal_fixer" })
  event.remove({ id: "extendedae:caner" })

  event.remove({ id: "extendedae:ex_io_port" })
  greg.assembler("gtceu:ex_io_port")
    .itemInputs("2x ae2:io_port", "2x ae2:capacity_card", "ae2:speed_card")
    .itemOutputs('extendedae:ex_io_port')
    .EUt(120).duration(200)

  event.remove({ id: "extendedae:fishbig" })
  greg.compressor("fishbig")
    .itemInputs("64x minecraft:cookie")
    .itemOutputs("extendedae:fishbig")
    .EUt(1).duration(631152000)

  event.remove({ id: "extendedae:oversize_interface" });
  event.shaped("extendedae:oversize_interface", ["TFT", "EBE", "TAT"], {
    T: "#c:plates/titanium",
    F: "ae2:formation_core",
    E: "extendedae:ex_interface",
    B: "gtceu:hv_buffer",
    A: "ae2:annihilation_core"
  });


  event.remove({ output: "extendedae:assembler_matrix_frame" })
  event.remove({ output: "extendedae:assembler_matrix_wall" })
  event.remove({ output: "extendedae:assembler_matrix_pattern" })
  event.remove({ output: "extendedae:assembler_matrix_crafter" })
  event.remove({ output: "extendedae:assembler_matrix_speed" })

  event.remove({ output: 'extendedae:circuit_cutter' })
  event.remove({ type: 'extendedae:circuit_cutter' })

});
