GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
  event.create('greenhouse')
      .category('test') //Used in the GTlib / LDlib ui editor
      .setEUIO('in')
      .setMaxIOSize(3, 4, 1, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
      .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
  .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COOLING);
})