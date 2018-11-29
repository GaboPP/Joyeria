import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOComponent } from './cart-o.component';

describe('CartOComponent', () => {
  let component: CartOComponent;
  let fixture: ComponentFixture<CartOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
