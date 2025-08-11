ServerEvents.recipes((event) => {
	event.remove({ mod: "sophisticatedstorage" });

	/*
	 *   S.Storage Barrels              GT Crates
	 *
	 * > Wooden Barrel     27           Wooden Crate         27
	 *   Copper Barrel     45
	 * > Iron Barrel       54           Bronze Crate         54
	 *                                  Steel Crate          72
	 *   Golden Barrel     81
	 *                                  Aluminum Crate       90
	 * > Diamond Barrel   108           Stainless Crate     108
	 *                                  Titanium Crate      126
	 *   Netherite Barrel 132
	 *                                  Tungstensteel Crate 144
	 */


	// [T] = transform recipe, [U] = upgrade recipe
	// [T] wooden crate (27) -> oak barrel (27)
	event.shapeless(Item.of("sophisticatedstorage:barrel", { woodType: "oak" }), [
		"gtceu:wood_crate",
		"minecraft:redstone_torch",
		"#forge:tools/hammers",
	]);

	// [T] bronze crate (54) -> iron barrel (54)
	event.shapeless(
		Item.of("sophisticatedstorage:iron_barrel", { woodType: "oak" }),
		["gtceu:bronze_crate", "minecraft:redstone_torch", "#forge:tools/hammers"]
	);

	// [T] stainless crate (108) -> diamond barrel (108)
	event.shapeless(
		Item.of("sophisticatedstorage:diamond_barrel", { woodType: "oak" }),
		[
			"gtceu:stainless_steel_crate",
			"minecraft:redstone_torch",
			"#forge:tools/hammers",
		]
	);

	// [U] oak barrel (27) -> copper barrel (45)
	event.custom({
		type: "sophisticatedstorage:storage_tier_upgrade",
		conditions: [
			{
				type: "sophisticatedstorage:item_enabled",
				itemRegistryName: "barrel",
			},
		],
		pattern: [" P ", "PBP", " P "],
		key: {
			P: { tag: "forge:plates/copper" },
			B: { item: "sophisticatedstorage:barrel" },
		},
		result: { item: "sophisticatedstorage:copper_barrel" },
	});

	// [U] copper barrel (45) -> iron barrel (54)
	event.custom({
		type: "sophisticatedstorage:storage_tier_upgrade",
		conditions: [
			{
				type: "sophisticatedstorage:item_enabled",
				itemRegistryName: "copper_barrel",
			},
		],
		pattern: [" P ", "PBP", " P "],
		key: {
			P: { tag: "forge:plates/iron" },
			B: { item: "sophisticatedstorage:copper_barrel" },
		},
		result: { item: "sophisticatedstorage:iron_barrel" },
	});

	// [U] iron barrel (54) -> gold barrel (81)
	event.custom({
		type: "sophisticatedstorage:storage_tier_upgrade",
		conditions: [
			{
				type: "sophisticatedstorage:item_enabled",
				itemRegistryName: "iron_barrel",
			},
		],
		pattern: ["QPQ", "PBP", "QPQ"],
		key: {
			P: { tag: "forge:plates/gold" },
			Q: { tag: "forge:screws/steel" },
			B: { item: "sophisticatedstorage:iron_barrel" },
		},
		result: { item: "sophisticatedstorage:gold_barrel" },
	});

	// [U] gold barrel (81) -> diamond barrel (108)
	event.custom({
		type: "sophisticatedstorage:storage_tier_upgrade",
		conditions: [
			{
				type: "sophisticatedstorage:item_enabled",
				itemRegistryName: "gold_barrel",
			},
		],
		pattern: ["QPQ", "PBP", "QPQ"],
		key: {
			P: { tag: "forge:plates/diamond" },
			Q: { tag: "forge:screws/stainless_steel" },
			B: { item: "sophisticatedstorage:gold_barrel" },
		},
		result: { item: "sophisticatedstorage:diamond_barrel" },
	});

	// [U] diamond barrel (108) -> netherite barrel (132)
	event.custom({
		type: "sophisticatedstorage:storage_tier_upgrade",
		conditions: [
			{
				type: "sophisticatedstorage:item_enabled",
				itemRegistryName: "diamond_barrel",
			},
		],
		pattern: ["QPQ", "PBP", "QPQ"],
		key: {
			P: { tag: "forge:ingots/netherite" },
			Q: { tag: "forge:screws/titanium" },
			B: { item: "sophisticatedstorage:diamond_barrel" },
		},
		result: { item: "sophisticatedstorage:netherite_barrel" },
	});

	// Upgrade Base
	event.shaped("sophisticatedstorage:upgrade_base", [" B ", "BWB", " B "], {
		B: "#forge:bolts/iron",
		W: "#forge:plates/wood",
	});
	event.recipes.gtceu
		.assembler("storage_upgrade_base")
		.itemInputs("#forge:plates/wood", "2x #forge:bolts/iron")
		.itemOutputs("sophisticatedstorage:upgrade_base")
		.circuit(2)
		.duration(100)
		.EUt(16);

	// Pickup Upgrade
	event.shapeless("sophisticatedstorage:pickup_upgrade", [
		"sophisticatedstorage:upgrade_base",
		// changed hopper to sticky piston, because the hopper is used for hopper upgrade
		"minecraft:sticky_piston",
	]);
	event.recipes.gtceu
		.assembler("storage_pickup_upgrade_piston")
		.itemInputs("sophisticatedstorage:upgrade_base", "minecraft:hopper")
		.itemOutputs("sophisticatedstorage:pickup_upgrade")
		.circuit(2)
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_pickup_upgrade")
		.itemInputs("sophisticatedstorage:upgrade_base", "minecraft:sticky_piston")
		.itemOutputs("sophisticatedstorage:pickup_upgrade")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_advanced_pickup_upgrade")
		.itemInputs("sophisticatedstorage:pickup_upgrade", "gtceu:item_filter")
		.itemOutputs("sophisticatedstorage:advanced_pickup_upgrade")
		.duration(50)
		.EUt(16);

	// Filter Upgrade
	event.recipes.gtceu
		.assembler("storage_filter_upgrade")
		.itemInputs("sophisticatedstorage:upgrade_base", "gtceu:item_filter")
		.itemOutputs("sophisticatedstorage:filter_upgrade")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_advanced_filter_upgrade")
		.itemInputs("sophisticatedstorage:filter_upgrade", "gtceu:item_tag_filter")
		.itemOutputs("sophisticatedstorage:advanced_filter_upgrade")
		.duration(50)
		.EUt(16);

	// Magnet Upgrade
	event.recipes.gtceu
		.assembler("storage_magnet_upgrade")
		.itemInputs("sophisticatedstorage:upgrade_base", "gtceu:lv_item_magnet")
		.itemOutputs("sophisticatedstorage:magnet_upgrade")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_advanced_magnet_upgrade")
		.itemInputs("sophisticatedstorage:magnet_upgrade", "gtceu:hv_item_magnet")
		.itemOutputs("sophisticatedstorage:advanced_magnet_upgrade")
		.duration(50)
		.EUt(16);

	// Feeding Upgrade
	event.recipes.gtceu
		.assembler("storage_feeding_upgrade")
		.itemInputs(
			"sophisticatedstorage:upgrade_base",
			"#forge:meat",
			"#forge:crops"
		)
		.itemOutputs("sophisticatedstorage:feeding_upgrade")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_advanced_feeding_upgrade")
		.itemInputs(
			"sophisticatedstorage:feeding_upgrade",
			"enchanted_golden_apple"
		)
		.itemOutputs("sophisticatedstorage:advanced_feeding_upgrade")
		.duration(50)
		.EUt(16);

	// Compacting Upgrade
	event.recipes.gtceu
		.assembler("storage_compacting_upgrade")
		.itemInputs(
			"sophisticatedstorage:upgrade_base",
			"2x gtceu:lv_electric_piston"
		)
		.itemOutputs("sophisticatedstorage:compacting_upgrade")
		.duration(50)
		.EUt(16);
	// S. Backpacks also don't have advanced compacting upgrade recipe.

	// Void Upgrade
	event.recipes.gtceu
		.assembler("storage_void_upgrade")
		.itemInputs("sophisticatedstorage:upgrade_base", "gtceu:item_voiding_cover")
		.itemOutputs("sophisticatedstorage:void_upgrade")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_advanced_void_upgrade")
		.itemInputs(
			"sophisticatedstorage:void_upgrade",
			"gtceu:advanced_item_voiding_cover"
		)
		.itemOutputs("sophisticatedstorage:advanced_void_upgrade")
		.duration(50)
		.EUt(16);

	// Smelting Upgrade
	event.shapeless("sophisticatedstorage:smelting_upgrade", [
		"sophisticatedstorage:upgrade_base",
		"furnace",
	]);
	event.recipes.gtceu
		.assembler("storage_smelting_upgrade")
		.itemInputs("sophisticatedstorage:upgrade_base", "furnace")
		.itemOutputs("sophisticatedstorage:smelting_upgrade")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_auto_smelting_upgrade")
		.itemInputs(
			"sophisticatedstorage:smelting_upgrade",
			"gtceu:lv_conveyor_module"
		)
		.itemOutputs("sophisticatedstorage:auto_smelting_upgrade")
		.duration(50)
		.EUt(16);

	// Smoking Upgrade
	event.shapeless("sophisticatedstorage:smoking_upgrade", [
		"sophisticatedstorage:upgrade_base",
		"smoker",
	]);
	event.recipes.gtceu
		.assembler("storage_smoking_upgrade")
		.itemInputs("sophisticatedstorage:upgrade_base", "smoker")
		.itemOutputs("sophisticatedstorage:smoking_upgrade")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_auto_smoking_upgrade")
		.itemInputs(
			"sophisticatedstorage:smoking_upgrade",
			"gtceu:lv_conveyor_module"
		)
		.itemOutputs("sophisticatedstorage:auto_smoking_upgrade")
		.duration(50)
		.EUt(16);

	// Blasting Upgrade
	event.shapeless("sophisticatedstorage:blasting_upgrade", [
		"sophisticatedstorage:upgrade_base",
		"blast_furnace",
	]);
	event.recipes.gtceu
		.assembler("storage_blasting_upgrade")
		.itemInputs("sophisticatedstorage:upgrade_base", "blast_furnace")
		.itemOutputs("sophisticatedstorage:blasting_upgrade")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_auto_blasting_upgrade")
		.itemInputs(
			"sophisticatedstorage:blasting_upgrade",
			"gtceu:lv_conveyor_module"
		)
		.itemOutputs("sophisticatedstorage:auto_blasting_upgrade")
		.duration(50)
		.EUt(16);

	// Crafting Upgrade
	event.shapeless("sophisticatedstorage:crafting_upgrade", [
		"sophisticatedstorage:upgrade_base",
		"crafting_table",
	]);
	event.recipes.gtceu
		.assembler("storage_crafting_upgrade")
		.itemInputs("sophisticatedstorage:upgrade_base", "crafting_table")
		.itemOutputs("sophisticatedstorage:crafting_upgrade")
		.duration(50)
		.EUt(16);

	// Stonecutter Upgrade
	event.shapeless("sophisticatedstorage:stonecutter_upgrade", [
		"sophisticatedstorage:upgrade_base",
		"stonecutter",
	]);
	event.recipes.gtceu
		.assembler("storage_stonecutter_upgrade")
		.itemInputs("sophisticatedstorage:upgrade_base", "stonecutter")
		.itemOutputs("sophisticatedstorage:stonecutter_upgrade")
		.duration(50)
		.EUt(16);

	// Stack Upgrade
	event.recipes.gtceu
		.assembler("storage_stack_upgrade_tier_1")
		.itemInputs("sophisticatedstorage:upgrade_base", "gtceu:lv_super_chest")
		.itemOutputs("sophisticatedstorage:stack_upgrade_tier_1")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_stack_upgrade_tier_2")
		.itemInputs("sophisticatedstorage:upgrade_base", "gtceu:mv_super_chest")
		.itemOutputs("sophisticatedstorage:stack_upgrade_tier_1_plus")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_stack_upgrade_tier_3")
		.itemInputs(
			"sophisticatedstorage:stack_upgrade_tier_1_plus",
			"gtceu:hv_super_chest"
		)
		.itemOutputs("sophisticatedstorage:stack_upgrade_tier_2")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_stack_upgrade_tier_4")
		.itemInputs(
			"sophisticatedstorage:stack_upgrade_tier_2",
			"gtceu:ev_super_chest"
		)
		.itemOutputs("sophisticatedstorage:stack_upgrade_tier_3")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_stack_upgrade_tier_5")
		.itemInputs(
			"sophisticatedstorage:stack_upgrade_tier_3",
			"gtceu:iv_quantum_chest"
		)
		.itemOutputs("sophisticatedstorage:stack_upgrade_tier_4")
		.duration(50)
		.EUt(16);
	// extra exclusive tier for storage
	event.recipes.gtceu
		.assembler("storage_stack_upgrade_tier_6")
		.itemInputs(
			"sophisticatedstorage:stack_upgrade_tier_4",
			"gtceu:luv_quantum_chest"
		)
		.itemOutputs("sophisticatedstorage:stack_upgrade_tier_5")
		.duration(50)
		.EUt(16);

	// Jukebox Upgrade
	event.recipes.gtceu
		.assembler("storage_jukebox_upgrade")
		.itemInputs("sophisticatedstorage:upgrade_base", "jukebox")
		.itemOutputs("sophisticatedstorage:jukebox_upgrade")
		.duration(50)
		.EUt(16);

	// Pump Upgrade
	event.recipes.gtceu
		.assembler("storage_pump_upgrade")
		.itemInputs("sophisticatedstorage:upgrade_base", "gtceu:lv_electric_pump")
		.itemOutputs("sophisticatedstorage:pump_upgrade")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_advanced_pump_upgrade")
		.itemInputs("sophisticatedstorage:pump_upgrade", "gtceu:mv_electric_pump")
		.itemOutputs("sophisticatedstorage:advanced_pump_upgrade")
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_xp_pump_upgrade")
		.itemInputs("sophisticatedstorage:pump_upgrade", "experience_bottle")
		.itemOutputs("sophisticatedstorage:xp_pump_upgrade")
		.duration(50)
		.EUt(16);

	// Hopper Upgrade
	event.shapeless("sophisticatedstorage:hopper_upgrade", [
		"sophisticatedstorage:upgrade_base",
		"minecraft:hopper",
	]);
	event.recipes.gtceu
		.assembler("storage_hopper_upgrade")
		.itemInputs("sophisticatedstorage:upgrade_base", "minecraft:hopper")
		.itemOutputs("sophisticatedstorage:hopper_upgrade")
		.circuit(1)
		.duration(50)
		.EUt(16);
	event.recipes.gtceu
		.assembler("storage_advanced_hopper_upgrade")
		.itemInputs(
			"sophisticatedstorage:hopper_upgrade",
			"gtceu:lv_conveyor_module"
		)
		.itemOutputs("sophisticatedstorage:advanced_hopper_upgrade")
		.duration(50)
		.EUt(16);

	// Misc

	event.shaped("sophisticatedstorage:packing_tape", ["RR", "SS", "SS"], {
		R: "gtceu:sticky_resin",
		S: "#forge:plates/paper",
	});

	event.shaped("sophisticatedstorage:decoration_table", ["U", "C"], {
		U: "sophisticatedstorage:upgrade_base",
		C: "minecraft:crafting_table",
	});
});
