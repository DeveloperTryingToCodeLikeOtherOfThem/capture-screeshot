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
    //% blockId="capture_screen_image_at" weight=100
    //% block="capture screen image at %x %y scale of captured screen image || %sx %sy"
    //% blockSetVariable=captureScreenSprite
    //% x.defl=80
    //% y.defl=60
    //% sx.defl=scene.screenWidth()
    //% sy.defl=scene.screenHeight()
    export function captureScreenImageAt(x: number, y: number, sx = 2, sy = 2): Sprite {
        let screenCaptureSprite = sprites.create(image.create(screen.width, screen.height), ScreenCaptureKind.CaptureScreen)
        screenCaptureSprite.image.blit(x, y, sx, sy, screen, screenCaptureSprite.x, screenCaptureSprite.y, sx * screen.width, sy * screen.height, true, false)
        return screenCaptureSprite
    }

    //% blockId=capture_screen_pause block="pause %ms"
    //% shim=loops::pause weight=99
    //% ms.defl=100
    export function pause_(ms = 100) { 
        pause(ms)
    }
}
