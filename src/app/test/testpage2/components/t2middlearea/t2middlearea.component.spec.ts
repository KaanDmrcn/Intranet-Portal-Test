import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2middleareaComponent } from './t2middlearea.component';

describe('T2middleareaComponent', () => {
  let component: T2middleareaComponent;
  let fixture: ComponentFixture<T2middleareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2middleareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T2middleareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
