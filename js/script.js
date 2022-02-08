let numberOfFilms = +prompt("Скільки фільмів ви уже подивились?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

 if (personalMovieDB.count < 10) {
    alert("Ви переглянули досить мало фільмів");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Ви класичний глядач");
} else if (personalMovieDB.count >= 30) {
    alert("Ви кіноман");
} else {
    alert("Виникла помилка :-(");
}


 for(let i = 0; i < 2; i++) {

    let firstQuestion = prompt("Один із останніх переглянутих фільмів?", "");
    let secondQuestion = +prompt("На скільки оціните його?", "");

    if (firstQuestion != null && secondQuestion != null && firstQuestion != '' && secondQuestion != '' && firstQuestion.length < 50) {
        personalMovieDB.movies[firstQuestion] = secondQuestion;
    } else { 
        i--;
    }

};

console.log(personalMovieDB);

