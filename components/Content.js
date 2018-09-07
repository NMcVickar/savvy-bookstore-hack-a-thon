import Book from "./Book";

export default function Content(bookArray){
    var bookList = '';

    for(let i = 0; i < bookArray.length; i++){
        bookList += Book(bookArray[i]);
    }
    return `    
    <div id="content">
        ${bookList}
    </div>
    `;
}