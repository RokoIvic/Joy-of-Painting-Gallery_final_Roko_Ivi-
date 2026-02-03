let select = document.getElementById('seasons');

if (select) {

    const pathname = window.location.pathname;

    let firstDigit = pathname[21];
    let secondDigit = pathname[22];

    if(!isNaN(Number(secondDigit))) {
        select.value = firstDigit * 10 + secondDigit * 1;
    }
    else {
        select.value = firstDigit;
    }

    select.addEventListener('change', function () {
        window.location.href = '../seasons/season' + this.value + '.html';
    });
}

 
