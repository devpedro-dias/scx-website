import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroCargaComponent } from './seguro-carga.component';

describe('SeguroCargaComponent', () => {
  let component: SeguroCargaComponent;
  let fixture: ComponentFixture<SeguroCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguroCargaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeguroCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
