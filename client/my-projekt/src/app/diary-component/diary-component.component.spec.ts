import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryComponentComponent } from './diary-component.component';

describe('DiaryComponentComponent', () => {
  let component: DiaryComponentComponent;
  let fixture: ComponentFixture<DiaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiaryComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
