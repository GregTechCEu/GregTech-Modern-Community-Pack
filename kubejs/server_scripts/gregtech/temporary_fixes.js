ServerEvents.recipes((event) => {
  event.recipes.gtceu
    .macerator("obsidian_dust")
    .itemInputs("obsidian")
    .itemOutputs("#forge:dusts/obsidian")
    .EUt(2)
    .duration(25);

  event.remove("gtceu:shaped/compressed_coke_clay");
  event
    .shaped("3x gtceu:compressed_coke_clay", ["CCC", "ScS", "SSS"], {
      C: "clay_ball",
      c: "gtceu:brick_wooden_form",
      S: "#minecraft:sand",
    })
    .keepIngredient("gtceu:brick_wooden_form");
});
