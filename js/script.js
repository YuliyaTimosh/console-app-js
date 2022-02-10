'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Скільки фільмів ви уже подивились?", "");
    }
    },
    showMyDB: function() {
        if(personalMovieDB.privat == false){
            console.log(personalMovieDB);
        } else {
            console.log("Sorry, the db is privat");
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
    
            let firstQuestion = prompt("Один із останніх переглянутих фільмів?", "");
            let secondQuestion = +prompt("На скільки оціните його?", "");
        
            if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50 && secondQuestion != NaN) {
                personalMovieDB.movies[firstQuestion] = secondQuestion;
            } else { 
                i--;
            }
        
        };
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Ви переглянули досить мало фільмів");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Ви класичний глядач");
        } else if (personalMovieDB.count >= 30) {
            alert("Ви кіноман");
        } else {
            alert("Виникла помилка :-(");
        }
        
    },
    writeYourGenres: function() {
   
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
        }
    } 
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();




