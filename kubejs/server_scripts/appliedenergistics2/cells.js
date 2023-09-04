ServerEvents.recipes(event => {
  const greg = event.recipes.gtceu
  let cells = (componentSize, energyExponent, mod) => {
    event.remove({output: mod + ":item_storage_cell_" + componentSize})
    greg.canner("gtceu:" + componentSize + "_storage_cell")
      .itemInputs("ae2:item_cell_housing", mod + ":cell_component_" + componentSize)
      .itemOutputs(mod + ":item_storage_cell_" + componentSize)
      .duration(100).EUt(4**(energyExponent-1))
    event.remove({output: mod + ":fluid_storage_cell_" + componentSize})
    greg.canner("gtceu:" + componentSize + "_fluid_storage_cell")
      .itemInputs("ae2:fluid_cell_housing", mod + ":cell_component_" + componentSize)
      .itemOutputs(mod + ":fluid_storage_cell_" + componentSize)
      .duration(100).EUt(4**(energyExponent-1))
  } 
  cells("1k", 1, "ae2")
  cells("4k", 2, "ae2")
  cells("16k", 3, "ae2")
  cells("64k", 4, "ae2")
  cells("256k", 5, "ae2")

  // View Cell
  event.remove({output: "ae2:view_cell"})
  greg.canner("gtceu:view_cell")
    .itemInputs("ae2:item_cell_housing", "#forge:gems/certus_quartz")
    .itemOutputs("ae2:view_cell")
    .duration(100).EUt(4)
  // add fluid cells!

  //ME Storage Housing
  event.remove({output: "ae2:item_cell_housing"})
  event.shaped("ae2:item_cell_housing", [
    'GPG',
    'WCW',
    'PPP'
  ] , {
    G: "ae2:quartz_glass",
    P: "#forge:plates/steel",
    W: "#forge:wires/fine/red_alloy",
    C: "#forge:circuits/lv"
  })
})