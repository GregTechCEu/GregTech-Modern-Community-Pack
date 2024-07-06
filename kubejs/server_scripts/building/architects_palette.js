ServerEvents.recipes((event) => {
  event.remove({ output: "architects_palette:charcoal_block" });

  event.remove({ output: "architects_palette:abyssaline" });
  event.recipes.gtceu
    .mixer("abyssaline")
    .itemInputs("gtceu:obsidian_dust", "minecraft:prismarine_shard")
    .itemOutputs("2x architects_palette:abyssaline")
    .EUt(2)
    .duration(20);

  event.recipes.gtceu
    .construction_core("abyssaline")
    .itemInputs("gtceu:obsidian_dust", "minecraft:prismarine_shard")
    .itemOutputs("12x architects_palette:abyssaline")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:plating_block" });
  event.recipes.gtceu
    .assembler("plating_block")
    .itemInputs("4x #forge:plates/iron")
    .itemOutputs("4x architects_palette:plating_block")
    .circuit(10)
    .EUt(2)
    .duration(20);

  event.recipes.gtceu
    .construction_core("plating_block")
    .itemInputs("4x #forge:plates/iron")
    .itemOutputs("16x architects_palette:plating_block")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ output: "architects_palette:myonite" });
  event.recipes.gtceu
    .mixer("myonite")
    .itemInputs("minecraft:stone", "#forge:mushrooms")
    .itemOutputs("4x architects_palette:myonite")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("myonite")
    .itemInputs("minecraft:stone", "#forge:mushrooms")
    .itemOutputs("16x architects_palette:myonite")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(2)
    .duration(20);

  event.remove({ output: "architects_palette:olivestone_bricks" });
  event.recipes.gtceu
    .mixer("olivestone_bricks")
    .itemInputs("minecraft:stone", "#forge:dyes/green")
    .itemOutputs("4x architects_palette:olivestone_bricks")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("olivestone_bricks")
    .itemInputs("minecraft:stone", "#forge:dyes/green")
    .itemOutputs("16x architects_palette:olivestone_bricks")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(2)
    .duration(20);

  event.remove({ id: "architects_palette:illuminated_olivestone" });
  event.recipes.gtceu
    .mixer("illuminated_olivestone")
    .itemInputs("#architects_palette:olivestone", "minecraft:glowstone")
    .itemOutputs("architects_palette:illuminated_olivestone")
    .EUt(2)
    .duration(20);

  event.remove({ id: "architects_palette:overgrown_algal_bricks" });
  event.recipes.gtceu
    .mixer("overgrown_algal_bricks")
    .itemInputs("architects_palette:algal_bricks", "minecraft:kelp")
    .itemOutputs("architects_palette:overgrown_algal_bricks")
    .EUt(2)
    .duration(20);

  event.remove({ id: "architects_palette:algal_lamp" });
  event.recipes.gtceu
    .mixer("algal_lamp")
    .itemInputs("architects_palette:algal_brick", "minecraft:glowstone")
    .itemOutputs("architects_palette:algal_lamp")
    .EUt(2)
    .duration(20);

  event.remove({ id: "architects_palette:lit_osseous_skull" });
  event.recipes.gtceu
    .canner("lit_osseous_skull")
    .itemInputs("architects_palette:osseous_skull", "minecraft:torch")
    .itemOutputs("architects_palette:lit_osseous_skull")
    .EUt(2)
    .duration(20);

  event.remove({ id: "architects_palette:lit_withered_osseous_skull" });
  event.recipes.gtceu
    .canner("lit_withered_osseous_skull")
    .itemInputs(
      "architects_palette:withered_osseous_skull",
      "minecraft:soul_torch"
    )
    .itemOutputs("architects_palette:lit_withered_osseous_skull")
    .EUt(2)
    .duration(20);

  event.remove({ id: "architects_palette:gilded_sandstone" });
  event.recipes.gtceu
    .mixer("gilded_sandstone")
    .itemInputs("minecraft:sandstone", "minecraft:gold_nugget")
    .itemOutputs("2x architects_palette:gilded_sandstone")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("gilded_sandstone")
    .itemInputs("minecraft:sandstone", "minecraft:gold_nugget")
    .itemOutputs("8x architects_palette:gilded_sandstone")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:weeping_blackstone" });
  event.recipes.gtceu
    .mixer("weeping_blackstone")
    .itemInputs("minecraft:blackstone", "minecraft:weeping_vines")
    .itemOutputs("1x architects_palette:weeping_blackstone")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("weeping_blackstone")
    .itemInputs("minecraft:blackstone", "minecraft:weeping_vines")
    .itemOutputs("8x architects_palette:weeping_blackstone")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:choral_end_stone_bricks" });
  event.recipes.gtceu
    .mixer("twisting_blackstone")
    .itemInputs("minecraft:blackstone", "minecraft:twisting_vines")
    .itemOutputs("1x architects_palette:twisting_blackstone")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("twisting_blackstone")
    .itemInputs("minecraft:blackstone", "minecraft:twisting_vines")
    .itemOutputs("8x architects_palette:twisting_blackstone")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:choral_end_stone_bricks" });
  event.recipes.gtceu
    .mixer("choral_end_stone_bricks")
    .itemInputs("minecraft:end_stone_bricks", "minecraft:chorus_fruit")
    .itemOutputs("1x architects_palette:choral_end_stone_bricks")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("choral_end_stone_bricks")
    .itemInputs("minecraft:end_stone_bricks", "minecraft:chorus_fruit")
    .itemOutputs("4x architects_palette:choral_end_stone_bricks")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:sunstone" });
  event.recipes.gtceu
    .mixer("sunstone")
    .itemInputs("minecraft:basalt", "architects_palette:sunmetal_blend")
    .itemOutputs("2x architects_palette:sunstone")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("sunstone")
    .itemInputs("minecraft:basalt", "architects_palette:sunmetal_blend")
    .itemOutputs("8x architects_palette:sunstone")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:molten_nether_bricks" });
  event.recipes.gtceu
    .mixer("molten_nether_bricks")
    .itemInputs("minecraft:nether_bricks", "minecraft:magma_block")
    .itemOutputs("2x architects_palette:molten_nether_bricks")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("molten_nether_bricks")
    .itemInputs("minecraft:nether_bricks", "minecraft:magma_block")
    .itemOutputs("8x architects_palette:molten_nether_bricks")
    .inputFluids("minecraft:lava 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:coarse_snow" });
  event.recipes.gtceu
    .mixer("coarse_snow")
    .itemInputs("minecraft:snow_block", "minecraft:gravel")
    .itemOutputs("2x architects_palette:coarse_snow")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("coarse_snow")
    .itemInputs("minecraft:snow_block", "minecraft:gravel")
    .itemOutputs("8x architects_palette:coarse_snow")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:unobtanium" });
  event.recipes.gtceu
    .macerator("unobtanium")
    .itemInputs("architects_palette:unobtanium_block")
    .itemOutputs("4x architects_palette:unobtanium")
    .chancedOutput(Item.of("architects_palette:unobtanium", 1), 100, 0)
    .EUt(GTValues.VA[GTValues.HV])
    .duration(2000);

  event.remove({ id: "architects_palette:ancient_plating" });
  event.recipes.gtceu
    .mixer("ancient_plating")
    .itemInputs(
      "minecraft:ancient_debris",
      "4x architects_palette:nether_brass_ingot",
      "4x architects_palette:nether_brass_nugget"
    )
    .itemOutputs("32x architects_palette:ancient_plating")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("ancient_plating")
    .itemInputs(
      "minecraft:ancient_debris",
      "4x architects_palette:nether_brass_ingot"
    )
    .itemOutputs("64x architects_palette:ancient_plating")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:tread_plate" });
  event.recipes.gtceu
    .mixer("tread_plate")
    .itemInputs("architects_palette:plating_block", "#forge:dusts/iron")
    .itemOutputs("2x architects_palette:tread_plate")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("tread_plate")
    .itemInputs("architects_palette:plating_block", "#forge:dusts/iron")
    .itemOutputs("8x architects_palette:tread_plate")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:hazard_block" });
  event.recipes.gtceu
    .mixer("hazard_block")
    .itemInputs("yellow_concrete", "black_concrete")
    .itemOutputs("2x architects_palette:hazard_block")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("hazard_block")
    .itemInputs("yellow_concrete", "black_concrete")
    .itemOutputs("8x architects_palette:hazard_block")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:sheet_metal_block" });
  event.recipes.gtceu
    .compressor("sheet_metal_block")
    .itemInputs("iron_block")
    .itemOutputs("32x architects_palette:sheet_metal_block")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("sheet_metal_block")
    .itemInputs("iron_block")
    .itemOutputs("64x architects_palette:sheet_metal_block")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:oracle_lamp" });
  event.recipes.gtceu
    .mixer("oracle_lamp")
    .itemInputs("architects_palette:oracle_jelly", "minecraft:end_rod")
    .itemOutputs("architects_palette:oracle_lamp")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("oracle_lamp")
    .itemInputs("architects_palette:oracle_jelly", "minecraft:end_rod")
    .itemOutputs("8x architects_palette:oracle_lamp")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:dark_oracle_bricks" });
  event.recipes.gtceu
    .mixer("dark_oracle_bricks")
    .itemInputs("architects_palette:oracle_bricks", "#forge:dyes/black")
    .itemOutputs("architects_palette:dark_oracle_bricks")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("dark_oracle_bricks")
    .itemInputs("architects_palette:oracle_bricks", "#forge:dyes/black")
    .itemOutputs("8x architects_palette:dark_oracle_bricks")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:framed_oracle_block" });
  event.recipes.gtceu
    .mixer("framed_oracle_block")
    .itemInputs(
      "architects_palette:oracle_block",
      "architects_palette:cerebral_plate"
    )
    .itemOutputs("2x architects_palette:framed_oracle_block")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("framed_oracle_block")
    .itemInputs(
      "architects_palette:oracle_block",
      "architects_palette:cerebral_plate"
    )
    .itemOutputs("8x architects_palette:framed_oracle_block")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:algal_blend" });
  event.recipes.gtceu
    .mixer("algal_blend")
    .itemInputs("clay_ball", "kelp")
    .itemOutputs("2x architects_palette:algal_blend")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("algal_blend")
    .itemInputs("clay_ball", "kelp")
    .itemOutputs("16x architects_palette:algal_blend")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:entwine_rod" });
  event.recipes.gtceu
    .lathe("entwine_rod")
    .itemInputs("minecraft:ender_pearl")
    .itemOutputs("2x architects_palette:entwine_rod")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("entwine_rod")
    .itemInputs("ender_pearl")
    .itemOutputs("8x architects_palette:entwine_rod")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:sunmetal_blend" });
  event.recipes.gtceu
    .mixer("sunmetal_blend")
    .itemInputs("soul_sand", "#forge:dusts/gold")
    .itemOutputs("4x architects_palette:sunmetal_blend")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("sunmetal_blend")
    .itemInputs("soul_sand", "#forge:dusts/gold")
    .itemOutputs("16x architects_palette:sunmetal_blend")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:nether_brass_blend" });
  event.recipes.gtceu
    .mixer("nether_brass_blend")
    .itemInputs("soul_sand", "#forge:dusts/brass")
    .itemOutputs("4x architects_palette:nether_brass_blend")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("nether_brass_blend")
    .itemInputs("soul_sand", "#forge:dusts/brass")
    .itemOutputs("16x architects_palette:nether_brass_blend")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:wardstone" });
  event.recipes.gtceu
    .mixer("wardstone")
    .itemInputs("nether_wart", "#forge:dusts/lapis")
    .itemOutputs("4x architects_palette:wardstone")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("wardstone")
    .itemInputs("nether_wart", "#forge:dusts/lapis")
    .itemOutputs("16x architects_palette:wardstone")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:cerebral_plate" });
  event.recipes.gtceu
    .mixer("cerebral_plate")
    .itemInputs("tuff", "#forge:dusts/nether_quartz")
    .itemOutputs("4x architects_palette:cerebral_plate")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("cerebral_plate")
    .itemInputs("tuff", "#forge:dusts/nether_quartz")
    .itemOutputs("16x architects_palette:cerebral_plate")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  event.remove({ id: "architects_palette:oracle_jelly" });
  event.recipes.gtceu
    .mixer("oracle_jelly")
    .itemInputs("sugar", "#forge:dusts/amethyst")
    .itemOutputs("4x architects_palette:oracle_jelly")
    .EUt(2)
    .duration(20);
  event.recipes.gtceu
    .construction_core("oracle_jelly")
    .itemInputs("sugar", "#forge:dusts/amethyst")
    .itemOutputs("16x architects_palette:oracle_jelly")
    .inputFluids("gtceu:construction_foam 100")
    .EUt(8)
    .duration(20);

  // Warping
  function getWarped(input, output) {
    event.recipes.gtceu
      .construction_core(output)
      .itemInputs(input)
      .itemOutputs(`4x ${output}`)
      .circuit(1)
      .inputFluids("gtceu:construction_foam 100")
      .dimension(new ResourceLocation("the_nether"))
      .EUt(16)
      .duration(20);
  }

  getWarped("architects_palette:abyssaline", "architects_palette:hadaline")
  getWarped("architects_palette:abyssaline_pillar", "architects_palette:hadaline_pillar")
  getWarped("architects_palette:abyssaline_tiles", "architects_palette:hadaline_tiles")
  getWarped("architects_palette:chiseled_abyssaline_bricks", "architects_palette:chiseled_hadaline_bricks")
  getWarped("architects_palette:abyssaline_bricks", "architects_palette:hadaline_bricks")
  getWarped("architects_palette:abyssaline_plating", "architects_palette:hadaline_plating")
  getWarped("architects_palette:abyssaline_lamp", "architects_palette:hadaline_lamp")

  getWarped("architects_palette:sunstone", "architects_palette:moonstone")
  getWarped("architects_palette:rotten_flesh_block", "architects_palette:entrails")

  getWarped("netherite_ingot", "architects_palette:unobtanium")

  getWarped("granite", "architects_palette:onyx")
  getWarped("diorite", "architects_palette:nebulite")
  getWarped("cobblestone", "architects_palette:craterstone")
  getWarped("andesite", "architects_palette:esoterrack")
  getWarped("stone_bricks", "architects_palette:moonshale_bricks")
  getWarped("stone", "architects_palette:moonshale")

  getWarped("#minecraft:logs", "architects_palette:twisted_log")
  getWarped("#minecraft:planks", "architects_palette:twisted_planks")
  getWarped("#minecraft:saplings", "architects_palette:twisted_sapling")
  getWarped("#minecraft:leaves", "architects_palette:twisted_leaves")

  getWarped("clay", "architects_palette:warpstone")
});
