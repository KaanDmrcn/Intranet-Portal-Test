import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T1footerComponent } from './t1footer.component';

describe('T1footerComponent', () => {
  let component: T1footerComponent;
  let fixture: ComponentFixture<T1footerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T1footerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T1footerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
