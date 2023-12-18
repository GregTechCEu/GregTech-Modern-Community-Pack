JEIEvents.removeCategories(event => {
  console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt
  event.remove("lychee:item_inside/minecraft/default")
  event.remove("jei:information")
  event.remove("ae2:certus_growth")
})