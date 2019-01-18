let colors = new Array(
    [62, 35, 255],
    [60, 255, 60],
    [255, 35, 98],
    [45, 175, 230],
    [255, 0, 255],
    [255, 128, 0]);

let step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
let colorIndices = [0, 1, 2, 3];

//transition speed
let gradientSpeed = 0.002;

function updateGradient() {

    if ($ === undefined) return;

    let c0_0 = colors[colorIndices[0]];
    let c0_1 = colors[colorIndices[1]];
    let c1_0 = colors[colorIndices[2]];
    let c1_1 = colors[colorIndices[3]];

    let istep = 1 - step;
    let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    let color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    let color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    $('#gradient').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}

setInterval(updateGradient, 10);


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


function userLegitCheck() {
    let userName = prompt('What is your name? ');
    console.log('name: ' + userName);
    let userAge = +prompt('How old are you? ');
    console.log('age: ' + userAge);

    if (userAge = 18, userAge <= 22) {
        prompt('Are u sure?');
        if (prompt('Are u sure?') == true) {
            alert('Welcome, ' + userName)
        } else {
            alert('You are not allowed to visit this website')
        }
    }
    if (userAge => 23) {
        alert('Welcome, ' + userName);
    }
    if (userAge < 18) {
        alert('You are not allowed to visit this website')
    }
}

userLegitCheck();