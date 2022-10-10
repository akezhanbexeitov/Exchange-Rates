let unitedStatesDollar = document.querySelector('#USD');
let euro = document.querySelector('#EUR');
let rubble = document.querySelector('#RUB');
let czechKrona = document.querySelector('#CZK');
let britishPound = document.querySelector('#GBP')

async function getCurrencies() {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    const convertRubbleToKzt = () => {
        return (1 / (data.Valute.KZT.Value / 100).toFixed(2)).toFixed(2);
    }

    unitedStatesDollar.innerText = (data.Valute.USD.Value * convertRubbleToKzt()).toFixed(2);
    euro.innerText = (data.Valute.EUR.Value * convertRubbleToKzt()).toFixed(2);
    rubble.innerText = convertRubbleToKzt();
    czechKrona.innerText = (data.Valute.CZK.Value * convertRubbleToKzt()).toFixed(2)
    britishPound.innerText = (data.Valute.GBP.Value * convertRubbleToKzt()).toFixed(2)
}

getCurrencies()
