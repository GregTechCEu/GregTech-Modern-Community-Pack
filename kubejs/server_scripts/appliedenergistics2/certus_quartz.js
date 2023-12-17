ServerEvents.recipes((event) => {
  event.replaceInput(
    { input: "ae2:charged_certus_quartz_crystal" },
    "ae2:charged_certus_quartz_crystal",
    "gtceu:certus_quartz_gem"
  );
  event.replaceInput(
    { input: "ae2:quartz_block" },
    "ae2:quartz_block",
    "gtceu:certus_quartz_block"
  );
});
