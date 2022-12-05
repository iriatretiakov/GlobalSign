import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiGifsComponent } from './api-gifs.component';

describe('ApiGifsComponent', () => {
  let component: ApiGifsComponent;
  let fixture: ComponentFixture<ApiGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
