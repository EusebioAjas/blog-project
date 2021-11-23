import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLittleCardComponent } from './movie-little-card.component';

describe('MovieLittleCardComponent', () => {
  let component: MovieLittleCardComponent;
  let fixture: ComponentFixture<MovieLittleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieLittleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLittleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
