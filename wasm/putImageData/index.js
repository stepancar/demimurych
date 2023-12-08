var height = 1080;
var width = 1920;

// init image data, fill with color
var rawData = new Uint8ClampedArray(width * height * 4)
// const a = CanvasRenderingContext2D.prototype.createImageData();
// a.data.fill(128)
for (let row = 0; row < height; row++) {
    for (let column = 0; column < width; column++) {
        rawData.set([255,1,1, 0], row * width * 4 + column*4)
        // rawData.set([44], row * width + column+1)
        // rawData.set([0], row * width + column+2)
        // rawData.set([1], row * width + column+3)
        //rawData.set([255], row * width * 4 + column+1)
    }
}

var imageData = new ImageData(rawData, width, height, {
    colorSpace: 'srgb'
})
var canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;
var ctx = canvas.getContext('2d');


ctx.putImageData(imageData, 0, 0);

document.body.appendChild(canvas);

ctx.putImageData(imageData, 200, 100);


// a demo which demonstrates how to draw red color to webgl binded buffer

const context = canvas.getContext('webgl')
const program = context.createProgram();
const vertexShader = context.createShader(context.VERTEX_SHADER);
const fragmentShader = context.createShader(context.FRAGMENT_SHADER);
context.shaderSource(vertexShader, `
    attribute vec2 a_position;
    void main() {
        gl_Position = vec4(a_position, 0, 1);
    }
`);
context.shaderSource(fragmentShader, `
    precision mediump float;
    uniform vec4 u_color;
    void main() {
        gl_FragColor = u_color;
    }
`);
context.compileShader(vertexShader);
context.compileShader(fragmentShader);
context.attachShader(program, vertexShader);
context.attachShader(program, fragmentShader);
context.linkProgram(program);
context.useProgram(program);
const positionLocation = context.getAttribLocation(program, "a_position");
const colorLocation = context.getUniformLocation(program, "u_color");
const positionBuffer = context.createBuffer();
context.bindBuffer(context.ARRAY_BUFFER, positionBuffer);
context.bufferData(context.ARRAY_BUFFER, new Float32Array([
    0, 0,
    0, 0.5,
    0.7, 0,
]), context.STATIC_DRAW);
context.enableVertexAttribArray(positionLocation);
context.vertexAttribPointer(positionLocation, 2, context.FLOAT, false, 0, 0);
context.uniform4fv(colorLocation, [1, 0, 0, 1]);
context.drawArrays(context.TRIANGLES, 0, 3);

