scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.over(true)
})
let duckie = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(duckie, 150, 150)
scene.setBackgroundColor(11)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010200000000000001010101010101010101010101010100010101010100000000010101010101000101010101000101000000000000010001010101010001010003010101000100000000000000010100010100000001010101010101010101000101000101010101010101010101010001010001000000000101010101010100010100010001010001010100000000000101000100010100010101000101010101010000000101000101010001010101010101010101010000000000010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 . . . . . . . . 
    . . . . . . . 2 . . . 2 2 2 2 2 
    2 2 2 2 2 2 . 2 . . . 2 . . . . 
    2 2 2 2 2 2 . 2 . . . 2 . 2 2 . 
    . . . . . 2 . 2 2 2 2 2 . 2 2 . 
    2 2 2 2 . 2 . . . . . . . 2 2 . 
    . 2 . . . 2 2 2 2 2 2 2 2 2 2 . 
    . 2 . 2 2 2 2 2 2 . . . . . 2 . 
    . 2 . 2 . . . . 2 . 2 2 2 2 2 . 
    . 2 . 2 . 2 2 . 2 . 2 . . . . . 
    . 2 . 2 . 2 2 . 2 . 2 . 2 2 2 2 
    . 2 . . . 2 2 . 2 2 2 . 2 . . . 
    . 2 2 2 2 2 2 . . . . . 2 . . . 
    . . . . . . 2 2 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0], TileScale.Sixteen))
tiles.placeOnRandomTile(duckie, sprites.castle.tileDarkGrass2)
scene.cameraFollowSprite(duckie)
info.startCountdown(20)
