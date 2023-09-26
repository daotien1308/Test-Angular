import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WorksService } from './detail-book.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss'],
  providers: [WorksService]
})
export class DetailBookComponent implements OnInit {

  constructor(private http: HttpClient, private work: WorksService, private router: Router, 
    private activatedroute :  ActivatedRoute){}

  isVisible = false;

  p: number = 1;
  txtBookKey: string = '';
  authorWorks: WorksEntry[] = [];

  author: any;
  test='';

  id='';

  id2 = '';
  ngOnInit(): void {
    this.id =this.activatedroute.snapshot.paramMap.get('id') ?? '';
    this.getBookDetail();
    
    console.log(this.id);
  }


  getBookDetail(){
    this.work.getBookName(this.id)
    .subscribe((res : AuthorWorks) => {
      this.authorWorks = res.entries;
      console.log(this.authorWorks)
    })
  }


  getAuthorDetail(){
    this.work.getAuthor(this.id)
    .subscribe((res : Author) => {
      this.author = res.author;
      console.log(this.author)
    })
  }

  btnClick(): void {
    this.router.navigateByUrl('/author');
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
  
  tach(str :string){
    
    return str.split('/')[2];
    
  }
  
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