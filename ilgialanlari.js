const url = 'https://api.nasa.gov/planetary/apod?'
const apiKey = '97H28f3breokUQ2SnMi8Uv82rANRHnAwbnFlcEey'

let container = document.querySelector('.container');
let button = document.getElementById('bringimage');

button.addEventListener('click', () => {
    let imageContainer = document.querySelector('.image-container');
    imageContainer.remove();
    let newImageContainer = document.createElement('div');
    newImageContainer.classList.add('image-container');
    container.append(newImageContainer);
    let dateInput = document.querySelector('.alt-input input');
    let date = dateInput.value;
    var numerik = /[0-9]/;
    if(date==""){
        alert("Lütfen tarih alanını boş bırakmayınız. ");
        return false;
    }
    if(!numerik.test(date)){
        alert("Lütfen geçerli bir 'tarih' giriniz.");
        return false;
    }

    getNasaPictureUrl(date)
    .then(url => {
        if (url) {
            let image = document.createElement('img');
            image.src = url;
            newImageContainer.appendChild(image);
        } else {
            window.alert('Lütfen tarih bilgisini geçmiş yıllardan YYYY-AA-GG şeklinde giriniz.');
        }
    })
    .catch(error => console.error(error));
});

async function getNasaPictureUrl(date) {
    const apiUrl = `${url}date=${date}&api_key=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.hdurl) {
            return data.hdurl;
        } else {
            throw new Error("Lütfen tarih bilgisini geçmiş yıllardan YYYY-AA-GG şeklinde giriniz.");
        }
    } catch (error) {
        console.error("Hata:", error.message);
        return null;
    }
}