import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { searchBooks, selectBooks } from './booksSlice';
import Input from '../form/Input';
import BooksCard from './BooksCard';

export default function BooksList() {
  const books = useAppSelector(selectBooks);
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(searchBooks('weird'));
  }, []);
  function handleSearch(event: any) {
    setSearchValue(event?.target.value);
  }
  function handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      dispatch(searchBooks(event?.target.value));
    }
  }

  return (
    <div className="container mx-auto">
      <Input
        value={searchValue}
        name={'search'}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder={'Search for anything...'}
      />
      <div className="grid grid-cols-3 gap-4 ">
        {books.map((i: any, x: number) => (
          <BooksCard
            src={`https://covers.openlibrary.org/b/isbn/${
              i?.isbn && i?.isbn[0]
            }-M.jpg`}
            key={i.isbn && x}
            title={i.title}
            author={i.author_name}
          />
        ))}
      </div>
    </div>
  );
}
