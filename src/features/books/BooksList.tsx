import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { clearBooks, IBooks, searchBooks, selectBooks } from './booksSlice';
import BooksCard from './BooksCard';
import Input from '../form/Input';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export default function BooksList() {
  const books = useAppSelector(selectBooks);
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch(searchBooks('weird'));
    return () => {
      dispatch(clearBooks());
    };
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
    <Container>
      <Row>
        <Col>
          <Input
            value={searchValue}
            name={'search'}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            placeholder={'Search for anything...'}
          />
        </Col>
      </Row>
      <Row>
        {books.map((i: IBooks) => (
          <Col xs={12} sm={4} key={i.key}>
            <Link to={`/details/${i?.isbn && i?.isbn[0]}`}>
              <BooksCard
                src={`https://covers.openlibrary.org/b/isbn/${
                  i?.isbn && i?.isbn[0]
                }-M.jpg`}
                title={i.title}
                author={i.author_name}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
