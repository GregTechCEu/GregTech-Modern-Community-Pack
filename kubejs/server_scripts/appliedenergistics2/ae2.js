ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  // quartz glass
  event.remove({ id: "ae2:decorative/quartz_glass" });
  greg
    .alloy_smelter("gtceu:quartz_glass")
    .itemInputs("4x #forge:glass", "5x gtceu:certus_quartz_dust")
    .itemOutputs("4x ae2:quartz_glass")
    .duration(100)
    .EUt(8);

  // vibrant quartz glass
  event.remove({ id: "ae2:decorative/quartz_vibrant_glass" });
  greg
    .alloy_smelter("gtceu:vibrant_quartz_glass")
    .itemInputs("ae2:quartz_glass", "2x minecraft:glowstone_dust")
    .itemOutputs("2x ae2:quartz_vibrant_glass")
    .duration(100)
    .EUt(8);

  // Tiny TNT
  event.remove({ id: "ae2:misc/tiny_tnt" });
  greg
    .cutter("gtceu:tiny_tnt")
    .inputFluids("minecraft:water 9000")
    .itemInputs("minecraft:tnt")
    .itemOutputs("4x ae2:tiny_tnt")
    .duration(200)
    .EUt(30);

  // WAP
  event.remove({ id: "ae2:network/wireless_access_point" });
  event.shaped("ae2:wireless_access_point", ["PWP", "RCR", "PFP"], {
    P: "gtceu:titanium_plate",
    W: "ae2:wireless_receiver",
    R: "gtceu:titanium_rod",
    C: "ae2:calculation_processor",
    F: "ae2:fluix_glass_cable",
  });

  /*
  // Security Terminal
  event.remove({id: "ae2:network/blocks/security_station"})
  event.shaped("ae2:security_station", [
    'PCP',
    'KAK',
    'PEP'
  ] , {
    P: "gtceu:iron_plate",
    C: "ae2:chest",
    K: "ae2:fluix_glass_cable",
    A: "ae2:cell_component_16k",
    E: "ae2:engineering_processor"
  })
  */

  // Quantum Ring
  event.remove({ id: "ae2:network/blocks/quantum_ring" });
  event.shaped("2x ae2:quantum_ring", ["PLP", "EHE", "PLP"], {
    P: "gtceu:titanium_plate",
    L: "ae2:logic_processor",
    E: "ae2:engineering_processor",
    H: "gtceu:hv_field_generator",
  });

  // Quantum Link Chamber
  event.remove({ id: "ae2:network/blocks/quantum_link" });
  event.shaped("2x ae2:quantum_link", ["GPG", "PHP", "GPG"], {
    G: "ae2:quartz_glass",
    P: "ae2:fluix_pearl",
    H: "gtceu:hv_field_generator",
  });

  // ME Drive
  event.remove({ id: "ae2:network/blocks/storage_drive" });
  event.shaped("ae2:drive", ["PEP", "KCK", "PEP"], {
    P: "#forge:plates/steel",
    E: "ae2:engineering_processor",
    K: "ae2:fluix_glass_cable",
    C: "#gtceu:circuits/lv",
  });

  // ME Chest
  event.remove({ id: "ae2:network/blocks/storage_chest" });
  event.shaped("ae2:chest", ["GTG", "KCK", "PFP"], {
    G: "ae2:quartz_glass",
    T: "ae2:terminal",
    K: "ae2:fluix_glass_cable",
    C: "#gtceu:circuits/ulv",
    P: "#forge:plates/steel",
    F: "#forge:gems/fluix",
  });

  // Cell Workbench
  event.remove({ id: "ae2:network/blocks/cell_workbench" });
  event.shaped("ae2:cell_workbench", ["FKL", "PCP", "PPP"], {
    F: "gtceu:item_filter",
    K: "ae2:fluix_glass_cable",
    L: "gtceu:fluid_filter",
    P: "#forge:plates/steel",
    C: "#forge:chests/wooden",
  });

  // IO Port
  event.remove({ id: "ae2:network/blocks/io_port" });
  event.shaped("ae2:io_port", ["UGR", "DCD", "PLP"], {
    U: "gtceu:lv_pump",
    G: "#forge:glass",
    R: "gtceu:lv_robot_arm",
    D: "ae2:drive",
    C: "ae2:fluix_glass_cable",
    P: "#forge:plates/steel",
    L: "ae2:logic_processor",
  });

  // Matter Condenser
  event.remove({ id: "ae2:network/blocks/io_condenser" });
  event.shaped("ae2:condenser", ["PCP", "CHC", "PCP"], {
    P: "#forge:plates/stainless_steel",
    C: "gtceu:hv_electric_piston",
    H: "#gtceu:circuits/hv",
  });

  // Energy Acceptor
  event.remove({ id: "ae2:network/blocks/energy_energy_acceptor" });
  event.shaped("ae2:energy_acceptor", ["PFP", "FVF", "PFP"], {
    P: "#forge:plates/steel",
    F: "#forge:plates/fluix",
    V: "gtceu:lv_voltage_coil",
  });

  // Energy Cell
  event.remove({ id: "ae2:network/blocks/energy_energy_cell" });
  event.shaped("ae2:energy_cell", ["SPS", "CGC", "SPS"], {
    S: "gtceu:certus_quartz_gem",
    P: "#forge:plates/certus_quartz",
    C: "gtceu:lv_voltage_coil",
    G: "ae2:quartz_vibrant_glass",
  });

  // Dense Energy Cell
  event.remove({ id: "ae2:network/blocks/energy_dense_energy_cell" });
  greg
    .compressor("gtceu:dense_energy_cell")
    .itemInputs("8x ae2:energy_cell")
    .itemOutputs("ae2:dense_energy_cell")
    .duration(100)
    .EUt(30);

  // Crafting Unit
  event.remove({ id: "ae2:network/crafting/cpu_crafting_unit" });
  event.shaped("ae2:crafting_unit", ["PCP", "KMK", "PLP"], {
    P: "#forge:plates/aluminium",
    C: "ae2:calculation_processor",
    K: "ae2:fluix_glass_cable",
    M: "#gtceu:circuits/mv",
    L: "ae2:logic_processor",
  });

  // Crafting Co-Processing Unit
  event.remove({ id: "ae2:network/crafting/cpu_crafting_accelerator" });
  greg
    .canner("gtceu:ae2_accelerator")
    .itemInputs("ae2:crafting_unit", "ae2:engineering_processor")
    .itemOutputs("ae2:crafting_accelerator")
    .duration(100)
    .EUt(64);

  // 4x Crafting Co-Processing Unit
  event.remove({ id: "mae2:network/crafting/4x_crafting_accelerator" });
  greg
    .assembler("gtceu:4x_crafting_accelerator")
    .itemInputs("3x ae2:crafting_accelerator", "ae2:cell_component_4k", "#gtceu:circuits/hv")
    .itemOutputs("mae2:4x_crafting_accelerator")
    .duration(100)
    .EUt(130);

  // 16x Crafting Co-Processing Unit
  event.remove({ id: "mae2:network/crafting/16x_crafting_accelerator" });
  greg
    .assembler("gtceu:16x_crafting_accelerator")
    .itemInputs("3x mae2:4x_crafting_accelerator", "ae2:cell_component_16k", "#gtceu:circuits/ev")
    .itemOutputs("mae2:16x_crafting_accelerator")
    .duration(100)
    .EUt(520);

  // 64x Crafting Co-Processing Unit
  event.remove({ id: "mae2:network/crafting/64x_crafting_accelerator" });
  greg
    .assembler("gtceu:64x_crafting_accelerator")
    .itemInputs("3x mae2:16x_crafting_accelerator", "ae2:cell_component_64k", "#gtceu:circuits/iv")
    .itemOutputs("mae2:64x_crafting_accelerator")
    .duration(100)
    .EUt(2080);

  // 256x Crafting Co-Processing Unit
  event.remove({ id: "mae2:network/crafting/256x_crafting_accelerator" });
  greg
    .assembler("gtceu:256x_crafting_accelerator")
    .itemInputs("3x mae2:64x_crafting_accelerator", "ae2:cell_component_256k", "#gtceu:circuits/luv")
    .itemOutputs("mae2:256x_crafting_accelerator")
    .duration(100)
    .EUt(8320);


  // Crafting Monitor
  event.remove({ id: "ae2:network/crafting/cpu_crafting_monitor" });
  greg
    .canner("gtceu:crafting_monitor")
    .itemInputs("ae2:crafting_unit", "ae2:storage_monitor")
    .itemOutputs("ae2:crafting_monitor")
    .duration(100)
    .EUt(4);

  // Creative Energy Cell
  event.shaped("ae2:creative_energy_cell", ["CCC", "CUC", "CCC"], {
    C: "ae2:dense_energy_cell",
    U: "gtceu:uv_field_generator",
  });

  /*
  // Biometric Card
  event.remove({id: "ae2:tools/network_biometric_card"})
  event.shaped("ae2:biometric_card", [
    'EC ',
    'WP ',
    '   '
  ] , {
    E: "ae2:engineering_processor",
    C: "#gtceu:circuits/lv",
    W: "#forge:fine_wires/gold",
    P: "#forge:plates/iron"
  })
  */

  // Memory Card
  event.remove({ id: "ae2:tools/network_memory_card" });
  event.shaped("ae2:memory_card", ["EC ", "WP ", "   "], {
    E: "ae2:calculation_processor",
    C: "#gtceu:circuits/lv",
    W: "#forge:fine_wires/gold",
    P: "#forge:plates/iron",
  });

  // Network Tool
  event.remove({ id: "ae2:tools/network_tool" });
  event.shaped("ae2:network_tool", ["wC ", "EP ", "   "], {
    w: "#forge:tools/wrenches",
    E: "ae2:calculation_processor",
    C: "#gtceu:circuits/lv",
    P: "#ae2:illuminated_panel",
  });

  // Fluix Dust
  event.remove({ id: "ae2:inscriber/fluix_dust" });
  greg
    .mixer("gtceu:fluix_dust")
    .itemInputs(
      "#forge:dusts/nether_quartz",
      "#forge:dusts/certus_quartz",
      "#forge:dusts/redstone"
    )
    .itemOutputs("3x gtceu:fluix_dust")
    .duration(200)
    .EUt(16);

  // Charged Certus Quartz
  event.remove({ id: "ae2:charger/charged_certus_quartz_crystal" });
  greg
    .polarizer("gtceu:charged_certus_quartz")
    .itemInputs("gtceu:certus_quartz_gem")
    .itemOutputs("ae2:charged_certus_quartz_crystal")
    .duration(100)
    .EUt(16);

  // Fluix Pearl
  event.remove({ id: "ae2:misc/fluixpearl" });
  greg
    .chemical_reactor("gtceu:fluix_pearl")
    .itemInputs("#forge:dusts/fluix", "ender_eye")
    .itemOutputs("ae2:fluix_pearl")
    .duration(200)
    .EUt(480);

  // Wireless Receiver
  event.remove({ id: "ae2:network/wireless_part" });
  event.shaped("ae2:wireless_receiver", ["CPC", "RSR", "   "], {
    C: "#gtceu:circuits/ev",
    P: "ae2:fluix_pearl",
    R: "#forge:rods/titanium",
    S: "gtceu:hv_sensor",
  });

  // Annihilation Core
  event.remove({ id: "ae2:materials/annihilationcore" });
  event.shaped("ae2:annihilation_core", ["CPB"], {
    C: "#gtceu:circuits/ulv",
    P: "ae2:logic_processor",
    B: "#forge:dusts/nether_quartz",
  });
  // Formation Core
  event.remove({ id: "ae2:materials/formationcore" });
  event.shaped("ae2:formation_core", ["CPB"], {
    C: "#gtceu:circuits/ulv",
    P: "ae2:logic_processor",
    B: "#forge:dusts/certus_quartz",
  });

  // Cable Anchor
  event.remove({ id: "ae2:network/parts/cable_anchor" });
  greg
    .extruder("gtceu:cable_anchor")
    .itemInputs("#forge:plates/steel")
    .notConsumable("gtceu:bolt_extruder_mold")
    .itemOutputs("8x ae2:cable_anchor")
    .duration(20)
    .EUt(16);

  // Quartz Fibers
  event.remove({ id: "ae2:network/parts/quartz_fiber_part" });
  greg
    .alloy_smelter("gtceu:quartz_fibers")
    .itemInputs("#forge:dusts/certus_quartz", "ae2:quartz_glass")
    .itemOutputs("2x ae2:quartz_fiber")
    .duration(60)
    .EUt(16);

  //Illuminated Panel
  event.remove({ id: "ae2:network/parts/panels_semi_dark_monitor" });
  event.shaped("ae2:semi_dark_monitor", ["WSG"], {
    W: "#forge:fine_wires/tin",
    S: "gtceu:computer_monitor_cover",
    G: "ae2:quartz_vibrant_glass",
  });
  event.shaped("ae2:semi_dark_monitor", ["mWG", "TCV", "xWG"], {
    m: "#forge:tools/mallets",
    x: "#forge:tools/wire_cutters",
    W: "#forge:fine_wires/copper",
    G: "#forge:plates/glass",
    T: "#forge:fine_wires/tin",
    C: "#gtceu:circuits/lv",
    V: "ae2:quartz_vibrant_glass",
  });

  // Wireless Booster
  event.remove({ id: "ae2:network/wireless_booster" });
  event.shaped("ae2:wireless_booster", ["EC ", "PP "], {
    E: "gtceu:lv_emitter",
    C: "ae2:fluix_glass_cable",
    P: "#forge:plates/steel",
  });

  // Fluix Crystals
  greg
    .autoclave("gtceu:fluix_crystal")
    .itemInputs("gtceu:fluix_dust")
    .inputFluids("water 100")
    .itemOutputs("ae2:fluix_crystal")
    .duration(200)
    .EUt(24);
  greg
    .autoclave("gtceu:fluix_crystal_faster")
    .itemInputs("gtceu:fluix_dust")
    .inputFluids("gtceu:distilled_water 20")
    .itemOutputs("ae2:fluix_crystal")
    .duration(100)
    .EUt(24);


  greg
    .lathe("fluix_lathing")
    .itemInputs("ae2:fluix_crystal")
    .itemOutputs("gtceu:fluix_rod")
    .duration(200)
    .EUt(8);

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
