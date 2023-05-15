const goroscop = {
    Aries :{
        today:'qw eqweqwe',
        tomorrow:'qweqweqwe',
        afterTomorrow:'qweqwe'
    },
    Leo :{
        today:'qw eqweqwe',
        tomorrow:'qweqweqwe',
        afterTomorrow:'qweqwe'
    },
    Sagittarius :{
        today:'qw eqweqwe',
        tomorrow:'qweqweqwe',
        afterTomorrow:'qweqwe'
    },
    Taurus :{
        today:'qw eqweqwe',
        tomorrow:'qweqweqwe',
        afterTomorrow:'qweqwe'
    },
    Virgo :{
        today:'qw eqweqwe',
        tomorrow:'qweqweqwe',
        afterTomorrow:'qweqwe'
    },
    Capricorn :{
        today:'qw eqweqwe',
        tomorrow:'qweqweqwe',
        afterTomorrow:'qweqwe'
    },
    Gemini :{
        today:'qw eqweqwe',
        tomorrow:'qweqweqwe',
        afterTomorrow:'qweqwe'
    },
    Libra :{
        today:'qw eqweqwe',
        tomorrow:'qweqweqwe',
        afterTomorrow:'qweqwe'
    },
    Aquarius :{
        today:'qw eqweqwe',
        tomorrow:'qweqweqwe',
        afterTomorrow:'qweqwe'
    },
    Cancer :{
        today:'qw eqweqwe',
        tomorrow:'qweqweqwe',
        afterTomorrow:'qweqwe'
    },
    Scorpio :{
        today:'qw eqweqwe',
        tomorrow:'qweqweqwe',
        afterTomorrow:'qweqwe'
    },
    Pisces :{
        today:'qw eqweqwe',
        tomorrow:'qweqweqwe',
        afterTomorrow:'qweqwe'
    }
};

const parent = document.querySelector('#parent');
const inp = document.querySelector('#input');
const desc = document.querySelector('#desc');
const form = document.querySelector('form');

const radios = form.querySelectorAll('input');

inp.addEventListener('blur',function(){
    let check = '';
    for(let radio of radios){
        if(radio.checked==true){
            check = radio.value
            console.log(check);
        }
    }

    desc.textContent = goroscop[goros(inp.value)][check];
});

function goros(data) {
    let Day = Number(data.split('.')[0]);
    let Month = Number(data.split('.')[1]);
    if(Day>=21 && Month === 3 || Day<=20 && Month === 4){return 'Aries'}
    if(Day>=21 && Month === 4 || Day<=21 && Month === 5){return 'Taurus'}
    if(Day>=22 && Month === 5 || Day<=21 && Month === 6){return 'Gemini'}
    if(Day>=22 && Month === 6 || Day<=22 && Month === 7){return 'Cancer'}
    if(Day>=23 && Month === 7 || Day<=21 && Month === 8){return 'Leo'}
    if(Day>=22 && Month === 8 || Day<=23 && Month === 9){return 'Virgo'}
    if(Day>=24 && Month === 9 || Day<=23 && Month === 10){return 'Libra'}
    if(Day>=24 && Month === 10 || Day<=22 && Month === 11){return 'Scorpio'}
    if(Day>=23 && Month === 11 || Day<=22 && Month === 12){return 'Sagittarius'}
    if(Day>=23 && Month === 12 || Day<=20 && Month === 1){return 'Capricorn'}
    if(Day>=21 && Month === 1 || Day<=19 && Month === 2){return 'Aquarius'}
    if(Day>=20 && Month === 2 || Day<=20 && Month === 3){return 'Pisces'}

};

