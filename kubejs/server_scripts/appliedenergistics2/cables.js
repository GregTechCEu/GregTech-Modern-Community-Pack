ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  const dyes = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black",
  ];
  dyes.forEach((dyes) => {
    let cablePainting = (cableType) => {
      event.remove({ id: `ae2:network/cables/${cableType}_fluix_clean` });
      event.remove({ id: "ae2:network/cables/dense_smart_fluix_clean" });
      event.remove({ id: "ae2:network/cables/dense_covered_fluix_clean" });
      event.remove({ id: `ae2:network/cables/${cableType}_${dyes}` });
      event.remove({ id: `ae2:network/cables/dense_smart_${dyes}` });
      event.remove({ id: `ae2:network/cables/dense_covered_${dyes}` });
      greg
        .chemical_bath(`gtceu:${dyes}_${cableType}_cable`)
        .itemInputs(`ae2:fluix_${cableType}_cable`)
        .inputFluids(`gtceu:${dyes}_dye 18`)
        .itemOutputs(`ae2:${dyes}_${cableType}_cable`)
        .duration(40)
        .EUt(16);
      greg
        .chemical_bath(`gtceu:un_${dyes}_${cableType}_cable`)
        .itemInputs(`ae2:${dyes}_${cableType}_cable`)
        .inputFluids("gtceu:chlorine 10")
        .itemOutputs(`ae2:fluix_${cableType}_cable`)
        .duration(40)
        .EUt(16);
    };
    cablePainting("smart");
    cablePainting("covered");
    cablePainting("glass");
    cablePainting("covered_dense");
    cablePainting("smart_dense");
  });
  event.remove({ id: "ae2:network/cables/glass_fluix" });
  greg
    .assembler("gtceu:glass_fluix_cable")
    .itemInputs("2x ae2:quartz_fiber", "ae2:fluix_crystal")
    .itemOutputs("3x ae2:fluix_glass_cable")
    .duration(100)
    .EUt(30);

  event.remove({ id: "ae2:network/cables/covered_fluix" });
  event.recipes.gtceu
    .assembler("gtceu:covered_fluix_worst")
    .itemInputs("ae2:fluix_glass_cable")
    .inputFluids("gtceu:rubber 144")
    .itemOutputs("ae2:fluix_covered_cable")
    .duration(150)
    .EUt(8);
  event.recipes.gtceu
    .assembler("gtceu:covered_fluix_mid")
    .itemInputs("ae2:fluix_glass_cable")
    .inputFluids("gtceu:styrene_butadiene_rubber 36")
    .itemOutputs("ae2:fluix_covered_cable")
    .duration(150)
    .EUt(8);
  event.recipes.gtceu
    .assembler("gtceu:covered_fluix_best")
    .itemInputs("ae2:fluix_glass_cable")
    .inputFluids("gtceu:silicone_rubber 72")
    .itemOutputs("ae2:fluix_covered_cable")
    .duration(150)
    .EUt(8);

  event.remove({ id: "ae2:network/cables/smart_fluix" });
  event.recipes.gtceu
    .assembler("gtceu:smart_cable")
    .itemInputs("8x ae2:fluix_covered_cable", "#gtceu:circuits/lv")
    .itemOutputs("8x ae2:fluix_smart_cable")
    .duration(200)
    .EUt(8);

  event.remove({ id: "ae2:network/cables/dense_covered_fluix" });
  event.recipes.gtceu
    .compressor("gtceu:dense_cable")
    .itemInputs("4x ae2:fluix_covered_cable")
    .itemOutputs("ae2:fluix_covered_dense_cable")
    .duration(400)
    .EUt(2);

  event.remove({ id: "ae2:network/cables/dense_smart_fluix" });
  event.remove({ id: "ae2:network/cables/dense_smart_from_smart" });
  event.recipes.gtceu
    .assembler("gtceu:smart_dense")
    .itemInputs("8x ae2:fluix_covered_dense_cable", "#gtceu:circuits/mv")
    .itemOutputs("8x ae2:fluix_smart_dense_cable")
    .duration(200)
    .EUt(8);
});
