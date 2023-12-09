ServerEvents.recipes((event) => {
  event.recipes.gtceu
    .assembler("angel_ring")
    .itemInputs("#forge:rings/rose_gold", "2x feather")
    .inputFluids("gtceu:liquid_air 500")
    .itemOutputs("better_angel_ring:angel_ring")
    .duration(200)
    .EUt(128);

  // Void Portal
  event.remove({ id: "javd:portal_block" });
  event.shaped(`javd:portal_block`, ["PPP", "PEP", "PPP"], {
    P: "#forge:plates/obsidian",
    E: "gtceu:ender_pearl_block",
  });
});
