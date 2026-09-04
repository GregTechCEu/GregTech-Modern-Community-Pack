ServerEvents.recipes((event) => {
  // Void Portal
  event.remove({ id: "javd:portal_block" });
  event.shaped(`javd:portal_block`, ["PPP", "PEP", "PPP"], {
    P: "#c:plates/obsidian",
    E: "gtceu:ender_pearl_block",
  });


  /* TODO: Reimplment when replacement of these mods are found
  // Travel Anchors
  event.remove({ id: "travelanchors:travel_anchor" });
  event.shaped(`travelanchors:travel_anchor`, ["SGS", "GPG", "SGS"], {
    S: "#c:plates/black_steel",
    G: "#c:plates/green_sapphire",
    P: "ender_pearl",
  });

  event.remove({ id: "travelanchors:travel_staff" });
  event.shaped(`travelanchors:travel_staff`, ["  P", " R ", "R  "], {
    R: "#c:rods/black_steel",
    P: "gtceu:green_sapphire_gem",
  });

  // Crafting Station
  event.remove({ id: "craftingstation:crafting_station" });
  event.shapeless("craftingstation:crafting_station", [
    "minecraft:crafting_table",
    "#c:tools/saws",
  ]);
  event.remove({ id: "craftingstation:crafting_station_slab" });
  event.shapeless("craftingstation:crafting_station_slab", [
    "craftingstation:crafting_station",
    "#c:tools/saws",
  ]);
  */

  // Tool Belt
  event.remove({ id: "toolbelt:belt" });
  event.shaped("toolbelt:belt", ["SLS", "C C", "LIL"], {
    S: "minecraft:string",
    L: "minecraft:leather",
    I: "#c:plates/steel",
    C: "#c:screws/steel",
  });
  event.remove({ id: "toolbelt:pouch" });
  event.shaped("toolbelt:pouch", [" G ", "LSL", "   "], {
    G: "#c:rings/gold",
    L: "minecraft:leather",
    S: "#c:plates/steel",
  });
});
