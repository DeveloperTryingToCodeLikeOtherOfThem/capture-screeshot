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
  //% x.defl=scene.screenWidth() >> 1
  //% y.defl=scene.screenHeight() >> 1
 //% sx.defl=1 
  //% sy.defl=1
  export function captureScreenImageAt(x: number = scene.screenWidth(), y: number = scene.screenHeight(), sx = scene.screenWidth(), sy = scene.screenHeight()): Sprite {
    let screenCaptureSprite = sprites.create(screen, ScreenCaptureKind.CaptureScreen)
    screenCaptureSprite.x = x 
    screenCaptureSprite.y = y
    screenCaptureSprite.sx = sx 
    screenCaptureSprite.sy = sy
    return screenCaptureSprite
  }

  
 }