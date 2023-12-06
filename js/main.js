const books = [
    { id: 1, title: "The Great Gatsby", price: 5000, discount:10, pages: 180 },
    { id: 2, title: "To Kill a Mockingbird", price: 6000, discount: 6, pages: 281 },
    { id: 3, title: "1984", price: 7000, discount: 7, pages: 328 },
    { id: 4, title: "The Catcher in the Rye", price: 3500, discount: 5, pages: 224 },
    { id: 5, title: "Pride and Prejudice", price: 4000, discount: 8, pages: 433 },
    { id: 6, title: "Prejudice", price: 2000, discount: 4, pages: 100 },
]

// // ***************************************************
function mapjavascript(){
    let arryOfTitle =[];
for (let i = 0; i < books.length; i++) {
    arryOfTitle.push({title:(i+1)+" "+books[i].title ,rang:i+1})

}
    console.log(arryOfTitle);
}
mapjavascript();
const bookTitles = books.map(book => book.title);
console.log("Task 1:", bookTitles);  
// // *****************************************************
function arrybooksfiltred() {
    let arrayPairePage = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].pages % 2 != '0') {
            arrayPairePage.push(books[i])
        }
    }
    return arrayPairePage;
}
console.log(arrybooksfiltred(5000));;
const booksWithMoreThan200Pages = books.filter((book, index) => book.pages > 200 && index < 3);
console.log("Task 2:", booksWithMoreThan200Pages);

console.log("Task 3:");
books.forEach(book => {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
});

let totalAvecRemise = books.reduce((total, book) => {
    let prixApresRemise = book.price * (1 - book.discount / 100);
    return total + prixApresRemise;
}, 0);

console.log("price after discount :", totalAvecRemise);