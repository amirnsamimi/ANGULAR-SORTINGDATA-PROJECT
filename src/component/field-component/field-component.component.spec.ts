import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldComponentComponent } from './field-component.component';

describe('FieldComponentComponent', () => {
  let component: FieldComponentComponent;
  let fixture: ComponentFixture<FieldComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
