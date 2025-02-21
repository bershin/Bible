// const btn = document.querySelector("button")
// const moveX = (element, width, delay)=>{
//     return new Promise((response, reject)=>{
//         setTimeout(()=>{
//             const browserWidth = window.innerWidth
//             const btnRight = btn.getBoundingClientRect().right
//             const btnleft = btn.getBoundingClientRect().left
//             if(btnRight + width < browserWidth){
//                 element.style.transform = `translateX(${btnleft+width}px)`
//                 response()
//             }else{
//                 reject({browserWidth, btnRight, width})
//             }
//         },delay)
//     })
// }


// moveX(btn, 100, 1000)
//     .then(()=>moveX(btn, 100, 1000))
//     .then(()=>moveX(btn, 100, 1000))
//     .then(()=>moveX(btn, 100, 1000))
//     .then(()=>moveX(btn, 100, 1000))
//     .then(()=>{console.log("Moved to END!!")})
//     .catch(({browserWidth: brw, btnRight: br, width: w})=>{
//         alert(`Cannot move further!!\n
//             Browser width of ${brw}
//             will be '<'
//             Box moved width of ${br+w}`)
//     })

const btn = document.querySelector("button")
const moveX = (element, width, delay)=>{
    return new Promise((response, reject)=>{
        setTimeout(()=>{
            const browserWidth = window.innerWidth
            const btnRight = btn.getBoundingClientRect().right
            const btnleft = btn.getBoundingClientRect().left
            if(btnRight + width < browserWidth){
                element.style.transform = `translateX(${btnleft+width}px)`
                response()
            }else{
                reject({browserWidth, btnRight, width})
            }
        },delay)
    })
}

// async function navigate(){
//     await moveX(btn, 100, 1000)
//     await moveX(btn, 100, 1000)
//     await moveX(btn, 100, 1000)
//     await moveX(btn, 100, 1000)
//     await moveX(btn, 100, 1000)
// }

async function navigate(btn, x, delay){
    for(let i = 0; i < 10; i++){
        await moveX(btn, x, delay)
    }

}
navigate(btn, 100, 1000).catch(err=>{
    console.log("All Done in right!! Now Left")
    navigate(btn, -100, 1000)
})
