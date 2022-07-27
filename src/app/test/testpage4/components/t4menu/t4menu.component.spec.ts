import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T4menuComponent } from './t4menu.component';

describe('T4menuComponent', () => {
  let component: T4menuComponent;
  let fixture: ComponentFixture<T4menuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T4menuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T4menuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
