ServerEvents.recipes((event) => {
  const dyes = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black",
  ];

  function createRecipe(input1, input2, output, modifier) {
    event.remove({ id: output });
    event.recipes.gtceu
      .mixer(output)
      .itemInputs(input1, input2)
      .itemOutputs(`${modifier}x ${output}`)
      .EUt(2)
      .duration(20);
    event.recipes.gtceu
      .construction_core(output)
      .itemInputs(input1, input2)
      .itemOutputs(`${modifier * 4}x ${output}`)
      .inputFluids("gtceu:construction_foam 100")
      .EUt(8)
      .duration(20);
  }
  // @xtones -Variant

  createRecipe("stone", "cobblestone", "xtonesreworked:xtone_tile", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/stone", "xtonesreworked:agon_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dyes/blue", "xtonesreworked:azur_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/coal", "xtonesreworked:bitt_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/clay", "xtonesreworked:cray_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/brick", "xtonesreworked:fort_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/glass", "xtonesreworked:glaxx_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/deepslate", "xtonesreworked:iszm_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dyes/orange", "xtonesreworked:jelt_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/flint", "xtonesreworked:korp_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "gtceu:fertilizer", "xtonesreworked:kryp_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/netherrack", "xtonesreworked:lair_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/ice", "xtonesreworked:lave_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dyes/lime", "xtonesreworked:mint_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/wood", "xtonesreworked:myst_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/redstone", "xtonesreworked:reds_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/sugar", "xtonesreworked:reed_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/quartz_sand", "xtonesreworked:roen_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dyes/yellow", "xtonesreworked:sols_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dyes/green", "xtonesreworked:sync_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dyes/gray", "xtonesreworked:tank_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dyes/black", "xtonesreworked:vect_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dyes/light_blue", "xtonesreworked:vena_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/clay", "xtonesreworked:zane_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/iron", "xtonesreworked:zech_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "snowball", "xtonesreworked:zest_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "string", "xtonesreworked:zeta_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/charcoal", "xtonesreworked:zion_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "bone", "xtonesreworked:zkul_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/andesite", "xtonesreworked:zoea_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/gunpowder", "xtonesreworked:zome_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dusts/granite", "xtonesreworked:zone_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "terracotta", "xtonesreworked:zorg_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "#forge:dyes/light_gray", "xtonesreworked:ztyl_block_0", 4);
  createRecipe("xtonesreworked:xtone_tile", "stick", "xtonesreworked:zyth_block_0", 4);

  event.remove({id: "xtonesreworked:zane_block_0_alternative"})
  event.remove({id: "xtonesreworked:zone_block_0_alternative"})
  event.remove({id: "xtonesreworked:zoea_block_0_alternative"})
  event.remove({id: "xtonesreworked:zyth_block_0_alternative"})
  event.remove({id: "xtonesreworked:myst_block_0_alternative"})
  event.remove({id: "xtonesreworked:zest_block_0_alternative"})
  event.remove({id: "xtonesreworked:zkul_block_0_alternative"})
  event.remove({id: "xtonesreworked:zome_block_0_alternative"})
  event.remove({id: "xtonesreworked:zion_block_0_alternative"})
  event.remove({id: "xtonesreworked:zorg_block_0_alternative"})
  event.remove({id: "xtonesreworked:zeta_block_0_alternative"})
  event.remove({id: "xtonesreworked:zech_block_0_alternative"})

});
