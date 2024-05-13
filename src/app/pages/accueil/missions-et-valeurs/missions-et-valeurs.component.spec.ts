import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionsEtValeursComponent } from './missions-et-valeurs.component';

describe('MissionsEtValeursComponent', () => {
  let component: MissionsEtValeursComponent;
  let fixture: ComponentFixture<MissionsEtValeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MissionsEtValeursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissionsEtValeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
