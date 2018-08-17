import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Book } from '../app/book/book';

@Injectable()
export class BookService {

  private booksUrl = './assets/JSON/books.json';

  constructor(private http: Http) { }

  getBooks(): Observable<Book[]> {
    return this.http.get(this.booksUrl)
      .map((response: Response) => <Book[]>response.json())
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getBook(id:number) : Observable<Book>
  {
    return this.getBooks().map(books => books.filter(book => book.id === id)[0]);
  }

  private handleError(error: any) {

    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}