GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("construction_core")
    .category("test")
    .setEUIO("in")
    .setMaxIOSize(2, 1, 1, 0)
    // .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY) TODO Migrate to mui
    // .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
    // .UI((b) => {
    //   b.setProgressBar(GTGuiTextures.PROGRESS_BATH)
    //   .setItemSlotsOverlay(IO.IN, 0, 1, GTGuiTextures.BOX_OVERLAY)
    //   .setItemSlotOverlay(IO.OUT, 0,  GTGuiTextures.BOX_OVERLAY);
    // })
    .setSound(GTSoundEntries.COOLING);
});
