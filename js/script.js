"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMoviesDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ""),
      b = prompt("На сколько вы оцните его?", ""),
      c = prompt('Один из последних просмотренных фильмов', ""),
      d = prompt("На сколько вы оцните его?", "");
personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);