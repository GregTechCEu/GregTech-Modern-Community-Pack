ServerEvents.recipes((event) => {
  // Quantum Bridge Card
  event.remove({ id: "ae2wtlib:quantum_bridge_card" });
  event.shaped(`ae2wtlib:quantum_bridge_card`, ["AS", "Ed"], {
    A: "ae2:advanced_card",
    S: "gtceu:luv_sensor",
    E: "gtceu:luv_emitter",
    d: "#forge:tools/screwdrivers"
  })
  // Magnet Card
  event.remove({ id: "ae2wtlib:magnet_card" });
  event.shaped(`ae2wtlib:magnet_card`, ["RAB", 'DMD', "PDP"], {
    R: "#forge:dyes/red",
    A: "ae2:annihilation_plane",
    B: "#forge:dyes/blue",
    D: '#forge:double_plates/titanium',
    M: "gtceu:hv_item_magnet",
    P: '#forge:plates/titanium'
  })
})