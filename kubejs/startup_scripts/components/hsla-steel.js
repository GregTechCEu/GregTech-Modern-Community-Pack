GTCEuStartupEvents.registry('gtceu:material', event => {
  GTMaterials.HSLASteel.addFlags(GTMaterialFlags.GENERATE_SPRING) //Adds flags to pre-existing GT materials
  GTMaterials.HSLASteel.addFlags(GTMaterialFlags.GENERATE_LONG_ROD) //Adds flags to pre-existing GT materials
})