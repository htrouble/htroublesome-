var str = "Hello";
var ob = new String("hello");

function book (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

book.prototype.getTitle = function () {
    return `This book is called ${this.title} and wirtten by ${this.title.author} in ${this.year}`

}
 var sherlock = new book ("Sherlock Holmes", "Dr.Waston", "1990") 
 console.log (sherlock.getTitle());
