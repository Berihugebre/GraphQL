import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { getOneBookQuery} from '../queries/queries'

const BookDetails =({bookId})=>{
  const {loading, error, data} = useQuery(getOneBookQuery, {
      variables:{ id: bookId }
  })
 
  if (loading || data === undefined) return <p>Book not selected...</p>;
  if (error) return <p>Error:(</p>
  const displayBookDetails = ()=>{
      const book  = data.book;
      if(book){
          return(
              <div>
                  <h2>{book.name}</h2>
                  <p>{book.genre}</p>
                  <p>{book.author.name}</p>
                  <ul className="other-books">
                      {
                          book.author.books.map((item)=>(
                           <li key={item.id}>{item.name}</li>
                          ))
                      }
                  </ul>
              </div>
          )
      }
  }
    return (
            <div id="book-details">
                {displayBookDetails()}
            </div>
    );
}

export default BookDetails;
