
function addFavourite(event) {
    const animeInfo = event.currentTarget.querySelector('.results__card--img');
    if (event.currentTarget.classList.contains('favourite')) {
        let index = favElements.findIndex(i => i.title === animeInfo.alt);
        favElements.splice(index, 1);
        event.currentTarget.classList.remove('favourite');
    } else {

        const newFavourite = {
            title: animeInfo.alt,
            image_url: animeInfo.src,
        }
        favElements.push(newFavourite);
        event.currentTarget.classList.add('favourite');
    }
    renderFavList(favElements);
}

function renderFavList(favElements) {
    favList.innerHTML = `<h2 class="favourites__title">Favoritos:</h2>`;
    for (let i = 0; i < favElements.length; i++) {
        if (favElements[i].image_url === 'https://cdn.myanimelist.net/images/qm_50.gif?s=e1ff92a46db617cb83bfc1e205aff620') {
            favList.innerHTML +=
                ` 
                <article class="favourites__card js-fav favourite">
                <img
                    src="https://via.placeholder.com/210x295/000000/ffffff/?text=${favElements[i].title}"
                    class="favourites__card--img"
                    alt="${favElements[i].title}"
                />
                <h3 class="favourites__card--title">${favElements[i].title}</h3>
                </article>
                `
                ;

        } else {
            favList.innerHTML +=
                ` 
                <article class="favourites__card js-fav favourite">
                <img
                    src="${favElements[i].image_url}"
                    class="favourites__card--img"
                    alt="${favElements[i].title}"
                />
                <h3 class="favourites__card--title">${favElements[i].title}</h3>
                </article>
                `
                ;
        }
        const favCard = document.querySelectorAll('.js-fav');
        for (const eachFav of favCard) {
            eachFav.addEventListener('click', removeFavourite);
        }

    }
    localStorage.setItem("favs", JSON.stringify(favElements));
}

function removeFavourite(event) {
    const favInfo = event.currentTarget.querySelector('.favourites__card--img');
    let index = favElements.findIndex(i => i.title === favInfo.alt);
    favElements.splice(index, 1);
    event.currentTarget.classList.remove('favourite');
    renderFavList(favElements);
}

favElements = JSON.parse(localStorage.getItem("favs"));
window.onload = renderFavList(favElements);
