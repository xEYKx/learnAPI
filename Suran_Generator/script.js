const suraContainer = document.getElementById("sura");
const suraContainer1= document.getElementById("suraNum");
const suraContainer2= document.getElementById("suraName");
const btn = document.getElementById('btn');



function getSura() {
    
    x = Math.floor(Math.random() * 226)
    suraContainer.classList.remove('fade')
    fetch(`http://api.alquran.cloud/v1/ayah/${x}/en.asad`)
    .then(res => res.json())
    .then(data => {
        suraContainer.textContent = `${data.data.text}`;
        suraContainer1.textContent = `${data.data.numberInSurah}`;
        suraContainer2.textContent = `${data.data.surah.englishName}`;
        suraContainer.classList.add("fade");  
        console.log(data)
        console.log(data.data.numberInSurah)
    });
    
    
    
    
}

getSura();

btn.addEventListener('click',SuraJoke)



