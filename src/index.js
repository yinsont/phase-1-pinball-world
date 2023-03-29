document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/games')
        .then((source) => source.json())
        .then((data) => {
            console.log(data)
            renderPage(data)
    })
})

function renderPage(games) {
    //--------------------------------------- Initial Page
    let detailImg = document.querySelector('#detail-image')
    detailImg.src = games[0].image

    let detailTitle = document.querySelector('#detail-title')
    detailTitle.textContent = games[0].name

    let highScore = document.querySelector('#detail-high-score')
    highScore.textContent = games[0]['high_score']
    //--------------------------------------------------- Load Games
    games.forEach((game) => {
        let gamesList = document.querySelector('.game-list')
        let h5 = document.createElement('h5')
        h5.textContent = `${game.name} (${game['manufacturer_name']})`
        h5.addEventListener('click', () => {
            detailImg.src = game.image
            detailTitle.textContent = game.name
            highScore.textContent = game['high_score']

            let form = document.querySelector('#high-score-form')
            console.log(form)
            form.addEventListener('submit',(e) => {
                e.preventDefault()
                console.log('help')
                game['high_score'] = e.target['score-input'].value
                highScore.textContent = game['high_score']
            })
        })
        gamesList.append(h5)
    })
}