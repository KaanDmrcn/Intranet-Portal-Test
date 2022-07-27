import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T2footerComponent } from './t2footer.component';

describe('T2footerComponent', () => {
  let component: T2footerComponent;
  let fixture: ComponentFixture<T2footerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T2footerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T2footerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
