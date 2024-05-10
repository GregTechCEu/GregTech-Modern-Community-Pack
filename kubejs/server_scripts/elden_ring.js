ServerEvents.recipes((event) => {
// Void Portal
  event.remove({ id: "javd:portal_block" });
  event.shaped(`javd:portal_block`, ["PPP", "PEP", "PPP"], {
    P: "#forge:plates/obsidian",
    E: "gtceu:ender_pearl_block",
  });

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
});
