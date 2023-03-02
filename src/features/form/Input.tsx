import React, { KeyboardEvent } from 'react';
import { ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';

export type IProps = {
  onChange: (event: ChangeEvent) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  placeholder?: string;
};

function Input(props: IProps) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control
        name={props.name}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </Form.Group>
  );
}

export default Input;
