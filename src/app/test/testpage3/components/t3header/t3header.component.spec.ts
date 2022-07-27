import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3headerComponent } from './t3header.component';

describe('T3headerComponent', () => {
  let component: T3headerComponent;
  let fixture: ComponentFixture<T3headerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3headerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
