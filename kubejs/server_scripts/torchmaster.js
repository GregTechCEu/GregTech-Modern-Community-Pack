ServerEvents.recipes((event) => {
  // Mega Torch
  event.remove({ id: "torchmaster:megatorch" });
  event.shaped("torchmaster:megatorch", ["SDR", "IBD", "RIS"], {
    S: "#forge:screws/iron",
    D: "#forge:gems/diamond",
    R: "#forge:rings/gold",
    I: "minecraft:stick",
    B: "#forge:storage_blocks/coke",
  });

  // Dread Lamp
  event.remove({ id: "torchmaster:dreadlamp" });
  event.shaped("torchmaster:dreadlamp", ["PPP", "GLG", "PPP"], {
    P: "#forge:plates/obsidian",
    L: "minecraft:glowstone",
    G: "#forge:glass_panes",
  });

  // Feral Flare Lantern
  event.remove({ id: "torchmaster:feral_flare_lantern" });
  event.shaped("torchmaster:feral_flare_lantern", ["SPR", "INP", "RIS"], {
    S: "#forge:screws/iron",
    P: "#forge:plates/glowstone",
    R: "#forge:rings/steel",
    I: "#forge:rods/steel",
    N: "#forge:small_springs/gold",
  });

  // Frozen Pearl
  event.remove({ id: "torchmaster:frozen_pearl" });
  event.recipes.gtceu
    .chemical_bath("frozen_pearl")
    .itemInputs("minecraft:ender_pearl")
    .inputFluids("gtceu:ice 1152")
    .itemOutputs("torchmaster:frozen_pearl")
    .duration(100)
    .EUt(16);
});
