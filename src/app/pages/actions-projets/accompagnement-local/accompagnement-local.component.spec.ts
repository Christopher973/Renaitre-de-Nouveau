import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompagnementLocalComponent } from './accompagnement-local.component';

describe('AccompagnementLocalComponent', () => {
  let component: AccompagnementLocalComponent;
  let fixture: ComponentFixture<AccompagnementLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccompagnementLocalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccompagnementLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
