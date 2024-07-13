import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteAereoComponent } from './frete-aereo.component';

describe('FreteAereoComponent', () => {
  let component: FreteAereoComponent;
  let fixture: ComponentFixture<FreteAereoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreteAereoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreteAereoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
