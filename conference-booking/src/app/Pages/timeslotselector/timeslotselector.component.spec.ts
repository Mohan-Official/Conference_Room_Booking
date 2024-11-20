import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeslotselectorComponent } from './timeslotselector.component';

describe('TimeslotselectorComponent', () => {
  let component: TimeslotselectorComponent;
  let fixture: ComponentFixture<TimeslotselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeslotselectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeslotselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
