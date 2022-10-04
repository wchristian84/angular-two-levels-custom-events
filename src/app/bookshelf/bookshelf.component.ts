import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  @Output() bookName = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getBook(bookTitle: string) {
    this.bookName.emit(bookTitle);
    console.log('bookName: ', bookTitle);
  }

}
