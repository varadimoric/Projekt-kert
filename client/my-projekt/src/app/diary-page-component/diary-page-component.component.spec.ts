import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryPageComponentComponent } from './diary-page-component.component';

describe('DiaryPageComponentComponent', () => {
  let component: DiaryPageComponentComponent;
  let fixture: ComponentFixture<DiaryPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaryPageComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaryPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
