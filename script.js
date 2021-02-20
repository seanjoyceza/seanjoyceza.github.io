const jokeContainer = document.querySelector(".joke")
const btn = document.querySelector(".btn")

btn.addEventListener("click", (event) => {
    btn.innerText = "Make me laugh!"
    getNewJoke()
})

async function getNewJoke() {
    const res = await fetch(
        'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
    )
    let data = await res.json()
    let joke = ""
    if (!data.joke) {
        joke = `${data.setup} <br /> ${data.delivery}`
    } else {
        joke = data.joke;
    }
    jokeContainer.innerHTML = joke;
}
