def data_logging():
    global Water_Intake, Mood_Level
    while True:
        basic.show_string("W:")
        while not (input.button_is_pressed(Button.B)):
            if input.button_is_pressed(Button.A):
                Water_Intake += 1
                basic.show_number(Water_Intake)
        basic.clear_screen()
        basic.show_string("M:")
        while not (input.button_is_pressed(Button.B)):
            if input.button_is_pressed(Button.A):
                Mood_Level += 1
                basic.show_number(Mood_Level)
        basic.clear_screen()
        serial.write_line("" + str(Steps_Taken) + "," + str(Water_Intake) + "," + str(Mood_Level) + ",")
        break
Water_Intake = 0
Steps_Taken = 0
Mood_Level = 0
Mood_Level = 0
Steps_Taken = 0
Water_Intake = 0
serial.redirect_to_usb()
while not (input.button_is_pressed(Button.B)):
    if input.is_gesture(Gesture.SHAKE):
        Steps_Taken += 1
        basic.show_leds("""
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            """)
        basic.clear_screen()
basic.show_number(Steps_Taken)
basic.clear_screen()
basic.pause(1000)
data_logging()