import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRankedMoviesComponent } from './most-ranked-movies.component';

describe('MostRankedMoviesComponent', () => {
  let component: MostRankedMoviesComponent;
  let fixture: ComponentFixture<MostRankedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostRankedMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRankedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
