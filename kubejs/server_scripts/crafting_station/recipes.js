ServerEvents.recipes((event) => {
  event.remove({ id: "craftingstation:crafting_station" });
  event.shapeless("craftingstation:crafting_station", [
    "minecraft:crafting_table",
    "#forge:tools/saws",
  ]);
  event.remove({ id: "craftingstation:crafting_station_slab" });
  event.shapeless("craftingstation:crafting_station_slab", [
    "craftingstation:crafting_station",
    "#forge:tools/saws",
  ]);
});
