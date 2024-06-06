import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementSolidaireComponent } from './engagement-solidaire.component';

describe('EngagementSolidaireComponent', () => {
  let component: EngagementSolidaireComponent;
  let fixture: ComponentFixture<EngagementSolidaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EngagementSolidaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngagementSolidaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
