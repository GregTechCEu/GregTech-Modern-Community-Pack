GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {
    event.create("javd:void")
    .iconSupplier(() => Item.of("javd:portal_block").getItem())
    .tier(0)
    .overrideName("Void Dimension");
});
