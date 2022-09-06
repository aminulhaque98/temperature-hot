// don't show api key on your js file 

const API_KEY = '5ca122e88687c1a0b83c8b89fc9c7f1e'

const loadTamperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayTamperatur(data))
}
// single parameter hole qoutation bosani optional 
displayTamperatur = city => {

    // console.log(city)
    // const tamparetureSet = document.getElementById('temp')
    // tamparetureSet.innerText = city.main.temp

    setInnerTextById('temparetur', city.main.temp)

    setInnerTextById('cloud', city.weather[0].main)

}
const setInnerTextById = (id, text) => {
    const tamparetureSet = document.getElementById(id)
    tamparetureSet.innerText = text
}

document.getElementById('btn-search').addEventListener('click', function () {
    const serachField = document.getElementById('search')

    const getValue = serachField.value;
    serachField.value = '';
    console.log(getValue)

    const citySet = document.getElementById('set-city')
    citySet.innerText = getValue;

    loadTamperature(getValue)

})

loadTamperature('Dhaka')
