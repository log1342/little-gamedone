input.onPinPressed(TouchPin.P0, function () {
    game.pause()
})
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(score)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.resume()
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 100; index++) {
        enemy_sprite = game.createSprite(randint(0, 4), 0)
        for (let index = 0; index < 4; index++) {
            basic.pause(200)
            enemy_sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
        }
        if (sprite.isTouching(enemy_sprite)) {
            enemy_sprite.delete()
            score += 1
        } else if (enemy_sprite.isTouchingEdge()) {
            enemy_sprite.delete()
        }
        while (score == 20) {
            basic.showString("WINNER")
            basic.showIcon(IconNames.Yes)
        }
    }
})
let enemy_sprite: game.LedSprite = null
let score = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
score = 0
