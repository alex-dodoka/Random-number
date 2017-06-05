function print() {
    let max = +$('#numb').val();
    let res = Math.floor(Math.random() * max);
    let favoritNumber = 3;
    if (res === favoritNumber) {
        console.log(`Ух ты. Я поймал цифру -${res}- через ECMAScript 6`);
    }
    console.log(res);
}