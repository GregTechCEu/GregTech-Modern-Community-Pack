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
  event.remove({ mod: "elevatorid" });
  dyes.forEach((dyes) => {
    greg
      .chemical_bath(`${dyes}_elevator`)
      .itemInputs("#elevatorid:elevators")
      .inputFluids(`gtceu:${dyes}_dye 18"`)
      .itemOutputs(`elevatorid:elevator_${dyes}`)
      .duration(20)
      .EUt(7);
  });
  greg
    .chemical_bath("elevator_washing")
    .itemInputs("#elevatorid:elevators")
    .inputFluids("gtceu:chlorine 50")
    .itemOutputs("elevatorid:elevator_gray")
    .duration(400)
    .EUt(2);

  event.shaped("elevatorid:elevator_gray", ["PPP", "GFG", "PPP"], {
    P: "#forge:plates/steel",
    G: "#forge:small_gears/steel",
    F: "#forge:frames/steel",
  });
});
