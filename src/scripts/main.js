
const jokeResultsSection = document.querySelector(".jokeOfTheDay")
const jokeFetcher = () => {
    return fetch(`https://icanhazdadjoke.com/`, {
        method: "Get",

        headers: {
            "accept": "application/json",

        }
    })
        .then(response => response.json())
}
const jokeHTML  = (jokeData) => {
    return `
    <aside class="jokeContent">
        <h1>Have you heard this one?.....${jokeData.joke}</h1>
       
     
    </aside>`

}
const newJokes = document.querySelector("#jokeSubmitButton")

newJokes.addEventListener("click", () => {
    jokeFetcher().then(jokeData => {
        console.log(jokeData)
       
      jokeResultsSection.innerHTML = jokeHTML(jokeData)
     
        console.log(jokeResultsSection.innerHTML)
    })
}
)









