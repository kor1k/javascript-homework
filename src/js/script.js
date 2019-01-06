function testSwitchJS(a) {
              let x;
              x = "";                //объявляем переменную в которую будем записывать результат

    switch (a) {
        case 0:
            x = "Ноль";
            break;

        case 1:          // если a равна единице то записываем
            x = "Один";  // в переменную x фразу "Один"
            break;

        case 2:
            x = "Два";
            break;

        case 3:
            x = "Три";
            break;

        case 4:
            x = "Четыре";
            break;

        case 5:
            x = "Пять";
            break;

        case 6:
            x = "Шесть";
            break;

        case 7:
            x = "Семь";
            break;

        case 8:
            x = "Восемь";
            break;
        case 9:
            x = "Девять";
            break;
    }

    return x;
}