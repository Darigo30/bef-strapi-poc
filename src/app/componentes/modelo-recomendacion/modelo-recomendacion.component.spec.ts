import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloRecomendacionComponent } from './modelo-recomendacion.component';

describe('ModeloRecomendacionComponent', () => {
  let component: ModeloRecomendacionComponent;
  let fixture: ComponentFixture<ModeloRecomendacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloRecomendacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModeloRecomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
