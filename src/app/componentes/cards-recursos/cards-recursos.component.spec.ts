import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRecursosComponent } from './cards-recursos.component';

describe('CardsRecursosComponent', () => {
  let component: CardsRecursosComponent;
  let fixture: ComponentFixture<CardsRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsRecursosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
