import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsMaterialesyjuegosComponent } from './cards-materialesyjuegos.component';

describe('CardsMaterialesyjuegosComponent', () => {
  let component: CardsMaterialesyjuegosComponent;
  let fixture: ComponentFixture<CardsMaterialesyjuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsMaterialesyjuegosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsMaterialesyjuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
