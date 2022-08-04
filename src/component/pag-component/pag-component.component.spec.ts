import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagComponentComponent } from './pag-component.component';

describe('PagComponentComponent', () => {
  let component: PagComponentComponent;
  let fixture: ComponentFixture<PagComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
