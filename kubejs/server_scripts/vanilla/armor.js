ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;
  
    event.remove({ id: "minecraft:iron_helmet" });
    event.remove({ id: "minecraft:iron_chestplate" });
    event.remove({ id: "minecraft:iron_leggings" });
    event.remove({ id: "minecraft:iron_boots" });

    event.remove({ id: "minecraft:golden_helmet" });
    event.remove({ id: "minecraft:golden_chestplate" });
    event.remove({ id: "minecraft:golden_leggings" });
    event.remove({ id: "minecraft:golden_boots" });

    event.remove({ id: "minecraft:diamond_helmet" });
    event.remove({ id: "minecraft:diamond_chestplate" });
    event.remove({ id: "minecraft:diamond_leggings" });
    event.remove({ id: "minecraft:diamond_boots" });

    event.remove({ id: "minecraft:netherite_scrap" });
    event.remove({ id: "minecraft:netherite_scrap_from_blasting" });

    greg
      .electric_blast_furnace("gtceu:netherite_scrap")
      .itemInputs("minecraft:ancient_debris")
      .circuit(1)
      .itemOutputs("minecraft:netherite_scrap")
      .duration(20 * 100)
      .blastFurnaceTemp(2000)
      .EUt(120);

    greg
      .electric_blast_furnace("gtceu:netherite_scrap_nitrogen")
      .itemInputs("minecraft:ancient_debris")
      .inputFluids("gtceu:nitrogen 1000")
      .circuit(2)
      .itemOutputs("minecraft:netherite_scrap")
      .blastFurnaceTemp(2000)
      .duration(20 * 70)
      .EUt(120);

    event.shaped("minecraft:iron_helmet", ["   ", "PPP", "PHP"], {
        P: "#forge:plates/iron",
        H: "#forge:tools/hammers"
    });

    event.shaped("minecraft:iron_chestplate", ["PHP", "PPP", "PPP"], {
        P: "#forge:plates/iron",
        H: "#forge:tools/hammers"
    });

    event.shaped("minecraft:iron_leggings", ["PPP", "PHP", "P P"], {
        P: "#forge:plates/iron",
        H: "#forge:tools/hammers"
    });

    event.shaped("minecraft:iron_boots", ["   ", "P P", "PHP"], {
        P: "#forge:plates/iron",
        H: "#forge:tools/hammers"
    });


    event.shaped("minecraft:golden_helmet", ["   ", "PPP", "PHP"], {
        P: "#forge:plates/gold",
        H: "#forge:tools/hammers"
    });

    event.shaped("minecraft:golden_chestplate", ["PHP", "PPP", "PPP"], {
        P: "#forge:plates/gold",
        H: "#forge:tools/hammers"
    });

    event.shaped("minecraft:golden_leggings", ["PPP", "PHP", "P P"], {
        P: "#forge:plates/gold",
        H: "#forge:tools/hammers"
    });

    event.shaped("minecraft:golden_boots", ["   ", "P P", "PHP"], {
        P: "#forge:plates/gold",
        H: "#forge:tools/hammers"
    });


    event.shaped("minecraft:diamond_helmet", ["   ", "PPP", "PHP"], {
        P: "#forge:plates/diamond",
        H: "#forge:tools/hammers"
    });

    event.shaped("minecraft:diamond_chestplate", ["PHP", "PPP", "PPP"], {
        P: "#forge:plates/diamond",
        H: "#forge:tools/hammers"
    });

    event.shaped("minecraft:diamond_leggings", ["PPP", "PHP", "P P"], {
        P: "#forge:plates/diamond",
        H: "#forge:tools/hammers"
    });

    event.shaped("minecraft:diamond_boots", ["   ", "P P", "PHP"], {
        P: "#forge:plates/diamond",
        H: "#forge:tools/hammers"
    });
});