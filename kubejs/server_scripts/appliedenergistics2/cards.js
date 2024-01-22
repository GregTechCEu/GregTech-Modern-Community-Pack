ServerEvents.recipes((event) => {
  // Advanced Card
  event.remove({ id: "ae2:materials/advancedcard" });
  event.shaped("2x ae2:advanced_card", ["WP ", "ACP", "SP "], {
    W: "#forge:fine_wires/red_alloy",
    P: "#forge:plates/stainless_steel",
    A: "ae2:engineering_processor",
    C: "#gtceu:circuits/hv",
    S: "#forge:fine_wires/silver",
  });
  // Fuzzy Card
  event.remove({ id: "ae2:materials/cardfuzzy" });
  event.shapeless("ae2:fuzzy_card", [
    "ae2:advanced_card",
    "#gtceu:circuits/ulv",
  ]);
  // Inverter Card
  event.remove({ id: "ae2:materials/cardinverter" });
  event.shapeless("ae2:inverter_card", [
    "ae2:advanced_card",
    "#forge:fine_wires/red_alloy",
  ]);
  // Acceleration Card
  event.remove({ id: "ae2:materials/cardspeed" });
  event.shapeless("ae2:speed_card", [
    "ae2:advanced_card",
    "#gtceu:circuits/mv",
  ]);
  // Energy Card
  event.remove({ id: "ae2:materials/cardenergy" });
  event.shapeless("ae2:energy_card", [
    "ae2:advanced_card",
    "#gtceu:batteries/mv",
  ]);

  // Basic Card
  event.remove({ id: "ae2:materials/basiccard" });
  event.shaped("2x ae2:basic_card", ["WP ", "ACP", "SP "], {
    W: "#forge:fine_wires/red_alloy",
    P: "#forge:plates/aluminium",
    A: "ae2:engineering_processor",
    C: "#gtceu:circuits/mv",
    S: "#forge:fine_wires/gold",
  });
  // Capacity Card
  event.remove({ id: "ae2:materials/cardcapacity" });
  event.shapeless("ae2:capacity_card", [
    "ae2:basic_card",
    "#gtceu:circuits/lv",
  ]);
  // Crafting Card
  event.remove({ id: "ae2:materials/cardcrafting" });
  event.shapeless("ae2:crafting_card", [
    "ae2:basic_card",
    "#gtceu:circuits/mv",
  ]);
  // Redstone Card
  event.remove({ id: "ae2:materials/cardredstone" });
  event.shapeless("ae2:redstone_card", [
    "ae2:basic_card",
    "#forge:plates/red_alloy",
  ]);
});
