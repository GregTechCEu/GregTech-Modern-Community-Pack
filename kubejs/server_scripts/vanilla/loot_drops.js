LootJS.modifiers((event) => {
  event
    .addEntityModifier("minecraft:blaze")
    .replaceLoot("minecraft:blaze_rod", "gtceu:sulfur_dust", true);

  event
    .addEntityModifier("minecraft:enderman")
    .replaceLoot("minecraft:ender_pearl", "gtceu:ender_pearl_dust", true);

  event
    .addEntityModifier("minecraft:zombified_piglin")
    .removeLoot("minecraft:gold_nugget");
    
  event
    .addEntityModifier("minecraft:iron_golem")
    .removeLoot("minecraft:iron_ingot");
});
