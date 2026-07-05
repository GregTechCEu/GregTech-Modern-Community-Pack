const $AEItems = Java.loadClass("appeng.core.definitions.AEItems");
const $AEBlocks = Java.loadClass("appeng.core.definitions.AEBlocks");
const setIgnoredItem = "setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,net.minecraft.world.level.ItemLike[])";

GTCEuStartupEvents.materialModification(event => {
    TagPrefix.gem[setIgnoredItem](GTMaterials.get("fluix"), $AEItems.FLUIX_CRYSTAL);
    TagPrefix.gemFlawless.setIgnored(GTMaterials.get("fluix"));
    TagPrefix.gemExquisite.setIgnored(GTMaterials.get("fluix"));
    TagPrefix.block.modifyMaterialAmount(GTMaterials.get("fluix"), 4);
    TagPrefix.block[setIgnoredItem](GTMaterials.get("fluix"), $AEBlocks.FLUIX_BLOCK.asItem());
});
