import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChocolateDataService } from 'src/app/chocolate-data.service';
import { Chocolate } from '../overview-chocolate/overview-chocolate.component';

@Component({
  selector: 'app-details-chocolate',
  templateUrl: './details-chocolate.component.html',
  styleUrl: './details-chocolate.component.scss',
})
export class DetailsChocolateComponent implements OnInit {
  chocolateData: Chocolate = {
    id: '',
    name: '',
    brand: '',
    lowestPriceDetails: { link: '', pricesPerHundredGram: [] },
    averagePrice: '',
    prices: [],
    nutrition: {
      fat: {
        total: 0,
        saturated: 0,
      },
      carbohydrates: {
        total: 0,
        sugar: 0,
      },
      protein: 0,
      salt: 0,
    },
  };
  chocolateName = '';
  chocolateBrand = '';
  nutritionData: Nutrition[] = [];
  nutritionChartData: NutritionChartData = {
    labels: [],
    datasets: [],
  };
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private chocolateService: ChocolateDataService
  ) {}

  ngOnInit(): void {
    // Getting ID From the route
    const id = this.route.snapshot?.paramMap?.get('chocolateID');
    // Getting Data By ID
    if (id !== null) {
      this.chocolateService.getChocolateDetailsById(id).subscribe({
        next: (res) => {
          this.chocolateData = res;
          // To make name and brand editable using ngModel
          this.chocolateName = this.chocolateData.name;
          this.chocolateBrand = this.chocolateData.brand;
          this.getChartData(this.chocolateData);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.router.navigateByUrl('/overview');
    }
  }

  // Values for Chart
  getChartData(chocolateValue: Chocolate) {
    this.nutritionData = [
      {
        fat: {
          total: chocolateValue.nutrition.fat.total,
          saturated: chocolateValue.nutrition.carbohydrates.total,
        },
        carbohydrates: {
          total: chocolateValue.nutrition.carbohydrates.total,
          sugar: chocolateValue.nutrition.carbohydrates.total,
        },
        protein: chocolateValue.nutrition.protein,
        salt: chocolateValue.nutrition.salt,
      },
    ];
    this.nutritionChartData = {
      // Getting Labels From Object keys
      labels: Object.keys(this.nutritionData[0]),
      // Providing Data Set
      datasets: [
        {
          data: [
            this.nutritionData[0].fat.total,
            this.nutritionData[0].carbohydrates.total,
            this.nutritionData[0].protein,
            this.nutritionData[0].salt,
          ],
          backgroundColor: ['brown', 'blue', 'pink', 'red'],
        },
      ],
    };
  }
}

export interface Nutrition {
  fat: {
    total: number;
    saturated: number;
  };
  carbohydrates: {
    total: number;
    sugar: number;
  };
  protein: number;
  salt: number;
}

export interface NutritionChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
}
