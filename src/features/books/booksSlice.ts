import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchBooks } from './booksAPI';

export type IBooks = {
  isbn: string;
  title: string;
  author_name: string[];
  publish_date?: string[];
  subject?: string[];
  key?: string;
};

export const searchBooks = createAsyncThunk(
  'books/searchBooks',
  async (query: string, thunkAPI) => {
    const response = await fetchBooks(
      `https://openlibrary.org/search.json?q=${query}`
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return response?.docs;
  }
);

export interface BooksState {
  books: IBooks[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BooksState = {
  books: [] as any,
  status: 'idle',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    clearBooks: (state) => {
      state.books = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.books = action.payload;
      })
      .addCase(searchBooks.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { clearBooks } = booksSlice.actions;

export const selectBooks = (state: RootState) => state.books.books;

export default booksSlice.reducer;
