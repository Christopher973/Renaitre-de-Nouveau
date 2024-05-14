import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneInterventionComponent } from './zone-intervention.component';

describe('ZoneInterventionComponent', () => {
  let component: ZoneInterventionComponent;
  let fixture: ComponentFixture<ZoneInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoneInterventionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
