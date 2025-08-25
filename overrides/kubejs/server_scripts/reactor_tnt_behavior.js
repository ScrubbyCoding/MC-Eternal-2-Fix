BlockEvents.rightClicked(event => {
  if (!event.server) return 
  if (event.hand !== 'main_hand') return 
  if (event.block.id === 'kubejs:reactor_tnt' && event.item.empty) {
    const player = event.player
    const world = event.level
    const pos = event.block.pos

    
    player.tell('§aThe reactor hums with unstable energy...')

    
    player.potionEffects.add('minecraft:nausea', 200, 0)
    player.potionEffects.add('alexscaves:irradiated', 200, 0)

    
    world.playSound(null, pos, 'minecraft:block.beacon.activate', 'block', 1.0, 1.0)

    event.cancel()
  }
})

BlockEvents.broken(event => {
  if (event.block.id.startsWith('kubejs:reactor_tnt')) {
    const player = event.player
    const world = event.level
    const pos = event.block.pos

    if (player) {
      player.potionEffects.add('minecraft:nausea', 200, 0)
      player.potionEffects.add('minecraft:slowness', 200, 5)
      player.potionEffects.add('alexscaves:irradiated', 600, 0)
      player.potionEffects.add('alexsmobs:earthquake', 200, 0)
      player.tell('§4The broken reactor releases a wave of sickening energy!')
    }

    
    const x = pos.x
    const y = pos.y
    const z = pos.z

    world.runCommandSilent(`summon minecraft:tnt ${x + 0.5} ${y} ${z + 0.5} {Fuse:40}`)
    world.runCommandSilent(`summon minecraft:tnt ${x + 0.2} ${y} ${z + 0.8} {Fuse:40}`)

  }
})