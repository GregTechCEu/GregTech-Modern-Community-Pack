ServerEvents.recipes((event) => {
  const patpros = [
    ["lv", "steel", 1],
    ["mv", "aluminium", 2],
    ["hv", "stainless_steel", 3],
    ["ev", "titanium", 4],
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
    interProv("#forge:glass", "ae2:interface");
    interProv("minecraft:crafting_table", "ae2:pattern_provider");
  });
});