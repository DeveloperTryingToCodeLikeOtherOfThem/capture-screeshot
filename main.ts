namespace ScreenCaptureKind {
    let nextKind: number;

    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }

    //% isKind
    export const CaptureScreen = ScreenCaptureKind.create()
}

namespace screenCapture {
    //% block="capture screen image at %x %y scale of captured screen image || %sx %sy"
    //% blockSetVariable=captureScreenSprite
    //% x.defl=80
    //% y.defl=60
    //% sx.defl=1 
    //% sy.defl=1
    export function captureScreenImageAt(x: number = 80, y: number = 60, sx = 1, sy = 1): Sprite {
        let screenCaptureSprite = sprites.create(image.create(screen.width, screen.height), ScreenCaptureKind.CaptureScreen)
        for (let y = 0; y < screen.height; y++)
        for (let x = 0; x < screen.width; x++) {
            const color = screen.getPixel(x, y)
            screenCaptureSprite.image.setPixel(x, y, color)
        }

        screenCaptureSprite.x = x
        screenCaptureSprite.y = y
        screenCaptureSprite.sx = sx
        screenCaptureSprite.sy = sy
        return screenCaptureSprite
    }
}
