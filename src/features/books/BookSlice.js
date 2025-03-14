import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    books: [
        {id: 1, title: 'Love Bangladesh', author: 'Saidur'},
        {id: 2, title: 'Bangladesh', author: 'Riaz'}
    ],

}
export const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            const id = action.payload
            console.log(id);
            state.books = state.books.filter((book) => book.id !== id)

            // state.books.push(action.payload)
        },
        updateBook: (state, action) => {
            const {id, title, author} = action.payload
           const isExists = state.books.filter((book) =>book.id === id)
         
           if(isExists){
           isExists[0].title = title
           isExists[0].author = author
           }
        }
    },
})
export const {showBooks, addBook, deleteBook, updateBook} = booksSlice.actions
export default booksSlice.reducer