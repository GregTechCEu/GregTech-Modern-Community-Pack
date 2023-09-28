ServerEvents.recipes(event => {
  const greg = event.recipes.gtceu
  event.remove({mod: "pipez"})
  
  // Item Pipe
  event.shaped('2x pipez:item_pipe', [
    'RRR',
    'BhB',
    'RRR'
  ] , {
    R: "#forge:plates/rubber",
    B: "#forge:plates/brass",
    h: "#forge:tools/hammers"
  })
  greg.assembler("rubber_pipe")
    .itemInputs("2x #forge:plates/brass")
    .inputFluids("gtceu:rubber 432")
    .itemOutputs("2x pipez:item_pipe")
    .duration(100).EUt(7)

  event.shaped('4x pipez:item_pipe', [
    'RRR',
    'BhB',
    'RRR'
  ] , {
    R: "#forge:plates/silicone_rubber",
    B: "#forge:plates/brass",
    h: "#forge:tools/hammers"
  })
  greg.assembler("silicone_rubber_pipe")
    .itemInputs("2x #forge:plates/brass")
    .inputFluids("gtceu:silicone_rubber 216")
    .itemOutputs("4x pipez:item_pipe")
    .duration(100).EUt(7)

  event.shaped('16x pipez:item_pipe', [
    'RRR',
    'BhB',
    'RRR'
  ] , {
    R: "#forge:plates/styrene_butadiene_rubber",
    B: "#forge:plates/brass",
    h: "#forge:tools/hammers"
  })
  greg.assembler("styrene_butadiene_rubber_pipe")
    .itemInputs("2x #forge:plates/brass")
    .inputFluids("gtceu:styrene_butadiene_rubber 108")
    .itemOutputs("16x pipez:item_pipe")
    .duration(100).EUt(7)
  
  let upgradePipe = (machineTier, material, upgradeTier) => {
    event.shaped(`pipez:${upgradeTier}_upgrade`, [
      'PPP',
      'CFC',
      'PPP'
    ] , {
      P: `#forge:plates/${material}`,
      C: `gtceu:${machineTier}_conveyor_module`,
      F: "gtceu:item_filter"
    })
  }
  upgradePipe("mv", "aluminium", "basic")
  upgradePipe("hv", "stainless_steel", "improved")
  upgradePipe("ev", "titanium", "advanced")
  upgradePipe("iv", "tungsten_steel", "ultimate")

  // Wrench
  event.shaped('pipez:wrench', [
    'IhI',
    ' S ',
    ' S '
  ] , {
    I: "#forge:plates/iron",
    S: "#forge:plates/steel",
    h: "#forge:tools/hammers"
  })

  // Terminal
  event.shaped('pipez:filter_destination_tool', [
    'R B',
    'FCF',
    'PSP'
  ] , {
    R: "gtceu:red_alloy_single_wire",
    B: "gtceu:cobalt_single_wire",
    F: "gtceu:item_filter",
    C: "#forge:circuits/mv",
    P: "#forge:plates/vanadium_steel",
    S: "#forge:screws/vanadium_steel"
  })
})