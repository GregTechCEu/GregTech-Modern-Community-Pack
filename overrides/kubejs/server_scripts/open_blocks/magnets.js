ServerEvents.recipes((event) => {
  // Worst magnet
  event.remove({ id: "simplemagnets:basicmagnet" });
  event.shaped("simplemagnets:basicmagnet", ["R R", "RwR", "BPB"], {
    R: "#forge:rods/magnetic_steel",
    w: "#forge:tools/wrenches",
    B: "#forge:bolts/tin",
    P: "#forge:plates/steel",
  });
  // King magnet
  event.remove({ output: "simplemagnets:advancedmagnet" });
  event.shaped("simplemagnets:advancedmagnet", ["R R", "RwR", "BPB"], {
    R: "#forge:rods/magnetic_samarium",
    w: "#forge:tools/wrenches",
    B: "#forge:bolts/gold",
    P: "#forge:plates/stainless_steel",
  });
});
