import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T4footerComponent } from './t4footer.component';

describe('T4footerComponent', () => {
  let component: T4footerComponent;
  let fixture: ComponentFixture<T4footerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T4footerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T4footerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
