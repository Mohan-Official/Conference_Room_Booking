import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleblockComponent } from './sampleblock.component';

describe('SampleblockComponent', () => {
  let component: SampleblockComponent;
  let fixture: ComponentFixture<SampleblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleblockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
