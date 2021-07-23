import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BooksStore {

  private _books$ = new BehaviorSubject<unknown>(null);
  public books$ = this._books$.asObservable();

  addBook() {}

  updateBook() {}

  deleteBook() {}

}
