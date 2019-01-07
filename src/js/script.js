function testSwitchJS(a) {
              let x;
              x = "";                //объявляем переменную в которую будем записывать результат
    switch (a) {
        case 10:
            x = "Ноль";
            break;

        case 13:          // если a равна единице то записываем
            x = "13";  // в переменную x фразу "Один"
            break;

        case 21:
            x = "21";
            break;

        case 33:
            x = "33";
            break;

        case 43:
            x = "43";
            break;

        case 53:
            x = "53";
            break;

        case 63:
            x = "63";
            break;

        case 73:
            x = "73";
            break;

        case 38:
            x = "38";
            break;
        case 91:
            x = "91";
            break;
    }

    return x;
}