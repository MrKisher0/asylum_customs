function main(c) {
  var o2 = c.subject.states.getNumber("oxygen")
  var breath_speed = Math.round(Math.random() * 4)
  var isMinus = Math.round(Math.random() * 6)

  if (isMinus >= 5) {
    c.subject.states.setNumber("oxygen", o2 - breath_speed)
  }

  if (o2 < 0) c.subject.states.setNumber("oxygen", 0)
  if (o2 < 5) c.subject.addPotion(mappet.getPotion("wither"), 40, 1, true)
  if (o2 > 20) c.subject.states.setNumber("oxygen", 20)
  if (c.subject.isSprinting()) c.subject.states.setNumber("oxygen", o2 - 0.1)
  if (!c.subject.isSprinting()) c.subject.states.setNumber("oxygen", o2 + 0.1)
  
  // tick
  c.subject.states.setNumber("oxygen", o2 + 0.5)
}
