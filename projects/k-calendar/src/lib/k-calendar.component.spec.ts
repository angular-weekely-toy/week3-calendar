import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KCalendarComponent } from './k-calendar.component';

describe('KCalendarComponent', () => {
  let component: KCalendarComponent;
  let fixture: ComponentFixture<KCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
