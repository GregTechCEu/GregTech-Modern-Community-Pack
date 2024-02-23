GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("construction_core")
    .category("test")
    .setEUIO("in")
    .setMaxIOSize(2, 1, 1, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COOLING);
});
