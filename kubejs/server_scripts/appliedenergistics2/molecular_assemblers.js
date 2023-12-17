ServerEvents.recipes((event) => {
  const patpros = [
    ["hv", "stainless_steel", 1],
    ["ev", "titanium", 4],
    ["iv", "tungsten_steel", 16],
  ];
  patpros.forEach((tier) => {
    let interProv = (materialType, blockType) => {
      event.shaped(`${tier[2]}x ${blockType}`, ["PGP", "ACF", "PGP"], {
        P: `#forge:plates/${tier[1]}`,
        G: materialType,
        A: "ae2:annihilation_core",
        F: "ae2:formation_core",
        C: `gtceu:${tier[0]}_conveyor_module`,
      });
    };
    event.remove({ id: "ae2:network/crafting/molecular_assembler" });
    interProv("ae2:quartz_glass", "ae2:molecular_assembler");
  });
});
