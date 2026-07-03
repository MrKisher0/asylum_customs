function onUse(c) {
  c.subject.states.setNumber("energyTime", 400)
  onTick(c)
}

function onTick(c) {
  var energyTimer = c.subject.states.getNumber("energyTimer")

  // per tick
  c.subject.states.setNumber("energyTimer", energyTimer - 1)
  c.subject.states.setNumber("oxygen", 20)
  
  // stop cycle
  if (energyTimer > 0) {
    c.scheduleScript(1, onTick(c))
  } else {
    c.subject.states.setNumber("energyTimer", 0)
  }
}
