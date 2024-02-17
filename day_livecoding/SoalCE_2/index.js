let books = [
    { title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy', year: 1997 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', year: 1960 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', year: 1925 },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', year: 1937 },
    // tambahkan buku-buku lain sesuai kebutuhan
];

// Metode 1: Menggunakan perulangan for
for (let i = 0; i < books.length; i++) {
    // console.log(`Genre of ${books[i].title}: ${books[i].genre}`);
    console.log(books[i].title);
}

// Metode 2: Menggunakan forEach
// books.forEach(book => {
//     console.log(`Genre of ${book.title}: ${book.genre}`);
// });