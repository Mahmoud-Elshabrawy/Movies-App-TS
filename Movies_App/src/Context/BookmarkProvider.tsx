import { createContext, ReactNode, useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export const BookmarkContext = createContext({} as BookmarkOperations)

type Item = {
  id: number;
  title?: string;
  name?: string
  vote_average: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
}
type BookmarkOperations = {
  bookmarks: Item[],
  addToBookmark: (item: Item) => void,
  removeFromBookmark: (item: Item) => void
}

type ChildrenProps = {
  children: ReactNode
}
const BookmarkProvider = ({children}: ChildrenProps) => {

  const [bookmarks, setBookmarks] = useState<Item[]>(() => {
    return JSON.parse(localStorage.getItem('bookmarks') || '[]')
  })

  const addToBookmark = (item: Item) => {
    // check if the item is already exists
    if(bookmarks.includes(item)) {
      Swal.fire({
        title: `${(item.name || item.title)} is already added to Bookmarks`,
        icon: "info",
        draggable: true
      });
    } 
    else {
      // add the id to the bookmarks and update local storage
      Swal.fire({
        title: `${(item.name || item.title)} is added to Bookmarks`,
        icon: "success",
        draggable: true
      });
      setBookmarks((prev) => {
        return [...prev, item]
      })
    }
  }

  const removeFromBookmark = (item: Item) => {
    // this function will be inside only bookmarks page so the id is already exists
    const newBookmarks = bookmarks.filter(x => x.id !== item.id)
    setBookmarks(newBookmarks)
    Swal.fire({
      title: `${(item.name || item.title)} has been removed from Bookmarks`,
      icon: "warning",
      draggable: true
    });

  }

  useEffect(() => {
    // update local storage when bookmarks change
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])
  return (
    <BookmarkContext.Provider value={{bookmarks, addToBookmark, removeFromBookmark}}>
      {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkProvider