import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T4headerComponent } from './t4header.component';

describe('T4headerComponent', () => {
  let component: T4headerComponent;
  let fixture: ComponentFixture<T4headerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T4headerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T4headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
