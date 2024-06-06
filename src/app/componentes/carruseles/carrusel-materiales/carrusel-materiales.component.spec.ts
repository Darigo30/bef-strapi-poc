import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselMaterialesComponent } from './carrusel-materiales.component';

describe('CarruselMaterialesComponent', () => {
  let component: CarruselMaterialesComponent;
  let fixture: ComponentFixture<CarruselMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselMaterialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
