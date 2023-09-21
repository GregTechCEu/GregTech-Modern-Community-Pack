ServerEvents.recipes(event => {
  const greg = event.recipes.gtceu
  event.remove({mod: "functionalstorage"})
  const woodTypes = [
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "dark_oak",
    "warped",
    "crimson",
    "mangrove"
  ]
  woodTypes.forEach(woodType => {
    // Type 1
    event.shaped("functionalstorage:" + woodType + "_1", [
      'PPP',
      'sCr',
      'PPP'
    ] , {
      P: woodType + "_planks",
      s: "#forge:tools/saws",
      C: "#forge:chests/wooden",
      r: "#forge:tools/mallets"
    })
    greg.assembler(woodType + "_drawer_1")
      .itemInputs("6x minecraft:" + woodType + "_planks", "#forge:chests/wooden")
      .itemOutputs("functionalstorage:" + woodType + "_1")
      .circuit(9)
      .duration(100).EUt(16)
    // Type 2
    event.shaped("functionalstorage:" + woodType + "_2", [
      'PPP',
      'rCs',
      'PPP'
    ] , {
      P: woodType + "_planks",
      s: "#forge:tools/saws",
      C: "#forge:chests/wooden",
      r: "#forge:tools/mallets"
    })
    greg.assembler(woodType + "_drawer_2")
      .itemInputs("6x minecraft:" + woodType + "_planks", "#forge:chests/wooden")
      .itemOutputs("functionalstorage:" + woodType + "_2")
      .circuit(10)
      .duration(100).EUt(16)
    // Type 4
    event.shaped("functionalstorage:" + woodType + "_4", [
      'PsP',
      'PCP',
      'PrP'
    ] , {
      P: woodType + "_planks",
      s: "#forge:tools/saws",
      C: "#forge:chests/wooden",
      r: "#forge:tools/mallets"
    })
    greg.assembler(woodType + "_drawer_4")
      .itemInputs("6x minecraft:" + woodType + "_planks", "#forge:chests/wooden")
      .itemOutputs("functionalstorage:" + woodType + "_4")
      .circuit(11)
      .duration(100).EUt(16)
  })


  event.shaped("functionalstorage:framed_1", [
    'PPP',
    'sCr',
    'PPP'
  ] , {
    P: "stick",
    s: "#forge:tools/saws",
    C: "#forge:chests/wooden",
    r: "#forge:tools/mallets"
  })
  greg.assembler("functionalstorage:framed_drawer_1")
    .itemInputs("6x stick", "#forge:chests/wooden")
    .itemOutputs("functionalstorage:framed_1")
    .circuit(9)
    .duration(100).EUt(16)
  // Type 2
  event.shaped("functionalstorage:framed_2", [
    'PPP',
    'rCs',
    'PPP'
  ] , {
    P: "stick",
    s: "#forge:tools/saws",
    C: "#forge:chests/wooden",
    r: "#forge:tools/mallets"
  })
  greg.assembler("functionalstorage:framed_drawer_2")
    .itemInputs("6x stick", "#forge:chests/wooden")
    .itemOutputs("functionalstorage:framed_2")
    .circuit(10)
    .duration(100).EUt(16)
  // Type 4
  event.shaped("functionalstorage:framed_4", [
    'PsP',
    'PCP',
    'PrP'
  ] , {
    P: "stick",
    s: "#forge:tools/saws",
    C: "#forge:chests/wooden",
    r: "#forge:tools/mallets"
  })
  greg.assembler("functionalstorage:framed_drawer_4")
    .itemInputs("6x stick", "#forge:chests/wooden")
    .itemOutputs("functionalstorage:framed_4")
    .circuit(11)
    .duration(100).EUt(16)

  // Controller
  event.remove({output: "functionalstorage:storage_controller"})
  event.shaped("functionalstorage:storage_controller", [
    'PCP',
    'KDK',
    'OPO'
  ] , {
    P: "#forge:plates/diamond",
    C: "#forge:circuits/lv",
    K: 'gtceu:red_alloy_single_wire',
    D: "#functionalstorage:drawer",
    O: "#forge:plates/obsidian"
  })
  // Controller Extension
  event.remove({output: "functionalstorage:controller_extension"})
  event.shaped("functionalstorage:controller_extension", [
    'OPO',
    'KDK',
    'PCP'
  ] , {
    P: "#forge:plates/diamond",
    C: "#forge:circuits/lv",
    K: 'gtceu:red_alloy_single_wire',
    D: "#functionalstorage:drawer",
    O: "#forge:plates/obsidian"
  })
})