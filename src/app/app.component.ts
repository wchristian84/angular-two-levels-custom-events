import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '';

    receiveBook(book: string) {
      this.title = book;
      console.log('title: ', this.title);
    }
}
