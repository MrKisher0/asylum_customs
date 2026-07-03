function main(c) {
  var ui = mappet.createUI(c, "handler")
    
  var oxygen = c.getSubject().getStates().getNumber("oxygen")
  var label = ui.label("Кислород: " + oxygen + "%").id("oxygenLabel")
    
  label.rx(0.6).ry(0.7).wh(200, 30).anchor(0.5).labelAnchor(0.5)
  c.getSubject().setupHUD("Hand")
  
  c.getSubject().openUI(u)
}

function handler(c) {
  var ctx = c.getSubject().getUIContext()

  if (ctx.isClosed()) {
    c.getSubject().closeHUD("hand")
  }
}
