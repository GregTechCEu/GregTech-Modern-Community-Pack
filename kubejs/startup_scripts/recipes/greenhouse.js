GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("greenhouse")
    .category("test")
    .setEUIO("in")
    .setMaxIOSize(3, 4, 1, 0)
    // .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY) TODO Migrate to mui
    // .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
    // .UI((b) => {
    //   b.setProgressBar(GTGuiTextures.PROGRESS_BATH)
    //   .setItemSlotsOverlay(IO.IN, 0, 2, GTGuiTextures.BOX_OVERLAY)
    //   .setItemSlotsOverlay(IO.OUT, 0, 3, GTGuiTextures.BOX_OVERLAY);
    // })
    .setSound(GTSoundEntries.COOLING);
});
