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
    },
})
export const {showBooks} = booksSlice.actions
export default booksSlice.reducer