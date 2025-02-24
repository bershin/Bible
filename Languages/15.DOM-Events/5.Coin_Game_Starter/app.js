function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

// const avatar = document.getElementById("player")
// window.addEventListener("keyup", (e)=>{
// 	console.log(avatar.style.top)
// 	if(e.key === 'ArrowDown'){
// 		const newPos = extractPosition(avatar.style.top) + 50
// 		avatar.style.top = newPos+"px"
// 	}else if(e.key === 'ArrowUp'){
// 		const newPos = extractPosition(avatar.style.top) - 50
// 		avatar.style.top = newPos+"px"
// 	}else if(e.key === 'ArrowRight'){
// 		const newPos = extractPosition(avatar.style.left) + 50
// 		avatar.style.transform = `scale(1,1)`
// 		avatar.style.left = newPos+"px"
// 	}else{
// 		const newPos = extractPosition(avatar.style.left) - 50
// 		avatar.style.transform = `scale(-1,1)`
// 		avatar.style.left = newPos+"px"
// 	}
// 	if(isTouching(avatar, coin)){
// 		moveCoin()
// 	}
// })

const avatar = document.getElementById("player")
window.addEventListener("keyup", (e)=>{
	console.log(avatar.style.top)
	if(e.key === 'ArrowDown'){
		moveVertical(avatar, 50)
	}else if(e.key === 'ArrowUp'){
		moveVertical(avatar, -50)
	}else if(e.key === 'ArrowRight'){
		moveHorizontal(avatar, 50)
		avatar.style.transform = `scale(1,1)`
	}else{
		moveHorizontal(avatar, -50)
		avatar.style.transform = `scale(-1,1)`
	}
	if(isTouching(avatar, coin)){
		moveCoin()
	}
})

const moveVertical = (element, pos)=>{
		const newPos = extractPosition(avatar.style.top) + pos
		avatar.style.top = newPos+"px"
}

const moveHorizontal = (element, pos)=>{
	const newPos = extractPosition(avatar.style.left) + pos
	avatar.style.left = newPos+"px"
}

const extractPosition = (pos)=>{
	if(!pos) return 10;
	return parseInt(pos.slice(0,-2))
}

const moveCoin = ()=>{
	const coin = document.getElementById("coin")
	const x = Math.floor(Math.random() * window.innerWidth)
	const y = Math.floor(Math.random() * window.innerHeight)
	coin.style.left = `${x}px`
	coin.style.top = `${y}px`
	
}
moveCoin()