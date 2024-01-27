const btnEl = document.getElementById("btn");
const jokeEL = document.getElementById("joke");
const apiKey = "J1BvqwWGldwCywwEjhRinw==1a3OJZKQ1fwEMRDc";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getjoke(){
    jokeEL.innerHTML = "Updating..."
    btnEl.disabled = true
    btnEl.innerHTML = "Loading.."
    const response = await fetch(apiURL,options)
    const data = await response.json()
    btnEl.disabled = false
    btnEl.innerHTML = "Tell ME a Joke "
    jokeEL.innerHTML = data[0].joke
}
btnEl.addEventListener("click",getjoke)
