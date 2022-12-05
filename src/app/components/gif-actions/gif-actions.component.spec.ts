import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifActionsComponent } from './gif-actions.component';

describe('GifActionsComponent', () => {
  let component: GifActionsComponent;
  let fixture: ComponentFixture<GifActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
