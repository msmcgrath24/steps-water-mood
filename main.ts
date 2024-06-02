function data_logging () {
    while (true) {
        basic.showString("W:")
        while (!(input.buttonIsPressed(Button.B))) {
            if (input.buttonIsPressed(Button.A)) {
                Water_Intake += 1
                basic.showNumber(Water_Intake)
            }
        }
        basic.clearScreen()
        basic.showString("M:")
        while (!(input.buttonIsPressed(Button.B))) {
            if (input.buttonIsPressed(Button.A)) {
                Mood_Level += 1
                basic.showNumber(Mood_Level)
            }
        }
        basic.clearScreen()
        serial.writeLine("" + Steps_Taken + "," + Water_Intake + "," + Mood_Level + ",")
        break;
    }
}
let Water_Intake = 0
let Steps_Taken = 0
let Mood_Level = 0
Mood_Level = 0
Steps_Taken = 0
Water_Intake = 0
serial.redirectToUSB()
while (!(input.buttonIsPressed(Button.B))) {
    if (input.isGesture(Gesture.Shake)) {
        Steps_Taken += 1
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.clearScreen()
    }
}
basic.showNumber(Steps_Taken)
basic.clearScreen()
basic.pause(1000)
data_logging()
