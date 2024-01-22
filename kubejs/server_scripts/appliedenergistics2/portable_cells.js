ServerEvents.recipes((event) => {
  // Portable Cells
  event.remove({ id: "ae2:tools/portable_item_cell_1k" });
  event.shaped(
    Item.of("ae2:portable_item_cell_1k", "{internalCurrentPower:200000.0d}"),
    ["BGB", "CHC", "PWP"],
    {
      B: "#forge:bolts/red_alloy",
      G: "minecraft:glass",
      C: "#gtceu:circuits/ulv",
      H: "#forge:chests/wooden",
      P: "#forge:plates/wrought_iron",
      W: "gtceu:red_alloy_single_cable",
    }
  );
  event.remove({ id: "ae2:tools/portable_item_cell_4k" });
  event.shaped("ae2:portable_item_cell_4k", ["BGB", "CHC", "PWP"], {
    B: "#forge:bolts/invar",
    G: "ae2:quartz_glass",
    C: "#gtceu:circuits/lv",
    H: "gtceu:steel_crate",
    P: "#forge:plates/black_steel",
    W: "gtceu:tin_single_cable",
  });
  event.remove({ id: "ae2:tools/portable_item_cell_16k" });
  event.shaped("ae2:portable_item_cell_16k", ["BGB", "CHC", "PWP"], {
    B: "#forge:bolts/rose_gold",
    G: "gtceu:tempered_glass",
    C: "#gtceu:circuits/mv",
    H: "gtceu:aluminium_crate",
    P: "#forge:plates/vanadium_steel",
    W: "gtceu:annealed_copper_single_cable",
  });
  event.remove({ id: "ae2:tools/portable_item_cell_64k" });
  event.shaped("ae2:portable_item_cell_64k", ["BGB", "CHC", "PWP"], {
    B: "#forge:bolts/blue_alloy",
    G: "gtceu:cleanroom_glass",
    C: "#gtceu:circuits/hv",
    H: "gtceu:stainless_steel_crate",
    P: "#forge:plates/blue_steel",
    W: "gtceu:kanthal_single_cable",
  });
  event.remove({ id: "ae2:tools/portable_item_cell_256k" });
  event.shaped("ae2:portable_item_cell_256k", ["BGB", "CHC", "PWP"], {
    B: "#forge:bolts/platinum",
    G: "gtceu:laminated_glass",
    C: "#gtceu:circuits/ev",
    H: "gtceu:titanium_crate",
    P: "#forge:plates/tungsten",
    W: "gtceu:black_steel_single_cable",
  });
});
