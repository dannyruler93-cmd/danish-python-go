basic.show_string("DANISH PYHTON GO")
basic.show_leds("""
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    """)
basic.show_leds("""
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    . . . . .
    """)
input.button_is_pressed(Button.A)
basic.show_leds("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    """)
basic.show_icon(IconNames.SAD)
basic.show_leds("""
    . . . . .
    . # # # .
    # . . . #
    . # . # .
    . . # . .
    """)
input.logo_is_pressed()
record.start_recording(record.BlockingState.BLOCKING)
record.start_recording(record.BlockingState.BLOCKING)
record.stop_recording()
record.play_audio(record.BlockingState.BLOCKING)
basic.show_string("BYE BYE")
basic.show_string("LOLOLOLOLOLOLOLOLOLOLOL")
basic.show_string("do some questions")
basic.show_string("1+1")
basic.pause(100)
1 + 1
basic.show_string("I am Sigma")
basic.show_icon(IconNames.SMALL_SQUARE)
basic.show_icon(IconNames.SQUARE)
basic.pause(100)
basic.show_icon(IconNames.CHESSBOARD)
basic.show_icon(IconNames.DUCK)
radio.send_number(9.20)