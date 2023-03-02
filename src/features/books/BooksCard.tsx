import React from 'react';
import { Card } from 'react-bootstrap';

export type IProps = {
  src: string;
  title?: string;
  author?: string[];
};

function BooksCard(props: IProps) {
  return (
    <Card className={'book-card'}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props?.title}</Card.Title>
        <Card.Text>{props?.author?.toString()}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BooksCard;
