ServerEvents.recipes((event) => {
  event.remove({
    not: [
      { id: "storagedrawers:personal_key" },
      { id: "storagedrawers:personal_key_cycle" },
      { id: "storagedrawers:priority_key" },
      { id: "storagedrawers:quantify_key" },
      { id: "storagedrawers:suspend_key" },
      { id: "storagedrawers:shroud_key" },
      { id: "storagedrawers:keybutton_conscealment" },
      { id: "storagedrawers:keybutton_drawer" },
      { id: "storagedrawers:keybutton_quantify" }
    ], 
    mod: "storagedrawers" 
  });

  event.remove({ mod: "gtstoragedrawers" });
  // Upgrade Template
  event.shaped("storagedrawers:upgrade_template", ["SPS", "SWS", " d "], {
    S: "#forge:screws/iron",
    P: "gtceu:lv_electric_piston",
    W: "#minecraft:planks",
    d: "#forge:tools/screwdrivers",
  });
  event.recipes.gtceu
    .assembler("upgrade_template")
    .itemInputs(
      "2x #forge:screws/iron",
      "gtceu:lv_electric_piston",
      "#minecraft:planks"
    )
    .itemOutputs("storagedrawers:upgrade_template")
    .duration(60)
    .EUt(24);

  // Storage Upgrade lvl 1
  event.shaped("storagedrawers:obsidian_storage_upgrade", ["PTP"], {
    P: "#forge:plates/obsidian",
    T: "storagedrawers:upgrade_template",
  });

  // Storage Upgrades lvl 2+
  // rod material, plate material, upgrade name
  const upgrades = [
    {rod_mat: "bronze", plate_mat: "copper", upgrade: "copper"},
    {rod_mat: "steel", plate_mat: "wrought_iron", upgrade: "iron"},
    {rod_mat: "gold", plate_mat: "rose_gold", upgrade: "gold"},
    {rod_mat: "aluminium", plate_mat: "emerald", upgrade: "emerald"},
    {rod_mat: "aluminium", plate_mat: "olivine", upgrade: "emerald"},
    {rod_mat: "stainless_steel", plate_mat: "diamond", upgrade: "diamond"},
    {rod_mat: "titanium", plate_mat: "black_steel", upgrade: "netherite"},
  ];

  upgrades.forEach((e) => {
    event.shaped(`storagedrawers:${e.upgrade}_storage_upgrade`, ["S S", "PTP", "S S"], {
      S: `#forge:rods/${e.rod_mat}`,
      P: `#forge:plates/${e.plate_mat}`,
      T: "storagedrawers:upgrade_template",
    });
  });

  // Storage Downgrade
  event.shaped("storagedrawers:one_stack_upgrade", ["PTP"], {
    P: "flint",
    T: "storagedrawers:upgrade_template",
  });

  // Void Upgrade
  event.shaped("storagedrawers:void_upgrade", ["PPP", "PTP", "PPP"], {
    P: "#forge:plates/obsidian",
    T: "storagedrawers:upgrade_template",
  });

  // Illumination Upgrade
  event.shaped("storagedrawers:illumination_upgrade", ["GTG"], {
    G: "minecraft:glowstone",
    T: "storagedrawers:upgrade_template"
  });

  // Balance Upgrade
  event.shaped("storagedrawers:balance_fill_upgrade", ["P P", "CTC"], {
    P: "gtceu:tin_small_item_pipe",
    C: "gtceu:lv_conveyor_module",
    T: "storagedrawers:upgrade_template"
  });
  
  // Hopper Upgrade
  event.shaped("storagedrawers:hopper_upgrade", ["P", "C", "T"], {
    P: "gtceu:tin_large_item_pipe",
    C: "gtceu:lv_conveyor_module",
    T: "storagedrawers:upgrade_template",
  });

  // Magnet Upgrades
  for (let i = 1; i <= 3; i++) {
    let sd_tier = "";
    if (i > 1) {
      sd_tier = `_${i}`;
    }
    let gt_tier = GTValues.VN[i].toLowerCase();
    event.shaped(`storagedrawers:magnet_upgrade${sd_tier}`, ["RCR", "RTR"], {
      R: "#forge:rods/steel",
      C: `gtceu:${gt_tier}_item_collector`,
      T: "storagedrawers:upgrade_template",
    });
  }

  // Remote Upgrade
  event.shaped("storagedrawers:remote_upgrade", [" C ", "ETE"], {
    C: "#gtceu:circuits/lv",
    E: "gtceu:lv_emitter",
    T: "storagedrawers:upgrade_template",
  });

  // Remote Group Upgrade
  event.shaped("storagedrawers:remote_group_upgrade", [" E", "CT", " E"], {
    C: "#gtceu:circuits/lv",
    E: "gtceu:lv_emitter",
    T: "storagedrawers:upgrade_template",
  });

  // Conversion recipes
  event.shapeless("storagedrawers:remote_group_upgrade", ["storagedrawers:remote_upgrade"]);
  event.shapeless("storagedrawers:remote_upgrade", ["storagedrawers:remote_group_upgrade"]);

  // Drawer Key
  event.shaped("storagedrawers:drawer_key", [" BP", "TPP", "Gs "], {
    B: "#forge:bolts/gold",
    T: "storagedrawers:upgrade_template",
    P: "#forge:plates/steel",
    G: "#forge:plates/gold",
    s: "#forge:tools/saws",
  });

  // Keyring
  event.shaped("storagedrawers:keyring", ["HR"], {
    H: "#forge:tools/hammers",
    R: "#forge:rings/iron"
  });

  // Drawer Puller
  event.shaped("storagedrawers:drawer_puller", ["RH"], {
    H: "#forge:tools/hammers",
    R: "#forge:rods/long/iron"
  });

  // Framing Table
  event.shaped("storagedrawers:framing_table", ["FFF", "FSF"], {
    F: "#storagedrawers:trim",
    S: "#forge:tools/saws"
  });
});
