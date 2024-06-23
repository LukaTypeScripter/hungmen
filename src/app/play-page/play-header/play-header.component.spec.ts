import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayHeaderComponent } from './play-header.component';

describe('PlayHeaderComponent', () => {
  let component: PlayHeaderComponent;
  let fixture: ComponentFixture<PlayHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
