let numberOfFilms = +prompt("Скільки фільмів ви уже подивились?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for(let i = 0; i < 2; i++) {
    let firstQuestion = prompt("Один із останніх переглянутих фільмів?", "");
    let secondQuestion = +prompt("На скільки оціните його?", "");
    personalMovieDB.movies[firstQuestion] = secondQuestion;
}


console.log(personalMovieDB);
