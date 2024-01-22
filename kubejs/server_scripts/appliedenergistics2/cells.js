ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  let cells = (componentSize, energyExponent) => {
    event.remove({ output: `ae2:item_storage_cell_${componentSize}` });
    greg
      .canner(`gtceu:${componentSize}_storage_cell`)
      .itemInputs(
        "ae2:item_cell_housing",
        `ae2:cell_component_${componentSize}`
      )
      .itemOutputs(`ae2:item_storage_cell_${componentSize}`)
      .duration(100)
      .EUt(4 ** (energyExponent - 1));
    event.remove({ output: `ae2:fluid_storage_cell_${componentSize}` });
    greg
      .canner(`gtceu:${componentSize}_fluid_storage_cell`)
      .itemInputs(
        "ae2:fluid_cell_housing",
        `ae2:cell_component_${componentSize}`
      )
      .itemOutputs(`ae2:fluid_storage_cell_${componentSize}`)
      .duration(100)
      .EUt(4 ** (energyExponent - 1));
  };
  cells("1k", 1);
  cells("4k", 2);
  cells("16k", 3);
  cells("64k", 4);
  cells("256k", 5);

  // View Cell
  event.remove({ output: "ae2:view_cell" });
  greg
    .canner("gtceu:view_cell")
    .itemInputs("ae2:item_cell_housing", "gtceu:certus_quartz_gem")
    .itemOutputs("ae2:view_cell")
    .duration(100)
    .EUt(4);

  //ME Storage Housing
  event.remove({ output: "ae2:item_cell_housing" });
  event.shaped("ae2:item_cell_housing", ["GPG", "WCW", "PPP"], {
    G: "ae2:quartz_glass",
    P: "#forge:plates/steel",
    W: "#forge:fine_wires/red_alloy",
    C: "#gtceu:circuits/lv",
  });

  //Fluid Storage Housing
  event.remove({ output: "ae2:fluid_cell_housing" });
  event.shaped("2x ae2:fluid_cell_housing", ["GPG", "WCW", "PPP"], {
    G: "ae2:quartz_glass",
    P: "#forge:plates/ruby",
    W: "gtceu:simple_soc",
    C: "#gtceu:circuits/ev",
  });
});
