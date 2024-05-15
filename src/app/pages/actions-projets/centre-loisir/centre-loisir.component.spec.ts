import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreLoisirComponent } from './centre-loisir.component';

describe('CentreLoisirComponent', () => {
  let component: CentreLoisirComponent;
  let fixture: ComponentFixture<CentreLoisirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentreLoisirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CentreLoisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
