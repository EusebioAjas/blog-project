import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularMoviewsComponent } from './popular-moviews.component';

describe('PopularMoviewsComponent', () => {
  let component: PopularMoviewsComponent;
  let fixture: ComponentFixture<PopularMoviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularMoviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularMoviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
