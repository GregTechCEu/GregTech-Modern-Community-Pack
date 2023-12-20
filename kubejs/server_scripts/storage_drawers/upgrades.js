ServerEvents.recipes((event) => {
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

  // Upgrade 1
  event.shaped("storagedrawers:obsidian_storage_upgrade", ["PTP"], {
    P: "#forge:plates/obsidian",
    T: "storagedrawers:upgrade_template",
  });

  // Upgrade 2
  event.shaped("storagedrawers:iron_storage_upgrade", ["S S", "PTP", "S S"], {
    S: "#forge:rods/iron",
    P: "#forge:plates/iron",
    T: "storagedrawers:upgrade_template",
  });

  // Upgrade 3
  event.shaped("storagedrawers:gold_storage_upgrade", ["S S", "PTP", "S S"], {
    S: "#forge:rods/gold",
    P: "#forge:plates/rose_gold",
    T: "storagedrawers:upgrade_template",
  });

  // Upgrade 4
  event.shaped(
    "storagedrawers:diamond_storage_upgrade",
    ["S S", "PTP", "S S"],
    {
      S: "#forge:rods/stainless_steel",
      P: "#forge:plates/diamond",
      T: "storagedrawers:upgrade_template",
    }
  );

  // Upgrade 5
  event.shaped(
    "storagedrawers:emerald_storage_upgrade",
    ["S S", "PTP", "S S"],
    {
      S: "#forge:rods/titanium",
      P: "#forge:plates/emerald",
      T: "storagedrawers:upgrade_template",
    }
  );
  // Upgrade 5 2
  event.shaped(
    "storagedrawers:emerald_storage_upgrade",
    ["S S", "PTP", "S S"],
    {
      S: "#forge:rods/titanium",
      P: "#forge:plates/olivine",
      T: "storagedrawers:upgrade_template",
    }
  );

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

  // Drawer Key
  event.shaped("storagedrawers:drawer_key", [" BP", "TPP", "Gs "], {
    B: "#forge:bolts/gold",
    T: "storagedrawers:upgrade_template",
    P: "#forge:plates/steel",
    G: "#forge:plates/gold",
    s: "#forge:tools/saws",
  });
});
