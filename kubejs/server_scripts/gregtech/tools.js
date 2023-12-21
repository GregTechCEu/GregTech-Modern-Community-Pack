ServerEvents.recipes((event) => {
  const murderingUtensils = ["sword", "knife", "butchery_knife", "axe"];

  const miningUtensils = [
    "pickaxe",
    "shovel",
    "hoe",
    "mining_hammer",
    "saw",
    "hammer",
    "wrench",
    "file",
    "crowbar",
    "screwdriver",
    "wire_cutter",
    "scythe",
    "plunger",
  ];

  miningUtensils.forEach((miningUtensil) => {
    let addEnchantment = (
      tooltype,
      material,
      enchantment,
      enchantmentLevel
    ) => {
      event.replaceOutput(
        { id: `gtceu:shaped/${tooltype}_${material}` },
        `gtceu:${material}_${tooltype}`,
        Item.of(`gtceu:${material}_${tooltype}`, "{Damage:0}").enchant(
          `minecraft:${enchantment}`,
          `${enchantmentLevel}`
        )
      );
    };
    addEnchantment(miningUtensil, "damascus_steel", "fortune", 3);
    addEnchantment(miningUtensil, "rose_gold", "fortune", 2);
    addEnchantment(miningUtensil, "invar", "efficiency", 1);
  });

  murderingUtensils.forEach((murderingUtensil) => {
    let addEnchantment = (
      tooltype,
      material,
      enchantment,
      enchantmentLevel
    ) => {
      event.replaceOutput(
        { id: `gtceu:shaped/${tooltype}_${material}` },
        `gtceu:${material}_${tooltype}`,
        Item.of(`gtceu:${material}_${tooltype}`, "{Damage:0}").enchant(
          `minecraft:${enchantment}`,
          `${enchantmentLevel}`
        )
      );
    };
    addEnchantment(murderingUtensil, "damascus_steel", "looting", 3);
    addEnchantment(murderingUtensil, "rose_gold", "looting", 2);
    addEnchantment(murderingUtensil, "invar", "unbreaking", 1);
  });
});
