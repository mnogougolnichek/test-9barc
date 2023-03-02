import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { searchBooks, selectBooks, clearBooks, IBooks } from './booksSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

function BooksDetails() {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectBooks);
  const { isbn } = useParams();
  useEffect(() => {
    dispatch(searchBooks(isbn ? isbn : ''));
    return () => {
      dispatch(clearBooks());
    };
  }, [isbn]);
  return (
    <Container>
      <Row>
        <Col xs={12}>
          {books.map((book: IBooks) => (
            <Card key={book?.title} style={{ width: '18rem' }}>
              <Card.Img
                className={'book-img'}
                variant="top"
                src={`https://covers.openlibrary.org/b/isbn/${
                  book?.isbn ? book?.isbn[0] : ''
                }-M.jpg`}
              />
              <Card.Body>
                <Card.Title>{book?.title}</Card.Title>
                <Card.Text>
                  <span>
                    <b>Author</b>
                  </span>
                  <br />
                  <span>{book.author_name?.toString()}</span>
                  <br />
                  <span>
                    <b>Publish date</b>
                  </span>
                  <br />
                  <span>{book.publish_date?.toString()}</span>
                  <br />
                  <span>
                    <b>Subject</b>
                  </span>
                  <br />
                  <span>{book.subject?.toString()}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default BooksDetails;
