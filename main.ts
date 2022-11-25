input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.showNumber(steps)
})
input.onButtonPressed(Button.B, function () {
    if (steps >= 20) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    if (steps % 20 == 0) {
        basic.clearScreen()
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.clearScreen()
    }
})
let steps = 0
steps = 0
basic.forever(function () {
    basic.showNumber(steps)
})
