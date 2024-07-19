function getToday() {
    return new Date();
}

function splitTodaysFullDate(today) {
    const day = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();

    return [day, date, month, year, hours, minutes];
}

function getDayText(day) {
    switch (day) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sábado';
        default:
            return '';
    }
}

function getMonthText(month) {
    switch (month) {
        case 0:
            return 'Janeiro';
        case 1:
            return 'Fevereiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
        default:
            return '';
    }
}

function getH1() {
    return document.querySelector('h1');
}

function addText(h1, dayText, date, monthText, year, hours, minutes) {
    h1.innerHTML = `${dayText}, ${date} de ${monthText} de ${year} - ${hours}:${minutes}`;
}

function main() {
    const today = getToday();
    const [day, date, month, year, hours, minutes] = splitTodaysFullDate(today);
    const dayText = getDayText(day);
    const monthText = getMonthText(month);
    const h1 = getH1();

    addText(h1, dayText, date, monthText, year, hours, minutes);
}

main();
