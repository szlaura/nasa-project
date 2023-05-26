import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAsteroidComponent } from './add-asteroid.component';

describe('AddAsteroidComponent', () => {
  let component: AddAsteroidComponent;
  let fixture: ComponentFixture<AddAsteroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAsteroidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAsteroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
