import React, { useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery} from '../queries/queries'
import BookDetails from './BookDetails';

const BookList =()=>{
  const {loading, error, data} = useQuery(getBookQuery)
  const [selected, setSelected] = useState('')
  if (loading) return <p>Loading...</p>;
  if (error){ 
      console.log(error)
      return <p>Error:(</p>
    };

    return (
            <div id="book-list">
            <ul>
                {data.books.map((book)=>
                    <li key={book.id} onClick={(e)=>{setSelected(book.id)}}>{book.name}</li>

                )}
            </ul>
               <BookDetails bookId={selected}/>
            </div>
    );
}

export default BookList;
