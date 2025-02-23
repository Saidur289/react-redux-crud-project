import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BookSlice";
import { useNavigate } from "react-router-dom";


const AddBook = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const numberOfBooks = useSelector((state) => state.bookReducer.books.length)
    const handleSubmit = (e) => {
        e.preventDefault()
        const book = {id: numberOfBooks + 1, title, author}
        console.log(book);
        dispatch(addBook(book))
        navigate('/show-books')


    }
    return (
        <div>
           <h2>Add Book </h2>
           <form  onSubmit={handleSubmit} className="form-field">
            <label htmlFor="title">Title:</label>
            <input type="text"  name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}  />
            <label htmlFor="author">Title:</label>
            <input type="text"  name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}  />
            <button type="submit">Add Book</button>

           </form>
        </div>
    );
};

export default AddBook;