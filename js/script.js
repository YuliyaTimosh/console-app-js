'use strict';

let numberOfFilms;

function start() {

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Скільки фільмів ви уже подивились?", "");
        console.log(numberOfFilms);
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

detectPersonalLevel();

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {

        let firstQuestion = prompt("Один із останніх переглянутих фільмів?", "");
        let secondQuestion = +prompt("На скільки оціните його?", "");
    
        if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
            personalMovieDB.movies[firstQuestion] = secondQuestion;
        } else { 
            i--;
        }
    
    };
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Ви переглянули досить мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Ви класичний глядач");
    } else if (personalMovieDB.count >= 30) {
        alert("Ви кіноман");
    } else {
        alert("Виникла помилка :-(");
    }
    
};

function showMyDB() {
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    } else {
        console.log("Sorry, the db is privat");
    }
}

showMyDB();

function writeYourGenres() {
   
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}

writeYourGenres();

console.log(personalMovieDB);

