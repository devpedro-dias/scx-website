import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreteMaritimoComponent } from './frete-maritimo.component';

describe('FreteMaritimoComponent', () => {
  let component: FreteMaritimoComponent;
  let fixture: ComponentFixture<FreteMaritimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreteMaritimoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreteMaritimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
