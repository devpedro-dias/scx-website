import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoContentComponent } from './contato-content.component';

describe('ContatoContentComponent', () => {
  let component: ContatoContentComponent;
  let fixture: ComponentFixture<ContatoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
