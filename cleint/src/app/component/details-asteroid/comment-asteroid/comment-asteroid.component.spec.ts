import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAsteroidComponent } from './comment-asteroid.component';

describe('CommentAsteroidComponent', () => {
  let component: CommentAsteroidComponent;
  let fixture: ComponentFixture<CommentAsteroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentAsteroidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentAsteroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
