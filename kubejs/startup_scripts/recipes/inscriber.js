GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
  event.create('inscriber')
      .category('inscriber') //Used in the GTlib / LDlib ui editor
      .setEUIO('in')
      .setMaxIOSize(3, 3, 0, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
      .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
      .setProgressBar(GuiTextures.PROGRESS_BAR_CIRCUIT, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.ASSEMBLER);
})