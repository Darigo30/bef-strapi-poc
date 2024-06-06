import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselLibrosComponent } from './carrusel-libros.component';

describe('CarruselLibrosComponent', () => {
  let component: CarruselLibrosComponent;
  let fixture: ComponentFixture<CarruselLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselLibrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
