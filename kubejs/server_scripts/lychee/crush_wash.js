ServerEvents.recipes(event => {
  let cauldronWash = (ore, result) => {
    event.custom({
      type: "lychee:item_inside",
      item_in: {
          item: ore
      },
      block_in: {
          blocks: ["water_cauldron"],
          state: {
              level: 3
          }
      },
      post: [
          {
              type: "drop_item",
              item: result
          }
      ]
    })
  }
  const oreTypes = [
    "aluminium",
    "beryllium",
    "cobalt",
    "copper",
    "gold",
    "iron",
    "lead",
    "lithium",
    "molybdenum",
    "neodymium",
    "nickel",
    "palladium",
    "platinum",
    "plutonium",
    "silver",
    "sulfur",
    "thorium",
    "tin",
    "naquadah",
    "almandine",
    "asbestos",
    "hematite",
    "blue_topaz",
    "goethite",
    "calcite",
    "cassiterite",
    "cassiterite_sand",
    "chalcopyrite",
    "chromite",
    "cinnabar",
    "coal",
    "cobaltite",
    "diamond",
    "emerald",
    "galena",
    "garnierite",
    "green_sapphire",
    "grossular",
    "ilmenite",
    "bauxite",
    "lazurite",
    "magnesite",
    "magnetite",
    "molybdenite",
    "powellite",
    "pyrite",
    "pyrolusite",
    "pyrope",
    "rock_salt",
    "ruby",
    "salt",
    "saltpeter",
    "sapphire",
    "scheelite",
    "sodalite",
    "tantalite",
    "spessartine",
    "sphalerite",
    "stibnite",
    "tetrahedrite",
    "topaz",
    "tungstate",
    "uraninite",
    "wulfenite",
    "yellow_limonite",
    "nether_quartz",
    "certus_quartz",
    "quartzite",
    "graphite",
    "bornite",
    "chalcocite",
    "realgar",
    "bastnasite",
    "pentlandite",
    "spodumene",
    "lepidolite",
    "glauconite_sand",
    "malachite",
    "mica",
    "barite",
    "alunite",
    "talc",
    "soapstone",
    "kyanite",
    "pyrochlore",
    "oilsands",
    "olivine",
    "opal",
    "amethyst",
    "lapis",
    "apatite",
    "tricalcium_phosphate",
    "red_garnet",
    "yellow_garnet",
    "vanadium_magnetite",
    "pollucite",
    "bentonite",
    "fullers_earth",
    "pitchblende",
    "monazite",
    "trona",
    "gypsum",
    "zeolite",
    "electrotine",
    "diatomite",
    "granitic_mineral_sand",
    "garnet_sand",
    "basaltic_mineral_sand",
    "cooperite"
  ]
  oreTypes.forEach(material => {
    cauldronWash("gtceu:" + material + "_crushed_ore", "gtceu:" + material + "_purified_ore")
    cauldronWash("gtceu:" + material + "_pure_dust", "gtceu:" + material + "_dust")
    cauldronWash("gtceu:" + material + "_impure_dust", "gtceu:" + material + "_dust")
  })
  
  cauldronWash("gtceu:redstone_crushed_ore", "gtceu:redstone_purified_ore")
  cauldronWash("gtceu:redstone_pure_dust", "minecraft:redstone")
  cauldronWash("gtceu:redstone_impure_dust", "minecraft:redstone")
})