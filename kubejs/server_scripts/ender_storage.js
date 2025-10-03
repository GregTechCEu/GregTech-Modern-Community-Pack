ServerEvents.recipes((event) => {
  // Ender Tank
  event.remove({ id: "enderstorage:ender_tank" });
  event.shapeless(`gtceu:ender_fluid_link_cover`, [
    "enderstorage:ender_tank"
  ]);
  // Ender Chest
  event.remove({ id: "enderstorage:ender_chest" });
  event.shapeless(`gtceu:ender_item_link_cover`, [
    "enderstorage:ender_chest"
  ]);
  event.remove({ id: "enderstorage:ender_pouch" });
})
