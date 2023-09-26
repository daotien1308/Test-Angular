import { Component, EventEmitter, OnInit, Output , Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorSearchService } from './author-search.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';
//import { WorksService } from '../works/works.service';
import { debounceTime, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-authorsearch',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.scss'],
  providers: [AuthorSearchService]
})
export class AuthorsearchComponent implements OnInit {

  p: number = 1;
  isVisible = false;
  txtAuthorName= '';
  authorName: any;
  authorKey: any;


  userQuestionUpdate = new Subject<string>();
  constructor(private http: HttpClient, private authorsearch: AuthorSearchService, private router: Router) {
    this.userQuestionUpdate.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(value => {
        this.getData();
      })
   }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.authorsearch.getName(this.txtAuthorName)
    .subscribe(( res : AuthorSearch) => {
      this.authorName = res.docs;
      console.log(AuthorSearch)
    })
  }


  btnClick(): void {
    this.router.navigateByUrl('/book');
  }

  showModal(): void{
    this.isVisible = true;
  }

  handleOk(): void{
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  

}

export class AuthorSearch {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: DocAboutAuthor[];

  constructor(numFound: number, start: number, numFoundExact: boolean, docs: DocAboutAuthor[]){
      this.numFound = numFound;
      this.start=start;
      this.numFoundExact=numFoundExact;
      this.docs=docs;
  }
}

export class DocAboutAuthor{
  key: string;
  type: string;
  name: string;
  alternate_name?: string[];
  birth_date?: string;
  death_date?: string;
  top_work: string;
  work_count: number;
  top_subjects?: string[];
  _verion_: number;



  constructor(key: string, type: string, name: string, alternate_name: string[], birth_date: string, death_date: string, top_work: string, work_count: number, top_subjects: string[], _verion_: number){
      this.key=key;
      this.type=type;
      this.name=name;
      this.alternate_name=alternate_name;
      this.birth_date=birth_date;
      this.death_date=death_date;
      this.top_work=top_work;
      this.work_count=work_count;
      this.top_subjects=top_subjects;
      this._verion_=_verion_;
  }
}
