import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChocolateComponent } from './home-chocolate.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeChocolateComponent', () => {
  let component: HomeChocolateComponent;
  let fixture: ComponentFixture<HomeChocolateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeChocolateComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeChocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
