ServerEvents.recipes(event => {
  // Building Tool
  event.remove({output: "buildinggadgets:gadget_building"})
  event.shaped("buildinggadgets:gadget_building", [
    'PLP',
    'DCD',
    'PKP'
  ] , {
    P: "#forge:plates/steel",
    L: "#forge:plates/lapis",
    D: "#forge:plates/diamond",
    C: "#forge:circuits/lv",
    K: "gtceu:tin_single_cable"
  })
  // Exchanging Tool
  event.remove({output: "buildinggadgets:gadget_exchanging"})
  event.shaped("buildinggadgets:gadget_exchanging", [
    'PLP',
    'DCD',
    'PKP'
  ] , {
    P: "#forge:plates/steel",
    L: "#forge:plates/gold",
    D: "#forge:plates/diamond",
    C: "#forge:circuits/lv",
    K: "gtceu:tin_single_cable"
  })
  // Copy-paste Tool
  event.remove({output: "buildinggadgets:gadget_copy_paste"})
  event.shaped("buildinggadgets:gadget_copy_paste", [
    'PLP',
    'DCD',
    'PKP'
  ] , {
    P: "#forge:plates/steel",
    L: "#forge:plates/redstone",
    D: "#forge:plates/emerald",
    C: "#forge:circuits/lv",
    K: "gtceu:tin_single_cable"
  })

  // Template Manager
  event.remove({output: "buildinggadgets:template_manager"})
  event.shaped("buildinggadgets:template_manager", [
    'KCK',
    'CHC',
    'KCK'
  ] , {
    K: "gtceu:tin_single_cable",
    C: "#forge:circuits/lv",
    H: "gtceu:lv_machine_hull"
  })
  
  // Destruction Gadget
  event.remove({output: "buildinggadgets:gadget_destruction"})
  event.shaped("buildinggadgets:gadget_destruction", [
    'PLP',
    'DCD',
    'PKP'
  ] , {
    P: "#forge:plates/aluminium",
    L: "#forge:plates/nether_quartz",
    D: "#forge:plates/ender_pearl",
    C: "#forge:circuits/mv",
    K: "gtceu:copper_single_cable"
  })

  event.remove({output: "buildinggadgets:construction_paste_powder"})

  // Construction Paste
  event.recipes.gtceu.fluid_solidifier('gtceu:construction_paste')
    .notConsumable("gtceu:ball_casting_mold")
    .inputFluids("gtceu:construction_foam 100")
    .itemOutputs("buildinggadgets:construction_paste")
    .duration(128)
    .EUt(4)
})