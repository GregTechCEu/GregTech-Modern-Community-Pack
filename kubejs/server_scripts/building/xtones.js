ServerEvents.recipes((event) => {

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

  createRecipe("#forge:dusts/stone", "agon")
  createRecipe("#forge:dyes/blue", "azur")
  createRecipe("#forge:dusts/coal", "bitt")
  createRecipe("#forge:dusts/clay", "cray")
  createRecipe("#forge:dusts/brick", "fort")
  createRecipe("#forge:dusts/glass", "glaxx")
  createRecipe("#forge:dusts/deepslate", "iszm")
  createRecipe("#forge:dyes/orange", "jelt")
  createRecipe("#forge:dusts/flint", "korp")
  createRecipe("gtceu:fertilizer", "kryp")
  createRecipe("#forge:dusts/netherrack", "lair")
  createRecipe("#forge:dusts/ice", "lave")
  createRecipe("#forge:dyes/lime", "mint")
  createRecipe("#forge:dusts/wood", "myst")
  createRecipe("#forge:dusts/redstone", "reds")
  createRecipe("#forge:dusts/sugar", "reed")
  createRecipe("#forge:dusts/quartz_sand", "roen")
  createRecipe("#forge:dyes/yellow", "sols")
  createRecipe("#forge:dyes/green", "sync")
  createRecipe("#forge:dyes/gray", "tank")
  createRecipe("#forge:dyes/black", "vect")
  createRecipe("#forge:dyes/light_blue", "vena")
  createRecipe("#forge:dusts/clay", "zane")
  createRecipe("#forge:dusts/iron", "zech")
  createRecipe("snowball", "zest")
  createRecipe("string", "zeta")
  createRecipe("#forge:dusts/charcoal", "zion")
  createRecipe("bone", "zkul")
  createRecipe("#forge:dusts/andesite", "zoea")
  createRecipe("#forge:dusts/gunpowder", "zome")
  createRecipe("#forge:dusts/granite", "zone")
  createRecipe("terracotta", "zorg")
  createRecipe("#forge:dyes/light_gray", "ztyl")
  createRecipe("stick", "zyth")

});
