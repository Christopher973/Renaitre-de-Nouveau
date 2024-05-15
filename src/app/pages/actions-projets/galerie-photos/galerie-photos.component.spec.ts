import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriePhotosComponent } from './galerie-photos.component';

describe('GaleriePhotosComponent', () => {
  let component: GaleriePhotosComponent;
  let fixture: ComponentFixture<GaleriePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaleriePhotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaleriePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
