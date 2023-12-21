GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create("greenhouse", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("greenhouse")
    .appearanceBlock(GTBlocks.MACHINE_CASING_ULV)
    .recipeModifier(
      GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(
        OverclockingLogic.NON_PERFECT_OVERCLOCK
      )
    )
    .pattern((definition) =>
      FactoryBlockPattern.start()
        .aisle("#BBB#", "#BBB#", "#BBB#", "#BBB#")
        .aisle("BBBBB", "BDDDB", "B###B", "BGGGB")
        .aisle("BBBBB", "BDDDB", "B###B", "BGGGB")
        .aisle("BBBBB", "BDDDB", "B###B", "BGGGB")
        .aisle("#BBB#", "#BEB#", "#BBB#", "#BBB#")
        .where("E", Predicates.controller(Predicates.blocks(definition.get())))
        .where("D", Predicates.blocks("minecraft:dirt"))
        .where("G", Predicates.blocks("gtceu:tempered_glass"))
        .where(
          "B",
          Predicates.blocks("gtceu:ulv_machine_casing")
            .setMinGlobalLimited(5)
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
        )
        .where("#", Predicates.air())
        .build()
    )
    .workableCasingRenderer(
      "gtceu:block/casings/voltage/ulv/side",
      "gtceu:block/multiblock/implosion_compressor",
      true
    );
});
