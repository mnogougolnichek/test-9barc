import booksReducer, {
  clearBooks,
  BooksState,
} from './booksSlice';
const booksMock = [
  {
    isbn: 'isbn',
    title: 'title',
    author_name: ['author_name'],
    publish_date: ['publish_date'],
    subject: ['subject'],
    key: 'key',
  },
];
describe('books reducer', () => {
  const initialState: BooksState = {
    books: [],
    status: 'idle',
  };

  const State: BooksState = {
    books: booksMock,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(booksReducer(undefined, { type: 'unknown' })).toEqual({
      books: [],
      status: 'idle',
    });
  });

  it('should clear books', () => {
    const actual = booksReducer(State, clearBooks());
    expect(actual.books).toEqual([]);
  });

  // To be continued :)
});
