ServerEvents.recipes((event) => {
  event.remove({ mod: "itemfilters" });
  event.remove({ mod: "better_angel_ring" });

  event.remove({id: "minecraft:charcoal"})
});
