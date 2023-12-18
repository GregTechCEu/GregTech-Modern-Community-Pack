GTCEuStartupEvents.registry("gtceu:material", (event) => {
  GTMaterials.HSLASteel.addFlags(GTMaterialFlags.GENERATE_SPRING);
  GTMaterials.HSLASteel.addFlags(GTMaterialFlags.GENERATE_LONG_ROD);
  GTMaterials.Iridium.addFlags(GTMaterialFlags.GENERATE_FRAME);
  GTMaterials.Cobalt.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE);
});
