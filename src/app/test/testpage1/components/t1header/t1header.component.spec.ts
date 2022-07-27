import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1headerComponent } from './t1header.component';

describe('T1headerComponent', () => {
  let component: T1headerComponent;
  let fixture: ComponentFixture<T1headerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1headerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
