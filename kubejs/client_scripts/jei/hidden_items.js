RecipeViewerEvents.removeEntries("item", event => {

  // Remove AE2 facades
  event.remove('ae2:facade')

  // Remove the useless storage drawers stuff
  event.remove('storagedrawers:personal_key_cofh')
  event.remove('storagedrawers:portability_upgrade')
  event.remove('storagedrawers:conversion_upgrade')

  // Remove all irrelevant stonetype ores
  event.remove('#c:ores_in_ground/sand')
  event.remove('#c:ores_in_ground/red_sand')
  event.remove('#c:ores_in_ground/diorite')
  event.remove('#c:ores_in_ground/andesite')
  event.remove('#c:ores_in_ground/gravel')
  event.remove('#c:ores_in_ground/basalt')
  event.remove('#c:ores_in_ground/tuff')
  event.remove('#c:ores_in_ground/blackstone')
  event.remove('#c:ores_in_ground/marble')
  event.remove('#c:ores_in_ground/granite')
  event.remove('#c:ores_in_ground/red_granite')

  // Miscellaneous item hiding
  event.remove('ae2:ender_dust')
  event.remove('ae2:certus_quartz_dust')
  event.remove('ae2:certus_quartz_crystal')
  event.remove('ae2:fluix_dust')
  event.remove('ae2:silicon')

  event.remove('ae2:flawless_budding_quartz')
  event.remove('ae2:flawed_budding_quartz')
  event.remove('ae2:chipped_budding_quartz')
  event.remove('ae2:damaged_budding_quartz')

  event.remove('ae2:small_quartz_bud')
  event.remove('ae2:medium_quartz_bud')
  event.remove('ae2:large_quartz_bud')
  event.remove('ae2:quartz_cluster')

  // Remove any evidence of the eAE multiblock
  event.remove('extendedae:assembler_matrix_frame')
  event.remove('extendedae:assembler_matrix_wall')
  event.remove('extendedae:assembler_matrix_pattern')
  event.remove('extendedae:assembler_matrix_speed')
  event.remove('extendedae:assembler_matrix_crafter')
  event.remove('extendedae:assembler_matrix_glass')

  event.remove('extendedae:circuit_cutter')
})
