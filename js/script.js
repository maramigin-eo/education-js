'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов всего вы посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов всего вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}; 


function rememberMyFilms () {
    
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt ('На сколько оценили его?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
         console.log('error');
         i--;
        }
    }

}

rememberMyFilms();


function detectMyPersonalLevel () {
    if (personalMovieDB.count < 10 ) {
        console.log('Просмотрено мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count == 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
    
}


detectMyPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
} 

showMyDB(personalMovieDB.private);

function writeYourGenres () {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();