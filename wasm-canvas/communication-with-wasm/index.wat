(module
    (func $imported_func (import "imports" "imported_func") (param i32))
    (func (export "exported_func") (param $arg1 i32)
        local.get $arg1
        i32.const 42
        i32.add
        call $imported_func
    )
)
