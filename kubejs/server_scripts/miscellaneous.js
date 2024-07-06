ServerEvents.recipes((event) => {
  // Void Portal
  event.remove({ id: "javd:portal_block" });
  event.shaped(`javd:portal_block`, ["PPP", "PEP", "PPP"], {
    P: "#forge:plates/obsidian",
    E: "gtceu:ender_pearl_block",
  });


  // Travel Anchors
  event.remove({ id: "travelanchors:travel_anchor" });
  event.shaped(`travelanchors:travel_anchor`, ["SGS", "GPG", "SGS"], {
    S: "#forge:plates/black_steel",
    G: "#forge:plates/green_sapphire",
    P: "ender_pearl",
  });

  event.remove({ id: "travelanchors:travel_staff" });
  event.shaped(`travelanchors:travel_staff`, ["  P", " R ", "R  "], {
    R: "#forge:rods/black_steel",
    P: "gtceu:green_sapphire_gem",
  });

  // Crafting Station
  event.remove({ id: "craftingstation:crafting_station" });
  event.shapeless("craftingstation:crafting_station", [
    "minecraft:crafting_table",
    "#forge:tools/saws",
  ]);
  event.remove({ id: "craftingstation:crafting_station_slab" });
  event.shapeless("craftingstation:crafting_station_slab", [
    "craftingstation:crafting_station",
    "#forge:tools/saws",
  ]);

  // Tool Belt
  event.remove({ id: "toolbelt:belt" });
  event.shaped("toolbelt:belt", ["SLS", "C C", "LIL"], {
    S: "minecraft:string",
    L: "minecraft:leather",
    I: "#forge:plates/steel",
    C: "#forge:screws/steel",
  });
  event.remove({ id: "toolbelt:pouch" });
  event.shaped("toolbelt:pouch", [" G ", "LSL", "   "], {
    G: "#forge:rings/gold",
    L: "minecraft:leather",
    S: "#forge:plates/steel",
  });
});
