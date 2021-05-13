# NodeJS-RS-School

This is RS School's NodeJS course

Task 1. Caesar cipher CLI tool

# Запуск приложения

1. cd .\src\ 
2. node my_caesar_cli.js и добавить входные параметры:

```
1. -s, --shift : сдвиг
2. -i, --input : входной файл
3. -o, --output : выходной файл
4. -a, --action : кодирование / декодирование
```

Параметры **a/action** и **s/shift** обязательны.
Параметры **i/input** и **o/output** опциональны.

## Примеры

```
node my_caesar_cli.js -s 3 -a encode -i ./input.txt
node my_caesar_cli.js -s 3 -a encode -i ./input.txt -o ./output.txt
node my_caesar_cli.js -s 3 -a decode
```

При отрицательном сдвиге:

```
node my_caesar_cli.js -s=-3 -a encode
node my_caesar_cli.js --shift=-3 --action encode
```

Выход из **process.stdin** осуществляется **Ctrl+c**
