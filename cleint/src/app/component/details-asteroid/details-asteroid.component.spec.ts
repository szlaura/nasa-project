import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAsteroidComponent } from './details-asteroid.component';

describe('DetailsAsteroidComponent', () => {
  let component: DetailsAsteroidComponent;
  let fixture: ComponentFixture<DetailsAsteroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAsteroidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAsteroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
