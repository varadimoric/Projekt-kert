import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantComponentComponent } from './plant-component.component';

describe('PlantComponentComponent', () => {
  let component: PlantComponentComponent;
  let fixture: ComponentFixture<PlantComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
