import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDetallesComponent } from './noticias-detalles.component';

describe('NoticiasDetallesComponent', () => {
  let component: NoticiasDetallesComponent;
  let fixture: ComponentFixture<NoticiasDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
