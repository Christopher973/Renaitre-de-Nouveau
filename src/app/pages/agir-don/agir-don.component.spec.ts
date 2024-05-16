import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgirDonComponent } from './agir-don.component';

describe('AgirDonComponent', () => {
  let component: AgirDonComponent;
  let fixture: ComponentFixture<AgirDonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgirDonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgirDonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
