import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BooksStore } from 'src/app/state/books.store';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
  // providers: [BooksPageFacadeService],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksPageComponent {

  books$: Observable<Book[]> = this.booksStore.books$;

  constructor(
    private booksStore: BooksStore
  ) { }

  ngOnInit(): void {
  }

}
