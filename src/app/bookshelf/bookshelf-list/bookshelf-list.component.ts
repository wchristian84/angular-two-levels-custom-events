import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookshelf-list',
  templateUrl: './bookshelf-list.component.html',
  styleUrls: ['./bookshelf-list.component.css']
})
export class BookshelfListComponent implements OnInit {
  books: Array<{title: string, author: string}> =
  [{title: 'This Book Rules', author: 'Johnny Hotbody'},
  {title: 'All Other Books Suck', author: 'Ernesto Jemingway'}]

  constructor() { }
  @Output() clickedBook = new EventEmitter<string>();

  ngOnInit(): void {
  }
  emitClick(bookName: string) {
    this.clickedBook.emit(bookName);
    console.log("emitted book: ", bookName);

  }
}
