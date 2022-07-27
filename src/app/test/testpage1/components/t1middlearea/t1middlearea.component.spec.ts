import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1middleareaComponent } from './t1middlearea.component';

describe('T1middleareaComponent', () => {
  let component: T1middleareaComponent;
  let fixture: ComponentFixture<T1middleareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1middleareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1middleareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
