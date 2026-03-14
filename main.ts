basic.showString("DANISH PYHTON GO")
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.showLeds(`
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    . . . . .
    `)
input.buttonIsPressed(Button.A)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showIcon(IconNames.Sad)
basic.showLeds(`
    . . . . .
    . # # # .
    # . . . #
    . # . # .
    . . # . .
    `)
input.logoIsPressed()
record.startRecording(record.BlockingState.Blocking)
record.startRecording(record.BlockingState.Blocking)
record.stopRecording()
record.playAudio(record.BlockingState.Blocking)
basic.showString("BYE BYE")
basic.showString("LOLOLOLOLOLOLOLOLOLOLOL")
basic.showString("do some questions")
basic.showString("1+1")
basic.pause(500)
1 + 1
