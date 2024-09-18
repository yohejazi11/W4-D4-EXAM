let userApi = "https://66ea79ae55ad32cda4790255.mockapi.io/user";



let userID = sessionStorage.getItem('userID')
let userName = document.getElementById('userName')
let userFirstName = document.getElementById('userFirstName')

if (userID > 0) {
    fetch(userApi)
        .then(response => response.json())
        .then(data => {
            let userData = data.filter(element => element.id == userID);
            userName.textContent = userData[0].username;
            userFirstName.textContent = userData[0].name;
        })
}
else {
    window.location.href = "login.html";
}


let weatherApiONE = "https://api.openweathermap.org/data/2.5/weather?q=";
let cityInput = "Riyadh";
let weatherApiTWO = "&appid=05e0ed58be7eb3fd35c76c67c85ac3d0";



let weatherBTN = document.getElementById('weatherBTN')
let prayBTN = document.getElementById('PrayerTimeBTN')

let profileContentContainer = document.getElementById('profileContentContainer')

weatherBTN.addEventListener("click", () => {
    while (profileContentContainer.firstChild) {
        profileContentContainer.removeChild(profileContentContainer.firstChild)
    }
    let citySearch = document.createElement('input')

    // weather fetch
    fetch(weatherApiONE + cityInput + weatherApiTWO)
        .then(response => response.json())
        .then(data => {
            let weatherBox = document.createElement('div')
            weatherBox.setAttribute('class', 'weather-box')
            let city = document.createElement('h2')
            city.setAttribute('class', 'city-name')
            let heatDeg = document.createElement('p')
            let rotubh = document.createElement('p')
            let heghLines = document.createElement('p')
            let widthLines = document.createElement('p')

            city.textContent = data.name
            heatDeg.textContent = (data.main.temp - 32) * (5 / 9)
            rotubh.textContent = ` Humidity degree : ${data.main.humidity}`
            heghLines.textContent = ` Longitude is : ${data.coord.lon}`
            widthLines.textContent = ` Latitude is : ${data.coord.lat}`

            weatherBox.appendChild(city)
            weatherBox.appendChild(heatDeg)
            weatherBox.appendChild(rotubh)
            weatherBox.appendChild(heghLines)
            weatherBox.appendChild(widthLines)

            profileContentContainer.appendChild(weatherBox)
        })

})



let hejreCalnderApi = "https://api.aladhan.com/v1/gToH/18-09-2024";
let prayTimeApi = "https://api.aladhan.com/v1/timingsByCity/18-09-2024?country=SA&city=Riyadh";
prayBTN.addEventListener("click", () => {

    while (profileContentContainer.firstChild) {
        profileContentContainer.removeChild(profileContentContainer.firstChild)
    }

    // hejre date fetch

    fetch(hejreCalnderApi)
        .then(response => response.json())
        .then(data => {
            let convertDateBTN = document.createElement('button')
            let dateBox = document.createElement('div')
            dateBox.setAttribute('class','date-box');
            let hijreDate = document.createElement('p')
            let meladyDate = document.createElement('p')
            let day = document.createElement('p')
            hijreDate.textContent="date : "+data.data.hijri.date+", day : "+data.data.hijri.weekday.en
            meladyDate.textContent="date : "+data.data.gregorian.date+", day : "+data.data.gregorian.weekday.en

            dateBox.appendChild(hijreDate)
            dateBox.appendChild(meladyDate)
            profileContentContainer.appendChild(dateBox)
            console.log(hijreDate)
            convertDateBTN.addEventListener("click", {

            })
        })

    // pray time fetch
    fetch(prayTimeApi)
        .then(response => response.json())
        .then(dataa => {
            let prayerTimesBox = document.createElement('div')
            console.log(dataa.data.timings)
            for (const [key, value] of Object.entries(dataa.data.timings)) {
                let prayDiv = document.createElement('div')
                prayDiv.setAttribute('class','pray-div')
                let prayTime = document.createElement('h4')
                prayTime.textContent=`${key}: ${value}`;
                prayDiv.appendChild(prayTime)
                prayerTimesBox.appendChild(prayDiv)
            }
            profileContentContainer.appendChild(prayerTimesBox)
        });


})