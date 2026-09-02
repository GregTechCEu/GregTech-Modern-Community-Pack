GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("construction_core")
    .category("test")
    .setEUIO("in")
    .setMaxIOSize(2, 1, 1, 0)
    .setProgressBar(GTGuiTextures.PROGRESS_ASSEMBLER)
    .setItemSlotsOverlay(IO.IN, 0, 1, GTGuiTextures.BOX_OVERLAY)
    .setItemSlotOverlay(IO.OUT, 0,  GTGuiTextures.BOX_OVERLAY)
    .setSound(GTSoundEntries.COOLING);
});
