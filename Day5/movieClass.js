/* Write a constructor for the class Movie
  String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments
  */

  class Movie{
    constructor(title, studio, rating){
        this.title = title
        this.studio = studio
        this.rating = rating

        // set the class property rating to "PG" as default when no rating is provided
        if (typeof this.rating === 'undefined') {
            this.rating = 'PG';
            }
    }
}

var movie1 = new Movie('Casino Royale', 'Eon Productions', 'PG')
var movie2 = new Movie('PT Sir','Vels Films International', 'PG')
var movie3 = new Movie('The Notebook','New Line Cinema','R')
var movie4 = new Movie('Prince', 'Suresh Productions', 'PG')
var movie5 = new Movie('Mersal', 'Thenandal Studios Limited', 'U/A')

//Write a method getPG, returns a new array of only those movies in the input array with a rating of "PG"
function getPG(){
    let arr = [movie1, movie2, movie3, movie4, movie5]
    for (i=0; i<arr.length; i++) {
       if (arr[i].rating == 'PG'){
        console.log((arr[i].title))
       }
    }
}
getPG()

//Write a code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
var movie5 = new Movie('Casino Royale', 'Eon Productions', 'PG13');
   console.log(movie5);