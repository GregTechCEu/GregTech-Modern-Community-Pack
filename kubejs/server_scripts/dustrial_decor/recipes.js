ServerEvents.recipes(event => {
  const greg = event.recipes.gtceu
  event.replaceInput( {input: 'dustrial_decor:sheet_metal'}, 'dustrial_decor:sheet_metal', '#forge:plates/iron')

  let rusting = (blockType) => {
    event.remove({id: `dustrial_decor:rusty_sheet_metal_${blockType}`})
    greg.chemical_bath(`rusty_${blockType}`)
    .itemInputs(`dustrial_decor:sheet_metal_${blockType}`)
    .inputFluids('water 10')
    .itemOutputs(`dustrial_decor:rusty_sheet_metal_${blockType}`)
    .duration(20).EUt(8)
  }
  rusting("door")
  rusting("trapdoor")
  rusting("walling")
  rusting("siding")
  rusting("plating")
  rusting("treading")

})