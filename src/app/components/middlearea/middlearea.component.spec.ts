import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleareaComponent } from './middlearea.component';

describe('MiddleareaComponent', () => {
  let component: MiddleareaComponent;
  let fixture: ComponentFixture<MiddleareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
