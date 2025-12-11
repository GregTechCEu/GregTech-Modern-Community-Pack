ServerEvents.recipes((event) => {
  function woodUnification(woodType) {
    event.recipes.gtceu
      .assembler(`${woodType}_fence`)
      .itemInputs(`${woodType}_planks`)
      .itemOutputs(`${woodType}_fence`)
      .circuit(13)
      .duration(100)
      .EUt(4);

    event.recipes.gtceu
      .assembler(`${woodType}_fence_gate`)
      .itemInputs(`2x ${woodType}_planks`, "2x #forge:rods/wooden")
      .itemOutputs(`${woodType}_fence_gate`)
      .circuit(2)
      .duration(100)
      .EUt(4);

    event.recipes.gtceu
      .assembler(`${woodType}_stairs`)
      .itemInputs(`3x ${woodType}_planks`)
      .itemOutputs(`4x ${woodType}_stairs`)
      .circuit(7)
      .duration(100)
      .EUt(4);
  }

  woodUnification("warped");
  woodUnification("crimson");
  woodUnification("mangrove");
  woodUnification("cherry");
});
