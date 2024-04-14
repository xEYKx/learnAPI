
const result = document.getElementById('result');
const sound = document.getElementById('sound');
const btn = document.getElementById('search-btn');

btn.addEventListener('click', () => {
    surahNo = Math.floor(Math.random() * (114 - 1) + 1)
    ayahNo = Math.floor(Math.random() * (9 - 1) + 1)
    let inpWord = document.getElementById('inp-word').value;
    fetch(`https://quranapi.pages.dev/api/${inpWord}/${ayahNo}.json`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        
        result.innerHTML = `
        <div class="word">
        <h3>${data.surahName}</h3>
        <button onclick="playSound()">
            <i class="fa-solid fa-volume-high"></i></button>
    </div>
        <div class="details">
            <p>${data.surahNameTranslation}</p> / 
            <p>${data.surahNameArabic}</p>
    </div>
         <p class="word-meaning">${data.english}</p>
         <p class="word-example">${`Sura # ${data.surahNo}`}</p>
         <p class="word-example">${`Revelation Place: ${data.revelationPlace}`}</p>`
         sound.setAttribute("src", `${data.audio[1].url}`);
    })
       .catch(() => {
        //    `${data[0].phonetics[0].text}`
            result.innerHTML = `<h3>Trying Again</h3>`
       })
    });
        

    function playSound(){
        sound.play();
    }