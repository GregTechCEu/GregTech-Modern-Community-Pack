GTCEuStartupEvents.registry('gtceu:material', event => {
  event.create('fluix')
      .dust()
      .components('1x nether_quartz', '1x certus_quartz', '1x redstone')
        .color(0x8F5CCB).iconSet(GTMaterialIconSet.DULL)
      .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
})