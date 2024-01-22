ServerEvents.recipes((event) => {
  // Worst magnet
  event.remove({ id: "simplemagnets:basicmagnet" });
  event.shapeless("gtceu:lv_item_magnet", "simplemagnets:basicmagnet");
  // King magnet
  event.remove({ output: "simplemagnets:advancedmagnet" });
  event.shapeless("gtceu:hv_item_magnet", "simplemagnets:advancedmagnet");

  event.remove({id: "simplemagnets:basic_demagnetization_coil"})
  event.remove({id: "simplemagnets:advanced_demagnetization_coil"})
});
