
const fontSize = Array.from(document.querySelectorAll('a.font-size'));
console.log(fontSize);

function changeText(event) {
    console.log('555', event);
    'font-size_active'
    fontSize.forEach( (item) => {
        item.classList.remove('font-size_active');
    });
    event.target.classList.add('font-size_active');
    console.log( event.target.getAttribute('data-size'));
    
    const book = event.target.closest('div.book');
    console.log(book);

    switch(event.target.getAttribute('data-size')) {
        case 'big':
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
          break;
        case 'small':
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
          break;
        default:
            book.classList.remove('book_fs-big');
            book.classList.remove('book_fs-small');
    };

    console.log(book);
    event.preventDefault();
}

fontSize.forEach( (item) => {
    item.addEventListener('click', changeText);
});

