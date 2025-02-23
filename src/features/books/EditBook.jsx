import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BookSlice";


const EditBook = () => {
    const location = useLocation()
    console.log(location);
    const [id, setId] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title)
    const [author, setAuthor] = useState(location.state.author)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateBook({id, title, author}))
        navigate('/show-books')
    }
    return (
        <div>
          <h2>EditBook</h2>
          <form onSubmit={handleSubmit}  className="form-field">
            <label htmlFor="title">Title:</label>
            <input type="text"  name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}  />
            <br />
            <label htmlFor="author">Author:</label>
            <input type="text"  name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}  />
            <br />
            <button type="submit">Update Book</button>

           </form>
        </div>
    );
};

export default EditBook;