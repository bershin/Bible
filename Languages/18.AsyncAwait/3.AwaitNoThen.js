function getPlanet(){
    const res = axios.get("https://swapi.dev/api/planets")
    console.log(res) // Promise {<pending>}
}
getPlanet()

function getPlanet(){
    return axios.get("https://swapi.dev/api/planets")
}
getPlanet().then(val=>
    console.log(val) // {data: {…}, status: 200, statusText: '', headers: r, config: {…}, …}
)

// Not useful
async function getPlanet(){
    return await axios.get("https://swapi.dev/api/planets")
}
getPlanet().then(val=>
    console.log(val) // {data: {…}, status: 200, statusText: '', headers: r, config: {…}, …}
)

async function getPlanet(){
    const res = await axios.get("https://swapi.dev/api/planets")
    console.log(res)
}

getPlanet()