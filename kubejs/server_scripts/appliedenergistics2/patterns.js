ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  // Blank Pattern
  event.remove({ id: "ae2:network/crafting/patterns_blank" });
  greg
    .assembler("gtceu:blank_pattern")
    .itemInputs(
      "3x #c:plates/steel",
      "2x #c:plates/polyethylene",
      "4x #c:fine_wires/red_alloy",
      "#gtceu:circuits/mv"
    )
    .itemOutputs("ae2:blank_pattern")
    .duration(200)
    .EUt(120);

  greg
    .assembler("gtceu:blank_pattern_good")
    .itemInputs(
      "3x #c:plates/steel",
      "2x #c:plates/polyvinyl_chloride",
      "4x #c:fine_wires/red_alloy",
      "#gtceu:circuits/mv"
    )
    .itemOutputs("4x ae2:blank_pattern")
    .duration(200)
    .EUt(120);

  greg
    .assembler("gtceu:blank_pattern_better")
    .itemInputs(
      "3x #c:plates/steel",
      "2x #c:plates/polytetrafluoroethylene",
      "4x #c:fine_wires/red_alloy",
      "#gtceu:circuits/mv"
    )
    .itemOutputs("16x ae2:blank_pattern")
    .duration(200)
    .EUt(480);

  greg
    .assembler("gtceu:blank_pattern_best")
    .itemInputs(
      "3x #c:plates/steel",
      "2x #c:plates/polybenzimidazole",
      "4x #c:fine_wires/red_alloy",
      "#gtceu:circuits/mv"
    )
    .itemOutputs("64x ae2:blank_pattern")
    .duration(200)
    .EUt(480);
});
