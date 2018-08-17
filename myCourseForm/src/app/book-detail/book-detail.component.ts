import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Book } from '../book/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  error: any;
  sub: any;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.paramMap.switchMap((params: ParamMap) =>
      this.bookService.getBook(+params.get('id')))
      .subscribe((book: Book) => this.book = book);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}