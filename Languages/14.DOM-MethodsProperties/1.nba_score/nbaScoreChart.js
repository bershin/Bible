const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const newUl = document.createElement('ul')
for(let game of warriorsGames){
  const {awayTeam, homeTeam} = game
  const {team:aTeam, points:aPoints} = awayTeam
  const {team:hTeam, points:hPoints} = homeTeam
  const team = `${aTeam} @ ${hTeam}`
  let score = 0;
  if(aPoints > hPoints){
    score = `<b>${aPoints}</b>-${hPoints}`
  }else{
    score = `${aPoints}-<b>${hPoints}</b>`
  }
  const newLi = document.createElement('li')
  const warrier = hTeam === 'Golden State'? homeTeam : awayTeam
  newLi.classList.add(warrier.isWinner? 'win' : 'lose')
  newLi.innerHTML = `${team}, ${score}`
  newUl.appendChild(newLi)
}
document.body.prepend(newUl)