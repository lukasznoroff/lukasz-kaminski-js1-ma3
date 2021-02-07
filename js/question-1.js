const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";


const resultsContainer = document.querySelector(".results");
const messageBox = document.querySelector(".message-box");


async function makeApiCall() {
    try {
        const response = await fetch(url);

        const result = await response.json();

        const data = result.results;


        resultsContainer.innerHTML = "";


        for (let i = 0; i < data.length; i++) {
        
            let name = "Unknown";
            if (data[i].name !== null || data[i].name !== undefined) {
                name = data[i].name
            }

            let rating = "Unknown";
            if (data[i].rating !== null || data[i].rating !== undefined) {
                rating = data[i].rating
            }

            let tags = "Unknown";
            if ((Object.keys(data[i].tags).length) !== null || (Object.keys(data[i].tags).length) !== undefined) {
                tags = (Object.keys(data[i].tags).length)
            }


            if (i === 8) {
                break;
            }

            resultsContainer.innerHTML += `<div class="result">name: ${name}<br>
                                                               ratings: ${rating}<br>
                                                               tags: ${tags}<br>
                                           </div>`

        }

    } catch (error) {

        messageBox.innerHTML = errorMessage()

    }
}

makeApiCall();