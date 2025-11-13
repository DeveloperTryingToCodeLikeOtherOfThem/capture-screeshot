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
  //% block="capture screen image at %x=scene.screenWidth() %y=scene.screenHeight() scale of captured screen image || %sx %sy"
  //% blockSetVariable=captureScreenSprite
  //% sx.defl=1 
  //% sy.defl=1
  export function captureScreenImageAt(x: number = scene.screenWidth(), y: number = scene.screenHeight(), sx = scene.screenWidth(), sy = scene.screenHeight()): Sprite {
    const screenCapturedImage = image.create(screen.width, screen.height)
    screenCapturedImage.blit(x, y, 0, 0, screen, screen.width, screen.height, sx, sy, true, false)

    let screenCaptureSprite = sprites.create(screenCapturedImage, ScreenCaptureKind.CaptureScreen)
    return screenCaptureSprite
  }
 }