import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselResenaLibrosComponent } from './carrusel-resena-libros.component';

describe('CarruselResenaLibrosComponent', () => {
  let component: CarruselResenaLibrosComponent;
  let fixture: ComponentFixture<CarruselResenaLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselResenaLibrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarruselResenaLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
