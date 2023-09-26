import { Injectable } from "@angular/core";
import { AuthorDetail } from "./detail-author.component";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
// import { CreatedTime } from "./return.component";

@Injectable()

export class DetailAuthorService{
    constructor(private http: HttpClient){}
    getAuthor(key: string): Observable<AuthorDetail>{
        const url = 'https://openlibrary.org/authors/'+ key + '.json';
        return this.http.get<AuthorDetail>(url);
    }


}