ServerEvents.recipes((event) => {
  // Portable Cells
  event.remove({ id: "ae2:tools/portable_item_cell_1k" });
  event.shaped("ae2:portable_item_cell_1k", ["BGB", "CHC", "PWP"], {
    B: "#forge:bolts/red_alloy",
    G: "#forge:glass_panes",
    C: "#forge:circuits/ulv",
    H: "#forge:chests/wooden",
    P: "#forge:plates/wrought_iron",
    W: "gtceu:red_alloy_single_cable",
  });
});
