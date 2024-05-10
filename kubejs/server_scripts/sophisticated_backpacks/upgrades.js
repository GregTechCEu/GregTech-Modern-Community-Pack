ServerEvents.recipes((event) => {
  event.remove({ id: "sophisticatedbackpacks:upgrade_base" });
  event.shaped("sophisticatedbackpacks:upgrade_base", ["BSB", "LWL", "BSB"], {
    B: "#forge:bolts/iron",
    S: "minecraft:string",
    L: "minecraft:leather",
    W: "#forge:plates/wood",
  });
  event.recipes.gtceu
    .assembler("upgrade_base")
    .itemInputs(
      "#forge:plates/wood",
      "2x minecraft:leather",
      "2x #forge:bolts/iron",
      "2x minecraft:string"
    )
    .itemOutputs("sophisticatedbackpacks:upgrade_base")
    .duration(100)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:pickup_upgrade" });
  event.recipes.gtceu
    .assembler("pickup_upgrade")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "minecraft:hopper")
    .itemOutputs("sophisticatedbackpacks:pickup_upgrade")
    .duration(50)
    .EUt(16);
  event.shapeless("sophisticatedbackpacks:pickup_upgrade", [
    "sophisticatedbackpacks:upgrade_base",
    "minecraft:hopper",
  ]);
  event.remove({ id: "sophisticatedbackpacks:advanced_pickup_upgrade" });
  event.recipes.gtceu
    .assembler("advanced_pickup_upgrade")
    .itemInputs("sophisticatedbackpacks:pickup_upgrade", "gtceu:item_filter")
    .itemOutputs("sophisticatedbackpacks:advanced_pickup_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:filter_upgrade" });
  event.recipes.gtceu
    .assembler("filter_upgrade")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "gtceu:item_filter")
    .itemOutputs("sophisticatedbackpacks:filter_upgrade")
    .duration(50)
    .EUt(16);
  event.remove({ id: "sophisticatedbackpacks:advanced_filter_upgrade" });
  event.recipes.gtceu
    .assembler("advanced_filter_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:filter_upgrade",
      "gtceu:item_tag_filter"
    )
    .itemOutputs("sophisticatedbackpacks:advanced_filter_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:magnet_upgrade" });
  event.recipes.gtceu
    .assembler("magnet_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:upgrade_base",
      'gtceu:lv_item_magnet'
    )
    .itemOutputs("sophisticatedbackpacks:magnet_upgrade")
    .duration(50)
    .EUt(16);
  event.remove({ id: "sophisticatedbackpacks:advanced_magnet_upgrade" });
  event.remove({
    id: "sophisticatedbackpacks:advanced_magnet_upgrade_from_basic",
  });
  event.recipes.gtceu
    .assembler("advanced_magnet_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:magnet_upgrade",
      'gtceu:hv_item_magnet'
    )
    .itemOutputs("sophisticatedbackpacks:advanced_magnet_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:feeding_upgrade" });
  event.recipes.gtceu
    .assembler("feeding_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:upgrade_base",
      "#forge:meat",
      "#forge:crops"
    )
    .itemOutputs("sophisticatedbackpacks:feeding_upgrade")
    .duration(50)
    .EUt(16);
  event.remove({ id: "sophisticatedbackpacks:advanced_feeding_upgrade" });
  event.recipes.gtceu
    .assembler("advanced_feeding_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:feeding_upgrade",
      "enchanted_golden_apple"
    )
    .itemOutputs("sophisticatedbackpacks:advanced_feeding_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:compacting_upgrade" });
  event.remove({ id: "sophisticatedbackpacks:advanced_compacting_upgrade" });
  event.recipes.gtceu
    .assembler("compacting_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:upgrade_base",
      "2x gtceu:lv_electric_piston"
    )
    .itemOutputs("sophisticatedbackpacks:compacting_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:void_upgrade" });
  event.recipes.gtceu
    .assembler("void_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:upgrade_base",
      "gtceu:item_voiding_cover"
    )
    .itemOutputs("sophisticatedbackpacks:void_upgrade")
    .duration(50)
    .EUt(16);
  event.remove({ id: "sophisticatedbackpacks:advanced_void_upgrade" });
  event.recipes.gtceu
    .assembler("advanced_void_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:void_upgrade",
      "gtceu:advanced_item_voiding_cover"
    )
    .itemOutputs("sophisticatedbackpacks:advanced_void_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:restock_upgrade" });
  event.recipes.gtceu
    .assembler("restock_upgrade")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "gtceu:lv_input_bus")
    .itemOutputs("sophisticatedbackpacks:restock_upgrade")
    .duration(50)
    .EUt(16);
  event.remove({ id: "sophisticatedbackpacks:advanced_restock_upgrade" });
  event.recipes.gtceu
    .assembler("advanced_restock_upgrade")
    .itemInputs("sophisticatedbackpacks:restock_upgrade", "gtceu:mv_input_bus")
    .itemOutputs("sophisticatedbackpacks:advanced_restock_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:deposit_upgrade" });
  event.recipes.gtceu
    .assembler("deposit_upgrade")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "gtceu:lv_output_bus")
    .itemOutputs("sophisticatedbackpacks:deposit_upgrade")
    .duration(50)
    .EUt(16);
  event.remove({ id: "sophisticatedbackpacks:advanced_deposit_upgrade" });
  event.recipes.gtceu
    .assembler("advanced_deposit_upgrade")
    .itemInputs("sophisticatedbackpacks:deposit_upgrade", "gtceu:mv_output_bus")
    .itemOutputs("sophisticatedbackpacks:advanced_deposit_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:refill_upgrade" });
  event.recipes.gtceu
    .assembler("refill_upgrade")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "gtceu:lv_robot_arm")
    .itemOutputs("sophisticatedbackpacks:refill_upgrade")
    .duration(50)
    .EUt(16);
  event.remove({ id: "sophisticatedbackpacks:advanced_refill_upgrade" });
  event.recipes.gtceu
    .assembler("advanced_refill_upgrade")
    .itemInputs("sophisticatedbackpacks:refill_upgrade", "gtceu:mv_robot_arm")
    .itemOutputs("sophisticatedbackpacks:advanced_refill_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:inception_upgrade" });

  event.remove({ id: "sophisticatedbackpacks:everlasting_upgrade" });
  event.recipes.gtceu
    .assembler("everlasting_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:upgrade_base",
      "#forge:dense_plates/tungsten_steel",
      "2x nether_star"
    )
    .itemOutputs("sophisticatedbackpacks:everlasting_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:smelting_upgrade" });
  event.recipes.gtceu
    .assembler("smelting_upgrade")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "furnace")
    .itemOutputs("sophisticatedbackpacks:smelting_upgrade")
    .duration(50)
    .EUt(16);
  event.shapeless("sophisticatedbackpacks:smelting_upgrade", [
    "sophisticatedbackpacks:upgrade_base",
    "furnace",
  ]);
  event.remove({ id: "sophisticatedbackpacks:auto_smelting_upgrade" });
  event.recipes.gtceu
    .assembler("auto_smelting_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:smelting_upgrade",
      "gtceu:lv_conveyor_module"
    )
    .itemOutputs("sophisticatedbackpacks:auto_smelting_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:smoking_upgrade" });
  event.remove({
    id: "sophisticatedbackpacks:smoking_upgrade_from_smelting_upgrade",
  });
  event.recipes.gtceu
    .assembler("smoking_upgrade")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "smoker")
    .itemOutputs("sophisticatedbackpacks:smoking_upgrade")
    .duration(50)
    .EUt(16);
  event.shapeless("sophisticatedbackpacks:smoking_upgrade", [
    "sophisticatedbackpacks:upgrade_base",
    "minecraft:smoker",
  ]);
  event.remove({ id: "sophisticatedbackpacks:auto_smoking_upgrade" });
  event.remove({
    id: "sophisticatedbackpacks:auto_smoking_upgrade_from_auto_smelting_upgrade",
  });
  event.recipes.gtceu
    .assembler("auto_smoking_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:smoking_upgrade",
      "gtceu:lv_conveyor_module"
    )
    .itemOutputs("sophisticatedbackpacks:auto_smoking_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:blasting_upgrade" });
  event.remove({
    id: "sophisticatedbackpacks:blasting_upgrade_from_smelting_upgrade",
  });
  event.recipes.gtceu
    .assembler("blasting_upgrade")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "blast_furnace")
    .itemOutputs("sophisticatedbackpacks:blasting_upgrade")
    .duration(50)
    .EUt(16);
  event.shapeless("sophisticatedbackpacks:blasting_upgrade", [
    "sophisticatedbackpacks:upgrade_base",
    "minecraft:blast_furnace",
  ]);
  event.remove({ id: "sophisticatedbackpacks:auto_blasting_upgrade" });
  event.remove({
    id: "sophisticatedbackpacks:auto_blasting_upgrade_from_auto_smelting_upgrade",
  });
  event.recipes.gtceu
    .assembler("auto_blasting_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:blasting_upgrade",
      "gtceu:lv_conveyor_module"
    )
    .itemOutputs("sophisticatedbackpacks:auto_blasting_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:crafting_upgrade" });
  event.recipes.gtceu
    .assembler("crafting_upgrade")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "crafting_table")
    .itemOutputs("sophisticatedbackpacks:crafting_upgrade")
    .duration(50)
    .EUt(16);
  event.shapeless("sophisticatedbackpacks:crafting_upgrade", [
    "sophisticatedbackpacks:upgrade_base",
    "crafting_table",
  ]);

  event.remove({ id: "sophisticatedbackpacks:stonecutter_upgrade" });
  event.recipes.gtceu
    .assembler("stonecutter_upgrade")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "stonecutter")
    .itemOutputs("sophisticatedbackpacks:stonecutter_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:stack_upgrade_starter_tier" });
  event.recipes.gtceu
    .assembler("stack_upgrade_starter_tier")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "gtceu:lv_super_chest")
    .itemOutputs("sophisticatedbackpacks:stack_upgrade_starter_tier")
    .duration(50)
    .EUt(16);
  event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_1" });
  event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_1_from_starter" });
  event.recipes.gtceu
    .assembler("stack_upgrade_tier_1")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "gtceu:mv_super_chest")
    .itemOutputs("sophisticatedbackpacks:stack_upgrade_tier_1")
    .duration(50)
    .EUt(32);
  event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_2" });
  event.recipes.gtceu
    .assembler("stack_upgrade_tier_2")
    .itemInputs(
      "sophisticatedbackpacks:stack_upgrade_tier_1",
      "gtceu:hv_super_chest"
    )
    .itemOutputs("sophisticatedbackpacks:stack_upgrade_tier_2")
    .duration(50)
    .EUt(64);
  event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_3" });
  event.recipes.gtceu
    .assembler("stack_upgrade_tier_3")
    .itemInputs(
      "sophisticatedbackpacks:stack_upgrade_tier_2",
      "gtceu:ev_super_chest"
    )
    .itemOutputs("sophisticatedbackpacks:stack_upgrade_tier_3")
    .duration(50)
    .EUt(128);
  event.remove({ id: "sophisticatedbackpacks:stack_upgrade_tier_4" });
  event.recipes.gtceu
    .assembler("stack_upgrade_tier_4")
    .itemInputs(
      "sophisticatedbackpacks:stack_upgrade_tier_3",
      "gtceu:iv_quantum_chest"
    )
    .itemOutputs("sophisticatedbackpacks:stack_upgrade_tier_4")
    .duration(50)
    .EUt(256);

  event.remove({ id: "sophisticatedbackpacks:jukebox_upgrade" });
  event.recipes.gtceu
    .assembler("jukebox_upgrade")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "jukebox")
    .itemOutputs("sophisticatedbackpacks:jukebox_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:tool_swapper_upgrade" });
  event.recipes.gtceu
    .assembler("tool_swapper_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:upgrade_base",
      "#forge:tools/wrenches",
      "#forge:tools/hammers",
      "#forge:tools/screwdrivers"
    )
    .itemOutputs("sophisticatedbackpacks:tool_swapper_upgrade")
    .duration(50)
    .EUt(16);
  event.remove({ id: "sophisticatedbackpacks:advanced_tool_swapper_upgrade" });
  event.recipes.gtceu
    .assembler("advanced_tool_swapper_upgrade")
    .itemInputs(
      "sophisticatedbackpacks:tool_swapper_upgrade",
      "#forge:tools/files",
      "#forge:tools/wire_cutters",
      "#forge:tools/mortars"
    )
    .itemOutputs("sophisticatedbackpacks:advanced_tool_swapper_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:tank_upgrade" });
  event.recipes.gtceu
    .assembler("tank_upgrade")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "gtceu:bronze_drum")
    .itemOutputs("sophisticatedbackpacks:tank_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:battery_upgrade" });

  event.remove({ id: "sophisticatedbackpacks:pump_upgrade" });
  event.recipes.gtceu
    .assembler("pump_upgrade")
    .itemInputs("sophisticatedbackpacks:upgrade_base", "gtceu:lv_electric_pump")
    .itemOutputs("sophisticatedbackpacks:pump_upgrade")
    .duration(50)
    .EUt(16);
  event.remove({ id: "sophisticatedbackpacks:advanced_pump_upgrade" });
  event.recipes.gtceu
    .assembler("advanced_pump_upgrade")
    .itemInputs("sophisticatedbackpacks:pump_upgrade", "gtceu:mv_electric_pump")
    .itemOutputs("sophisticatedbackpacks:advanced_pump_upgrade")
    .duration(50)
    .EUt(16);
  event.remove({ id: "sophisticatedbackpacks:xp_pump_upgrade" });
  event.recipes.gtceu
    .assembler("xp_pump_upgrade")
    .itemInputs("sophisticatedbackpacks:pump_upgrade", "experience_bottle")
    .itemOutputs("sophisticatedbackpacks:xp_pump_upgrade")
    .duration(50)
    .EUt(16);

  event.remove({ id: "sophisticatedbackpacks:anvil_upgrade" });
  event.recipes.gtceu
    .assembler("anvil_upgrade")
    .itemInputs("sophisticatedbackpacks:pump_upgrade", "anvil")
    .itemOutputs("sophisticatedbackpacks:anvil_upgrade")
    .duration(50)
    .EUt(16);
});
