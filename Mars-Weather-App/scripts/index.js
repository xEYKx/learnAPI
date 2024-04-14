const API_KEY = 'DEMO_KEY'
const API_URL = 'https://api.alquran.cloud/v1/search/moses/2/en'






const previousWeatherToggle = document.querySelector('.show-previous-weather');
const previousWeather = document.querySelector('.previous-weather')
const currentSolElement = document.querySelector('#data-current-verse')

previousWeatherToggle.addEventListener('click', () => {
    previousWeather.classList.toggle('show-weather')
} )

let selectedSolVerse



getWeather().then(theMessage => { 
    selectedSolVerse = theMessage.length - 1
    displaySelectedVerse(theMessage)
})

function displaySelectedVerse(theMessage) {
    const selectedVerse = theMessage[selectedSolVerse]
    console.log(selectedVerse)
    currentSolElement.innerText = selectedVerse.text
}


function getWeather(){
    return fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        const{
        ...quranData    
        } = data
        return Object.entries(quranData).map((quran,data) => {
            // textSura = quranData.data.matches
            // textSura = quranData.data.matches
                
            // for (let i = 0; i < textSura.length; i++) {
            //     console.log(textSura[i]);
            //     console.log(textSura[i].text);
                
                
            // }
            return{
                number: quranData.data.matches[quran.length].number,
                surahNumber: quranData.data.matches[quran.length].numberInSurah,
                surahName: quranData.data.matches[quran.length].surah.englishName,
                text: quranData.data.matches[61].text,
                
            }
        })
      })
}