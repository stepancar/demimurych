const importObject = {
    imports: {
        imported_func(...args) {
            console.log('WASM called `imported_func` with args', ...args);
        },
    },
};

WebAssembly.instantiateStreaming(fetch("index.wasm"), importObject).then((obj) => {    
    obj.instance.exports.exported_func(75);
});
