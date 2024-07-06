ServerEvents.recipes((event) => {

  const greg = event.recipes.gtceu;

  event.remove({ output: "gtceu:fluid_voiding_cover" });
  event.remove({ id: "gtceu:macerator/macerate_fluid_voiding_cover" });
  greg
    .assembler("fluid_voiding_cover")
    .itemInputs(
      "2x #forge:screws/steel",
      "gtceu:fluid_detector_cover",
      "gtceu:bronze_normal_fluid_pipe"
    )
    .itemOutputs("gtceu:fluid_voiding_cover")
    .duration(100)
    .EUt(30);

  event.remove({ output: "gtceu:item_voiding_cover" });
  event.remove({ id: "gtceu:macerator/macerate_item_voiding_cover" });
  greg
    .assembler("item_voiding_cover")
    .itemInputs("2x #forge:screws/steel", "gtceu:item_detector_cover", "hopper")
    .itemOutputs("gtceu:item_voiding_cover")
    .duration(100)
    .EUt(30);
});
