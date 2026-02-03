let previousButton = document.getElementById('nav-button-previous');
let nextButton = document.getElementById('nav-button-next');

let selectValue = document.getElementById('seasons').value;

selectValue = Number(selectValue);

function previousSeason() {
    if(selectValue <= 1) return;

    window.location.href = '../seasons/season' + Number(selectValue - 1) + '.html';
}

function nextSeason() {
    if(selectValue >= 31) return;

    window.location.href = '../seasons/season' + Number(selectValue + 1) + '.html';
}
