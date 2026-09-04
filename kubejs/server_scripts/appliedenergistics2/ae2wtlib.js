ServerEvents.recipes((event) => {
  // Quantum Bridge Card
  event.remove({ id: "ae2wtlib:quantum_bridge_card" });
  event.shaped(`ae2wtlib:quantum_bridge_card`, ["AS", "Ed"], {
    A: "ae2:advanced_card",
    S: "gtceu:luv_sensor",
    E: "gtceu:luv_emitter",
    d: "#c:tools/screwdrivers"
  })
  // Magnet Card
  event.remove({ id: "ae2wtlib:magnet_card" });
  event.shaped(`ae2wtlib:magnet_card`, ["RAB", 'DMD', "PDP"], {
    R: "#c:dyes/red",
    A: "ae2:annihilation_plane",
    B: "#c:dyes/blue",
    D: '#c:double_plates/titanium',
    M: "gtceu:hv_item_magnet",
    P: '#c:plates/titanium'
  })
})