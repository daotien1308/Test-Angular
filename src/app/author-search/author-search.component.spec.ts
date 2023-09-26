import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsearchComponent } from './author-search.component';

describe('AuthorSearchComponent', () => {
  let component: AuthorsearchComponent;
  let fixture: ComponentFixture<AuthorsearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsearchComponent]
    });
    fixture = TestBed.createComponent(AuthorsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
