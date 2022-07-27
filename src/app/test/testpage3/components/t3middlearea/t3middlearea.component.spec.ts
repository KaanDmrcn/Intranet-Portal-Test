import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3middleareaComponent } from './t3middlearea.component';

describe('T3middleareaComponent', () => {
  let component: T3middleareaComponent;
  let fixture: ComponentFixture<T3middleareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3middleareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3middleareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
