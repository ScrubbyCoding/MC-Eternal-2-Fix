
StartupEvents.registry('item', event => {
    event.create('sunscreen')
        .displayName('§eBottle of Sunblock')
        .food(food => {
            food.hunger(0)
            food.saturation(0.0)
            food.effect('mowziesmobs:sunblock', 2250, 0, 1.0)
            food.effect('vampirism:sunscreen', 2250, 0, 2.0)
        })
})
