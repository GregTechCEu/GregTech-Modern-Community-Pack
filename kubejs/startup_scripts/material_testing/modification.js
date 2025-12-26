const $AEItems = Java.loadClass("appeng.core.definitions.AEItems");
const $AEBlocks = Java.loadClass("appeng.core.definitions.AEBlocks");

GTCEuStartupEvents.materialModification(event => {
    TagPrefix.gem.setIgnored(GTMaterialRegistry.getMaterial("fluix"), $AEItems.FLUIX_CRYSTAL);
    TagPrefix.gemFlawless.setIgnored(GTMaterialRegistry.getMaterial("fluix"));
    TagPrefix.gemExquisite.setIgnored(GTMaterialRegistry.getMaterial("fluix"));
    TagPrefix.block.modifyMaterialAmount(GTMaterials.get("fluix"), 4);
    TagPrefix.block.setIgnored(GTMaterials.get("fluix"), $AEBlocks.FLUIX_BLOCK.asItem());
});
