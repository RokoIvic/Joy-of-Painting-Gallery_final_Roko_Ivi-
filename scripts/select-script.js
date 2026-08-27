let select = document.getElementById('seasons');

if (select) {

    const pathname = window.location.pathname;

    const match = pathname.match(/season(\d+)/i);

    if (match) {
        select.value = match[1];
    }

    select.addEventListener('change', function () {
        window.location.href = '../seasons/season' + this.value + '.html';
    });
}