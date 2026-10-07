import { useState } from 'react'
import '../index.css'


function BookShelf() {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ])
    const [newBook, setNewBook] = useState({ title: '', author: '' })

    function handleInputChange(e){
        setNewBook({
            ...newBook,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        setBooks([...books, newBook])
        setNewBook({ title: '', author: '' })
    }


    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit} >
                        
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" placeholder='Title' value={newBook.title} onChange={handleInputChange} />
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" placeholder='Author' value={newBook.author} onChange={handleInputChange} />
                        <button type='submit'>Add Book</button>
                    </form>
                </div>
                <div className="bookCardsDiv">
                    {
                        books.map((book) => {
                            return (
                                <div key={book.title} className="bookCard">
                                    <h3>Title: {book.title}</h3>
                                    <p>Author: {book.author}</p>
                                </div>
                            )
                        })
                    }</div>
            </div>

        </>
    )

}

export default BookShelf