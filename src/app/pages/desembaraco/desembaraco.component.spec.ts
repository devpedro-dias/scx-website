import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesembaracoComponent } from './desembaraco.component';

describe('DesembaracoComponent', () => {
  let component: DesembaracoComponent;
  let fixture: ComponentFixture<DesembaracoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesembaracoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesembaracoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
