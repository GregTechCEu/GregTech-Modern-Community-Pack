ServerEvents.recipes(event => {
  const greg = event.recipes.gtceu
  const trees = [
    ["minecraft:oak_sapling", "minecraft:oak_log"],
    ["minecraft:spruce_sapling", "minecraft:spruce_log"],
    ["minecraft:birch_sapling", "minecraft:birch_log"],
    ["minecraft:jungle_sapling", "minecraft:jungle_log"],
    ["minecraft:acacia_sapling", "minecraft:acacia_log"],
    ["minecraft:dark_oak_sapling", "minecraft:dark_oak_log"],
    ["minecraft:mangrove_propagule", "minecraft:mangrove_log"]
  ]
  const plants = [
    ["minecraft:pumpkin_seeds", "minecraft:pumpkin", 6],
    ["minecraft:beetroot_seeds", "minecraft:beetroot", 16],
    ["minecraft:wheat_seeds", "minecraft:wheat", 16],
    ["minecraft:melon_seeds", "minecraft:melon", 6],
    ["minecraft:carrot", "minecraft:carrot", 12],
    ["minecraft:sugar_cane", "minecraft:sugar_cane", 12],
    ["minecraft:cactus", "minecraft:cactus", 12],
    ["minecraft:brown_mushroom", "minecraft:brown_mushroom", 12],
    ["minecraft:red_mushroom", "minecraft:red_mushroom", 12],
    ["minecraft:nether_wart", "minecraft:nether_wart", 12]
  ]

  event.shaped("gtceu:greenhouse", [
    'GGG',
    'CHC',
    'PUP'
  ] , {
    G: "gtceu:tempered_glass",
    C: "#forge:circuits/mv",
    H: "gtceu:mv_machine_hull",
    P: "gtceu:mv_electric_piston",
    U: "gtceu:mv_electric_pump"
  })
  trees.forEach(woodType => {
    greg.greenhouse(woodType[0])
      .notConsumable(woodType[0])
      .inputFluids('water 1000')
      .itemOutputs("64x " + woodType[1], "6x " + woodType[0])
      .duration(1200).EUt(40)
      .circuit(1)

    greg.greenhouse(woodType[0] + "_fertiliser")
      .notConsumable(woodType[0])
      .itemInputs("4x gtceu:fertilizer")
      .inputFluids('water 1000')
      .itemOutputs("64x " + woodType[1], "64x " + woodType[1], "12x " + woodType[0])
      .duration(900).EUt(60)
      .circuit(2)
  })
  
  plants.forEach(seedType => {
    greg.greenhouse(seedType[0])
      .notConsumable(seedType[0])
      .inputFluids('water 1000')
      .itemOutputs(seedType[2] + "x " + seedType[1])
      .duration(1200).EUt(40)
      .circuit(1)
    greg.greenhouse(seedType[0] + "_fertilizer")
      .notConsumable(seedType[0])
      .itemInputs("4x gtceu:fertilizer")
      .inputFluids('water 1000')
      .itemOutputs(2*seedType[2] + "x " + seedType[1])
      .duration(900).EUt(60)
      .circuit(2)
  })
})