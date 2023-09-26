import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WorksEntry, AuthorWorks, DetailBookComponent } from "./detail-book.component";
import { Observable } from "rxjs";
import { Author } from "./detail-book.component";


@Injectable()
export class WorksService{
    constructor(private http: HttpClient){}

    getBookName(bookKey: string): Observable<AuthorWorks>{
        const url='https://openlibrary.org/authors/' + bookKey + '/works.json';
        return this.http.get<AuthorWorks>(url);
    }

    getAuthor( author : string): Observable<Author>{
        const url='https://openlibrary.org/authors/' + author + '/works.json';
        return this.http.get<Author>(url);
    }
}