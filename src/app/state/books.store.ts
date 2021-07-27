import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Book } from "../models/book";
import { map } from 'rxjs/operators';
import { mapToArrayOfValues } from "../utils/map-to-array";
import { objArrayToMap } from "../utils/array-to-map";

@Injectable({
  providedIn: 'root'
})
export class BooksStore {

  private _books$ = new BehaviorSubject<Map<string, Book>>(new Map<string, Book>());
  public books$: Observable<Book[]> = this._books$.asObservable().pipe(map(mapToArrayOfValues));

  setState(books: Book[]) {
    const booksMap = objArrayToMap<Book>('id', books);
    this._books$.next(booksMap);
  }

  addBook(book: Book) {
    const booksMapCopy = new Map(this._books$.value).set(book.id, book);
    this._books$.next(booksMapCopy);
  }

  updateBook(updatedBook: Book) {
    const booksMapCopy = new Map(this._books$.value).set(updatedBook.id, updatedBook);
    this._books$.next(booksMapCopy);
  }

  deleteBook(id: string) {
    const booksMapCopy = new Map(this._books$.value);
    booksMapCopy.delete(id);
    this._books$.next(booksMapCopy);
  }

}
