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
  //% x.defl=scene.screenWidth() 
  //% y.defl=scene.screenHeight()
  //% sx.defl=1 
  //% sy.defl=1
  export function captureScreenImageAt(x: number = screen.width, y: number = screen.height, sx = 1, sy = 1) {
    const screenCapturedImage = image.create(screen.width, screen.height)
    screenCapturedImage.blit(x, y, 0, 0, screen, x, y, sx, sy, true, false)

    let screenCaptureSprite = sprites.create(screenCapturedImage, ScreenCaptureKind.CaptureScreen)
  }
 }