import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifsGridComponent } from './gifs-grid.component';

describe('GifsGridComponent', () => {
  let component: GifsGridComponent;
  let fixture: ComponentFixture<GifsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
