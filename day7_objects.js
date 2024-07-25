

// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book = {
    title: "Atomic Habbit",
    author: "johs",
    year: 1990,
    string: function () {
        return `${this.title} ${this.author}`
    },
    updateYear: function (num) {
        return this.year = num
    }
}
console.log(book)

// • Task 2: Access and log the title and author properties of the book object.

console.log(book.title, book.author)

// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

console.log(book.string())
console.log(book.updateYear(2000))


// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. • Task 6: Access and log the name of the library and the titles of all the books in the library.

let library = {
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            year: 1951
        }
    ],

    StrinMethod : function(){
        return `${this.books[0].title} ${this.books[0].year}`
    }
};

console.log(library)

// Activity 4: The this Keyword
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method. 
console.log(library.StrinMethod())

// Activity 5: Object Iteration
// • Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

let book2 = {
    title:"Atomic Habit",
    author:"Josh mark",
    year:2024,
    edition:'3rd'
}

for(item in book2){
    console.log(item)
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

let book2Key = Object.keys(book2)
let book2values = Object.values(book2)

console.log(book2Key)
console.log(book2values)
