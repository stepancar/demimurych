# Разбор комментариев Мурыча по поводу возможности обращаться из WASM к canvas напрямую.

## Контекст

Было несколько видео подряд, в которых Мурыч упомянал в одном предложении связку wasm / canvas.
Примеры: 

* 
* 
*


На одном из стримов я задал вопрос, но не получил ответа. Спросил в общем чате знает ли кто, что точно имел в виду Мурыч.
https://t.me/AsForJsTalks/25649

Дмитрий гуляев обещал задать этот вопрос Мурычу https://t.me/AsForJsTalks/25650

<details>
  <summary>
  Переписка с Дмитрием Гуляевым (Я получил разрешение от Дмитрия Гуляева на публикацию переписки)
  </summary>

> Дмитрий Гуляев:
привет

> Дмитрий Гуляев:
"переслано от Demi Murych"

https://radu-matei.com/blog/practical-guide-to-wasm-memory/
https://wasmbyexample.dev/examples/reading-and-writing-graphics/reading-and-writing-graphics.rust.en-us.html
https://github.com/ern0/howto-wasm-minimal
https://github.com/daneelsan/minimal-zig-wasm-canvas

> Cтепан Михайлюк:
Привет. Спасибо. Это как раз то о чем я говорил. Мурыч в своих видео говорил о том что появился способ обращения к канвасу из wasm. По ссылкам он прислал просто обычное чтение памяти снаружи. Тоесть wasm просто пишет в uint8array

> Дмитрий Гуляев:
перешлю мурычу

> Дмитрий Гуляев: "переслано от Demi Murych"
Конечно, только раньше нельзя было читать и пасть туже паамять что и память для canvas

> Дмитрий Гуляев: "переслано от Demi Murych"
теперь это делать можно

</details>


Далее Мурыч написал мне сам.


<details>
    <summary>
        Переписка с Мурычем (я получил разрешение от Мурыча на публикацию переписки)
    </summary>

> Demi Murych:
тебе уже передали ссылки на то что касается canvas и wasm.
перезапись нужной области памяти приводит к обновлению canvas.
это эксплуатируется уже с год как

> Stepan Mikhaylyuk:
Здравствуйте. Да, передали. 
Моя притензия к подаче информации. То что вы прислали используется с 2017 года. Когда говорится про прямой доступ к canvas а на самом деле рече идет про обычное чтение буфера и передача его в канавас - может сбивать с толку людей которые не в зуб ногой в этой теме

> Demi Murych:
нет.
то что я прислал в плоскости канвас используется только с конца 2018 года

> Demi Murych:
потому что до этого сузществовал строгий запрет на доступ к этой памяти

> Demi Murych:
Скачай браузер того года, ип олучи доступ к памяти канвасса.
И повтори это сейчас.
Дальше высказывай претензии

> Demi Murych:
Принято?

> Stepan Mikhaylyuk:
Может 2018, нужно уточнить. В любом случае, это подается как что-то свежее. Сейчас конец 2023 го года.
Я подробно распишу свои негодования со всеми ссылками как и в прошлый раз и мы их обсудим, хорошо?

> Demi Murych:
Еещ раз для тех кто в танке с привареной башней

> Demi Murych:
Изначальный стандарт WASM не позволял доступа ни к одной области памяти кроме той что выделена WASM

> Demi Murych:
ни доступа ни к одному апи не к памяти которая могла бы быть использована для

> Demi Murych:
с определенного момента происхитодят измения о которых я говорю, когда позволяется доступ к расшареной памяти канваса

> Demi Murych:
чего доставно для того чтобы WASM код мог формировать любое отображение на канвасе

> Demi Murych:
что ранее было запрещшено АПРИОРИ

> Demi Murych:
wasm код изначально не имел и не мог именть никакого доступа к памяти которая влияла на любое отображение.
Потом это было изменено.

> Demi Murych:
Что строго отвечает сказанному мной.

> Stepan Mikhaylyuk:
Как и написал выше, я подробно отпишусь. Укажу на неточности (мои возможные заблуждения), которые у меня вызывают вопросы. По всем комментариям данными вами в видео и в этой переписке.
Я не в танке.

> Demi Murych:
https://www.youtube.com/watch?v=UT9VRYtpBFo

> Demi Murych:
Вот тебе видео которое я записывал больше трех лет назад о том, что происходило.

> Demi Murych:
Если ты не в танке, какие претензии?
WASM код by design не имел право иметь доступа к любой памяти которая могла влиять на поведение RunTime.
Ты гворишь что то о чем я говорю, уже давно используется.
То о чем я говорю - это доступ к памяти canvas с прямой записью что прямо меняет отображение на канвасе. ЧЕГО БАЙ ДЕЗАЙН НЕБЫЛО.
ЧТО ЗАНЧИТ ТЫ НЕ В ТАНКЕ?

> Demi Murych:
единсвенное что с тех пор изменилось - необходимость явным образом задвать разрешение в CORS для доступа к памяти.
я фигею, ВАМ ЧТО сложно самим погуглить?
блять я сейчас в гугле написал wasm canvas первые же 10 ссылок про это

> Stepan Mikhaylyuk:
Спасибо. Я изучу, хотя думаю ч о его я смотрел. Если что, я немного в курсе и Гугл докс и skia и canvaskit. 
Я понимаю и про shared memory про который вы говорите. Скорее всего, мы примерно на одной волне с вами. Как сказал выше, у меня притензии к подаче этой информации. 
Я подготовлю отчет и пришлю его вам.

</details>


В этом отчете я бы хотел пояснить свои сомнения по сказанному Мурычем.
Считаю что такая подача информации может ввести в заблуждение.
Возможно я не прав, прошу дать обратную связь.
Если я ошибаюсь - прошу приложить ссылки на источники, а лучше код.

## Материалы

https://webassembly.github.io/spec/core/index.html
https://developer.mozilla.org/en-US/docs/WebAssembly

ссылки от Мурыча
https://radu-matei.com/blog/practical-guide-to-wasm-memory/
https://wasmbyexample.dev/examples/reading-and-writing-graphics/reading-and-writing-graphics.rust.en-us.html
https://github.com/ern0/howto-wasm-minimal
https://github.com/daneelsan/minimal-zig-wasm-canvas

Я считаю все эти туториалы не подходят для ознакомления с WASM, так как они используют сторонние утилиты / языки, что может сбить с толку.
Не припомню чтобы Мурыч упомянал про Zig, Rust.

## Мои сомнения по технической части вопроса

- В спецификации WASM нет ни слова про canvas и быть не может, так как WASM может работать в хост системе где не поддерживается HTMLCanvasElement, который описан в спецификации HTML5

Мурыч явно этого не обозначает в своих комментариях, хотя думаю, он это подразумевает. Обычно Мурыч не упускает таких моментов и постоянно указывает на то, что нет никакого event loop в javascript.

- Если обстрагироваться от WASM, В canvas api, самом по себе, не существует такого api при котором перезапись области памяти приводит к обновлению отображения canvas.
Насколько мне известно.

Существует единственный способ нарисовать что-то на 2d canvas, используя как источник данных набор пикселей - использовать [putImageData](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData)

[Пример](./putImageData/index.html):

```js
var width = 1920;
var height = 1080;

// ПОДГОТОВКА ДАННЫХ
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
```

Можно сказать что, в этом примере, определенная область памяти перезаписывается, что приводит canvas к перерисовке, что кажется совпадает с формулировкой Мурыча.
Но!
Обратите внимание что, если мутировать данные внутри typedArray - это не приведет к обновлению отображения.
Согласно спецификации `CanvasRenderinContext2d`,
мы всегда должны вызывать `ctx.putImageData` явно, если хотим обновить представление.

Этот же пример, с `putImageData` используется в гайдах, который прислал Мурыч.
https://wasmbyexample.dev/examples/reading-and-writing-graphics/reading-and-writing-graphics.rust.en-us.html

Это говорит о том, что нет никакого прямого доступа к памяти, которая связана с отображением, нужно явно вызывать `putImageData` чтобы обновить отображение.

Если бы такой API существовал он бы выглядел скорее всего как-то так:

```js
var pixels = new Uint8Array(1920*1080*4);

ctx.bindDrawingBuffer(pixels, { colorSpace: 'srgb' });

// update pixels data triggers canvas update
pixels.set([255, 1, 1, 0], 4 * 100);
```

На вскидку (Не берусь утверждать), одна из возможных причин почему такой API не предоставлен кроется в том, что размер можно менять согласно спецификации HTML5. Чтобы обработать такую ситуацию необходимо выдать исключение при обращении к буферу, чтобы пользователь иницилизировал новый и сделал байндинг.

### Скорее всего, мурыч имеет в виду немного другое:
С момента первой имплементации WASM была возможность сформировать pixels внутри WASM передать упрвление коду js

Релиз хрома
57 (Released 2017-03-09)

Только

https://t.me/AsForJsTalks/14883 рассказ про google docs