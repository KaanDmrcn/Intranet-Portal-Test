import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T3footerComponent } from './t3footer.component';

describe('T3footerComponent', () => {
  let component: T3footerComponent;
  let fixture: ComponentFixture<T3footerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T3footerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T3footerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
