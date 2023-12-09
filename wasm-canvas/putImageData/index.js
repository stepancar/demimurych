var width = 1920;
var height = 1080;

var pixels = new Uint8Array(width * height * 4);

for (var i = 0; i < pixels.length; i += 4) {
    pixels[i] = 255;     // Red channel
    pixels[i + 1] = 0;   // Green channel
    pixels[i + 2] = 0;   // Blue channel
    pixels[i + 3] = 255; // Alpha channel
}
var imageData = new ImageData(new Uint8ClampedArray(pixels), width, height, {colorSpace: 'srgb'});

var canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext('2d');

ctx.putImageData(imageData, 0, 0);

document.body.appendChild(canvas);
