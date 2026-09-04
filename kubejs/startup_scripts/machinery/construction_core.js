GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  const $MultiPredicates = Java.loadClass("com.gregtechceu.gtceu.api.multiblock.Predicates");

  event
    .create("construction_core", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("construction_core")
    .appearanceBlock(GTBlocks.MACHINE_CASING_ULV)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
    .pattern((definition) =>
      FactoryBlockPattern.start()
        .slice("BBB", "GGG", "BBB")
        .slice("BBB", "GCG", "BBB")
        .slice("BEB", "GGG", "BBB")
        .where("E", $MultiPredicates.controller($MultiPredicates.blocks(definition.get())))
        .where("C", $MultiPredicates.blocks("gtceu:steel_gearbox"))
        .where("G", $MultiPredicates.blocks("gtceu:tempered_glass"))
        .where(
          "B",
          $MultiPredicates.blocks("gtceu:lv_machine_casing")
            .setMinGlobalLimited(5)
            .or($MultiPredicates.autoAbilities(definition.getRecipeTypes()))
        )
        .build()
    )
    .workableCasingModel(
      "gtceu:block/casings/voltage/lv/side",
      "gtceu:block/multiblock/implosion_compressor"
    );
});
