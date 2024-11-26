import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondeHeaderComponent } from './seconde-header.component';

describe('SecondeHeaderComponent', () => {
  let component: SecondeHeaderComponent;
  let fixture: ComponentFixture<SecondeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondeHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
