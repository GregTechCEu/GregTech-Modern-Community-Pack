const $AEItems = Java.loadClass("appeng.core.definitions.AEItems");
const $AEBlocks = Java.loadClass("appeng.core.definitions.AEBlocks");
const setIgnoredItem = "setIgnored(com.gregtechceu.gtceu.api.data.chemical.material.Material,java.util.function.Supplier[])";

GTCEuStartupEvents.materialModification(event => {
    const fluix_material = GTRegistries.MATERIALS.get("gtceu:fluix");
    TagPrefix.gem[setIgnoredItem](fluix_material, () => $AEItems.FLUIX_CRYSTAL);
    TagPrefix.gemFlawless.setIgnored(fluix_material);
    TagPrefix.gemExquisite.setIgnored(fluix_material);
    TagPrefix.block.modifyMaterialAmount(fluix_material, 4);
    TagPrefix.block[setIgnoredItem](fluix_material, (() => $AEBlocks.FLUIX_BLOCK.asItem()));
});
