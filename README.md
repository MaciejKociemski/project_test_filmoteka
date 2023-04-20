# project_test_filmoteka




const selectedMovie =
        `<img class="modal__img" src="${imgUrl}${movie.poster_path}"></img>
        <h2 class="modal__title">${movie.title}</h2>
        <div class="modal__info-wrapper">
            <ul class="modal__info">
                <li class="modal__info modal__info--key">Vote / Votes</li>
                <li class="modal__info modal__info--key">Popularity</li>
                <li class="modal__info modal__info--key">Original Title</li>
                <li class="modal__info modal__info--key">Genre</li>
            </ul>
            <ul class="modal__info">
                <li class="modal__info modal__info--number">${movie.vote_average.toFixed(1)} / ${movie.vote_count}</li>
                <li class="modal__info modal__info--number">${movie.popularity.toFixed(1)}</li>
                <li class="modal__info modal__info--value">${movie.original_title}</li>
                <li class="modal__info modal__info--value">${movie.genres.map(genre => genre.name).join(', ')}</li>
            </ul>
        </div>
            <div class="modal__overview">
                <p class="modal__overview--about">about</p>
                <p>${movie.overview}</p>
            </div>`

            