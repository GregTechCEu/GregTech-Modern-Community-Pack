ServerEvents.recipes((event) => {
  // Regular Backpack
  event.remove({ id: "sophisticatedbackpacks:backpack" });
  event.shaped("sophisticatedbackpacks:backpack", ["SLS", "LBL", "FPF"], {
    S: "#forge:screws/wrought_iron",
    L: "minecraft:leather",
    B: "gtceu:wood_crate",
    F: "minecraft:string",
    P: "#forge:plates/red_alloy",
  });

  // Iron
  event.remove({ id: "sophisticatedbackpacks:iron_backpack" });
  event.shaped("sophisticatedbackpacks:iron_backpack", ["SLS", "LBL", "FPF"], {
    S: "#forge:screws/bronze",
    L: "minecraft:leather",
    B: "sophisticatedbackpacks:backpack",
    F: "minecraft:string",
    P: "#forge:plates/invar",
  });

  // Gold
  event.remove({ id: "sophisticatedbackpacks:gold_backpack" });
  event.shaped("sophisticatedbackpacks:gold_backpack", ["SLS", "LBL", "FPF"], {
    S: "#forge:screws/steel",
    L: "minecraft:leather",
    B: "sophisticatedbackpacks:iron_backpack",
    F: "minecraft:string",
    P: "#forge:plates/rose_gold",
  });

  // Diamond
  event.remove({ id: "sophisticatedbackpacks:diamond_backpack" });
  event.shaped(
    "sophisticatedbackpacks:diamond_backpack",
    ["SLS", "LBL", "FPF"],
    {
      S: "#forge:screws/aluminium",
      L: "minecraft:leather",
      B: "sophisticatedbackpacks:gold_backpack",
      F: "gtceu:carbon_fibers",
      P: "#forge:plates/blue_alloy",
    }
  );

  // Netherite
  event.remove({ id: "sophisticatedbackpacks:netherite_backpack" });
  event.shaped(
    "sophisticatedbackpacks:netherite_backpack",
    ["SLS", "LBL", "FPF"],
    {
      S: "#forge:screws/stainless_steel",
      L: "minecraft:leather",
      B: "sophisticatedbackpacks:diamond_backpack",
      F: "gtceu:carbon_fibers",
      P: "#forge:plates/polytetrafluoroethylene",
    }
  );
});
