import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListconferenecComponent } from './listconferenec.component';

describe('ListconferenecComponent', () => {
  let component: ListconferenecComponent;
  let fixture: ComponentFixture<ListconferenecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListconferenecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListconferenecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
