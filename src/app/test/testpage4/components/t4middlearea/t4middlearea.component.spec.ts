import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T4middleareaComponent } from './t4middlearea.component';

describe('T4middleareaComponent', () => {
  let component: T4middleareaComponent;
  let fixture: ComponentFixture<T4middleareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T4middleareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T4middleareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
