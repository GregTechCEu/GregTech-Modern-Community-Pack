ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  const woodTypes = [
    "oak",
    "spruce",
    "birch",
    "jungle",
    "acacia",
    "dark_oak",
    "warped",
    "crimson",
    "bamboo",
    "cherry",
    ["gtstoragedrawers", "gtceu_rubber", "gtceu:rubber"],
    ["gtstoragedrawers", "gtceu_treated", "gtceu:treated_wood"]
  ];
  woodTypes.forEach((input) => {
    let woodType = "";
    let modName = "storagedrawers";
    let baseWoodType = "";
    if (typeof(input) === "object") {
      woodType = input[1];
      modName = input[0];
      baseWoodType = input[2];
    } else {
      woodType = input;
      baseWoodType = `minecraft:${woodType}`
    }

    // Type 1
    event.shaped(
      `${modName}:${woodType}_full_drawers_1`,
      ["PPP", "sCr", "PPP"],
      {
        P: `${baseWoodType}_planks`,
        s: "#forge:tools/saws",
        C: "#forge:chests/wooden",
        r: "#forge:tools/mallets",
      }
    ).noMirror();
    greg
      .assembler(`${modName}:${woodType}_full_drawers_1`)
      .itemInputs(`6x ${baseWoodType}_planks`, "#forge:chests/wooden")
      .itemOutputs(`${modName}:${woodType}_full_drawers_1`)
      .circuit(9)
      .duration(100)
      .EUt(16);
    // Type 2
    event.shaped(
      `${modName}:${woodType}_full_drawers_2`,
      ["PPP", "rCs", "PPP"],
      {
        P: `${baseWoodType}_planks`,
        s: "#forge:tools/saws",
        C: "#forge:chests/wooden",
        r: "#forge:tools/mallets",
      }
    ).noMirror();
    greg
      .assembler(`${modName}:${woodType}_full_drawers_2`)
      .itemInputs(`6x ${baseWoodType}_planks`, "#forge:chests/wooden")
      .itemOutputs(`${modName}:${woodType}_full_drawers_2`)
      .circuit(10)
      .duration(100)
      .EUt(16);
    // Type 4
    event.shaped(
      `${modName}:${woodType}_full_drawers_4`,
      ["PsP", "PCP", "PrP"],
      {
        P: `${baseWoodType}_planks`,
        s: "#forge:tools/saws",
        C: "#forge:chests/wooden",
        r: "#forge:tools/mallets",
      }
    );
    greg
      .assembler(`${modName}:${woodType}_full_drawers_4`)
      .itemInputs(`6x ${baseWoodType}_planks`, "#forge:chests/wooden")
      .itemOutputs(`${modName}:${woodType}_full_drawers_4`)
      .circuit(11)
      .duration(100)
      .EUt(16);

    // Half 1
    event.shaped(
      `${modName}:${woodType}_half_drawers_1`,
      ["PPP", "sCr", "PPP"],
      {
        P: `${baseWoodType}_slab`,
        s: "#forge:tools/saws",
        C: "#forge:chests/wooden",
        r: "#forge:tools/mallets",
      }
    ).noMirror();
    greg
      .assembler(`${modName}:${woodType}_half_drawers_1`)
      .itemInputs(`6x ${baseWoodType}_slab`, "#forge:chests/wooden")
      .itemOutputs(`${modName}:${woodType}_half_drawers_1`)
      .circuit(9)
      .duration(100)
      .EUt(16);
    // Half 2
    event.shaped(
      `${modName}:${woodType}_half_drawers_2`,
      ["PPP", "rCs", "PPP"],
      {
        P: `${baseWoodType}_slab`,
        s: "#forge:tools/saws",
        C: "#forge:chests/wooden",
        r: "#forge:tools/mallets",
      }
    ).noMirror();
    greg
      .assembler(`${modName}:${woodType}_half_drawers_2`)
      .itemInputs(`6x ${baseWoodType}_slab`, "#forge:chests/wooden")
      .itemOutputs(`${modName}:${woodType}_half_drawers_2`)
      .circuit(10)
      .duration(100)
      .EUt(16);
    // Half 4
    event.shaped(
      `${modName}:${woodType}_half_drawers_4`,
      ["PsP", "PCP", "PrP"],
      {
        P: `${baseWoodType}_slab`,
        s: "#forge:tools/saws",
        C: "#forge:chests/wooden",
        r: "#forge:tools/mallets",
      }
    );
    greg
      .assembler(`${modName}:${woodType}_half_drawers_4`)
      .itemInputs(`6x ${baseWoodType}_slab`, "#forge:chests/wooden")
      .itemOutputs(`${modName}:${woodType}_half_drawers_4`)
      .circuit(11)
      .duration(100)
      .EUt(16);
    // Trim
    event.shaped(
      `${modName}:${woodType}_trim`,
      ["PPP", "PsP", "PPP"],
      {
        P: `${baseWoodType}_slab`,
        s: "#forge:tools/saws"
      }
    )
  });

  // Controller
  event.remove({ output: "storagedrawers:storage_controller" });
  event.shaped("storagedrawers:controller", ["PCP", "KDK", "OPO"], {
    P: "#forge:plates/diamond",
    C: "#gtceu:circuits/lv",
    K: "gtceu:red_alloy_single_wire",
    D: "#storagedrawers:drawers",
    O: "#forge:plates/obsidian",
  });
  // Controller Extension
  event.remove({ output: "storagedrawers:controller_slave" });
  event.shaped("storagedrawers:controller_slave", ["OPO", "KDK", "PCP"], {
    P: "#forge:plates/diamond",
    C: "#gtceu:circuits/lv",
    K: "gtceu:red_alloy_single_wire",
    D: "#storagedrawers:drawers",
    O: "#forge:plates/obsidian",
  });
});
