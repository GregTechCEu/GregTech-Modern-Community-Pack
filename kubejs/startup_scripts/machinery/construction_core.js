GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("construction_core", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("construction_core")
    .appearanceBlock(GTBlocks.MACHINE_CASING_ULV)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
    .pattern((definition) =>
      FactoryBlockPattern.start()
        .aisle("BBB", "GGG", "BBB")
        .aisle("BBB", "GCG", "BBB")
        .aisle("BEB", "GGG", "BBB")
        .where("E", Predicates.controller(Predicates.blocks(definition.get())))
        .where("C", Predicates.blocks("gtceu:steel_gearbox"))
        .where("G", Predicates.blocks("gtceu:tempered_glass"))
        .where(
          "B",
          Predicates.blocks("gtceu:lv_machine_casing")
            .setMinGlobalLimited(5)
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
        )
        .build()
    )
    .workableCasingModel(
      "gtceu:block/casings/voltage/lv/side",
      "gtceu:block/multiblock/implosion_compressor"
    );
});
