ServerEvents.recipes(event => {
  const greg = event.recipes.gtceu
  let craftystorage = (componentSize, energyExponent, mod, k) => {
    event.remove({output: mod + ":" + componentSize + "k_crafting_storage"})
    greg.canner("gtceu:" + componentSize + "crafting_storage")
      .itemInputs("ae2:crafting_unit", mod + ":" + "cell_component_" + componentSize + k)
      .itemOutputs(mod + ":" + componentSize +  "k_crafting_storage")
      .duration(100).EUt(4**(energyExponent-1))
  } 
  craftystorage("1", 1, "ae2", "k")
  craftystorage("4", 2, "ae2", "k")
  craftystorage("16", 3, "ae2","k")
  craftystorage("64", 4, "ae2","k")
  craftystorage("256", 5, "ae2","k")
  // add fluid cells!
})

// ae2 has 16k input output
// ae2add has 16 input but 16k output