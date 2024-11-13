ServerEvents.recipes((event) => {
  let yeet = (recipeTag) => {
    event.remove({ id: recipeTag });
  };
  let yote = (itemName) => {
    event.remove({ output: itemName });
    event.remove({ input: itemName });
  };
  event.remove({ type: "ae2:entropy" });
  event.remove({ type: "ae2:charger" });
  event.remove({ type: "ae2:inscriber" });
  event.remove({ type: "ae2:inscriber" });
  yeet("ae2:network/blocks/inscribers");
  yeet("ae2:network/blocks/crystal_processing_charger");
  yeet("ae2:misc/deconstruction_certus_quartz_pillar");
  yeet("ae2:misc/deconstruction_certus_quartz_block");
  yeet("ae2:misc/deconstruction_chiseled_certus_quartz");
  yeet("ae2:network/blocks/interfaces_interface");
  yeet("ae2:network/blocks/pattern_providers_interface");
  yeet("ae2:network/blocks/energy_vibration_chamber");
  yeet("ae2:blasting/silicon_from_certus_quartz_dust");
  yeet("ae2:smelting/silicon_from_certus_quartz_dust");
  yeet("ae2:network/blocks/crank");
  yeet("ae2:tools/misctools_entropy_manipulator");
  yeet("ae2:tools/misctools_charged_staff");
  yeet("ae2:tools/network_color_applicator");
  yeet("ae2:tools/matter_cannon");
  yeet("ae2:shaped/not_so_mysterious_cube");
  yeet("ae2:network/blocks/crystal_processing_quartz_growth_accelerator");

  yote("ae2:cut_quartz_block");
  yote("ae2:chiseled_quartz_block");
  yote("ae2:quartz_stairs");
  yote("ae2:quartz_bricks");
  yote("ae2:quartz_pillar");
  yote("ae2:smooth_quartz_block");
  yote("ae2:quartz_wall");
  yote("ae2:quartz_slab");
  
  yote('ae2:crystal_resonance_generator');



  // ae2 transformation removals
  event.remove({ id: "ae2:transform/fluix_crystals"})
  event.remove({ id: "ae2:transform/flawed_budding_quartz"})
  event.remove({ id: "ae2:transform/certus_quartz_crystals"})
  event.remove({ id: "ae2:transform/fluix_crystal"})
  event.remove({ id: "ae2:transform/chipped_budding_quartz"})
  event.remove({ id: "ae2:transform/damaged_budding_quartz"})

});
