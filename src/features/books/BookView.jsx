import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BookSlice";
import { Link } from "react-router-dom";


const BookView = () => {
    const books = useSelector((state) => state.booksReducer.books) || []
    const dispatch = useDispatch()
    const handleDeleteBook = (id) => {
     dispatch(deleteBook(id))
    }
    return (
        <div>
            <h2>List Of Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books && books.map((book, index) =>  {
                            const {id, title, author} = book
                            return(
                                <tr key={index}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{author}</td>
                            <td>
                               <Link to = '/edit-book' state={{id, author, title}}>
                               <button>Edit</button>
                               </Link>
                                <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
                            </td>
                        </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BookView;