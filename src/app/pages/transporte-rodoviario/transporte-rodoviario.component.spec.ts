import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteRodoviarioComponent } from './transporte-rodoviario.component';

describe('TransporteRodoviarioComponent', () => {
  let component: TransporteRodoviarioComponent;
  let fixture: ComponentFixture<TransporteRodoviarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransporteRodoviarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransporteRodoviarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
