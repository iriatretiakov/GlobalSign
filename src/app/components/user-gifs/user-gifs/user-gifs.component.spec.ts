import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGifsComponent } from './user-gifs.component';

describe('UserGifsComponent', () => {
  let component: UserGifsComponent;
  let fixture: ComponentFixture<UserGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
