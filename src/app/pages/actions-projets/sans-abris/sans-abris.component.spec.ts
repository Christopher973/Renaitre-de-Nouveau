import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SansAbrisComponent } from './sans-abris.component';

describe('SansAbrisComponent', () => {
  let component: SansAbrisComponent;
  let fixture: ComponentFixture<SansAbrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SansAbrisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SansAbrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
