ServerEvents.recipes((event) => {
  event.remove({ id: "hangglider:glider_wing" });
  event.shaped("hangglider:glider_wing", ["hRL", "RLL", "LLL"], {
    h: "#forge:tools/hammers",
    R: "#forge:rods/steel",
    L: "minecraft:leather",
  });
  event.remove({ id: "hangglider:glider_framework" });
  event.shaped("hangglider:glider_framework", [" R ", "RhR", "RRR"], {
    h: "#forge:tools/hammers",
    R: "#forge:rods/steel",
  });
  event.remove({ id: "hangglider:hang_glider" });
  event.shaped("hangglider:hang_glider", ["SSS", "LML", "SSS"], {
    S: "#forge:screws/iron",
    L: "hangglider:glider_wing",
    M: "hangglider:glider_framework",
  });
  event.remove({ output: "hangglider:reinforced_hang_glider" });
  event.shaped("hangglider:reinforced_hang_glider", ["SVS", "LML", "SVS"], {
    S: "#forge:screws/vanadium_steel",
    V: "#forge:rods/vanadium_steel",
    L: "hangglider:glider_wing",
    M: "hangglider:hang_glider",
  });
});
