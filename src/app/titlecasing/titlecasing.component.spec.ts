import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlecasingComponent } from './titlecasing.component';

describe('TitlecasingComponent', () => {
  let component: TitlecasingComponent;
  let fixture: ComponentFixture<TitlecasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlecasingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlecasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
