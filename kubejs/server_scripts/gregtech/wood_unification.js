ServerEvents.recipes((event) => {
  function woodUnification(woodType) {
    event.recipes.gtceu
      .assembler(`${woodType}_fence`)
      .itemInputs(`${woodType}_planks`, "stick")
      .itemOutputs(`${woodType}_fence`)
      .circuit(1)
      .duration(100)
      .EUt(4);

    event.recipes.gtceu
      .assembler(`${woodType}_fence_gate`)
      .itemInputs(`2x ${woodType}_planks`, "2x stick")
      .itemOutputs(`${woodType}_fence_gate`)
      .circuit(2)
      .duration(100)
      .EUt(4);

    event.recipes.gtceu
      .assembler(`${woodType}_stairs`)
      .itemInputs(`6x ${woodType}_planks`)
      .itemOutputs(`4x ${woodType}_stairs`)
      .circuit(1)
      .duration(100)
      .EUt(1);
  }

  woodUnification("warped");
  woodUnification("crimson");
  woodUnification("mangrove");
  woodUnification("cherry");
});
