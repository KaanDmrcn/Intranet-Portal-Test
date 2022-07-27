import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2menuComponent } from './t2menu.component';

describe('T2menuComponent', () => {
  let component: T2menuComponent;
  let fixture: ComponentFixture<T2menuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2menuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T2menuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
