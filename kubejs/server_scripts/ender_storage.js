ServerEvents.recipes((event) => {
  // Ender Tank
  event.remove({ id: "enderstorage:ender_tank" });
  event.shaped(`enderstorage:ender_tank`, ["PEP", "STM", "PEP"], {
    P: "#forge:plates/stainless_steel",
    E: "#forge:plates/ender_pearl",
    S: "gtceu:hv_sensor",
    T: "gtceu:mv_super_tank",
    M: "gtceu:hv_emitter"
  })
  // Ender Chest
  event.remove({ id: "enderstorage:ender_chest" });
  event.shaped(`enderstorage:ender_chest`, ["PEP", "MTS", "PEP"], {
    P: "#forge:plates/stainless_steel",
    E: "#forge:plates/ender_pearl",
    S: "gtceu:hv_sensor",
    T: "gtceu:mv_super_chest",
    M: "gtceu:hv_emitter"
  })
  event.remove({ id: "enderstorage:ender_pouch" });
})