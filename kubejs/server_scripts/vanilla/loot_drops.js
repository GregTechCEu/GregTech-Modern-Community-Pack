LootJS.modifiers((event) => {
  event
    .addEntityLootModifier("minecraft:blaze")
    .replaceLoot("minecraft:blaze_rod", "gtceu:sulfur_dust", true);
  event
    .addEntityLootModifier("minecraft:enderman")
    .replaceLoot("minecraft:ender_pearl", "gtceu:ender_pearl_dust", true);

    event
    .addEntityLootModifier("minecraft:zombified_piglin")
    .removeLoot("minecraft:gold_nugget");

    
  event
  .addEntityLootModifier("minecraft:iron_golem")
  .removeLoot("minecraft:iron_ingot");
});
