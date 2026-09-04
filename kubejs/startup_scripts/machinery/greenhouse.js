GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  // Import Predicates explicitly to stop it attempting to use LootJS's Predicates
  const $MultiPredicates = Java.loadClass("com.gregtechceu.gtceu.api.multiblock.Predicates");

  event
    .create("greenhouse", "multiblock")
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeType("greenhouse")
    .appearanceBlock(GTBlocks.MACHINE_CASING_ULV)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT, GTRecipeModifiers.BATCH_MODE])
    .pattern((definition) =>
      FactoryBlockPattern.start(RelativeDirection.FRONT, RelativeDirection.UP, RelativeDirection.RIGHT)
        .slice("0BBB0", "0BBB0", "0BBB0", "0BBB0")
        .slice("BBBBB", "BDDDB", "B###B", "BGGGB")
        .slice("BBBBB", "BDDDB", "B###B", "BGGGB")
        .slice("BBBBB", "BDDDB", "B###B", "BGGGB")
        .slice("0BBB0", "0BEB0", "0BBB0", "0BBB0")
        .where("E", $MultiPredicates.controller($MultiPredicates.blocks(definition.get())))
        .where("D", $MultiPredicates.blocks("minecraft:dirt"))
        .where("G", $MultiPredicates.blocks("gtceu:tempered_glass"))
        .where(
          "B",
          $MultiPredicates.blocks("gtceu:ulv_machine_casing")
            .setMinGlobalLimited(5)
            .or($MultiPredicates.autoAbilities(definition.getRecipeTypes()))
        )
        .where("#", $MultiPredicates.air())
        .where("0", $MultiPredicates.any())
        .build()
    )
    .workableCasingModel(
      "gtceu:block/casings/voltage/ulv/side",
      "gtceu:block/multiblock/implosion_compressor"
    );
});
