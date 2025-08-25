StartupEvents.registry('block', event => {
  event.create('reactor_tnt', 'basic') // <- must be 'machine' to use a block entity
    .displayName('Reactor TNT')
    .material('explosive')
    .hardness(0.0)
    .requiresTool(false)
    .renderType('solid')
})