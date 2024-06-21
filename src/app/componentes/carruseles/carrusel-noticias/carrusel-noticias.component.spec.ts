import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselNoticiasComponent } from './carrusel-noticias.component';

describe('CarruselNoticiasComponent', () => {
  let component: CarruselNoticiasComponent;
  let fixture: ComponentFixture<CarruselNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselNoticiasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
