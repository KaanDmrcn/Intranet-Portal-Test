import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2headerComponent } from './t2header.component';

describe('T2headerComponent', () => {
  let component: T2headerComponent;
  let fixture: ComponentFixture<T2headerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2headerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T2headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
