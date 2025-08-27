
const arsLocateStructure = (event, target, inputs, id) => {

    let recipe = {
        type: "ars_additions:locate_structure",
        id: id
    }

    if(target.startsWith("#"))
        recipe.structure = {tag: target}
    else
        recipe.structure = {key: target}

    let finalInputs = []
    inputs.forEach(entry => entry.startsWith("#") 
        ? finalInputs.push({tag: entry}) 
        : finalInputs.push({key: entry}))

    recipe.augments = finalInputs

    return event.custom(recipe)
}


ServerEvents.recipes(event => {

    arsLocateStructure(event, "betterfortresses:fortress", ["minecraft:nether_brick"], "ars_additions:fortress")
})