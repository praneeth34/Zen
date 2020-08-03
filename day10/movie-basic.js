class movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getPG() {
    let newArr = arrMov.filter((mov) => (mov.rating = "PG"));
    return newArr;
  }
}

//will take default value of rating as PG if not specified and print filmName
filmName = new movie("Avatar", "Universal");
console.log(filmName);

//this will create a new instance with movie casino royale and rating PG-13
filmName1 = new movie("Casino Royale", "Eon Production", "PG-13");
console.log(filmName1);

//will print all the names with rating PG
arrMov = [
  { title: "Avatar", studio: "Universal", rating: "PG" },
  { title: "Avengers", studio: "Marvel", rating: "PG-13" },
  { title: "American-Pie", studio: "Universal", rating: "R" },
  { title: "Hangover", studio: "Universal", rating: "PG" },
  { title: "Titanic", studio: "Universal", rating: "PG" },
];
films = new movie(arrMov);
console.log(films.getPG());
