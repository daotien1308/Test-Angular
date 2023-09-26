

import { Injectable, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthorSearch, DocAboutAuthor } from "./author-search.component";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
@Injectable()
export class AuthorSearchService{
    constructor(private http: HttpClient){}

    offset: number = 0;
    limit: number = 50;

    getName( authorName: string) : Observable<AuthorSearch>{
        //let params = `&limit=${10}&offset=${1}`
        const url='https://openlibrary.org/search/authors.json?q=' + authorName ;
        return this.http.get<AuthorSearch>(url);
    }
    getAuthorDetails(key: string): Observable<DocAboutAuthor> {
        return this.http
          .get<DocAboutAuthor>(`https://openlibrary.org//authors/${key}.json`)
          .pipe();
      }
}