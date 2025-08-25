BlockEvents.rightClicked(event => {
  const { player, block, level, hand } = event
  if (level.isClientSide()) return
  if (block.id != 'kubejs:ultimate_cheese') return

 
  if (hand.name() !== 'MAIN_HAND') return

  const cooldownKey = 'cheese_last_use'
  const now = level.server.overworld().time
  const lastUsed = player.persistentData[cooldownKey] || 0
  const cooldownTicks = 1800
  const remaining = cooldownTicks - (now - lastUsed)

  if (remaining > 0) {
    const secondsLeft = Math.ceil(remaining / 20)
    player.tell(Text.red(`The cheese is still cooling down! (${secondsLeft}s)`))
    return
  }

  player.persistentData[cooldownKey] = now

  level.server.runCommandSilent(`effect give ${player.username} minecraft:regeneration 10 0 true`)

  player.tell(Text.yellow('The Cheese fills your wounds healing you!'))
})
