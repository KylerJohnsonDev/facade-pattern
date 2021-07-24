import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Book } from "../models/book";
import { map } from 'rxjs/operators';
import { mapToArrayOfValues } from "../utils/map-to-array";

const buildInitialBooksState = () => {
  const book1 = new Book('The Phoenix Project', 'Gene Kim, Kevin Behr, and George Spafford', 'Professional Development', 25);
  const book2 = new Book('The Lost Symbol', 'Dan Brown', 'Mystery', 25);

  const books = new Map<string, Book>();
  books.set(book1.id, book1);
  books.set(book2.id, book2);
  return books;
}

@Injectable({
  providedIn: 'root'
})
export class BooksStore {

  private _books$ = new BehaviorSubject<Map<string, Book>>(buildInitialBooksState());
  public books$: Observable<Book[]> = this._books$.asObservable().pipe(map(mapToArrayOfValues));

  addBook(book: Book) {
    const booksMapCopy = new Map(this._books$.value)
      .set(book.id, book);
    this._books$.next(booksMapCopy);
  }

  updateBook(updatedBook: Book) {
    const booksMapCopy = new Map(this._books$.value)
      .set(updatedBook.id, updatedBook);
    this._books$.next(booksMapCopy);
  }

  deleteBook(id: string) {
    const booksMapCopy = new Map(this._books$.value);
    booksMapCopy.delete(id);
    this._books$.next(booksMapCopy);
  }

}
