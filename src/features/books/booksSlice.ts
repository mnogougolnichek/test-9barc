import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchBooks } from './booksAPI';

export const searchBooks = createAsyncThunk(
  'books/searchBooks',
  async (query: string, thunkAPI) => {
    const response = await fetchBooks(
      `https://openlibrary.org/search.json?q=${query}&page=1`
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return response?.docs;
  }
);

export interface BooksState {
  books: any;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: BooksState = {
  books: [] as any,
  status: 'idle',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.books = [...action.payload];
      })
      .addCase(searchBooks.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectBooks = (state: RootState) => state.books.books;

export default booksSlice.reducer;
