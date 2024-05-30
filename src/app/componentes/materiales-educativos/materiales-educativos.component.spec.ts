import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesEducativosComponent } from './materiales-educativos.component';

describe('MaterialesEducativosComponent', () => {
  let component: MaterialesEducativosComponent;
  let fixture: ComponentFixture<MaterialesEducativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialesEducativosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialesEducativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
