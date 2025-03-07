// Instead of writing relevent info
const lucyFitBit_totalSteps = 308727
const lucyFitBit_totalMiles = 211.7
const lucyFitBit_avgCalorieBurn = 5755 + 5
const lucyFitBit_workoutsThisWeek = '5 of 7'
const lucyFitBit_avgGoodSleep = '2:13'

/*  Write as object to group relevent information */
const lucyFitBit = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755 + 5,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
};
console.log(fitBit.totalMiles); // 211.7
console.log(fitBit.avgCalorieBurn); // 5755
console.log(fitBit.avgGoodSleep); // 2:13

const pallet = {
    100: 'One hundred',
    '16': 'Sixteen',
    "grey white": '#FFFFFF',
    black: '#000000'
}
// console.log(pallet.100); // Syntax Error, invalid key
console.log(pallet[100]); // One hundred
console.log(pallet["100"]); // One hundred

// console.log(pallet.16); // Error
console.log(pallet[16]); // Sixteen
console.log(pallet['16']); // Sixteen

console.log(pallet["grey white"]); // #000000

console.log(pallet.black); // #000000
console.log(pallet["black"]); // #000000
console.log(pallet["bla"+"ck"]); // #000000

// console.log(pallet[black]); //black is not defined
pitchBlack = 'black';
console.log(pallet[pitchBlack]); // #000000
console.log(pallet.pitchBlack); // undefined

