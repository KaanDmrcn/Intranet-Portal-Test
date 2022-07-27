import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3menuComponent } from './t3menu.component';

describe('T3menuComponent', () => {
  let component: T3menuComponent;
  let fixture: ComponentFixture<T3menuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3menuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3menuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
