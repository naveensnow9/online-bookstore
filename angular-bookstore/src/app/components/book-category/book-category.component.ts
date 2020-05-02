import { BookService } from './../../services/book.service';
import { BookCategory } from './../../common/book-category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  bookCategories: BookCategory[];
  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this.listBookCategories();
  }

  listBookCategories() {
    this._bookService.getBookCategories().subscribe(
      data => this.bookCategories = data
    );

  }

}
