ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  // Wireless Terminal
  event.remove({ id: "ae2:network/wireless_terminal" });
  event.shaped("ae2:wireless_terminal", ["wRd", "CTC", "KLK"], {
    w: "#c:tools/wrenches",
    R: "ae2:wireless_receiver",
    d: "#c:tools/screwdrivers",
    C: "#gtceu:circuits/hv",
    T: "ae2:terminal",
    K: "ae2:fluix_glass_cable",
    L: "gtceu:lapotron_crystal",
  });
  greg.assembler("gtceu:wireless_terminal")
    .itemInputs("ae2:wireless_receiver", "ae2:terminal", "2x #gtceu:circuits/hv", "2x ae2:fluix_glass_cable")
    .itemOutputs("ae2:wireless_terminal")
    .duration(5 * 20)
    .EUt(GTValues.VA[GTValues.HV]);

  // Wireless Crafting Terminal
  event.remove({ id: "ae2:network/wireless_crafting_terminal" });
  event.remove({ id: "ae2:network/upgrade_wireless_crafting_terminal" });
  event.shaped("ae2:wireless_crafting_terminal", ["TC ", "Kd ", "   "], {
    d: "#c:tools/screwdrivers",
    T: "ae2:wireless_terminal",
    C: "crafting_table",
    K: "ae2:fluix_glass_cable",
  });
  greg.assembler("gtceu:wireless_crafting_terminal")
    .itemInputs("ae2:wireless_terminal", "minecraft:crafting_table", "ae2:fluix_glass_cable")
    .itemOutputs("ae2:wireless_crafting_terminal")
    .duration(10 * 20)
    .EUt(GTValues.VA[GTValues.HV]);

  // ME Storage Bus
  event.remove({ id: "ae2:network/parts/storage_bus" });
  event.shaped("ae2:storage_bus", ["IPC"], {
    I: "ae2:interface",
    P: "gtceu:lv_electric_piston",
    C: "ae2:fluix_glass_cable",
  });

  // ME Import Bus
  event.remove({ id: "ae2:network/parts/import_bus" });
  event.shaped("ae2:import_bus", ["IPC"], {
    I: "ae2:annihilation_core",
    P: "gtceu:lv_robot_arm",
    C: "ae2:fluix_glass_cable",
  });

  // ME Import Bus
  event.remove({ id: "ae2:network/parts/export_bus" });
  event.shaped("ae2:export_bus", ["IPC"], {
    I: "ae2:formation_core",
    P: "gtceu:lv_robot_arm",
    C: "ae2:fluix_glass_cable",
  });

  // ME Formation Plane
  event.remove({ output: "ae2:formation_plane" });
  event.shaped("ae2:formation_plane", ["EFC", "PPP"], {
    E: "gtceu:lv_electric_piston",
    F: "ae2:formation_core",
    C: "#c:gears/fluix",
    P: "#c:plates/steel",
  });

  // ME Formation Plane
  event.remove({ output: "ae2:annihilation_plane" });
  event.shaped("ae2:annihilation_plane", ["EFC", "PPP"], {
    E: "gtceu:lv_electric_piston",
    F: "ae2:annihilation_core",
    C: "#c:gears/fluix",
    P: "#c:plates/steel",
  });

  // ME Terminal
  event.remove({ id: "ae2:network/parts/terminals" });
  event.shaped("ae2:terminal", ["BCB", "xPd", "CDC"], {
    B: "#c:bolts/tin_alloy",
    C: "#gtceu:circuits/lv",
    x: "#c:tools/wire_cutters",
    P: "ae2:semi_dark_monitor",
    d: "#c:tools/screwdrivers",
    D: "#c:double_plates/steel",
  });
  event.shaped("ae2:terminal", ["PB ", "Cd "], {
    B: "ae2:calculation_processor",
    C: "ae2:logic_processor",
    P: "ae2:semi_dark_monitor",
    d: "#c:tools/screwdrivers",
  });
  greg.assembler("gtceu:ae2_terminal")
    .itemInputs("ae2:calculation_processor", "ae2:logic_processor", "ae2:semi_dark_monitor")
    .itemOutputs("ae2:terminal")
    .duration(5 * 20)
    .EUt(GTValues.VA[GTValues.LV]);

  // ME Crafting Terminal
  event.remove({ id: "ae2:network/parts/terminals_crafting" });
  event.shaped("ae2:crafting_terminal", ["PB ", "Cd "], {
    P: "ae2:terminal",
    B: "crafting_table",
    C: "ae2:calculation_processor",
    d: "#c:tools/screwdrivers",
  });
  greg.assembler("gtceu:ae2_crafting_terminal")
    .itemInputs("ae2:terminal", "minecraft:crafting_table", "ae2:calculation_processor")
    .itemOutputs("ae2:crafting_terminal")
    .duration(10 * 20)
    .EUt(GTValues.VA[GTValues.LV]);

  // ME Pattern Terminal
  event.remove({ id: "ae2:network/parts/terminals_pattern_encoding" });
  event.shaped("ae2:pattern_encoding_terminal", ["PB ", "Cd "], {
    P: "ae2:terminal",
    B: "ae2:blank_pattern",
    C: "ae2:engineering_processor",
    d: "#c:tools/screwdrivers",
  });
  greg.assembler("gtceu:ae2_pattern_terminal")
    .itemInputs("ae2:terminal", "ae2:blank_pattern", "ae2:engineering_processor")
    .itemOutputs("ae2:pattern_encoding_terminal")
    .duration(10 * 20)
    .EUt(GTValues.VA[GTValues.LV]);

  // ME Pattern Access Terminal
  event.remove({ id: "ae2:network/parts/terminals_pattern_access" });
  event.shaped("ae2:pattern_access_terminal", ["PB ", "Cd "], {
    P: "ae2:terminal",
    B: "gtceu:polyvinyl_chloride_plate",
    C: "ae2:fluix_glass_cable",
    d: "#c:tools/screwdrivers",
  });
  greg.assembler("gtceu:pattern_access_terminal")
    .itemInputs("ae2:terminal", "gtceu:polyvinyl_chloride_plate", "ae2:fluix_glass_cable")
    .itemOutputs("ae2:pattern_access_terminal")
    .duration(10 * 20)
    .EUt(GTValues.VA[GTValues.LV]);

  // P2P Tunnel
  event.remove({ id: "ae2:network/parts/tunnels_me" });
  event.shaped("2x ae2:me_p2p_tunnel", [" P ", "PEP", "PCP"], {
    P: "#c:plates/tungsten_steel",
    E: "ae2:engineering_processor",
    C: "ae2:fluix_glass_cable",
  });

  // Stonecut p2p tunnels, attunement sucks
  // Written by MatthiasMann
  const p2p = ["redstone", "item", "fluid", "fe", "light"]
  p2p.forEach(type => {
    event.stonecutting("ae2:" + type + "_p2p_tunnel", "ae2:me_p2p_tunnel")
  });
});
