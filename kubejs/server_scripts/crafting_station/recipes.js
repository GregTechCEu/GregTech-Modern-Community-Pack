ServerEvents.recipes(event => {
  event.remove({id: "craftingstation:crafting_station"})
  event.shapeless("craftingstation:crafting_station", [
    "minecraft:crafting_table",
    "#forge:tools/saws"
  ])
})