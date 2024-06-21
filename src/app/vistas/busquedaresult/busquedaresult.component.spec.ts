import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaresultComponent } from './busquedaresult.component';

describe('BusquedaresultComponent', () => {
  let component: BusquedaresultComponent;
  let fixture: ComponentFixture<BusquedaresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusquedaresultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusquedaresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
