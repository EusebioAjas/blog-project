import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestRankedMoviesComponent } from './latest-ranked-movies.component';

describe('LatestRankedMoviesComponent', () => {
  let component: LatestRankedMoviesComponent;
  let fixture: ComponentFixture<LatestRankedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestRankedMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestRankedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
