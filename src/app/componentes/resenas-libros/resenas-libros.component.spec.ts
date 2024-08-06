import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResenasLibrosComponent } from './resenas-libros.component';

describe('ResenasLibrosComponent', () => {
  let component: ResenasLibrosComponent;
  let fixture: ComponentFixture<ResenasLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResenasLibrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResenasLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
