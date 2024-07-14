ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  event.remove({ id: "minecraft:blaze_powder" });
  event.remove({ id: "gtceu:shapeless/blaze_rod_to_powder" });
  event.remove({ id: "minecraft:ender_eye" });

  //Ghast Tear
  greg
    .chemical_reactor("gtceu:ghast_tear")
    .itemInputs("#forge:tiny_dusts/potassium", "#forge:tiny_dusts/lithium")
    .inputFluids("gtceu:salt_water 1000")
    .itemOutputs("minecraft:ghast_tear")
    .duration(400)
    .EUt(30);
  // Skeleton Skull
  greg
    .assembler("gtceu:skeleton_skull")
    .itemInputs("minecraft:bone")
    .itemOutputs("skeleton_skull")
    .duration(100)
    .EUt(4);
  // Bones
  greg
    .extractor("gtceu:bones")
    .itemInputs("#minecraft:dirt")
    .itemOutputs("bone")
    .duration(100)
    .EUt(16);

  // Prismarine
  greg
    .autoclave("gtceu:prismarine")
    .itemInputs("minecraft:prismarine_crystals")
    .inputFluids("minecraft:water 100")
    .itemOutputs("prismarine_shard")
    .duration(1200)
    .EUt(24);
  greg
    .autoclave("gtceu:prismarine_distilled")
    .itemInputs("minecraft:prismarine_crystals")
    .inputFluids("gtceu:distilled_water 100")
    .itemOutputs("prismarine_shard")
    .duration(600)
    .EUt(24);
  greg
    .macerator("gtceu:prismarine_crushed")
    .itemInputs("minecraft:prismarine_shard")
    .itemOutputs("prismarine_crystals")
    .duration(120)
    .EUt(2);

  // Slimeballs
  greg
    .chemical_bath("gtceu:slimeball_bath")
    .itemInputs("#forge:dusts/asbestos")
    .inputFluids("gtceu:glue 250")
    .itemOutputs("slime_ball")
    .duration(200)
    .EUt(24);
  greg
    .centrifuge("gtceu:slimeballs_centrifuge")
    .itemInputs("slime_ball")
    .outputFluids("gtceu:glue 250")
    .itemOutputs("#forge:dusts/asbestos")
    .duration(200)
    .EUt(24);

  // Sponge
  greg
    .compressor("gtceu:spongebob")
    .itemInputs("2x #forge:foils/polycaprolactam")
    .itemOutputs("sponge")
    .duration(200)
    .EUt(2);

  // Fire Resistance
  event.shapeless(
    Item.of("minecraft:potion").withNBT({
      Potion: "minecraft:fire_resistance",
    }),
    [
      Item.of("minecraft:potion").withNBT({
        Potion: "minecraft:water",
      }).strongNBT(),
      "#forge:dusts/sugar",
      "#forge:dusts/stone",
      "#forge:dusts/lead",
    ]
  );
  event.shapeless(
    Item.of("minecraft:potion").withNBT({
      Potion: "minecraft:long_fire_resistance",
    }),
    [
      Item.of("minecraft:potion").withNBT({
        Potion: "minecraft:water",
      }).strongNBT(),
      "#forge:dusts/redstone",
      "#forge:dusts/sugar",
      "#forge:dusts/stone",
      "#forge:dusts/lead",
    ]
  );

  // XP
  greg
    .large_chemical_reactor("gtceu:bottle_o_enchanting")
    .itemInputs(
      "glass_bottle",
      "#forge:tiny_dusts/gold",
      "#forge:tiny_dusts/sugar"
    )
    .inputFluids("water 100")
    .itemOutputs("experience_bottle")
    .duration(20)
    .EUt(256);

  // Nether Star
  greg
    .chemical_reactor("gtceu:nether_star")
    .itemInputs("#forge:dusts/diamond", "#forge:dusts/iridium")
    .inputFluids("gtceu:rocket_fuel 1000", "gtceu:nether_air 8000")
    .itemOutputs("2x gtceu:nether_star_dust")
    .duration(200)
    .EUt(7680);

  // Netherite
  greg
    .alloy_smelter("gtceu:better_netherite")
    .itemInputs("2x netherite_scrap", "2x #forge:ingots/gold")
    .itemOutputs("1x netherite_ingot")
    .duration(150)
    .EUt(100);

  event.shaped(Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1), ["RWR", "WBW", "RmR"], {
    R: "#forge:plates/rubber",
    W: "#minecraft:wool",
    B: "minecraft:book",
    m: "#forge:tools/mallets"
  });
});
