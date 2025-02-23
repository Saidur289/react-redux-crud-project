import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "../pages/Home";
import BookView from "../features/books/BookView";
import AddBook from "../features/books/AddBook";
import '../App.css'
import ErrorPage from "../pages/ErrorPage";
import EditBook from "../features/books/EditBook";
 
  
export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/show-books',
            element: <BookView></BookView>
        },
        {
            path: '/add-book',
            element: <AddBook></AddBook>
        },
        {
            path: '/edit-book',
            element: <EditBook></EditBook>
        }
      ]
    },
  ]);