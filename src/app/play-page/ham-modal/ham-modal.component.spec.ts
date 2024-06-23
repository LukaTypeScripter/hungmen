import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamModalComponent } from './ham-modal.component';

describe('HamModalComponent', () => {
  let component: HamModalComponent;
  let fixture: ComponentFixture<HamModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HamModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
