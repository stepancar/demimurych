(module
    (func $imported_func (import "imports" "imported_func") (param i32))
    (func (export "exported_func") (param $arg1 i32)
        ;; Generate pixels filled with red color
        (local $width i32)
        (local $height i32)
        (local $red i32)
        (local $index i32)
        (local $pixels i32)

        ;; Allocate memory for 100 pixels (assuming each pixel has R, G, B components)
        (local $pixelCount i32)
        (local $pixelMemoryOffset i32)
        (local $i i32)
        i32.const 100
        local.set $pixelCount
        local.get $pixelCount
        call $allocate_memory
        (local.set $pixelMemoryOffset)

        ;; Fill pixels with red (R=255, G=0, B=0)
        
        (local.set $i (i32.const 0))
        (block
        (loop
            (br_if 1 (i32.ge_u (local.get $i) (local.get $pixelCount)))

            ;; Set red component to 255 (R=255, G=0, B=0)
            (i32.store8 (i32.add (local.get $pixelMemoryOffset) (local.get $i)) (i32.const 255))

            ;; Move to the next pixel
            (local.set $i (i32.add (local.get $i) (i32.const 1)))
            (br 0)
        )
        )

    ;; Call the imported function with the pixel memory offset
    (call $imported_func (local.get $pixelMemoryOffset))
    )
)
