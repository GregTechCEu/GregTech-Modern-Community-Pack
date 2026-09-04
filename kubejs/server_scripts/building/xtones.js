ServerEvents.recipes((event) => {
  // TODO: FIX
  return;
  // Goodbye
  event.remove({ mod: "xtonesreworked" })

  // Outside of loop until I write a better function
  event.recipes.gtceu
    .mixer("xtonesreworked:xtone_tile")
    .itemInputs("cobblestone", "stone")
    .itemOutputs(`4x xtonesreworked:xtone_tile`)
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("xtonesreworked:xtone_tile")
    .itemInputs("cobblestone", "stone")
    .itemOutputs(`16x xtonesreworked:xtone_tile`)
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);
  event.recipes.gtceu
    .construction_core("xtonesreworked:flat_lamp")
    .itemInputs("xtonesreworked:xtone_tile", "glowstone")
    .itemOutputs(`4x xtonesreworked:flat_lamp`)
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  function createRecipe(input, material) {
    event.recipes.gtceu
      .mixer(`mixing_${material}`)
      .itemInputs("xtonesreworked:xtone_tile", input)
      .itemOutputs(`4x xtonesreworked:${material}_block_0`)
      .EUt(2)
      .duration(20);
    event.recipes.gtceu
      .construction_core(`construction_${material}`)
      .itemInputs("xtonesreworked:xtone_tile", input)
      .itemOutputs(`16x xtonesreworked:${material}_block_0`)
      .inputFluids("gtceu:construction_foam 100")
      .EUt(8)
      .duration(20);
    // And now, we stonecut.
    for (let i = 0; i < 16; i++) {
      event.stonecutting(`xtonesreworked:${material}_block_${i}`, `#xtonesreworked:${material}`)
    }
  }

  // Let the fun begin...

  createRecipe("#c:dusts/stone", "agon")
  createRecipe("#c:dyes/blue", "azur")
  createRecipe("#c:dusts/coal", "bitt")
  createRecipe("#c:dusts/clay", "cray")
  createRecipe("#c:dusts/brick", "fort")
  createRecipe("#c:dusts/glass", "glaxx")
  createRecipe("#c:dusts/deepslate", "iszm")
  createRecipe("#c:dyes/orange", "jelt")
  createRecipe("#c:dusts/flint", "korp")
  createRecipe("gtceu:fertilizer", "kryp")
  createRecipe("#c:dusts/netherrack", "lair")
  createRecipe("#c:dusts/ice", "lave")
  createRecipe("#c:dyes/lime", "mint")
  createRecipe("#c:dusts/wood", "myst")
  createRecipe("#c:dusts/redstone", "reds")
  createRecipe("#c:dusts/sugar", "reed")
  createRecipe("#c:dusts/quartz_sand", "roen")
  createRecipe("#c:dyes/yellow", "sols")
  createRecipe("#c:dyes/green", "sync")
  createRecipe("#c:dyes/gray", "tank")
  createRecipe("#c:dyes/black", "vect")
  createRecipe("#c:dyes/light_blue", "vena")
  createRecipe("#c:ingots/clay", "zane")
  createRecipe("#c:dusts/iron", "zech")
  createRecipe("snowball", "zest")
  createRecipe("string", "zeta")
  createRecipe("#c:dusts/charcoal", "zion")
  createRecipe("bone", "zkul")
  createRecipe("#c:dusts/andesite", "zoea")
  createRecipe("#c:dusts/gunpowder", "zome")
  createRecipe("#c:dusts/granite", "zone")
  createRecipe("terracotta", "zorg")
  createRecipe("#c:dyes/light_gray", "ztyl")
  createRecipe("stick", "zyth")

});
