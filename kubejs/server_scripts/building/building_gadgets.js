ServerEvents.recipes((event) => {
  // Building Tool
  event.remove({ output: "buildinggadgets2:gadget_building" });
  event.shaped("buildinggadgets2:gadget_building", ["PLP", "DCD", "PKP"], {
    P: "#c:plates/steel",
    L: "#c:plates/lapis",
    D: "#c:plates/diamond",
    C: "#gtceu:circuits/lv",
    K: "gtceu:tin_single_cable",
  });
  // Exchanging Tool
  event.remove({ output: "buildinggadgets2:gadget_exchanging" });
  event.shaped("buildinggadgets2:gadget_exchanging", ["PLP", "DCD", "PKP"], {
    P: "#c:plates/steel",
    L: "#c:plates/gold",
    D: "#c:plates/diamond",
    C: "#gtceu:circuits/lv",
    K: "gtceu:tin_single_cable",
  });
  // Copy-paste Tool
  event.remove({ output: "buildinggadgets2:gadget_copy_paste" });
  event.shaped("buildinggadgets2:gadget_copy_paste", ["PLP", "DCD", "PKP"], {
    P: "#c:plates/steel",
    L: "#c:plates/redstone",
    D: "#c:plates/emerald",
    C: "#gtceu:circuits/lv",
    K: "gtceu:tin_single_cable",
  });

  // Template Manager
  event.remove({ output: "buildinggadgets2:template_manager" });
  event.shaped("buildinggadgets2:template_manager", ["KCK", "CHC", "KCK"], {
    K: "gtceu:tin_single_cable",
    C: "#gtceu:circuits/lv",
    H: "gtceu:lv_machine_hull",
  });

  // Destruction Gadget
  event.remove({ output: "buildinggadgets2:gadget_destruction" });
  event.shaped("buildinggadgets2:gadget_destruction", ["PLP", "DCD", "PKP"], {
    P: "#c:plates/aluminium",
    L: "#c:plates/nether_quartz",
    D: "#c:plates/ender_pearl",
    C: "#gtceu:circuits/mv",
    K: "gtceu:copper_single_cable",
  });

  // Cut 'n' Paste Gadget
  event.remove({ output: "buildinggadgets2:gadget_cut_paste" });
  event.shaped("buildinggadgets2:gadget_cut_paste", ["PLP", "DCD", "PKP"], {
    P: "#c:plates/aluminium",
    L: "#c:plates/lapis",
    D: "gtceu:iron_buzzsaw_blade",
    C: "#gtceu:circuits/mv",
    K: "gtceu:copper_single_cable",
  });
});
