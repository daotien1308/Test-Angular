import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailAuthorService } from './detail-author.service';



@Component({
  selector: 'app-return',
  templateUrl: './detail-author.component.html',
  styleUrls: ['./detail-author.component.scss'],
  providers: [ DetailAuthorService ]
})
export class DetailAuthorComponent implements OnInit {

  constructor(private http: HttpClient, private work: DetailAuthorService, private router: Router, 
    private activatedroute :  ActivatedRoute) { }

  
  isVisible = false;
  p: number = 1;
  author!: AuthorDetail;
  time!: CreatedTime;
  id = '';
  
  ngOnInit(): void {
    this.id =this.activatedroute.snapshot.paramMap.get('id') ?? '';
    this.getAuthorDetail();
    
    console.log(this.id);
    // console.log(AuthorDetail)
  }

  getAuthorDetail(){
    this.work.getAuthor(this.id)
    .subscribe((res : AuthorDetail) => {
      this.author = res;
      this.time = res.created;
      console.log(this.author);
    })
  }



  tach(str :string | undefined) {
    if(str === undefined){
      return 
    }
    else{
      return str.split('/')[2];
    }
    
  }


  // btnClick(): void {
  //   this.router.navigateByUrl('/author');
  // }
  
  // showModal(): void{
  //   this.isVisible = true;
  // }
  
  // handleOk(): void{
  //   console.log('Button ok clicked!');
  //   this.isVisible = false;
  // }
}

export class AuthorWorks { 
  links: LinkStyle;
  size: number;
  entries: WorksEntry[];


  constructor(links: any, size: number, entries: WorksEntry[]){
      this.links=links;
      this.size=size;
      this.entries=entries;
  }
}

export class Links{
  self: string;
  author: string;
  next: string;

  constructor(self: string, author: string, next: string){
      this.self=self;
      this.author=author;
      this.next=next;
  }
}

export class WorksEntry{
  type: string;
  title: string;
  subjects: string[]; //chuyen nganh tac pham
  subject_people: string[];
  authors: Author[];
  key: string;
  latest_revision: number;
  revision: number;
  created: CreatedTime;
  last_modified: CreatedTime;


  constructor(type: string, title: string, subjects: string[], subject_people: string[], authors: Author[], key: string, latest_revision: number, revision: number, created: CreatedTime, last_mdified: CreatedTime){
      this.type=type;
      this.title=title;
      this.subjects=subjects;
      this.subject_people=subject_people;
      this.authors=authors;
      this.key=key;
      this.latest_revision=latest_revision;
      this.revision=revision;
      this.created=created;
      this.last_modified=last_mdified;
  }
}

export class Author {
  type: { key : string};
  author: { key : string};


  constructor(type: { key: string; }, author: { key: string; }){
      this.type=type;
      this.author=author;
  }
}

export class AuthorDetail{
  name: string;
  personal_name: string;
  death_date: string;
  alternate_names: string[];
  created: CreatedTime;
  last_modified: CreatedTime;
  latest_revision: number;
  key: string;
  birth_date: string;
  revision: number;
  type: string;


  constructor(name: string, personal_name: string, death_date: string, alternate_names: string[], created: CreatedTime, last_modified: CreatedTime, latest_revision: number, key: string, birth_date: string, revision: number, type: string) {
      this.name=name;
      this.personal_name=personal_name;
      this.death_date=death_date;
      this.alternate_names=alternate_names;
      this.created=created;
      this.last_modified=last_modified;
      this.latest_revision=latest_revision;
      this.key=key;
      this.birth_date=birth_date;
      this.revision=revision;
      this.type=type;
  }
}

export class CreatedTime{
  type: string;
  value: Date;

  constructor(type: string, value: Date) {
      this.type=type;
      this.value=value;
  }
}
