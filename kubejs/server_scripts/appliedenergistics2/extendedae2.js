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
      "#gtceu:circuits/hv"
    )
    .circuit(1)
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
      "#gtceu:circuits/hv"
    )
    .circuit(1)
    .itemOutputs("expatternprovider:ex_interface")
    .duration(200)
    .EUt(50);

  // extended upgrades (like thermal)
  event.remove({ id: "expatternprovider:epp_upgrade" });
  greg
    .assembler("extended_pattern_provider_upgrade")
    .itemInputs(
      "4x ae2:engineering_processor",
      "gtceu:soc",
      "#gtceu:circuits/hv"
    )
    .circuit(2)
    .itemOutputs("expatternprovider:pattern_provider_upgrade")
    .duration(180)
    .EUt(50);
  event.remove({ id: "expatternprovider:ei_upgrade" });
  greg
    .assembler("extended_interface_upgrade")
    .itemInputs("4x ae2:logic_processor", "gtceu:soc", "#gtceu:circuits/hv")
    .circuit(2)
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

  event.remove({ id: "expatternprovider:pattern_modifier" });
  event.shaped("expatternprovider:pattern_modifier", ["PDP", "AKB", "PCP"], {
    P: "#forge:plates/ultimet",
    D: "gtceu:computer_monitor_cover",
    A: "ae2:logic_processor",
    K: "#gtceu:circuits/luv",
    B: "ae2:engineering_processor",
    C: "ae2:calculation_processor",
  });


  event.remove({ id: "expatternprovider:ebus_out" })
  greg.assembler("gtceu:ebus_out")
    .itemInputs("2x ae2:export_bus", "2x ae2:speed_card", "#gtceu:circuits/hv")
    .itemOutputs("expatternprovider:ex_export_bus_part")
    .EUt(512).duration(100)

  event.remove({ id: "expatternprovider:ebus_in" })
  greg.assembler("gtceu:ebus_in")
    .itemInputs("2x ae2:import_bus", "2x ae2:speed_card", "#gtceu:circuits/hv")
    .itemOutputs("expatternprovider:ex_import_bus_part")
    .EUt(512).duration(100)

  event.remove({ id: "expatternprovider:epa" });
  event.shaped("expatternprovider:ex_pattern_access_part", ["PL", "Cs"], {
    P: "ae2:pattern_access_terminal",
    L: "ae2:logic_processor",
    C: "#gtceu:circuits/hv",
    s: "#forge:tools/screwdrivers"
  });

  event.remove({ id: "expatternprovider:ebus_upgrade" })
  greg.assembler("gtceu:ebus_upgrade")
    .itemInputs("2x ae2:speed_card", "#gtceu:circuits/hv")
    .itemOutputs("expatternprovider:io_bus_upgrade")
    .circuit(1)
    .EUt(512).duration(100)

  event.remove({ id: "expatternprovider:epa_upgrade" })

  event.remove({ id: "expatternprovider:tape" })
  greg.assembler("gtceu:me_packing_tape")
    .itemInputs("gtceu:duct_tape", "#forge:dusts/fluix")
    .itemOutputs('expatternprovider:me_packing_tape')
    .EUt(120).duration(50)

  event.remove({ id: "expatternprovider:tag_storage_bus" })
  event.shapeless('expatternprovider:tag_storage_bus', ["ae2:storage_bus", "gtceu:item_tag_filter"])

  event.remove({ id: "expatternprovider:tag_export_bus" })
  event.shapeless('expatternprovider:tag_export_bus', ["ae2:export_bus", "gtceu:item_tag_filter"])

  event.remove({ id: "expatternprovider:precise_storage_bus" })
  event.shapeless('expatternprovider:precise_storage_bus', ["ae2:storage_bus", "gtceu:lv_robot_arm"])

  event.remove({ id: "expatternprovider:precise_export_bus" })
  event.shapeless('expatternprovider:precise_export_bus', ["ae2:export_bus", "gtceu:lv_robot_arm"])

  event.remove({ id: "expatternprovider:threshold_export_bus" })
  event.shapeless('expatternprovider:threshold_export_bus', ["ae2:export_bus", "gtceu:item_detector_cover"])

  event.remove({ id: "expatternprovider:ingredient_buffer" })

  event.remove({ id: "expatternprovider:ex_drive" })
  greg.assembler("gtceu:ex_drive")
    .itemInputs("2x ae2:drive", "2x ae2:capacity_card", "#gtceu:circuits/hv")
    .itemOutputs('expatternprovider:ex_drive')
    .EUt(120).duration(200)

  event.remove({ output: "expatternprovider:drive_upgrade" })
  greg.assembler("gtceu:drive_upgrade")
    .itemInputs("2x ae2:capacity_card", "#gtceu:circuits/hv")
    .circuit(1)
    .itemOutputs('expatternprovider:drive_upgrade')
    .EUt(120).duration(200)

  event.remove({ id: "expatternprovider:ex_molecular_assembler" })
  greg.assembler("gtceu:ex_molecular_assembler")
    .itemInputs("3x ae2:molecular_assembler", "2x ae2:capacity_card", "#gtceu:circuits/hv")
    .itemOutputs('expatternprovider:ex_molecular_assembler')
    .EUt(120).duration(200)

  event.remove({ id: "expatternprovider:ex_inscriber" })
  event.remove({ id: "expatternprovider:ex_charger" })
  event.remove({ id: "expatternprovider:crystal_fixer" })
  event.remove({ id: "expatternprovider:caner" })

  event.remove({ id: "expatternprovider:ex_io_port" })
  greg.assembler("gtceu:ex_io_port")
    .itemInputs("2x ae2:io_port", "2x ae2:capacity_card", "ae2:speed_card")
    .itemOutputs('expatternprovider:ex_io_port')
    .EUt(120).duration(200)

  event.remove({ id: "expatternprovider:fishbig" })
  greg.compressor("fishbig")
    .itemInputs("64x minecraft:cookie")
    .itemOutputs("expatternprovider:fishbig")
    .EUt(1).duration(631152000)

  event.remove({ id: "expatternprovider:oversize_interface" });
  event.shaped("expatternprovider:oversize_interface", ["TFT", "EBE", "TAT"], {
    T: "#forge:plates/titanium",
    F: "ae2:formation_core",
    E: "expatternprovider:ex_interface",
    B: "gtceu:hv_buffer",
    A: "ae2:annihilation_core"
  });


  event.remove({ output: "expatternprovider:assembler_matrix_frame" })
  event.remove({ output: "expatternprovider:assembler_matrix_wall" })
  event.remove({ output: "expatternprovider:assembler_matrix_pattern" })
  event.remove({ output: "expatternprovider:assembler_matrix_crafter" })
  event.remove({ output: "expatternprovider:assembler_matrix_speed" })

  event.remove({ output: 'expatternprovider:circuit_cutter' })
  event.remove({ type: 'expatternprovider:circuit_cutter' })

});
