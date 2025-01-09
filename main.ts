player.onArrowShot(function () {
    chances += -1
    arrows += 1
    if (chances <= 0) {
        gameplay.title(mobs.target(NEAREST_PLAYER), "Game Over", "chances :" + chances)
        loops.pause(500)
        gameplay.title(mobs.target(NEAREST_PLAYER), "Arrows Used: " + arrows, "")
    } else {
        gameplay.title(mobs.target(NEAREST_PLAYER), "chances :" + chances, "")
    }
})
player.onItemInteracted(BOW, function () {
	
})
player.onChat("run", function () {
    gameplay.title(mobs.target(NEAREST_PLAYER), "Type \"start\" command", "")
    position = positions.add(
    player.position(),
    pos(0, 6, 0)
    )
    shapes.circle(
    OBSIDIAN,
    position,
    5,
    Axis.X,
    ShapeOperation.Replace
    )
    shapes.circle(
    NETHER_WART_BLOCK,
    position,
    4,
    Axis.X,
    ShapeOperation.Replace
    )
    shapes.circle(
    OBSIDIAN,
    position,
    3,
    Axis.X,
    ShapeOperation.Replace
    )
    shapes.circle(
    NETHER_WART_BLOCK,
    position,
    2,
    Axis.X,
    ShapeOperation.Replace
    )
    shapes.circle(
    GOLD_BLOCK,
    position,
    1,
    Axis.X,
    ShapeOperation.Replace
    )
    player.teleport(positions.add(
    position,
    pos(0, -6, 0)
    ))
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    BOW,
    1
    )
})
player.onChat("START", function () {
    chances = 20
    arrows = 0
})
let position: Position = null
let arrows = 0
let chances = 0
gameplay.setWeather(CLEAR)
gameplay.timeSet(gameplay.time(DAY))
gameplay.title(mobs.target(NEAREST_PLAYER), "Type \"run\" command", "")
