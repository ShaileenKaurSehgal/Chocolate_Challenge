import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  Chocolate,
  OverviewChocolateComponent,
} from './overview-chocolate.component';
import { ChocolateDataService } from 'src/app/chocolate-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('OverviewChocolateComponent', () => {
  let component: OverviewChocolateComponent;
  let fixture: ComponentFixture<OverviewChocolateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewChocolateComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule],
      providers: [ChocolateDataService],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewChocolateComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize chocolate data', () => {
    component.ngOnInit();
    expect(component.allChocolates).toBeDefined();
    expect(component.allUpdatedData).toBeDefined();
  });
});
