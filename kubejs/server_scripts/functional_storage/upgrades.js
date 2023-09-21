ServerEvents.recipes(event => {
  // Copper
  event.shaped("functionalstorage:copper_upgrade", [
    'PTP'
  ] , {
    P: "#forge:plates/double/copper",
    T: "#forge:plates/obsidian"
  })
  event.shaped("2x functionalstorage:copper_upgrade", [
    'PTP'
  ] , {
    P: "#forge:plates/double/annealed_copper",
    T: "#forge:plates/obsidian"
  })
  // Gold
  event.shaped("functionalstorage:gold_upgrade", [
    'S S',
    'PTP',
    'S S'
  ] , {
    P: "#forge:plates/rose_gold",
    T: "functionalstorage:copper_upgrade",
    S: "#forge:rods/gold"
  })
  // Diamond
  event.shaped("functionalstorage:diamond_upgrade", [
    'S S',
    'PTP',
    'S S'
  ] , {
    P: "#forge:plates/diamond",
    T: "functionalstorage:gold_upgrade",
    S: "#forge:rods/stainless_steel"
  })
  // Netherite
  event.shaped("functionalstorage:netherite_upgrade", [
    'S S',
    'PTP',
    'S S'
  ] , {
    P: "#forge:ingots/netherite",
    T: "functionalstorage:diamond_upgrade",
    S: "#forge:rods/titanium"
  })
  // Single Stack
  event.shaped("functionalstorage:iron_downgrade", [
    'PTP'
  ] , {
    P: "flint",
    T: "#forge:plates/obsidian"
  })
  // Void
  event.shaped("functionalstorage:void_upgrade", [
    'PPP',
    'PTP',
    "PPP"
  ] , {
    P: "obsidian",
    T: "#forge:plates/obsidian"
  })

  // Drawer Key
  event.shaped("functionalstorage:configuration_tool", [
    ' GP',
    'PTB',
    " GP"
  ] , {
    B: "#forge:bolts/gold",
    T: "#forge:circuits/ulv",
    P: "#forge:plates/steel",
    G: "#forge:plates/iron"
  })

  // Drawer Key
  event.shaped("functionalstorage:linking_tool", [
    'PG ',
    'BTP',
    "PG "
  ] , {
    B: "#forge:bolts/gold",
    T: "#forge:circuits/lv",
    P: "#forge:plates/steel",
    G: "#forge:plates/iron"
  })

})