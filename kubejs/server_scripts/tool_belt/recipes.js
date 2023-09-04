ServerEvents.recipes(event => {
  event.remove({id: "toolbelt:belt"})
  event.shaped("toolbelt:belt", [
    'SLS',
    'L L',
    'LIL'
  ] , {
    S: "minecraft:string",
    L: "minecraft:leather",
    I: "#forge:plates/iron"
  })
  event.remove({id: "toolbelt:pouch"})
  event.shaped("toolbelt:pouch", [
    ' G ',
    'LSL',
    '   '
  ] , {
    G: "#forge:ingots/gold",
    L: "minecraft:leather",
    S: "#forge:plates/steel"
  })
})