ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  let craftystorage = (componentSize, energyExponent) => {
    event.remove({ output: `ae2:${componentSize}k_crafting_storage` });
    greg
      .canner(`gtceu:${componentSize}k_crafting_storage`)
      .itemInputs("ae2:crafting_unit", `ae2:cell_component_${componentSize}k`)
      .itemOutputs(`ae2:${componentSize}k_crafting_storage`)
      .duration(100)
      .EUt(4 ** (energyExponent - 1));
  };
  craftystorage("1", 1);
  craftystorage("4", 2);
  craftystorage("16", 3);
  craftystorage("64", 4);
  craftystorage("256", 5);
});