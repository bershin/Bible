async function getPlanet(){
    const res = await axios.get("https://swapi.dev/ap/planets") // Removed a letter
    console.log(res) // ERR_FAILED 404 (Not Found)
}
getPlanet()


async function getPlanet(){
    const res = await axios.get("https://swapi.dev/ap/planets")
    console.log(res) // ERR_FAILED 404 (Not Found)
}
getPlanet().catch(err=>{
    console.log("Error: Cannot retrieve data", err)
})

async function getPlanet(){
    try{
        const res = await axios.get("https://swapi.dev/api/planets")
        console.log(res)
    }catch(error){
        console.log(error.response?.data || error.message)
    }

}
getPlanet()