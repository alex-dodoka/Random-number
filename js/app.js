function print(min) {
    let max = +$('#numb').val();
    let res = Math.floor(Math.random() * max);
    if (res === 3) {
        console.log(`Ух ты. Я поймал цифру -${res}- через ECMAScript 6`);
    }
    console.log(res);
}