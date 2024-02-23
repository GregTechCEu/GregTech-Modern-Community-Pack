ServerEvents.recipes((event) => {
  event.shaped("gtceu:construction_core", ["PRP", "CHC", "MCM"], {
    M: "gtceu:lv_electric_motor",
    C: "#gtceu:circuits/lv",
    H: "gtceu:lv_machine_hull",
    P: "gtceu:manganese_phosphide_single_wire",
    R: "gtceu:lv_robot_arm",
  });

  event.shaped("gtceu:greenhouse", ["GGG", "CHC", "PUP"], {
    G: "gtceu:tempered_glass",
    C: "#gtceu:circuits/mv",
    H: "gtceu:mv_machine_hull",
    P: "gtceu:mv_electric_piston",
    U: "gtceu:mv_electric_pump",
  });
});
