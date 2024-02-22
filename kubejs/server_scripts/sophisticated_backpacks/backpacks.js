ServerEvents.recipes((event) => {
  event.remove({ id: "sophisticatedbackpacks:backpack" });
  event.remove({ id: "sophisticatedbackpacks:copper_backpack" });
  event.remove({ id: "sophisticatedbackpacks:iron_backpack_from_copper" });
  event.remove({ id: "sophisticatedbackpacks:iron_backpack" });
  event.remove({ id: "sophisticatedbackpacks:gold_backpack" });
  event.remove({ id: "sophisticatedbackpacks:diamond_backpack" });
  event.remove({ id: "sophisticatedbackpacks:netherite_backpack" });

  event.shaped("sophisticatedbackpacks:backpack", ["SLS", "LBL", "FPF"], {
    S: "#forge:screws/wrought_iron",
    L: "minecraft:leather",
    B: "gtceu:wood_crate",
    F: "minecraft:string",
    P: "#forge:plates/red_alloy",
  });

  event.custom({
    type: "sophisticatedbackpacks:backpack_upgrade",
    conditions: [
      {
        itemRegistryName: "iron_backpack",
        type: "sophisticatedbackpacks:item_enabled",
      },
    ],
    pattern: ["SLS", "LBL", "FPF"],
    key: {
      S: { tag: "forge:screws/bronze" },
      L: { item: "minecraft:leather" },
      B: { item: "sophisticatedbackpacks:backpack" },
      F: { item: "minecraft:string" },
      P: { tag: "forge:plates/invar" },
    },
    result: { item: "sophisticatedbackpacks:copper_backpack" },
  });

  event.custom({
    type: "sophisticatedbackpacks:backpack_upgrade",
    conditions: [
      {
        itemRegistryName: "iron_backpack",
        type: "sophisticatedbackpacks:item_enabled",
      },
    ],
    pattern: ["SLS", "LBL", "FPF"],
    key: {
      S: { tag: "forge:screws/steel" },
      L: { item: "minecraft:leather" },
      B: { item: "sophisticatedbackpacks:copper_backpack" },
      F: { item: "minecraft:string" },
      P: { tag: "forge:plates/rose_gold" },
    },
    result: { item: "sophisticatedbackpacks:iron_backpack" },
  });

  event.custom({
    type: "sophisticatedbackpacks:backpack_upgrade",
    conditions: [
      {
        itemRegistryName: "gold_backpack",
        type: "sophisticatedbackpacks:item_enabled",
      },
    ],
    pattern: ["SLS", "LBL", "FPF"],
    key: {
      S: { tag: "forge:screws/aluminium" },
      L: { item: "minecraft:leather" },
      B: { item: "sophisticatedbackpacks:iron_backpack" },
      F: { item: "gtceu:carbon_fibers" },
      P: { tag: "forge:plates/blue_alloy" },
    },
    result: { item: "sophisticatedbackpacks:gold_backpack" },
  });

  event.custom({
    type: "sophisticatedbackpacks:backpack_upgrade",
    conditions: [
      {
        itemRegistryName: "diamond_backpack",
        type: "sophisticatedbackpacks:item_enabled",
      },
    ],
    pattern: ["SLS", "LBL", "FPF"],
    key: {
      S: { tag: "forge:screws/stainless_steel" },
      L: { item: "minecraft:leather" },
      B: { item: "sophisticatedbackpacks:gold_backpack" },
      F: { item: "gtceu:carbon_fibers" },
      P: { tag: "forge:plates/polytetrafluoroethylene" },
    },
    result: { item: "sophisticatedbackpacks:diamond_backpack" },
  });

  event.custom({
    type: "sophisticatedbackpacks:backpack_upgrade",
    conditions: [
      {
        itemRegistryName: "netherite_backpack",
        type: "sophisticatedbackpacks:item_enabled",
      },
    ],
    pattern: ["SLS", "LBL", "FPF"],
    key: {
      S: { tag: "forge:screws/titanium" },
      L: { item: "minecraft:leather" },
      B: { item: "sophisticatedbackpacks:diamond_backpack" },
      F: { item: "gtceu:carbon_fibers" },
      P: { tag: "forge:plates/epoxy" },
    },
    result: { item: "sophisticatedbackpacks:netherite_backpack" },
  });
});
