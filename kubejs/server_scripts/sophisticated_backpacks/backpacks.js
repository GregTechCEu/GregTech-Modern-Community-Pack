ServerEvents.recipes((event) => {
  event.remove({ id: "sophisticatedbackpacks:backpack" });
  event.remove({ id: "sophisticatedbackpacks:copper_backpack" });
  event.remove({ id: "sophisticatedbackpacks:iron_backpack_from_copper" });
  event.remove({ id: "sophisticatedbackpacks:iron_backpack" });
  event.remove({ id: "sophisticatedbackpacks:gold_backpack" });
  event.remove({ id: "sophisticatedbackpacks:diamond_backpack" });
  event.remove({ id: "sophisticatedbackpacks:netherite_backpack" });

  event.shaped("sophisticatedbackpacks:backpack", ["SLS", "LBL", "FPF"], {
    S: "#c:screws/wrought_iron",
    L: "minecraft:leather",
    B: "gtceu:wood_crate",
    F: "minecraft:string",
    P: "#c:plates/red_alloy",
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
      S: { tag: "c:screws/bronze" },
      L: { item: "minecraft:leather" },
      B: { item: "sophisticatedbackpacks:backpack" },
      F: { item: "minecraft:string" },
      P: { tag: "c:plates/invar" },
    },
    result: { id: "sophisticatedbackpacks:copper_backpack" },
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
      S: { tag: "c:screws/steel" },
      L: { item: "minecraft:leather" },
      B: { item: "sophisticatedbackpacks:copper_backpack" },
      F: { item: "minecraft:string" },
      P: { tag: "c:plates/rose_gold" },
    },
    result: { id: "sophisticatedbackpacks:iron_backpack" },
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
      S: { tag: "c:screws/aluminium" },
      L: { item: "minecraft:leather" },
      B: { item: "sophisticatedbackpacks:iron_backpack" },
      F: { item: "gtceu:carbon_fibers" },
      P: { tag: "c:plates/blue_alloy" },
    },
    result: { id: "sophisticatedbackpacks:gold_backpack" },
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
      S: { tag: "c:screws/stainless_steel" },
      L: { item: "minecraft:leather" },
      B: { item: "sophisticatedbackpacks:gold_backpack" },
      F: { item: "gtceu:carbon_fibers" },
      P: { tag: "c:plates/polytetrafluoroethylene" },
    },
    result: { id: "sophisticatedbackpacks:diamond_backpack" },
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
      S: { tag: "c:screws/titanium" },
      L: { item: "minecraft:leather" },
      B: { item: "sophisticatedbackpacks:diamond_backpack" },
      F: { item: "gtceu:carbon_fibers" },
      P: { tag: "c:plates/epoxy" },
    },
    result: { id: "sophisticatedbackpacks:netherite_backpack" },
  });
});
