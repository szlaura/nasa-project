import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsteroidsComponent } from './list-asteroids.component';

describe('ListAsteroidsComponent', () => {
  let component: ListAsteroidsComponent;
  let fixture: ComponentFixture<ListAsteroidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAsteroidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAsteroidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
