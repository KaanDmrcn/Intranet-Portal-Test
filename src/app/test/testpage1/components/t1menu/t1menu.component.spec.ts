import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1menuComponent } from './t1menu.component';

describe('T1menuComponent', () => {
  let component: T1menuComponent;
  let fixture: ComponentFixture<T1menuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1menuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1menuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
