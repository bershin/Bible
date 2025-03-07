let tamilSongs = [
    "Nee kartu",
    "Kanmani ne vara",
    "Ithu oru pon malai"
]

console.log(tamilSongs) // [ 'Nee kartu', 'Kanmani ne vara', 'Ithu oru pon malai' ]
console.log(tamilSongs.push("aasai nooru vagai")) // 4
console.log(tamilSongs)
// [
//     'Nee kartu',
//     'Kanmani ne vara',
//     'Ithu oru pon malai',
//     'aasai nooru vagai'
//   ]
console.log(tamilSongs.push("meenamma..", "amma amma ")) // 6
console.log(tamilSongs.pop()) // amma amma
console.log(tamilSongs) 
// [
//     'Nee kartu',
//     'Kanmani ne vara',
//     'Ithu oru pon malai',
//     'aasai nooru vagai',
//     'meenamma..'
//   ]
console.log(tamilSongs.unshift("rasathi unna")) // 6
console.log(tamilSongs)
// [
//     'rasathi unna',
//     'Nee kartu',
//     'Kanmani ne vara',
//     'Ithu oru pon malai',
//     'aasai nooru vagai',
//     'meenamma..'
//   ]
console.log(tamilSongs.unshift("ninu kori", "rajavai thalathum")) // 8
console.log(tamilSongs)
// [
//     'ninu kori',
//     'rajavai thalathum',
//     'rasathi unna',
//     'Nee kartu',
//     'Kanmani ne vara',
//     'Ithu oru pon malai',
//     'aasai nooru vagai',
//     'meenamma..'
//   ]
console.log(tamilSongs.shift()) // meenamma..
console.log(tamilSongs)
// [
//     'ninu kori',
//     'rajavai thalathum',
//     'rasathi unna',
//     'Nee kartu',
//     'Kanmani ne vara',
//     'Ithu oru pon malai',
//     'aasai nooru vagai'
//   ]