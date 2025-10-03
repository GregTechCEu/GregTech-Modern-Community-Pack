JEIEvents.hideItems(event => {

  // Hide AE2 facades
  event.hide('ae2:facade')

  // Hide the useless storage drawers stuff
  event.hide('storagedrawers:personal_key_cofh')
  event.hide('storagedrawers:portability_upgrade')
  event.hide('storagedrawers:conversion_upgrade')

  // Hide all irrelevant stonetype ores
  event.hide('#forge:ores_in_ground/sand')
  event.hide('#forge:ores_in_ground/red_sand')
  event.hide('#forge:ores_in_ground/diorite')
  event.hide('#forge:ores_in_ground/andesite')
  event.hide('#forge:ores_in_ground/gravel')
  event.hide('#forge:ores_in_ground/basalt')
  event.hide('#forge:ores_in_ground/tuff')
  event.hide('#forge:ores_in_ground/blackstone')
  event.hide('#forge:ores_in_ground/marble')
  event.hide('#forge:ores_in_ground/granite')
  event.hide('#forge:ores_in_ground/red_granite')

  // Miscellaneous item hiding
  event.hide('ae2:ender_dust')
  event.hide('ae2:certus_quartz_dust')
  event.hide('ae2:certus_quartz_crystal')
  event.hide('ae2:fluix_dust')
  event.hide('ae2:silicon')

  event.hide('ae2:flawless_budding_quartz')
  event.hide('ae2:flawed_budding_quartz')
  event.hide('ae2:chipped_budding_quartz')
  event.hide('ae2:damaged_budding_quartz')

  event.hide('ae2:small_quartz_bud')
  event.hide('ae2:medium_quartz_bud')
  event.hide('ae2:large_quartz_bud')
  event.hide('ae2:quartz_cluster')

  // Hide any evidence of the eAE multiblock
  event.hide('expatternprovider:assembler_matrix_frame')
  event.hide('expatternprovider:assembler_matrix_wall')
  event.hide('expatternprovider:assembler_matrix_pattern')
  event.hide('expatternprovider:assembler_matrix_speed')
  event.hide('expatternprovider:assembler_matrix_crafter')
  event.hide('expatternprovider:assembler_matrix_glass')

  event.hide('expatternprovider:circuit_cutter')


})
