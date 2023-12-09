# Простой пример WASM модуля

Это минимальный пример общения с WASM из браузера, cозданный по (Туториалу)[https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format]

В этом примере мы описываем WASM модуль с помощью [WAT](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format).
Пример создан чтобы продемонстрировать как WASM может вызывать js функции и как js может вызывать WASM функции.


Из WASM модуля мы экспортируем функцию `exported_func`, которая принимает один аргумент `$arg1` типа `i32` и вызывает функцию `imported_func` из js модуля, передавая ей аргумент типа `i32`, который является суммой `$arg1` и числа `42`.


Чтобы запустить пример нужно:

## Установить wabt
https://github.com/webassembly/wabt

Для macos можно использовать [этот пакет](https://formulae.brew.sh/formula/wabt):

```
brew install wabt
```

## Собрать WASM модуль

```
wat2wasm index.wat -o index.wasm
```

В результате появится index.wasm

## Запустить http сервер

Дело в том, что из соображений безопасности, браузеры не позволяют загружать WASM модули из локальной файловой системы.

Поэтому нужно запустить http сервер.

```
npx http-server ./
```
