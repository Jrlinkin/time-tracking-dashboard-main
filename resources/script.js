fetch('data.json')
    .then(response => response.json())
    .then(json => {
        createCards(json)
    })
    .catch(e => console.log(e))


function createCards(json) {
    const cardContainer = document.querySelector('.cards-container');

    const buttons = document.querySelectorAll('a');
    for (let button of buttons) {

        button.addEventListener('click', e => {
            const dataOption = button.getAttribute('data-option');
            const options = json;
            for (let i = 0; i < 6; i++) {
                let currentTime = document.querySelector(`.${options[i].title.replace(' ', '-').toLowerCase()}-current`);
                let previousTime = document.querySelector(`.${options[i].title.replace(' ', '-').toLowerCase()}-previous`);
                if (dataOption === 'daily') {
                    currentTime.innerHTML = `${options[i].timeframes.daily.current}hrs`;
                    previousTime.innerHTML = `Last Week - ${options[i].timeframes.daily.previous}hrs`

                }
                if (dataOption === 'weekly') {
                    currentTime.innerHTML = `${options[i].timeframes.weekly.current}hrs`;
                    previousTime.innerHTML = `Last Week - ${options[i].timeframes.weekly.previous}hrs`

                }
                if (dataOption === 'monthly') {
                    currentTime.innerHTML = `${options[i].timeframes.monthly.current}hrs`;
                    previousTime.innerHTML = `Last Week - ${options[i].timeframes.monthly.previous}hrs`

                }

            }
        });
    }

    // Create CARDS
    for (let card of json) {

        const div1 = document.createElement('div');
        const title = card.title.replace(' ', '-').toLowerCase();
        const classList = `${title}-card`;
        const cardBackground = 'card-background';
        div1.classList.add(classList);
        div1.classList.add(cardBackground);

        const div2 = document.createElement('div');
        const classListContainer = `${classList}-container`;
        div2.classList.add(classListContainer)
        div2.classList.add('card')

        const h4 = document.createElement('h4');
        h4.innerHTML = card.title;
        div2.appendChild(h4)

        const div3 = document.createElement('div');
        div3.classList.add('flex-mobile')
        div2.appendChild(div3)

        const h1 = document.createElement('h1');
        h1.innerHTML = `${card.timeframes.weekly.current}hrs`;
        h1.classList.add(`${title}-current`);
        div3.appendChild(h1)
        const p = document.createElement('p');
        p.classList.add(`${title}-previous`)
        p.innerHTML = `Last Week - ${card.timeframes.weekly.previous}hrs`;
        div3.appendChild(p)

        div1.appendChild(div2)
        cardContainer.appendChild(div1)
        // console.log(div1);
    }
}