import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChocolateComponent } from './details-chocolate.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChocolateDataService } from 'src/app/chocolate-data.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('DetailsChocolateComponent', () => {
  let component: DetailsChocolateComponent;
  let fixture: ComponentFixture<DetailsChocolateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsChocolateComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule, FormsModule],
      providers: [
        ChocolateDataService,
        { provide: ActivatedRoute, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsChocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
