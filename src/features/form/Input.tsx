import React, { KeyboardEvent } from 'react';
import { ChangeEvent } from 'react';

export type IProps = {
  onChange: (event: ChangeEvent) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  placeholder?: string;
};

function Input(props: IProps) {
  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2"></span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder={props.placeholder}
          type="text"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
        />
      </label>
    </div>
  );
}

export default Input;
