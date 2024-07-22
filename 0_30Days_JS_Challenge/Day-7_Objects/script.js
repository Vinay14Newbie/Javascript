// Objects

// Object creation and access
const book = {
    title : "Atomic Habits",
    author : "James Clear",
    year : 2018,
    getInfo : function(){
        return [this.title, this.author]
    },
    updateYear : function(){
        this.year = 2020
    }
}
console.log(book);
console.log("title of the book : "+book.title+" & author of it : "+book.author);



// Object Methods
console.log(book.getInfo());  //throug method
// updated year through the method
book.updateYear()
console.log(book.year);  //2020



// Nested objects
const library = {
    name : "Rober Greene",
    books : {
        book1 : "the 48 laws of power",
        book2 : "the laws of human nature"
    }
}
console.log(library.books);



// 'this' keyword
// Add a method to the book object that uses the 'this' keyowrd to return a string with the book's title and year, and log the result of calling this method



// Object iteration
for (const key in book) {
    const element = book[key];
    console.log(key+" => "+element);
}
console.log(Object.keys(book));
console.log(Object.values(book));