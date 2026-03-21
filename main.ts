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
basic.pause(100)
1 + 1
basic.showString("I am Sigma")
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Square)
basic.pause(100)
basic.showIcon(IconNames.Chessboard)
basic.showIcon(IconNames.Duck)
