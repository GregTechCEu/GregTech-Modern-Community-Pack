GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("greenhouse")
    .category("test")
    .setEUIO("in")
    .setMaxIOSize(3, 4, 1, 0)
    .ui((b) => {
      b.setProgressBar(GTGuiTextures.PROGRESS_ASSEMBLER) // TODO Change back to chem bath overlay
      .setItemSlotsOverlay(IO.IN, 0, 2, GTGuiTextures.BOX_OVERLAY)
      .setItemSlotsOverlay(IO.OUT, 0, 3, GTGuiTextures.BOX_OVERLAY);
    })
    .setSound(GTSoundEntries.COOLING);
});
