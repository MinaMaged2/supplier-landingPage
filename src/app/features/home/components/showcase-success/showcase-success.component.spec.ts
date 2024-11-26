import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseSuccessComponent } from './showcase-success.component';

describe('ShowcaseSuccessComponent', () => {
  let component: ShowcaseSuccessComponent;
  let fixture: ComponentFixture<ShowcaseSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowcaseSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
