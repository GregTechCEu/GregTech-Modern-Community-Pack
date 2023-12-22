ItemEvents.tooltip((event) => {
  // Disabled Items
  event.add(
    [
      "sophisticatedbackpacks:inception_upgrade",
      "sophisticatedbackpacks:battery_upgrade",
      "storagedrawers:redstone_upgrade",
      "storagedrawers:min_redstone_upgrade",
      "storagedrawers:max_redstone_upgrade",
    ],
    Text.red("Disabled in this modpack!").bold(true)
  );

  // Circuits
  event.add("gtceu:basic_electronic_circuit", [
    Text.of("Your First Circuit").gray(),
    Text.of("LV-Tier Circuit").red(),
  ]);
  event.add("gtceu:good_electronic_circuit", [
    Text.of("Your Second Circuit").gray(),
    Text.of("MV-Tier Circuit").red(),
  ]);
  event.add("gtceu:basic_integrated_circuit", [
    Text.of("Smaller and more powerful").gray(),
    Text.of("LV-Tier Circuit").gold(),
  ]);
  event.add("gtceu:good_integrated_circuit", [
    Text.of("Smaller and more powerful").gray(),
    Text.of("MV-Tier Circuit").gold(),
  ]);
  event.add("gtceu:advanced_integrated_circuit", [
    Text.of("Smaller and more powerful").gray(),
    Text.of("HV-Tier Circuit").gold(),
  ]);
  event.add("gtceu:nand_chip", [
    Text.of("A Superior Simple Circuit").gray(),
    Text.of("ULV-Tier Circuit").gold(),
  ]);
  event.add("gtceu:microchip_processor", [
    Text.of("A Superior Basic Circuit").gray(),
    Text.of("LV-Tier Circuit").yellow(),
  ]);
  event.add("gtceu:micro_processor", [
    Text.of("Amazing Computation Speed!").gray(),
    Text.of("MV-Tier Circuit").yellow(),
  ]);
  event.add("gtceu:micro_processor_assembly", [
    Text.of("Amazing Computation Speed!").gray(),
    Text.of("HV-Tier Circuit").yellow(),
  ]);
  event.add("gtceu:micro_processor_computer", [
    Text.of("Amazing Computation Speed!").gray(),
    Text.of("EV-Tier Circuit").yellow(),
  ]);
  event.add("gtceu:micro_processor_mainframe", [
    Text.of("Amazing Computation Speed!").yellow(),
    Text.of("IV-Tier Circuit").yellow(),
  ]);
  event.add("gtceu:nano_processor", [
    Text.of("Smaller than ever").gray(),
    Text.of("HV-Tier Circuit").aqua(),
  ]);
  event.add("gtceu:nano_processor_assembly", [
    Text.of("Smaller than ever").gray(),
    Text.of("EV-Tier Circuit").aqua(),
  ]);
  event.add("gtceu:nano_processor_computer", [
    Text.of("Smaller than ever").gray(),
    Text.of("IV-Tier Circuit").aqua(),
  ]);
  event.add("gtceu:nano_processor_mainframe", [
    Text.of("Smaller than ever").gray(),
    Text.of("LuV-Tier Circuit").aqua(),
  ]);
  event.add("gtceu:quantum_processor", [
    Text.of("Quantum Computing comes to life!").gray(),
    Text.of("EV-Tier Circuit").green(),
  ]);
  event.add("gtceu:quantum_processor_assembly", [
    Text.of("Quantum Computing comes to life!").gray(),
    Text.of("IV-Tier Circuit").green(),
  ]);
  event.add("gtceu:quantum_processor_computer", [
    Text.of("Quantum Computing comes to life!").gray(),
    Text.of("LuV-Tier Circuit").green(),
  ]);
  event.add("gtceu:quantum_processor_mainframe", [
    Text.of("Quantum Computing comes to life!").gray(),
    Text.of("ZPM-Tier Circuit").green(),
  ]);
  event.add("gtceu:crystal_processor", [
    Text.of("Taking Advantage of Crystal Engraving").gray(),
    Text.of("IV-Tier Circuit").blue(),
  ]);
  event.add("gtceu:crystal_processor_assembly", [
    Text.of("Taking Advantage of Crystal Engraving").gray(),
    Text.of("LuV-Tier Circuit").blue(),
  ]);
  event.add("gtceu:crystal_processor_computer", [
    Text.of("Taking Advantage of Crystal Engraving").gray(),
    Text.of("ZPM-Tier Circuit").blue(),
  ]);
  event.add("gtceu:crystal_processor_mainframe", [
    Text.of("Taking Advantage of Crystal Engraving").gray(),
    Text.of("UV-Tier Circuit").blue(),
  ]);
  event.add("gtceu:wetware_processor", [
    Text.of("Feels like it's watching you").gray(),
    Text.of("LuV-Tier Circuit").darkRed(),
  ]);
  event.add("gtceu:wetware_processor_assembly", [
    Text.of("Can run Minecraft").gray(),
    Text.of("ZPM-Tier Circuit").darkRed(),
  ]);
  event.add("gtceu:wetware_processor_computer", [
    Text.of("Ultimate fusion of Flesh and Machine").gray(),
    Text.of("UV-Tier Circuit").darkRed(),
  ]);
  event.add("gtceu:wetware_processor_mainframe", [
    Text.of("The best Man has ever seen").gray(),
    Text.of("UHV-Tier Circuit").darkRed(),
  ]);

  function addCaption(item, description) {
    event.add(item, [Text.of(description).gray()]);
  }
  // Circuit Boards
  addCaption("gtceu:resin_circuit_board", "A Coated Board");
  addCaption("gtceu:phenolic_circuit_board", "A Good Board");
  addCaption("gtceu:plastic_circuit_board", "A Good Board");
  addCaption("gtceu:epoxy_circuit_board", "An Advanced Board");
  addCaption("gtceu:fiber_reinforced_circuit_board", "An Extreme Board");
  addCaption(
    "gtceu:multilayer_fiber_reinforced_circuit_board",
    "An Elite Board"
  );
  addCaption("gtceu:wetware_circuit_board", "The Board that keeps Life");
});
