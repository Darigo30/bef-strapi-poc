import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasRelacionadasComponent } from './noticias-relacionadas.component';

describe('NoticiasRelacionadasComponent', () => {
  let component: NoticiasRelacionadasComponent;
  let fixture: ComponentFixture<NoticiasRelacionadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasRelacionadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiasRelacionadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
